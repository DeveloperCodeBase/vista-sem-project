"use client";
import { useState } from "react";

type ContactFormProps = {
  locale?: "fa" | "en";
};

export default function ContactForm({ locale = "fa" }: ContactFormProps) {
  const [ok, setOk] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const submit = async (e: any) => {
    e.preventDefault();
    setPending(true);
    setOk(null);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      project: fd.get("project"),
      message: fd.get("message"),
    };
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await r.json().catch(() => null);
      if (r.ok && data?.ok) {
        setOk(
          locale === "fa"
            ? "درخواست شما ثبت شد. در اولین فرصت تماس می‌گیریم."
            : "Thank you. We will get back within 48 hours."
        );
        e.currentTarget.reset();
      } else {
        setOk(
          locale === "fa"
            ? "ثبت با خطا مواجه شد. لطفاً دوباره تلاش کنید."
            : "Submission failed. Please try again."
        );
      }
    } catch (_) {
      setOk(
        locale === "fa"
          ? "ثبت با خطا مواجه شد. لطفاً دوباره تلاش کنید."
          : "Submission failed. Please try again."
      );
    }
    setPending(false);
  };
  return (
    <form onSubmit={submit} className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_16px_60px_rgba(5,8,20,0.45)] backdrop-blur">
      <div className="grid gap-4 md:grid-cols-2">
        <input className="input" name="name" placeholder={locale === "fa" ? "نام و نام‌خانوادگی" : "Full name"} required />
        <input className="input" name="phone" placeholder={locale === "fa" ? "شماره تماس" : "Phone number"} required />
        <input className="input" name="email" placeholder={locale === "fa" ? "ایمیل (اختیاری)" : "Email (optional)"} />
        <input className="input" name="project" placeholder={locale === "fa" ? "پروژه / حوزه مورد نظر" : "Project or domain"} required />
      </div>
      <textarea className="input min-h-[160px]" name="message" placeholder={locale === "fa" ? "توضیحات کوتاه" : "A short description"} required />
      <div className="flex flex-col items-end gap-4 md:flex-row md:items-center md:justify-between">
        <button className="btn px-8" disabled={pending}>
          {pending ? (locale === "fa" ? "در حال ارسال..." : "Sending...") : locale === "fa" ? "ارسال درخواست" : "Submit"}
        </button>
        {ok && <span className="text-sm text-white/80">{ok}</span>}
      </div>
    </form>
  );
}
