## Goal
Keep the existing one-page scroll layout, but give each major section a real URL. Visiting `/services` (etc.) loads the homepage and scrolls to that section, and scrolling between sections updates the URL bar — no hash fragments.

## URL ↔ Section map
| URL | Section id |
|---|---|
| `/` and `/home` | `top` (Hero) |
| `/services` | `services` |
| `/ai-studio` | `ai-studio` |
| `/process` | `process` |
| `/about` | `about` |
| `/contact` | `contact` |

## Routing changes (TanStack Router)

Create thin route files that all render the same `Index` component (the existing home layout). Each file sets its own SEO `head()` (title/description/og) and a canonical pointing to `https://dravonixmedia.com/<path>`.

New files:
- `src/routes/home.tsx`
- `src/routes/services.tsx`
- `src/routes/ai-studio.tsx`
- `src/routes/process.tsx`
- `src/routes/about.tsx`
- `src/routes/contact.tsx`

Refactor:
- Move the `Index` component out of `src/routes/index.tsx` into a shared component, e.g. `src/components/dravonix/HomePage.tsx`, exporting `HomePage`. All 7 routes (`/`, `/home`, `/services`, `/ai-studio`, `/process`, `/about`, `/contact`) render `<HomePage />`.
- `src/routes/index.tsx` keeps `createFileRoute("/")` with canonical `https://dravonixmedia.com/`.

Note on existing routes: `/team`, `/brand-identity`, `/social-media-management`, `/performance-marketing`, `/admin/*`, and `/sitemap.xml` are unaffected.

Note on conflict: there is no existing `/services`, `/process`, `/about`, `/contact`, `/home`, or `/ai-studio` route, so no collisions. The footer's "AI-Integrated Video & Design" link currently points to `/#ai-studio` — service-card sub-routes already exist for the other three.

## Section → URL sync (scroll-spy)

Add a single `useSectionUrlSync()` hook in `src/hooks/use-section-url-sync.ts`, mounted once inside `HomePage`.

Behavior:
- Uses `IntersectionObserver` on the six section elements (`#top`, `#services`, `#ai-studio`, `#process`, `#about`, `#contact`).
- The most-visible section determines the active URL (threshold ~0.5, `rootMargin` tuned for the fixed Nav height).
- When the active section changes, call `window.history.replaceState(null, "", "/<path>")` — `replaceState`, not `pushState`, so the back button doesn't fill up with scroll noise.
- Treat `top` → `/home` (so `/` upgrades to `/home` once the user starts on Hero, matching the user's request that both work).
- Skip the URL update during programmatic scroll triggered by Link clicks (debounce ~600ms after navigation) to prevent flicker.

## Navigating to a section

Update `src/components/dravonix/Nav.tsx`:
- Replace the current `hashLinks` (`#top`, `#services`, `#process`, `#about`, `#contact`) with TanStack `<Link to="/home">`, `<Link to="/services">`, etc.
- Remove the `onHome` branching — every link is now a real route.
- "Get a Free Audit" CTA → `<Link to="/contact">`.

Update `src/components/dravonix/Footer.tsx`:
- `companyLinks`: `/#about` → `/about`, `/#contact` → `/contact`.
- `serviceLinks`: `/#ai-studio` → `/ai-studio`.

Search the rest of the codebase for any remaining `href="/#..."` or `hash="..."` usages and convert them to `<Link to="/...">` (e.g. CTA buttons inside Hero/CTA/AIStudio components if present).

## Scroll-on-arrival behavior

When a route loads (e.g. user hits `/services` directly or clicks `<Link to="/services">`), `HomePage` reads `useLocation().pathname`, maps it to the matching section id, and scrolls that section into view:
- On first mount: `scrollIntoView({ behavior: "instant", block: "start" })` with an offset for the fixed Nav (~80px) — use `window.scrollTo` with computed offset rather than raw `scrollIntoView` so the section header isn't hidden under the Nav.
- On subsequent route changes (Link click): `behavior: "smooth"`.
- `/` and `/home` scroll to top.

Suppress the scroll-spy URL updates for ~600ms after this programmatic scroll to avoid the URL snapping back.

## SEO per route

Each route's `head()` returns:
- `title` and `meta[name=description]` tailored to the section
- `og:title`, `og:description`
- `link rel=canonical` → `https://dravonixmedia.com/<path>`

Suggested copy (concise, brand-aligned):
- `/home` — "Dravonix — Engineered to Outperform" / current home description
- `/services` — "Services — Brand, Social, AI Studio & Performance Marketing | Dravonix"
- `/ai-studio` — "AI Studio — AI-Integrated Video & Design | Dravonix"
- `/process` — "Our Process — How Dravonix Delivers | Dravonix"
- `/about` — "About Dravonix — Precision. Innovation. Performance."
- `/contact` — "Contact Dravonix — Get a Free Audit"

## Sitemap

Update `src/routes/sitemap[.]xml.tsx` to include the new URLs:
- Keep `/` (priority 1.0)
- Add `/home`, `/services`, `/ai-studio`, `/process`, `/about`, `/contact` (priority 0.8, monthly)
- Existing service detail pages and `/team` stay as-is.

## Out of scope
- No redirect from `/` to `/home` — both render the home layout (per your choice).
- No content/section restructuring — only URLs and SEO.
- Hash links like `/#contact` won't be actively maintained but will still scroll correctly because the section IDs remain on the elements.

## Files touched
- New: `src/routes/{home,services,ai-studio,process,about,contact}.tsx`
- New: `src/components/dravonix/HomePage.tsx`
- New: `src/hooks/use-section-url-sync.ts`
- Edited: `src/routes/index.tsx`, `src/components/dravonix/Nav.tsx`, `src/components/dravonix/Footer.tsx`, `src/routes/sitemap[.]xml.tsx`
- Edited (if hash links found): Hero, CTA, AIStudio, LeadCapture CTA buttons
