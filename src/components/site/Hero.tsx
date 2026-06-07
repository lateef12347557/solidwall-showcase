import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import { QUOTE_URL } from "./Navbar";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Construction site at golden hour"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--charcoal)]/95 via-[var(--charcoal)]/80 to-[var(--charcoal)]/60" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--amber-brand)]/40 bg-[var(--amber-brand)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--amber-brand)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--amber-brand)]" />
            Solidwall Construction Ltd
          </span>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] text-white text-balance sm:text-6xl lg:text-7xl">
            Building Your Vision,{" "}
            <span className="bg-[var(--gradient-amber)] bg-clip-text text-transparent">
              One Brick
            </span>{" "}
            at a Time
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/75 sm:text-xl">
            Your trusted partner for residential, commercial & industrial projects —
            engineered with integrity, delivered with excellence.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-[var(--amber-brand)] px-7 py-4 font-semibold text-[var(--charcoal)] shadow-[var(--shadow-amber)] transition-transform hover:scale-105"
            >
              Get a Quote
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              View Projects
            </a>
          </div>

          <div className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {[
              { k: "120+", v: "Projects Delivered" },
              { k: "15yrs", v: "Industry Experience" },
              { k: "98%", v: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl font-bold text-[var(--amber-brand)]">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
