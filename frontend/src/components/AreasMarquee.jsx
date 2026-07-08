import { CLINIC } from "@/data/clinic";

export default function AreasMarquee() {
  const items = [...CLINIC.areas, ...CLINIC.areas];
  return (
    <div className="overflow-hidden py-4 bg-white border-y border-slate-100" data-testid="areas-marquee">
      <div className="flex gap-8 marquee-track whitespace-nowrap">
        {items.map((a, i) => (
          <div key={i} className="inline-flex items-center gap-2 text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-sm font-medium">Physio in {a}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
