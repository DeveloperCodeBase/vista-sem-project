const services = [
  {
    title: "دوقلوهای دیجیتال و پایش شبکه",
    description:
      "مدل‌سازی هیدرولیکی، فیوژن حسگر و الگوریتم‌های تشخیص نشتی برای شبکه‌های آب و انرژی با داشبوردهای بلادرنگ.",
    bullets: ["کالیبراسیون EPANET/ETAP", "LoRaWAN/NB-IoT", "تحلیل پیش‌بینانه"]
  },
  {
    title: "تحلیل پیشرفته داده و یادگیری ماشین",
    description:
      "ساخت مدل‌های AI با داده‌های عملیاتی، تحلیل سری زمانی، تشخیص آنومالی و امتیازدهی ریسک دارایی‌ها.",
    bullets: ["ModelOps داخلی", "Explainable AI", "KPI قابل اندازه‌گیری"]
  },
  {
    title: "داشبورد و تجربه کاربری سازمانی",
    description:
      "طراحی و توسعه داشبوردهای تعاملی، گزارش‌های مدیریتی و اپلیکیشن‌های میدانی با UX دو زبانه.",
    bullets: ["React/Next", "نقشه و GIS", "تجربه کاربری تخصصی"]
  },
  {
    title: "انتقال دانش و عملیات",
    description:
      "مستندسازی، آموزش تیم‌های بهره‌بردار و تعریف رویه‌های حاکمیت داده و DevSecOps برای تداوم راهکار.",
    bullets: ["مستندسازی کامل", "Workshop تخصصی", "پشتیبانی ۲۴/۷"]
  }
];

export default function ServicesShowcase() {
  return (
    <section id="services" className="bg-gradient-to-b from-[#070d1c] via-[#060812] to-[#05060b] py-20">
      <div className="container space-y-12">
        <div className="space-y-4 text-right">
          <h2 className="section-title">طیف خدمات ویستا</h2>
          <p className="max-w-3xl text-lg leading-8 text-white/70">
            از مرحله ایده تا استقرار عملیاتی و پشتیبانی، تیم ویستا با ترکیب تخصص داده، مهندسی نرم‌افزار و تجربه میدانی، چرخه کامل پیاده‌سازی
            هوش مصنوعی را مدیریت می‌کند.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-right transition hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-cyan-400/10"
            >
              <div className="absolute -left-24 top-24 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:scale-125" />
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl transition group-hover:scale-125" />
              <div className="relative space-y-4">
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <p className="text-sm leading-7 text-white/70">{service.description}</p>
                <ul className="flex flex-wrap items-center justify-end gap-2 text-xs text-cyan-200/80">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-full border border-cyan-200/30 bg-cyan-200/10 px-3 py-1">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
