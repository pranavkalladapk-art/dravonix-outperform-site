## Goal

Simplify the Project Gallery without losing any items. Same content (2 websites, 6 DECOLUX posts, 2 reels) renders on both the homepage section and `/work`, but with a cleaner, quieter layout.

---

## Changes

### 1. `src/components/dravonix/GalleryCard.tsx`
- **Remove the title** (`<h3>{item.title}</h3>`) from every card.
- **Remove the type badge** (the "Website / Social Post / Reel" pill in the top-left corner) from every card.
- **Keep the client label** (`DECOLUX`, `DTS Gulf`, `Wizard Fingers`) as the only text under the media.
- Keep all hover behaviors:
  - Reels still play the muted looping `videoSrc` on hover with the play-icon overlay (the icon stays — it's not a text label).
  - Websites still show the gradient overlay with `domain` + "Visit site" button on hover.
- Keep the uniform `aspect-[4/3]` media wrapper so the grid stays aligned.
- Card still wraps in `<a target="_blank">` so clicks open the live link.

Result: cleaner, image-led cards. Just the artwork and a small uppercase client tag below it.

### 2. `src/routes/work.tsx`
- **Remove the filter tabs** (the All / Websites / Social Posts / Reels row) and the `useState` / `useMemo` filter logic that powers them.
- Render `galleryItems` directly in one unified responsive grid (1 / 2 / 3 columns at sm/md/lg, `auto-rows-fr` preserved for height alignment).
- **Remove the dynamic empty-state branch** (no longer needed without filters); since the array is non-empty there's always a grid.
- Keep the rest of the page intact: hero ("Back to Home" link, eyebrow, "Our Work" H1, subhead) and the bottom CTA ("Want to be the next case study?").
- Trim now-unused imports (`useMemo`, `useState`, `cn`, `GalleryItemType`).

### 3. `src/components/dravonix/GalleryPreview.tsx` (homepage section)
No structural changes needed — it already uses `GalleryCard` and a single grid, so simplifying the card automatically simplifies this section too. No code changes here.

### 4. Quiet hydration-warning fix
Console shows a hydration mismatch on the current page. While the simplification edits are the main change, I'll glance at `Nav.tsx` and `work.tsx` for any client-only branches and tighten them if the cause is obvious. No behavior change for the user.

---

## Files touched

**Edited**
- `src/components/dravonix/GalleryCard.tsx` — drop title + type badge, keep client + hover behaviors
- `src/routes/work.tsx` — drop filter tabs, render all items in one grid

**Not touched**
- `src/components/dravonix/gallery-data.ts` — all items preserved as-is
- `src/components/dravonix/GalleryPreview.tsx` — automatically inherits the simpler card

---

## Out of scope
- No changes to which items are featured on the homepage.
- No changes to colors, spacing tokens, or the navigation.
- No new routes, no removed routes.
