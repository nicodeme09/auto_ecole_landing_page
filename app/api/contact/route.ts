import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { nom, ecole, email, telephone, message } = await req.json();

  if (!nom || !ecole || !email) {
    return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Auto École App" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
    replyTo: email,
    subject: `[Démo] ${ecole} — ${nom}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #f97316;">Nouvelle demande de démo</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 140px;">Nom :</td>
            <td style="padding: 8px 0; color: #111827;">${nom}</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Auto-école :</td>
            <td style="padding: 8px 0; color: #111827;">${ecole}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email :</td>
            <td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Téléphone :</td>
            <td style="padding: 8px 0; color: #111827;">${telephone || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 4px 8px 0; font-weight: bold; color: #374151; vertical-align: top;">Message :</td>
            <td style="padding: 8px 0; color: #111827;">${message || "—"}</td>
          </tr>
        </table>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
        <p style="font-size: 12px; color: #9ca3af;">
          Répondre directement à cet email pour contacter ${nom} (${ecole}).
        </p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
