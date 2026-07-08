import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import MapCard from "@/components/MapCard";
import AppointmentForm from "@/components/AppointmentForm";
import { CLINIC, telLink, waLink } from "@/data/clinic";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Seo title="Contact — Physiotherapist in Bagnan" description="Contact Mita Physio Cure, Bagnan. Call +91 74777 07139, WhatsApp, or visit us in Birampur, Bagnan, Howrah. Home visits available." path="/contact" />
      <section className="py-12 sm:py-16 bg-medical-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact", to: "/contact" }]} />
          <h1 className="mt-6 font-[Outfit] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">Get in <span className="brand-underline">touch</span>.</h1>
          <p className="mt-5 max-w-2xl text-slate-600 text-lg">Call, WhatsApp or book online. We&apos;re happy to answer any questions before your first visit.</p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <a href={telLink} data-testid="contact-call" className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 card-lift">
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-700 grid place-items-center"><Phone className="h-6 w-6" /></div>
              <div><div className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Call</div><div className="font-semibold text-slate-900">{CLINIC.phoneDisplay}</div></div>
            </a>
            <a href={waLink("Hi, I have a question about physiotherapy at Mita Physio Cure.")} target="_blank" rel="noreferrer" data-testid="contact-whatsapp" className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 card-lift">
              <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 grid place-items-center"><MessageCircle className="h-6 w-6" /></div>
              <div><div className="text-xs uppercase tracking-widest text-slate-500 font-semibold">WhatsApp</div><div className="font-semibold text-slate-900">{CLINIC.phoneDisplay}</div></div>
            </a>
            <a href={`mailto:${CLINIC.email}`} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 card-lift">
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-700 grid place-items-center"><Mail className="h-6 w-6" /></div>
              <div><div className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Email</div><div className="font-semibold text-slate-900">{CLINIC.email}</div></div>
            </a>
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 grid place-items-center"><MapPin className="h-6 w-6" /></div>
              <div><div className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Address</div><div className="font-semibold text-slate-900">{CLINIC.address}</div></div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-700 grid place-items-center"><Clock className="h-6 w-6" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Working Hours</div>
                {CLINIC.hours.map((h) => (
                  <div key={h.day} className="font-medium text-slate-900 text-sm mt-1">{h.day}: {h.slots.join(" · ")}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <AppointmentForm />
            <MapCard />
          </div>
        </div>
      </section>
    </>
  );
}
