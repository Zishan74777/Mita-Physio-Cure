import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CLINIC } from "@/data/clinic";

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="font-[Outfit] text-xl font-bold text-slate-900 mb-2">{title}</h2>
    <div className="text-slate-600 leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function Terms() {
  return (
    <>
      <Seo title="Terms & Conditions" description="Terms & Conditions for using the Mita Physio Cure website and physiotherapy services in Bagnan, Howrah." path="/terms" />
      <section className="py-12 sm:py-16 bg-medical-grid">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Terms & Conditions", to: "/terms" }]} />
          <h1 className="mt-6 font-[Outfit] text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Terms & Conditions</h1>
          <p className="mt-3 text-slate-500">Last updated: January 2026</p>
        </div>
      </section>
      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Section title="1. Acceptance of Terms">
            <p>By using this website and booking services with Mita Physio Cure, you agree to these Terms & Conditions.</p>
          </Section>
          <Section title="2. Medical Disclaimer">
            <p>Content on this website is for general information only and is not a substitute for a professional medical consultation, diagnosis or treatment. Always seek the advice of a qualified physiotherapist or doctor regarding your condition.</p>
          </Section>
          <Section title="3. Appointments & Bookings">
            <p>Appointment requests submitted through the website are confirmed only after we respond via WhatsApp or phone. Booking a slot does not guarantee availability until confirmed by our team.</p>
          </Section>
          <Section title="4. Home Visits">
            <p>Home visit availability depends on your location and our schedule. Travel charges (if any) will be communicated before confirmation.</p>
          </Section>
          <Section title="5. Cancellations">
            <p>We request at least 4 hours&apos; notice for cancellations or rescheduling so that we can offer the slot to another patient.</p>
          </Section>
          <Section title="6. Payments">
            <p>Fees are payable at the time of service unless otherwise agreed. We do not collect payments through this website.</p>
          </Section>
          <Section title="7. Limitation of Liability">
            <p>Individual results from physiotherapy vary. We do not guarantee specific outcomes. We are not liable for decisions taken solely based on website content.</p>
          </Section>
          <Section title="8. Contact">
            <p>Questions about these terms? Contact {CLINIC.phoneDisplay} or {CLINIC.email}.</p>
          </Section>
        </div>
      </section>
    </>
  );
}
