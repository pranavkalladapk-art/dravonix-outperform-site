import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Megaphone, Crosshair, Filter, LineChart } from "lucide-react";
import { Reveal } from "@/components/dravonix/Reveal";
import { Nav } from "@/components/dravonix/Nav";
import { Footer } from "@/components/dravonix/Footer";

export const Route = createFileRoute("/performance-marketing")({
  head: () => ({
    meta: [
      { title: "Performance Marketing — Dravonix" },
      {
        name: "description",
        content:
          "Dravonix delivers performance marketing — paid social, audience targeting, funnel strategy and ROI tracking that scales results efficiently.",
      },
      { property: "og:title", content: "Performance Marketing — Dravonix" },
      {
        property: "og:description",
        content:
          "Paid social campaigns, advanced targeting, funnel strategy and ROI tracking focused on measurable growth.",
      },
    ],
    links: [{ rel: "canonical", href: "https://dravonixmedia.com/performance-marketing" }],
  }),
  component: PerformanceMarketingPage,
});

const services = [
  {
    icon: Megaphone,
    title: "Paid Social Campaigns",
    desc: "High-performing ad campaigns across Meta, TikTok, LinkedIn and beyond — built to convert.",
  },
  {
    icon: Crosshair,
    title: "Advanced Audience Targeting",
    desc: "Precision audience segments, lookalikes and retargeting to reach the right buyers at the right moment.",
  },
  {
    icon: Filter,
    title: "Funnel Strategy & Optimization",
    desc: "Full-funnel architecture from awareness to conversion, continuously tested and refined.",
  },
  {
    icon: LineChart,
    title: "ROI & Performance Tracking",
    desc: "Transparent reporting, clean attribution and clear metrics that tie spend to revenue.",
  },
];

function PerformanceMarketingPage() {
  return (
    <div className="min-h-screen bg-[var(--navy)]">
      <Nav />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)] transition-opacity hover:opacity-80"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Reveal>
          <div className="mt-8 text-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
                Performance Marketing
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
                Turn ad spend into measurable growth.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
                Dravonix delivers performance marketing through paid social campaigns, advanced
                audience targeting, and strategic funnel design — all focused on maximizing ROI and
                scaling results efficiently.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <article className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-[var(--card-dark)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--blue-brand)] hover:shadow-glow-brand">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-0.5 bg-[var(--blue-brand)]"
                  />
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-[var(--blue-brand)]/15 text-[var(--blue-brand)]">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">{s.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ready to scale with confidence?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--muted-text)]">
              Let's turn your ad budget into a growth engine you can measure.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[var(--blue-brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-all hover:-translate-y-0.5 hover:bg-[var(--blue-brand)]/90"
            >
              Contact <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
