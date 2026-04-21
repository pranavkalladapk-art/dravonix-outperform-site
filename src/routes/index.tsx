import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/dravonix/Nav";
import { Hero } from "@/components/dravonix/Hero";
import { Metrics } from "@/components/dravonix/Metrics";
import { Services } from "@/components/dravonix/Services";
import { Process } from "@/components/dravonix/Process";
import { Portfolio } from "@/components/dravonix/Portfolio";
import { About } from "@/components/dravonix/About";
import { Testimonials } from "@/components/dravonix/Testimonials";
import { CTA } from "@/components/dravonix/CTA";
import { Footer } from "@/components/dravonix/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[var(--navy)]">
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <Process />
        <Portfolio />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
