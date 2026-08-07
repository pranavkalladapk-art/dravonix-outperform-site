import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { trackLead } from "@/lib/metaPixel";
import { DRAIVA_PRODUCTS, DRAIVA_PATHS } from "./draiva-products";

type NavLink = { to: string; label: string; hash?: string; draiva?: boolean };

const navLinks: Array<NavLink> = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/draiva", label: "DRAIVA Connect", draiva: true },
  { to: "/work", label: "Work" },
  { to: "/process", label: "Our Process" },
  { to: "/", hash: "project-estimator", label: "Project Estimator" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [draivaOpen, setDraivaOpen] = useState(false);
  const [mobileDraivaOpen, setMobileDraivaOpen] = useState(false);
  const draivaRef = useRef<HTMLDivElement | null>(null);
  const menuBg = "#0B1220";
  const { pathname } = useRouterState({ select: (s) => s.location });
  const [estimatorInView, setEstimatorInView] = useState(false);

  const inDraiva = DRAIVA_PATHS.includes(pathname) || pathname.startsWith("/draiva");

  const isLinkActive = (l: NavLink) => {
    if (l.draiva) return inDraiva;
    if (l.hash === "project-estimator") return pathname === "/" && estimatorInView;
    if (l.to === "/") return pathname === "/" && !estimatorInView;
    return pathname === l.to || pathname.startsWith(`${l.to}/`);
  };

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

  // Close the desktop dropdown on outside click / Escape.
  useEffect(() => {
    if (!draivaOpen) return;
    const onDown = (e: MouseEvent) => {
      if (draivaRef.current && !draivaRef.current.contains(e.target as Node)) setDraivaOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDraivaOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [draivaOpen]);

  useEffect(() => {
    setDraivaOpen(false);
  }, [pathname]);

  // Track whether the estimator section is currently visible so the nav
  // item highlights while the user is reading that section on /.
  useEffect(() => {
    if (pathname !== "/") {
      setEstimatorInView(false);
      return;
    }
    const el = document.getElementById("project-estimator");
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setEstimatorInView(entry.isIntersecting && entry.intersectionRatio > 0.3);
        }
      },
      { threshold: [0, 0.3, 0.6], rootMargin: "-80px 0px -40% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [pathname]);

  const closeMobile = () => {
    setOpen(false);
    setMobileDraivaOpen(false);
  };

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
            {navLinks.map((l) => {
              const active = isLinkActive(l);

              if (l.draiva) {
                return (
                  <div
                    key="draiva-connect"
                    ref={draivaRef}
                    className="relative"
                    onMouseEnter={() => setDraivaOpen(true)}
                    onMouseLeave={() => setDraivaOpen(false)}
                  >
                    <button
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={draivaOpen}
                      onClick={() => setDraivaOpen((v) => !v)}
                      className={cn(
                        "flex items-center gap-1 text-sm transition-colors hover:text-white",
                        active ? "font-semibold text-white" : "font-normal text-white/70",
                      )}
                    >
                      DRAIVA Connect
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform",
                          draivaOpen && "rotate-180",
                        )}
                        aria-hidden
                      />
                    </button>

                    <div
                      className={cn(
                        "absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 pt-3 transition-all duration-200",
                        draivaOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-1 opacity-0",
                      )}
                    >
                      <div
                        role="menu"
                        className="overflow-hidden rounded-[18px] border border-white/10 bg-[#0B1220] p-2 shadow-2xl shadow-black/40"
                      >
                        <Link
                          to="/draiva"
                          role="menuitem"
                          onClick={() => setDraivaOpen(false)}
                          className="block rounded-[14px] px-3.5 py-3 transition-colors hover:bg-white/[0.06]"
                        >
                          <span className="block text-sm font-semibold text-white">Overview</span>
                          <span className="mt-0.5 block text-xs text-[var(--muted-text)]">
                            One AI. Every conversation.
                          </span>
                        </Link>

                        <div className="my-1.5 h-px bg-white/10" />

                        {DRAIVA_PRODUCTS.map((p) => {
                          const Icon = p.icon;
                          const live = p.status === "NOW ONBOARDING";
                          return (
                            <Link
                              key={p.key}
                              to={p.path}
                              role="menuitem"
                              onClick={() => setDraivaOpen(false)}
                              className={cn(
                                "flex items-center gap-3 rounded-[14px] px-3.5 py-2.5 transition-colors hover:bg-white/[0.06]",
                                live && "bg-white/[0.04]",
                              )}
                            >
                              <span
                                className={cn(
                                  "grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg border",
                                  live
                                    ? "border-[var(--cyan-accent)]/45 bg-[var(--blue-brand)]/20 text-[var(--cyan-accent)]"
                                    : "border-white/10 bg-white/[0.03] text-[var(--cyan-accent)]/70",
                                )}
                              >
                                <Icon className="h-4 w-4" aria-hidden />
                              </span>
                              <span className="min-w-0 flex-1">
                                <span
                                  className={cn(
                                    "block truncate text-sm text-white",
                                    live ? "font-semibold" : "font-medium",
                                  )}
                                >
                                  {p.name}
                                </span>
                                <span
                                  className={cn(
                                    "mt-0.5 block text-[10px] font-bold uppercase tracking-[0.14em]",
                                    live
                                      ? "text-[var(--cyan-accent)]"
                                      : "text-[var(--cyan-accent)]/60",
                                  )}
                                >
                                  {p.status}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={`${l.to}${l.hash ?? ""}`}
                  to={l.to}
                  hash={l.hash}
                  className={cn(
                    "text-sm transition-colors hover:text-white",
                    active ? "font-semibold text-white" : "font-normal text-white/70",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
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
          "fixed inset-0 z-40 overflow-y-auto transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        style={{ backgroundColor: open ? menuBg : undefined }}
      >
        <div className="flex min-h-full w-full flex-col items-stretch gap-2 px-6 pb-12 pt-24">
          {navLinks.map((l) => {
            if (l.draiva) {
              return (
                <div key="draiva-mobile" className="w-full">
                  <button
                    type="button"
                    aria-expanded={mobileDraivaOpen}
                    onClick={() => setMobileDraivaOpen((v) => !v)}
                    className="flex w-full items-center justify-between gap-3 rounded-2xl px-2 py-3 text-left font-display text-2xl font-bold text-white"
                  >
                    DRAIVA Connect
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 flex-shrink-0 text-[var(--cyan-accent)] transition-transform",
                        mobileDraivaOpen && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>

                  {mobileDraivaOpen && (
                    <div className="mt-1 space-y-1.5 rounded-2xl border border-white/10 bg-white/[0.03] p-2">
                      <Link
                        to="/draiva"
                        onClick={closeMobile}
                        className="block rounded-xl px-3 py-3 text-base font-semibold text-white"
                      >
                        Overview
                        <span className="mt-0.5 block text-xs font-normal text-[var(--muted-text)]">
                          One AI. Every conversation.
                        </span>
                      </Link>
                      {DRAIVA_PRODUCTS.map((p) => {
                        const Icon = p.icon;
                        const live = p.status === "NOW ONBOARDING";
                        return (
                          <Link
                            key={p.key}
                            to={p.path}
                            onClick={closeMobile}
                            className="flex min-h-[52px] items-center gap-3 rounded-xl px-3 py-2.5"
                          >
                            <Icon
                              className={cn(
                                "h-4.5 w-4.5 flex-shrink-0",
                                live
                                  ? "text-[var(--cyan-accent)]"
                                  : "text-[var(--cyan-accent)]/60",
                              )}
                              aria-hidden
                            />
                            <span className="min-w-0 flex-1">
                              <span
                                className={cn(
                                  "block truncate text-base text-white",
                                  live ? "font-semibold" : "font-medium",
                                )}
                              >
                                {p.navLabel}
                              </span>
                              <span
                                className={cn(
                                  "mt-0.5 block text-[10px] font-bold uppercase tracking-[0.14em]",
                                  live
                                    ? "text-[var(--cyan-accent)]"
                                    : "text-[var(--cyan-accent)]/60",
                                )}
                              >
                                {p.status}
                              </span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={`${l.to}${l.hash ?? ""}`}
                to={l.to}
                hash={l.hash}
                onClick={closeMobile}
                className="rounded-2xl px-2 py-3 font-display text-2xl font-bold text-white transition-colors hover:text-[var(--cyan-accent)]"
              >
                {l.label}
              </Link>
            );
          })}

          <a
            href="https://estimate.dravonix.dev/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              closeMobile();
              trackLead({ content_name: "Get a Free Estimate" });
            }}
            className="mt-6 rounded-full bg-[var(--blue-brand)] px-8 py-3.5 text-center text-base font-semibold text-white shadow-glow-brand"
          >
            Get a Free Estimate
          </a>
        </div>
      </div>
    </>
  );
}
