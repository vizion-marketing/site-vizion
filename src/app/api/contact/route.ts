import { NextResponse } from "next/server";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
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

// Simple in-memory rate limiting (3 requests per 15 minutes per IP)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 3; // 3 requests per 15 minutes

  const record = rateLimitMap.get(ip);

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

export async function POST(request: Request) {
  // CSRF Protection - validate origin
  const origin = request.headers.get('origin');
  const allowedOrigins = [
    'https://by-vizion.com',
    'https://www.by-vizion.com',
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : null
  ].filter(Boolean) as string[];

  if (origin && !allowedOrigins.includes(origin)) {
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

    const { firstName, lastName, email, company, subject, message } = body;

    // Validation
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide" },
        { status: 400 }
      );
    }

    // Map subject to readable label
    const subjectLabels: Record<string, string> = {
      conseil: "Conseil Stratégique",
      saas: "Solutions SaaS",
      formation: "Formation",
      partenariat: "Partenariat",
      autre: "Autre",
    };

    const subjectLabel = subjectLabels[subject] || subject;

    // Send email to Vizion team
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY non configurée");
      return NextResponse.json(
        { error: "Service d'envoi non configuré" },
        { status: 500 }
      );
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Vizion <contact@by-vizion.com>",
      to: ["lucas@by-vizion.com"],
      replyTo: email,
      subject: `[Contact Site] ${subjectLabel} - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000; border-bottom: 2px solid #D4FD00; padding-bottom: 10px;">
            Nouvelle demande de contact
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Nom complet</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${escapeHtml(firstName)} ${escapeHtml(lastName)}</td>
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
