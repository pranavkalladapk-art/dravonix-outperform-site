
## Goal
Make the "Brand Identity" service card on the home page navigate to a new dedicated **Brand Identity** page that presents the full brand identity offering as described.

## Changes

**1. New route: `src/routes/brand-identity.tsx`**
A standalone page (not a hash anchor) following the TanStack Start route convention used elsewhere in the site.

Page sections (all on `--navy` background, reusing existing tokens and the `Reveal` scroll-in pattern):

- **Hero block** (centered, max-w-4xl)
  - Eyebrow: `Brand Identity`
  - Headline (font-display, text-5xl/6xl, bold, white): *"Build a brand that commands attention."*
  - Description paragraph: Dravonix creates complete brand identity systems — logo design, visual identity, tone of voice, and brand guidelines — combining strategy and creativity to build powerful, memorable brands.

- **Key Services grid** (5 cards, responsive: 1 col mobile / 2 col md / 3 col lg, last row centered)
  Each card uses the same styling language as `Services.tsx` (rounded-xl, border white/10, `--card-dark` bg, top accent bar, icon tile, hover lift + `shadow-glow-brand`):
  1. `PenTool` — Logo & Brand Mark Design
  2. `Palette` — Visual Identity System
  3. `MessageSquare` — Tone of Voice & Messaging
  4. `BookOpen` — Brand Guidelines
  5. `Target` — Brand Positioning

- **CTA block** (centered)
  - Premium button: **"Contact →"** linking to `/#contact` (the existing `LeadCapture` section on home).
  - Styled with `bg-[var(--blue-brand)]`, white text, `shadow-glow-brand`, hover lift — matching the primary CTA style used in `Hero.tsx` / `CTA.tsx`.

- Page-level `head()` with unique title + description + og:title/og:description for SEO (per TanStack routing rules — no shared metadata with home).

**2. Wire navigation from the Brand Identity service card**
In `src/components/dravonix/Services.tsx`, add `href: "/brand-identity"` to the `Brand Identity` service object. The existing `href` resolution in the card already supports this — no component logic changes needed. The "Learn More" link will now route to the new page.

## Files touched
- `src/routes/brand-identity.tsx` (new)
- `src/components/dravonix/Services.tsx` (add `href` to one item)

## Design notes
- Reuses existing tokens: `--navy`, `--card-dark`, `--blue-brand`, `--cyan-accent`, `shadow-glow-brand`
- No new dependencies, no new assets
- Lucide icons already available in the project
- Route file uses `createFileRoute("/brand-identity")` per TanStack Start conventions
- Contact button deep-links back to the home page's `#contact` section so the existing `LeadCapture` form remains the single submission point
