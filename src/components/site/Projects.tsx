import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import villa from "@/assets/proj-villa.jpg.asset.json";
import duplex from "@/assets/proj-duplex.jpg.asset.json";
import foundationsAerial from "@/assets/proj-foundations-aerial.jpg.asset.json";
import foundations from "@/assets/proj-foundations.jpg.asset.json";
import rebar from "@/assets/proj-rebar.jpg.asset.json";
import site from "@/assets/proj-site.png.asset.json";

const projects = [
  { img: duplex.url, title: "Modern Duplex Residence", tag: "Residential", span: "lg:row-span-2" },
  { img: foundationsAerial.url, title: "Estate Foundation Layout", tag: "Infrastructure", span: "" },
  { img: villa.url, title: "Classic Bungalow Villa", tag: "Residential", span: "" },
  { img: site.url, title: "Reinforced Concrete Works", tag: "Commercial", span: "lg:row-span-2" },
  { img: foundations.url, title: "Multi-Unit Foundations", tag: "Infrastructure", span: "" },
  { img: rebar.url, title: "On-Site Column Build", tag: "Structural", span: "" },
];

export function Projects() {
  return (
    <section id="projects" className="bg-[var(--background)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--amber-brand)]">
              Selected Work
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-[var(--charcoal)] text-balance sm:text-5xl">
              Projects We're Proud Of
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A snapshot of recent residential, commercial and industrial deliveries.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-xl ${p.span}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/95 via-[var(--charcoal)]/30 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="inline-flex w-fit rounded-full bg-[var(--amber-brand)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--charcoal)]">
                  {p.tag}
                </span>
                <div className="mt-3 flex items-end justify-between gap-3">
                  <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[var(--charcoal)] opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-1">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[var(--amber-brand)] opacity-0 transition-opacity group-hover:opacity-100">
                  View Project →
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
