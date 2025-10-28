import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CompanyCarousel from "@/components/CompanyCarousel";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import StatsHighlights from "@/components/StatsHighlights";
import ServicesShowcase from "@/components/ServicesShowcase";
import IndustriesShowcase from "@/components/IndustriesShowcase";
import ProcessRoadmap from "@/components/ProcessRoadmap";
import TestimonialBanner from "@/components/TestimonialBanner";
import projects from "@/data/projects";

export default function Home() {
  return (
    <>
      <Header />
      <main className="space-y-16">
        <Hero />
        <StatsHighlights />

        <section id="projects" className="container space-y-8 py-12">
          <div className="flex flex-col items-end gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-right">
              <h2 className="section-title">پروژه‌های شاخص</h2>
              <p className="text-sm text-white/70">راهکارهای عملیاتی مستقر شده در سازمان‌های حاکمیتی و خدماتی</p>
            </div>
            <span className="badge text-sm">{projects.length} پروژه فعال</span>
          </div>
          <div className="grid-cards">
            {projects.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </section>

        <ServicesShowcase />
        <IndustriesShowcase />
        <CompanyCarousel />
        <ProcessRoadmap />
        <TestimonialBanner />

        <section id="contact" className="container space-y-6 py-20">
          <div className="flex flex-col items-end gap-4 text-right">
            <h2 className="section-title">درخواست همکاری</h2>
            <p className="max-w-3xl text-lg leading-8 text-white/70">
              برای دریافت جلسه تخصصی یا دمو سفارشی، فرم زیر را تکمیل کنید. ظرف ۴۸ ساعت کاری با شما تماس گرفته خواهد شد.
            </p>
          </div>
          <ContactForm />
          <div className="text-sm text-white/60">
            یا مستقیماً تماس بگیرید: ۰۹۱۲۴۷۳۳۲۳۴ — devcodebase.dev@gmail.com
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
