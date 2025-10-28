export default function TestimonialBannerEN() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0">
        <img src="/images/testimonials/collaboration.svg" alt="Collaboration" className="h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-[#020617]/85" />
      </div>
      <div className="relative container">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-left text-white/85 shadow-[0_24px_60px_rgba(5,8,15,0.65)] backdrop-blur">
          <p className="text-lg leading-9">
            “Working with Vista Smart Network gave us a unified operational picture for Semnan. Cross-department decisions now happen in the same briefing because everyone sees the same trusted data.”
          </p>
          <div className="mt-6 flex flex-col items-start text-sm text-white/70">
            <strong className="text-white">Deputy for Planning — Semnan Municipality</strong>
            <span>Joint statement · 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}
