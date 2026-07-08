import { useParams, Link, Navigate } from "react-router-dom";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import AppointmentForm from "@/components/AppointmentForm";
import { SERVICES } from "@/data/services";
import { CLINIC, telLink, waLink } from "@/data/clinic";
import { Phone, MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;
  const Icon = service.icon;
  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.long,
    howPerformed: service.long,
    provider: {
      "@type": "Physiotherapist",
      name: CLINIC.name,
      telephone: CLINIC.phone,
      address: { "@type": "PostalAddress", addressLocality: "Bagnan", addressRegion: "West Bengal", postalCode: "711303", addressCountry: "IN" },
    },
  };

  return (
    <>
      <Seo
        title={`${service.title} in Bagnan`}
        description={`${service.short} ${service.title} at Mita Physio Cure, Bagnan by Sk Zishan Physio. Home visits available. Book: ${CLINIC.phoneDisplay}.`}
        path={`/services/${service.slug}`}
        schema={schema}
      />
      <section className="py-12 sm:py-16 bg-medical-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: service.title, to: `/services/${service.slug}` }]} />
          <div className="mt-6 flex items-start gap-4">
            <div className="h-14 w-14 rounded-2xl bg-blue-700 text-white grid place-items-center shrink-0"><Icon className="h-7 w-7" /></div>
            <div>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">{service.tag}</span>
              <h1 className="mt-2 font-[Outfit] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">{service.title} in Bagnan</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="text-lg text-slate-700 leading-relaxed">{service.long}</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                "Personalised one-on-one sessions",
                "Home visits available in Bagnan",
                "Written treatment plan & home exercises",
                "Modern equipment & manual therapy",
              ].map((b) => (
                <div key={b} className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span className="text-sm text-slate-700">{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={telLink} data-testid="service-call" className="rounded-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 font-semibold inline-flex items-center gap-2"><Phone className="h-4 w-4" /> Call to Book</a>
              <a href={waLink(`Hi, I'd like to book ${service.title} at Mita Physio Cure.`)} target="_blank" rel="noreferrer" data-testid="service-whatsapp" className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 font-semibold inline-flex items-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
            </div>

            <div className="mt-14">
              <h2 className="font-[Outfit] text-2xl font-bold text-slate-900">Related services</h2>
              <div className="mt-5 grid sm:grid-cols-2 gap-3">
                {related.map((r) => {
                  const RIcon = r.icon;
                  return (
                    <Link key={r.slug} to={`/services/${r.slug}`} data-testid={`related-${r.slug}`} className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 card-lift">
                      <div className="h-9 w-9 rounded-lg bg-blue-50 text-blue-700 grid place-items-center"><RIcon className="h-4 w-4" /></div>
                      <span className="text-sm font-medium text-slate-800">{r.title}</span>
                      <ArrowRight className="h-4 w-4 ml-auto text-slate-400 group-hover:text-blue-700" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <AppointmentForm />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
