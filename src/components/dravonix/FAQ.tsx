import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Do you work with early-stage brands?",
    a: "Yes — we love building from zero. A large part of our work is launching new brands and giving them a credible foundation from day one.",
  },
  {
    q: "How quickly can we get started?",
    a: "Most projects kick off within a week of your strategy call, once scope and direction are agreed.",
  },
  {
    q: "Do we own the content you create?",
    a: "Always. Every asset we produce is 100% yours from day one — files, source projects and licences included.",
  },
  {
    q: "Do you offer one-off projects or only retainers?",
    a: "Both. You can engage us for a single project like a brand identity or website, or for an ongoing monthly partnership.",
  },
  {
    q: "Where are you based?",
    a: "We operate remotely across the UK, UAE, and India — working with brands internationally.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[var(--navy)] py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan-accent)]" />
            FAQ
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Honest answers.
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3 md:mt-12">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  className={cn(
                    "group flex w-full items-start justify-between gap-6 rounded-xl border border-white/10 bg-white/[0.02] p-5 text-left transition-all hover:border-[var(--cyan-accent)]/40",
                    open && "border-[var(--cyan-accent)]/40 bg-white/[0.04]",
                  )}
                >
                  <div className="flex-1">
                    <h3 className="font-display text-base font-semibold text-white md:text-lg">
                      {f.q}
                    </h3>
                    <div
                      className={cn(
                        "grid overflow-hidden transition-all duration-300 ease-out",
                        open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="min-h-0">
                        <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="mt-1 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-white/15 text-[var(--cyan-accent)]">
                    {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
