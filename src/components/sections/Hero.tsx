import type { CSSProperties } from 'react';
import { useLocale } from '@/hooks/useLocale';
import { APP_URL, WHATSAPP } from '@/data/copy';
import { Page, Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { TillDemo } from './TillDemo';

const d = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

export function Hero() {
  const { t } = useLocale();
  return (
    <Section id="top" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="dots-ink absolute inset-x-0 top-0 h-[560px] opacity-50 [mask-image:linear-gradient(to_bottom,black_30%,transparent)]"
      />
      <Page className="relative grid gap-14 pb-20 pt-28 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-28 lg:pt-40">
        <Reveal className="lg:col-span-7" self={false}>
          <Eyebrow className="rv">{t('hero.eyebrow')}</Eyebrow>
          <h1
            className="rv mt-6 font-display text-[clamp(34px,5.2vw,64px)] font-bold leading-[1.02] tracking-tightest"
            style={d(80)}
          >
            {t('hero.line1')}
            <br />
            <span className="text-brand">{t('hero.line2')}</span>
          </h1>
          <p className="lede rv mt-6 max-w-[54ch] text-[18px] leading-[1.6]" style={d(160)}>
            {t('hero.lede')}
          </p>
          <div className="rv mt-8 flex flex-col gap-3 sm:flex-row" style={d(240)}>
            <Button href={APP_URL} size="lg">
              {t('hero.cta')}
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
            <Button href={WHATSAPP} variant="ghost" size="lg" external>
              <Icon name="whatsapp" className="h-4 w-4" />
              {t('hero.whatsapp')}
            </Button>
          </div>
          <p className="rv mt-7 font-mono text-[11px] uppercase tracking-eyebrow text-mute" style={d(320)}>
            {t('hero.facts')}
          </p>
        </Reveal>
        <Reveal className="lg:col-span-5" delay={200}>
          <TillDemo />
        </Reveal>
      </Page>
    </Section>
  );
}
