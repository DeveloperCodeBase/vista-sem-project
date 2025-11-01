const steps = [
  {
    title: "تشخیص مسئله و طراحی راهکار",
    description: "تحلیل وضعیت موجود، تعریف KPI و معماری فنی بر اساس محدودیت‌های زیرساختی.",
    timeframe: "هفته ۱-۲"
  },
  {
    title: "تولید داده و استقرار حسگر",
    description: "انتخاب حسگر، یکپارچه‌سازی با SCADA/GIS و طراحی جریان داده ایمن.",
    timeframe: "هفته ۳-۶"
  },
  {
    title: "توسعه مدل و داشبورد",
    description: "ساخت مدل‌های AI، دوقلوهای دیجیتال و داشبوردهای مدیریتی/میدانی.",
    timeframe: "هفته ۷-۱۰"
  },
  {
    title: "آموزش، Go-Live و پایش",
    description: "انتقال دانش، تعریف SLA پشتیبانی و گزارش‌های پس از اقدام.",
    timeframe: "هفته ۱۱-۱۲"
  }
];

export default function ProcessRoadmap() {
  return (
    <section className="bg-[#05070f] py-20">
      <div className="container space-y-10">
        <div className="space-y-4 text-right">
          <h2 className="section-title">نقشه راه اجرا</h2>
          <p className="max-w-2xl text-lg leading-8 text-white/70">
            فرایند اجرای پروژه‌های ویستا با تمرکز بر ارائه ارزش واقعی، انتقال دانش و تضمین تداوم عملیاتی طراحی شده است.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 text-right shadow-[0_12px_40px_rgba(8,15,35,0.45)]"
            >
              <div className="space-y-3">
                <span className="text-xs font-semibold text-cyan-300">{step.timeframe}</span>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-7 text-white/70">{step.description}</p>
              </div>
              <div className="mt-6 h-[1px] w-full bg-gradient-to-l from-transparent via-cyan-400/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
