"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

const heroImages = [
  { src: "/images/hero/command-center.svg", alt: "AI command center with live dashboards" },
  { src: "/images/hero/ai-water-grid.svg", alt: "Digital twin of an intelligent water grid" },
  { src: "/images/hero/field-team.svg", alt: "Field engineers with augmented analytics" }
];

export default function HeroEN() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % heroImages.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero relative overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((item, i) => (
          <div key={item.src} className={`absolute inset-0 transition-opacity duration-[2000ms] ${i === index ? "opacity-100" : "opacity-0"}`}>
            <Image src={item.src} alt={item.alt} fill priority sizes="100vw" className="object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[#05070f]/95 via-[#080e21]/90 to-[#101b3a]/80" />
      </div>

      <div className="relative container py-20 lg:py-28 text-left">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.35em] text-white/70">
              Vista Smart Network
            </span>
            <h1 className="max-w-2xl text-3xl font-black leading-relaxed text-white sm:text-4xl lg:text-[42px]">
              Operational <span className="text-cyan-300">AI programmes</span> for Semnan province
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Vista Smart Network architects, deploys and maintains on-prem AI systems across Semnan—from water digital twins and smart irrigation to civic services—while staying embedded with local teams.
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Link href="#contact" className="btn text-sm sm:text-base">
                Request a consultation
              </Link>
              <Link href="#projects" className="btn-ghost text-sm sm:text-base">
                Explore case studies
              </Link>
            </div>
          </div>

          <div className="glass-panel space-y-5 rounded-3xl border border-white/10 p-6 text-white/90 shadow-[0_20px_80px_rgba(15,23,42,0.45)] backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Semnan</p>
                <p className="text-3xl font-bold">Real-time Ops</p>
              </div>
              <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-200">
                Water · Energy · Civic
              </span>
            </div>
            <p className="text-sm leading-7 text-white/80">
              A single multidisciplinary team covering data engineering, modelling and operations to keep AI platforms running on the ground with municipal and utility partners.
            </p>
            <div className="grid gap-3 sm:grid-cols-3 text-right sm:text-left">
              <div className="mini-stat items-start text-left">
                <span className="mini-stat__value">13</span>
                <span className="mini-stat__label">Active delivery tracks</span>
              </div>
              <div className="mini-stat items-start text-left">
                <span className="mini-stat__value">1 province</span>
                <span className="mini-stat__label">Deep regional focus</span>
              </div>
              <div className="mini-stat items-start text-left">
                <span className="mini-stat__value">24/7</span>
                <span className="mini-stat__label">Support & monitoring</span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-white/75">
              <strong className="block text-white">Vista Smart Network · Semnan</strong>
              Based at Semnan Science & Technology Park with executive sponsorship and embedded support for provincial utilities, municipalities and healthcare networks.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
