import { STEPS, UNDER_HOOD } from '@/data/copy';
import { Page, Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { DiagramLoop } from './DiagramLoop';

export function HowItWorks() {
  return (
    <Section id="how" tone="ink">
      <div aria-hidden="true" className="stripes-cream absolute inset-x-0 top-0 h-24 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <Page className="relative py-24 lg:py-32">
        <SectionHead
          index="01"
          label="How it works"
          heading="One sale sets everything else in motion."
          lede="You ring up a sale. YeboMart does the rest: stock drops, the till total updates, the day's report writes itself, and your assistant reads it all."
        />

        <div className="mt-14">
          <DiagramLoop />
        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Start in three steps</Eyebrow>
            <h3 className="mt-4 font-display text-[clamp(24px,3vw,34px)] font-bold leading-[1.1] tracking-tightest">
              Five minutes from sign-in to your first receipt.
            </h3>
            <p className="lede mt-4 text-[15.5px] leading-[1.6]">
              Nothing to install. Open app.yebomart.com in the browser on the phone you already have.
            </p>
          </Reveal>
          <ol className="grid gap-px overflow-hidden rounded-sharp border border-cream/15 bg-cream/15 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 120} className="bg-ink p-7">
                <span className="font-display text-[56px] font-bold leading-none text-brand">{s.n}</span>
                <h4 className="mt-5 font-display text-[20px] font-semibold leading-tight">{s.title}</h4>
                <p className="lede mt-2.5 text-[14.5px] leading-[1.6]">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="mt-20">
          <Reveal>
            <Eyebrow>Under the hood</Eyebrow>
          </Reveal>
          <ul className="mt-6 grid gap-5 md:grid-cols-3">
            {UNDER_HOOD.map((u, i) => (
              <Reveal as="li" key={u.title} delay={i * 100} className="rounded-sharp border border-cream/20 p-6 transition-colors hover:border-cream/40">
                <Icon name={u.icon} className="h-6 w-6 text-brand-hot" />
                <h4 className="mt-4 font-display text-[18px] font-semibold">{u.title}</h4>
                <p className="lede mt-2 text-[14.5px] leading-[1.6]">{u.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Page>
    </Section>
  );
}
