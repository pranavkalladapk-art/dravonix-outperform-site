

## Goal
Tell visitors that Dravonix offers **AI-integrated video & design creation** — make it feel like a signature differentiator, not a buried bullet.

## Recommended placement (3 coordinated touchpoints)

**1. Update the existing "Content Creation" service card → "AI-Integrated Video & Design"**
In `src/components/dravonix/Services.tsx`, replace the `Film` card with a sharper, AI-forward version:
- Title: `AI-Integrated Video & Design`
- Icon: swap `Film` for `Wand2` (lucide) to signal AI
- Desc: "AI-assisted video edits, motion graphics, and on-brand design — produced faster, iterated smarter, scaled without losing craft."

**2. Add a new dedicated section: "AI-Powered Creative Studio"**
New component `src/components/dravonix/AIStudio.tsx`, inserted in `src/routes/index.tsx` between `<Services />` and `<Process />`. This is the hero moment for the AI message.

Layout (2-column on desktop, stacked on mobile, dark `--card-dark` background with cyan accent glow consistent with the rest of the site):
- **Left column**: eyebrow `AI × Creative`, headline `Where AI meets brand craft.`, supporting paragraph, and 4 capability bullets with icons:
  - `Sparkles` — AI-assisted video editing & cuts
  - `Wand2` — Generative design & visual concepts
  - `Zap` — Rapid iteration cycles (10x throughput)
  - `Layers` — Human-led art direction on every output
- **Right column**: animated visual — a stylized "prompt → render" card stack using the existing gradient/glow tokens (no new assets needed), reusing the `animate-ambient` and gradient patterns already in `Hero.tsx` for visual consistency.

**3. Add a third value pillar mention**
In `src/components/dravonix/ValuePillars.tsx`, the existing 3 pillars stay, but update the middle pillar copy to reference AI:
- Title stays: `Content That Converts`
- Desc: "AI-accelerated production meets human creative direction — content built to stop the scroll and start conversations."

## Why this placement
- **Services card** = where buyers scan for capabilities (must appear here)
- **Dedicated AIStudio section** = gives the differentiator room to breathe and be remembered
- **ValuePillars mention** = reinforces it early in the scroll, before users reach Services

## Files touched
- `src/components/dravonix/Services.tsx` (edit one card)
- `src/components/dravonix/ValuePillars.tsx` (edit one description)
- `src/components/dravonix/AIStudio.tsx` (new)
- `src/routes/index.tsx` (import + place new section)

## Design notes
- Reuses existing tokens: `--navy`, `--card-dark`, `--blue-brand`, `--cyan-accent`, `shadow-glow-brand`, `animate-ambient`
- No new dependencies, no new assets
- Maintains the `Reveal` scroll-in pattern used across the site
- Section ID `ai-studio` so it can be linked from nav later if desired

