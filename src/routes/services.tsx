import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Palette, Share2, Sparkles, TrendingUp, Globe, Check } from "lucide-react";
import { Reveal } from "@/components/dravonix/Reveal";
import { Nav } from "@/components/dravonix/Nav";
import { Footer } from "@/components/dravonix/Footer";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    buildHead("/services", {
      title: "Services — Brand, Social, AI Studio, Ads & Web | Dravonix",
      description:
        "Five core services engineered to build, grow, and scale ambitious brands — brand identity, social media, AI video & design, performance marketing, and websites.",
    }),
  component: ServicesPage,
});

const ESTIMATOR_URL = "https://estimate.dravonix.dev/";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "Build a brand that commands attention — logo design, visual identity system, tone of voice, brand positioning, and brand guidelines.",
    to: "/brand-identity",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "Strategic content calendars, daily posting, community management, and platform growth — built for compounding presence.",
    to: "/social-media-management",
  },
  {
    icon: Sparkles,
    title: "AI-Integrated Video & Design",
    desc: "AI-assisted video edits, motion graphics, and on-brand design — produced faster, iterated smarter, scaled without losing craft.",
    to: "/ai-studio",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    desc: "Paid social campaigns, audience targeting, and funnel strategy focused on measurable ROI.",
    to: "/performance-marketing",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Premium websites designed and built to reflect your brand, convert visitors, and perform — fast, modern, and built to scale.",
    to: "/website-development",
  },
] as const;

const why = [
  "Strategy first — we plan before we execute.",
  "Senior-only team — no juniors learning on your budget.",
  "Transparent pricing and full asset ownership.",
  "Sprint-based execution with weekly performance reviews.",
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--navy)]">
      <Nav />

      <section className="pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
              Services
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
              Everything Your Brand Needs to Compete and Win.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
              Five core services engineered to build, grow, and scale ambitious brands.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <Link
                  to={s.to}
                  className="group relative block h-full overflow-hidden rounded-xl border border-white/10 bg-[var(--card-dark)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--blue-brand)] hover:shadow-glow-brand"
                >
                  <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-[var(--blue-brand)]" />
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-[var(--blue-brand)]/15 text-[var(--blue-brand)]">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 font-display text-xl font-bold text-white">{s.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">{s.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--cyan-accent)]">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Why Work With Dravonix?
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {why.map((w, i) => (
              <Reveal key={w} delay={i * 60}>
                <li className="flex h-full items-start gap-3 rounded-xl border border-white/10 bg-[var(--card-dark)] p-5">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--cyan-accent)]" />
                  <span className="text-sm leading-relaxed text-[var(--muted-text)]">{w}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Not Sure Which Service You Need?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--muted-text)]">
              Book a free 30-minute strategy call and we&rsquo;ll map the right solution for your brand.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--blue-brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-all hover:-translate-y-0.5 hover:bg-[var(--blue-brand)]/90"
              >
                Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={ESTIMATOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-[var(--cyan-accent)] hover:bg-white/5"
              >
                Get a Free Estimate
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
