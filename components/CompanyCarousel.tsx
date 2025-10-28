"use client";

import * as React from "react";
import Image from "next/image";

type Locale = "fa" | "en";

const slides = [
  {
    image: "/images/company/team-lab.svg",
    alt: {
      fa: "همکاری تیم چندرشته‌ای در آزمایشگاه داده",
      en: "Cross-disciplinary lab collaborating on data"
    },
    title: {
      fa: "تیم چندرشته‌ای",
      en: "Cross-disciplinary team"
    },
    description: {
      fa: "متخصصان داده، زیرساخت، نرم‌افزار و تجربه کاربری در یک تیم منسجم برای حل مسائل پیچیده سازمانی.",
      en: "Data, infrastructure, software and UX experts working as one team to solve complex operational challenges."
    }
  },
  {
    image: "/images/company/security-architecture.svg",
    alt: {
      fa: "معماری امنیت با هسته مرکزی و لایه‌های محافظ",
      en: "Security architecture with core and protective layers"
    },
    title: {
      fa: "معماری امنیت و استقرار داخلی",
      en: "Secure on-prem architecture"
    },
    description: {
      fa: "استقرار در دیتاسنتر سازمان، احراز هویت سازمانی و ممیزی کامل برای انطباق با الزامات حاکمیتی.",
      en: "Delivered on customer infrastructure with enterprise identity, auditing and compliance."
    }
  },
  {
    image: "/images/company/innovation-hub.svg",
    alt: {
      fa: "مرکز نوآوری پارک علم و فناوری با عناصر دیجیتال",
      en: "Innovation hub at the science park"
    },
    title: {
      fa: "مرکز نوآوری پارک علم و فناوری",
      en: "Science park innovation hub"
    },
    description: {
      fa: "به عنوان واحد فناور پارک علم و فناوری سمنان، به شبکه مشاوران تخصصی و آزمایشگاه‌های حرفه‌ای دسترسی داریم.",
      en: "Operating from Semnan Science & Technology Park with access to specialist advisors and lab facilities."
    }
  }
];

type CompanyCarouselProps = {
  locale?: Locale;
};

export default function CompanyCarousel({ locale = "fa" }: CompanyCarouselProps) {
  const [index, setIndex] = React.useState(0);
  const isFa = locale === "fa";

  React.useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 7000);
    return () => clearInterval(timer);
  }, []);

  const go = (delta: number) => setIndex((prev) => (prev + delta + slides.length) % slides.length);

  return (
    <section className="py-20">
      <div className={`container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] ${isFa ? "text-right" : "text-left"}`}>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#070c1f]">
          {slides.map((slide, i) => (
            <div key={slide.image} className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`} aria-hidden={i !== index}>
              <Image src={slide.image} alt={slide.alt[locale]} fill sizes="(min-width: 1024px) 50vw, 90vw" className="object-cover" />
            </div>
          ))}
          <div className="relative h-[360px] w-full bg-gradient-to-br from-[#050b1e]/90 to-[#07102c]/70">
            <div className={`absolute inset-0 flex items-end justify-between p-4 text-white/80 ${isFa ? "flex-row" : "flex-row-reverse"}`}>
              <button onClick={() => go(-1)} className="carousel-btn" aria-label={isFa ? "قبلی" : "Previous"}>
                {isFa ? "قبلی" : "Prev"}
              </button>
              <button onClick={() => go(1)} className="carousel-btn" aria-label={isFa ? "بعدی" : "Next"}>
                {isFa ? "بعدی" : "Next"}
              </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-[#020617]/40 to-transparent" />
          </div>
        </div>

        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs text-white/70">
            {isFa ? "درباره ویستا" : "About Vista"}
          </span>
          <h2 className="section-title">{isFa ? "شرکت شبکه هوشمند ابتکار ویستا" : "Vista Smart Network"}</h2>
          <p className="text-lg leading-8 text-white/70">
            {isFa
              ? "ویستا به‌عنوان شرکت هوش مصنوعی استان سمنان، از پارک علم و فناوری مستقر شده و تمامی پروژه‌ها را با استقرار داخلی، امنیت کامل و پشتیبانی متمرکز مدیریت می‌کند."
              : "Vista operates from Semnan Science & Technology Park, delivering on-prem AI programmes exclusively across the province with dedicated support and governance."}
          </p>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 text-xl font-bold text-white">{slides[index].title[locale]}</h3>
            <p className="text-sm leading-7 text-white/70">{slides[index].description[locale]}</p>
          </div>
          <ul className={`grid gap-3 text-sm text-white/70 sm:grid-cols-2 ${isFa ? "" : "text-left"}`}>
            <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              {isFa ? "مدیرعامل: مسعود بخشی — معمار سامانه‌های هوشمند" : "CEO: Masoud Bakhshi — Intelligent systems architect"}
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              {isFa ? "هیئت‌مدیره: محمدرضا یوسفی — فرماندار اسبق" : "Board: Mohammadreza Yousefi — Former governor"}
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              {isFa ? "هیئت‌مدیره: محمد بخشی — مدیر اسبق آب منطقه‌ای شاهرود" : "Board: Mohammad Bakhshi — Former regional water director"}
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              {isFa ? "آدرس: پارک علم و فناوری استان سمنان" : "Address: Semnan Science & Technology Park"}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
