import { MessageCircle } from "lucide-react";
import { waLink } from "@/data/clinic";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hi, I'd like to enquire about physiotherapy at Mita Physio Cure.")}
      target="_blank"
      rel="noreferrer"
      data-testid="floating-whatsapp"
      aria-label="Chat on WhatsApp"
      className="wa-float fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white pl-4 pr-5 py-3 font-semibold text-sm sm:text-base"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
}
