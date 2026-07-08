import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import AppointmentForm from "@/components/AppointmentForm";
import MapCard from "@/components/MapCard";
import { CLINIC } from "@/data/clinic";
import { Clock, ShieldCheck, Home } from "lucide-react";

export default function Appointment() {
  return (
    <>
      <Seo title="Book Appointment — Physiotherapist Bagnan" description="Book a physiotherapy appointment at Mita Physio Cure, Bagnan. Clinic or home visit. Instant confirmation on WhatsApp. Call +91 74777 07139." path="/appointment" />
      <section className="py-12 sm:py-16 bg-medical-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Book Appointment", to: "/appointment" }]} />
          <h1 className="mt-6 font-[Outfit] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">Book your <span className="brand-underline">appointment</span>.</h1>
          <p className="mt-5 max-w-2xl text-slate-600 text-lg">Fill the form and we&apos;ll confirm your slot on WhatsApp in minutes. Prefer talking? Call {CLINIC.phoneDisplay}.</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-800 px-3 py-1.5 font-semibold"><Home className="h-4 w-4" /> Home Visit Available</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-800 px-3 py-1.5 font-semibold"><Clock className="h-4 w-4" /> Same-week slots</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 text-slate-700 px-3 py-1.5 font-semibold"><ShieldCheck className="h-4 w-4" /> No advance payment</span>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <AppointmentForm />
          <div className="space-y-6">
            <MapCard />
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="font-[Outfit] font-semibold text-slate-900 text-lg">Working Hours</h3>
              {CLINIC.hours.map((h) => (
                <div key={h.day} className="mt-3 flex justify-between text-sm">
                  <span className="text-slate-500">{h.day}</span>
                  <span className="font-medium text-slate-900 text-right">{h.slots.join(" · ")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
