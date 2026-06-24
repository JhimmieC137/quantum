# Quantum Homes & Property — Product Requirements Document
**Version:** 1.0
**Last Updated:** June 2026
**Author:** Engineering Team
**Intended Audience:** AI assistants, engineers, and designers onboarding to this project

---

## 1. Product Overview

**Quantum Homes & Property** is a premium real estate company based in Ibadan, Nigeria. This document describes the public-facing marketing website — a Next.js web application that serves as the company's primary digital storefront, lead generation tool, and brand expression.

The site presents the company's four core service offerings, showcases completed and ongoing projects, communicates brand values, and drives prospective clients to make contact.

**Live purpose:** Convert visitors into qualified leads via the contact form or direct call-to-action buttons.

---

## 2. Goals & Non-Goals

### Goals
- Present Quantum Homes as a premium, trustworthy real estate brand
- Clearly communicate 4 service areas: Land Sales, Legal Support, Construction & Development, Investment Advisory
- Showcase a filterable portfolio of real estate projects
- Drive contact form submissions and phone/WhatsApp enquiries
- Be fully functional and visually polished on both mobile and desktop

### Non-Goals
- No user authentication or client portal
- No e-commerce or payment flows
- No CMS — content is currently hardcoded in TypeScript data files
- No real-time property search or map integration
- No multi-language support

---

## 3. Target Audience

| Segment | Description |
|---|---|
| **Primary** | Nigerian property buyers and investors, 28–55, urban professionals based in Ibadan and Lagos |
| **Secondary** | Diaspora Nigerians looking to invest in Ibadan real estate |
| **Tertiary** | Commercial clients seeking construction or development partners |

**Device split (estimated):** ~65% mobile, ~35% desktop. Mobile is the primary design target.

---

## 4. Tech Stack & Architecture

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS (utility-first, mobile-first breakpoints) |
| Animation | Framer Motion (scroll-triggered reveal, layout transitions) |
| Fonts | `next/font/google` — Montserrat + EB Garamond |
| Email | Mailjet API (via `/api/contact` route) |
| CAPTCHA | Google reCAPTCHA Enterprise (score-based, threshold 0.5) |
| Slider/Carousel | Swiper.js (project image galleries) |
| Icons | `react-icons` |
| Notifications | `sonner` (toast library) |
| Hosting | Vercel (assumed, based on env config patterns) |

### File Structure Overview

```
src/
├── app/                        # Next.js App Router
│   ├── (pages)/               # Main layout group (header + footer)
│   │   ├── layout.tsx         # Wraps all pages with ScreenLoader, Header, Footer
│   │   └── page.tsx           # Home page
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── projects/page.tsx
│   ├── properties/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   ├── land-sales/page.tsx
│   │   ├── legal-support/page.tsx
│   │   ├── construction-and-development/page.tsx
│   │   └── real-estate-investment-advisory/page.tsx
│   ├── api/contact/route.ts   # Mailjet email handler
│   ├── globals.css            # Global styles, CSS animations
│   └── layout.tsx             # Root layout — fonts, metadata, Toaster
├── components/                # Shared, page-agnostic components
├── sections/                  # Section-level components scoped to a feature
│   ├── projects/
│   └── services/
├── ui/                        # Primitive animation wrappers (FadeUp, FadeLeft, etc.)
├── data/                      # Static data: projects, routes, land listings
└── lib/                       # Shared utilities: fonts.ts, constants.ts
```

---

## 5. Design System

### 5.1 Fonts

Both fonts are loaded via `src/lib/fonts.ts` using `next/font/google`.

| Font | Tailwind Variable | Applied To |
|---|---|---|
| **Montserrat** | `--font-montserrat` | All `h1–h6` globally (via `globals.css`), eyebrow labels, stat numbers |
| **EB Garamond** | `--font-garamond` | Body text globally (via `<body className>`) |

**Global font rule in `globals.css`:**
```css
body { font-family: "EB Garamond", Georgia, serif; }
h1, h2, h3, h4, h5, h6 { font-family: var(--font-montserrat), Montserrat, sans-serif; }
```

Both variables are registered on `<body>` in `src/app/layout.tsx`:
```tsx
<body className={`${garamond.className} ${montserrat.variable} antialiased w-full`}>
```

### 5.2 Colours

All colours are expressed as Tailwind utility classes. The `brand` object in `src/lib/constants.ts` exports shorthand class strings:

