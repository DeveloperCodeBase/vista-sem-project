"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeaderProps = {
  locale?: "fa" | "en";
};

export default function Header({ locale = "fa" }: HeaderProps) {
  const navItems =
    locale === "fa"
      ? [
          { href: "#projects", label: "پروژه‌ها" },
          { href: "#services", label: "خدمات" },
          { href: "#contact", label: "تماس" }
        ]
      : [
          { href: "#projects", label: "Projects" },
          { href: "#services", label: "Services" },
          { href: "#contact", label: "Contact" }
        ];

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isFa = locale === "fa";
  const prefix = isFa ? "" : "/en";
  const switcher = isFa ? { href: "/en", label: "EN" } : { href: "/", label: "FA" };
  const brandTitle = isFa ? "شبکه هوشمند ابتکار ویستا" : "Vista Smart Network";
  const brandSubtitle = isFa ? "AI, GeoAI & CivicTech" : "AI, GeoAI & CivicTech";

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "bg-[#050812]/90 shadow-[0_12px_40px_rgba(3,5,12,0.55)] backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <Link href={isFa ? "/" : "/en"} className={`flex flex-col ${isFa ? "items-end text-right" : "items-start text-left"}`}>
          <span className="text-base font-semibold text-white">{brandTitle}</span>
          <span className="text-xs text-white/60">{brandSubtitle}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={`${prefix}${item.href}`} className="hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href={switcher.href} className="text-white/60 hover:text-white">
            {switcher.label}
          </Link>
        </nav>
        <button className="sm:hidden btn-ghost" onClick={() => setOpen(true)}>
          ☰
        </button>
      </div>

      <div className={`mnav ${open ? "open" : ""}`}>
        <div className="backdrop" onClick={() => setOpen(false)} />
        <div className="sheet space-y-5">
          <div className="flex items-center justify-between">
            <span className="font-bold">{isFa ? "منو" : "Menu"}</span>
            <button className="btn" onClick={() => setOpen(false)}>
              {isFa ? "بستن" : "Close"}
            </button>
          </div>
          <nav className={`flex flex-col gap-4 text-white/90 ${isFa ? "text-right" : "text-left"}`}>
            {navItems.map((item) => (
              <Link key={item.href} href={`${prefix}${item.href}`} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href={switcher.href} onClick={() => setOpen(false)}>
              {switcher.label}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
