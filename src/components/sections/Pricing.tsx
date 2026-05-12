import { Price } from '@/components/Price';
import { useLocale } from '@/hooks/useLocale';

const FREE_FEATURES = [
  'Unlimited products & categories',
  'Unlimited sales & transactions',
  'Stock management & movements',
  'Unlimited staff accounts',
  'Daily, weekly, monthly reports',
  'Barcode scanning (phone camera)',
  'Returns, refunds & suppliers',
  'Multi-shop & multi-location',
  'Offline-first PWA',
];

export function Pricing() {
  const { t } = useLocale();

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pricing.title')}</h2>
          <p className="text-xl text-gray-400">{t('pricing.subtitle')}</p>
        </div>

        {/* Free-everything callout */}
        <div className="mb-12 bg-gradient-to-r from-brand-900/40 to-emerald-900/40 border border-brand-600/50 rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-brand-300 mb-4 text-center">Everything below is free — forever.</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-gray-300">
            {FREE_FEATURES.map((f) => (
              <div key={f} className="flex items-center gap-2">
                <span className="text-brand-400">✓</span> {f}
              </div>
            ))}
          </div>
        </div>

        {/* What costs credits */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-2 text-center">You only pay when you use these</h3>
          <p className="text-gray-400 text-center mb-8">
            These are the only actions that cost YeboMart real money on the back end, so we pass the cost through as
            credits.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <UsageCard emoji="✨" title="AI Assistant (Flash)" cost="0.5 credits" body="Per question to your shop's AI assistant." />
            <UsageCard emoji="🧠" title="AI Assistant (Pro)" cost="1 credit" body="Heavier reasoning for harder questions." />
            <UsageCard
              emoji="📱"
              title="SMS / WhatsApp"
              cost="1–2 credits"
              body="1 per SMS, 2 per WhatsApp. Daily reports, receipts, alerts."
            />
            <UsageCard emoji="📧" title="Email" cost="1 credit" body="Per email receipt or report." />
          </div>
        </div>

        {/* Top-up packs */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-2 text-center">Top up when you need credits</h3>
          <p className="text-gray-400 text-center mb-8">
            1 credit = <Price szl={1} />. Buy any amount. Bigger packs come with a discount.
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Pack
              name="Starter"
              audience="For occasional AI use"
              priceSzl={100}
              perks={[
                '100 credits',
                '~200 AI questions (Flash)',
                'Or ~100 SMS messages',
              ]}
            />
            <Pack
              name="Standard"
              audience="For daily AI + reports"
              priceSzl={450}
              originalSzl={500}
              creditsLabel="500 credits"
              effectiveSzl={0.9}
              perks={['500 credits', '~1,000 AI questions']}
              highlighted
            />
            <Pack
              name="Bulk"
              audience="For heavy usage"
              priceSzl={1600}
              originalSzl={2000}
              creditsLabel="2,000 credits"
              effectiveSzl={0.8}
              perks={['2,000 credits', '~4,000 AI questions']}
              saveLabel="SAVE 20%"
            />
          </div>
          <p className="text-gray-500 text-sm text-center mt-6">
            Need a custom amount? Top up in any multiple of <Price szl={10} /> from inside the app.
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">Setup is free • Free training • 24/7 support • Cancel anytime — no contract</p>
          <p className="text-gray-500 text-sm mt-2">Prices shown in your local currency where supported.</p>
        </div>
      </div>
    </section>
  );
}

function UsageCard({
  emoji,
  title,
  cost,
  body,
}: {
  emoji: string;
  title: string;
  cost: string;
  body: string;
}) {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-5">
      <div className="text-2xl mb-2">{emoji}</div>
      <h4 className="font-bold mb-1">{title}</h4>
      <p className="text-2xl font-bold text-purple-400">{cost}</p>
      <p className="text-xs text-gray-500 mt-2">{body}</p>
    </div>
  );
}

function Pack({
  name,
  audience,
  priceSzl,
  originalSzl,
  creditsLabel,
  effectiveSzl,
  perks,
  highlighted,
  saveLabel,
}: {
  name: string;
  audience: string;
  priceSzl: number;
  originalSzl?: number;
  creditsLabel?: string;
  effectiveSzl?: number;
  perks: string[];
  highlighted?: boolean;
  saveLabel?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-6 ${
        highlighted
          ? 'bg-gradient-to-b from-brand-900/50 to-gray-800/50 border-2 border-brand-600'
          : 'bg-gray-800/50 border border-gray-700'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 px-3 py-0.5 rounded-full text-xs font-medium">
          Popular · 10% off
        </div>
      )}
      {saveLabel && (
        <div className="absolute top-3 right-3">
          <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
            {saveLabel}
          </span>
        </div>
      )}
      <h4 className={`text-lg font-bold mb-1 ${highlighted ? 'mt-2' : ''}`}>{name}</h4>
      <p className="text-sm text-gray-400 mb-4">{audience}</p>
      <div className="mb-4">
        {originalSzl && (
          <div className="text-sm text-gray-500 line-through">
            <Price szl={originalSzl} />
          </div>
        )}
        <Price szl={priceSzl} className="text-3xl font-bold text-white" />{' '}
        {creditsLabel && <span className="text-green-400 text-sm">for {creditsLabel}</span>}
      </div>
      <ul className="space-y-2 text-sm mb-6">
        {perks.map((p) => (
          <li key={p} className="flex items-center gap-2 text-gray-300">
            <span className="text-brand-400">•</span> {p}
          </li>
        ))}
        {effectiveSzl !== undefined && (
          <li className="flex items-center gap-2 text-gray-300">
            <span className="text-brand-400">•</span> Effective <Price szl={effectiveSzl} /> per credit
          </li>
        )}
        <li className="flex items-center gap-2 text-gray-400">
          <span className="text-gray-500">•</span> Credits never expire
        </li>
      </ul>
      <a
        href="https://app.yebomart.com"
        className={`block w-full text-center py-2 rounded-lg text-sm font-medium transition ${
          highlighted
            ? 'bg-brand-600 hover:bg-brand-500'
            : 'border border-green-600 text-green-400 hover:bg-green-600 hover:text-white'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
