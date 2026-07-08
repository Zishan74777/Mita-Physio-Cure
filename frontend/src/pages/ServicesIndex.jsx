import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServicesGrid from "@/components/ServicesGrid";
import { Link } from "react-router-dom";

export default function ServicesIndex() {
  return (
    <>
      <Seo title="Physiotherapy Services in Bagnan — 16 Treatments" description="All 16 physiotherapy services at Mita Physio Cure, Bagnan: stroke rehab, back pain, sciatica, sports & post-surgery, home physio and more." path="/services" />
      <section className="py-12 sm:py-16 bg-medical-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services", to: "/services" }]} />
          <h1 className="mt-6 font-[Outfit] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            <span className="brand-underline">Comprehensive</span> physiotherapy services in Bagnan.
          </h1>
          <p className="mt-5 max-w-3xl text-slate-600 text-lg">From stroke rehabilitation to sports injury and elderly care — we deliver evidence-based physiotherapy with one-on-one attention, at the clinic or at home.</p>
        </div>
      </section>
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServicesGrid />
          <div className="mt-14 text-center">
            <Link to="/appointment" data-testid="services-cta" className="rounded-full bg-blue-700 hover:bg-blue-800 text-white px-8 py-3.5 font-semibold inline-flex items-center gap-2">Book an assessment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
