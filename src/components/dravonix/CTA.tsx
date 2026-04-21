import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--blue-brand)] py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 opacity-25">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
            Ready to Outperform?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
            Let's engineer your brand's next chapter.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <a
            href="mailto:hello@dravonix.com"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-9 py-4 text-base font-semibold text-[var(--navy)] shadow-xl transition-transform hover:-translate-y-0.5"
          >
            Book a Free Strategy Call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
