import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import projects from "@/data/projects";
import Link from "next/link";

export async function generateStaticParams(){
  return projects.map(p=> ({ slug: p.slug }));
}

export default function ProjectPage({ params }:{ params:{ slug:string }}){
  const p = projects.find(x=> x.slug === params.slug);
  if(!p) return notFound();

  return (
    <>
      <Header />
      <main className="container py-10 space-y-8">
        <nav className="text-white/60 text-sm">
          <Link href="/">خانه</Link> <span className="mx-2">/</span>
          <Link href="/#projects">پروژه‌ها</Link> <span className="mx-2">/</span>
          <span className="text-white">{p.title}</span>
        </nav>
        <script suppressHydrationWarning type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"CreativeWork",
          "name": p?.title,
          "about": p?.category,
          "inLanguage":"fa",
          "isPartOf":{"@type":"Collection","name":"Projects"}
        })}</script>


        <h1 className="text-3xl font-black">{p.title}</h1>
        <Carousel images={p.gallery} />

        <article className="card p-6 prose-rtl" dangerouslySetInnerHTML={{ __html: p.content }} />

        <div className="flex items-center gap-3">
          <a className="btn" href="/#contact">درخواست همکاری</a>
          <Link className="btn bg-white/10 hover:bg-white/20" href="/#projects">بازگشت به پروژه‌ها</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
