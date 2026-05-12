import { useLocale } from '@/hooks/useLocale';
import { Price } from '@/components/Price';

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-900/50 border border-purple-700 rounded-full px-4 py-2 mb-6">
            <span className="text-lg">🤖</span>
            <span className="text-sm text-purple-300">{t('hero.badge')}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            {t('hero.title1')}
            <br />
            <span className="text-brand-400">{t('hero.title2')}</span>
          </h1>

          <p className="text-xl text-gray-400 mb-10">{t('hero.subtitle')}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.yebomart.com"
              className="w-full sm:w-auto bg-brand-600 hover:bg-brand-500 px-8 py-4 rounded-xl font-semibold text-lg transition"
            >
              {t('hero.cta')}
            </a>
            <a
              href="tel:+26878422613"
              className="w-full sm:w-auto border border-gray-700 hover:border-gray-600 px-8 py-4 rounded-xl font-semibold text-lg transition"
            >
              {t('hero.callCta')}
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-6">{t('hero.tagline')}</p>
        </div>

        {/* AI Chat Preview */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
            <div className="bg-gray-800/50 px-4 py-3 flex items-center gap-3 border-b border-gray-700">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">🤖</div>
              <div>
                <div className="font-medium text-sm">Your AI Assistant</div>
                <div className="text-xs text-gray-400">Always watching your business</div>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shrink-0">🤖</div>
                <div className="bg-gray-800 rounded-2xl rounded-tl-none p-3 max-w-md">
                  <p className="text-sm">Good morning! Here's your shop update:</p>
                  <p className="text-sm mt-2">
                    📈 Yesterday you made{' '}
                    <strong className="text-brand-400">
                      <Price szl={4250} />
                    </strong>{' '}
                    — up 15% from last week
                  </p>
                  <p className="text-sm mt-1">
                    ⚠️ <strong className="text-amber-400">Bread and Milk</strong> running low — I suggest ordering today
                  </p>
                  <p className="text-sm mt-1">
                    🔍 I noticed <strong className="text-red-400">3 cash discrepancies</strong> on Tuesday. Want me to show you the details?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