| Token | Value | Tailwind export |
|---|---|---|
| Brand red | `#b91c1c` | `brand.redBg` = `"bg-red-700"` |
| Red hover | `#dc2626` | `brand.redBgHover` = `"hover:bg-red-600"` |
| Amber (dark bg) | `#fbbf24` | `brand.amberText` = `"text-amber-400"` |
| Amber (light bg) | `#f59e0b` | `brand.amberAltText` = `"text-amber-500"` |
| Amber (red bg) | `#fcd34d` | `brand.amberLightText` = `"text-amber-300"` |
| Page background | `#F4F2EC` | `brand.pageBg` = `"bg-[#F4F2EC]"` |
| Text on dark | `#e4e4e7` | `text-zinc-200` |
| Text on light | `#18181b` | `text-zinc-900` |

### 5.3 Responsive Breakpoints (Tailwind defaults)

| Prefix | Min-width |
|---|---|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

**Unprefixed classes apply to mobile (< 640px) first.**

### 5.4 Heading Typography Pattern

All section headings follow a consistent two-tone pattern:

```tsx
<h2 className={`${montserrat.className} text-3xl sm:text-5xl font-semibold`}>
  Primary text{" "}
  <span className={`${brand.amberAltText} italic`}>Accent text</span>
</h2>
```

For **long centred headings**, a mobile-only line break is added:
```tsx
Primary text<br className="sm:hidden" />{" "}
<span className="text-amber-300 italic">Accent text</span>
```

---

## 6. Page Requirements

### 6.1 Home Page (`/`)

**Purpose:** Primary marketing and conversion page.

**Section order:**
1. `Hero` — full-screen video background, headline, two CTA buttons, stats row
2. `Introduction` — brand story, two-column layout
3. `OurServices` — 4 service cards
4. `CoreValues` — 3 values (Transparency, Integrity, Reliability)
5. `Investment` — "A piece of land is more than gold" investment philosophy
6. `Projects` or `Properties` — featured project showcase
7. `OurClients` — infinite logo marquee
8. `FAQ` — 6 FAQ accordion items

**Hero requirements:**
- Video background: `/videos/quantum-v.mp4`, autoplay, muted, loop, playsInline
- Fallback: Unsplash architecture photo shown until `canplaythrough` fires
- Heading: "A Call To Your Dream Home" — mobile font `2.5rem`, scales to `6rem` at 2xl
- Two buttons: "Explore projects" (red) + "Our services" (ghost/border) — mobile `px-3`, sm+ `px-8`
- Stats row (desktop only): 58+ plots sold, 17+ structures built, 2+ years experience

### 6.2 About Page (`/about`)

**Sections:**
- `HeroBanner` (title: "About", accent: "Us")
- `PageHero` — brand mission/values paragraph
- Stats: 2+ years, 5K+ clients, 60+ plots sold, 8+ projects
- Company story (mission + vision cards)
- Large centered heading: "We believe in the transformative power of construction"
- Team grid (3 members)
- Impact stats: "Our Impact over The Years"
- `FAQ`

**Key stats (hardcoded):**
- 2+ Years of Experience
- 5,000+ Satisfied Clients
- 60+ Plots Sold
- 8+ Successful Projects

**Team members (hardcoded in `TeamGrid.tsx`):**
- Engr. Sobowale Micheal — General Manager
- Titilayo Ronke — Quantity Surveyor
- Mr. Gbenga Daniels — Sales Manager

### 6.3 Services Overview Page (`/services`)

Lists all 4 services with `ServiceSection` cards that expand on desktop. Each service links to its dedicated detail page.

### 6.4 Service Detail Pages (4 pages)

Each service page uses the same component composition:

```
HeroBanner → ServiceHero → ServiceSectionHeading → ServiceIntro → FeatureCard(s) → ServiceCTA
```

| Route | Service |
|---|---|
| `/services/land-sales` | Land Sales |
| `/services/legal-support` | Title Documentation & Legal Support |
| `/services/construction-and-development` | Construction & Development |
| `/services/real-estate-investment-advisory` | Real Estate Investment Advisory |

**ServiceSectionHeading** always renders `white text + <br/> + amber italic span`. Font: `text-4xl sm:text-5xl lg:text-7xl`.

### 6.5 Projects Page (`/projects`)

