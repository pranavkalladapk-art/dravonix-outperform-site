## Goal
Add **Akhil PH** as a 4th profile card on the `/team` page, fully matching the existing Dravonix card style (navy bg, cyan accent, photo + ring, name, role, email, tagline, expandable Founder Vision quote).

## Approach
The existing `TeamGrid.tsx` already implements the exact visual system the request describes (dark navy card, cyan glow border on hover, circular-ish photo with cyan gradient ring, white display name, cyan small-caps role, muted email, italic tagline, "Founder Vision" expandable quote). Rather than build a separate one-off card with diverging styling, I'll add Akhil as the 4th member of that grid so the team page stays visually consistent.

## Changes

### 1. Add photo asset
- Copy `user-uploads://WhatsApp_Image_2026-04-25_at_10.55.35_PM.jpeg` → `src/assets/team-akhil.webp` (converted to webp via imagemagick to match the other team photos' format and keep bundle small).

### 2. `src/components/dravonix/TeamGrid.tsx`
- Import the new `team-akhil.webp` asset.
- Append a 4th entry to the `members` array:
  - **initials**: `AP`
  - **name**: `Akhil PH`
  - **role**: `Strategic Managing Partner • Marketing Specialist`
  - **email**: `akhil@dravonixmedia.com`
  - **tagline**: `Driving strategy with data and creative marketing intelligence.`
  - **vision**: `Focused on building scalable strategies, strengthening brand positioning, and driving measurable growth through innovative marketing and data-driven decision making.`
  - **gradient**: reuse existing cyan/blue gradient pattern (e.g. `from-[var(--blue-brand)]/45 via-[var(--cyan-accent)]/25 to-transparent`)
  - **photo**: imported `team-akhil.webp`

### 3. Grid layout
- Current grid is `sm:grid-cols-2 lg:grid-cols-3`. With 4 cards this becomes 3 + 1 (last card left-aligned on lg).
- Update to `sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4` so all 4 founder cards sit on one row at xl and as a clean 2×2 on lg/sm — no awkward orphan card.

## Out of scope
- No changes to /team page header, CTA, or other routes.
- No new color tokens introduced — reuses `--navy`, `--cyan-accent`, `--blue-brand`, `--muted-text` already in `styles.css`.
- No standalone one-off card component (rejected: would visually fragment the team section).