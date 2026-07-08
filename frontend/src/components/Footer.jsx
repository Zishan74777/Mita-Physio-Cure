import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import { CLINIC, telLink, waLink } from "@/data/clinic";
import { SERVICES } from "@/data/services";
import { LOCATIONS } from "@/data/locations";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-slate-900 text-slate-300 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={CLINIC.logo} alt="Mita Physio Cure Logo" width="48" height="48" className="h-12 w-12 rounded-xl bg-white/10 p-1" />
            <div>
              <div className="font-[Outfit] font-bold text-white text-lg">{CLINIC.name}</div>
              <div className="text-xs uppercase tracking-widest text-emerald-400">by {CLINIC.owner}</div>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">The trusted physiotherapy clinic of Bagnan. Expert care for stroke rehab, back pain, sports injury and elderly patients. Home visits available.</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-300 px-3 py-1 text-xs font-semibold">
            <Star className="h-4 w-4 fill-emerald-300" /> {CLINIC.rating}/5 · {CLINIC.reviews} patient reviews
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-emerald-400" data-testid={`footer-service-${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Serving Areas</h4>
          <ul className="space-y-2 text-sm">
            {LOCATIONS.map((l) => (
              <li key={l.slug}>
                <Link to={`/${l.slug}`} className="hover:text-emerald-400" data-testid={`footer-location-${l.slug}`}>{l.city}</Link>
              </li>
            ))}
            <li><Link to="/blog" className="hover:text-emerald-400">Blog</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-emerald-400">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-emerald-400">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="h-5 w-5 text-emerald-400 shrink-0" /><span>{CLINIC.address}</span></li>
            <li className="flex gap-3"><Phone className="h-5 w-5 text-emerald-400 shrink-0" /><a href={telLink} className="hover:text-emerald-400" data-testid="footer-phone">{CLINIC.phoneDisplay}</a></li>
            <li className="flex gap-3"><Mail className="h-5 w-5 text-emerald-400 shrink-0" /><a href={`mailto:${CLINIC.email}`} className="hover:text-emerald-400">{CLINIC.email}</a></li>
            <li className="flex gap-3"><Clock className="h-5 w-5 text-emerald-400 shrink-0" /><div>
              <div>Mon–Sat: 8AM–12PM · 4PM–8PM</div>
              <div>Sunday: 8AM–1PM</div>
            </div></li>
          </ul>
          <a
            href={waLink("Hello, I'd like to book a physiotherapy appointment.")}
            target="_blank" rel="noreferrer"
            data-testid="footer-whatsapp"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 text-sm font-semibold"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-slate-500">
          <div>© {new Date().getFullYear()} Mita Physio Cure · All rights reserved.</div>
          <div>Designed for Bagnan · Howrah · West Bengal</div>
        </div>
      </div>
    </footer>
  );
}
