import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Star, Home, ShieldCheck, ArrowRight } from "lucide-react";
import { CLINIC, telLink } from "@/data/clinic";

export default function Hero() {
  return (
    <section data-testid="hero-section" className="relative bg-medical-grid overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-16 sm:pb-24 grid lg:grid-cols-12 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-800 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest">
            <Home className="h-3.5 w-3.5" /> Home Visit Available in Bagnan
          </div>

          <h1 className="mt-5 font-[Outfit] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05]">
            Move Again. Live Again.
            <br />
            <span className="brand-underline">Bagnan&apos;s Trusted</span> Physiotherapy Clinic.
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
            Expert physiotherapy by <span className="font-semibold text-slate-800">Sk Zishan Physio</span> for stroke rehab, back pain, sports injury, post-surgery recovery and elderly care — at our clinic in Birampur, Bagnan or right at your home.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/appointment" data-testid="hero-book-btn" className="inline-flex items-center gap-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-3.5 font-semibold shine-hover">
              Book Appointment <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={telLink} data-testid="hero-call-btn" className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 hover:border-blue-300 text-slate-900 px-6 py-3.5 font-semibold">
              <Phone className="h-4 w-4 text-blue-700" /> {CLINIC.phoneDisplay}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
            <div className="inline-flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className={`h-4 w-4 ${i <= 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400 text-amber-400"}`} />
                ))}
              </div>
              <span className="text-slate-700"><span className="font-bold text-slate-900">{CLINIC.rating}/5</span> · {CLINIC.reviews} patients</span>
            </div>
            <div className="inline-flex items-center gap-2 text-slate-700"><ShieldCheck className="h-4 w-4 text-emerald-600" /> Certified BPT · 5+ years experience</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="lg:col-span-5 relative">
          <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-slate-200 shadow-2xl shadow-blue-900/10">
            <img
              src="https://images.pexels.com/photos/20860625/pexels-photo-20860625.jpeg"
              alt="Physiotherapist treating a patient in Bagnan — Mita Physio Cure"
              className="w-full h-[420px] sm:h-[520px] object-cover"
              width="700" height="520" loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            <div className="absolute left-4 right-4 bottom-4 sm:left-6 sm:right-6 sm:bottom-6 rounded-2xl bg-white/95 backdrop-blur px-5 py-4 shadow-xl flex items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-emerald-700 font-semibold">Head Physiotherapist</div>
                <div className="font-[Outfit] text-lg font-bold text-slate-900">{CLINIC.owner}</div>
                <div className="text-xs text-slate-500">{CLINIC.ownerTitle}</div>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">SZ</div>
            </div>
          </div>

          <div className="absolute -top-4 -left-4 hidden sm:flex items-center gap-2 rounded-2xl bg-white shadow-lg border border-slate-100 px-4 py-3">
            <div className="h-9 w-9 rounded-xl bg-emerald-50 text-emerald-600 grid place-items-center"><Home className="h-5 w-5" /></div>
            <div>
              <div className="text-xs text-slate-500">Home Visit</div>
              <div className="text-sm font-semibold text-slate-900">Bagnan · Amta · Uluberia</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
