export default function TestimonialBannerEN() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
          alt="Partners"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[#020617]/85" />
      </div>
      <div className="relative container">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-left text-white/85 shadow-[0_24px_60px_rgba(5,8,15,0.65)] backdrop-blur">
          <p className="text-lg leading-9">
            “Vista’s digital twin allowed us to detect non-revenue water incidents in less than 48 hours and present quantified
            KPIs to the municipal board for the first time. The rollout was fast, secure and fully aligned with our operations.”
          </p>
          <div className="mt-6 flex flex-col items-start text-sm text-white/70">
            <strong className="text-white">Utility COO, Semnan Province</strong>
            <span>Independent evaluation report, 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
}
