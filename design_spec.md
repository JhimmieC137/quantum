# Quantum Homes — UI Design Specification
**Version:** 2.0
**Scope:** Fully responsive web (mobile-first, tested down to 375px)
**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion
**Last Updated:** June 2026

---

## 1. Brand & Design Principles

Quantum Homes is a premium Nigerian real estate brand based in Ibadan. The design language is editorial and luxury-forward — warm, bold, and trustworthy. Two typefaces split the work: **Montserrat** anchors all display headings with geometric confidence; **EB Garamond** carries body copy with serif elegance. Brand red (`#b91c1c`) is used as a deliberate power accent — not a fill — and amber gold acts as a secondary typographic highlight on dark and red backgrounds.

**Core aesthetic:** Refined luxury. Alternating dark, warm-stone, and red section backgrounds create visual rhythm. Generous whitespace, strong typographic hierarchy, and scroll-triggered fade animations give the site an editorial feel.

**Section rhythm (home page):** Dark → Stone → Red → Dark → Stone → Red → Dark → Red → Dark

---

## 2. Design Tokens

### 2.1 Colour Palette

| Token | Tailwind Class | Hex | Usage |
|---|---|---|---|
| `brand-red` | `bg-red-700` / `text-red-700` | `#b91c1c` | Primary buttons, section backgrounds, card accents, icon fills |
| `brand-red-hover` | `hover:bg-red-600` | `#dc2626` | Button hover states |
| `brand-amber` | `text-amber-400` | `#fbbf24` | Accent text on dark backgrounds, stats numbers, dividers |
| `brand-amber-alt` | `text-amber-500` | `#f59e0b` | Accent text on light/stone backgrounds |
| `brand-amber-light` | `text-amber-300` | `#fcd34d` | Accent text on red backgrounds |
| `page-bg` | `bg-[#F4F2EC]` | `#F4F2EC` | Warm stone — light section backgrounds (About, Core Values, FAQ) |
| `zinc-900` | `bg-zinc-900` | `#18181b` | Dark section backgrounds |
| `zinc-800` | `bg-zinc-800` | `#27272a` | Secondary dark surfaces |
| `zinc-200` | `text-zinc-200` | `#e4e4e7` | Body text on dark/red backgrounds |
| `zinc-900 text` | `text-zinc-900` | `#18181b` | Body text on light backgrounds |

### 2.2 Typography

| Role | Font | Weight | Size (mobile → desktop) | Notes |
|---|---|---|---|---|
| **All headings h1–h6** | Montserrat | 600 (semibold) | Varies per component | Applied globally via CSS `h1–h6` rule |
| Hero display | Montserrat | 600 | `2.5rem` → `6rem` (2xl) | Responsive via custom bracket sizes |
| Section heading (large) | Montserrat | 600 | `text-3xl` → `text-5xl` / `text-7xl` | Per section |
| Body / paragraph | EB Garamond | 400 | `text-sm` → `text-base` / `text-xl` | Serif — applied to body globally |
| Eyebrow label | Montserrat | 700 | `text-xs` | Uppercase, wide tracking, amber or white |
| Stat number | Montserrat | 600 | `text-4xl` → `text-5xl` | Amber colour |
| Button text | EB Garamond / Montserrat | 400–600 | `text-md` / `text-sm` | Inherits from context |
| Nav links | EB Garamond | 400 | `text-sm` | Light zinc, hover amber or white |

**Italic rule:** Heading accent spans (`<span>`) use amber or red colour classes with `italic` to create typographic emphasis. Pattern: `<h2>Main text <span className="text-amber-400 italic">Accent</span></h2>`.

**Mobile line-break rule:** For long centred headings, a `<br className="sm:hidden" />` is inserted between the primary and accent spans so mobile gets a controlled two-line layout while desktop stays single-line.

**Font loading:** Both fonts are loaded via `next/font/google` in `src/lib/fonts.ts` and applied through CSS variables (`--font-montserrat`, `--font-garamond`). Montserrat is registered as a CSS variable on `<body>` and applied to `h1–h6` in `globals.css`. EB Garamond is applied via `className` on `<body>` in `layout.tsx`.