- `HeroBanner` (title: "Our", accent: "Projects")
- `PageHero` with intro text
- `ProjectGrid` — filterable grid with 4 category tabs: All / Ongoing / Completed / Incoming
- Projects data sourced from `src/data/projects.ts`

**ProjectCard features:**
- Image with Swiper slideshow triggered on click
- Full modal overlay with carousel navigation
- Status badge (Ongoing / Completed / Incoming) in red
- Project meta: title, type, location, year

**Current project count:** 9 projects in `availableProjects` array.

### 6.6 Properties Page (`/properties`)

Identical structure to Projects page, alternate layout styling. Uses the same project data.

### 6.7 Contact Page (`/contact`)

- `HeroBanner` (title: "Contact", accent: "Us")
- Office tabs: **Mokola** / **New Ife Road** — tab switch uses underline animation
- Per office: address, phone, email, map link
- Contact form fields: Name, Email, Phone, Message
- Form submission flow:
  1. Client-side: reCAPTCHA Enterprise token generated
  2. POST to `/api/contact` with form data + reCAPTCHA token
  3. API validates token (score ≥ 0.5, correct action)
  4. API sends email via Mailjet to company inbox
  5. User sees success toast via `sonner`

**Office addresses:**
- Mokola: Mokola ICT Hub, Beside NNPC, Ibadan
- New Ife Road: Green House Building, Gbagi, Ibadan

---

## 7. Component Library Reference

### Shared Components (`src/components/`)

| Component | Props | Purpose |
|---|---|---|
| `Header` | — | Sticky nav with mobile drawer, services dropdown |
| `Footer` | — | Multi-column footer with links and social icons |
| `Hero` | — | Home page video hero (no props, self-contained) |
| `HeroBanner` | `image`, `title`, `titleAccent` | Inner-page full-width banner with heading |
| `PageHero` | `CTAMain`, `CTAAccent`, `paragraphs[]` | Red section with heading + body paragraphs |
| `Introduction` | — | Brand story section |
| `OurServices` | — | 4 service cards |
| `CoreValues` | — | 3 values in red cards |
| `Investment` | — | "A piece of land" philosophy section |
| `OurClients` | — | Infinite logo marquee |
| `Projects` | — | Featured project grid |
| `Properties` | — | Featured properties grid |
| `FAQ` | — | Accordion FAQ section |
| `TeamGrid` | — | Circular avatar team cards |

### Section Components (`src/sections/`)

| Component | Props | Purpose |
|---|---|---|
| `ServiceSection` | service object | Expandable service card for services overview |
| `ServiceHero` | `titleWhite`, `titleAmber`, `description` | Large text hero block for service pages |
| `ServiceSectionHeading` | `white`, `amber` | Centred two-tone section heading |
| `ServiceIntro` | image, text content | Image + text pair for service pages |
| `FeatureCard` | icon, title parts, description | Feature list item with gradient border |
| `ServiceCTA` | `headingWhite`, `headingAmber`, `subtext`, `buttonLabel`, `href?` | Bottom CTA strip for service pages |
| `ProjectGrid` | — | Filterable grid pulling from `availableProjects` |
| `ProjectCard` | project object | Card with image gallery + modal |

### UI Primitives (`src/ui/`)

| Component | Animation |
|---|---|
| `FadeUp` | `y: 100 → 0`, `opacity: 0 → 1` |
| `FadeLeft` | Slides in from left |
| `FadeRight` | Slides in from right |
| `ZoomOut` | Zoom-out reveal |
| `ScreenLoader` | Full-screen preloader shown on mount, auto-dismisses after 1s |

All animation components wrap children and trigger on scroll into view via Framer Motion's `whileInView`.

---

## 8. Data Structures

### 8.1 Project Object (`src/data/projects.ts`)

```typescript
{
  title: string            // "Akorede Estate"
  type: string             // "Residential Estate"
  location: string         // "Akorede, Ibadan"
  year: string             // "2024"
  tag: "Ongoing" | "Completed" | "Incoming"
  image: string            // Primary thumbnail path "/projects/..."
  slideshow: string[]      // Array of image paths for gallery
  description: string      // Long-form project description
}
```

### 8.2 Routes (`src/data/routes.ts`)

```typescript
pageRoutes = {
  home: "/",
  about: "/about",
  services: {
    base: "/services",
    landSales: "/services/land-sales",
    legalSupport: "/services/legal-support",
    construction: "/services/construction-and-development",
    investment: "/services/real-estate-investment-advisory",
  },
  projects: "/projects",
  contact: "/contact",
}
```

