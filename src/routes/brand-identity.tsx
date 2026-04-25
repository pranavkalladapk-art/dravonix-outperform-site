import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, PenTool, Palette, MessageSquare, BookOpen, Target, Globe, Layout } from "lucide-react";
import { Reveal } from "@/components/dravonix/Reveal";
import { Nav } from "@/components/dravonix/Nav";
import { Footer } from "@/components/dravonix/Footer";

export const Route = createFileRoute("/brand-identity")({
  head: () => ({
    meta: [
      { title: "Brand Identity — Dravonix" },
      {
        name: "description",
        content:
          "Dravonix builds complete brand identity systems — logo design, visual identity, tone of voice, brand guidelines and positioning.",
      },
      { property: "og:title", content: "Brand Identity — Dravonix" },
      {
        property: "og:description",
        content:
          "Complete brand identity systems combining strategy and creativity to build powerful, memorable brands.",
      },
    ],
    links: [{ rel: "canonical", href: "https://dravonixmedia.com/brand-identity" }],
  }),
  component: BrandIdentityPage,
});

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Fast, modern, conversion-focused websites built to reflect your brand and drive real business results.",
  },
  {
    icon: Layout,
    title: "Website Design",
    desc: "Pixel-perfect UI/UX design crafted to reflect your brand identity — clean, intuitive, and built to convert visitors into clients.",
  },
  {
    icon: Target,
    title: "Brand Positioning",
    desc: "Sharp positioning that differentiates you and earns a defensible space in your market.",
  },
  {
    icon: MessageSquare,
    title: "Tone of Voice & Messaging",
    desc: "A clear voice and message architecture that sounds unmistakably like you.",
  },
  {
    icon: BookOpen,
    title: "Brand Guidelines",
    desc: "Comprehensive guidelines so every team and partner stays on-brand, every time.",
  },
  {
    icon: Palette,
    title: "Visual Identity System",
    desc: "Color, typography, layout and visual language unified into a cohesive system.",
  },
  {
    icon: PenTool,
    title: "Logo & Brand Mark Design",
    desc: "Distinctive logos and marks crafted to anchor your brand with clarity and longevity.",
  },
];

function BrandIdentityPage() {
  return (
    <div className="min-h-screen bg-[var(--navy)]">
      <Nav />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <Link
              to="/"
              hash="services"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)] transition-opacity hover:opacity-80"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Reveal>
          <div className="mt-8 text-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
                Brand Identity
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
                Build a brand that commands attention.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
                Dravonix creates complete brand identity systems — including logo design, visual
                identity, tone of voice, and brand guidelines — combining strategy and creativity to
                build powerful, memorable brands.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              Ready to build a brand worth remembering?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--muted-text)]">
              Let's craft an identity that earns attention and holds it.
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