---

## 3. Spacing & Layout

### 3.1 Responsive Container

```
max-w-[1400px]  mx-auto  px-4 (mobile) → px-6 (sm) → px-8 (lg)
```

No fixed min-width. The design is fully fluid from 375px up.

### 3.2 Section Vertical Padding

| Section | Tailwind Classes |
|---|---|
| Hero | Full viewport height (`min-h-screen`) |
| Most content sections | `py-16` → `py-24` → `py-32` (responsive) |
| OurClients strip | `py-20` |
| Investment section | Varies (~`py-20`) |
| Footer | `py-10` (top) + `safe-footer-bottom` utility |

### 3.3 Key Internal Spacing

- Card grid gaps: `gap-8` → `gap-12` → `gap-14`
- Stat item gaps: `gap-8` / divided by `divide-amber-400`
- Button group gap: `gap-5`
- Section heading-to-content: `mt-10` → `mt-14` → `mt-16`
- Hero heading `mb-5`, subtext `mb-0` (hidden on mobile), button group `mt-10`

---

## 4. Component Specifications

### 4.1 Navigation (`Header.tsx`)

**Layout:** Sticky, full-width. Height implicit from padding. Horizontal padding `px-4` → `px-8`.

**Scroll behaviour:** Uses scroll-direction detection — header is always visible in the first `~50rem` of page. Below that: hides on scroll down, reappears on scroll up.

**Mobile:** Hamburger menu opens a slide-in drawer with full nav links + services sub-list. Controlled by `useState`.

**Logo:** "Q" mark (red background, white letter) + "QUANTUM HOMES" wordmark in Montserrat, weight 600.

**Services dropdown:** Click-triggered dropdown listing 4 sub-services with links. On mobile, expands inline within the drawer.

**CTA button:** "Talk to Us" → links to `/contact`. Red background, white text, `rounded-xl`.

---

### 4.2 Hero Section (`Hero.tsx`)

**Layout:** `position: relative`, `min-h-screen`, `overflow: hidden`.

**Background:** MP4 video (`/videos/quantum-v.mp4`) with Unsplash fallback image. Video fades in via `opacity` transition once the `canplaythrough` event fires. Dark gradient overlay (`from-transparent via-zinc-950/50 to-zinc-950`) applied over both.

**Content alignment:** Centred vertically on desktop (`md:items-center`). Pinned to bottom on mobile (`items-end pb-[6rem]`).

**Eyebrow label:** Hidden on mobile (`hidden sm:flex`). "PREMIUM REAL ESTATE · IBADAN" in Montserrat, amber, `text-xs`, `tracking-widest`. Left horizontal rule in brand-red.

**Heading "A Call To Your Dream Home":**
- Mobile: `text-[2.5rem]` / `leading-[2.8rem]` / `max-w-[26rem]` / centred
- sm: `text-[4rem]` / `leading-[4.5rem]` / left-aligned
- xl: `text-[5.2rem]` / `leading-[6rem]`
- 2xl: `text-[6rem]` / `leading-[7.5rem]`
- "Dream Home" in `text-amber-400`, same weight

**Sub-paragraph:** Hidden on mobile (`hidden md:block`). `text-[15px]`, zinc-200, max-width `50rem` → `40rem` → `35rem`.

**Buttons (mobile: stacked column, sm+: row, gap-5):**
- "Explore projects": Red bg, zinc-100, `rounded-xl`. Padding mobile `px-3 py-2`, sm+ `px-8 py-3`.
- "Our services": Transparent, `border border-zinc-200/60`, zinc-200. Same padding.
- Container: `w-[70%] mx-auto` on mobile, `md:w-full` on desktop.

**Stats row:** Hidden on mobile (`hidden sm:flex`). Three amber numbers (58+, 17+, 2+) with zinc-200/60 labels. Divided by `divide-amber-400`.

---

### 4.3 Introduction Section (`Introduction.tsx`)

