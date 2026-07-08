import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const visible = [TESTIMONIALS[idx], TESTIMONIALS[(idx + 1) % TESTIMONIALS.length], TESTIMONIALS[(idx + 2) % TESTIMONIALS.length]];

  return (
    <div data-testid="testimonials-section">
      <div className="grid gap-5 md:grid-cols-3">
        {visible.map((t, i) => (
          <figure key={`${idx}-${i}`} data-testid={`testimonial-${i}`} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: t.rating }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          <blockquote className="text-slate-700 leading-relaxed">{`"${t.text}"`}</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-100 to-emerald-100 grid place-items-center text-sm font-bold text-blue-800">
                {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button data-testid="testimonial-prev" aria-label="Previous review" onClick={() => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="h-10 w-10 rounded-full border border-slate-200 grid place-items-center hover:bg-slate-50"><ChevronLeft className="h-4 w-4" /></button>
        <div className="text-sm text-slate-500">{idx + 1} / {TESTIMONIALS.length}</div>
        <button data-testid="testimonial-next" aria-label="Next review" onClick={() => setIdx((i) => (i + 1) % TESTIMONIALS.length)} className="h-10 w-10 rounded-full border border-slate-200 grid place-items-center hover:bg-slate-50"><ChevronRight className="h-4 w-4" /></button>
      </div>
    </div>
  );
}
