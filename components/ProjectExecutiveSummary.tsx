import Image from "next/image";
import type { Project } from "@/data/projects";
import { segmentProjectContent } from "@/lib/projectSections";

type ProjectExecutiveSummaryProps = {
  project: Project;
  locale?: "fa" | "en";
  variant?: "modal" | "page";
};

export default function ProjectExecutiveSummary({ project, locale = "fa", variant = "modal" }: ProjectExecutiveSummaryProps) {
  const isFa = locale === "fa";
  const dir = isFa ? "rtl" : "ltr";
  const align = isFa ? "text-right" : "text-left";
  const title = isFa ? project.title : project.titleEn;
  const summary = isFa ? project.summary : project.summaryEn;
  const category = isFa ? project.category : project.categoryEn;
  const html = isFa ? project.content : project.contentEn;
  const sections = segmentProjectContent(html);
  const factClass = isFa
    ? "project-summary-fact project-summary-fact--rtl"
    : "project-summary-fact project-summary-fact--ltr";
  const quickFacts = isFa
    ? [
        { label: "وضعیت", value: "در حال بهره‌برداری" },
        { label: "استان", value: "سمنان" },
        { label: "حوزه", value: category }
      ]
    : [
        { label: "Status", value: "Operational" },
        { label: "Province", value: "Semnan" },
        { label: "Domain", value: category }
      ];

  return (
    <div className={`space-y-8 ${align}`} dir={dir}>
      <div className={`project-summary-grid ${variant === "page" ? "project-summary-grid--page" : ""}`}>
        <div className="project-summary-hero">
          <div className="project-summary-hero__image">
            <Image
              src={project.cover}
              alt={title}
              fill
              sizes="(min-width: 1280px) 40vw, (min-width: 768px) 55vw, 90vw"
              className="object-cover"
            />
            <div className="project-summary-hero__overlay" />
          </div>
          <div className="project-summary-hero__content">
            <span className="project-summary-badge">{category}</span>
            <h3 className="project-summary-title">{title}</h3>
            <p className="project-summary-text">{summary}</p>
          </div>
        </div>

        <div className="project-summary-meta">
          <div className="project-summary-meta__facts">
            {quickFacts.map((fact) => (
              <div key={fact.label} className={factClass}>
                <span className="project-summary-fact__label">{fact.label}</span>
                <span className="project-summary-fact__value">{fact.value}</span>
              </div>
            ))}
          </div>

          <div className="project-summary-sections">
            {sections.length > 0
              ? sections.map((section) => (
                  <article key={section.id} className="project-summary-section" id={section.id}>
                    <h4 className="project-summary-section__title">{section.title}</h4>
                    <div
                      className={isFa ? "prose-rtl" : "prose prose-invert max-w-none"}
                      dangerouslySetInnerHTML={{ __html: section.body }}
                    />
                  </article>
                ))
              : (
                  <article className="project-summary-section">
                    <div
                      className={isFa ? "prose-rtl" : "prose prose-invert max-w-none"}
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  </article>
                )}
          </div>
        </div>
      </div>
    </div>
  );
}
