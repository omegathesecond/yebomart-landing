import type { IconName } from '@/components/ui/Icon';

/**
 * Every English section string on the page, in one place. Demo amounts are
 * literal SZL ("E") because they are screenshots of one fictional Eswatini
 * shop; real prices (Pricing, Hardware) go through <Price> for conversion.
 *
 * Accuracy rules (see docs/superpowers/specs/2026-09-08-landing-redesign-design.md):
 * no multi-shop, no emailed receipts, no theft detection, no AI-takes-actions.
 */

export const SHOP = "Thandi's Tuckshop";
export const WHATSAPP = 'https://wa.me/26878422613?text=Hi%2C%20I%27m%20interested%20in%20YeboMart%20for%20my%20shop';
export const PHONE_HREF = 'tel:+26878422613';
export const PHONE_LABEL = '+268 7842 2613';
export const APP_URL = 'https://app.yebomart.com';

/**
 * The three plans. These MIRROR `yebomart-api/src/config/plans.ts`, which is
 * the authority — the API raises the invoice, so its price is the one a shop
 * actually pays. Change both together.
 */
export const TIERS: {
  code: 'TILL' | 'SHOP' | 'BUSY';
  name: string;
  priceSzl: number;
  tagline: string;
  features: string[];
  highlighted?: boolean;
}[] = [
  {
    code: 'TILL',
    name: 'Till',
    priceSzl: 0,
    tagline: 'Everything in the app, free forever.',
    features: [
      'POS, stock, staff PINs and cash-up',
      'Suppliers, purchase orders and the credit book',
      'Returns, expenses, reports and the audit log',
      'Works offline, on any phone',
      '20 assistant questions a month',
    ],
  },
  {
    code: 'SHOP',
    name: 'Shop',
    priceSzl: 199,
    tagline: "The day's numbers on your WhatsApp, every evening.",
    features: [
      'Everything in Till',
      'Daily WhatsApp report at closing time',
      'Low-stock alerts before you run out',
      'Unlimited assistant questions',
      '30 WhatsApp messages to your customers',
    ],
    highlighted: true,
  },
  {
    code: 'BUSY',
    name: 'Busy',
    priceSzl: 499,
    tagline: 'For shops with a queue and staff on shift.',
    features: [
      'Everything in Shop',
      '150 WhatsApp messages to your customers',
      'Priority WhatsApp support',
    ],
  },
];

export const PROOF: { value: string; label: string; body: string }[] = [
  { value: '“The cash doesn’t match.”', label: 'Cash-up', body: 'Open the till with a float, close it with the count. The variance is on screen before the drawer is locked, and every sale carries the cashier’s name.' },
  { value: '“I can’t leave the shop.”', label: 'Your phone', body: 'Watch sales as they happen from anywhere. At closing time the day’s numbers land on your WhatsApp.' },
  { value: '“Out of bread again.”', label: 'Stock', body: 'Counts drop with every sale. You get a warning before you run out, and a reorder list built from what actually sells.' },
  { value: '“The signal’s gone.”', label: 'Offline', body: 'Sales keep saving on the phone and sync when the network returns. Never counted twice.' },
];

export const LOOP: { n: string; title: string; body: string }[] = [
  { n: '01', title: 'Till', body: 'Cashier rings up the sale' },
  { n: '02', title: 'Stock', body: "Every item's count drops" },
  { n: '03', title: 'Cash-up', body: 'Counted cash vs. till total' },
  { n: '04', title: 'Report', body: 'Day summary lands on WhatsApp' },
  { n: '05', title: 'Assistant', body: 'Reads it all, advises you' },
];

export const STEPS: { n: string; title: string; body: string }[] = [
  { n: '01', title: 'Sign in with YeboID', body: 'Your phone number, a one-time code and a PIN. No password, no email.' },
  { n: '02', title: 'Name your shop, scan your stock in', body: 'Pick your country and shop type, then point the camera at each barcode. Cost and selling price go in once.' },
  { n: '03', title: 'Ring your first sale', body: 'Tap items or scan, take cash or card, print or SMS a receipt. Staff PINs and suppliers can come later.' },
];

export const UNDER_HOOD: { icon: IconName; title: string; body: string }[] = [
  { icon: 'sync', title: 'Offline outbox', body: "Each sale gets a local ID. When the phone reconnects the queue replays, and the server refuses duplicates, so a flaky signal can't double-sell." },
  { icon: 'pin', title: 'Staff PINs', body: 'The owner signs in with YeboID. Every cashier gets a PIN on the shop\'s phone, so every sale has a name on it.' },
  { icon: 'cash', title: 'Cash sessions', body: 'Open the till with a float, close it with the counted cash. The variance shows the moment you close.' },
];

export const FEATURES: { icon: IconName; title: string; body: string }[] = [
  { icon: 'cash', title: 'Cash-up & Z-report', body: 'Float in, cash counted out. The variance and the Z-report are on screen before you lock the drawer.' },
  { icon: 'staff', title: 'Staff PINs', body: 'Every cashier has a PIN. Every sale, void and refund carries their name, with a sales report per person.' },
  { icon: 'stock', title: 'Stock & reorder', body: 'Live counts, movements and receiving. A reorder list builds itself from what sells, and a WhatsApp warns you when something runs low.' },
  { icon: 'credit', title: 'Customer credit book', body: 'Who owes what, since when. Send a statement by WhatsApp in one tap instead of chasing.' },
  { icon: 'till', title: 'POS & mobile till', body: 'A full-screen till for one thumb. Scan with the camera, tap, take cash or card, print or SMS the receipt.' },
  { icon: 'returns', title: 'Returns & exchanges', body: 'Refund or swap in seconds. Stock and takings correct themselves.' },
  { icon: 'supplier', title: 'Suppliers & purchase orders', body: 'Raise a PO, receive against it, record what you paid and see what you still owe.' },
  { icon: 'expense', title: 'Expenses', body: 'Rent, airtime, transport. So profit means profit, not just sales.' },
  { icon: 'audit', title: 'Audit log', body: 'Who changed a price, voided a sale or adjusted a count. And when.' },
  { icon: 'tax', title: 'VAT & tax', body: 'Set your rate once. Receipts and reports carry it.' },
];

