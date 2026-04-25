## Problem

When clicking a nav link (e.g. `/services`, `/process`, `/about`) or while scrolling between sections, the page **jumps** before smoothly scrolling. Two systems are fighting each other:

1. **TanStack Router's `scrollRestoration: true`** (in `src/router.tsx`) instantly snaps the window to top/restored position on every route change.
2. **`useSectionUrlSync`** (in `src/hooks/use-section-url-sync.ts`) then triggers a smooth `window.scrollTo` to the matching section.

Result: instant snap → smooth scroll = visible "jump" stutter. The scroll-spy IntersectionObserver also updates the URL while the user is mid-scroll, which on a fast scroll can re-trigger another smooth scroll before the suppression window (700ms) elapses.

## Fix

### 1. `src/router.tsx`
- Set `scrollRestoration: false` so TanStack Router stops snapping the viewport on internal navigations. Our hook owns scrolling between the synced sections.

### 2. `src/hooks/use-section-url-sync.ts`
- **Detect "synced" route changes**: when navigating between paths that map to sections on the same single page (`/home`, `/services`, `/ai-studio`, `/process`, `/about`, `/contact`), always use smooth scroll — never `auto`.
- **Lengthen the scroll-spy suppression window** from 700ms → 1200ms so a programmatic smooth scroll fully completes before the observer is allowed to overwrite the URL.
- **Guard against double-trigger**: if the target section is already roughly in view (within ~120px of the nav offset), skip the scroll entirely instead of re-scrolling.
- **First-load behavior**: only use `behavior: "auto"` on the very first mount (deep-link to `/services` etc.), not on subsequent in-app navigations.
- Initialize `currentPathRef` correctly so the first navigation isn't misclassified as "first load".

### 3. `src/styles.css`
- Keep `html { scroll-behavior: smooth }` but add `@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto } }` for accessibility (no behavior change for typical users; just hygiene).

## Files to edit
- `src/router.tsx` — flip `scrollRestoration` to `false`.
- `src/hooks/use-section-url-sync.ts` — smarter scroll trigger + longer suppression + skip-if-already-visible.
- `src/styles.css` — add reduced-motion guard (small accessibility tweak).

## Out of scope
- No changes to `Nav.tsx`, route files, or section components. The nav links keep using `<Link to="/...">` exactly as today; only the scroll mechanics underneath change.