import { Link } from 'react-router-dom';
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

          <nav className="flex items-center gap-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition text-sm">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition text-sm">
              {t('footer.terms')}
            </Link>
          </nav>
        </div>

        <p className="text-gray-500 text-sm text-center mt-8">
          © 2026 Omevision. {t('footer.madeIn')} {country.name} {country.flag}
        </p>
      </div>
    </footer>
  );
}
