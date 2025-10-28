"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

export type CarouselItem = {
  src: string;
  alt: string;
  caption?: string;
};

type CarouselProps = {
  items: CarouselItem[];
  locale?: "fa" | "en";
};

export default function Carousel({ items, locale = "fa" }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setPaused] = useState(false);
  const isFa = locale === "fa";
  const containerRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (items.length <= 1 || isPaused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [items.length, isPaused, reducedMotion]);

  useEffect(() => {
    if (!containerRef.current) return;
    const node = containerRef.current;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((prev) => (prev + 1) % items.length);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((prev) => (prev - 1 + items.length) % items.length);
      }
    };
    node.addEventListener("keydown", handleKey);
    return () => node.removeEventListener("keydown", handleKey);
  }, [items.length]);

  const goTo = (next: number) => {
    const total = items.length;
    if (total === 0) return;
    const normalised = ((next % total) + total) % total;
    setIndex(normalised);
  };

  return (
    <div
      ref={containerRef}
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      tabIndex={0}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.src} className="relative h-[320px] min-w-full sm:h-[380px]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 60vw, 90vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        {items.length > 1 ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-4">
            <button
              type="button"
              className="pointer-events-auto rounded-full border border-white/20 bg-black/60 px-3 py-2 text-white transition hover:bg-black/80"
              onClick={() => goTo(index - 1)}
              aria-label={isFa ? "قبلی" : "Previous"}
            >
              ‹
            </button>
            <button
              type="button"
              className="pointer-events-auto rounded-full border border-white/20 bg-black/60 px-3 py-2 text-white transition hover:bg-black/80"
              onClick={() => goTo(index + 1)}
              aria-label={isFa ? "بعدی" : "Next"}
            >
              ›
            </button>
          </div>
        ) : null}
      </div>
      <div className={`mt-4 space-y-3 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/75 ${isFa ? "text-right" : "text-left"}`} aria-live="polite">
        <div className="flex items-center justify-between text-xs text-white/50">
          <span>{isFa ? "نمایش" : "Slide"}</span>
          <span>
            {index + 1}/{items.length}
          </span>
        </div>
        {items[index]?.caption ? <p className="leading-7">{items[index].caption}</p> : null}
      </div>
      {items.length > 1 ? (
        <div className={`mt-3 flex items-center gap-2 ${isFa ? "justify-end" : "justify-start"}`}>
          {items.map((item, i) => (
            <button
              key={item.src}
              className={`h-2 w-6 rounded-full transition ${i === index ? "bg-cyan-300" : "bg-white/20"}`}
              onClick={() => goTo(i)}
              aria-label={`${isFa ? "نمایش" : "Slide"} ${i + 1}`}
              aria-pressed={i === index}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
