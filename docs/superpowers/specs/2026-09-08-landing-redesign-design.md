# YeboMart landing redesign — design spec

Date: 2026-09-08 · Repo: `yebomart-landing` (yebomart.com) · Status: approved

## Goal

Rebuild the YeboMart landing page on the Omevision house design system, add motion,
add an accurate "How it works" explainer, and put yebomart.com back online.
yebomart.com currently returns HTTP 530: the Cloudflare zone exists but has no apex
record and no Pages project.

## Non-goals

- No new marketing claims. Copy is grounded in the shipped app (`../app`, `../api`).
- No multi-shop, emailed receipts, theft detection, or AI-takes-actions claims.
- No animation library. No CMS. No new backend.
- No change to the localization data layer beyond adding translation keys.

## Constraints

- Stack stays Vite 7 + React 19 + TypeScript + Tailwind v4 (`@theme` in `src/index.css`).
- Keep `src/data/countries.ts`, `src/data/translations.ts`, `src/hooks/useLocale.ts`,
  `src/components/Price.tsx`, `src/components/CountryPicker.tsx` (restyle only).
- Brand per the `yebo-logo` skill: orange `#FF6B00`, ink `#1a1814`, cream `#fdfbf7`,
  `YeboLogo` badge + two-tone wordmark, favicon Y badge, `theme-color #FF6B00`.
- Motion is CSS keyframes / stroke drawing triggered by IntersectionObserver, fully
  disabled under `prefers-reduced-motion`. No-JS renders finished state.
- Page body never scrolls horizontally; mobile-first.

## Design system

Tokens (`@theme`): `brand #FF6B00`, `brand-hot #ff8c33`, `brick #9a3412`, `ink #1a1814`,
`cream #fdfbf7`, `sand #f5f1ea`, `wash #fff5ec`, `mute #78716c`, `line rgba(26,24,20,.12)`,
semantic `ok #15803d`, `warn #ca8a04`, `bad #dc2626`.
Fonts: Space Grotesk (display + body), IBM Plex Mono (eyebrows, numerals in demos).
Radius 2px ("sharp"). Page max-width 1280px. Headings `clamp()` with `-0.03em` tracking.
Band rhythm: cream → sand → ink → cream …

Primitives (`src/components/ui/`): `YeboLogo` (suffix "Mart", `onDark`, `size`),
`Section` (`tone: cream|sand|ink|brand`, `id`), `Eyebrow` (mono, optional index),
`SectionHead` (eyebrow + h2 + lede), `Button` (`primary|ink|ghost`, `href`), `Reveal`
(IO wrapper adding `is-in`, `delay` prop), `useInView`, `useMotionEnabled`.

## Sections (in order) and motion

1. Nav — fixed, cream/blur; YeboLogo; links How it works / Features / Pricing / Hardware;
   country picker; "Open the app" → app.yebomart.com.
2. Hero — split. Left: eyebrow, h1 (accent line orange), lede, CTAs (Open the app · WhatsApp us),
   fact line. Right: `TillDemo` — a receipt card that rings up 3 items one by one
   (staggered), decrements a stock chip, counts the total up, then shows
   "Saved offline · synced". Timed loop, paused when off-screen or reduced-motion.
3. Proof strip — 4 facts: Free core forever · Works offline, never double-counts ·
   Local currency, 22 countries · Phone camera = scanner. Count-up on the "22".
4. How it works (ink band) — `DiagramLoop`: self-drawing SVG of Till → Stock → Cash-up →
   WhatsApp report → AI advises (stroke-dashoffset draw, nodes fade in). Then 3 numbered
   steps from the real onboarding: (1) Sign in with YeboID (phone + OTP + PIN),
   (2) Name your shop, scan products in, (3) Ring your first sale; staff PINs and
   suppliers later. Then "Under the hood" row: offline outbox + idempotent replay;
   staff PIN logins; cash sessions with variance.
5. Features — 10 cards grounded in routes: POS & mobile till; Stock & reorder suggestions;
   Cash-up & Z-report; Staff PINs & per-staff reports; Returns & exchanges; Suppliers &
   purchase orders; Customer credit book; Expenses; Audit log; VAT settings. Inline
   line icons (SVG). Staggered reveal.
6. AI assistant — reads sales/stock/margins; answers slow movers, what to restock, how the
   week is going; voice input; renameable. `AssistantDemo` auto-cycles 4 Q&A pairs.
   Explicit: it advises, it does not act.
7. Messages — Daily WhatsApp/SMS report; low-stock alert; SMS receipt; customer statement.
   Phone mockup, bubbles stagger in on reveal.
8. Pricing — existing pay-as-you-go model and data (credits, packs), restyled; `Price`
   conversion kept.
9. Hardware — existing bundles restyled + Bluetooth receipt printing from the browser.
10. FAQ — offline? cost? need a computer? more than one shop (honest: one per owner
    today)? staff access? languages?
11. Final CTA + contact (WhatsApp, call) → Footer (YeboLogo onDark, Omevision line).

## Copy accuracy rules

Allowed: free core; offline-first PWA with sync queue and idempotent replay; YeboID
owner login; staff PINs; cash-up with variance; daily WhatsApp/SMS report; low-stock
alert; SMS receipts; customer statements; AI that reads and advises; voice input;
barcode via camera; Bluetooth ESC/POS printing; EN + FR app; 22-country pricing.
Forbidden: multi-shop; emailed receipts; theft detection; AI creating orders; any
"Swiss market" / licence-key text.

## Assets

`public/favicon.svg` (canonical Y badge), `public/apple-touch-icon.png` 180×180,
`public/og-image.png` 1200×630 (cream, badge, "YeboMart", one-line promise),
`index.html` head: title, description, `theme-color #FF6B00`, OG/Twitter tags,
fonts preconnect + Space Grotesk / IBM Plex Mono.

## Deploy

Cloudflare Pages project `yebomart-landing`, GitHub `omegathesecond/yebomart-landing`,
production branch `main`, `npm run build` → `dist`, custom domains `yebomart.com` and
`www.yebomart.com` (Pages writes the CNAMEs). Fallback if the GitHub connection can't
be created via API: direct-upload with wrangler, then connect later.

## Verification

`npx tsc -b` clean; `npm run build` succeeds; desktop and 375px screenshots of every
section; reduced-motion renders finished state; no horizontal scroll at 375px;
Lighthouse-style sanity (fonts preloaded, images sized); yebomart.com returns 200.
