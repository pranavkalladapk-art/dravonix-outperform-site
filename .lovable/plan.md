# Add Website Development & Website Design Service Cards

## Goal
Add two new service cards to the `/brand-identity` page and one new "Website Development" card to the Home page Services section, all matching the existing visual style.

## Files to edit

### 1. `src/routes/brand-identity.tsx`
Add two entries to the `services` array (rendered in the existing 3-column grid):

- Update the import line to include `Globe` and `Layout`:
  ```ts
  import { ArrowLeft, ArrowRight, PenTool, Palette, MessageSquare, BookOpen, Target, Globe, Layout } from "lucide-react";
  ```
- Append to the `services` array:
  ```ts
  {
    icon: Globe,
    title: "Website Development",
    desc: "From landing pages to full business websites — fast, modern, and conversion-focused builds that reflect your brand perfectly.",
  },
  {
    icon: Layout,
    title: "Website Design",
    desc: "Pixel-perfect UI/UX design crafted to reflect your brand identity — clean, intuitive, and built to convert visitors into clients.",
  },
  ```
The existing grid is `md:grid-cols-2 lg:grid-cols-3` — 7 cards will fill 3 rows cleanly (3+3+1) on desktop and stay balanced on tablet/mobile. No layout changes needed.

### 2. `src/components/dravonix/Services.tsx`
- Add `Globe` to the lucide-react import:
  ```ts
  import { ArrowRight, Sparkles, CalendarRange, Wand2, TrendingUp, Globe } from "lucide-react";
  ```
- Append a new entry to the `services` array (after Performance Marketing):
  ```ts
  {
    icon: Globe,
    title: "Website Development",
    desc: "Fast, modern, conversion-focused websites built to reflect your brand and drive real business results.",
    href: "/brand-identity",
  },
  ```
The existing grid is `md:grid-cols-2`. With 5 cards, the 5th will span one column on the last row — visually fine, but to keep balance we'll leave the grid as-is (existing pattern; the last card centers naturally in column 1). No styling changes — the card markup already renders `Explore {title} Services` so the link label automatically becomes "Explore Website Development Services →".

## Result
- `/brand-identity` page shows 7 service cards including Website Development & Website Design with matching styling.
- Home Services section gains a 5th card "Website Development" with the same dark card styling, blue icon box, white title, muted description, and blue arrow CTA linking to `/brand-identity`.
- No other files affected; no new dependencies required (icons already shipped with `lucide-react`).
