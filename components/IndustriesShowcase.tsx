const industries = [
  {
    name: "آب و زیرساخت",
    description: "دوقلوی دیجیتال، کشف نشتی و پایش فرونشست برای شبکه‌های آب شهری و روستایی استان سمنان.",
    image: "/images/industries/water.svg"
  },
  {
    name: "انرژی و صنایع",
    description: "پایش نیروگاه خورشیدی، مدیریت انرژی و امنیت شبکه‌های صنعتی با استقرار کاملاً داخلی.",
    image: "/images/industries/energy.svg"
  },
  {
    name: "کشاورزی و محیط زیست",
    description: "آبیاری دقیق باغات پسته دامغان، پایش آبخوان و هشدار حریق برای جنگل ابر.",
    image: "/images/industries/agriculture.svg"
  },
  {
    name: "شهری و خدمات",
    description: "دستیار هوشمند سامانه ۱۳۷، داشبوردهای تصمیم‌سازی شهری و تحلیل خدمات شهروندی در سمنان.",
    image: "/images/industries/civic.svg"
  }
];

export default function IndustriesShowcase() {
  return (
    <section className="py-20">
      <div className="container space-y-10">
        <div className="space-y-4 text-right">
          <h2 className="section-title">صنایع هدف</h2>
          <p className="max-w-2xl text-lg leading-8 text-white/70">
            تجربه ما در حوزه‌های حساس زیرساختی باعث شده است بتوانیم متناسب با محدودیت‌های واقعی سازمان‌ها، محصولات و خدمات سفارشی ارائه دهیم.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((item) => (
            <div key={item.name} className="relative overflow-hidden rounded-3xl">
              <img src={item.image} alt={item.name} className="h-64 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-[#020617]/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 space-y-2 p-6 text-right">
                <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                <p className="text-sm leading-7 text-white/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
