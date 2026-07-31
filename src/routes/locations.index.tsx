import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Nav } from "@/components/dravonix/Nav";
import { Footer } from "@/components/dravonix/Footer";
import { Reveal } from "@/components/dravonix/Reveal";
import { buildHead, breadcrumbSchema, webPageSchema } from "@/lib/seo";

const title = "Global Digital Marketing Services | Dravonix Media";
const description =
  "Dravonix Media delivers branding, website development, SEO, social media and performance marketing to businesses in Kerala, India, the UAE, the UK and global markets.";

export const Route = createFileRoute("/locations/")({
  head: () =>
    buildHead("/locations", {
      title,
      description,
      schemas: [
        webPageSchema({ name: title, description, path: "/locations" }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
        ]),
      ],
    }),
  component: LocationsIndex,
});

const cards = [
  {
    label: "Kerala",
    to: "/locations/kerala",
    desc: "Our home market — branding, websites, SEO and campaigns for Kerala businesses.",
  },
  {
    label: "India",
    to: "/locations/india",
    desc: "Digital-first delivery for startups and growing companies across India.",
  },
  {
    label: "UAE",
    to: "/locations/uae",
    desc: "Remote branding, web and performance marketing support for UAE businesses.",
  },
  {
    label: "United Kingdom",
    to: "/locations/united-kingdom",
    desc: "Creative and digital services for UK brands, delivered remotely.",
  },
  {
    label: "Global",
    to: "/locations/global",
    desc: "Remote-first project delivery for businesses in any time zone.",
  },
];

function LocationsIndex() {
  return (
    <div className="min-h-screen bg-[var(--navy)]">
      <Nav />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
                <MapPin className="h-3.5 w-3.5" /> Locations
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
                Creative and Digital Services Across Global Markets
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
                Dravonix Media provides branding, website development, social media management, SEO,
                performance marketing and AI-powered creative services to businesses across Kerala,
                India, the UAE, the United Kingdom and international markets.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="pb-24 md:pb-32">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cards.map((c, i) => (
                <Reveal key={c.to} delay={i * 70}>
                  <Link
                    to={c.to}
                    className="group block h-full rounded-xl border border-white/10 bg-[var(--card-dark)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--blue-brand)] hover:shadow-glow-brand"
                  >
                    <h2 className="font-display text-xl font-bold text-white">{c.label}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">{c.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--cyan-accent)] transition-all group-hover:gap-2.5">
                      Explore {c.label} <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
