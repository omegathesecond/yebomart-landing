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
  { value: '“Are you running a shop?”', label: 'Easy till', body: 'Tap or scan the items, check the total and finish the sale. Your sales and stock stay together.' },
  { value: '“What is running low?”', label: 'Smart stock tracking', body: 'See what is left as goods sell. Add new stock when it arrives so the next count starts from what you actually have.' },
  { value: '“Keep me updated.”', label: 'Optional WhatsApp updates', body: 'Switch on daily low-stock updates to see which items need attention. Messages use your available plan allowance.' },
  { value: '“Does the cash match?”', label: 'Cash at closing', body: 'Count the money in the drawer and compare it with the day’s sales. Check any difference before you close.' },
];

export const LOOP: { n: string; title: string; body: string }[] = [
  { n: '01', title: 'Till', body: 'Cashier rings up the sale' },
  { n: '02', title: 'Stock', body: 'Follow what is left after sales' },
  { n: '03', title: 'Cash at closing', body: 'Count the drawer and check the difference' },
  { n: '04', title: 'WhatsApp', body: 'Turn on shop updates when your allowance covers them' },
  { n: '05', title: 'Assistant', body: 'Ask a question about your shop' },
];

export const STEPS: { n: string; title: string; body: string }[] = [
  { n: '01', title: 'Sign in and name your shop', body: 'Use your YeboID and follow the sign-in steps. Choose the shop details shown in the app.' },
  { n: '02', title: 'Add your products and stock', body: 'Scan a barcode or enter the product. Check the cost, selling price and amount you have.' },
  { n: '03', title: 'Make your first sale', body: 'Tap or scan the items, check the total and record the payment. Finish the sale and give the receipt.' },
];

export const UNDER_HOOD: { icon: IconName; title: string; body: string }[] = [
  { icon: 'sync', title: 'Keep selling without a signal', body: 'Sales save on the device and sync when it reconnects. Check the sync status before relying on the online totals.' },
  { icon: 'pin', title: 'Staff PINs', body: 'Give each cashier their own PIN so you can see who made a sale, void or refund.' },
  { icon: 'cash', title: 'Count the cash at closing', body: 'Enter the opening cash, then count the drawer at closing. Compare it with what the till expects.' },
];

export const FEATURES: { icon: IconName; title: string; body: string }[] = [
  { icon: 'cash', title: 'Cash at closing', body: 'Count the drawer and compare it with the expected cash. Check the day’s sales if the figures differ.' },
  { icon: 'staff', title: 'Staff PINs', body: 'Every cashier has a PIN. Every sale, void and refund carries their name, with a sales report per person.' },
  { icon: 'stock', title: 'Smart stock tracking', body: 'Follow stock counts and new deliveries. Switch on daily WhatsApp low-stock updates when your plan allowance covers them.' },
  { icon: 'credit', title: 'Customer credit book', body: 'Who owes what, since when. Send a statement by WhatsApp in one tap instead of chasing.' },
  { icon: 'till', title: 'Easy POS', body: 'Tap or scan items, check the basket and finish the sale. Keep the receipt with the shop’s sales.' },
  { icon: 'returns', title: 'Returns and exchanges', body: 'Record the return or exchange so the sale and stock stay connected.' },
  { icon: 'supplier', title: 'Suppliers and orders', body: 'Create an order, enter the goods received and keep track of what you paid or still owe.' },
  { icon: 'expense', title: 'Shop expenses', body: 'Add rent, airtime and transport so your figures include the money spent running the shop.' },
  { icon: 'audit', title: 'See who changed what', body: 'Check who changed a price, voided a sale or adjusted a stock count, and when.' },
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
    why: 'An optional daily shop summary. Turn it on when your plan allowance covers it.',
  },
  {
    kind: 'Low stock',
    time: '07:00',
    text: 'Low stock: White bread (3), Fresh milk (8), Coke 500ml (5).',
    why: 'Optional daily WhatsApp updates show items at or below their low-stock level. Messages need available allowance.',
  },
  {
    kind: 'Receipt',
    time: '14:32',
    text: `Receipt A1042 · E66.50 · ${SHOP} · Thank you.`,
    why: 'Choose to share a receipt from the sale. Check the sending result.',
  },
  {
    kind: 'Statement',
    time: '09:15',
    text: 'Statement for Nomsa D.: balance E320, due Friday.',
    why: 'Send a credit customer their balance and due date from their card.',
  },
];

export const FAQ: { q: string; a: string }[] = [
  { q: 'Can WhatsApp tell me what is running low?', a: 'Yes. Switch on low-stock updates in your shop settings and check the receiving phone number. The daily check can send items at or below their low-stock level when your plan or credit allowance covers the message.' },
  { q: 'Can I sell without internet?', a: 'Sales save on the device and sync when it reconnects. Check the sync status before relying on the online totals.' },
  { q: 'How do I check the cash?', a: 'Enter the opening cash. At closing, count the drawer and compare it with what the till expects. Each cashier uses their own PIN, so you can check the sales and changes behind a difference.' },
  { q: 'What does it cost?', a: 'Check the current plans and prices before choosing. WhatsApp updates and assistant use depend on your plan or credit allowance. The app shows the options for your shop.' },
  { q: 'How do I pay for a plan?', a: 'Choose a plan in the app and follow the invoice and payment steps shown. Check the payment result and the plan shown for your shop.' },
  { q: 'Do I need a computer or a special till?', a: 'No. Any phone or tablet with a browser is the till. Your camera scans barcodes. If you want speed, add a Bluetooth scanner or a receipt printer later.' },
  { q: 'Can I run more than one shop?', a: 'Today each YeboID owner runs one shop. Multi-shop is being built. If you need it now, tell us on WhatsApp and we will put you on the list.' },
  { q: 'How do my staff log in?', a: 'You sign in with YeboID on your phone number. Each cashier or manager gets a PIN on the shop’s device, so every sale and every void has a name on it.' },
  { q: 'Which languages?', a: 'The app runs in English and French, with prices in your currency across 22 African countries.' },
];
