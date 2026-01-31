import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = (body.email || "").trim();

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY non configurée");
      return NextResponse.json(
        { error: "Service non configuré" },
        { status: 500 }
      );
    }

    // Ajouter le contact à l'audience Resend
    // Si RESEND_AUDIENCE_ID est configuré, on ajoute à l'audience
    // Sinon, on envoie un email de notification
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (audienceId) {
      const res = await fetch(
        `https://api.resend.com/audiences/${audienceId}/contacts`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            unsubscribed: false,
          }),
        }
      );

      if (!res.ok) {
        const err = await res.json();
        // 409 = déjà inscrit, on considère comme succès
        if (res.status !== 409) {
          console.error("Resend audience error:", err);
          return NextResponse.json(
            { error: "Erreur lors de l'inscription" },
            { status: 500 }
          );
        }
      }
    } else {
      // Fallback: envoyer un email de notification
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "Vizion <onboarding@resend.dev>",
        to: ["lucas@by-vizion.com"],
        subject: `[Newsletter] Nouvel abonné : ${email}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #000; border-bottom: 2px solid #EEFF41; padding-bottom: 10px;">
              Nouvel abonné newsletter
            </h2>
            <p style="font-size: 16px;">
              <strong>${email}</strong> souhaite recevoir votre newsletter.
            </p>
            <p style="color: #888; font-size: 12px; margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
              Configurez RESEND_AUDIENCE_ID pour ajouter automatiquement les contacts à votre audience Resend.
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json(
      { success: true, message: "Inscription réussie" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    );
  }
}
