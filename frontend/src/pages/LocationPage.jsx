import { useParams, Navigate, Link } from "react-router-dom";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServicesGrid from "@/components/ServicesGrid";
import AppointmentForm from "@/components/AppointmentForm";
import MapCard from "@/components/MapCard";
import Testimonials from "@/components/Testimonials";
import { LOCATIONS } from "@/data/locations";
import { CLINIC, telLink } from "@/data/clinic";
import { Phone, Star, Home, CheckCircle2 } from "lucide-react";

export default function LocationPage({ slug: slugProp }) {
  const params = useParams();
  const slug = slugProp || params.slug;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return <Navigate to="/" replace />;

  const schema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Physiotherapist"],
    name: `${CLINIC.name} — ${loc.city}`,
    telephone: CLINIC.phone,
    image: CLINIC.logo,
    areaServed: loc.city,
    address: { "@type": "PostalAddress", addressLocality: "Bagnan", addressRegion: "West Bengal", postalCode: "711303", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.5", reviewCount: "128" },
  };

  return (
    <>
      <Seo title={loc.h1} description={loc.metaDesc} path={`/${loc.slug}`} schema={schema} />
      <section className="py-12 sm:py-16 bg-medical-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: loc.city, to: `/${loc.slug}` }]} />
          <div className="mt-6 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-800 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest">
                <Home className="h-3.5 w-3.5" /> Home Visit Available
              </div>
              <h1 className="mt-4 font-[Outfit] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">{loc.h1}</h1>
              <p className="mt-5 text-slate-600 text-lg leading-relaxed">{loc.intro}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a href={telLink} data-testid="loc-call" className="rounded-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-3.5 font-semibold inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {CLINIC.phoneDisplay}</a>
                <Link to="/appointment" data-testid="loc-book" className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3.5 font-semibold">Book Appointment</Link>
                <div className="inline-flex items-center gap-2"><Star className="h-4 w-4 fill-amber-400 text-amber-400" /><span className="text-sm text-slate-700 font-semibold">4.5/5 · 128 patients</span></div>
              </div>
            </div>
            <div className="lg:col-span-5"><AppointmentForm /></div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-[Outfit] text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Physiotherapy services for {loc.city}</h2>
          <p className="mt-3 max-w-2xl text-slate-600">{loc.hoodPara}</p>
          <div className="mt-8"><ServicesGrid limit={8} /></div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <h2 className="font-[Outfit] text-3xl font-bold text-slate-900 tracking-tight">Why {loc.city} patients choose us</h2>
            <ul className="mt-6 space-y-3">
              {["Home visits with all required equipment","Certified physiotherapist — Sk Zishan (DPT)","Written treatment plans & home exercises","Transparent, honest pricing","Evening & Sunday slots available"].map((b) => (
                <li key={b} className="flex items-start gap-2 text-slate-700"><CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" /> {b}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6"><MapCard /></div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-[Outfit] text-3xl font-bold text-slate-900 tracking-tight">What {loc.city} patients say</h2>
          <div className="mt-8"><Testimonials /></div>
        </div>
      </section>
    </>
  );
}
