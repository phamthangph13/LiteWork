import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  need?: string[];
  message?: string;
  company?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const bad = (error: string) =>
  NextResponse.json({ ok: false, error }, { status: 400 });

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return bad("invalid_body");
  }

  if (payload.company?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const phone = (payload.phone ?? "").trim();
  const need = (payload.need ?? []).map((n) => String(n).trim()).filter(Boolean);
  const message = (payload.message ?? "").trim();

  if (name.length < 2 || name.length > 120) return bad("invalid_name");
  if (!EMAIL_RE.test(email) || email.length > 254) return bad("invalid_email");
  if (phone.length > 40) return bad("invalid_phone");
  if (message.length < 10 || message.length > 4000) return bad("invalid_message");

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  if (!smtpUser || !smtpPass) {
    console.error("[contact] SMTP is not configured");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  const rows: Array<[string, string]> = [
    ["Tên", name],
    ["Email", email],
    ...(phone ? ([["Điện thoại", phone]] as Array<[string, string]>) : []),
    ...(need.length ? ([["Nhu cầu", need.join(", ")]] as Array<[string, string]>) : []),
  ];

  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const html = [
    '<div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#1C1B15;max-width:560px">',
    '<h2 style="font-size:18px;margin:0 0 12px">Yêu cầu mới từ website DeepSI</h2>',
    '<table style="border-collapse:collapse;width:100%">',
    ...rows.map(
      ([k, v]) =>
        `<tr><td style="color:#67655B;padding:6px 12px 6px 0;white-space:nowrap;vertical-align:top">${esc(k)}</td><td style="padding:6px 0;font-weight:600">${esc(v)}</td></tr>`,
    ),
    "</table>",
    `<h3 style="font-size:14px;margin:20px 0 6px">Nội dung</h3>`,
    `<p style="white-space:pre-wrap;background:#F4F3ED;border-radius:12px;padding:14px 18px">${esc(message)}</p>`,
    "</div>",
  ].join("");

  const text = [
    "Yêu cầu mới từ website DeepSI:",
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Nội dung:",
    message,
  ].join("");

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"DeepSI Website" <${smtpUser}>`,
      to: smtpUser,
      replyTo: `${name} <${email}>`,
      subject: `[DeepSI] ${name} — trao đổi giải pháp AI`,
      text,
      html,
    });
  } catch (err) {
    console.error("[contact] mail failed", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
