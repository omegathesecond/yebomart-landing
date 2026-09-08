import { PROOF } from '@/data/copy';
import { Page, Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function ProofStrip() {
  return (
    <Section tone="sand">
      <Page className="py-10 lg:py-12">
        <ul className="grid gap-px overflow-hidden rounded-sharp border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {PROOF.map((p, i) => (
            <Reveal as="li" key={p.label} delay={i * 90} className="bg-sand p-6">
              <div className="font-display text-[24px] font-bold leading-[1.15] tracking-tightest">{p.value}</div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-eyebrow text-brick">{p.label}</div>
              <p className="mt-2 text-[14.5px] leading-[1.55] text-mute">{p.body}</p>
            </Reveal>
          ))}
        </ul>
      </Page>
    </Section>
  );
}
