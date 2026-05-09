# Quantum Homes & Property

Marketing and lead-generation website for **Quantum Homes & Property**, a real estate company based in Ibadan, Nigeria.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Fonts | `next/font/google` — Montserrat, Inter (shared singleton in `src/lib/fonts.ts`) |
| Toasts | Sonner (`<Toaster richColors />`) |
| Email | Mailjet REST API v3.1 |
| Bot protection | Google reCAPTCHA Enterprise v3 |
| Icons | react-icons |

## Environment Variables

Create a `.env` file at the project root (never commit it):

```env
# Mailjet
MJ_APIKEY_PUBLIC=<mailjet public key>
MJ_APIKEY_PRIVATE=<mailjet private key>
MJ_SENDER_EMAIL=<verified sender address>
MJ_RECIPIENT_EMAIL=<inbox that receives contact submissions>

# Google reCAPTCHA Enterprise
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=<site key — safe to expose>
RECAPTCHA_SITE_KEY=<same site key — used server-side>
GOOGLE_CLOUD_PROJECT=<GCP project ID>
GOOGLE_APPLICATION_CREDENTIALS=./service-account.json
```

`service-account.json` — GCP service account key file with `recaptchaenterprise.assessments.create` permission. Keep it at the project root and **never commit it** (already in `.gitignore`).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — fonts, Toaster
│   ├── page.tsx            # Home
│   ├── about/page.tsx      # About Us
│   ├── contact/page.tsx    # Contact (reCAPTCHA + form)
│   ├── properties/         # Property listings
│   ├── services/           # Service detail pages
│   └── api/
│       └── contact/
│           ├── route.ts        # POST handler — reCAPTCHA + Mailjet
│           └── emailTemplate.ts # Branded HTML email builder
├── components/             # Reusable page-level components
├── sections/               # Layout sections (hero, service blocks, etc.)
├── ui/                     # Atomic animation/UI primitives (FadeUp, FadeLeft, …)
├── data/
│   └── routes.ts           # pageRoutes — single source of truth for all URLs
└── lib/
    ├── fonts.ts            # Shared Montserrat + Inter instances
    └── constants.ts        # Brand color class strings, typography, layout tokens
```

## Design Tokens

Brand tokens are defined in two places that must stay in sync:

**`tailwind.config.ts` → `theme.extend.colors.brand`**

| Token | Value | Usage |
|---|---|---|
| `brand.red` | `#b91c1c` | Primary CTAs, section fills (`bg-red-700`) |
| `brand.red-soft` | `#dc2626` | Hover state (`bg-red-600`) |
| `brand.amber` | `#fbbf24` | Accent highlights (`text-amber-400`) |
| `brand.amber-alt` | `#f59e0b` | Dividers, section bars (`text-amber-500`) |
| `brand.bg` | `#F4F2EC` | Page/section background |
| `brand.dark` | `#27272a` | Heavy text, footer (`text-zinc-800`) |

**`src/lib/constants.ts`** — full Tailwind class strings (purger-safe) and hex values for inline/email styles.

## Pages

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Home — hero, services overview, clients, investment CTA |
| `/about` | `app/about/page.tsx` | Company story, stats, mission/vision, team, FAQ |
| `/contact` | `app/contact/page.tsx` | Contact info + reCAPTCHA-protected form |
| `/properties` | `app/properties/` | Property listings |
| `/services/land-sales` | `app/services/land-sales/` | Land Sales detail |
| `/services/legal-support` | `app/services/legal-support/` | Title Documentation & Legal Support |
| `/services/construction-and-development` | `app/services/construction-and-development/` | Construction & Development |
| `/services/real-estate-investment-advisory` | `app/services/real-estate-investment-advisory/` | Investment Advisory |

## Scripts

```bash
npm run dev      # Development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```
