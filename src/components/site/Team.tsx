import { motion } from "motion/react";
import { Linkedin, Instagram } from "lucide-react";

const team = [
  { name: "Hope Omoruyi", role: "Chief Executive Director", initials: "HO" },
  { name: "Mary James", role: "Architect", initials: "MJ" },
  { name: "Garry Manson", role: "Architect", initials: "GM" },
];

export function Team() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--amber-brand)]">
            The People
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-[var(--charcoal)] text-balance sm:text-5xl">
            Meet the Builders Behind Solidwall
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-[var(--amber-brand)]/40"
            >
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[var(--gradient-dark)] font-display text-3xl font-bold text-[var(--amber-brand)] ring-4 ring-[var(--amber-brand)]/15 transition-transform group-hover:scale-105">
                {m.initials}
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-[var(--charcoal)]">
                {m.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-[var(--amber-brand)]">{m.role}</p>
              <div className="mt-5 flex justify-center gap-3">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-[var(--amber-brand)] hover:bg-[var(--amber-brand)] hover:text-[var(--charcoal)]"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-[var(--amber-brand)] hover:bg-[var(--amber-brand)] hover:text-[var(--charcoal)]"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
