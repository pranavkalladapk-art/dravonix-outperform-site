# Add AI Studio-style background grid to Why Dravonix section

## Goal
Match the **Why Dravonix** section's background to the **AI × Creative (AIStudio)** section — same decorative grid backdrop and ambient blue/cyan blur orbs, while keeping the existing faint "D" watermark, heading, and 2-column checklist intact.

## File to edit
- `src/components/dravonix/WhyDravonix.tsx`

## Changes
The `<section>` already has `relative overflow-hidden`. Inside it, before the existing D watermark SVG, add the same decorative layers used in `AIStudio.tsx`:

1. **Ambient blur orbs** (top-right blue, bottom-left cyan):
   ```tsx
   <div aria-hidden className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-[var(--blue-brand)]/20 blur-3xl animate-ambient" />
   <div aria-hidden className="pointer-events-none absolute -bottom-32 left-0 h-[360px] w-[360px] rounded-full bg-[var(--cyan-accent)]/15 blur-3xl animate-ambient" />
   ```

2. **Decorative grid backdrop** with radial mask (identical to AIStudio):
   ```tsx
   <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
   ```

3. Keep the existing faint "D" SVG watermark layered on top of the grid (already `opacity-[0.06]`).

4. Keep the content wrapper `<div className="relative mx-auto max-w-6xl">` so heading + checklist stay above all decorative layers.

## Result
Why Dravonix will visually echo the AI Studio section: subtle white grid fading at the edges via radial mask, plus two soft blue/cyan ambient glows — unifying both sections' premium backdrop without altering any text content or layout.