# Auto-play reels on scroll

Right now reel cards on the gallery only show a static thumbnail until tapped (which opens the fullscreen lightbox). On desktop, hovering plays an inline preview. On mobile there is no hover, so reels feel "dead" while scrolling.

## Goal

When a reel card scrolls into view, the inline preview video should start playing automatically (muted, looped). When it scrolls out of view, it should pause to save battery and bandwidth. Tapping the card still opens the fullscreen lightbox with sound controls.

## Changes

**`src/components/dravonix/GalleryCard.tsx`**

1. Render the inline `<video>` element on all screen sizes for reel cards (currently hidden on mobile via `md:block`). Keep `muted`, `loop`, `playsInline`, and add `preload="metadata"` so the first frame is ready without downloading the whole file.
2. Add an `IntersectionObserver` that watches the card:
   - When ≥50% of the card is visible → call `video.play()` and fade the video layer in over the thumbnail.
   - When it leaves the viewport → `video.pause()` and reset to the poster frame.
3. Respect `prefers-reduced-motion`: if the user has reduced motion enabled, skip auto-play and keep the static thumbnail + play-button overlay.
4. Keep desktop hover behavior as a no-op fallback (the observer already handles play state).
5. Keep the existing tap-to-open lightbox behavior unchanged.

## Performance notes

- Videos are already optimized (~4 MB each at 1280px), so inline playback is mobile-safe.
- `preload="metadata"` only fetches a few KB until the card actually enters view.
- Pausing off-screen reels prevents more than one or two videos from decoding at once.
- No changes to the lightbox, gallery data, or other components.
