import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const Services = lazy(() => import("@/components/site/Services").then((m) => ({ default: m.Services })));
const About = lazy(() => import("@/components/site/About").then((m) => ({ default: m.About })));
const Projects = lazy(() => import("@/components/site/Projects").then((m) => ({ default: m.Projects })));
const Team = lazy(() => import("@/components/site/Team").then((m) => ({ default: m.Team })));
const Testimonials = lazy(() => import("@/components/site/Testimonials").then((m) => ({ default: m.Testimonials })));
const Faq = lazy(() => import("@/components/site/Faq").then((m) => ({ default: m.Faq })));
const CtaBanner = lazy(() => import("@/components/site/CtaBanner").then((m) => ({ default: m.CtaBanner })));
const Footer = lazy(() => import("@/components/site/Footer").then((m) => ({ default: m.Footer })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solidwall Construction Ltd — Building Your Vision, One Brick at a Time" },
      {
        name: "description",
        content:
          "Solidwall Construction Ltd — full-service residential, commercial & industrial construction. From blueprint to build, delivered with integrity and excellence.",
      },
      { property: "og:title", content: "Solidwall Construction Ltd" },
      {
        property: "og:description",
        content: "Building with Integrity. Delivering with Excellence.",
      },
    ],
  }),
  component: Index,
});

const Fallback = () => <div className="h-32" aria-hidden="true" />;

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Suspense fallback={<Fallback />}>
        <Services />
        <About />
        <Projects />
        <Team />
        <Testimonials />
        <Faq />
        <CtaBanner />
        <Footer />
      </Suspense>
      <WhatsAppFab />
    </main>
  );
}
