import { ASSISTANT_INSIGHTS, ASSISTANT_PROOF } from '@/data/copy';
import { Page, Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { AssistantDemo } from './AssistantDemo';

export function Assistant() {
  return (
    <Section id="assistant" tone="cream" className="overflow-hidden">
      <Page className="py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="min-w-0 lg:col-span-5">
            <SectionHead
              index="02"
              label="New · Your assistant"
              heading="It read every sale today. You didn't have to."
              lede="Before it answers, it reads today's takings, the stock on hand, every margin, and everything that hasn't moved in a month. Then it answers in plain words, in English or French."
            />
            <ul className="mt-9 space-y-6">
              {ASSISTANT_PROOF.map((f, i) => (
                <Reveal as="li" key={f.title} delay={i * 90} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-wash text-brick">
                    <Icon name={f.icon} className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-[16px] font-semibold leading-tight">{f.title}</h3>
                    <p className="mt-1 text-[14.5px] leading-[1.55] text-mute">{f.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-eyebrow text-mute">
              Half a credit a question · Nothing to switch on
            </p>
          </div>
          <Reveal className="min-w-0 lg:col-span-7" delay={150}>
            <AssistantDemo />
          </Reveal>
        </div>

        {/* The unprompted half: an assistant that only answers is a nice-to-have,
            one that tells you what you did not think to ask is the reason to keep it. */}
        <div className="mt-20 grid gap-8 border-t border-line pt-12 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>It speaks first</Eyebrow>
            <h3 className="mt-4 font-display text-[clamp(22px,2.6vw,30px)] font-bold leading-[1.1] tracking-tightest">
              You don't always have to ask.
            </h3>
            <p className="mt-3 text-[15px] leading-[1.6] text-mute">
              It flags what it finds on your dashboard, whether or not you opened the chat.
            </p>
          </Reveal>
          <ul className="grid gap-px overflow-hidden rounded-sharp border border-line bg-line sm:grid-cols-3">
            {ASSISTANT_INSIGHTS.map((n, i) => (
              <Reveal as="li" key={n.tag} delay={i * 100} className="bg-cream p-6">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-eyebrow text-brick">
                  <Icon name={n.icon} className="h-4 w-4" />
                  {n.tag}
                </div>
                <p className="mt-3 text-[14.5px] leading-[1.55]">{n.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Page>
    </Section>
  );
}
