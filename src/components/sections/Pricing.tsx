import { Price } from '@/components/Price';
import { useLocale } from '@/hooks/useLocale';
import { APP_URL, TIERS } from '@/data/copy';
import { Page, Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Icon, type IconName } from '@/components/ui/Icon';


const USAGE: { icon: IconName; title: string; cost: string; body: string }[] = [
  { icon: 'spark', title: 'Assistant question', cost: '1 credit', body: 'Anything you ask, typed or spoken. Background insights are half.' },
  { icon: 'chat', title: 'WhatsApp', cost: '3 credits', body: 'Daily report, low-stock alert, receipt or statement to a customer.' },
  { icon: 'mail', title: 'Email', cost: '1 credit', body: 'Per emailed report.' },
  { icon: 'sms', title: 'SMS', cost: '20 credits', body: 'Only if you ask for it. A text costs us eight times a WhatsApp, and we pass that through rather than hide it.' },
];

export function Pricing() {
  const { t } = useLocale();

  return (
    <Section id="pricing" tone="sand">
      <Page className="py-24 lg:py-32">
        <SectionHead index="05" label="Pricing" heading={t('pricing.title')} lede={t('pricing.subtitle')} />

        {/* The plans, first: this is what most shops actually buy. */}
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal
              key={tier.code}
              delay={i * 90}
              className={`relative flex flex-col rounded-sharp border bg-cream p-7 ${
                tier.highlighted ? 'border-brand ring-1 ring-brand' : 'border-line'
              }`}
            >
              {tier.highlighted ? (
                <span className="absolute -top-3 left-6 rounded-sharp bg-brand px-2 py-1 font-mono text-[10px] uppercase tracking-eyebrow text-ink">
                  Most shops
                </span>
              ) : null}
              <h3 className="font-display text-[22px] font-semibold">{tier.name}</h3>
              <p className="mt-1 text-[14px] leading-[1.5] text-mute">{tier.tagline}</p>
              <div className="mt-5 flex items-baseline gap-1.5">
                {tier.priceSzl === 0 ? (
                  <span className="font-display text-[38px] font-bold leading-none tracking-tightest">Free</span>
                ) : (
                  <>
                    <Price szl={tier.priceSzl} className="font-display text-[38px] font-bold leading-none tracking-tightest" />
                    <span className="font-mono text-[11px] uppercase tracking-eyebrow text-mute">/month</span>
                  </>
                )}
              </div>
              <ul className="mt-6 space-y-2.5 text-[14.5px]">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                href={APP_URL}
                variant={tier.highlighted ? 'primary' : 'ghost'}
                className="mt-7"
              >
                {tier.priceSzl === 0 ? 'Start free' : `Get ${tier.name}`}
              </Button>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-eyebrow text-mute">
          Billed by invoice · Pay by card or mobile money · Cancel any time · No card stored
        </p>

        <div className="mt-16">
          <Reveal>
            <Eyebrow>Beyond your plan</Eyebrow>
            <h3 className="mt-3 font-display text-[26px] font-bold leading-tight tracking-tightest">
              Nothing stops working when an allowance runs out.
            </h3>
            <p className="lede mt-3 max-w-[62ch] text-[15px] leading-[1.6]">
              Anything past your plan runs on credits, and so does everything on the free Till plan. These are the only
              actions that cost YeboMart real money, so we pass that cost through rather than bury it. 1 credit ={' '}
              <Price szl={1} className="text-ink" />.
            </p>
          </Reveal>
          <ul className="mt-6 grid gap-px overflow-hidden rounded-sharp border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {USAGE.map((u, i) => (
              <Reveal as="li" key={u.title} delay={i * 70} className="bg-cream p-6">
                <Icon name={u.icon} className="h-6 w-6 text-brick" />
                <h4 className="mt-4 font-display text-[16px] font-semibold">{u.title}</h4>
                <div className="mt-2 font-mono text-[22px] font-medium tabular-nums">{u.cost}</div>
                <p className="mt-1.5 text-[13px] leading-[1.5] text-mute">{u.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <Reveal>
            <Eyebrow>Top up when you need credits</Eyebrow>
            <p className="lede mt-3 max-w-[60ch] text-[15px] leading-[1.6]">
              Buy any amount. Bigger packs come with a discount. Credits never expire.
            </p>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Pack name="Starter" audience="For occasional assistant use" priceSzl={100} perks={['100 credits', '~200 assistant questions', 'Or ~100 SMS messages']} delay={0} />
            <Pack
              name="Standard"
              audience="For daily questions + reports"
              priceSzl={450}
              originalSzl={500}
              creditsLabel="500 credits"
              effectiveSzl={0.9}
              perks={['500 credits', '~1,000 assistant questions']}
              tag="Popular · 10% off"
              highlighted
              delay={90}
            />
            <Pack
              name="Bulk"
              audience="For heavy usage"
              priceSzl={1600}
              originalSzl={2000}
              creditsLabel="2,000 credits"
              effectiveSzl={0.8}
              perks={['2,000 credits', '~4,000 assistant questions']}
              tag="Save 20%"
              delay={180}
            />
          </div>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-eyebrow text-mute">
            Setup free · Free training · WhatsApp support · No contract · Top up any multiple of <Price szl={10} /> in the app
          </p>
        </div>
      </Page>
    </Section>
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
  tag,
  highlighted,
  delay,
}: {
  name: string;
  audience: string;
  priceSzl: number;
  originalSzl?: number;
  creditsLabel?: string;
  effectiveSzl?: number;
  perks: string[];
  tag?: string;
  highlighted?: boolean;
  delay: number;
}) {
  return (
    <Reveal
      delay={delay}
      className={`relative flex flex-col rounded-sharp border bg-cream p-7 ${
        highlighted ? 'border-brand ring-1 ring-brand' : 'border-line'
      }`}
    >
      {tag ? (
        <span
          className={`absolute -top-3 left-6 rounded-sharp px-2 py-1 font-mono text-[10px] uppercase tracking-eyebrow ${
            highlighted ? 'bg-brand text-ink' : 'bg-ink text-cream'
          }`}
        >
          {tag}
        </span>
      ) : null}
      <h4 className="font-display text-[20px] font-semibold">{name}</h4>
      <p className="mt-1 text-[14px] text-mute">{audience}</p>
      <div className="mt-5 flex flex-wrap items-baseline gap-x-2">
        <Price szl={priceSzl} className="font-display text-[34px] font-bold leading-none tracking-tightest" />
        {originalSzl ? <Price szl={originalSzl} className="font-mono text-[13px] text-mute line-through" /> : null}
      </div>
      {creditsLabel ? <p className="mt-1.5 font-mono text-[11px] uppercase tracking-eyebrow text-brick">for {creditsLabel}</p> : null}
      <ul className="mt-5 space-y-2 text-[14px]">
        {perks.map((p) => (
          <li key={p} className="flex items-start gap-2.5">
            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
            {p}
          </li>
        ))}
        {effectiveSzl !== undefined ? (
          <li className="flex items-start gap-2.5">
            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
            <span>
              Effective <Price szl={effectiveSzl} /> per credit
            </span>
          </li>
        ) : null}
        <li className="flex items-start gap-2.5 text-mute">
          <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0" />
          Credits never expire
        </li>
      </ul>
      <Button href={APP_URL} variant={highlighted ? 'primary' : 'ghost'} className="mt-7">
        Top up in the app
      </Button>
    </Reveal>
  );
}
