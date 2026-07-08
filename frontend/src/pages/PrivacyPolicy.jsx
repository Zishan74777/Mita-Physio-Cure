import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CLINIC } from "@/data/clinic";

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="font-[Outfit] text-xl font-bold text-slate-900 mb-2">{title}</h2>
    <div className="text-slate-600 leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function PrivacyPolicy() {
  return (
    <>
      <Seo title="Privacy Policy" description="Privacy Policy for Mita Physio Cure, Bagnan. How we collect, use and protect your personal and health information." path="/privacy-policy" />
      <section className="py-12 sm:py-16 bg-medical-grid">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Privacy Policy", to: "/privacy-policy" }]} />
          <h1 className="mt-6 font-[Outfit] text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Privacy Policy</h1>
          <p className="mt-3 text-slate-500">Last updated: January 2026</p>
        </div>
      </section>
      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Section title="1. Introduction">
            <p>Mita Physio Cure (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy explains how we handle information you share with us via this website, phone, or WhatsApp.</p>
          </Section>
          <Section title="2. Information We Collect">
            <p>When you submit the appointment form we collect your name, phone number, preferred service, date/time and any symptoms you describe. This information is sent directly to our clinic via WhatsApp — this website does not store your data on a server.</p>
          </Section>
          <Section title="3. How We Use Information">
            <p>We use your information solely to schedule appointments, provide physiotherapy care, and communicate about your treatment. We never sell or share your data with third parties for marketing.</p>
          </Section>
          <Section title="4. Health Information">
            <p>Any health details you share are treated as confidential and used only to plan and deliver your physiotherapy treatment, in line with professional medical ethics.</p>
          </Section>
          <Section title="5. Cookies & Analytics">
            <p>We may use basic, privacy-respecting analytics to understand how visitors use our site. No personally identifiable information is sold or shared.</p>
          </Section>
          <Section title="6. Your Rights">
            <p>You may request access to, correction of, or deletion of any information you have shared with us by contacting {CLINIC.phoneDisplay} or {CLINIC.email}.</p>
          </Section>
          <Section title="7. Contact">
            <p>For any privacy questions, contact us at {CLINIC.phoneDisplay} or email {CLINIC.email}. Address: {CLINIC.address}.</p>
          </Section>
        </div>
      </section>
    </>
  );
}
