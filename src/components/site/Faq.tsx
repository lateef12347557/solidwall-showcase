import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What types of projects do you handle?",
    a: "We deliver residential, commercial and industrial construction — from single-family homes and luxury residences to office complexes, retail spaces and warehouses.",
  },
  {
    q: "Do you offer pre-construction planning?",
    a: "Yes. Our pre-construction services include site analysis, feasibility studies, budgeting, scheduling and design coordination to set every project up for success.",
  },
  {
    q: "Can you supply building materials too?",
    a: "Absolutely. Through our materials division we supply premium, verified materials — cement, steel, blocks, finishes and more — at competitive prices.",
  },
  {
    q: "Do you assist with permits and approvals?",
    a: "Yes. We handle the full permitting process: drawings, submissions, regulatory liaison and approvals, so you don't have to navigate the bureaucracy.",
  },
  {
    q: "How do I get a quote for my project?",
    a: "Click any 'Get a Quote' button to message us on WhatsApp. Share your scope and location and our team will respond with a detailed proposal within 24–48 hours.",
  },
];

export function Faq() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--amber-brand)]">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-[var(--charcoal)] text-balance sm:text-5xl">
            Questions, Answered
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-border bg-card px-5 shadow-sm"
              >
                <AccordionTrigger className="py-5 text-left font-display font-semibold text-[var(--charcoal)] hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
