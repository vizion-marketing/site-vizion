import { NextResponse } from "next/server";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  honeypot?: string;
  turnstileToken?: string;
}

// HTML escaping function to prevent XSS attacks
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Sanitize name fields: strip newlines and control characters (prevents email header injection)
function sanitizeName(name: string): string {
  return name.replace(/[\r\n\t\x00-\x1f]/g, '').trim();
}

// Input length limits
const FIELD_LIMITS = {
  firstName: 100,
  lastName: 100,
  email: 255,
  company: 200,
  subject: 50,
  message: 5000,
};

// Valid subject values (whitelist)
const VALID_SUBJECTS = ["conseil", "saas", "formation", "partenariat", "autre", "projet", "question", "contact-modal"];

// Subject labels for email
const SUBJECT_LABELS: Record<string, string> = {
  conseil: "Conseil Stratégique",
  saas: "Solutions SaaS",
  formation: "Formation",
  partenariat: "Partenariat",
  autre: "Autre",
  projet: "Nouveau Projet",
  question: "Question Générale",
  "contact-modal": "Contact (modale)",
};

// Simple in-memory rate limiting (3 requests per 15 minutes per IP)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 3;

  const record = rateLimitMap.get(ip);

  // Clean up expired records
  if (record && now > record.resetAt) {
    rateLimitMap.delete(ip);
  }

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

// Periodic cleanup of expired rate limit entries (every 5 minutes)
let lastCleanup = Date.now();
function cleanupRateLimitMap() {
  const now = Date.now();
  if (now - lastCleanup < 5 * 60 * 1000) return;
  lastCleanup = now;
  for (const [ip, record] of rateLimitMap) {
    if (now > record.resetAt) {
      rateLimitMap.delete(ip);
    }
  }
}

// Verify Cloudflare Turnstile token
async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    console.error("TURNSTILE_SECRET_KEY not configured");
    return false;
  }

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
        remoteip: ip,
      }),
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  }
}

export async function POST(request: Request) {
  // Periodic cleanup
  cleanupRateLimitMap();

  // Content-Type validation
  const contentType = request.headers.get("content-type");
  if (!contentType?.includes("application/json")) {
    return NextResponse.json(
      { error: "Content-Type doit être application/json" },
      { status: 415 }
    );
  }

  // CSRF Protection - validate origin (strict: reject missing origin)
  const origin = request.headers.get('origin');
  const allowedOrigins = [
    'https://by-vizion.com',
    'https://www.by-vizion.com',
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : null
  ].filter(Boolean) as string[];

  if (!origin || !allowedOrigins.includes(origin)) {
    return NextResponse.json(
      { error: "Origine non autorisée" },
      { status: 403 }
    );
  }

  // Rate limiting check
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Trop de requêtes. Veuillez réessayer dans 15 minutes." },
      { status: 429 }
    );
  }

  try {
    const body: ContactFormData = await request.json();

    // Honeypot check: if filled, silently succeed (bots fill hidden fields)
    if (body.honeypot && body.honeypot.length > 0) {
      return NextResponse.json(
        { success: true, message: "Message envoyé avec succès" },
        { status: 200 }
      );
    }

    // Turnstile CAPTCHA verification
    if (!body.turnstileToken) {
      return NextResponse.json(
        { error: "Vérification captcha requise" },
        { status: 400 }
      );
    }

    const turnstileValid = await verifyTurnstile(body.turnstileToken, ip);
    if (!turnstileValid) {
      return NextResponse.json(
        { error: "Échec de la vérification captcha. Veuillez réessayer." },
        { status: 403 }
      );
    }

    const { firstName, lastName, email, company, subject, message } = body;

    // Required fields check
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    // Type validation
    if (typeof firstName !== "string" || typeof lastName !== "string" ||
        typeof email !== "string" || typeof subject !== "string" ||
        typeof message !== "string") {
      return NextResponse.json(
        { error: "Format de données invalide" },
        { status: 400 }
      );
    }

    // Field length validation
    if (firstName.length > FIELD_LIMITS.firstName) {
      return NextResponse.json(
        { error: `Le prénom ne doit pas dépasser ${FIELD_LIMITS.firstName} caractères` },
        { status: 400 }
      );
    }
    if (lastName.length > FIELD_LIMITS.lastName) {
      return NextResponse.json(
        { error: `Le nom ne doit pas dépasser ${FIELD_LIMITS.lastName} caractères` },
        { status: 400 }
      );
    }
    if (email.length > FIELD_LIMITS.email) {
      return NextResponse.json(
        { error: `L'email ne doit pas dépasser ${FIELD_LIMITS.email} caractères` },
        { status: 400 }
      );
    }
    if (company && typeof company === "string" && company.length > FIELD_LIMITS.company) {
      return NextResponse.json(
        { error: `Le nom d'entreprise ne doit pas dépasser ${FIELD_LIMITS.company} caractères` },
        { status: 400 }
      );
    }
    if (message.length > FIELD_LIMITS.message) {
      return NextResponse.json(
        { error: `Le message ne doit pas dépasser ${FIELD_LIMITS.message} caractères` },
        { status: 400 }
      );
    }
    if (message.length < 10) {
      return NextResponse.json(
        { error: "Le message doit contenir au moins 10 caractères" },
        { status: 400 }
      );
    }

    // Email validation (stricter: min 2-char TLD)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide" },
        { status: 400 }
      );
    }

    // Subject whitelist validation
    if (!VALID_SUBJECTS.includes(subject)) {
      return NextResponse.json(
        { error: "Sujet invalide" },
        { status: 400 }
      );
    }

    const subjectLabel = SUBJECT_LABELS[subject] || subject;

    // Sanitize names to prevent email header injection
    const safeFirstName = sanitizeName(firstName);
    const safeLastName = sanitizeName(lastName);

    // Send email to Vizion team
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY non configurée");
      return NextResponse.json(
        { error: "Service d'envoi temporairement indisponible" },
        { status: 503 }
      );
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Vizion <contact@by-vizion.com>",
      to: ["lucas@by-vizion.com", "hugo@by-vizion.com"],
      replyTo: email,
      subject: `[Contact Site] ${subjectLabel} - ${safeFirstName} ${safeLastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000; border-bottom: 2px solid #D4FD00; padding-bottom: 10px;">
            Nouvelle demande de contact
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Nom complet</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${escapeHtml(safeFirstName)} ${escapeHtml(safeLastName)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <a href="mailto:${escapeHtml(email)}" style="color: #000;">${escapeHtml(email)}</a>
              </td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Entreprise</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${escapeHtml(company)}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Sujet</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${escapeHtml(subjectLabel)}</td>
            </tr>
          </table>

          <h3 style="color: #000; margin-top: 30px;">Message :</h3>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; white-space: pre-wrap;">
${escapeHtml(message)}
          </div>

          <p style="color: #888; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            Ce message a été envoyé depuis le formulaire de contact du site by-vizion.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi du message" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    );
  }
}
