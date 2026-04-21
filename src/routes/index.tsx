import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/dravonix/Nav";
import { Hero } from "@/components/dravonix/Hero";
import { ValuePillars } from "@/components/dravonix/ValuePillars";
import { Services } from "@/components/dravonix/Services";
import { AIStudio } from "@/components/dravonix/AIStudio";
import { Process } from "@/components/dravonix/Process";
import { WhyDravonix } from "@/components/dravonix/WhyDravonix";
import { About } from "@/components/dravonix/About";
import { LeadCapture } from "@/components/dravonix/LeadCapture";
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
        <ValuePillars />
        <Services />
        <AIStudio />
        <Process />
        <WhyDravonix />
        <About />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  );
}
