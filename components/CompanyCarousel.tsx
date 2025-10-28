"use client";

import * as React from "react";

const slides = [
  {
    title: "تیم چندرشته‌ای",
    description:
      "متخصصان داده، مهندسی زیرساخت، نرم‌افزار و تجربه کاربری در یک تیم منسجم برای حل مسائل پیچیده سازمانی.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "معماری امنیت و استقرار داخلی",
    description:
      "استقرار در دیتاسنتر سازمان، یکپارچه با سامانه‌های موجود، احراز هویت سازمانی و ممیزی کامل رویدادها.",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "مرکز نوآوری پارک علم و فناوری سمنان",
    description:
      "به عنوان واحد فناور پارک علم و فناوری، دسترسی به شبکه مشاوران تخصصی و زیرساخت‌های آزمایشگاهی داریم.",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop"
  }
];

export default function CompanyCarousel() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 6500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setIndex((prev) => (prev + 1) % slides.length);

  return (
    <section className="py-20">
      <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden rounded-3xl border border-white/10">
          {slides.map((slide, i) => (
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.title}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="relative h-[360px] w-full bg-gradient-to-br from-[#050b1e]/90 to-[#07102c]/70">
            <div className="absolute inset-0 flex items-end justify-between p-4 text-white/80">
              <button onClick={prev} className="carousel-btn">قبلی</button>
              <button onClick={next} className="carousel-btn">بعدی</button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-[#020617]/40 to-transparent" />
          </div>
        </div>

        <div className="space-y-6 text-right">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs text-white/70">
            درباره ویستا
          </span>
          <h2 className="section-title">شرکت شبکه هوشمند ابتکار ویستا</h2>
          <p className="text-lg leading-8 text-white/70">
            با تکیه بر تجربه عملیاتی در پروژه‌های آب، انرژی و شهری، ویستا راهکارهای داده‌محور با استقرار داخلی، امنیت کامل و پشتیبانی طولانی‌مدت ارائه می‌دهد.
          </p>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 text-xl font-bold text-white">{slides[index].title}</h3>
            <p className="text-sm leading-7 text-white/70">{slides[index].description}</p>
          </div>
          <ul className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
            <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right">مدیرعامل: مسعود بخشی — کارشناس هوش مصنوعی</li>
            <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right">هیئت‌مدیره: محمدرضا یوسفی — فرماندار اسبق</li>
            <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right">هیئت‌مدیره: محمد بخشی — مدیر اسبق آب منطقه‌ای شاهرود</li>
            <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right">آدرس: پارک علم و فناوری استان سمنان</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
