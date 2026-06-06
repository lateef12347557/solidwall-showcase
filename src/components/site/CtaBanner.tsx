import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { CONTACT_URL } from "./Navbar";

export function CtaBanner() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--charcoal)] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[var(--amber-brand)]/20 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[var(--amber-brand)]/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--amber-brand) 1px, transparent 1px), linear-gradient(90deg, var(--amber-brand) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl px-6 text-center lg:px-10"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--amber-brand)]/40 bg-[var(--amber-brand)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--amber-brand)]">
          Ready when you are
        </span>
        <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white text-balance sm:text-6xl">
          Let's Build{" "}
          <span className="bg-[var(--gradient-amber)] bg-clip-text text-transparent">
            Success
          </span>{" "}
          Together
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
          Tell us about your project. We'll get back to you within 24 hours with a clear
          path forward.
        </p>
        <div className="mt-10">
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-[var(--amber-brand)] px-8 py-4 font-semibold text-[var(--charcoal)] shadow-[var(--shadow-amber)] transition-transform hover:scale-105"
          >
            Contact Us Now
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
