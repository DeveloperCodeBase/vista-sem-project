"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

const heroImages = [
  { src: "/images/hero/ai-water-grid.svg", alt: "شبکه آبرسانی هوشمند با حسگرهای متصل" },
  { src: "/images/hero/command-center.svg", alt: "مرکز فرمان هوش مصنوعی با داشبوردهای مدیریتی" },
  { src: "/images/hero/field-team.svg", alt: "تیم میدانی مجهز به ابزارهای تحلیلی" }
];

export default function Hero() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % heroImages.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero relative overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((item, i) => (
          <div key={item.src} className={`absolute inset-0 transition-opacity duration-[2000ms] ${i === index ? "opacity-100" : "opacity-0"}`}>
            <Image src={item.src} alt={item.alt} fill priority sizes="100vw" className="object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[#05070f]/95 via-[#080e21]/90 to-[#101b3a]/80" />
        <div className="absolute -left-40 top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-32 bottom-16 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative container py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-7 text-right">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold tracking-widest text-white/80 shadow-lg shadow-cyan-500/10">
              شبکه هوشمند ابتکار ویستا
            </span>
            <h1 className="max-w-2xl text-3xl font-black leading-relaxed text-white sm:text-4xl lg:text-[42px]">
              معماری و استقرار راهکارهای <span className="text-cyan-300">هوش مصنوعی</span> برای استان سمنان
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              شبکه هوشمند ابتکار ویستا به‌عنوان شرکت هوش مصنوعی استان سمنان، از دوقلوی دیجیتال شبکه‌های آب تا پایش انرژی، کشاورزی و خدمات شهری را با استقرار داخلی و پشتیبانی میدانی پوشش می‌دهد.
            </p>
            <div className="flex flex-col items-start justify-end gap-3 sm:flex-row sm:items-center sm:justify-end lg:justify-start">
              <Link href="#contact" className="btn text-sm sm:text-base">
                درخواست جلسه تخصصی
              </Link>
              <Link href="#projects" className="btn-ghost text-sm sm:text-base">
                مشاهده پروژه‌های عملیاتی
              </Link>
            </div>
          </div>

          <div className="glass-panel space-y-5 rounded-3xl border border-white/10 p-6 text-white/90 shadow-[0_20px_80px_rgba(15,23,42,0.45)] backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Semnan</p>
                <p className="text-3xl font-bold">Real-time Ops</p>
              </div>
              <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-200">
                آب، انرژی و خدمات شهری
              </span>
            </div>
            <p className="text-sm leading-7 text-white/80">
              یک تیم واحد برای مهندسی داده، مدل‌سازی و عملیات که پلتفرم‌های هوش مصنوعی را در استان سمنان راهبری می‌کند و بین مدیریت و تیم‌های میدانی هم‌افزایی ایجاد می‌کند.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="mini-stat">
                <span className="mini-stat__value">۱۳</span>
                <span className="mini-stat__label">پرونده عملیاتی فعال</span>
              </div>
              <div className="mini-stat">
                <span className="mini-stat__value">۱ استان</span>
                <span className="mini-stat__label">تمرکز: سمنان</span>
              </div>
              <div className="mini-stat">
                <span className="mini-stat__value">24/7</span>
                <span className="mini-stat__label">پشتیبانی و پایش</span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-white/75">
              <strong className="block text-white">شرکت هوش مصنوعی شبکه هوشمند ابتکار ویستا</strong>
              عضو پارک علم و فناوری سمنان با تمرکز بر پروژه‌های حاکمیتی و خدماتی؛ استقرار صددرصد داخلی، انتقال دانش و حمایت از تیم‌های بهره‌بردار.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
