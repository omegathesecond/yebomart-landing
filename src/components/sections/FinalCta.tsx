import type { CSSProperties } from 'react';
import { useLocale } from '@/hooks/useLocale';
import { APP_URL, PHONE_HREF, PHONE_LABEL, WHATSAPP } from '@/data/copy';
import { Page, Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

const d = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

export function FinalCta() {
  const { t } = useLocale();
  return (
    <Section tone="brand" className="overflow-hidden">
      <div aria-hidden="true" className="absolute -right-24 -top-24 h-96 w-96 rounded-full border-[32px] border-ink/10" />
      <div aria-hidden="true" className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full border-[24px] border-cream/20" />
      <Page className="relative grid gap-10 py-20 lg:grid-cols-[1fr_auto] lg:items-end lg:py-28">
        <Reveal self={false}>
          <Eyebrow className="rv">Get started</Eyebrow>
          <h2 className="rv mt-5 max-w-[16ch] font-display text-[clamp(34px,5vw,60px)] font-bold leading-[1.04] tracking-tightest" style={d(80)}>
            {t('cta.title')}
          </h2>
          <p className="lede rv mt-5 max-w-[52ch] text-[17px] leading-[1.6]" style={d(160)}>
            {t('cta.body')}
          </p>
        </Reveal>
        <Reveal className="flex flex-col gap-3 sm:flex-row lg:flex-col" delay={220}>
          <Button href={APP_URL} variant="ink" size="lg">
            {t('hero.cta')}
            <Icon name="arrow" className="h-4 w-4" />
          </Button>
          <Button href={WHATSAPP} variant="ghost" size="lg" external>
            <Icon name="whatsapp" className="h-4 w-4" />
            {t('hero.whatsapp')}
          </Button>
          <Button href={PHONE_HREF} variant="ghost" size="lg">
            <Icon name="phone" className="h-4 w-4" />
            {PHONE_LABEL}
          </Button>
        </Reveal>
      </Page>
    </Section>
  );
}
