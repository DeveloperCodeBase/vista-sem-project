export default function TestimonialBanner() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1600&auto=format&fit=crop"
          alt="همکاری سازمانی"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[#020617]/80" />
      </div>
      <div className="relative container">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-right text-white/85 shadow-[0_24px_60px_rgba(5,8,15,0.65)] backdrop-blur">
          <p className="text-lg leading-9">
            «با پیاده‌سازی VistaLeak در شبکه آب شهری، متوسط زمان کشف نشتی از ۹ روز به کمتر از ۴۸ ساعت کاهش یافت و تیم بهره‌برداری برای اولین بار
            توانست اثر هر اقدام را با داشبورد مشترک مدیریت شهری گزارش کند.»
          </p>
          <div className="mt-6 flex flex-col items-end text-sm text-white/70">
            <strong className="text-white">مدیر بهره‌برداری آبفا استان سمنان</strong>
            <span>گزارش ارزیابی پروژه ۱۴۰۲</span>
          </div>
        </div>
      </div>
    </section>
  );
}
