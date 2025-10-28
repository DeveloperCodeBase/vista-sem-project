import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroEN from "@/components/HeroEN";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import StatsHighlightsEN from "@/components/StatsHighlightsEN";
import ServicesShowcaseEN from "@/components/ServicesShowcaseEN";
import ProcessRoadmapEN from "@/components/ProcessRoadmapEN";
import TestimonialBannerEN from "@/components/TestimonialBannerEN";
import projects from "@/data/projects";

export default function HomeEN() {
  return (
    <>
      <Header locale="en" />
      <main className="space-y-16 text-left">
        <HeroEN />
        <StatsHighlightsEN />

        <section id="projects" className="container space-y-8 py-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="section-title">Flagship case studies</h2>
              <p className="text-sm text-white/70">Operational programmes with measurable KPIs across utilities and cities.</p>
            </div>
            <span className="badge text-sm">{projects.length} live projects</span>
          </div>
          <div className="grid-cards">
            {projects.map((p) => (
              <ProjectCard key={p.id} p={p} locale="en" />
            ))}
          </div>
        </section>

        <ServicesShowcaseEN />
        <ProcessRoadmapEN />
        <TestimonialBannerEN />

        <section id="contact" className="container space-y-6 py-20">
          <div className="space-y-3">
            <h2 className="section-title">Let's build the next AI programme</h2>
            <p className="max-w-3xl text-lg leading-8 text-white/70">
              Share your challenge—whether it's water loss, energy optimisation or civic innovation—and our architects will schedule a discovery workshop within two business days.
            </p>
          </div>
          <ContactForm locale="en" />
          <div className="text-sm text-white/60">
            Prefer direct contact? Call +98 912 473 3234 or email devcodebase.dev@gmail.com
          </div>
        </section>
      </main>
      <Footer locale="en" />
    </>
  );
}
