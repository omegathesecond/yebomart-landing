import { FEATURES } from '@/data/copy';
import { Page, Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';

export function Features() {
  return (
    <Section id="features" tone="cream">
      <Page className="py-24 lg:py-32">
        <SectionHead
          index="02"
          label="Everything a shop needs"
          heading="The whole back office, in the same app as the till."
          lede="Every screen below is free. They share one database, so a sale on the till is already in stock, in reports, and in the audit log."
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-sharp border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {FEATURES.map((f, i) => (
            <Reveal as="li" key={f.title} delay={(i % 5) * 70} className="group bg-cream p-6 transition-colors hover:bg-wash">
              <Icon name={f.icon} className="h-6 w-6 text-brick transition-transform duration-300 group-hover:-translate-y-0.5" />
              <h3 className="mt-5 font-display text-[17px] font-semibold leading-tight">{f.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.55] text-mute">{f.body}</p>
            </Reveal>
          ))}
        </ul>
      </Page>
    </Section>
  );
}
