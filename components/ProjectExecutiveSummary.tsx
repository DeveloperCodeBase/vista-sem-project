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
  const title = isFa ? project.title : project.titleEn;
  const summary = isFa ? project.summary : project.summaryEn;
  const category = isFa ? project.category : project.categoryEn;
  const html = isFa ? project.content : project.contentEn;

  return (
    <div className={`space-y-8 ${align}`} dir={dir}>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#041027] via-[#071437] to-[#0c1c4d]">
          <Image
            src={project.cover}
            alt={title}
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/40 to-transparent" />
          <div className="relative flex h-full flex-col justify-between gap-6 p-8 text-white">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white/75">
                {category}
              </span>
              <h3 className="text-2xl font-bold leading-9 md:text-3xl">{title}</h3>
              <p className="text-sm leading-7 text-white/75 md:text-base">{summary}</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(6,10,25,0.5)]">
          <div
            className={isFa ? "prose-rtl" : "prose prose-invert max-w-none"}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  );
}
