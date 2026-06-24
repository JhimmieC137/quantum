# Quantum Homes — UI Design Specification
**Version:** 1.0  
**Scope:** Desktop Web (min-width: 1100px)  
**Stack:** React + Inline Styles (Tailwind-compatible)  
**Last Updated:** 2024

---

## 1. Brand & Design Principles

Quantum Homes positions itself as a premium African real estate brand. The design language is editorial and luxury-forward — combining serif display type with clean sans-serif body text, generous whitespace, and strong brand colour hits used as deliberate accents rather than fills.

**Core Aesthetic:** Refined luxury with bold typographic moments. Dark backgrounds anchor premium sections; warm stone tones ground the informational sections.

---

## 2. Design Tokens

### 2.1 Colour Palette

| Token | Value | Usage |
|---|---|---|
| `brand-red` | `#dc2626` | Primary CTA buttons, section accents, tag badges, icon backgrounds |
| `brand-yellow` | `#fbbf24` | Eyebrow labels, hover states on dark backgrounds, decorative accents |
| `white` | `#FFFFFF` | Text on dark/red backgrounds, card backgrounds, button fills |
| `dark` | `#111110` | Primary dark background (Hero, Projects section) |
| `dark-2` | `#1A1916` | Secondary dark background (Services section) |
| `stone` | `#F4F2EC` | Light section background (About, Core Values) |
| `footer-bg` | `#0D0D0C` | Footer background |
| `body-text-muted` | `#555555` | Body copy on light backgrounds |
| `body-text-dim` | `rgba(255,255,255,0.50)` | Body copy on dark backgrounds |
| `border-light` | `#E0DDD4` | Card borders on stone background |
| `border-dark` | `rgba(255,255,255,0.06)` | Subtle borders on dark backgrounds |
| `ghost-number` | `#F0ECE4` | Decorative oversized numbers in value cards |

### 2.2 Typography

| Role | Font | Weight | Size | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| Display / H1 | Playfair Display | 800 | clamp(52px, 6vw, 88px) | 1.05 | — |
| Section H2 | Playfair Display | 800 | clamp(36px, 3.5vw, 56px) | 1.08–1.1 | — |
| Card H3 | Playfair Display | 700 | 20–26px | — | — |
| Eyebrow label | Outfit | 600 | 11–12px | — | 0.22–0.24em |
| Body / paragraph | Outfit | 400 | 15–17px | 1.7–1.8 | — |
| Nav links | Outfit | 400 | 14px | — | 0.04em |
| CTA Button text | Outfit | 600–700 | 13–14px | — | 0.06–0.08em |
| Stat number | Playfair Display | 800 | 32px | — | — |
| Stat label | Outfit | 400 | 12px | — | 0.08em |
| Card ghost number | Playfair Display | 800 | 48px | 1 | — |
| Footer column heading | Outfit | 600 | 11px | — | 0.22em |
| Footer body links | Outfit | 400 | 14px | — | — |
| Legal / copyright | Outfit | 400 | 13px | — | — |

**Italic rule:** `<em>` elements on headings use `color: brand-red` or `color: brand-yellow` to create typographic emphasis without bolding.

**Eyebrow labels** are always uppercase, `brand-red` or `brand-yellow` depending on section background, and sit 14–20px above the heading.

---

## 3. Spacing & Layout

### 3.1 Grid

- **Page min-width:** 1100px
- **Horizontal page padding:** 80px (all sections)
- **Nav horizontal padding:** 48px

### 3.2 Section Vertical Padding

| Section | Top | Bottom |
|---|---|---|
| Hero | — (full viewport) | — |
| About | 112px | 112px |
| Clients Strip | 64px | 64px |
| Services | 112px | 112px |
| Core Values | 112px | 112px |
| Projects | 112px | 112px |
| CTA | 100px | 100px |
| Footer | 80px | 40px |

### 3.3 Internal Spacing

