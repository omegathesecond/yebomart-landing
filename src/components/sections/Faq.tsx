import type { CSSProperties } from 'react';
import { FAQ } from '@/data/copy';
import { Page, Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';

const SCHEMA = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export function Faq() {
  return (
    <Section tone="sand">
      <Page className="grid gap-10 py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-4">
          <SectionHead index="07" label="Questions" heading="Straight answers, before you commit anything." lede="If yours isn't here, WhatsApp us. A person replies." />
        </div>
        <Reveal className="lg:col-span-8" self={false}>
          <div className="divide-y divide-line border-y border-line">
            {FAQ.map((f, i) => (
              <details key={f.q} className="group rv" style={{ '--d': `${i * 60}ms` } as CSSProperties}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-[18px] font-medium [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <Icon name="plus" className="h-5 w-5 shrink-0 text-brick transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="max-w-[70ch] pb-6 text-[15.5px] leading-[1.62] text-mute">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Page>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
    </Section>
  );
}
