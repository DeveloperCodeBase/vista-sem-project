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
  const badgeColumns =
    content.badges.length >= 3
      ? "sm:grid-cols-3"
      : content.badges.length === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-1";

  return (
    <div className={`space-y-8 ${align}`} dir={dir}>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#041027] via-[#071437] to-[#0c1c4d]">
          <Image
            src={project.cover}
            alt={content.title}
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/40 to-transparent" />
          <div className="relative flex h-full flex-col justify-between gap-6 p-8 text-white">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white/75">
                {content.category}
              </span>
              <h3 className="text-2xl font-bold leading-9 md:text-3xl">{content.title}</h3>
              <p className="text-sm leading-7 text-white/75 md:text-base">{content.summary}</p>
            </div>
            <div className={`grid gap-3 ${badgeColumns}`}>
              {content.badges.map((badge) => (
                <div key={badge.label} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
                  <span className="block text-xs font-medium text-white/60">{badge.label}</span>
                  <span className="text-lg font-bold text-white md:text-xl">{badge.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(6,10,25,0.5)]">
          <div
            className={isFa ? "prose-rtl" : "prose prose-invert max-w-none"}
            dangerouslySetInnerHTML={{ __html: content.executiveHtml }}
          />
        </div>
      </div>
    </div>
  );
}
