import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection, { FAQSchema } from "@/components/FAQSection";
import { Link } from "react-router-dom";

export default function FAQPage() {
  return (
    <>
      <Seo title="FAQ — Physiotherapy in Bagnan" description="Frequently asked questions about physiotherapy at Mita Physio Cure, Bagnan — home visits, sessions needed, working hours, first-visit tips and more." path="/faq" />
      <FAQSchema />
      <section className="py-12 sm:py-16 bg-medical-grid">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "FAQ", to: "/faq" }]} />
          <h1 className="mt-6 font-[Outfit] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">Frequently asked <span className="brand-underline">questions</span>.</h1>
        </div>
      </section>
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FAQSection />
          <div className="mt-10 rounded-2xl bg-blue-800 text-white p-6 sm:p-8 text-center">
            <h3 className="font-[Outfit] text-xl font-bold">Still have a question?</h3>
            <p className="mt-2 text-blue-100 text-sm">We&apos;re happy to help before your first visit.</p>
            <Link to="/contact" data-testid="faq-contact" className="mt-4 inline-block rounded-full bg-emerald-500 hover:bg-emerald-600 px-6 py-3 font-semibold">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
