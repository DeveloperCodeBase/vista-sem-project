const services = [
  {
    title: "Digital twins & sensing",
    description: "Hydraulic modelling, sensor fusion and leak detection for water and energy utilities with real-time dashboards.",
    bullets: ["EPANET calibration", "IoT telemetry", "Anomaly detection"]
  },
  {
    title: "Advanced analytics & ML",
    description: "Predictive models, risk scoring and operational AI built on enterprise datasets with ModelOps on-premises.",
    bullets: ["Time-series modelling", "Explainable AI", "Measurable KPIs"]
  },
  {
    title: "Experience design & dashboards",
    description: "Executive dashboards, mission control rooms and field applications with bilingual UX and GIS layers.",
    bullets: ["Next.js", "GIS & maps", "Field mobility"]
  },
  {
    title: "Enablement & operations",
    description: "Documentation, training, DevSecOps workflows and long-term support to ensure adoption and ROI.",
    bullets: ["Playbooks", "Workshops", "24/7 support"]
  }
];

export default function ServicesShowcaseEN() {
  return (
    <section id="services" className="bg-gradient-to-b from-[#070d1c] via-[#060812] to-[#05060b] py-20">
      <div className="container space-y-12 text-left">
        <div className="space-y-4">
          <h2 className="section-title">Our delivery scope</h2>
          <p className="max-w-3xl text-lg leading-8 text-white/70">
            From discovery to live operations, Vista Smart Network combines data science, infrastructure engineering and UX to deliver dependable AI platforms.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-left transition hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-cyan-400/10"
            >
              <div className="absolute -right-24 top-24 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:scale-125" />
              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl transition group-hover:scale-125" />
              <div className="relative space-y-4">
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <p className="text-sm leading-7 text-white/70">{service.description}</p>
                <ul className="flex flex-wrap items-center gap-2 text-xs text-cyan-200/80">
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
