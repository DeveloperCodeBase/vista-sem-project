"use client";

import { useEffect, useState } from "react";
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
  const isFa = locale === "fa";

  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % items.length), 6500);
    return () => clearInterval(timer);
  }, [items.length]);

  const go = (delta: number) => {
    setIndex((prev) => (prev + delta + items.length) % items.length);
  };

  return (
    <div className="carousel" role="region" aria-roledescription="carousel">
      <div className="relative">
        <div className="relative h-[320px] w-full overflow-hidden sm:h-[380px]">
          {items.map((item, i) => (
            <div
              key={item.src}
              className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
              aria-hidden={i !== index}
            >
              <Image src={item.src} alt={item.alt} fill sizes="(min-width: 1024px) 60vw, 90vw" className="object-cover" />
            </div>
          ))}
        </div>
        {items.length > 1 ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-4">
            <button
              type="button"
              className="pointer-events-auto rounded-full border border-white/20 bg-black/60 px-3 py-2 text-white transition hover:bg-black/80"
              onClick={() => go(-1)}
              aria-label={isFa ? "قبلی" : "Previous"}
            >
              ‹
            </button>
            <button
              type="button"
              className="pointer-events-auto rounded-full border border-white/20 bg-black/60 px-3 py-2 text-white transition hover:bg-black/80"
              onClick={() => go(1)}
              aria-label={isFa ? "بعدی" : "Next"}
            >
              ›
            </button>
          </div>
        ) : null}
      </div>
      <div className={`mt-4 space-y-3 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/75 ${isFa ? "text-right" : "text-left"}`}>
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
              onClick={() => setIndex(i)}
              aria-label={(isFa ? "نمای" : "Slide ") + (i + 1)}
              aria-pressed={i === index}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
