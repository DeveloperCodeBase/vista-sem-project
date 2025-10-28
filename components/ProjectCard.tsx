"use client";
import Link from "next/link";
import Modal from "./Modal";
import { useState } from "react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  p: Project;
  locale?: "fa" | "en";
};

export default function ProjectCard({ p, locale = "fa" }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(9,12,28,0.45)] transition hover:-translate-y-2 hover:border-cyan-300/70 hover:shadow-[0_28px_80px_rgba(9,12,28,0.55)]">
      <div className="relative h-56 w-full overflow-hidden">
        <img src={p.cover} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/40 to-transparent" />
        <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs text-white/80">
          {p.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 text-right">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white">{p.title}</h3>
          <p className="text-sm leading-7 text-white/75 line-clamp-3">{p.summary}</p>
        </div>
        <div className="mt-auto flex flex-wrap items-center justify-end gap-3">
          <button className="btn" onClick={() => setOpen(true)}>
            {locale === "fa" ? "مشاهده خلاصه مدیریتی" : "Executive Summary"}
          </button>
          <Link className="btn-ghost" href={`/projects/${p.slug}`}>
            {locale === "fa" ? "صفحهٔ جزئیات" : "Project Detail"}
          </Link>
        </div>
      </div>
      <Modal open={open} title={p.title} html={p.content} onClose={() => setOpen(false)} locale={locale} />
    </div>
  );
}
