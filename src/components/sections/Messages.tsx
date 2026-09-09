import { MESSAGES } from '@/data/copy';
import { Page, Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { Reveal } from '@/components/ui/Reveal';

export function Messages() {
  return (
    <Section tone="cream">
      <Page className="grid gap-14 py-24 lg:grid-cols-12 lg:items-center lg:py-32">
        <Reveal className="order-2 lg:order-1 lg:col-span-5" self={false}>
          <Phone />
        </Reveal>
        <div className="order-1 lg:order-2 lg:col-span-7">
          <SectionHead
            index="04"
            label="Messages"
            heading="The numbers come to you."
            lede="At closing time the day's report lands on your WhatsApp: sales, cash against card, profit, top five. Low-stock warnings in the morning. Receipts and statements to your customers. It all goes by WhatsApp, which costs you less and arrives where people actually read it."
          />
          <dl className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {MESSAGES.map((m, i) => (
              <Reveal key={m.kind} delay={i * 80}>
                <dt className="font-mono text-[11px] uppercase tracking-eyebrow text-brick">
                  {m.kind} · {m.time}
                </dt>
                <dd className="mt-1.5 text-[14.5px] leading-[1.55] text-mute">{m.why}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Page>
    </Section>
  );
}

function Phone() {
  return (
    <div className="relative mx-auto w-[300px]">
      <div aria-hidden="true" className="absolute -inset-8 -z-10 rounded-full bg-wash blur-3xl" />
      <div className="rounded-[36px] border-[6px] border-ink bg-[#efeae2] p-3 shadow-card">
        <div className="mx-auto mb-3 h-5 w-24 rounded-full bg-ink" aria-hidden="true" />
        <div className="flex items-center gap-2 border-b border-line pb-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-brand font-display text-[12px] font-bold text-cream">Y</span>
          <div>
            <div className="font-display text-[13px] font-semibold leading-tight">YeboMart</div>
            <div className="font-mono text-[9px] uppercase tracking-eyebrow text-mute">WhatsApp · Business</div>
          </div>
        </div>
        <ul className="space-y-2.5 py-3">
          {MESSAGES.map((m, i) => (
            <li
              key={m.kind}
              className="rv max-w-[92%] rounded-sharp rounded-tl-none bg-white px-3 py-2 text-[12px] leading-[1.45] shadow-[0_1px_1px_rgba(26,24,20,.06)]"
              style={{ '--d': `${i * 220}ms` } as React.CSSProperties}
            >
              <div className="mb-0.5 flex justify-between font-mono text-[9px] uppercase tracking-eyebrow text-brick">
                <span>{m.kind}</span>
                <span className="text-mute">{m.time}</span>
              </div>
              {m.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
