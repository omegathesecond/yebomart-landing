import { Price } from '@/components/Price';
import { Page, Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Icon, type IconName } from '@/components/ui/Icon';

const BENEFITS: { icon: IconName; title: string; body: string }[] = [
  { icon: 'scan', title: '3× faster checkout', body: 'Scan instead of searching. One beep and it is on the receipt.' },
  { icon: 'check', title: 'Zero pricing errors', body: 'The scanner pulls the right price every time.' },
  { icon: 'stock', title: 'Stock that stays true', body: 'Every scanned sale updates the count on its own.' },
  { icon: 'printer', title: 'Print from the browser', body: 'Bluetooth 58mm and 80mm receipt printers pair straight from the app. No driver, no print dialog.' },
];

export function Hardware() {
  return (
    <Section id="hardware" tone="cream">
      <Page className="py-24 lg:py-32">
        <SectionHead
          index="06"
          label="Hardware"
          heading="Faster checkout, when you want it."
          lede="Start with the phone you have. Add a scanner or a receipt printer when the queue says so. Prices include VAT and delivery within Eswatini."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Reveal className="flex flex-col rounded-sharp border border-line bg-cream p-7">
            <Icon name="scan" className="h-7 w-7 text-brick" />
            <h3 className="mt-5 font-display text-[20px] font-semibold">Camera scan</h3>
            <p className="mt-1 text-[14px] text-mute">Use the phone you have</p>
            <div className="mt-5 font-display text-[34px] font-bold leading-none tracking-tightest text-brand">Free</div>
            <ul className="mt-5 space-y-2 text-[14px]">
              {['Uses the phone camera', 'Works immediately', 'EAN, UPC and QR codes'].map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {f}
                </li>
              ))}
              <li className="flex items-start gap-2.5 text-mute">
                <span className="mt-0.5 inline-block h-4 w-4 shrink-0 text-center leading-4">–</span>
                Best for low volume
              </li>
            </ul>
            <p className="mt-auto pt-6 font-mono text-[11px] uppercase tracking-eyebrow text-mute">Included with every shop</p>
          </Reveal>

          <HardwarePack
            icon="store"
            name="Tuckshop Essential"
            audience="Small shops, 5–50 products"
            priceSzl={649}
            features={['Bluetooth scanner (2D)', 'Charging dock', 'Setup assistance', '30-min video training', 'Quick-start guide']}
            waText="Tuckshop%20Essential"
            delay={90}
          />
          <HardwarePack
            icon="till"
            name="Retail Pro"
            audience="Busy shops, 50–500 products"
            priceSzl={3499}
            financeSzl={349}
            features={['Premium scanner', 'Receipt printer (58mm)', 'Phone or tablet stand', 'Full setup & config', '1-hour training', '90-day priority support']}
            waText="Retail%20Pro"
            highlighted
            delay={180}
          />
          <HardwarePack
            icon="supplier"
            name="Enterprise"
            audience="Supermarkets and chains"
            priceSzl={10999}
            financeSzl={999}
            features={['2× pro scanners', '2× receipt printers', 'Tablet + stand', 'Cash drawer', 'On-site installation', 'Half-day training', '1-year support']}
            waText="Enterprise%20hardware%20package"
            buttonText="Contact sales"
            delay={270}
          />
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-sharp border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal as="li" key={b.title} delay={i * 70} className="bg-cream p-6">
              <Icon name={b.icon} className="h-6 w-6 text-brick" />
              <h4 className="mt-4 font-display text-[16px] font-semibold">{b.title}</h4>
              <p className="mt-1.5 text-[13.5px] leading-[1.55] text-mute">{b.body}</p>
            </Reveal>
          ))}
        </ul>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-eyebrow text-mute">6-month warranty · WhatsApp support · Delivery within Eswatini</p>
      </Page>
    </Section>
  );
}

function HardwarePack({
  icon,
  name,
  audience,
  priceSzl,
  financeSzl,
  features,
  waText,
  buttonText = 'Order on WhatsApp',
  highlighted,
  delay,
}: {
  icon: IconName;
  name: string;
  audience: string;
  priceSzl: number;
  financeSzl?: number;
  features: string[];
  waText: string;
  buttonText?: string;
  highlighted?: boolean;
  delay: number;
}) {
  return (
    <Reveal
      delay={delay}
      className={`relative flex flex-col rounded-sharp border bg-cream p-7 ${highlighted ? 'border-brand ring-1 ring-brand' : 'border-line'}`}
    >
      {highlighted ? (
        <span className="absolute -top-3 left-6 rounded-sharp bg-brand px-2 py-1 font-mono text-[10px] uppercase tracking-eyebrow text-ink">
          Best value
        </span>
      ) : null}
      <Icon name={icon} className="h-7 w-7 text-brick" />
      <h3 className="mt-5 font-display text-[20px] font-semibold">{name}</h3>
      <p className="mt-1 text-[14px] text-mute">{audience}</p>
      <div className="mt-5 flex items-baseline gap-2">
        <Price szl={priceSzl} className="font-display text-[34px] font-bold leading-none tracking-tightest" />
        <span className="font-mono text-[11px] uppercase tracking-eyebrow text-mute">once-off</span>
      </div>
      {financeSzl !== undefined ? (
        <p className="mt-1.5 font-mono text-[11px] uppercase tracking-eyebrow text-brick">
          or <Price szl={financeSzl} />/month × 12
        </p>
      ) : null}
      <ul className="mt-5 space-y-2 text-[14px]">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
            {f}
          </li>
        ))}
      </ul>
      <Button
        href={`https://wa.me/26878422613?text=Hi%2C%20I%20want%20the%20${waText}%20package`}
        variant={highlighted ? 'primary' : 'ghost'}
        external
        className="mt-auto pt-3"
      >
        {buttonText}
      </Button>
    </Reveal>
  );
}
