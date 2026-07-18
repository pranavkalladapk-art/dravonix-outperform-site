import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { trackLead } from "@/lib/metaPixel";

const navLinks: Array<{ to: string; label: string }> = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/process", label: "Our Process" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const menuBg = "#0B1220";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          open
            ? "bg-[#0B1220]"
            : scrolled
              ? "border-b border-white/10 bg-[oklch(0.196_0.04_257/0.9)] backdrop-blur-md"
              : "bg-[var(--navy)]/80 backdrop-blur-sm",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
          <Logo className="shrink-0" />

          <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{ className: "text-white font-semibold" }}
                activeOptions={{ exact: l.to === "/" }}
                className="text-sm font-normal text-white/70 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <a
            href="https://estimate.dravonix.dev/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLead({ content_name: "Get a Free Estimate" })}
            className="hidden shrink-0 rounded-full bg-[var(--blue-brand)] px-5 py-2.5 text-sm font-semibold text-white shadow-glow-brand transition-transform hover:-translate-y-0.5 lg:inline-flex"
          >
            Get a Free Estimate
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-[60] grid h-10 w-10 place-items-center rounded-md text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay — rendered outside header so backdrop-filter on header does not clip it */}
      <div
        className={cn(
          "fixed inset-0 z-40 transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        style={{ backgroundColor: open ? menuBg : undefined }}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6 px-8">
          {navLinks.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-bold text-white transition-colors hover:text-[var(--cyan-accent)]"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 rounded-full bg-[var(--blue-brand)] px-8 py-3.5 text-base font-semibold text-white shadow-glow-brand"
          >
            Get a Free Audit
          </Link>
        </div>
      </div>
    </>
  );
}
