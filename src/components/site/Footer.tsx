import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--charcoal-soft)] py-14 text-white/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="font-display text-2xl font-extrabold tracking-tight text-white">
              SOLID<span className="text-[var(--amber-brand)]">WALL</span>
            </span>
            <p className="mt-4 max-w-md text-sm text-white/60">
              Solidwall Construction Ltd — Building with Integrity. Delivering with
              Excellence. Residential. Commercial. Industrial.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/60 transition-colors hover:text-[var(--amber-brand)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Follow
            </h4>
            <div className="mt-4 flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[var(--amber-brand)] hover:bg-[var(--amber-brand)] hover:text-[var(--charcoal)]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © 2025 Solidwall Construction Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
