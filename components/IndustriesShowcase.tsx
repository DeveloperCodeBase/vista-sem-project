const industries = [
  {
    name: "آب و فاضلاب",
    description: "پایش نشتی، بهینه‌سازی فشار، مدیریت انرژی پمپاژ و برنامه‌ریزی سرمایه‌ای شبکه‌های توزیع.",
    image: "https://images.unsplash.com/photo-1502301197179-65228ab57f78?q=80&w=1600&auto=format&fit=crop"
  },
  {
    name: "انرژی و نیروگاه",
    description: "مانیتورینگ بلادرنگ، تشخیص آنومالی در توربین و شبکه برق، مدیریت بار و پیش‌بینی مصرف.",
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1600&auto=format&fit=crop"
  },
  {
    name: "شهر هوشمند و ایمنی",
    description: "تحلیل تصویری، مدیریت ترافیک، هشداردهی بحران و داشبورد فرماندهی برای مدیریت شهری.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1600&auto=format&fit=crop"
  },
  {
    name: "سلامت و داده‌های بالینی",
    description: "تحلیل پیش‌بینانه برای بیمارستان‌ها، اولویت‌بندی منابع، داشبوردهای کیفیت خدمت و رضایت بیماران.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop"
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
