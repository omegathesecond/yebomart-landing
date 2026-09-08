# YeboMart Landing Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild yebomart.com on the Omevision house design system with motion and an accurate "How it works" explainer, and put the domain back online.

**Architecture:** Keep the Vite 7 + React 19 + TS + Tailwind v4 repo and its localization layer. Replace the design layer: tokens in `@theme`, a small set of UI primitives (`src/components/ui/`), one component per section (`src/components/sections/`), two timed demos (till, assistant) and one self-drawing SVG diagram. Motion is CSS keyframes gated by `html.js-motion` + `.is-in` (IntersectionObserver), disabled under reduced motion. Deploy via a GitHub-connected Cloudflare Pages project.

**Tech Stack:** Vite 7, React 19, TypeScript 5.9, Tailwind v4 (`@tailwindcss/vite`), Space Grotesk + IBM Plex Mono (Google Fonts), no animation library.

**Spec:** `docs/superpowers/specs/2026-09-08-landing-redesign-design.md`

## Global Constraints

- Brand: orange `#FF6B00`, hot `#ff8c33`, brick `#9a3412`, ink `#1a1814`, cream `#fdfbf7`, sand `#f5f1ea`, wash `#fff5ec`, mute `#78716c`. Never purple, never green as brand.
- Logo is markup (`YeboLogo`), never an `<img>`. Favicon is the Y badge. `theme-color` is `#FF6B00`.
- Fonts: Space Grotesk (display + body), IBM Plex Mono (eyebrows, demo numerals). Radius 2px except badges/dots.
- Keep unchanged in behaviour: `src/data/countries.ts`, `src/hooks/useLocale.ts`, `src/components/Price.tsx`. `src/data/translations.ts` may only gain keys.
- Forbidden copy: multi-shop, emailed receipts, theft detection, AI creating orders, "Swiss", licence keys.
- All motion: `html.js-motion` gates start states; `.is-in` triggers; `@media (prefers-reduced-motion: reduce)` renders the finished state with no animation. No-JS renders finished state.
- No horizontal page scroll at 375px. Wide figures scroll inside their own `overflow-x-auto`.
- No emoji as icons. Inline SVG line icons only.
- Verification per task: `npx tsc -p tsconfig.app.json --noEmit` clean, `npm run build` succeeds, visual check in the browser preview at 1280 and 375 wide.

---

## File structure

```
index.html                              head: fonts, meta, OG, favicon, theme-color
public/favicon.svg                      canonical Y badge (from yebo-logo skill)
public/apple-touch-icon.png             180×180 badge
public/og-image.png                     1200×630 social card
public/llms.txt                         keep; fix nothing
src/index.css                           @theme tokens, base, .eyebrow/.h-*/.btn, reveal + fig motion system
src/App.tsx                             section order
src/data/translations.ts                + keys: nav.how, nav.openApp, hero.eyebrow, hero.line1, hero.line2, hero.lede, hero.whatsapp, hero.facts, cta.title, cta.body
src/data/copy.ts                        all English section copy (features, steps, faq, messages, assistant Q&A) in one typed file
src/components/ui/YeboLogo.tsx          badge + two-tone wordmark (suffix "Mart")
src/components/ui/Section.tsx           Section(tone,id) + Page container
src/components/ui/Eyebrow.tsx           mono label with optional index + rule
src/components/ui/SectionHead.tsx       eyebrow + h2 + lede
src/components/ui/Button.tsx            primary | ink | ghost | onDark, href
src/components/ui/Reveal.tsx            useInView, Reveal(delay), useMotionEnabled
src/components/ui/Icon.tsx              named line icons (till, stock, cash, staff, returns, supplier, credit, expense, audit, tax, check, arrow, whatsapp, phone, scan, printer, offline, globe)
src/components/Nav.tsx                  restyle
src/components/CountryPicker.tsx        restyle only (cream/ink, brand accent)
src/components/sections/Hero.tsx        split hero
src/components/sections/TillDemo.tsx    timed receipt loop
src/components/sections/ProofStrip.tsx  4 facts
src/components/sections/HowItWorks.tsx  ink band: DiagramLoop + steps + under-the-hood
src/components/sections/DiagramLoop.tsx self-drawing SVG
src/components/sections/Features.tsx    10-card grid
src/components/sections/Assistant.tsx   copy + AssistantDemo
src/components/sections/AssistantDemo.tsx auto-cycling Q&A
src/components/sections/Messages.tsx    phone mockup with bubbles
src/components/sections/Pricing.tsx     restyle; drop multi-shop line
src/components/sections/Hardware.tsx    restyle; add printer fact
src/components/sections/Faq.tsx         6 disclosure rows
src/components/sections/FinalCta.tsx    CTA + contact
src/components/sections/Footer.tsx      restyle
DELETE: src/components/sections/Problems.tsx, Solutions.tsx, Setup.tsx, AIFeatures.tsx, Contact.tsx
```

