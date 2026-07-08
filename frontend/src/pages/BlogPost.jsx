import { useParams, Link, Navigate } from "react-router-dom";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOG_POSTS } from "@/data/blog";
import { CLINIC } from "@/data/clinic";
import { CalendarDays, User, ArrowRight } from "lucide-react";

function renderLine(line, i) {
  // simple **bold** support
  const parts = line.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p key={i} className="text-slate-700 leading-relaxed mb-4">
      {parts.map((part, j) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={j} className="text-slate-900 font-semibold">{part.slice(2, -2)}</strong>
        ) : (
          <span key={j}>{part}</span>
        )
      )}
    </p>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;
  const more = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.cover,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: CLINIC.name, logo: { "@type": "ImageObject", url: CLINIC.logo } },
    description: post.excerpt,
  };

  return (
    <>
      <Seo title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} image={post.cover} schema={schema} />
      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", to: "/blog" }, { label: post.title, to: `/blog/${post.slug}` }]} />
          <h1 className="mt-6 font-[Outfit] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
            <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span>{post.read}</span>
          </div>
          <div className="mt-8 rounded-3xl overflow-hidden ring-1 ring-slate-200">
            <img src={post.cover} alt={post.title} className="w-full h-[320px] sm:h-[420px] object-cover" loading="eager" />
          </div>
          <div className="mt-10">{post.body.map(renderLine)}</div>

          <div className="mt-10 rounded-2xl bg-blue-800 text-white p-6 sm:p-8">
            <h3 className="font-[Outfit] text-xl font-bold">Need help with this in Bagnan?</h3>
            <p className="mt-2 text-blue-100 text-sm">Book an assessment with Sk Zishan Physio — clinic or home visit.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/appointment" data-testid="blog-cta-book" className="rounded-full bg-emerald-500 hover:bg-emerald-600 px-5 py-2.5 text-sm font-semibold">Book Appointment</Link>
              <a href={`tel:${CLINIC.phone}`} data-testid="blog-cta-call" className="rounded-full bg-white text-blue-800 px-5 py-2.5 text-sm font-semibold">Call {CLINIC.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </article>

      <section className="py-14 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-[Outfit] text-2xl font-bold text-slate-900">More from the blog</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {more.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group rounded-2xl overflow-hidden border border-slate-200 bg-white card-lift">
                <div className="aspect-[16/10] overflow-hidden"><img src={p.cover} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" loading="lazy" /></div>
                <div className="p-5">
                  <h3 className="font-[Outfit] font-semibold text-slate-900 leading-snug group-hover:text-blue-800">{p.title}</h3>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">Read <ArrowRight className="h-4 w-4" /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
