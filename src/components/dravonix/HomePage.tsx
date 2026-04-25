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
import { useSectionUrlSync } from "@/hooks/use-section-url-sync";

export function HomePage() {
  // Re-enabled with passive scroll-spy disabled: route changes (e.g. clicking
  // a nav link) smoothly scroll to the matching section. The hook does NOT
  // rewrite the URL while the user scrolls.
  useSectionUrlSync(false);
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