---

### Task 1: Tokens, fonts, head, brand assets

**Files:**
- Modify: `src/index.css` (replace whole file)
- Modify: `index.html` (replace `<head>`)
- Create: `public/favicon.svg`, `public/apple-touch-icon.png`, `public/og-image.png`

**Produces:** Tailwind utilities `bg-cream bg-sand bg-wash bg-ink text-ink text-cream text-mute text-brand text-brand-hot text-brick border-line rounded-sharp font-display font-mono tracking-eyebrow tracking-tightest max-w-page`; CSS classes `.eyebrow .h-display .h-section .h-card .btn .btn-primary .btn-ink .btn-ghost .btn-on-dark .on-ink`; motion classes `.rv .rv-up .fig .fig-ink .fig-wire .fig-node .fig-hold .fig-fill .fade-step .is-in`.

- [x] **Step 1: Write `src/index.css`**

```css
@import 'tailwindcss';

@theme {
  --color-brand: #FF6B00;
  --color-brand-hot: #ff8c33;
  --color-brick: #9a3412;
  --color-ink: #1a1814;
  --color-ink-2: #221f1a;
  --color-cream: #fdfbf7;
  --color-sand: #f5f1ea;
  --color-shade: #eae5dc;
  --color-wash: #fff5ec;
  --color-mute: #78716c;
  --color-mist: #a8a29e;
  --color-line: rgba(26, 24, 20, 0.12);
  --color-line-strong: rgba(26, 24, 20, 0.28);
  --color-ok: #15803d;
  --color-warn: #ca8a04;
  --color-bad: #dc2626;

  --font-display: 'Space Grotesk', system-ui, sans-serif;
  --font-sans: 'Space Grotesk', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace;

  --radius-sharp: 2px;
  --tracking-tightest: -0.03em;
  --tracking-eyebrow: 0.14em;
  --container-page: 1280px;

  --animate-marquee: marquee 40s linear infinite;
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
}
```
Then base (`html` scroll-padding 5rem, smooth scroll; `body` bg-cream text-ink font-sans antialiased; `::selection` orange 25%), the `.eyebrow` / `.h-*` / `.btn*` component classes (copy the yebodash shapes but `rounded-sharp` not `rounded-full`), and the motion system below.

