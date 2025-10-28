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

  const content = project.locales.en;

  return (
    <>
      <Header locale="en" />
      <main className="container space-y-8 py-10 text-left">
        <nav className="text-sm text-white/60">
          <Link href="/en">Home</Link> <span className="mx-2">/</span>
          <Link href="/en#projects">Projects</Link> <span className="mx-2">/</span>
          <span className="text-white">{content.title}</span>
        </nav>

        <script suppressHydrationWarning type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: content.title,
          about: content.category,
          inLanguage: "en",
          isPartOf: { "@type": "Collection", name: "Projects" }
        })}</script>

        <h1 className="text-3xl font-black">{content.title}</h1>
        <Carousel
          items={project.gallery.map((item) => ({
            src: item.src,
            alt: item.alt.en,
            caption: item.caption.en
          }))}
          locale="en"
        />

        <section className="card p-6">
          <ProjectExecutiveSummary project={project} locale="en" />
        </section>

        <div className="flex items-center gap-3">
          <a className="btn" href="/en#contact">
            Book a consultation
          </a>
          <Link className="btn bg-white/10 hover:bg-white/20" href="/en#projects">
            Back to projects
          </Link>
        </div>
      </main>
      <Footer locale="en" />
    </>
  );
}
