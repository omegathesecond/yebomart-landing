import { useLocale } from '@/hooks/useLocale';
import { APP_URL, PHONE_HREF, PHONE_LABEL, WHATSAPP } from '@/data/copy';
import { YeboLogo } from '@/components/ui/YeboLogo';
import { Page } from '@/components/ui/Section';

const COLS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'Open the app', href: APP_URL },
      { label: 'How it works', href: '#how' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Hardware', href: '#hardware' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Omevision', href: 'https://omevision.com' },
      { label: 'Blog', href: 'https://blog.yebomart.com' },
      { label: 'For AI agents', href: '/llms.txt' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'WhatsApp', href: WHATSAPP },
      { label: PHONE_LABEL, href: PHONE_HREF },
    ],
  },
];

export function Footer() {
  const { country, t } = useLocale();
  return (
    <footer className="on-ink bg-ink text-cream">
      <Page className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <YeboLogo onDark />
            <p className="lede mt-5 max-w-[34ch] text-[15px] leading-[1.6]">{t('footer.tagline')}</p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-eyebrow text-mist">Part of the Omevision family</p>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-eyebrow text-mist">{c.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="font-display text-[15px] text-cream/85 transition-colors hover:text-brand-hot">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-cream/15 pt-6 font-mono text-[11px] uppercase tracking-eyebrow text-mist sm:flex-row sm:items-center sm:justify-between">
          <span>
            © 2026 Omevision · {t('footer.madeIn')} {country.name} {country.flag}
          </span>
          <span>yebomart.com</span>
        </div>
      </Page>
    </footer>
  );
}
