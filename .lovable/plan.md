## Goal
Give each section heading a unique copy/structure while sharing **one consistent color treatment** — a cyan→blue gradient on a key accent word — so the site feels visually cohesive.

The gradient already used by **About** and **AI Studio** becomes the standard:
```
bg-gradient-to-r from-[var(--cyan-accent)] to-[var(--blue-brand)] bg-clip-text text-transparent
```

(About currently uses `from-cyan to-blue`; AI Studio uses `from-blue to-cyan`. I'll standardize all 5 to **`from-cyan-accent to-blue-brand`** for true uniformity.)

## Changes

### 1. `src/components/dravonix/Services.tsx` (line 42–44)
The line "Everything your brand needs to compete and win." is currently a `<p>` subheading. Promote the accent words `compete and win` with the gradient span. Keep the existing h2 ("Services that move the needle.") unchanged.

```jsx
<p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
  Everything your brand needs to{" "}
  <span className="bg-gradient-to-r from-[var(--cyan-accent)] to-[var(--blue-brand)] bg-clip-text font-semibold text-transparent">
    compete and win.
  </span>
</p>
```

### 2. `src/components/dravonix/AIStudio.tsx` (line 60–64)
Already has the gradient on "brand craft" but uses `from-blue to-cyan`. Flip the direction to match the unified scheme `from-cyan-accent to-blue-brand`.

### 3. `src/components/dravonix/Process.tsx` (line 36–38)
Wrap "system" with the gradient span:
```jsx
<h2 className="...">
  A{" "}
  <span className="bg-gradient-to-r from-[var(--cyan-accent)] to-[var(--blue-brand)] bg-clip-text text-transparent">
    system
  </span>
  , not a sprint.
</h2>
```

### 4. `src/components/dravonix/WhyDravonix.tsx` (line 23–25)
Wrap "work with us" with the gradient span:
```jsx
<h2 className="...">
  Why{" "}
  <span className="bg-gradient-to-r from-[var(--cyan-accent)] to-[var(--blue-brand)] bg-clip-text text-transparent">
    work with us
  </span>
  ?
</h2>
```

### 5. `src/components/dravonix/About.tsx` (line 22–27)
Already has the gradient on "Performance" with `from-cyan-accent to-blue-brand`. **No change needed** — this is the reference style.

## Result
- All 5 sections have a single cyan→blue gradient accent on one meaningful word.
- Each heading still reads uniquely (different copy, different accent word).
- One unified color signature ties the whole page together.
- No layout, spacing, or font-size changes.