Dark background (`bg-zinc-900`). Two-column grid on desktop. Brand story with FadeLeft/FadeRight animations on the two columns.

---

### 4.4 Our Services (`OurServices.tsx`)

Grid of 4 service cards: Land Sales, Legal Support, Construction & Development, Real Estate Investment Advisory. Each card has icon, title, short description, and a "Learn more" link. Expandable/accordion behaviour on desktop; always visible on mobile.

---

### 4.5 Core Values (`CoreValues.tsx`)

Stone background (`bg-[#F4F2EC]`). Three red value cards (Transparency, Integrity, Reliability) in a responsive grid. Each card: red background, white text, icon, title (Montserrat), body (EB Garamond). FadeUp animation. Heading left-aligned: `text-3xl` (mobile) → `text-5xl` (lg).

---

### 4.6 Investment Section (`Investment.tsx`)

Red background (`bg-red-700`). Centred heading: **"A piece of land is more than gold."** — Montserrat semibold, `text-4xl` → `text-6xl`, white with amber italic accent. Already has `<br />` between lines. Body copy + CTA button.

---

### 4.7 Our Clients (`OurClients.tsx`)

Red background. Section heading: **"Esteemed Clients Over the Years"** — Montserrat semibold, `text-3xl` → `text-5xl`, centred, white. `<br className="sm:hidden" />` between "Esteemed Clients" and "Over the Years" for mobile line control.

**Infinite marquee:** CSS `animate-marquee` class (`translateX(-50%)` over 20s linear infinite). 36 logo items (12 unique × 3 copies). Container: `h-[110px]`. Each `<li>`: `w-[230px]`. Each `<img>`: `w-[220px]`, `grayscale`, `opacity-60`, hover transitions to full colour and full opacity.

---

### 4.8 Projects Section (`Projects.tsx` / `Properties.tsx`)

Stone background. Left-aligned heading `text-3xl` → `text-5xl`. Grid of featured project cards. "See more" link to `/projects`.

**Project cards** (`ProjectCard.tsx`): Image with Swiper slideshow on click, project meta (title, type, location, year), modal overlay for full gallery. Status tag badge (Ongoing / Completed / Incoming) in red.

---

### 4.9 FAQ (`FAQ.tsx`)

Stone background. Accordion of 6 items. Chevron icon rotates on open. Smooth height animation. Left-aligned heading `text-3xl` → `text-5xl`.

---

### 4.10 Page Hero (`PageHero.tsx`)

Red background. Used on inner pages (About, Contact, Services sub-pages). Accepts `CTAMain` + `CTAAccent` heading props and array of body paragraphs. Amber vertical divider bar between heading and paragraphs.

---

### 4.11 Hero Banner (`HeroBanner.tsx`)

Used at the top of inner pages (About, Services, Projects, Properties, Contact). Full-width image with dark overlay. Centred heading: `title` (white) + `titleAccent` (amber italic). Current page titles: "About Us", "Our Services", "Our Projects", "Contact Us".

---

### 4.12 Team Grid (`TeamGrid.tsx`)

Stone-ish background. Circular avatar images with red border ring. Member name (Montserrat) + role (EB Garamond). Centred heading: **"Meet Our Team"**.

---

### 4.13 Service Pages

Each service page (`land-sales`, `legal-support`, `construction-and-development`, `real-estate-investment-advisory`) uses:
- `HeroBanner` — page top image
- `ServiceHero` — large text + subtext hero block
- `ServiceSectionHeading` — two-part centred heading (white + amber), always-on `<br />` between parts, font scales `text-4xl` → `text-7xl`
- `ServiceIntro` — image + text paired layout
- `FeatureCard` — feature list with gradient border
- `ServiceCTA` — red call-to-action strip at bottom

---

### 4.14 Contact Page (`contact/page.tsx`)

Two office tabs (Mokola / New Ife Road) with underline animation. Contact details per office. Contact form with:
- Fields: Name, Email, Phone, Message
- reCAPTCHA Enterprise validation (score threshold 0.5)
- Submits to `/api/contact` (POST)
- API uses Mailjet to send formatted HTML email

