import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vista Smart Network — AI & GeoAI solutions",
  description: "Operational AI platforms for water, energy and cities with on-premises deployment and measurable KPIs.",
};

export default function ENLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
