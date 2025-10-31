// app/api/contact/route.ts
import { NextResponse } from "next/server";
import {
  sendContactNotification,
  verifyMailerConfig,
  type ContactPayload,
} from "@/lib/mailer";

// کمکی: گرفتن فیلد از آبجکت با اسامی مختلف (Case-insensitive)
function pickField(obj: Record<string, any>, keys: string[]): string | undefined {
  const map = new Map<string, any>();
  for (const k of Object.keys(obj || {})) map.set(k.toLowerCase(), obj[k]);
  for (const key of keys) {
    const v = map.get(key.toLowerCase());
    if (v !== undefined && v !== null) return String(v);
  }
}

async function readBody(req: Request): Promise<Record<string, any>> {
  const ctype = req.headers.get("content-type") || "";
  if (ctype.startsWith("application/json")) {
    try { return await req.json(); } catch { return {}; }
  }
  // پشتیبانی از فرم معمولی (multipart/x-www-form-urlencoded)
  try {
    const fd = await req.formData();
    const obj: Record<string, any> = {};
    fd.forEach((v, k) => (obj[k] = typeof v === "string" ? v : v.name));
    return obj;
  } catch {
    return {};
  }
}

export async function POST(req: Request) {
  try {
    const raw = await readBody(req);

    // تمام نام‌های احتمالی فیلدها (انگلیسی/فارسی)
    const name    = (pickField(raw, ["name","fullname","full_name","نام","اسم"]) || "").trim();
    const email   = (pickField(raw, ["email","mail","ایمیل"]) || "").trim();
    const phone   = (pickField(raw, ["phone","mobile","tel","تلفن","شماره","phoneNumber"]) || "").trim();
    const subject = (pickField(raw, [
      "subject","title","topic","service","type","category","mozoo","موضوع"
    ]) || "").trim();
    const message = (pickField(raw, ["message","text","content","پیام"]) || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "INVALID_INPUT" }, { status: 400 });
    }

    verifyMailerConfig();

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("cf-connecting-ip") ||
      null;
    const ua = req.headers.get("user-agent");

    const payload: ContactPayload = {
      name,
      email,
      phone,
      subject, // اگر خالی باشد در ایمیل «—» نشان داده می‌شود
      message,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ip,
      userAgent: ua,
    };

    // 1) ارسال ایمیل
    await sendContactNotification(payload);

    // 2) ذخیره‌سازی اختیاری
    let stored = false;
    try {
      // مثال: await contactStore.save(payload);
      stored = true;
    } catch (e) {
      console.error("CONTACT_STORE_FAILED", e);
    }

    return NextResponse.json({ ok: true, stored });
  } catch (e) {
    console.error("CONTACT_EMAIL_DELIVERY_FAILED", e);
    return NextResponse.json({ ok: false, error: "EMAIL_FAILED" }, { status: 500 });
  }
}
