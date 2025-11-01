// app/api/v1/contact/route.ts
import { NextResponse, NextRequest } from "next/server";
// اگر alias '@/lib' داری همان را نگه‌دار؛ اگر ارور داد، پایین‌تر «گزینه B» را ببین.
import { sendContactNotification, verifyMailerConfig } from "@/lib/mailer";

// جلوگیری کامل از استاتیک‌سازی این روت:
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";
export const preferredRegion = "auto";

// GET: health-check
export async function GET() {
  return NextResponse.json(
    { ok: true, health: "contact api v1 (app router)" },
    { status: 200 }
  );
}

// POST: دریافت پیام و ارسال ایمیل
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, email, phone, subject, message } = body as {
      name?: string; email?: string; phone?: string; subject?: string; message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          ok: false,
          error: "VALIDATION_ERROR",
          fields: { name: !name, email: !email, message: !message }
        },
        { status: 400 }
      );
    }

    await verifyMailerConfig(); // اختیاری ولی کمک به تشخیص env ناقص
    await sendContactNotification({ name, email, phone, subject, message });

    return NextResponse.json({ ok: true, stored: true }, { status: 200 });
  } catch (err: any) {
    console.error("CONTACT_API_ERROR", err);
    return NextResponse.json(
      { ok: false, error: "INTERNAL", detail: err?.message ?? String(err) },
      { status: 500 }
    );
  }
}
