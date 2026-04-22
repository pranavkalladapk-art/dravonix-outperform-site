import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarRange, Send, Users, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/dravonix/Reveal";
import { Nav } from "@/components/dravonix/Nav";
import { Footer } from "@/components/dravonix/Footer";

export const Route = createFileRoute("/social-media-management")({
  head: () => ({
    meta: [
      { title: "Social Media Management — Dravonix" },
      {
        name: "description",
        content:
          "Dravonix manages social media with strategy — content planning, daily execution, and audience engagement for consistent growth.",
      },
      { property: "og:title", content: "Social Media Management — Dravonix" },
      {
        property: "og:description",
        content:
          "Strategic content calendars, daily posting, community management and platform growth.",
      },
    ],
  }),
  component: SocialMediaManagementPage,
});

const services = [
  {
    icon: CalendarRange,
    title: "Strategic Content Calendars",
    desc: "Planned, themed and platform-tuned calendars that turn posting into a system, not a scramble.",
  },
  {
    icon: Send,
    title: "Daily Posting & Scheduling",
    desc: "Consistent daily execution across channels — on-brand, on-time, every day.",
  },
  {
    icon: Users,
    title: "Community Management",
    desc: "Real conversations with your audience — replies, DMs and engagement that build loyalty.",
  },
  {
    icon: TrendingUp,
    title: "Platform Growth Strategy",
    desc: "Data-driven growth playbooks tailored to each platform to expand reach and followers.",
  },
];

function SocialMediaManagementPage() {
  return (
    <div className="min-h-screen bg-[var(--navy)]">
      <Nav />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)] transition-opacity hover:opacity-80"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Reveal>
          <div className="mt-8 text-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
                Social Media Management
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
                Build a presence that performs daily.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
                Dravonix manages social media with a strategic approach — including content planning,
                daily execution, and audience engagement — to ensure consistent growth and a strong
                digital presence.
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
              Ready to grow your presence?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--muted-text)]">
              Let's turn your social channels into a daily growth engine.
            </p>
            <Link
              to="/"
              hash="contact"
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
