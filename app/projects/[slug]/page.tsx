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

  const { title, category, gallery } = project;

  return (
    <>
      <Header />
      <main className="container py-10 space-y-8">
        <nav className="text-white/60 text-sm">
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


        <h1 className="text-3xl font-black">{title}</h1>
        <Carousel
          items={gallery.map((src, index) => ({
            src,
            alt: `${title} — نمای ${index + 1}`
          }))}
          locale="fa"
        />

        <section className="card p-6">
          <ProjectExecutiveSummary project={project} locale="fa" />
        </section>

        <div className="flex items-center gap-3">
          <a className="btn" href="/#contact">درخواست همکاری</a>
          <Link className="btn bg-white/10 hover:bg-white/20" href="/#projects">بازگشت به پروژه‌ها</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
