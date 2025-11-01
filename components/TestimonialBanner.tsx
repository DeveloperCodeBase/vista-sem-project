export default function TestimonialBanner() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0">
        <img src="/images/testimonials/collaboration.svg" alt="همکاری تیمی" className="h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-[#020617]/85" />
      </div>
      <div className="relative container">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-right text-white/85 shadow-[0_24px_60px_rgba(5,8,15,0.65)] backdrop-blur">
          <p className="text-lg leading-9">
            «همکاری با ویستا باعث شد تیم بهره‌برداری استان سمنان تصویر یکپارچه‌ای از وضعیت آب، انرژی و خدمات شهری داشته باشد و بتواند تصمیم‌های روزانه را بر اساس داده اتخاذ کند.»
          </p>
          <div className="mt-6 flex flex-col items-end text-sm text-white/70">
            <strong className="text-white">معاون برنامه‌ریزی شهرداری سمنان</strong>
            <span>بیانیه همکاری ۱۴۰۳</span>
          </div>
        </div>
      </div>
    </section>
  );
}
