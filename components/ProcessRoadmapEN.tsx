const steps = [
  {
    title: "Discovery & architecture",
    description: "Stakeholder interviews, KPI definition and technical blueprint aligned with existing infrastructure.",
    timeframe: "Weeks 1-2"
  },
  {
    title: "Data & sensor onboarding",
    description: "Sensor selection, secure pipelines and integration with SCADA, GIS and enterprise systems.",
    timeframe: "Weeks 3-6"
  },
  {
    title: "Model & experience build",
    description: "AI model development, digital twins, mission dashboards and field applications.",
    timeframe: "Weeks 7-10"
  },
  {
    title: "Enablement & go-live",
    description: "Training, operational playbooks, SLA definition and post-action analytics.",
    timeframe: "Weeks 11-12"
  }
];

export default function ProcessRoadmapEN() {
  return (
    <section className="bg-[#05070f] py-20 text-left">
      <div className="container space-y-10">
        <div className="space-y-4">
          <h2 className="section-title">Delivery cadence</h2>
          <p className="max-w-2xl text-lg leading-8 text-white/70">
            A proven 12-week launch framework that balances rapid delivery with rigorous data governance and adoption.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_12px_40px_rgba(8,15,35,0.45)]"
            >
              <div className="space-y-3">
                <span className="text-xs font-semibold text-cyan-300">{step.timeframe}</span>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-7 text-white/70">{step.description}</p>
              </div>
              <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
