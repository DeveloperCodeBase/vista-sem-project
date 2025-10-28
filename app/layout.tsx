import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شبکه هوشمند ابتکار ویستا",
  description: "AI + GeoAI + CivicTech — راهکارهای حرفه‌ای با استقرار داخلی، RTL کامل و ایران‌سنس",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}