Motion system (verbatim contract used by every later task):
```css
/* Reveal: children fade/rise once when .is-in is applied by useInView. */
.js-motion .rv { opacity: 0; transform: translateY(14px); }
.js-motion .is-in .rv, .js-motion .rv.is-in {
  animation: rv-up 640ms cubic-bezier(0.16, 1, 0.3, 1) var(--d, 0ms) forwards;
}
@keyframes rv-up { to { opacity: 1; transform: none; } }

/* Figure system (ported from yeboverify): wires draw, nodes light, bars fill. */
.fig { --fig-line: rgba(26,24,20,.42); --fig-soft: rgba(26,24,20,.22); --fig-text: #1a1814; --fig-muted: #78716c; --fig-accent: #9a3412; --fig-ok: #15803d; }
.fig-ink { --fig-line: rgba(253,251,247,.42); --fig-soft: rgba(253,251,247,.18); --fig-text: #fdfbf7; --fig-muted: #a8a29e; --fig-accent: #ff8c33; --fig-ok: #4ade80; }
.fig text { font-family: var(--font-sans); } .fig .m { font-family: var(--font-mono); }
.fig-wire { stroke-dasharray: var(--len, 900); stroke-dashoffset: 0; }
.js-motion .fig-wire { stroke-dashoffset: var(--len, 900); }
.js-motion .is-in .fig-wire { animation: fig-draw 650ms cubic-bezier(.4,0,.2,1) var(--d, 0ms) forwards; }
@keyframes fig-draw { to { stroke-dashoffset: 0; } }
.js-motion .fig-node, .js-motion .fig-hold, .js-motion .fade-step { opacity: 0; }
.js-motion .is-in .fig-node, .js-motion .is-in .fade-step { animation: fig-lit 620ms ease-out var(--d, 0ms) forwards; }
.js-motion .is-in .fig-hold { animation: fig-lit 620ms ease-out var(--d,0ms) forwards, fig-hold 460ms ease-out calc(var(--d,0ms) + 640ms) forwards; }
@keyframes fig-lit { to { opacity: 1; } }
@keyframes fig-hold { to { stroke: var(--fig-ok); } }
.fig-fill { transform-box: fill-box; transform-origin: left center; }
.js-motion .fig-fill { transform: scaleX(0); }
.js-motion .is-in .fig-fill { animation: fig-fill 1150ms cubic-bezier(.4,0,.2,1) var(--d, 200ms) forwards; }
@keyframes fig-fill { to { transform: scaleX(1); } }

@media (prefers-reduced-motion: reduce) {
  .js-motion .rv { opacity: 1; transform: none; }
  .js-motion .fig-wire { stroke-dashoffset: 0; }
  .js-motion .fig-node, .js-motion .fig-hold, .js-motion .fade-step { opacity: 1; }
  .js-motion .fig-hold { stroke: var(--fig-ok); }
  .js-motion .fig-fill { transform: none; }
  *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; scroll-behavior: auto !important; }
}
```

- [x] **Step 2: Write `index.html` head** — title `YeboMart — Free POS & shop management for African shops`, description `Free point-of-sale for African shops. Ring up sales, track stock, count the till, and get the day's numbers on WhatsApp. Works offline on any phone. Pay only for AI and messages.`, `theme-color #FF6B00`, favicon.svg + apple-touch-icon, OG/Twitter (`summary_large_image`, `https://yebomart.com/og-image.png`), canonical `https://yebomart.com/`, fonts preconnect + `Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500`, JSON-LD `SoftwareApplication` (name, url, applicationCategory BusinessApplication, offers price 0, operatingSystem Web).

- [x] **Step 3: Write `public/favicon.svg`** — the canonical SVG from the yebo-logo skill (orange rx=8 square, cream bold Y).

- [x] **Step 4: Generate `apple-touch-icon.png` (180) and `og-image.png` (1200×630)** with a Python + Pillow script in the scratchpad: orange rounded square with cream "Y" for the icon; cream card with the badge, "YeboMart" two-tone wordmark and "Free POS & shop management for African shops" for OG. Use Space Grotesk if present on the system, else Helvetica Bold. Verify with `sips -g pixelWidth -g pixelHeight`.

- [x] **Step 5: Verify** — `npm run build` passes; open preview, confirm favicon shows the Y badge and fonts load (Space Grotesk in computed style of `h1`).

- [x] **Step 6: Commit** — `git add index.html public src/index.css && git commit -m "feat: yebo brand tokens, fonts, head, favicon, og image"`

---

### Task 2: UI primitives

**Files:** Create everything under `src/components/ui/` listed in the file structure.

**Produces (exact interfaces):**
```ts
YeboLogo({ suffix?: string /* 'Mart' */, onDark?: boolean, size?: 'sm'|'md'|'lg', badgeOnly?: boolean, className?: string })
Section({ id?: string, tone?: 'cream'|'sand'|'ink'|'brand', className?: string, children })   // adds scroll-mt-20; ink adds .on-ink .fig-ink
Page({ className?: string, children })                                                     // mx-auto max-w-page px-5 sm:px-8 lg:px-12
Eyebrow({ index?: string, tone?: 'mute'|'brick'|'hot', children })                         // mono 11px uppercase tracking-eyebrow, index in brand
SectionHead({ index?: string, label: string, heading: string, lede?: string, tone?: 'light'|'dark', align?: 'left'|'center' })
Button({ href: string, variant?: 'primary'|'ink'|'ghost'|'onDark', size?: 'md'|'lg', external?: boolean, children })
useInView<T extends HTMLElement>(opts?: IntersectionObserverInit): { ref: RefObject<T>, inView: boolean }  // adds html.js-motion once
Reveal({ className?: string, delay?: number /* ms → style --d */, as?: 'div'|'li', children })              // adds .is-in when in view
Icon({ name: IconName, className?: string })  // IconName union listed in file structure; 24px viewBox, stroke currentColor 1.75, no fill
```

