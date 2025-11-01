// lib/mailer.ts
import nodemailer from "nodemailer";
import dns from "dns";

try { dns.setDefaultResultOrder?.("ipv4first"); } catch {}

function bool(v?: string) {
  if (!v) return false;
  return ["1","true","yes","on"].includes(v.toLowerCase());
}

function must(v: string | undefined, name: string) {
  if (!v) throw new Error(`${name}_MISSING`);
  return v;
}

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  id?: string;
  createdAt?: string;
  ip?: string | null;
  userAgent?: string | null;
};

function cfg() {
  const host = process.env.EMAIL_HOST || "smtp.gmail.com";
  const port = Number(process.env.EMAIL_PORT || "587");
  const secure = bool(process.env.EMAIL_SECURE) && port === 465; // روی 587 باید false باشد
  const user = must(process.env.EMAIL_USER, "EMAIL_USER");
  const pass = must(process.env.EMAIL_PASS, "EMAIL_PASS");
  const helo = process.env.EMAIL_HELO_DOMAIN || "vista.devcodebase.com";
  const from = process.env.EMAIL_FROM || user;
  const to = process.env.EMAIL_TO || user;

  return { host, port, secure, user, pass, helo, from, to };
}

export function verifyMailerConfig() {
  cfg(); // فقط ولیدیشن
}

const transporter = (() => {
  const c = cfg();
  return nodemailer.createTransport({
    host: c.host,
    port: c.port,               // 587 → STARTTLS
    secure: c.secure,           // برای 587 باید false باشد
    auth: { user: c.user, pass: c.pass },
    name: c.helo,
    requireTLS: true,
    family: 4,
    connectionTimeout: 15000,
    tls: { minVersion: "TLSv1.2" },
  });
})();

function esc(s: unknown) {
  return String(s ?? "")
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function html(payload: ContactPayload, helo: string) {
  const rows = [
    ["Name", esc(payload.name)],
    ["Email", esc(payload.email)],
    ["Phone", esc(payload.phone || "—")],
    ["Subject", esc(payload.subject || "—")],
    ["Created", esc(payload.createdAt || new Date().toISOString())],
    ["ID", esc(payload.id || "—")],
    ["IP", esc(payload.ip || "—")],
    ["User-Agent", esc(payload.userAgent || "—")],
  ];

  const tr = rows.map(([k,v]) =>
    `<tr>
      <td style="padding:8px 12px;font-weight:600;background:#f8fafc;border:1px solid #e5e7eb">${k}</td>
      <td style="padding:8px 12px;border:1px solid #e5e7eb">${v}</td>
    </tr>`).join("");

  return `
  <div style="font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif">
    <h2 style="margin:0 0 12px">New Contact Submission</h2>
    <table style="border-collapse:collapse;border:1px solid #e5e7eb;margin:0 0 12px">${tr}</table>
    <div style="margin-top:8px;font-weight:600">Message:</div>
    <pre style="white-space:pre-wrap;background:#f6f8fa;padding:12px;border:1px solid #e5e7eb;border-radius:8px;margin:6px 0 0">${esc(payload.message)}</pre>
    <div style="color:#6b7280;font-size:12px;margin-top:12px">HELO: ${esc(helo)}</div>
  </div>`;
}

function text(payload: ContactPayload) {
  return [
    `New Contact Submission`,
    `----------------------`,
    `Name:    ${payload.name}`,
    `Email:   ${payload.email}`,
    `Phone:   ${payload.phone || "-"}`,
    `Subject: ${payload.subject || "-"}`,
    `Created: ${payload.createdAt || new Date().toISOString()}`,
    `ID:      ${payload.id || "-"}`,
    `IP:      ${payload.ip || "-"}`,
    ``,
    `Message:`,
    `${payload.message}`,
  ].join("\n");
}

export async function sendContactNotification(payload: ContactPayload) {
  const c = cfg();
  await transporter.verify();
  await transporter.sendMail({
    from: c.from,               // "Vista Smart Network <devcodebase.dev@gmail.com>"
    to: c.to,
    subject: `Contact: ${payload.name}${payload.subject ? " — " + payload.subject : ""}`,
    text: text(payload),
    html: html(payload, c.helo),
    replyTo: `${payload.name} <${payload.email}>`,
  });
}
