import { ASSISTANT_FACTS } from '@/data/copy';
import { Page, Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { AssistantDemo } from './AssistantDemo';

export function Assistant() {
  return (
    <Section tone="sand" className="overflow-hidden">
      <Page className="grid gap-12 py-24 lg:grid-cols-12 lg:items-center lg:py-32">
        <div className="lg:col-span-5">
          <SectionHead
            index="03"
            label="Your assistant"
            heading="Ask your shop a question."
            lede="Your assistant reads your sales, stock and margins every time you ask, and answers in plain language. It advises. You decide."
          />
          <ul className="mt-8 space-y-3">
            {ASSISTANT_FACTS.map((f, i) => (
              <Reveal as="li" key={f.text} delay={i * 80} className="flex items-center gap-3 text-[15px]">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-wash text-brick">
                  <Icon name={f.icon} className="h-4 w-4" />
                </span>
                {f.text}
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal className="lg:col-span-7" delay={150}>
          <AssistantDemo />
        </Reveal>
      </Page>
    </Section>
  );
}
