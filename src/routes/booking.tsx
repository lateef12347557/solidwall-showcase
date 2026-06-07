import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Send } from "lucide-react";
import { Navbar, WHATSAPP_PHONE } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Solidwall Construction Ltd" },
      {
        name: "description",
        content:
          "Book your construction project consultation with Solidwall. We respond on WhatsApp within 24 hours.",
      },
    ],
  }),
  component: BookingPage,
});

const services = [
  "Residential Construction",
  "Commercial Construction",
  "Industrial Projects",
  "Renovation & Remodelling",
  "Project Management",
  "Architectural Design",
  "Other",
];

const budgets = ["Under ₦5M", "₦5M – ₦20M", "₦20M – ₦50M", "₦50M – ₦200M", "Above ₦200M"];

function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0],
    budget: budgets[1],
    date: "",
    location: "",
    details: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "*New Booking Request — Solidwall*",
      "",
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      `*Phone:* ${form.phone}`,
      `*Service:* ${form.service}`,
      `*Budget:* ${form.budget}`,
      `*Preferred Start:* ${form.date || "Not specified"}`,
      `*Project Location:* ${form.location}`,
      "",
      "*Project Details:*",
      form.details || "—",
    ];
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputCls =
    "w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-[var(--amber-brand)] focus:outline-none focus:ring-2 focus:ring-[var(--amber-brand)]/30";

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="relative overflow-hidden bg-[var(--charcoal)] pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[var(--amber-brand)]/20 blur-[120px]" />
          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[var(--amber-brand)]/10 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-[var(--amber-brand)]"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--amber-brand)]/40 bg-[var(--amber-brand)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--amber-brand)]">
            Book a Consultation
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white text-balance sm:text-5xl">
            Tell us about your{" "}
            <span className="bg-[var(--gradient-amber)] bg-clip-text text-transparent">project</span>
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            Fill in the form and we'll receive your details instantly on WhatsApp. We respond within 24
            hours with a clear plan and quote.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name *">
                <input required value={form.name} onChange={set("name")} className={inputCls} placeholder="Jane Doe" />
              </Field>
              <Field label="Phone *">
                <input required value={form.phone} onChange={set("phone")} type="tel" className={inputCls} placeholder="+234 800 000 0000" />
              </Field>
              <Field label="Email *">
                <input required value={form.email} onChange={set("email")} type="email" className={inputCls} placeholder="you@email.com" />
              </Field>
              <Field label="Project Location *">
                <input required value={form.location} onChange={set("location")} className={inputCls} placeholder="City, State" />
              </Field>
              <Field label="Service Needed *">
                <select required value={form.service} onChange={set("service")} className={inputCls}>
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <Field label="Estimated Budget">
                <select value={form.budget} onChange={set("budget")} className={inputCls}>
                  {budgets.map((b) => <option key={b}>{b}</option>)}
                </select>
              </Field>
              <Field label="Preferred Start Date" className="sm:col-span-2">
                <input value={form.date} onChange={set("date")} type="date" className={inputCls} />
              </Field>
              <Field label="Project Details *" className="sm:col-span-2">
                <textarea required value={form.details} onChange={set("details")} rows={5} className={inputCls} placeholder="Describe your project, scope, and any specific requirements..." />
              </Field>
            </div>

            <button
              type="submit"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--amber-brand)] px-7 py-4 font-semibold text-[var(--charcoal)] shadow-[var(--shadow-amber)] transition-transform hover:scale-[1.02] sm:w-auto"
            >
              Send via WhatsApp
              <Send size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              Clicking send opens WhatsApp with your details pre-filled — just hit send to deliver it to our team.
            </p>
          </motion.form>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </main>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[var(--charcoal)]">{label}</span>
      {children}
    </label>
  );
}
