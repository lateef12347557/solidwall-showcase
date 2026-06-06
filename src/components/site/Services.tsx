import { motion } from "motion/react";
import {
  ClipboardList,
  HardHat,
  Eye,
  MessagesSquare,
  Package,
  Building2,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: ClipboardList,
    title: "Pre-Construction Services",
    desc: "Site analysis, feasibility studies, budgeting and project planning that set every build up to win.",
  },
  {
    icon: HardHat,
    title: "Core Construction Services",
    desc: "End-to-end residential, commercial and industrial construction managed by certified professionals.",
  },
  {
    icon: Eye,
    title: "Construction Supervision",
    desc: "Hands-on site oversight, quality control and milestone tracking — your project, watched closely.",
  },
  {
    icon: MessagesSquare,
    title: "Building Consultations",
    desc: "Expert advisory on design choices, materials, permits and cost optimization from day one.",
  },
  {
    icon: Package,
    title: "Sales of Building Materials",
    desc: "Premium, verified materials sourced direct — cement, steel, finishes and everything in between.",
  },
  {
    icon: Building2,
    title: "Property Management",
    desc: "Post-handover care: maintenance, tenant relations and asset value protection over the long run.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-[var(--background)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--amber-brand)]">
            What we do
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-[var(--charcoal)] text-balance sm:text-5xl">
            From Blueprint to Build —{" "}
            <span className="text-[var(--amber-brand)]">We Handle It All</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            A complete construction partner under one roof. Six core services, one
            commitment: deliver what we promise.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-[var(--amber-brand)]/40"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--amber-brand)]/8 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[var(--charcoal)] text-[var(--amber-brand)] transition-transform group-hover:scale-110">
                  <s.icon size={26} />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-[var(--charcoal)]">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--charcoal)] transition-colors hover:text-[var(--amber-brand)]"
                >
                  Learn More
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
