import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { trackContact } from "@/lib/metaPixel";

const serviceLinks = [
  { label: "Brand Identity", href: "/brand-identity" },
  { label: "Social Media Management", href: "/social-media-management" },
  { label: "AI-Integrated Video & Design", href: "/ai-studio" },
  { label: "Performance Marketing", href: "/performance-marketing" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61588836449902", label: "Facebook" },
  { Icon: Instagram, href: "https://www.instagram.com/dravonixmedia/", label: "Instagram" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/dravonix/", label: "LinkedIn" },
  { Icon: Twitter, href: "https://x.com/dravonixmedia", label: "X" },
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
            <p className="mt-4 flex items-center gap-2 text-xs text-[var(--muted-text)]">
              <span className="text-base leading-none" aria-hidden>🇬🇧 🇦🇪 🇮🇳</span>
              <span>UK · UAE · India · International</span>
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="text-sm text-[var(--muted-text)] transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    activeProps={{ className: "text-white font-semibold" }}
                    className="text-sm text-[var(--muted-text)] transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white">
              Connect
            </h4>
            <div className="mt-4 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white/70 transition-all hover:border-[var(--cyan-accent)] hover:text-[var(--cyan-accent)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a
              href="mailto:admin@dravonixmedia.com"
              onClick={() => trackContact("email", { content_name: "Footer Email" })}
              className="mt-6 inline-block text-sm text-[var(--muted-text)] transition-colors hover:text-white"
            >
              admin@dravonixmedia.com
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-[var(--muted-text)]">
            © 2026 Dravonix Media Private Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/privacy-policy"
              className="text-xs text-[var(--muted-text)] transition-colors hover:text-white"
            >
              Privacy & Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-xs text-[var(--muted-text)] transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>
            <span className="text-xs text-[var(--muted-text)]">www.dravonixmedia.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