- Section heading-to-content gap: 56–64px
- Card grid gap: 16–20px
- Service row gap: 4px (between rows)
- Stat items gap: 48px
- Nav link gap: 36px
- Button group gap: 16px
- Footer column gap: 56px
- Footer social icon gap: 10px

---

## 4. Component Specifications

### 4.1 Navigation

**Layout:** Fixed, full-width, flex row, `space-between`, height `72px`, padding `0 48px`.

**States:**
- **Default (top of page):** Transparent background, no border.
- **Scrolled (> 40px):** Background `rgba(17,17,16,0.96)`, `backdrop-filter: blur(12px)`, bottom border `1px solid rgba(255,255,255,0.06)`.
- Transition: `background 0.4s`, `backdrop-filter 0.4s`.

**Logo mark:** 36×36px, `border-radius: 8px`, `background: brand-red`. "Q" in Playfair Display, weight 800, 18px, white.  
**Logo text:** "QUANTUM" in Outfit, weight 600, 16px, white, `letter-spacing: 0.06em`.

**Nav links:** Outfit, 14px, weight 400, `rgba(255,255,255,0.7)` default. Hover: `brand-yellow`. Transition: `color 0.2s`.

**CTA Button:** `background: brand-red`, white text, `border-radius: 40px`, padding `10px 24px`, 13px, weight 600, `letter-spacing: 0.08em`.

---

### 4.2 Hero Section

**Layout:** `position: relative`, `height: 100vh`, `min-height: 700px`, `overflow: hidden`, `background: #111110`.

**Background image:** Absolute fill, `object-fit: cover`, `opacity: 0.38`.

**Decorative overlays:**
- Red diagonal: right side, width 38%, `background: linear-gradient(135deg, transparent 30%, #D0211C22 100%)`.
- Yellow left bar: `position: absolute`, `top: 72px`, `left: 0`, `width: 4px`, `height: 120px`, `background: brand-yellow`.

**Content container:** `padding: 0 80px`, `max-width: 900px`, vertically centred.

**Eyebrow:** Outfit 600, 12px, `brand-yellow`, `letter-spacing: 0.22em`, uppercase. Margin-bottom `20px`.

**H1:** Playfair Display 800, `clamp(52px, 6vw, 88px)`, white, `line-height: 1.05`. Italic `<em>` in `brand-yellow`. Margin-bottom `24px`.

**Subheading paragraph:** Outfit 400, 17px, `rgba(255,255,255,0.62)`, `line-height: 1.7`, `max-width: 480px`. Margin-bottom `40px`.

**Primary button:** `background: brand-red`, white text, `border-radius: 40px`, padding `14px 34px`, 14px, weight 600.  
**Secondary button:** Transparent background, white text, `border: 1.5px solid rgba(255,255,255,0.3)`, same sizing.

**Stats row:** Flex, gap `48px`, margin-top `56px`. Each stat: number in Playfair 800, 32px, white; label in Outfit 400, 12px, `rgba(255,255,255,0.45)`, `letter-spacing: 0.08em`.

**Scroll cue:** Centred at bottom `36px`. Vertical line `1px wide`, `48px tall`, `linear-gradient(transparent → brand-yellow)`. Label below: Outfit 10px, `rgba(255,255,255,0.4)`, `letter-spacing: 0.16em`, uppercase.

---

### 4.3 About / Philosophy Section

**Background:** `#F4F2EC` (stone).  
**Layout:** `display: grid`, `grid-template-columns: 1fr 1fr`, gap `80px`, items centred.

**Left column:**
- Eyebrow: Outfit 600, 11px, `brand-red`, `letter-spacing: 0.24em`, uppercase.
- H2: Playfair 800, `clamp(36px, 3.5vw, 54px)`, `#111110`, `line-height: 1.1`. Italic `<em>` in `brand-red`.
- Body paragraphs: Outfit 400, 16px, `#555`, `line-height: 1.8`.
- CTA button: `background: #111110`, white text, `border-radius: 40px`, padding `13px 30px`, 13px, weight 600.

