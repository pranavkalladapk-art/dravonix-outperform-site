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

export function scrollToSection(sectionId: string, behavior: ScrollBehavior = "smooth") {
  const el = document.getElementById(sectionId);
  if (!el) return;
  if (sectionId === "top") {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  const rect = el.getBoundingClientRect();
  const top = rect.top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior });
}

export function useSectionUrlSync(enabled: boolean = true) {
  const location = useLocation();
  const suppressUntilRef = useRef<number>(0);
  const currentPathRef = useRef<string>(location.pathname);

  // Scroll to matching section when pathname changes
  useEffect(() => {
    const section = PATH_TO_SECTION[location.pathname];
    if (!section) return;
    const isFirst = currentPathRef.current === location.pathname;
    currentPathRef.current = location.pathname;
    // Wait a tick for DOM/layout
    const t = window.setTimeout(() => {
      scrollToSection(section, isFirst ? "auto" : "smooth");
      suppressUntilRef.current = Date.now() + 700;
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
