"use client";

import { useState, FormEvent } from "react";

type Props = { locale?: "fa" | "en" };

export default function ContactForm({ locale = "fa" }: Props) {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const t = (fa: string, en: string) => (locale === "fa" ? fa : en);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    // رفرنس پایدار از فرم قبل از هر await
    const form = e.currentTarget as HTMLFormElement;

    const fd = new FormData(form);
    const payload = {
      name: (fd.get("name") || "").toString().trim(),
      phone: (fd.get("phone") || "").toString().trim(),
      email: (fd.get("email") || "").toString().trim(),
      subject: (fd.get("subject") || fd.get("project") || "").toString().trim(),
      message: (fd.get("message") || "").toString().trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({} as any));
      // برای دیباگ:
      console.log("API response:", data);

      if (res.ok && data?.ok === true) {
        setStatus("success");
        // از رفرنس form استفاده کن؛ نه e.currentTarget
        try { form.reset(); } catch {}
      } else {
        console.error("Contact failed:", res.status, data);
        setStatus("error");
      }
    } catch (err) {
      console.error("Contact error:", err);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit}
      className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_16px_60px_rgba(5,8,20,0.45)] backdrop-blur">
      <div className="grid gap-4 md:grid-cols-2">
        <input className="input" name="name" required placeholder={t("نام و نام‌خانوادگی", "Full name")} />
        <input className="input" name="phone" required placeholder={t("شماره تماس", "Phone number")} />
        <input className="input" name="email" placeholder={t("ایمیل (اختیاری)", "Email (optional)")} />
        <input className="input" name="subject" placeholder={t("موضوع / حوزه", "Subject")} />
      </div>
      <textarea className="input min-h-[160px]" name="message" required placeholder={t("توضیحات کوتاه", "A short description")} />
      <div className="flex flex-col items-end gap-4 md:flex-row md:items-center md:justify-between">
        <button className="btn px-8" disabled={status === "loading"}>
          {status === "loading" ? t("در حال ارسال…", "Sending…") : t("ارسال درخواست", "Submit")}
        </button>
        {status === "success" && (
          <span className="text-sm text-emerald-300" role="status">
            {t("درخواست شما ثبت شد. در اولین فرصت تماس می‌گیریم.", "Thanks! We’ll get back soon.")}
          </span>
        )}
        {status === "error" && (
          <span className="text-sm text-red-300" role="status">
            {t("ثبت با خطا مواجه شد. لطفاً دوباره تلاش کنید.", "Submission failed. Please try again.")}
          </span>
        )}
      </div>
    </form>
  );
}