**Right column — photo mosaic:**
- Grid: `grid-template-columns: 1fr 1fr`, gap `16px`.
- Large image (left): spans 2 rows, height `240px`, `border-radius: 16px`, `object-fit: cover`.
- Small image (top-right): height `112px`, `border-radius: 12px`.
- Stat tile (bottom-right): height `112px`, `background: brand-red`, `border-radius: 12px`. Number: Playfair 800, 36px, white. Label: Outfit 400, 12px, `rgba(255,255,255,0.8)`, `letter-spacing: 0.1em`.

---

### 4.4 Clients Strip

**Background:** `brand-red`. Padding `64px 80px`.

**Eyebrow:** Outfit 600, 11px, `brand-yellow`, `letter-spacing: 0.24em`, uppercase, centred.  
**H2:** Playfair 800, 36px, white, centred. Margin-bottom `40px`.

**Image strip:** `display: flex`, `gap: 12px`, `overflow-x: auto`. Images: `180×110px`, `border-radius: 10px`, `object-fit: cover`, `opacity: 0.85`, `flex-shrink: 0`.

---

### 4.5 Services Section

**Background:** `#1A1916`. Padding `112px 80px`.  
**Layout:** `display: grid`, `grid-template-columns: 1fr 1.4fr`, gap `80px`, aligned to start.

**Left editorial column:**
- Eyebrow: `brand-yellow`.
- H2: Playfair 800, `clamp(36px, 3.2vw, 52px)`, white. Italic `<em>` in `brand-red`.
- Body: Outfit 400, 15px, `rgba(255,255,255,0.5)`, `line-height: 1.8`.
- Image: full-width, height `220px`, `border-radius: 16px`, `opacity: 0.7`.

**Service row (repeated x4):**
- Layout: `display: flex`, `gap: 20px`, `align-items: center`, padding `28px 24px`, `border-radius: 12px`.
- Default border: `1px solid rgba(255,255,255,0.06)`.
- Hover state: `background: rgba(255,255,255,0.04)`, `border-color: #D0211C66`.
- Transition: `background 0.25s`, `border-color 0.25s`.
- Icon box: `48×48px`, `background: #D0211C22`, `border-radius: 12px`, icon at 22px, `color: brand-red`.
- Title: Playfair 700, 20px, white.
- Description: Outfit 400, 14px, `rgba(255,255,255,0.5)`, `line-height: 1.65`.
- Arrow: `brand-yellow`, 20px, `margin-left: auto`.

---

### 4.6 Core Values Section

**Background:** `#F4F2EC` (stone). Padding `112px 80px`.

**Section header:** Flex row, `space-between`, aligned to flex-end, margin-bottom `64px`.
- Left: Eyebrow (`brand-red`) + H2 (Playfair 800, `clamp(36px, 3.5vw, 56px)`, `#111110`).
- Right: Outfit 400, 15px, `#777`, `max-width: 360px`, `line-height: 1.75`, right-aligned.

**Value card grid:** `repeat(4, 1fr)`, gap `20px`.

**Value card:**
- Background: white. `border-radius: 16px`. Padding `36px 28px`. Border `1px solid #E0DDD4`.
- Top accent bar: `position: absolute`, `top: 0`, full-width, height `4px`, `background: linear-gradient(90deg, brand-red, brand-yellow)`.
- Ghost number: Playfair 800, 48px, `#F0ECE4`, `line-height: 1`.
- Title: Playfair 700, 24px, `#111110`, margin-top `12px`.
- Body: Outfit 400, 14px, `#777`, `line-height: 1.7`.
- Hover: `translateY(-6px)`, `box-shadow: 0 20px 40px rgba(208,33,28,0.12)`. Transition `0.3s`.

**Discipline tags (below grid):**
- `display: flex`, `gap: 12px`, `flex-wrap: wrap`, margin-top `40px`.
- Each tag: Outfit 500, 13px, `#111110`, padding `8px 20px`, `border-radius: 40px`, `border: 1.5px solid #C8C4BA`. Red dot `7×7px` inside.

