import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/services";

export default function ServicesGrid({ limit }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <div data-testid="services-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {items.map((s, i) => {
        const Icon = s.icon;
        return (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
          >
            <Link
              to={`/services/${s.slug}`}
              data-testid={`service-card-${s.slug}`}
              className="group card-lift block h-full rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-700 grid place-items-center group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">{s.tag}</span>
              </div>
              <h3 className="mt-4 font-[Outfit] font-semibold text-slate-900 text-lg leading-snug">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{s.short}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 group-hover:gap-2 transition-all">
                Learn more <ArrowUpRight className="h-4 w-4" />
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
