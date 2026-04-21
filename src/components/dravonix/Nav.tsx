import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Our Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[oklch(0.196_0.04_257/0.85)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-[var(--blue-brand)] px-5 py-2.5 text-sm font-semibold text-white shadow-glow-brand transition-transform hover:-translate-y-0.5"
          >
            Get a Free Audit
          </a>
        </nav>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-[60] grid h-10 w-10 place-items-center rounded-md text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[var(--navy)] transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6 px-8">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-bold text-white transition-colors hover:text-[var(--cyan-accent)]"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 rounded-full bg-[var(--blue-brand)] px-8 py-3.5 text-base font-semibold text-white shadow-glow-brand"
          >
            Get a Free Audit
          </a>
        </div>
      </div>
    </header>
  );
}
