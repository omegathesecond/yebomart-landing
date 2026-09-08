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

export const PROOF: { value: string; label: string; body: string }[] = [
  { value: 'E0/mo', label: 'Free core', body: 'The till, stock, staff and reports are free. Forever.' },
  { value: 'Offline', label: 'Keeps selling', body: 'Sales save on the phone and sync when the signal returns. Never counted twice.' },
  { value: '22', label: 'Countries', body: 'Prices in your currency, from Eswatini to Kenya to Nigeria.' },
  { value: '0', label: 'Extra hardware', body: 'Your phone camera is the barcode scanner.' },
];

export const LOOP: { n: string; title: string; body: string }[] = [
  { n: '01', title: 'Till', body: 'Cashier rings up the sale' },
  { n: '02', title: 'Stock', body: "Every item's count drops" },
  { n: '03', title: 'Cash-up', body: 'Counted cash vs. till total' },
  { n: '04', title: 'Report', body: 'Day summary lands on WhatsApp' },
  { n: '05', title: 'Assistant', body: 'Reads it all, tells you what to do' },
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
  { icon: 'till', title: 'POS & mobile till', body: 'A full-screen till built for one thumb. Scan, tap, charge.' },
  { icon: 'stock', title: 'Stock & reorder', body: "Live counts, movements, receive stock, and a reorder list built from what's actually selling." },
  { icon: 'cash', title: 'Cash-up & Z-report', body: 'Float in, cash counted out, variance and Z-report in one tap.' },
  { icon: 'staff', title: 'Staff & PINs', body: 'Cashiers and managers with their own PINs and per-person sales reports.' },
  { icon: 'returns', title: 'Returns & exchanges', body: 'Refund or swap an item. Stock and takings correct themselves.' },
  { icon: 'supplier', title: 'Suppliers & purchase orders', body: 'Raise a PO, receive against it, record payments, see what you owe.' },
  { icon: 'credit', title: 'Customer credit book', body: 'Who owes what, and a statement you can send by WhatsApp.' },
  { icon: 'expense', title: 'Expenses', body: 'Rent, airtime, transport. So profit means profit.' },
  { icon: 'audit', title: 'Audit log', body: 'Who did what, when. Voids, edits, adjustments.' },
  { icon: 'tax', title: 'VAT & tax', body: 'Set your rate once. Receipts and reports respect it.' },
];

export const ASSISTANT_QA: { q: string; a: string }[] = [
  { q: "What's not selling?", a: "Three items haven't moved in 30 days: Rice 10kg (2 sold), Sunlight 2kg (1), Candles ×6 (0). That's E1,240 sitting on the shelf. Discount the candles first." },
  { q: 'What should I restock this week?', a: "Bread: you sell about 20 a day and have 15 left. Milk: 3 days left at this pace. Eggs are fine, you're overstocked by about 30%." },
  { q: "How's the week going?", a: 'E18,420 so far, up 9% on last week. Tuesday was slow. Margin is holding at 22%, mostly from airtime and bread.' },
  { q: 'Which product makes me the most?', a: 'By margin, cooked meals at 38%, then airtime by volume. Simba chips is your thinnest at 5%.' },
];

export const ASSISTANT_FACTS: { icon: IconName; text: string }[] = [
  { icon: 'mic', text: 'Speak or type' },
  { icon: 'spark', text: 'Name it yourself' },
  { icon: 'cash', text: 'Half a credit per question' },
];

export const MESSAGES: { kind: string; time: string; text: string }[] = [
  { kind: 'Daily report', time: '18:00', text: `Today at ${SHOP}: E4,250 from 47 sales. Cash E3,890 · Card E360. Net profit E890. Top: Bread, Milk, Airtime, Coke 500ml, Eggs.` },
  { kind: 'Low stock', time: '07:00', text: 'Low stock: White bread (3), Fresh milk (8), Coke 500ml (5).' },
  { kind: 'SMS receipt', time: '14:32', text: `Receipt A1042 · E66.50 · ${SHOP} · Thank you.` },
  { kind: 'Statement', time: '09:15', text: 'Statement for Nomsa D.: balance E320, due Friday.' },
];

export const FAQ: { q: string; a: string }[] = [
  { q: 'Does it work without internet?', a: 'Yes. Sales save on the phone and sync the moment the signal returns. Each sale carries its own ID, so the server refuses duplicates and nothing is counted twice.' },
  { q: 'What does it cost?', a: 'The till, stock, staff, suppliers, customers and reports are free. You only pay for things that cost us money: 1 credit is E1. An assistant question is half a credit, an SMS is 1, a WhatsApp message is 2. Credits never expire.' },
  { q: 'Do I need a computer or a special till?', a: 'No. Any phone or tablet with a browser is the till. Your camera scans barcodes. If you want speed, add a Bluetooth scanner or a receipt printer later.' },
  { q: 'Can I run more than one shop?', a: 'Today each YeboID owner runs one shop. Multi-shop is being built. If you need it now, tell us on WhatsApp and we will put you on the list.' },
  { q: 'How do my staff log in?', a: 'You sign in with YeboID on your phone number. Each cashier or manager gets a PIN on the shop\'s device, so every sale and every void has a name on it.' },
  { q: 'Which languages?', a: 'The app runs in English and French. Reports and receipts use your currency and your VAT rate.' },
];
