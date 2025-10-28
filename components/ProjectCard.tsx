"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";
import ProjectExecutiveSummary from "./ProjectExecutiveSummary";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  p: Project;
  locale?: "fa" | "en";
};

export default function ProjectCard({ p, locale = "fa" }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const content = p.locales[locale];
  const isFa = locale === "fa";

  const detailHref = locale === "fa" ? `/projects/${p.slug}` : `/en/projects/${p.slug}`;

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(9,12,28,0.45)] transition hover:-translate-y-2 hover:border-cyan-300/70 hover:shadow-[0_28px_80px_rgba(9,12,28,0.55)]">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={p.cover}
          alt={content.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/40 to-transparent" />
        <span className={`absolute ${isFa ? "right-4" : "left-4"} top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs text-white/80`}>
          {content.category}
        </span>
      </div>
      <div className={`flex flex-1 flex-col gap-4 p-6 ${isFa ? "text-right" : "text-left"}`}>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white">{content.title}</h3>
          <p className="text-sm leading-7 text-white/75 line-clamp-3">{content.summary}</p>
        </div>
        <div className={`mt-auto flex flex-wrap items-center gap-3 ${isFa ? "justify-end" : "justify-start"}`}>
          <button className="btn" onClick={() => setOpen(true)}>
            {locale === "fa" ? "مشاهده خلاصه مدیریتی" : "Executive summary"}
          </button>
          <Link className="btn-ghost" href={detailHref}>
            {locale === "fa" ? "صفحهٔ جزئیات" : "Project detail"}
          </Link>
        </div>
      </div>
      <Modal
        open={open}
        title={content.title}
        subtitle={content.summary}
        onClose={() => setOpen(false)}
        locale={locale}
        actions={
          <div className={`flex flex-wrap items-center gap-3 ${isFa ? "justify-end" : "justify-start"}`}>
            <a className="btn" href={locale === "fa" ? "#contact" : "/en#contact"} onClick={() => setOpen(false)}>
              {locale === "fa" ? "درخواست جلسه" : "Book a session"}
            </a>
            <button className="btn-ghost" onClick={() => setOpen(false)}>
              {locale === "fa" ? "بستن" : "Close"}
            </button>
          </div>
        }
      >
        <ProjectExecutiveSummary project={p} locale={locale} />
      </Modal>
    </div>
  );
}
