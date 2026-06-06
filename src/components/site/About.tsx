import { motion } from "motion/react";
import { Target, Compass, CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

export function About() {
  return (
    <section id="about" className="relative bg-secondary py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--amber-brand)]">
            About Solidwall
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-[var(--charcoal)] text-balance sm:text-5xl">
            Building with Integrity.{" "}
            <span className="text-[var(--amber-brand)]">Delivering with Excellence.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Solidwall Construction Ltd is a full-service construction company committed
            to bringing client visions to life — from compact residential builds to
            ambitious commercial and industrial developments. We pair engineering
            precision with on-the-ground craftsmanship.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Licensed, insured and certified professionals",
              "Transparent timelines and pricing",
              "Quality materials, no compromise",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-[var(--charcoal)]">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[var(--amber-brand)]" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--amber-brand)]/15 text-[var(--amber-brand)]">
                <Target size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-[var(--charcoal)]">
                Our Mission
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                To deliver world-class construction services that exceed client
                expectations through quality, safety and innovation.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--amber-brand)]/15 text-[var(--amber-brand)]">
                <Compass size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-[var(--charcoal)]">
                Our Vision
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                To be the most trusted construction partner — reshaping skylines and
                communities with integrity-led builds.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={aboutImg}
              alt="Solidwall architect reviewing blueprints"
              width={1280}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-[var(--charcoal)] p-6 shadow-2xl sm:block">
            <div className="font-display text-4xl font-extrabold text-[var(--amber-brand)]">15+</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-white/70">
              Years of Excellence
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
