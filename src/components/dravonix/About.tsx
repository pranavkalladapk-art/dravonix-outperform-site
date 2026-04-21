import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-[var(--navy)] py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
            About Dravonix
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Precision. Innovation. Performance.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 text-lg leading-relaxed text-[var(--muted-text)]">
            Dravonix was built for brands that refuse to be average. We&rsquo;re a
            new-generation marketing agency — combining data intelligence with creative
            mastery to help businesses lead, scale, and outpace the future. We&rsquo;re
            just getting started. So are you. Let&rsquo;s build something exceptional
            together.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[var(--cyan-accent)]"
          >
            Meet the Team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
