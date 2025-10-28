"use client";

import * as React from "react";
import Link from "next/link";

const heroImages = [
  "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1920&auto=format&fit=crop"
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
        {heroImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="AI infrastructure"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
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
              Operational <span className="text-cyan-300">AI platforms</span> for water, energy and resilient cities
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              We architect, deploy and support AI-driven systems—from leak detection digital twins to predictive maintenance and
              executive dashboards—delivered on-premises with full security governance.
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
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Impact</p>
                <p className="text-3xl font-bold">+28%</p>
              </div>
              <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-200">
                Water & Energy
              </span>
            </div>
            <p className="text-sm leading-7 text-white/80">
              Faster leak detection, optimized pressure management and reduced field OPEX through predictive analytics and digital twins.
            </p>
            <div className="grid gap-3 sm:grid-cols-3 text-right sm:text-left">
              <div className="mini-stat items-start text-left">
                <span className="mini-stat__value">12+</span>
                <span className="mini-stat__label">Live deployments</span>
              </div>
              <div className="mini-stat items-start text-left">
                <span className="mini-stat__value">6 regions</span>
                <span className="mini-stat__label">Nationwide coverage</span>
              </div>
              <div className="mini-stat items-start text-left">
                <span className="mini-stat__value">24/7</span>
                <span className="mini-stat__label">Operational monitoring</span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-white/75">
              <strong className="block text-white">Government & utility ready</strong>
              Full knowledge transfer, on-premises deployment and secure integration with SCADA, GIS and enterprise systems.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
