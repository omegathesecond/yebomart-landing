import { Link } from 'react-router-dom';
import { useLocale } from '@/hooks/useLocale';
import { APP_URL, PHONE_HREF, PHONE_LABEL, WHATSAPP } from '@/data/copy';
import { YeboLogo } from '@/components/ui/YeboLogo';
import { Page } from '@/components/ui/Section';

/* `to` is a client-side route (legal pages); `href` is a plain anchor. Section
   anchors are written as `/#id` so they still work from /privacy and /terms. */
type FootLink = { label: string; href: string } | { label: string; to: string };

export function Footer() {
  const { country, t } = useLocale();

  const cols: { title: string; links: FootLink[] }[] = [
    {
      title: 'Product',
      links: [
        { label: 'Open the app', href: APP_URL },
        { label: t('nav.how'), href: '/#how' },
        { label: t('nav.pricing'), href: '/#pricing' },
        { label: t('nav.hardware'), href: '/#hardware' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Omevision', href: 'https://omevision.com' },
        { label: 'Blog', href: 'https://blog.yebomart.com' },
        { label: t('footer.privacy'), to: '/privacy' },
        { label: t('footer.terms'), to: '/terms' },
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

  const linkClass = 'font-display text-[15px] text-cream/85 transition-colors hover:text-brand-hot';

  return (
    <footer className="on-ink bg-ink text-cream">
      <Page className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <YeboLogo onDark />
            <p className="lede mt-5 max-w-[34ch] text-[15px] leading-[1.6]">{t('footer.tagline')}</p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-eyebrow text-mist">Part of the Omevision family</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-eyebrow text-mist">{c.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    {'to' in l ? (
                      <Link to={l.to} className={linkClass}>
                        {l.label}
                      </Link>
                    ) : (
                      <a href={l.href} className={linkClass}>
                        {l.label}
                      </a>
                    )}
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
