import { MapPin, ExternalLink } from "lucide-react";
import { CLINIC } from "@/data/clinic";

export default function MapCard() {
  return (
    <div data-testid="map-card" className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl shadow-blue-900/5">
      <div className="aspect-[16/10] w-full">
        <iframe
          src={CLINIC.mapEmbed}
          title="Mita Physio Cure — Birampur, Bagnan, Howrah"
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="p-5 sm:p-6 flex items-start justify-between gap-4">
        <div className="flex gap-3">
          <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 grid place-items-center shrink-0">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <div className="font-[Outfit] font-semibold text-slate-900">{CLINIC.name}</div>
            <div className="text-sm text-slate-500">{CLINIC.address}</div>
          </div>
        </div>
        <a href={CLINIC.mapLink} target="_blank" rel="noreferrer" data-testid="map-directions" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 whitespace-nowrap">
          Directions <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