### 8.3 Brand Constants (`src/lib/constants.ts`)

Exports the `brand` object (Tailwind class strings) and typography utility class strings (`heroHeading`, `sectionHeading`, `cardHeading`, `bodyLg`, `bodySm`, `eyebrow`, `container`, `sectionPy`).

---

## 9. API Reference

### POST `/api/contact`

**Purpose:** Sends contact form email via Mailjet.

**Request body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "message": "string",
  "recaptchaToken": "string"
}
```

**Flow:**
1. Validates reCAPTCHA token via Google Cloud reCAPTCHA Enterprise API
2. Checks score ≥ 0.5 and action matches expected value
3. Constructs HTML email via `emailTemplate.ts`
4. Sends via Mailjet API (uses `MJ_APIKEY_PUBLIC` + `MJ_APIKEY_PRIVATE` env vars)
5. Returns `200 OK` on success, `400/500` with error message on failure

**Environment variables required:**
```
MJ_APIKEY_PUBLIC
MJ_APIKEY_PRIVATE
MJ_SENDER_EMAIL
MJ_RECIPIENT_EMAIL
RECAPTCHA_PROJECT_ID
GOOGLE_APPLICATION_CREDENTIALS   # JSON string (Vercel) or file path (local)
```

---

## 10. CSS Utilities & Animations

Defined in `src/app/globals.css`:

| Class | Purpose |
|---|---|
| `.safe-nav-top` | `padding-top: max(12px, env(safe-area-inset-top))` — for fixed nav on notch devices |
| `.safe-footer-bottom` | `padding-bottom: max(40px, 40px + env(safe-area-inset-bottom))` — for footer on notch devices |
| `.animate-marquee` | `animation: marquee 20s linear infinite` — drives the client logo strip |
| `.highway-barrier` | Container for marquee with `overflow: hidden` and fade-edge pseudo-elements |
| `.loader-bounce` | Custom bounce animation for screen preloader dots |
| `.disappear` | `visibility: hidden; opacity: 0; transition: 1s` — used to fade out the screen loader |
| `.blob` | Pulse scale animation (4s infinite) |

**Marquee keyframes:**
```css
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```
Works with any item width since it uses `-50%` (the list is 3× duplicated, so `-50%` = one full set).

---

## 11. Known Constraints & Notes for AI Assistants

1. **Font application:** Montserrat is applied to `h1–h6` globally via `globals.css`. To override for a specific heading, add an explicit `font-family` class or use `style` prop. EB Garamond is the default body font.

2. **Mobile-first:** All Tailwind classes without a breakpoint prefix apply to mobile. Breakpoints stack up. Do not assume desktop-only unless a `md:` / `lg:` prefix is present.

3. **Brand colours:** Always use the `brand` object from `src/lib/constants.ts` rather than hardcoding Tailwind colour classes directly. This ensures consistency.

4. **Heading pattern:** Two-tone headings always follow `Primary text <span className="${brand.*Text} italic">Accent</span>`. The span is always italic. Never bold the accent separately — weight is inherited from the parent heading.

5. **Mobile line breaks in centred headings:** Long centred headings use `<br className="sm:hidden" />` between primary and accent text. This shows a break on mobile and collapses on sm+. Do not use always-on `<br />` unless a break is intentional on all screen sizes.

6. **Static data:** Project data, team members, office addresses, and FAQ content are all hardcoded in TypeScript files in `src/data/` and `src/components/`. There is no CMS. To update content, edit these files directly.

7. **Animation wrappers:** Wrap new sections in `<FadeUp>`, `<FadeLeft>`, or `<FadeRight>` from `src/ui/`. Do not implement custom IntersectionObserver — use the existing Framer Motion primitives.

8. **reCAPTCHA:** Credentials support two formats — a JSON string (for Vercel environment) or a file path (for local dev). The API route handles both. See `src/app/api/contact/route.ts`.

9. **Swiper styles:** Imported separately in `src/app/swiper-styles.css` (imported in `layout.tsx`). Swiper is used only in project cards.

10. **Client logos:** 12 unique logos at `/public/clients/client_1.png` through `client_12.png`. The marquee triples them to 36 items for a seamless loop.

---

*End of PRD*
