import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/data/faqs";

export default function FAQSection({ limit }) {
  const items = limit ? FAQS.slice(0, limit) : FAQS;
  return (
    <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
      {items.map((f, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-slate-200">
          <AccordionTrigger data-testid={`faq-q-${i}`} className="text-left font-[Outfit] text-base sm:text-lg text-slate-900 hover:text-blue-800 py-5">
            {f.q}
          </AccordionTrigger>
          <AccordionContent data-testid={`faq-a-${i}`} className="text-slate-600 leading-relaxed pb-5">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FAQSchema({ items = FAQS }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question", name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
}
