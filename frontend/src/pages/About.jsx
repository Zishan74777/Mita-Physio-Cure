import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Stats from "@/components/Stats";
import { Award, GraduationCap, Heart, ShieldCheck } from "lucide-react";
import { CLINIC, telLink } from "@/data/clinic";

export default function About() {
  return (
    <>
      <Seo title="About Sk Zishan Physio — Physiotherapist Bagnan" description="Learn about Mita Physio Cure and lead physiotherapist Sk Zishan Physio (DPT). Serving Bagnan, Howrah with certified, evidence-based physiotherapy." path="/about" />
      <section className="py-12 sm:py-16 bg-medical-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About", to: "/about" }]} />
          <div className="mt-6 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="text-xs uppercase tracking-widest font-semibold text-emerald-700">About Us</div>
              <h1 className="mt-2 font-[Outfit] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Meet <span className="brand-underline">Sk Zishan Physio</span> — Bagnan&apos;s dedicated physiotherapist.
              </h1>
              <p className="mt-5 text-slate-600 leading-relaxed">
                With over 3.5 years of clinical practice, Sk Zishan (DPT) founded Mita Physio Cure to raise the standard of physiotherapy care in Bagnan and Howrah. Every session is one-on-one, unhurried, and guided by a written plan you can trust.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={telLink} data-testid="about-call" className="rounded-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 font-semibold">Call {CLINIC.phoneDisplay}</a>
                <a href="/appointment" data-testid="about-book" className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 font-semibold">Book Appointment</a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden ring-1 ring-slate-200 shadow-xl shadow-blue-900/5">
                <img src="https://images.pexels.com/photos/7789616/pexels-photo-7789616.jpeg" alt="Physiotherapy session at Mita Physio Cure, Bagnan" className="w-full h-[440px] object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Stats />
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-3">
          {[
            { icon: GraduationCap, t: "Qualified & Certified", d: "Diploma in Physiotherapy (DPT), Registered practitioner, continued education in neuro & sports rehab." },
            { icon: Heart, t: "Patient-First Philosophy", d: "We take the time to listen, examine, and explain — because informed patients recover faster." },
            { icon: ShieldCheck, t: "Ethical Practice", d: "Transparent pricing. Honest advice. No unnecessary sessions or upselling." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-slate-200 p-6 card-lift">
              <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-700 grid place-items-center"><Icon className="h-5 w-5" /></div>
              <div className="mt-4 font-[Outfit] font-semibold text-slate-900 text-lg">{t}</div>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-widest font-semibold text-emerald-700">Our Story</div>
          <h2 className="mt-2 font-[Outfit] text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">A clinic built around real recoveries.</h2>
          <div className="mt-6 space-y-5 text-slate-600 leading-relaxed">
            <p>Growing up in Bagnan, Sk Zishan saw first-hand how far families had to travel — often to Kolkata — for good physiotherapy. Elderly patients, stroke survivors and post-operative cases were the worst affected.</p>
            <p>Mita Physio Cure was founded to change that. From our clinic in Birampur, we deliver hospital-grade physiotherapy protocols with the warmth of neighbourhood care. Home visits mean recovery no longer stops at your doorstep.</p>
            <p>Today, more than 1500 patients across Bagnan, Amta, Uluberia and greater Howrah have completed their recovery journey with us. That is what keeps us going.</p>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-800 px-5 py-3 text-sm font-semibold">
            <Award className="h-5 w-5" /> Rated 4.5/5 by 128+ patients on Google
          </div>
        </div>
      </section>
    </>
  );
}
