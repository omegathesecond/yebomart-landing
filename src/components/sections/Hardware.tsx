import { Price } from '@/components/Price';

const TUCKSHOP_FEATURES = [
  'Bluetooth Scanner (2D)',
  'Charging dock',
  'Setup assistance',
  '30-min video training',
  'Quick-start guide',
];

const RETAIL_FEATURES = [
  'Premium Scanner',
  'Receipt Printer (58mm)',
  'Phone/Tablet Stand',
  'Full setup & config',
  '1-hour training',
  '90-day priority support',
];

const ENTERPRISE_FEATURES = [
  '2× Pro Scanners',
  '2× Receipt Printers',
  'Tablet + Stand',
  'Cash Drawer',
  'On-site installation',
  'Half-day training',
  '1-year support',
];

export function Hardware() {
  return (
    <section id="hardware" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-900/50 border border-amber-700 rounded-full px-4 py-2 mb-6">
            <span className="text-lg">📦</span>
            <span className="text-sm text-amber-300">Hardware Bundles</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Speed Up With Barcode Scanners</h2>
          <p className="text-xl text-gray-400">
            Professional hardware packages for faster checkout. All prices include VAT.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Free Camera */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-1">Camera Scan</h3>
            <p className="text-sm text-gray-400 mb-4">Use your phone camera</p>
            <div className="mb-4">
              <span className="text-3xl font-bold text-brand-400">FREE</span>
            </div>
            <ul className="space-y-2 text-sm mb-6 text-gray-300">
              <li className="flex items-center gap-2"><span className="text-brand-400">✓</span> Uses phone camera</li>
              <li className="flex items-center gap-2"><span className="text-brand-400">✓</span> Works immediately</li>
              <li className="flex items-center gap-2"><span className="text-brand-400">✓</span> EAN, UPC, QR codes</li>
              <li className="flex items-center gap-2">
                <span className="text-gray-500">—</span>
                <span className="text-gray-500">Best for low volume</span>
              </li>
            </ul>
            <p className="text-xs text-gray-500">Already included with every shop</p>
          </div>

          {/* Tuckshop Essential */}
          <HardwarePack
            emoji="🏪"
            name="Tuckshop Essential"
            audience="Small shops, 5-50 products"
            priceSzl={649}
            features={TUCKSHOP_FEATURES}
            checkColor="brand"
            buttonText="Order Now"
            waText="Tuckshop%20Essential"
          />

          {/* Retail Pro */}
          <HardwarePack
            emoji="🛒"
            name="Retail Pro"
            audience="Busy shops, 50-500 products"
            priceSzl={3499}
            financeSzl={349}
            features={RETAIL_FEATURES}
            checkColor="amber"
            buttonText="Order Now"
            waText="Retail%20Pro"
            highlighted
          />

          {/* Enterprise */}
          <HardwarePack
            emoji="🏬"
            name="Enterprise"
            audience="Supermarkets & chains"
            priceSzl={10999}
            financeSzl={999}
            features={ENTERPRISE_FEATURES}
            checkColor="brand"
            buttonText="Contact Sales"
            waText="Enterprise%20hardware%20package"
          />
        </div>

        {/* Scanner Benefits */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Benefit emoji="⚡" title="3× Faster Checkout" body="Scan instead of searching. One beep and it's done." />
          <Benefit emoji="🎯" title="Zero Pricing Errors" body="Scanner pulls the correct price every time. No mistakes." />
          <Benefit emoji="📊" title="Perfect Stock Tracking" body="Every scanned sale updates inventory automatically." />
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            All hardware packages include delivery within Eswatini • 6-month warranty • WhatsApp support
          </p>
        </div>
      </div>
    </section>
  );
}

function HardwarePack({
  emoji,
  name,
  audience,
  priceSzl,
  financeSzl,
  features,
  checkColor,
  buttonText,
  waText,
  highlighted,
}: {
  emoji: string;
  name: string;
  audience: string;
  priceSzl: number;
  financeSzl?: number;
  features: string[];
  checkColor: 'brand' | 'amber';
  buttonText: string;
  waText: string;
  highlighted?: boolean;
}) {
  const checkClass = checkColor === 'amber' ? 'text-amber-400' : 'text-brand-400';
  const buttonClass = highlighted
    ? 'bg-amber-600 hover:bg-amber-500'
    : checkColor === 'amber'
    ? 'bg-brand-600 hover:bg-brand-500'
    : 'border border-gray-600 hover:border-gray-500';

  return (
    <div
      className={`relative rounded-2xl p-6 ${
        highlighted
          ? 'bg-gradient-to-b from-amber-900/30 to-gray-800/50 border-2 border-amber-600'
          : 'bg-gray-800/50 border border-gray-700'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 px-3 py-0.5 rounded-full text-xs font-medium">
          Best Value
        </div>
      )}
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-sm text-gray-400 mb-4">{audience}</p>
      <div className="mb-1">
        <Price szl={priceSzl} className="text-3xl font-bold" />
        <span className="text-gray-500 text-sm"> once-off</span>
      </div>
      {financeSzl !== undefined && (
        <p className={`text-xs mb-4 ${highlighted ? 'text-amber-400' : 'text-gray-400'}`}>
          or <Price szl={financeSzl} />/month × 12
        </p>
      )}
      <ul className="space-y-2 text-sm mb-6 text-gray-300 mt-4">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className={checkClass}>✓</span> {f}
          </li>
        ))}
      </ul>
      <a
        href={`https://wa.me/26878422613?text=Hi%2C%20I%20want%20the%20${waText}%20package`}
        className={`block w-full text-center py-2.5 rounded-lg text-sm font-medium transition ${buttonClass}`}
      >
        {buttonText}
      </a>
    </div>
  );
}

function Benefit({ emoji, title, body }: { emoji: string; title: string; body: string }) {
  return (
    <div className="bg-gray-800/30 rounded-xl p-6 text-center">
      <div className="text-3xl mb-3">{emoji}</div>
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-sm text-gray-400">{body}</p>
    </div>
  );
}
