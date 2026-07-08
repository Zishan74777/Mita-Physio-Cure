import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { CLINIC, waLink } from "@/data/clinic";

const SERVICE_OPTIONS = [
  "Home Physiotherapy", "Stroke Rehabilitation", "Back Pain", "Neck Pain",
  "Sciatica", "Frozen Shoulder", "Sports Injury", "Post Surgery Rehab",
  "Knee Pain", "Elderly Physiotherapy", "Other",
];

export default function AppointmentForm({ compact = false }) {
  const [form, setForm] = useState({
    name: "", phone: "", service: "", date: "", time: "", homeVisit: "no", notes: "",
  });
  const [sent, setSent] = useState(false);
  const on = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const msg = [
      `*New Appointment Request — ${CLINIC.name}*`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service || "Not specified"}`,
      `Preferred Date: ${form.date || "Flexible"}`,
      `Preferred Time: ${form.time || "Flexible"}`,
      `Home Visit: ${form.homeVisit === "yes" ? "Yes" : "No"}`,
      form.notes ? `Notes: ${form.notes}` : "",
    ].filter(Boolean).join("\n");
    window.open(waLink(msg), "_blank", "noopener");
    setSent(true);
  };

  const input = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition";

  return (
    <form onSubmit={submit} data-testid="appointment-form" className={`${compact ? "" : "rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xl shadow-blue-900/5"}`}>
      {!compact && (
        <div className="mb-6">
          <h3 className="font-[Outfit] text-2xl sm:text-3xl font-bold text-slate-900">Book Your Appointment</h3>
          <p className="text-sm text-slate-500 mt-1">We reply on WhatsApp within minutes during working hours.</p>
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5 block">Full Name *</label>
          <input required data-testid="appt-name" type="text" value={form.name} onChange={on("name")} className={input} placeholder="e.g. Ranjana Ghosh" />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5 block">Phone *</label>
          <input required data-testid="appt-phone" type="tel" value={form.phone} onChange={on("phone")} className={input} placeholder="+91 …" />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5 block">Service Needed</label>
          <select data-testid="appt-service" value={form.service} onChange={on("service")} className={input}>
            <option value="">Choose a service</option>
            {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5 block">Preferred Date</label>
          <input data-testid="appt-date" type="date" value={form.date} onChange={on("date")} className={input} />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5 block">Preferred Time</label>
          <select data-testid="appt-time" value={form.time} onChange={on("time")} className={input}>
            <option value="">Any</option>
            <option>Morning (8AM–12PM)</option>
            <option>Evening (4PM–8PM)</option>
            <option>Sunday (8AM–1PM)</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5 block">Home Visit?</label>
          <div className="flex gap-3">
            {[{v:"yes",l:"Yes, visit my home"},{v:"no",l:"No, I'll come to clinic"}].map((o) => (
              <label key={o.v} className={`flex-1 rounded-xl border px-4 py-3 text-sm cursor-pointer transition ${form.homeVisit === o.v ? "border-emerald-500 bg-emerald-50 text-emerald-800" : "border-slate-200 hover:border-slate-300"}`}>
                <input type="radio" name="homeVisit" value={o.v} checked={form.homeVisit === o.v} onChange={on("homeVisit")} className="mr-2" data-testid={`appt-homevisit-${o.v}`} />
                {o.l}
              </label>
            ))}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5 block">Message / Symptoms (optional)</label>
          <textarea data-testid="appt-notes" rows="3" value={form.notes} onChange={on("notes")} className={input} placeholder="Briefly describe your symptoms, injury or condition…" />
        </div>
      </div>

      <button type="submit" data-testid="appt-submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-3.5 font-semibold shine-hover">
        <Send className="h-4 w-4" /> Send Booking on WhatsApp
      </button>
      {sent && (
        <div data-testid="appt-success" className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 text-emerald-800 px-4 py-3 text-sm">
          <CheckCircle2 className="h-5 w-5" /> Opened WhatsApp — please tap send to confirm your booking.
        </div>
      )}
      <p className="mt-3 text-xs text-slate-500">By booking you agree to our <a href="/privacy-policy" className="underline">Privacy Policy</a>.</p>
    </form>
  );
}
