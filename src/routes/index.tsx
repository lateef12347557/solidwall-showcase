import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Team } from "@/components/site/Team";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

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

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Team />
      <Testimonials />
      <Faq />
      <CtaBanner />
      <Footer />
    </main>
  );
}
