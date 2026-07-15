# Media Integration Plan

**Sprint:** 2.0 — Media Integration
**Status:** Planning (approved)
**Scope:** Replace remaining placeholders with real project media. No architecture, layout, or animation changes.

---

## 1. Current Asset Inventory

| Location             | Contents                                                                          |
| -------------------- | --------------------------------------------------------------------------------- |
| `src/assets/hero/`   | `hero.png` (343×361px, 13KB) — present but under-resolution for a fullscreen hero |
| `src/assets/book/`   | empty                                                                             |
| `src/assets/author/` | empty                                                                             |
| `src/assets/reels/`  | empty                                                                             |
| `public/images/`     | empty (`.gitkeep` only)                                                           |

No placeholder artwork exists in the codebase. Missing media is represented with semantic, accessible placeholder markup (`<figure>` + hidden captions) and `TODO` comments, per project rules in `docs/AI_CONTEXT.md`.

---

## 2. Required Assets

### 2.1 Hero Background (⚠️ present but insufficient quality)

- **Expected filename:** `hero.jpg` or `hero.webp`
- **Expected folder:** `src/assets/hero/`
- **Expected dimensions:** ≥ 2400×1350px (16:9) or 2560×1440px, for sharp `background-size: cover` rendering on large/Retina viewports
- **Recommended format:** WebP (preferred) or optimized JPEG
- **Referenced in React:** `src/components/sections/Hero/HeroSection.tsx` (`import heroImage from "../../../assets/hero/hero.png"`)
- **Accessibility notes:** Used as a decorative CSS background; no `alt` text applies. If the image conveys narrative meaning beyond decoration, consider `aria-label` on the `.hero` section (e.g. `"Sternenhimmel über einer stillen Landschaft"`).
- **Optimization target:** 150–300KB after compression.

### 2.2 Book Cover (❌ missing)

- **Expected filename:** `book-cover.png` or `book-cover.webp`
- **Expected folder:** `src/assets/book/`
- **Expected dimensions:** ~800×1200px (2:3 portrait), based on `.coverFrame { max-width: 360px }`
- **Recommended format:** WebP (PNG only if transparency is required)
- **Referenced in React:** Replaces placeholder `<figure>` in `src/components/sections/Book/BookSection.tsx`
- **Accessibility notes:** `alt="Buchcover: Die Kleine und das Universum von Maymilly Nowak"`
- **Optimization target:** under 150KB; use `loading="lazy"` (already supported by `src/components/ui/Image/Image.tsx`).

### 2.3 Author Portrait (❌ missing)

- **Expected filename:** `author.jpg` or `author.webp`
- **Expected folder:** `src/assets/author/`
- **Expected dimensions:** ~600×600px square, based on `.grid { grid-template-columns: 300px 1fr }` and `.image { border-radius: 50% }`
- **Recommended format:** WebP or optimized JPEG
- **Referenced in React:** Replaces placeholder `<figure>` in `src/components/sections/Author/AuthorSection.tsx`
- **Accessibility notes:** `alt="Porträt von Maymilly Nowak, Autorin von Die Kleine und das Universum"`
- **Optimization target:** under 100KB; crop to a centered square before export so the circular mask doesn't cut off facial features.

### 2.4 Reel Thumbnails (❌ missing — 3 assets)

- **Expected filenames:** `reel-1.jpg`, `reel-2.jpg`, `reel-3.jpg`
- **Expected folder:** `src/assets/reels/`
- **Expected dimensions:** Consistent across all three — recommend 1080×1350px (4:5) or 1080×1920px (9:16), matching Instagram's native formats
- **Recommended format:** WebP
- **Referenced in React:** Replaces the three placeholder `<figure>` blocks in the `.map` loop in `src/components/sections/Reels/ReelsSection.tsx`
- **Accessibility notes:** Per-reel descriptive `alt` text (avoid generic "Reel 1"), e.g. `"Instagram Reel Vorschau: Gedanken in Bewegung – Teil 1"`
- **Optimization target:** under 100KB each; these are static preview thumbnails, not embeds, so aggressive compression is acceptable.

---

## 3. Optimization Summary

| Asset                | Target Size  | Format    |
| -------------------- | ------------ | --------- |
| Hero background      | 150–300KB    | WebP/JPEG |
| Book cover           | < 150KB      | WebP      |
| Author portrait      | < 100KB      | WebP/JPEG |
| Reel thumbnails (×3) | < 100KB each | WebP      |

General guidance:

- Prefer WebP for all new assets, keeping visual quality high while minimizing bytes.
- Avoid duplicate or unused assets once real media is added.
- Keep the existing `src/assets/<section>/` folder structure; do not rename or restructure folders.

---

## 4. Accessibility Notes

- All meaningful images require descriptive, specific `alt` text (no generic placeholders like "Reel 1").
- Purely decorative images (e.g. hero background) should remain free of redundant `alt` text and rely on `aria-label` only if they carry narrative meaning.
- Maintain existing focus states and semantic HTML structure; media integration must not remove or obscure keyboard navigation.
- Verify color contrast is unaffected once real imagery is placed behind overlays (particularly the hero overlay text).

---

## 5. Documentation Mismatch

`docs/BUILD.md` currently documents expected asset paths under `public/images/...`:

```
public/images/hero/hero.jpg
public/images/book/book-cover.jpg
public/images/author/author.jpg
public/images/reels/reel-1.jpg
public/images/reels/reel-2.jpg
public/images/reels/reel-3.jpg
```

However, the actual implementation imports images from `src/assets/...` via Vite bundling (see `HeroSection.tsx`). This is a documentation/implementation mismatch that should be reconciled — either:

1. Update `docs/BUILD.md` to reflect the `src/assets/<section>/` convention actually used in code, or
2. Decide that `public/images/` should be used instead for these specific assets and update the component imports accordingly.

This plan does not resolve the mismatch; `docs/BUILD.md` is intentionally left unmodified per sprint instructions.

---

## 6. Implementation Order

1. **Hero background** — highest visual impact, sets first impression; replace with a properly sized, high-resolution image.
2. **Book cover** — high priority per project narrative (the book is the central artifact).
3. **Reel thumbnails** — high priority; needed as a set of three consistent images.
4. **Author portrait** — medium priority; can follow once primary narrative assets are in place.
5. **Asset optimization pass** — after all real media is integrated, verify formats, compress where needed, and remove any unused or duplicate files.
6. **Accessibility verification** — confirm alt text, contrast, and keyboard navigation across all updated sections.
7. **Documentation reconciliation** — resolve the `public/images` vs `src/assets` mismatch in `docs/BUILD.md` (separate follow-up task).

---

## 7. Out of Scope

- No placeholder artwork generation.
- No layout, animation, or architecture changes.
- No new libraries or CMS integration.
- No modification to `docs/BUILD.md` in this task.
