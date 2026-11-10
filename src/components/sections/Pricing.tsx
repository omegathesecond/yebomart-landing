import { Price } from '@/components/Price';
import { useLocale } from '@/hooks/useLocale';
import { APP_URL, WHATSAPP } from '@/data/copy';
import { usePlans } from '@/hooks/usePlans';
import { Page, Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

export function Pricing() {
  const { t } = useLocale();
  const { plans, loading: plansLoading, error: plansError, retry: retryPlans } = usePlans();

  return (
    <Section id="pricing" tone="sand">
      <Page className="py-24 lg:py-32">
        <SectionHead index="05" label="Pricing" heading={t('pricing.title')} lede={t('pricing.subtitle')} />

        {/* Read current plans from the billing API. */}
        {plansLoading ? (
          <div className="mt-14 grid gap-4 lg:grid-cols-3" aria-busy="true" aria-label="Loading plans">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-[420px] animate-pulse rounded-sharp border border-line bg-sand/60" />
            ))}
          </div>
        ) : plansError || !plans ? (
          <div className="mt-14 rounded-sharp border border-line bg-cream p-8 text-center">
            <Icon name="offline" className="mx-auto h-7 w-7 text-brick" />
            <h3 className="mt-4 font-display text-[20px] font-semibold">We can't show prices right now.</h3>
            <p className="lede mx-auto mt-2 max-w-[46ch] text-[15px] leading-[1.6]">
              Prices could not load. Try again or ask us on WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={retryPlans}
                className="inline-flex items-center justify-center gap-2 rounded-sharp bg-brand px-5 py-3 font-display text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-ink hover:text-cream"
              >
                Try again
              </button>
              <Button href={WHATSAPP} variant="ghost" external>
                <Icon name="whatsapp" className="h-4 w-4" />
                Ask on WhatsApp
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {plans.map((tier, i) => {
              const highlighted = tier.code === 'SHOP';
              return (
                <Reveal
                  key={tier.code}
                  delay={i * 90}
                  className={`relative flex flex-col rounded-sharp border bg-cream p-7 ${
                    highlighted ? 'border-brand ring-1 ring-brand' : 'border-line'
                  }`}
                >
                  <h3 className="font-display text-[22px] font-semibold">{tier.name}</h3>
                  <p className="mt-1 text-[14px] leading-[1.5] text-mute">{tier.tagline}</p>
                  <div className="mt-5 flex items-baseline gap-1.5">
                    <Price szl={tier.price_szl} className="font-display text-[38px] font-bold leading-none tracking-tightest" />
                    <span className="font-mono text-[11px] uppercase tracking-eyebrow text-mute">/month</span>
                  </div>
                  <ul className="mt-6 space-y-2.5 text-[14.5px]">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button href={APP_URL} variant={highlighted ? 'primary' : 'ghost'} className="mt-7">
                    {`Choose ${tier.name}`}
                  </Button>
                </Reveal>
              );
            })}
          </div>
        )}
        <p className="mt-6 text-[13px] leading-[1.5] text-mute">
          Check the plan, included use and payment options in the app before paying.
        </p>

        <div className="mt-16">
          <Reveal>
            <Eyebrow>Messages and assistant use</Eyebrow>
            <h3 className="mt-3 font-display text-[26px] font-bold leading-tight tracking-tightest">
              See what your plan includes.
            </h3>
            <p className="lede mt-3 max-w-[62ch] text-[15px] leading-[1.6]">
              Your plan includes set amounts of messages and assistant use. Some actions can use credits after that
              amount runs out. Open the app to check what you have left, what needs a top-up and the current prices.
            </p>
            <Button href={APP_URL} variant="ghost" className="mt-6">
              Check plans and credits
            </Button>
          </Reveal>
        </div>
      </Page>
    </Section>
  );
}
