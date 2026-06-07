import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";


const links = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Book", href: "/booking" },
  { label: "Contact", href: "/#contact" },
];

export const WHATSAPP_PHONE = "2348162930106";
export const QUOTE_URL = "https://wa.link/w4ybpz";
export const CONTACT_URL = "https://wa.link/f9p6zm";
export const BOOKING_URL = "/booking";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--charcoal)]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-display text-2xl font-extrabold tracking-tight text-white">
            SOLID<span className="text-[var(--amber-brand)]">WALL</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--amber-brand)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={QUOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[var(--amber-brand)] px-5 py-2.5 text-sm font-semibold text-[var(--charcoal)] shadow-[var(--shadow-amber)] transition-transform hover:scale-105"
          >
            Get a Quote
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-md p-2 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-[var(--charcoal)] lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5 hover:text-[var(--amber-brand)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={QUOTE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md bg-[var(--amber-brand)] px-4 py-3 text-center font-semibold text-[var(--charcoal)]"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
