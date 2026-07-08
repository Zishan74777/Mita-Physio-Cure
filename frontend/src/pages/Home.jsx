import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Stats from "@/components/Stats";
import AreasMarquee from "@/components/AreasMarquee";
import Testimonials from "@/components/Testimonials";
import FAQSection, { FAQSchema } from "@/components/FAQSection";
import MapCard from "@/components/MapCard";
import AppointmentForm from "@/components/AppointmentForm";
import { ArrowRight, ShieldCheck, Home as HomeIcon, HeartPulse, Award } from "lucide-react";
import { CLINIC } from "@/data/clinic";

export default function Home() {
  return (
    <>
      <Seo
        title="Best Physiotherapist in Bagnan · Home Visit Available"
        description="Mita Physio Cure by Sk Zishan Physio — expert physiotherapy in Bagnan, Howrah for stroke rehab, back pain, sciatica, sports & post-surgery. Book: +91 74777 07139."
        path="/"
      />
      <FAQSchema />
      <Hero />
      <AreasMarquee />

      {/* Why choose */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-6">
              <div className="text-xs uppercase tracking-widest font-semibold text-emerald-700">Why Mita Physio Cure</div>
              <h2 className="mt-2 font-[Outfit] text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">Bagnan&apos;s most personal, most persistent physiotherapy team.</h2>
            </div>
            <div className="lg:col-span-6 text-slate-600 leading-relaxed">
              We are not a five-minute OPD. Every patient gets a structured assessment, a written treatment plan, hands-on therapy and a home-exercise routine designed around your life.
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: HomeIcon, t: "Home Visits", d: "Doorstep physiotherapy across Bagnan, Amta, Uluberia & Howrah." },
              { icon: ShieldCheck, t: "Certified BPT", d: "Led by Sk Zishan Physio with 5+ years of clinical practice." },
              { icon: HeartPulse, t: "Evidence-Based", d: "Modern protocols — manual therapy, electrotherapy & exercise science." },
              { icon: Award, t: "4.5/5 Rated", d: "128+ patients across Bagnan trust us for lasting recovery." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-slate-200 bg-white p-6 card-lift">
                <div className="h-11 w-11 rounded-xl bg-emerald-50 text-emerald-600 grid place-items-center"><Icon className="h-5 w-5" /></div>
                <div className="mt-4 font-[Outfit] font-semibold text-slate-900">{t}</div>
                <p className="mt-1 text-sm text-slate-500 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12"><Stats /></div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs uppercase tracking-widest font-semibold text-emerald-700">Services</div>
              <h2 className="mt-2 font-[Outfit] text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">16 physiotherapy services under one roof.</h2>
            </div>
            <Link to="/services" data-testid="see-all-services" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800">View all services <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <ServicesGrid limit={8} />
        </div>
      </section>

      {/* About preview */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden ring-1 ring-slate-200 shadow-xl shadow-blue-900/5">
              <img src="https://images.pexels.com/photos/7789616/pexels-photo-7789616.jpeg" alt="Mita Physio Cure clinic interior — Bagnan physiotherapy" className="w-full h-[420px] object-cover" loading="lazy" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="text-xs uppercase tracking-widest font-semibold text-emerald-700">About the Clinic</div>
            <h2 className="mt-2 font-[Outfit] text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Led by <span className="brand-underline">Sk Zishan Physio</span> — a physiotherapist who listens.</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">Mita Physio Cure was founded with a simple mission — make world-class physiotherapy accessible to every family in Bagnan and Howrah. We combine modern rehabilitation science with genuine, patient-first care.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex gap-2"><span className="text-emerald-600">✓</span> One-on-one 45–60 minute sessions</li>
              <li className="flex gap-2"><span className="text-emerald-600">✓</span> Written, structured treatment plans</li>
              <li className="flex gap-2"><span className="text-emerald-600">✓</span> Home visits across Bagnan, Amta & Uluberia</li>
              <li className="flex gap-2"><span className="text-emerald-600">✓</span> Transparent fees, no hidden charges</li>
            </ul>
            <Link to="/about" data-testid="about-more" className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 font-semibold">Learn more about us <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* Appointment + Map */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold text-emerald-700">Book Now</div>
            <h2 className="mt-2 font-[Outfit] text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Reserve your slot in 30 seconds.</h2>
            <p className="mt-3 text-slate-600">We reply on WhatsApp within minutes during working hours ({CLINIC.hours[0].slots.join(", ")}).</p>
            <div className="mt-6"><AppointmentForm /></div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold text-emerald-700">Visit the Clinic</div>
            <h2 className="mt-2 font-[Outfit] text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Find us in Birampur, Bagnan.</h2>
            <p className="mt-3 text-slate-600">Ample parking · Wheelchair accessible · Warm, calm interiors.</p>
            <div className="mt-6"><MapCard /></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest font-semibold text-emerald-700">Patient Stories</div>
            <h2 className="mt-2 font-[Outfit] text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Real recoveries. Real people. From Bagnan.</h2>
          </div>
          <div className="mt-10"><Testimonials /></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-widest font-semibold text-emerald-700">FAQ</div>
          <h2 className="mt-2 font-[Outfit] text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Answers to what patients ask most.</h2>
          <div className="mt-8"><FAQSection limit={6} /></div>
          <div className="mt-8">
            <Link to="/faq" className="text-blue-700 font-semibold hover:text-blue-800 inline-flex items-center gap-2">See all questions <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-blue-800 text-white p-8 sm:p-14 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="grid md:grid-cols-2 gap-6 items-center relative">
              <div>
                <h3 className="font-[Outfit] text-3xl sm:text-4xl font-bold">Ready to move without pain?</h3>
                <p className="mt-3 text-blue-100">Talk to Sk Zishan Physio today — assessment, plan and first session available this week.</p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a href={`tel:${CLINIC.phone}`} data-testid="cta-call" className="rounded-full bg-white text-blue-800 px-6 py-3 font-semibold">Call {CLINIC.phoneDisplay}</a>
                <Link to="/appointment" data-testid="cta-book" className="rounded-full bg-emerald-500 hover:bg-emerald-600 px-6 py-3 font-semibold">Book Appointment</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
