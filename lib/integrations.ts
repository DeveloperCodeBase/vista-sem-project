import nodemailer from "nodemailer";

export async function sendEmail(payload:any){
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_TO } = process.env as any;
  if(!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_TO) return false;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST, port: Number(SMTP_PORT||587), secure: false,
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });
  const info = await transporter.sendMail({
    from: SMTP_FROM || SMTP_USER,
    to: SMTP_TO,
    subject: "New Collaboration Request — Vista",
    text: JSON.stringify(payload, null, 2),
  });
  return !!info.messageId;
}

export async function forwardToSheets(payload:any){
  const url = process.env.SHEETS_WEBHOOK_URL;
  if(!url) return false;
  try{
    await fetch(url, { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(payload)});
    return true;
  }catch{ return false; }
}

export async function forwardToHubSpot(payload:any){
  const portal = process.env.HUBSPOT_PORTAL_ID;
  const form = process.env.HUBSPOT_FORM_GUID;
  if(!portal || !form) return false;
  try{
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portal}/${form}`;
    await fetch(url, { method:"POST", headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ fields: [
        { name: "email", value: payload.email || "" },
        { name: "firstname", value: payload.name || "" },
        { name: "phone", value: payload.phone || "" },
        { name: "message", value: `${payload.project||""} — ${payload.message||""}` },
      ]})
    });
    return true;
  }catch{ return false; }
}
