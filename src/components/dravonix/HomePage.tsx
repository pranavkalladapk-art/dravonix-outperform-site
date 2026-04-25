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
  // Scroll-spy disabled: it was rewriting the URL during manual scrolling
  // and triggering the route effect to scroll back, which fought the user.
  // Nav links still smoothly scroll to sections via the route-change effect.
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
