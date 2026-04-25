# Match Services / Process / WhyDravonix headers to the About section style

Restyle the section headers for **Services ("What We Do")**, **Process ("Our Process")**, and **WhyDravonix ("Why Dravonix")** so they share the exact visual signature used by the About section.

## Reference pattern (from `About.tsx`)
- Centered header block wrapped in `<Reveal className="text-center">`.
- Eyebrow chip: `inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]` with a small solid cyan dot (`h-1.5 w-1.5 rounded-full bg-[var(--cyan-accent)]`).
- Headline: `font-display ... text-white` with one phrase wrapped in the cyan→blue gradient.

## Changes

**1. `src/components/dravonix/Services.tsx`**
- Replace the plain `<span>` eyebrow with the dot chip (label: "What We Do").
- Center the header block and the supporting paragraph (`mx-auto max-w-2xl`).
- Keep existing gradient on "compete and win." in the subhead. Cards grid unchanged.

**2. `src/components/dravonix/Process.tsx`**
- Replace the plain eyebrow with the dot chip (label: "Our Process").
- Center the header (`<Reveal className="text-center">`, `mx-auto max-w-2xl`).
- Headline keeps gradient on "system". Steps grid + connector line unchanged.

**3. `src/components/dravonix/WhyDravonix.tsx`**
- Replace the plain eyebrow with the dot chip (label: "Why Dravonix").
- Keep the two-column layout (left text / right SVG); heading copy and gradient on "work with us" stay as-is. Left alignment preserved because of the asymmetric layout — the chip itself is the unifying signature.

## Out of scope
- No copy changes; no layout/grid changes beyond centering the Services and Process header blocks.
- No changes to About or AI Studio (already correct).
- No new files, no routing changes.