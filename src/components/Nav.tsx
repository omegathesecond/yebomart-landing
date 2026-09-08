import { useEffect, useState } from 'react';
import { useLocale } from '@/hooks/useLocale';
import type { TranslationKey } from '@/data/translations';
import { APP_URL } from '@/data/copy';
import { CountryPicker } from './CountryPicker';
import { YeboLogo } from './ui/YeboLogo';
import { Button } from './ui/Button';
import { Icon } from './ui/Icon';

const LINKS: { href: string; key: TranslationKey }[] = [
  { href: '#how', key: 'nav.how' },
  { href: '#assistant', key: 'nav.assistant' },
  { href: '#features', key: 'nav.features' },
  { href: '#pricing', key: 'nav.pricing' },
  { href: '#hardware', key: 'nav.hardware' },
];

export function Nav() {
  const { country, t } = useLocale();
  const [pickerOpen, setPickerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled || menuOpen ? 'border-line bg-cream/85 backdrop-blur-md' : 'border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" aria-label="YeboMart home" className="rounded-sharp">
            <YeboLogo />
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="font-display text-[14px] text-mute transition-colors hover:text-ink">
                {t(l.key)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setPickerOpen(true)}
              aria-label="Select country"
              data-open={pickerOpen}
              className="country-picker-btn inline-flex items-center gap-2 rounded-sharp border border-line-strong bg-cream/70 px-2.5 py-2 transition-colors hover:border-ink"
            >
              <span className="text-base leading-none">{country.flag}</span>
              <span className="hidden font-mono text-[11px] uppercase tracking-eyebrow text-mute sm:inline">
                {country.currency}
              </span>
              <Icon name="chevron" className="chevron h-3.5 w-3.5 text-mute" />
            </button>
            <Button href={APP_URL} variant="ink" className="max-sm:hidden">
              {t('nav.openApp')}
            </Button>
            <button
              className="-mr-2 p-2 md:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <Icon name={menuOpen ? 'close' : 'menu'} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-line bg-cream px-5 py-4 md:hidden">
            <nav className="grid gap-1" aria-label="Primary">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="py-2.5 font-display text-[17px]">
                  {t(l.key)}
                </a>
              ))}
              <Button href={APP_URL} variant="ink" className="mt-3">
                {t('nav.openApp')}
              </Button>
            </nav>
          </div>
        ) : null}
      </header>
      <CountryPicker open={pickerOpen} onClose={() => setPickerOpen(false)} />
    </>
  );
}
