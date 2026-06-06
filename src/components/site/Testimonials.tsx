import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mrs. Ifeoma Okeke",
    role: "Homeowner",
    quote:
      "Solidwall built our family home exactly as we dreamed it. Every detail considered, every deadline met. Genuinely trustworthy.",
  },
  {
    name: "Engr. Chinedu Bello",
    role: "Project Developer",
    quote:
      "Their supervision team is second to none. Our commercial development came in on budget and the finish quality was outstanding.",
  },
  {
    name: "Amaka Uche",
    role: "Real Estate Investor",
    quote:
      "I have worked with several contractors. Solidwall stands apart for transparency, craftsmanship and clear communication throughout.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[var(--background)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--amber-brand)]">
            Client Stories
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-[var(--charcoal)] text-balance sm:text-5xl">
            Trusted by People Who've Built With Us
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
            >
              <Quote
                size={40}
                className="absolute right-6 top-6 text-[var(--amber-brand)]/15"
              />
              <div className="flex gap-0.5 text-[var(--amber-brand)]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <blockquote className="mt-5 text-base leading-relaxed text-[var(--charcoal)]">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <div className="font-display font-bold text-[var(--charcoal)]">{t.name}</div>
                <div className="mt-0.5 text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