---

### 4.15 Footer (`Footer.tsx`)

Dark background (`bg-zinc-900` or similar). Multi-column: brand + tagline + social icons / Company links / Services links / Contact info. Social icons with hover amber effect. Copyright bar at bottom.

Safe-area bottom padding utility (`.safe-footer-bottom`) for notch/Dynamic Island devices.

---

## 5. Motion & Animation

All scroll-triggered animations are powered by **Framer Motion** via wrapper components in `src/ui/`:

| Component | Behaviour |
|---|---|
| `FadeUp` | `opacity: 0, y: 100` → `opacity: 1, y: 0` |
| `FadeLeft` | Fades in from left |
| `FadeRight` | Fades in from right |
| `ZoomOut` | Zoom-out reveal |

Animations trigger once on scroll into view. Used throughout on headings, cards, stat blocks, and image sections.

### Hover Transitions

| Element | Property | Duration |
|---|---|---|
| Nav header visibility | `transform` (translateY) | Scroll-triggered, `0.3s` |
| Buttons | `background`, `color`, `border-color` | `0.15s–0.3s ease-in-out` |
| Project cards — image | `scale` | `0.5–0.6s` |
| Client logos | `filter (grayscale)`, `opacity` | `0.5s ease-in-out` |
| FAQ accordion | `height`, chevron `rotate` | Framer Motion layout animation |

---

## 6. Page Map

| Route | Component File | Purpose |
|---|---|---|
| `/` | `app/(pages)/page.tsx` | Home — full marketing landing page |
| `/about` | `app/about/page.tsx` | Company story, team, stats, mission/vision |
| `/services` | `app/services/page.tsx` | All 4 services overview |
| `/services/land-sales` | `app/services/land-sales/page.tsx` | Land Sales detail page |
| `/services/legal-support` | `app/services/legal-support/page.tsx` | Legal Support detail page |
| `/services/construction-and-development` | `app/services/construction-and-development/page.tsx` | Construction detail page |
| `/services/real-estate-investment-advisory` | `app/services/real-estate-investment-advisory/page.tsx` | Investment Advisory detail page |
| `/projects` | `app/projects/page.tsx` | Filterable project grid |
| `/properties` | `app/properties/page.tsx` | Properties alternate view |
| `/contact` | `app/contact/page.tsx` | Contact form + office details |

---

## 7. Assets & Fonts

### 7.1 Typefaces

Loaded via `next/font/google` in `src/lib/fonts.ts`:

| Family | Role | Weights | CSS Variable |
|---|---|---|---|
| **Montserrat** | All headings (h1–h6), eyebrow labels, stat numbers, buttons | 100–900 | `--font-montserrat` |
| **EB Garamond** | Body copy, paragraphs, nav links | 400, 500, 600, 700, 800 | `--font-garamond` |

### 7.2 Media

- **Hero video:** `/videos/quantum-v.mp4` (autoplay, muted, loop, playsInline)
- **Hero fallback:** Unsplash architecture photo (hardcoded URL)
- **Client logos:** `/clients/client_1.png` through `client_12.png`
- **Project images:** `/projects/` directory, referenced in `src/data/projects.ts`
- **Team photos:** `/team/` and `/agents/` directories
- **Decorative watermarks:** `/wallpapers/dwg_img_2.png`, `/wallpapers/planners.png`, etc.

---

## 8. Accessibility & Mobile

- All interactive elements use semantic `<a>` and `<button>` tags.
- Safe-area CSS utilities (`.safe-nav-top`, `.safe-footer-bottom`) handle notch/Dynamic Island devices via `env(safe-area-inset-*)`.
- Viewport meta: `width=device-width, initial-scale=1, viewportFit=cover`.
- Background images and video are decorative — no critical information conveyed through media alone.
- Colour contrast: white text on brand-red (`#b91c1c`) meets WCAG AA at standard body sizes.
- Mobile nav: hamburger drawer — no horizontal overflow.

---

*End of Specification*