**Quote bar:**
- margin-top `48px`, `border-radius: 16px`, height `180px`, `background: #111110`.
- Background image at `opacity: 0.28`.
- Quote text: Playfair italic, `clamp(20px, 2.5vw, 34px)`, white, centred.

---

### 4.7 Projects Section

**Background:** `#111110`. Padding `112px 80px`.

**Section header:** Flex row, `space-between`, aligned to flex-end, margin-bottom `56px`.
- Left: Eyebrow (`brand-yellow`) + H2 (Playfair 800, white).
- Right: Ghost button — transparent background, `border: 1.5px solid rgba(255,255,255,0.2)`, white text, `border-radius: 40px`, padding `12px 28px`, 13px, weight 600, uppercase. Hover: `border-color: brand-red`, `background: brand-red`.

**Grid layout:**
- Top row: `grid-template-columns: 1fr 1fr`, gap `16px`, margin-bottom `16px`. Card height: `380px`.
- Bottom row: `grid-template-columns: 1fr 1fr 1fr`, gap `16px`. Card height: `260px`.

**Project card:**
- `border-radius: 16px`, `overflow: hidden`. Background image fills 100%.
- Image zoom on hover: `scale(1.07)`. Transition: `0.6s cubic-bezier(.25,.46,.45,.94)`.
- Dark overlay default: `linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.04) 50%)`.
- Dark overlay hover: `linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.15) 55%)`. Transition `0.4s`.
- Tag badge: top-left `16px` inset. `background: brand-red`, white, Outfit 600, 11px, `letter-spacing: 0.12em`, uppercase, `border-radius: 40px`, padding `4px 14px`.
- Meta line: Outfit 400, 11px, `rgba(255,255,255,0.5)`, `letter-spacing: 0.12em`.
- Card title: Playfair 700, 20px (wide: 26px), white.
- Card subtype: Outfit 400, 13px, `rgba(255,255,255,0.6)`.
- "View Project →": appears only on hover. Outfit 700, 12px, `brand-yellow`, `letter-spacing: 0.1em`, uppercase.

---

### 4.8 CTA Section

**Background:** `brand-red`. Padding `100px 80px`.

**Decorative ghost text:** "GOLD" — Playfair 800, `clamp(120px, 16vw, 220px)`, `rgba(0,0,0,0.1)`, positioned `bottom: -40px`, `right: -40px`. Non-interactive.

**Yellow left bar:** `position: absolute`, `top: 0`, `left: 0`, `width: 6px`, full height, `background: brand-yellow`.

**Content (max-width: 720px):**
- Eyebrow: Outfit 600, 11px, `brand-yellow`, `letter-spacing: 0.24em`, uppercase.
- H2: Playfair 800, `clamp(40px, 5vw, 72px)`, white, `line-height: 1.05`.
- Body: Outfit 400, 17px, `rgba(255,255,255,0.75)`, `line-height: 1.75`, `max-width: 520px`.
- Primary button: `background: white`, `color: brand-red`, `border-radius: 40px`, padding `14px 34px`, 14px, weight 700.
- Secondary button: transparent, white text, `border: 2px solid rgba(255,255,255,0.45)`, same sizing.

---

### 4.9 Footer

**Background:** `#0D0D0C`. Padding `80px 80px 40px`.

**Main grid:** `grid-template-columns: 1.6fr 1fr 1fr 1fr`, gap `56px`. Bottom border `1px solid rgba(255,255,255,0.07)`, `padding-bottom: 56px`.

**Brand column:**
- Logo mark + wordmark (same spec as nav).
- Tagline: Outfit 400, 14px, `rgba(255,255,255,0.4)`, `line-height: 1.75`, `max-width: 280px`.
- Social icons: `36×36px`, `border-radius: 50%`, `border: 1px solid rgba(255,255,255,0.12)`. Default: `rgba(255,255,255,0.45)`. Hover: `color: brand-yellow`, `border-color: brand-yellow`. Transition `0.2s`. Gap `10px`.

