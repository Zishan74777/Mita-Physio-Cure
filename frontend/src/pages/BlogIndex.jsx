import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOG_POSTS } from "@/data/blog";
import { ArrowUpRight, CalendarDays } from "lucide-react";

export default function BlogIndex() {
  return (
    <>
      <Seo title="Physiotherapy Blog — Tips & Guides for Bagnan" description="Expert physiotherapy articles from Mita Physio Cure, Bagnan — back pain, sciatica, stroke rehab, home physio guides and recovery tips." path="/blog" />
      <section className="py-12 sm:py-16 bg-medical-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", to: "/blog" }]} />
          <h1 className="mt-6 font-[Outfit] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">Physiotherapy <span className="brand-underline">insights</span> & recovery guides.</h1>
          <p className="mt-5 max-w-3xl text-slate-600 text-lg">Practical, honest advice from Sk Zishan Physio — written for patients in Bagnan and Howrah.</p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} data-testid={`blog-card-${p.slug}`} className="group rounded-2xl overflow-hidden border border-slate-200 bg-white card-lift flex flex-col">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.cover} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-slate-500"><CalendarDays className="h-3.5 w-3.5" /> {new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })} · {p.read}</div>
                <h2 className="mt-3 font-[Outfit] text-lg font-semibold text-slate-900 leading-snug group-hover:text-blue-800">{p.title}</h2>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed flex-1">{p.excerpt}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">Read article <ArrowUpRight className="h-4 w-4" /></div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