- [x] **Step 1: Write `YeboLogo.tsx`** — port from `~/Documents/omevision/companies/yebolink/landing/src/components/YeboLogo.tsx`, default suffix `'Mart'`, classes use `bg-brand text-cream font-display`.
- [x] **Step 2: Write `Section.tsx` + `Page`** — tone map: `cream: 'bg-cream text-ink'`, `sand: 'bg-sand text-ink'`, `ink: 'on-ink fig-ink bg-ink text-cream'`, `brand: 'bg-brand text-ink'`.
- [x] **Step 3: Write `Eyebrow.tsx`, `SectionHead.tsx`** — SectionHead h2 class `font-display text-[clamp(30px,4.6vw,52px)] font-bold leading-[1.06] tracking-tightest text-pretty max-w-[22ch]`; lede `text-[17px] leading-[1.62] max-w-[58ch]` with `text-mute` (light) / `text-cream/70` (dark).
- [x] **Step 4: Write `Button.tsx`** — base `inline-flex items-center justify-center gap-2 rounded-sharp font-display font-medium transition-colors duration-200`; variants: primary `bg-brand text-ink hover:bg-ink hover:text-cream`, ink `bg-ink text-cream hover:bg-brand hover:text-ink`, ghost `border border-line-strong text-ink hover:border-ink`, onDark `bg-cream text-ink hover:bg-brand`; sizes md `px-5 py-3 text-[15px]`, lg `px-7 py-4 text-[16px]`.
- [x] **Step 5: Write `Reveal.tsx`** — port yeboverify `useInView` (threshold .15, rootMargin `0px 0px -8% 0px`, adds `js-motion` once, no-IO fallback = in view) and `Reveal` adding `is-in`; `delay` sets `style={{'--d': `${delay}ms`}}`.
- [x] **Step 6: Write `Icon.tsx`** — a `Record<IconName, ReactNode>` of path elements, rendered inside one `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">`.
- [x] **Step 7: Verify** — `npx tsc -p tsconfig.app.json --noEmit` clean.
- [x] **Step 8: Commit** — `git add src/components/ui && git commit -m "feat: ui primitives (YeboLogo, Section, Eyebrow, Button, Reveal, Icon)"`

---

### Task 3: Copy source of truth + translations

**Files:** Create `src/data/copy.ts`; modify `src/data/translations.ts`.

- [x] **Step 1: Add translation keys** (en + fr) — `nav.how` "How it works"/"Comment ça marche"; `nav.openApp` "Open the app"/"Ouvrir l'app"; `hero.eyebrow` "Free POS & shop management"/"Caisse et gestion de boutique gratuites"; `hero.line1` "Run your whole shop"/"Gérez toute votre boutique"; `hero.line2` "from your phone."/"depuis votre téléphone."; `hero.lede` "YeboMart is a free point-of-sale for African shops. Ring up sales, watch stock move, count the till, and get the day's numbers on WhatsApp. Works offline. No computer needed." / FR equivalent; `hero.whatsapp` "WhatsApp us"/"Écrivez-nous sur WhatsApp"; `hero.facts` "Free core · Works offline · 22 countries · English & French" / FR; `cta.title` "Ready when your next customer is."/"Prêt dès votre prochain client."; `cta.body` "Sign in with your phone number and ring your first sale in five minutes. We'll help you set up on WhatsApp." / FR. Update existing `hero.cta` → "Open the app"/"Ouvrir l'app". Remove keys `hero.badge`, `hero.title1`, `hero.title2`, `hero.subtitle`, `hero.callCta`, `hero.tagline` only if no component still uses them after Task 11.

