import { Instagram, Linkedin, Twitter, Music2 } from "lucide-react";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Services",
    links: ["Branding", "Performance Marketing", "Content Creation", "Marketing Strategy"],
  },
  {
    title: "Company",
    links: ["About", "Case Studies", "Blog", "Contact"],
  },
];

const socials = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Music2, href: "#", label: "TikTok" },
  { Icon: Twitter, href: "#", label: "X" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--blue-brand)] bg-[var(--navy)] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-[var(--muted-text)]">
              Engineered to Outperform.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-[var(--muted-text)] transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white">
              Connect
            </h4>
            <div className="mt-4 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white/70 transition-all hover:border-[var(--cyan-accent)] hover:text-[var(--cyan-accent)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a
              href="mailto:hello@dravonix.com"
              className="mt-6 inline-block text-sm text-[var(--muted-text)] transition-colors hover:text-white"
            >
              hello@dravonix.com
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-[var(--muted-text)]">© 2025 Dravonix. All rights reserved.</p>
          <p className="text-xs text-[var(--muted-text)]">www.dravonix.com</p>
        </div>
      </div>
    </footer>
  );
}
