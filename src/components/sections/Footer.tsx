import { useLocale } from '@/hooks/useLocale';

export function Footer() {
  const { country, t } = useLocale();
  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🛒</span>
            <span className="text-xl font-bold">YeboMart</span>
          </div>

          <p className="text-gray-400">{t('footer.tagline')}</p>

          <p className="text-gray-500 text-sm">
            © 2026 Omevision. {t('footer.madeIn')} {country.name} {country.flag}
          </p>
        </div>
      </div>
    </footer>
  );
}