**Link columns (Company / Projects / Contact):**
- Column heading: Outfit 600, 11px, `brand-yellow`, `letter-spacing: 0.22em`, uppercase. Margin-bottom `20px`.
- Links: Outfit 400, 14px, `rgba(255,255,255,0.4)`. Hover: white. Transition `color 0.2s`. Row gap `12px`.

**Bottom bar:**
- `display: flex`, `justify-content: space-between`, `align-items: center`, `padding-top: 28px`.
- Copyright: Outfit 400, 13px, `rgba(255,255,255,0.25)`.
- Legal links: Outfit 400, 13px, `rgba(255,255,255,0.25)`. Gap `28px`.

---

## 5. Motion & Animation

### 5.1 Scroll Reveal

All major content blocks use an `IntersectionObserver` with `threshold: 0.12`. On intersection:

- **From:** `opacity: 0`, `translateY(32px)`
- **To:** `opacity: 1`, `translateY(0)`
- **Duration:** `0.7s ease`
- **Stagger:** Sibling elements delayed by `80–150ms` increments (e.g., value cards use `index × 90ms`, service rows use `index × 100ms`, project cards use `index × 100ms`).

Once triggered, the observer disconnects — animations do not repeat on scroll-back.

### 5.2 Hover Transitions

| Element | Property | Duration | Easing |
|---|---|---|---|
| Nav links | `color` | 0.2s | ease |
| Service rows | `background`, `border-color` | 0.25s | ease |
| Value cards | `transform`, `box-shadow` | 0.3s | ease |
| Project cards — image | `transform (scale)` | 0.6s | cubic-bezier(.25,.46,.45,.94) |
| Project cards — overlay | `background` | 0.4s | ease |
| Ghost button (Projects) | `border-color`, `background` | 0.2s | ease |
| Footer social icons | `color`, `border-color` | 0.2s | ease |
| Footer links | `color` | 0.2s | ease |

### 5.3 Navigation Scroll Transition

Triggered at `window.scrollY > 40`. Background and `backdrop-filter` transition at `0.4s ease`.

---

## 6. Page Section Map

| Order | Section | Background | Key Layout |
|---|---|---|---|
| 1 | Navigation | Transparent → `rgba(17,17,16,0.96)` | Fixed, flex row |
| 2 | Hero | `#111110` | Full viewport, absolute positioned layers |
| 3 | About / Philosophy | `#F4F2EC` | 2-column grid, 1:1 |
| 4 | Clients Strip | `#D0211C` (brand red) | Horizontal scroll image strip |
| 5 | Services | `#1A1916` | 2-column grid, 1:1.4 |
| 6 | Core Values | `#F4F2EC` | 4-column card grid |
| 7 | Projects | `#111110` | 2+3 masonry image grid |
| 8 | CTA | `#D0211C` (brand red) | Editorial single-column, max 720px |
| 9 | Footer | `#0D0D0C` | 4-column grid |

---

## 7. Assets & Fonts

### 7.1 Typefaces

Loaded via Google Fonts CDN:

```
https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Outfit:wght@300;400;500;600&display=swap
```

| Family | Role | Weights Used |
|---|---|---|
| Playfair Display | Display / headings / stats | 700, 800 (+ italic 700) |
| Outfit | Body, UI labels, buttons, nav | 300, 400, 500, 600 |

### 7.2 Photography

All photography sourced from Unsplash. Categories used: architectural exteriors, luxury residential properties, construction/blueprint imagery. Images delivered at `800px` width minimum, `object-fit: cover` at all usage points.

---

## 8. Accessibility Notes

- All interactive elements (`<button>`, `<a>`) are focusable natively.
- Colour contrast: white text on `brand-red` meets WCAG AA at standard body sizes.
- Background images are decorative — no critical information is conveyed through images alone.
- Nav and Footer links use semantic `<a>` tags.
- `pointer-events: none` and `user-select: none` applied to all purely decorative elements (ghost text, overlays).

---

*End of Specification*