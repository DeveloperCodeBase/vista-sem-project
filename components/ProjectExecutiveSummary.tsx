import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectExecutiveSummaryProps = {
  project: Project;
  locale?: "fa" | "en";
};

export default function ProjectExecutiveSummary({ project, locale = "fa" }: ProjectExecutiveSummaryProps) {
  const isFa = locale === "fa";
  const dir = isFa ? "rtl" : "ltr";
  const align = isFa ? "text-right" : "text-left";
  const content = project.locales[locale];
  const exec = content.executive;

  return (
    <div className={`space-y-10 ${align}`} dir={dir}>
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#061021] via-[#081431] to-[#0b1a3f]">
          <Image
            src={project.cover}
            alt={content.title}
            fill
            sizes="(min-width: 1024px) 60vw, 90vw"
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/85 via-[#020617]/60 to-transparent" />
          <div className="relative flex h-full flex-col justify-between gap-6 p-8 text-white">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
                {content.category}
              </span>
              <h3 className="text-2xl font-black leading-9 md:text-3xl">{content.title}</h3>
              <p className="text-sm leading-7 text-white/70 md:text-base">{content.summary}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {content.badges.map((badge) => (
                <div key={badge.label} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
                  <span className="block text-xs font-medium text-white/60">{badge.label}</span>
                  <span className="text-lg font-bold text-white md:text-xl">{badge.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(6,10,25,0.5)]">
          <h4 className="text-lg font-semibold text-white">{exec.strapline}</h4>
          <p className="text-sm leading-7 text-white/75">{exec.intro}</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
              <h5 className="mb-2 text-sm font-semibold text-white">{isFa ? "مسئله" : "Problem"}</h5>
              <p className="leading-7">{exec.problem}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
              <h5 className="mb-2 text-sm font-semibold text-white">{isFa ? "ماموریت" : "Mission"}</h5>
              <p className="leading-7">{exec.mission}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        {exec.highlights.map((highlight) => (
          <div
            key={highlight.title}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 via-white/5 to-transparent p-6 shadow-[0_18px_60px_rgba(4,8,22,0.45)]"
          >
            <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -right-14 -bottom-16 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="relative space-y-4">
              <h5 className="text-lg font-semibold text-white">{highlight.title}</h5>
              <ul className="space-y-2 text-sm leading-7 text-white/75">
                {highlight.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-300" aria-hidden="true" />
                    <span className="flex-1">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h4 className="mb-4 text-lg font-semibold text-white">{isFa ? "نقشه راه اجرا" : "Execution roadmap"}</h4>
        <div className="grid gap-4 md:grid-cols-3">
          {exec.timeline.map((step) => (
            <div key={step.phase} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-200/90">{step.duration}</span>
              <h5 className="mt-2 text-base font-semibold text-white">{step.phase}</h5>
              <ul className="mt-3 space-y-2">
                {step.activities.map((activity) => (
                  <li key={activity} className="leading-6">• {activity}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 via-white/5 to-transparent p-6">
          <h4 className="text-lg font-semibold text-white">{isFa ? "بازگشت سرمایه و KPI" : "ROI & KPIs"}</h4>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {exec.roi.map((item) => (
              <div key={item.label} className="rounded-2xl border border-cyan-200/20 bg-cyan-300/10 p-4 text-sm text-white/85">
                <span className="text-2xl font-bold text-cyan-200">{item.value}</span>
                <p className="mt-2 text-sm font-semibold text-white">{item.label}</p>
                <p className="text-xs leading-6 text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-2 text-sm text-white/75">
            <h5 className="text-sm font-semibold text-white">{isFa ? "اقلام تحویل" : "Key deliverables"}</h5>
            <ul className="space-y-2">
              {exec.deliverables.map((deliverable) => (
                <li key={deliverable}>• {deliverable}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h5 className="text-lg font-semibold text-white">{isFa ? "ریسک و راهکار" : "Risks & mitigation"}</h5>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              {exec.risks.map((risk) => (
                <li key={risk.risk} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">{risk.risk}</p>
                  <p className="mt-1 text-xs leading-6 text-white/70">{risk.mitigation}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h5 className="text-lg font-semibold text-white">{isFa ? "الهام تصویری هوش مصنوعی" : "AI imagery brief"}</h5>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {exec.aiImagery.map((asset) => (
                <figure key={asset.asset} className="overflow-hidden rounded-2xl border border-white/10 bg-[#080d1f]">
                  <div className="relative h-24 w-full">
                    <Image src={asset.asset} alt={asset.title} fill sizes="(min-width: 640px) 33vw, 80vw" className="object-cover" />
                  </div>
                  <figcaption className="space-y-1 p-3">
                    <p className="text-xs font-semibold text-white">{asset.title}</p>
                    <p className="text-[11px] leading-5 text-white/60">{asset.prompt}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
