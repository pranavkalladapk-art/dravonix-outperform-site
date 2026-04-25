import { useEffect, useRef } from "react";
import { useLocation } from "@tanstack/react-router";

// Section id -> URL path
export const SECTION_TO_PATH: Record<string, string> = {
  top: "/home",
  services: "/services",
  "ai-studio": "/ai-studio",
  process: "/process",
  about: "/about",
  contact: "/contact",
};

export const PATH_TO_SECTION: Record<string, string> = {
  "/": "top",
  "/home": "top",
  "/services": "services",
  "/ai-studio": "ai-studio",
  "/process": "process",
  "/about": "about",
  "/contact": "contact",
};

const NAV_OFFSET = 80;
// How long to ignore scroll-spy URL updates after a programmatic scroll.
// Must comfortably exceed the smooth-scroll duration so the observer
// doesn't fight the in-flight animation.
const SCROLL_SUPPRESS_MS = 1200;
// If the section is already within this many pixels of the desired
// position, skip scrolling entirely (prevents tiny re-jumps).
const ALREADY_IN_PLACE_TOLERANCE = 120;

export function scrollToSection(sectionId: string, behavior: ScrollBehavior = "smooth") {
  const el = document.getElementById(sectionId);
  if (!el) return;
  if (sectionId === "top") {
    if (window.scrollY <= ALREADY_IN_PLACE_TOLERANCE) return;
    window.scrollTo({ top: 0, behavior });
    return;
  }
  const rect = el.getBoundingClientRect();
  const targetTop = rect.top + window.scrollY - NAV_OFFSET;
  if (Math.abs(targetTop - window.scrollY) <= ALREADY_IN_PLACE_TOLERANCE) return;
  window.scrollTo({ top: targetTop, behavior });
}

export function useSectionUrlSync(enabled: boolean = true) {
  const location = useLocation();
  const suppressUntilRef = useRef<number>(0);
  const currentPathRef = useRef<string>(location.pathname);
  const isFirstMountRef = useRef<boolean>(true);

  // Scroll to matching section when pathname changes
  useEffect(() => {
    const section = PATH_TO_SECTION[location.pathname];
    if (!section) return;

    const isFirstMount = isFirstMountRef.current;
    isFirstMountRef.current = false;
    const samePath = currentPathRef.current === location.pathname;
    currentPathRef.current = location.pathname;

    // No work if path didn't actually change (and we're past first mount).
    if (samePath && !isFirstMount) return;

    // Deep-link / first paint: jump instantly. Otherwise smooth scroll.
    const behavior: ScrollBehavior = isFirstMount ? "auto" : "smooth";

    // Suppress scroll-spy updates immediately so it can't race the scroll start.
    suppressUntilRef.current = Date.now() + SCROLL_SUPPRESS_MS;

    const t = window.setTimeout(() => {
      scrollToSection(section, behavior);
      suppressUntilRef.current = Date.now() + SCROLL_SUPPRESS_MS;
    }, 30);
    return () => window.clearTimeout(t);
  }, [location.pathname]);

  // Scroll-spy: update URL as user scrolls
  useEffect(() => {
    if (!enabled) return;
    if (typeof IntersectionObserver === "undefined") return;

    const ids = Object.keys(SECTION_TO_PATH);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (elements.length === 0) return;

    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.intersectionRatio);
        }
        if (Date.now() < suppressUntilRef.current) return;

        let topId = "";
        let topRatio = 0;
        for (const [id, ratio] of visibility) {
          if (ratio > topRatio) {
            topRatio = ratio;
            topId = id;
          }
        }
        if (!topId || topRatio < 0.15) return;

        const targetPath = SECTION_TO_PATH[topId];
        if (!targetPath) return;
        const current = window.location.pathname;
        // Treat "/" as equivalent to "/home"
        const normalized = current === "/" ? "/home" : current;
        if (normalized === targetPath) return;
        // Only override if we're on one of the synced paths
        if (!PATH_TO_SECTION[current]) return;
        window.history.replaceState(null, "", targetPath);
        currentPathRef.current = targetPath;
      },
      {
        threshold: [0.15, 0.3, 0.5, 0.75],
        rootMargin: `-${NAV_OFFSET}px 0px -40% 0px`,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [enabled]);
}
