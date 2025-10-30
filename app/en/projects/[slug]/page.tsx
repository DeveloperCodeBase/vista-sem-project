import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import ProjectExecutiveSummary from "@/components/ProjectExecutiveSummary";
import projects from "@/data/projects";
import Link from "next/link";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPageEn({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return notFound();

  const { titleEn, categoryEn, summaryEn, gallery } = project;
  const slides = gallery.map((item) => ({
    src: item.src,
    alt: item.alt.en,
    caption: item.caption.en
  }));

  return (
    <>
      <Header locale="en" />
      <main className="project-page container space-y-10 py-12 text-left">
        <nav className="project-page__breadcrumb project-page__breadcrumb--ltr">
          <Link href="/en">Home</Link> <span className="mx-2">/</span>
          <Link href="/en#projects">Projects</Link> <span className="mx-2">/</span>
          <span className="text-white">{titleEn}</span>
        </nav>

        <script suppressHydrationWarning type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: titleEn,
          about: categoryEn,
          inLanguage: "en",
          isPartOf: { "@type": "Collection", name: "Projects" }
        })}</script>

        <header className="project-page__hero project-page__hero--ltr">
          <div className="project-page__meta project-page__meta--ltr">
            <span className="project-page__badge">{categoryEn}</span>
            <h1 className="project-page__title">{titleEn}</h1>
            <p className="project-page__summary">{summaryEn}</p>
          </div>
          <div className="project-page__gallery">
            <Carousel items={slides} locale="en" />
          </div>
        </header>

        <section className="project-page__summary-card">
          <ProjectExecutiveSummary project={project} locale="en" variant="page" />
        </section>

        <div className="project-page__cta project-page__cta--ltr">
          <a className="btn" href="/en#contact">
            Book a consultation
          </a>
          <Link className="btn-ghost" href="/en#projects">
            Back to projects
          </Link>
        </div>
      </main>
      <Footer locale="en" />
    </>
  );
}
