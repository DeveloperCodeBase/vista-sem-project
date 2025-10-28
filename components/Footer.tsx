import Link from "next/link";

type FooterProps = {
  locale?: "fa" | "en";
};

export default function Footer({ locale = "fa" }: FooterProps) {
  const year = new Date().getFullYear();
  const isFa = locale === "fa";
  const prefix = isFa ? "" : "/en";
  const links = isFa
    ? [
        { title: "پروژه‌ها", href: `${prefix}#projects` },
        { title: "خدمات", href: `${prefix}#services` },
        { title: "تماس", href: `${prefix}#contact` },
        { title: "English", href: "/en" }
      ]
    : [
        { title: "Projects", href: `${prefix}#projects` },
        { title: "Services", href: `${prefix}#services` },
        { title: "Contact", href: `${prefix}#contact` },
        { title: "فارسی", href: "/" }
      ];

  return (
    <footer className={`mt-24 border-t border-white/10 bg-[#04060d] ${isFa ? "text-right" : "text-left"}`}>
      <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr]">
        <div className={`space-y-4 ${isFa ? "text-right" : "text-left"}`}>
          <h3 className="text-xl font-bold text-white">{isFa ? "شبکه هوشمند ابتکار ویستا" : "Vista Smart Network"}</h3>
          <p className="text-sm leading-7 text-white/70">
            {isFa
              ? "شرکت تخصصی هوش مصنوعی و GeoAI در پارک علم و فناوری استان سمنان. ارائه‌دهنده دوقلوهای دیجیتال، تحلیل پیش‌بینانه و داشبوردهای مدیریتی."
              : "AI and GeoAI specialist based in Semnan Science and Technology Park delivering digital twins, predictive analytics and executive dashboards."}
          </p>
          <div className={`flex flex-col gap-2 text-sm text-white/60 ${isFa ? "items-end" : "items-start"}`}>
            <span>{isFa ? "آدرس: پارک علم و فناوری استان سمنان" : "Address: Semnan Science & Technology Park"}</span>
            <span>{isFa ? "تلفن: ۰۹۱۲۴۷۳۳۲۳۴" : "Phone: +98 912 473 3234"}</span>
            <span>Email: devcodebase.dev@gmail.com</span>
          </div>
        </div>
        <div className={`space-y-6 ${isFa ? "text-right" : "text-left"}`}>
          <div>
            <h4 className="text-sm font-semibold text-white/80">{isFa ? "لینک‌های سریع" : "Quick links"}</h4>
            <nav className={`mt-3 flex flex-wrap items-center gap-3 text-sm text-white/60 ${isFa ? "justify-end" : "justify-start"}`}>
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-full border border-white/15 px-4 py-2 hover:border-cyan-200 hover:text-cyan-100">
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/65">
            <p className="leading-7 text-white/70">
              {isFa
                ? "عضو پارک علم و فناوری استان سمنان، با مجوز فعالیت و گواهی دانش‌بنیان در حوزه سامانه‌های هوشمند و تحلیل داده."
                : "Member of Semnan Science & Technology Park with certified expertise in intelligent systems and data analytics."}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-6">
        <div className={`container flex flex-col justify-between gap-4 text-xs text-white/40 sm:flex-row ${isFa ? "items-end" : "items-start"}`}>
          <span>
            {isFa
              ? `© ${year} شبکه هوشمند ابتکار ویستا. تمامی حقوق محفوظ است.`
              : `© ${year} Vista Smart Network. All rights reserved.`}
          </span>
          <span>{isFa ? "طراحی و توسعه: Vista Smart Network" : "Designed & engineered by Vista Smart Network"}</span>
        </div>
      </div>
    </footer>
  );
}
