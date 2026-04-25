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
const SCROLL_SUPPRESS_MS = 1000;
const ALREADY_IN_PLACE_TOLERANCE = 120;
const BOTTOM_THRESHOLD = 80;

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
  // Tracks paths set by our own scroll-spy via history.replaceState — we must
  // NOT react to those by scrolling, otherwise we fight the user.
  const internalPathsRef = useRef<Set<string>>(new Set());

  // Scroll to matching section ONLY when the path change came from a real
  // navigation (nav link click, back/forward), not from our scroll-spy.
  useEffect(() => {
    const section = PATH_TO_SECTION[location.pathname];
    if (!section) return;

    const isFirstMount = isFirstMountRef.current;
    isFirstMountRef.current = false;
    const samePath = currentPathRef.current === location.pathname;
    currentPathRef.current = location.pathname;

    // If this path was just written by our own scroll-spy, consume the marker
    // and do nothing — the user is already scrolling there manually.
    if (internalPathsRef.current.has(location.pathname)) {
      internalPathsRef.current.delete(location.pathname);
      return;
    }

    if (samePath && !isFirstMount) return;

    suppressUntilRef.current = Date.now() + SCROLL_SUPPRESS_MS;

    if (isFirstMount) {
      // Deep link / refresh: jump to top instantly, then smoothly scroll to
      // the target section so the user sees the motion and lands cleanly.
      window.scrollTo({ top: 0, behavior: "auto" });
      // Wait for layout (fonts, images, reveal animations) to settle before
      // measuring the section's position.
      const t = window.setTimeout(() => {
        scrollToSection(section, "smooth");
        suppressUntilRef.current = Date.now() + SCROLL_SUPPRESS_MS;
      }, 250);
      return () => window.clearTimeout(t);
    }

    const t = window.setTimeout(() => {
      scrollToSection(section, "smooth");
      suppressUntilRef.current = Date.now() + SCROLL_SUPPRESS_MS;
    }, 30);
    return () => window.clearTimeout(t);
  }, [location.pathname]);

  // Scroll-spy: update URL as user scrolls (passive, no scrolling triggered).
  useEffect(() => {
    if (!enabled) return;
    if (typeof IntersectionObserver === "undefined") return;

    const ids = Object.keys(SECTION_TO_PATH);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (elements.length === 0) return;

    const visibility = new Map<string, number>();

    const updateUrl = () => {
      if (Date.now() < suppressUntilRef.current) return;

      // Bottom-of-page guard: prefer "contact" when near the end.
      const nearBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - BOTTOM_THRESHOLD;

      let topId = "";
      if (nearBottom && document.getElementById("contact")) {
        topId = "contact";
      } else {
        let topRatio = 0;
        for (const [id, ratio] of visibility) {
          if (ratio > topRatio) {
            topRatio = ratio;
            topId = id;
          }
        }
        if (!topId || topRatio < 0.15) return;
      }

      const targetPath = SECTION_TO_PATH[topId];
      if (!targetPath) return;
      const current = window.location.pathname;
      const normalized = current === "/" ? "/home" : current;
      if (normalized === targetPath) return;
      if (!PATH_TO_SECTION[current]) return;

      // Mark as internal so the navigation effect above ignores it.
      internalPathsRef.current.add(targetPath);
      window.history.replaceState(null, "", targetPath);
      currentPathRef.current = targetPath;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.intersectionRatio);
        }
        updateUrl();
      },
      {
        threshold: [0.15, 0.3, 0.5, 0.75],
        rootMargin: `-${NAV_OFFSET}px 0px -40% 0px`,
      },
    );

    elements.forEach((el) => observer.observe(el));

    // Also re-check on scroll for the bottom-of-page case (contact may not
    // hit a high intersection ratio if it's short).
    const onScroll = () => updateUrl();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [enabled]);
}
