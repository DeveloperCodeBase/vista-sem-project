export default function StatsHighlightsEN() {
  const stats = [
    { value: "14 platforms", label: "Live operational programmes" },
    { value: "21 provinces", label: "Footprint across Iran" },
    { value: "32B IRR", label: "Documented annual savings" },
    { value: "ISO 27001", label: "Security governance" }
  ];

  return (
    <section className="container relative -mt-16 mb-16">
      <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(2,6,23,0.45)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="flex flex-col items-start gap-2 rounded-2xl bg-white/5 px-4 py-5 text-left text-white/85 shadow-inner shadow-white/10">
            <span className="text-2xl font-black text-white sm:text-3xl">{item.value}</span>
            <span className="text-xs font-medium leading-6 text-white/70 sm:text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