- [x] **Step 2: Write `src/data/copy.ts`** with typed exports:
  - `PROOF: {value:string; label:string; body:string}[]` — `E0 / month` "Free core" "POS, stock, staff and reports are free. Forever."; `Offline` "Keeps selling" "Sales save on the phone and sync when the signal returns. Never counted twice."; `22` "Countries" "Prices in your currency, from Eswatini to Kenya to Nigeria."; `0` "Extra hardware" "Your phone camera is the barcode scanner."
  - `LOOP: {n:string; title:string; body:string}[]` — 01 Till "Cashier rings up the sale"; 02 Stock "Every item's count drops"; 03 Cash-up "Counted cash vs. till total"; 04 Report "Day summary lands on WhatsApp"; 05 Assistant "Reads it all, tells you what to do".
  - `STEPS: {n:string; title:string; body:string}[]` — 01 "Sign in with YeboID" "Your phone number, a one-time code and a PIN. No password, no email."; 02 "Name your shop, scan your stock in" "Pick your country and shop type, then point the camera at each barcode. Cost and selling price go in once."; 03 "Ring your first sale" "Tap items or scan, take cash or card, print or SMS a receipt. Staff PINs and suppliers can come later."
  - `UNDER_HOOD: {icon:IconName; title:string; body:string}[]` — offline "Offline outbox" "Each sale gets a local ID. When the phone reconnects the queue replays, and the server refuses duplicates, so a flaky signal can't double-sell."; staff "Staff PINs" "The owner signs in with YeboID. Every cashier gets a PIN on the shop's phone, so every sale has a name on it."; cash "Cash sessions" "Open the till with a float, close it with the counted cash. The variance shows the moment you close."
  - `FEATURES: {icon:IconName; title:string; body:string}[]` — the 10 rows from the spec with bodies: till "POS & mobile till" "A full-screen till built for one thumb. Scan, tap, charge."; stock "Stock & reorder" "Live counts, movements, receive stock, and a reorder list built from what's actually selling."; cash "Cash-up & Z-report" "Float in, cash counted out, variance and Z-report in one tap."; staff "Staff & PINs" "Cashiers and managers with their own PINs and per-person sales reports."; returns "Returns & exchanges" "Refund or swap an item. Stock and takings correct themselves."; supplier "Suppliers & purchase orders" "Raise a PO, receive against it, record payments, see what you owe."; credit "Customer credit book" "Who owes what, and a statement you can send by WhatsApp."; expense "Expenses" "Rent, airtime, transport. So profit means profit."; audit "Audit log" "Who did what, when. Voids, edits, adjustments."; tax "VAT & tax" "Set your rate once. Receipts and reports respect it."
  - `ASSISTANT_QA: {q:string; a:string}[]` — the 4 pairs: "What's not selling?" → "Three items haven't moved in 30 days: Rice 10kg (2 sold), Sunlight 2kg (1), Candles ×6 (0). That's E1,240 sitting on the shelf. Discount the candles first."; "What should I restock this week?" → "Bread: you sell about 20 a day and have 15 left. Milk: 3 days left at this pace. Eggs are fine, you're overstocked by about 30%."; "How's the week going?" → "E18,420 so far, up 9% on last week. Tuesday was slow. Margin is holding at 22%, mostly from airtime and bread."; "Which product makes me the most?" → "By margin, cooked meals at 38%, then airtime by volume. Simba chips is your thinnest at 5%."
  - `MESSAGES: {kind:string; time:string; text:string}[]` — Daily report 18:00 "Today at Thandi's Tuckshop: E4,250 from 47 sales. Cash E3,890 · Card E360. Net profit E890. Top: Bread, Milk, Airtime, Coke 500ml, Eggs."; Low stock 07:00 "Low stock: White bread (3), Fresh milk (8), Coke 500ml (5)."; SMS receipt 14:32 "Receipt A1042 · E66.50 · Thandi's Tuckshop · Thank you."; Statement 09:15 "Statement for Nomsa D.: balance E320, due Friday."
  - `FAQ: {q:string; a:string}[]` — 6 rows: offline (yes, sales save locally and sync, never duplicated); cost (free core; 1 credit = E1; AI 0.5–1, SMS 1, WhatsApp 2; credits never expire); computer or till (no; any phone or tablet with a browser; add a scanner or Bluetooth printer if you want); more than one shop ("Today each YeboID owner runs one shop. Multi-shop is being built; ask us on WhatsApp if you need it."); staff login (PINs on the shop's device; owner signs in with YeboID); languages (English and French in the app).
  Prices inside copy strings stay literal "E" (SZL) in demos and messages; the Pricing section keeps using `<Price>` for conversion.

- [x] **Step 3: Verify** `npx tsc -p tsconfig.app.json --noEmit`. **Commit** `feat: page copy + translation keys`.

---

### Task 4: Nav, Footer, CountryPicker restyle

**Files:** Modify `src/components/Nav.tsx`, `src/components/sections/Footer.tsx`, `src/components/CountryPicker.tsx`.

- [x] Nav: `fixed inset-x-0 top-0 z-50 border-b border-line bg-cream/85 backdrop-blur`; `<YeboLogo />`; links `#how`, `#features`, `#pricing`, `#hardware` (`text-[14px] text-mute hover:text-ink`); country button `rounded-sharp border border-line-strong bg-cream px-3 py-2`; CTA `<Button href="https://app.yebomart.com" variant="ink">{t('nav.openApp')}</Button>`. Mobile: a hamburger toggling a `md:hidden` panel listing the links.
- [x] Footer: `<Section tone="ink">` with `<YeboLogo onDark />`, tagline, columns (Product: Open the app, Pricing, Hardware; Company: Omevision, Blog `https://blog.yebomart.com`; Contact: WhatsApp, Call), bottom line `© 2026 Omevision · {t('footer.madeIn')} {country.name} {country.flag}`.
- [x] CountryPicker: swap slate/amber classes for `bg-cream text-ink border-line`, selected row `bg-wash text-brick`, check dot `bg-brand`, focus ring `focus:border-brand focus:ring-brand/20`, overlay `bg-ink/60`.
- [x] Verify tsc + build; commit `feat: nav, footer, country picker on house system`.

---

### Task 5: Hero + TillDemo

**Files:** Create `src/components/sections/TillDemo.tsx`; replace `src/components/sections/Hero.tsx`.

**TillDemo contract:** `export function TillDemo()`; uses `useInView` to run only while visible; respects `matchMedia('(prefers-reduced-motion: reduce)')` → renders final frame statically. State machine on `setTimeout` chain: phase 0 blank (400ms) → item 1 (900ms) → item 2 (900ms) → item 3 (900ms) → total counts up over 700ms → stock chip flips "Bread 14 → 12 left" (600ms) → status "Saved offline" (1200ms) → "Synced ✓" (2200ms) → reset. Items: `[['White bread 700g', 2, 28.0], ['Fresh milk 1L', 1, 18.5], ['Airtime E20', 1, 20.0]]`, total `66.50`. Card: `rounded-sharp border border-line bg-white shadow-[0_1px_2px_rgba(26,24,20,.05),0_24px_48px_-24px_rgba(26,24,20,.25)]`, header row `Thandi's Tuckshop · Till 1` + mono time, cashier row `Cashier Sipho · PIN`, items list with `font-mono` amounts, dashed rule, total, chips row. Each new line uses class `rv is-in` with `--d` for the rise-in.

- [x] Hero layout: `<Section tone="cream"><Page className="grid gap-12 pt-32 pb-20 lg:grid-cols-12 lg:items-center lg:pt-40">` left `lg:col-span-6`: `<Eyebrow>{t('hero.eyebrow')}</Eyebrow>`, `<h1 className="mt-6 font-display text-[clamp(40px,6.4vw,76px)] font-bold leading-[1.02] tracking-tightest">{t('hero.line1')}<br/><span className="text-brand">{t('hero.line2')}</span></h1>`, lede `mt-6 max-w-[54ch] text-[18px] leading-[1.6] text-mute`, buttons row (`primary` Open the app · `ghost` WhatsApp us → `https://wa.me/26878422613?text=...`), facts line `mt-6 font-mono text-[11px] uppercase tracking-eyebrow text-mute`. Right `lg:col-span-6`: `<TillDemo />` inside a `relative` box with a soft `bg-wash` blob behind (`absolute -inset-6 -z-10 rounded-full blur-3xl opacity-70`). Wrap left column in `<Reveal>` with staggered `--d` on children.
- [x] Verify at 1280 and 375; the demo loops and pauses when scrolled away; commit `feat: hero with live till demo`.

---

### Task 6: ProofStrip

- [x] `src/components/sections/ProofStrip.tsx`: `<Section tone="sand">` → `<Page className="py-10">` → `<ul className="grid gap-px overflow-hidden rounded-sharp border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">` each `<Reveal as="li" delay={i*90} className="bg-sand p-6">` with `value` in `font-display text-[34px] font-bold tracking-tightest`, label `font-mono text-[11px] uppercase tracking-eyebrow text-brick`, body `mt-2 text-[14.5px] text-mute`. Commit `feat: proof strip`.

---

### Task 7: HowItWorks + DiagramLoop

**Files:** Create `DiagramLoop.tsx`, `HowItWorks.tsx`.

**DiagramLoop:** `<svg viewBox="0 0 1140 320">` five 200×110 `rect.fig-node` at x = 0,235,470,705,940 (y 40), four `path.fig-wire` hops (`--len 35`, delays 280+i*170), the fifth node `fig-hold` (assistant lights OK green). A return wire from node 5 bottom back under to node 1 (`M1040 150 V250 H100 V150`, `--len 1300`, delay 1100ms) with a mid label `restock advice` (`.m fade-step`). Node text: `.m` index (11px, letterSpacing 1.4), title 18px 500, body 13px muted. Wrapped in `<div className="fig fig-ink overflow-x-auto"><div className="min-w-[900px]">…` with a `lg:hidden` "Swipe to see the whole drawing →" mono note. Outer `<Reveal>` supplies `.is-in`.

- [x] HowItWorks: `<Section id="how" tone="ink">` → `<Page className="py-24">` → `<SectionHead index="01" label="How it works" heading="One sale sets everything else in motion." lede="You ring up a sale. YeboMart does the rest: stock drops, the till total updates, the day's report writes itself, and your assistant reads it all." tone="dark" />` → `<DiagramLoop />` → h3 "Start in three steps" + `<ol className="grid gap-px bg-cream/15 md:grid-cols-3">` each `<Reveal as="li" delay={i*120} className="bg-ink p-8">` giant numeral `font-display text-[56px] font-bold text-brand leading-none`, title `mt-4 font-display text-[22px] font-semibold`, body `mt-2 text-cream/70` → "Under the hood" row: 3 cards `border border-cream/20 p-6` with `<Icon>` in brand-hot, title, body. Commit `feat: how it works with self-drawing loop diagram`.

---

### Task 8: Features grid

- [x] `Features.tsx`: `<Section id="features" tone="cream">`, `SectionHead index="02" label="Everything a shop needs" heading="The whole back office, in the same app as the till." lede="Every screen below is free. They share one database, so a sale on the till is already in stock, reports, and the audit log."`; `<ul className="grid gap-px rounded-sharp border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">`; each `<Reveal as="li" delay={i*60} className="bg-cream p-6 hover:bg-wash transition-colors">` with `<Icon name className="h-6 w-6 text-brick" />`, title `mt-4 font-display text-[17px] font-semibold`, body `mt-1.5 text-[14px] leading-[1.55] text-mute`. Commit `feat: features grid`.

---

### Task 9: Assistant + AssistantDemo

- [x] `AssistantDemo.tsx`: cycles `ASSISTANT_QA` every 5000ms while in view (`useInView`), reduced-motion → static first pair. Renders a chat card: question bubble right-aligned `bg-ink text-cream`, answer bubble `bg-wash border border-line` with a typing dot row for 600ms before the answer appears; tab strip above listing the 4 questions, active one `text-ink border-b-2 border-brand`, clickable to jump.
- [x] `Assistant.tsx`: `<Section tone="sand">` split `lg:grid-cols-12`: copy col-5 (`SectionHead index="03" label="Your assistant" heading="Ask your shop a question." lede="Your assistant reads your sales, stock and margins every time you ask, and answers in plain language. It advises. You decide."`, three facts with check icons: "Speak or type", "Name it yourself", "Half a credit per question"), demo col-7. Commit `feat: assistant demo`.

---

### Task 10: Messages

- [x] `Messages.tsx`: `<Section tone="cream">` split: phone mockup left (`mx-auto w-[300px] rounded-[28px] border-[6px] border-ink bg-white p-4`) with `MESSAGES` as bubbles (`<Reveal delay={i*220} className="rounded-sharp rounded-tl-none bg-[#e7f8ee] p-3 text-[13px]">`, kind label mono, time right). Copy right: `SectionHead index="04" label="Messages" heading="The numbers come to you." lede="Every evening the day's report lands on your WhatsApp. Low stock, receipts and customer statements go out the same way. WhatsApp first, SMS if WhatsApp can't deliver."`. Commit `feat: messages section`.

---

### Task 11: Pricing + Hardware restyle

- [x] `Pricing.tsx`: keep all data and `<Price>` usage. Remove `'Multi-shop & multi-location'` from `FREE_FEATURES`. Replace dark classes: section `tone="sand"`, callout `rounded-sharp border border-line bg-cream p-8`, usage cards `bg-cream border border-line`, cost figure `text-brick font-display`, packs `bg-cream border border-line`, highlighted `border-brand ring-1 ring-brand`, pack CTA `<Button variant={highlighted?'primary':'ghost'} size="md">`. Emoji → `<Icon>` (assistant, sms, email icons: reuse `chat`, `sms`, `mail` names, add to Icon).
- [x] `Hardware.tsx`: same treatment (`tone="cream"`, cards `border-line`, highlighted `border-brand`), emoji → icons (`scan`, `printer`, `store`), add a 4th benefit "Print from the browser" body "Bluetooth 58mm/80mm receipt printers pair straight from the app. No driver, no print dialog."
- [x] Verify prices still convert when switching country. Commit `feat: pricing and hardware on house system`.

---

### Task 12: FAQ, FinalCta, App wiring, cleanup

- [x] `Faq.tsx`: `<Section tone="sand">`, `SectionHead index="05" label="Questions" heading="Straight answers."`; `<dl className="divide-y divide-line border-y border-line">` each a native `<details>` with `<summary className="cursor-pointer py-5 font-display text-[18px] font-medium flex justify-between">` + plus/minus icon rotating via `group-open:`; answer `pb-5 text-mute max-w-[70ch]`.
- [x] `FinalCta.tsx`: `<Section tone="brand">` → `<Page className="py-20 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">` h2 `font-display text-[clamp(34px,5vw,60px)] font-bold tracking-tightest` `{t('cta.title')}`, body, buttons (`ink` Open the app, `ghost` WhatsApp, `ghost` Call +268 7842 2613), mono line "+268 7842 2613 · WhatsApp support".
- [x] `App.tsx` order: Nav, Hero, ProofStrip, HowItWorks, Features, Assistant, Messages, Pricing, Hardware, Faq, FinalCta, Footer. Delete `Problems.tsx`, `Solutions.tsx`, `Setup.tsx`, `AIFeatures.tsx`, `Contact.tsx`. Remove unused translation keys. `grep -rn "purple\|gray-9\|slate-\|🛒\|🤖" src` must return nothing.
- [x] Verify tsc + build; commit `feat: faq, final cta, wire sections, remove legacy sections`.

---

### Task 13: Visual verification

- [x] Start preview (`.claude/launch.json` → `npm run dev`, port 5173). Screenshot every section at 1280 and at 375 (mobile preset). Check: no horizontal scroll (`document.documentElement.scrollWidth === window.innerWidth` at 375), diagram scrolls in its own box, till demo loops, assistant cycles, reveals fire once, hover states, focus rings visible.
- [x] Emulate reduced motion (`javascript_tool`: add `js-motion` and check `.rv` computed opacity is 1 under `matchMedia` override is not possible → instead temporarily toggle the media in DevTools is unavailable, so verify via CSS review + a test render with `html.js-motion` removed shows finished state).
- [x] Fix anything found; commit `fix: visual polish from review`.

---

### Task 14: Deploy

- [x] Push `main` to `origin` (`git push origin main`).
- [x] Create Cloudflare Pages project `yebomart-landing` via the `create-deploy-trigger` skill: GitHub `omegathesecond/yebomart-landing`, prod branch `main`, build `npm run build`, out `dist`. If the API refuses a GitHub-sourced create, fall back to direct upload: `npm run build && CLOUDFLARE_API_TOKEN=… CLOUDFLARE_ACCOUNT_ID=… npx wrangler pages deploy dist --project-name=yebomart-landing --branch=main`.
- [x] Add custom domains `yebomart.com` and `www.yebomart.com` (`POST /accounts/{acct}/pages/projects/yebomart-landing/domains`), confirm CNAME records appear in zone `5f06de238a6ec9f0e2297e40babe3487`.
- [x] Verify `curl -sI https://yebomart.com/` → 200 and `<title>` matches; `https://www.yebomart.com/` → 200 or 301 to apex.
- [x] Update `public/llms.txt` "Last generated" date only if content changed (it didn't). Done.
