## Goal

Add a **Project Gallery** that showcases three kinds of work — **Website**, **Social Post**, and **Reel** — in two places:

1. A featured **section on the homepage** (between Services and Process).
2. A dedicated **`/work` page** with the full grid + filter tabs.

Content stays hardcoded in the component. For now both surfaces ship with **no items** (clean empty state); you'll send the real items in the next message and I'll drop them in.

---

## What gets built

### 1. New shared data + types — `src/components/dravonix/gallery-data.ts`
Single source of truth used by both the homepage section and `/work`. Empty array now, easy to fill later.

```ts
export type GalleryItemType = "website" | "post" | "reel";

export interface GalleryItem {
  id: string;
  type: GalleryItemType;
  title: string;
  client?: string;
  thumb: string;          // image URL (screenshot / post / reel cover)
  link: string;           // live website URL, post URL, or reel URL
  // optional, for reels
  videoSrc?: string;      // mp4/webm for inline hover preview
  // optional, for websites
  domain?: string;        // shown as small label
  featured?: boolean;     // surface on homepage
}

export const galleryItems: GalleryItem[] = []; // user-supplied later
```

### 2. New card component — `src/components/dravonix/GalleryCard.tsx`
One component, three visual variants driven by `type`:

- **Website card**: 16:9 screenshot, hover overlay shows domain + "Visit site" button with external-link icon. Click opens link in new tab (`target="_blank" rel="noopener"`).
- **Post card**: 1:1 (square) image, Instagram-style. Type badge "POST". Click opens the social post URL in new tab.
- **Reel card**: 9:16 (portrait) cover image; on hover plays the muted looping `videoSrc` if provided. Play-icon overlay. Type badge "REEL". Click opens the reel URL in new tab.

All cards share: rounded-xl, navy card bg, cyan-accent hover border + shadow-glow-brand, top type badge (cyan small-caps), title + client label below the media. Reuses existing tokens (`--navy`, `--cyan-accent`, `--blue-brand`, `--card-dark`, `--muted-text`) — no new colors.

### 3. Homepage section — `src/components/dravonix/GalleryPreview.tsx`
- `<section id="work">` — so nav/anchors can target it later.
- Eyebrow "Selected Work", heading, short subhead.
- Filters by `featured: true` and shows up to **6 items** in a responsive grid:
  - Mobile: 1 col
  - md: 2 cols
  - lg: 3 cols (mixes types — masonry-feel via `auto-rows` is unnecessary; equal cards, aspect ratios handled inside each card via fixed media wrapper).
- **Empty state**: when `galleryItems` is empty, render a centered placeholder block ("New work coming soon — case studies in production.") instead of the grid, so the section never looks broken.
- "View all work" link → `/work`.

Mounted inside `HomePage.tsx` between `<Services />` and `<Process />`.

### 4. Dedicated route — `src/routes/work.tsx`
- Standard route file with `head()` setting unique title/description/og:title/og:description (`"Our Work — Project Gallery | Dravonix"`).
- Uses `Nav`, `Footer`, `Reveal` like other subpages (mirrors `social-media-management.tsx` shell).
- Page sections:
  1. Hero: "Back to Home" link (`/home#work`), eyebrow "Project Gallery", H1 "Our Work", subhead.
  2. **Filter tabs**: All / Websites / Social Posts / Reels — client-side `useState` filter (no router state, keeps it simple).
  3. Grid of all `galleryItems` (same `GalleryCard`).
  4. **Empty state** when no items match the active filter.
  5. CTA section "Want to be the next case study?" → `/contact`.

### 5. Navigation
- Add **"Work"** to the homepage nav (`src/components/dravonix/Nav.tsx`) between "Services" and "Our Process". It behaves like the existing in-page anchors (smooth scrolls to `#work` on the homepage; routes to `/home#work` from subpages — uses the existing `handleNavClick` logic, no new code paths).
- The dedicated `/work` page is reachable via the section's "View all work" link and is also a valid direct URL for sharing/SEO — it's not added to the top nav to avoid duplication with the in-page section.

### 6. SEO / sitemap
- Add `/work` to `src/routes/sitemap[.]xml.tsx` with `priority: 0.8`, `lastmod` matching today.
- Route file's `head()` provides unique meta (no og:image until you supply one).

### 7. Quiet fix (unrelated to this feature)
The current preview has a hydration warning. While editing `Nav.tsx` I'll guard the `window`/`document` reads in the first-paint hash effect with a `typeof window !== "undefined"` check inside `useEffect` (already client-only, but the warning indicates SSR/CSR drift on initial markup — I'll verify and tighten if found). No behavior change.

---

## Out of scope

- No CMS, no admin UI, no database table (per your choice — hardcoded).
- No actual gallery items yet — empty arrays, real content lands when you send it.
- No lightbox/modal — clicks open the external link directly in a new tab. (Can add later if you want in-app previews.)
- No changes to existing routes, services, or footer beyond the sitemap entry.

---

## Files touched

**New**
- `src/components/dravonix/gallery-data.ts`
- `src/components/dravonix/GalleryCard.tsx`
- `src/components/dravonix/GalleryPreview.tsx`
- `src/routes/work.tsx`

**Edited**
- `src/components/dravonix/HomePage.tsx` — mount `<GalleryPreview />`
- `src/components/dravonix/Nav.tsx` — add "Work" link + (quiet) hydration guard
- `src/routes/sitemap[.]xml.tsx` — add `/work`

---

## After approval

Once you approve, I'll build it as described and the gallery will render its empty state on both the homepage and `/work`. Then send me your items in this format and I'll populate `galleryItems`:

```
- type: website | post | reel
- title:
- client (optional):
- link (URL):
- thumb (image URL or upload):
- videoSrc (reels only, optional):
- featured? (yes/no — show on homepage)
```
