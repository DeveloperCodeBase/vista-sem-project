import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import ProjectExecutiveSummary from "@/components/ProjectExecutiveSummary";
import projects from "@/data/projects";
import Link from "next/link";

export async function generateStaticParams(){
  return projects.map(p=> ({ slug: p.slug }));
}

export default function ProjectPage({ params }:{ params:{ slug:string }}){
  const project = projects.find((item) => item.slug === params.slug);
  if(!project) return notFound();

  const { title, category, gallery, summary } = project;
  const slides = gallery.map((item) => ({
    src: item.src,
    alt: item.alt.fa,
    caption: item.caption.fa
  }));

  return (
    <>
      <Header />
      <main className="project-page container space-y-10 py-12">
        <nav className="project-page__breadcrumb">
          <Link href="/">خانه</Link> <span className="mx-2">/</span>
          <Link href="/#projects">پروژه‌ها</Link> <span className="mx-2">/</span>
          <span className="text-white">{title}</span>
        </nav>
        <script suppressHydrationWarning type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"CreativeWork",
          "name": title,
          "about": category,
          "inLanguage":"fa",
          "isPartOf":{"@type":"Collection","name":"Projects"}
        })}</script>

        <header className="project-page__hero">
          <div className="project-page__meta">
            <span className="project-page__badge">{category}</span>
            <h1 className="project-page__title">{title}</h1>
            <p className="project-page__summary">{summary}</p>
          </div>
          <div className="project-page__gallery">
            <Carousel items={slides} locale="fa" />
          </div>
        </header>

        <section className="project-page__summary-card">
          <ProjectExecutiveSummary project={project} locale="fa" variant="page" />
        </section>

        <div className="project-page__cta">
          <a className="btn" href="/#contact">درخواست همکاری</a>
          <Link className="btn-ghost" href="/#projects">بازگشت به پروژه‌ها</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