export const ASSISTANT_QA: { tab: string; q: string; a: string; spoken?: boolean }[] = [
  {
    tab: 'Slow movers',
    q: "What's not selling?",
    a: "Three items haven't moved in 30 days: Rice 10kg (2 sold), Sunlight 2kg (1), Candles ×6 (0). That's E1,240 sitting on the shelf. Discount the candles first.",
  },
  {
    tab: 'Restock',
    q: 'What should I restock this week?',
    a: "Bread: you sell about 20 a day and have 15 left. Milk: 3 days left at this pace. Eggs are fine, you're overstocked by about 30%.",
    spoken: true,
  },
  {
    tab: 'This week',
    q: "How's the week going?",
    a: 'E18,420 so far, up 9% on last week. Tuesday was slow. Margin is holding at 22%, mostly from airtime and bread.',
  },
  {
    tab: 'Margins',
    q: 'Which product makes me the most?',
    a: 'By margin, cooked meals at 38%, then airtime by volume. Simba chips is your thinnest at 5%.',
  },
];

export const ASSISTANT_PROOF: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'report',
    title: 'It reads before it answers',
    body: "Today's takings, the stock on hand, every margin, and everything that hasn't moved in a month.",
  },
  {
    icon: 'mic',
    title: 'Speak instead of typing',
    body: 'Hands full behind the counter? Hold the mic and ask out loud.',
  },
  {
    icon: 'check',
    title: 'It advises, it never acts',
    body: "It will not change a price or place an order behind your back. Nothing moves unless you move it.",
  },
];

/** What it surfaces without being asked — the shop dashboard's insight feed. */
export const ASSISTANT_INSIGHTS: { icon: IconName; tag: string; text: string }[] = [
  { icon: 'clock', tag: 'Slow mover', text: "Candles ×6 haven't sold in 34 days. E240 sitting on the shelf." },
  { icon: 'tax', tag: 'Thin margin', text: 'Simba chips is at 5%. Every other snack you stock is above 18%.' },
  { icon: 'stock', tag: 'Running out', text: 'White bread: 3 left, and you sell about 20 a day.' },
];

export const MESSAGES: { kind: string; time: string; text: string; why: string }[] = [
  {
    kind: 'Daily report',
    time: '18:00',
    text: `Today at ${SHOP}: E4,250 from 47 sales. Cash E3,890 · Card E360. Net profit E890. Top: Bread, Milk, Airtime, Coke 500ml, Eggs.`,
    why: 'Total, cash vs card, profit and the top five, at closing time.',
  },
  {
    kind: 'Low stock',
    time: '07:00',
    text: 'Low stock: White bread (3), Fresh milk (8), Coke 500ml (5).',
    why: 'Only sends when something is at or below its reorder level.',
  },
  {
    kind: 'Receipt',
    time: '14:32',
    text: `Receipt A1042 · E66.50 · ${SHOP} · Thank you.`,
    why: 'One tap at the till. The customer has it before they leave the counter.',
  },
  {
    kind: 'Statement',
    time: '09:15',
    text: 'Statement for Nomsa D.: balance E320, due Friday.',
    why: 'Send a credit customer their balance and due date from their card.',
  },
];

export const FAQ: { q: string; a: string }[] = [
  { q: 'Does it work without internet?', a: 'Yes. Sales save on the phone and sync the moment the signal returns. Each sale carries its own ID, so the server refuses duplicates and nothing is counted twice.' },
  { q: 'How does it stop money going missing?', a: 'Every cashier rings up on their own PIN, so every sale, void and refund has a name on it. At closing you count the drawer and the variance shows immediately. The audit log keeps every price change and stock adjustment.' },
  { q: 'What does it cost?', a: 'The till, stock, staff, suppliers, credit book and reports are free forever on Till. Shop is E199 a month and adds the daily WhatsApp report, low-stock alerts and unlimited assistant questions; Busy is E499 for higher volume. Anything past your plan runs on credits, where 1 credit is E1: an assistant question is 1, a WhatsApp is 3, an email is 1, and an SMS is 20 because one text really does cost us about eight times a WhatsApp. Credits never expire.' },
  { q: 'How do I pay for a plan?', a: 'We email you an invoice each month with a payment link, so you can pay by card, mobile money or whatever suits you. Your plan starts the moment it is paid. There is no card to store and nothing renews behind your back.' },
  { q: 'Do I need a computer or a special till?', a: 'No. Any phone or tablet with a browser is the till. Your camera scans barcodes. If you want speed, add a Bluetooth scanner or a receipt printer later.' },
  { q: 'Can I run more than one shop?', a: 'Today each YeboID owner runs one shop. Multi-shop is being built. If you need it now, tell us on WhatsApp and we will put you on the list.' },
  { q: 'How do my staff log in?', a: 'You sign in with YeboID on your phone number. Each cashier or manager gets a PIN on the shop’s device, so every sale and every void has a name on it.' },
  { q: 'Which languages?', a: 'The app runs in English and French, with prices in your currency across 22 African countries.' },
];
