import { motion } from "framer-motion";

const STATS = [
  { k: "5+", v: "Years Experience" },
  { k: "1500+", v: "Patients Treated" },
  { k: "4.5/5", v: "Patient Rating" },
  { k: "10+", v: "Areas Covered" },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4" data-testid="stats-strip">
      {STATS.map((s, i) => (
        <motion.div
          key={s.v}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="rounded-2xl border border-slate-200 bg-white px-5 py-6 text-center"
        >
          <div className="font-[Outfit] text-3xl sm:text-4xl font-extrabold text-blue-800">{s.k}</div>
          <div className="mt-1 text-xs sm:text-sm text-slate-500 uppercase tracking-widest">{s.v}</div>
        </motion.div>
      ))}
    </div>
  );
}
