import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { Nav } from "@/components/dravonix/Nav";
import { Hero } from "@/components/dravonix/Hero";
import { ValuePillars } from "@/components/dravonix/ValuePillars";
import { Services } from "@/components/dravonix/Services";
import { AIStudio } from "@/components/dravonix/AIStudio";
import { GalleryPreview } from "@/components/dravonix/GalleryPreview";
import { Process } from "@/components/dravonix/Process";
import { WhyDravonix } from "@/components/dravonix/WhyDravonix";
import { About } from "@/components/dravonix/About";
import { LeadCapture } from "@/components/dravonix/LeadCapture";
import { Footer } from "@/components/dravonix/Footer";
import { useSectionUrlSync, scrollToSection } from "@/hooks/use-section-url-sync";

export function HomePage() {
  // Scroll-spy disabled: it was rewriting the URL during manual scrolling
  // and triggering the route effect to scroll back, which fought the user.
  // Nav links still smoothly scroll to sections via the route-change effect.
  useSectionUrlSync(false);

  // Hash-driven scroll: when arriving at /home#services or /home#about
  // (e.g. from the "Back to Home" links on subpages), smooth-scroll to the
  // matching section once the page has mounted and laid out.
  const location = useLocation();
  useEffect(() => {
    const hash = location.hash?.replace(/^#/, "");
    if (!hash) return;
    // Wait a tick for fonts/images/reveal animations to settle so the
    // section's measured position is accurate.
    const t = window.setTimeout(() => {
      scrollToSection(hash, "smooth");
    }, 250);
    return () => window.clearTimeout(t);
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-[var(--navy)]">
      <Nav />
      <main>
        <Hero />
        <ValuePillars />
        <Services />
        <AIStudio />
        <GalleryPreview />
        <Process />
        <WhyDravonix />
        <About />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  );
}
