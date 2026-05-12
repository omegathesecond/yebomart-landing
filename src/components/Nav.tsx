import { useState } from 'react';
import { useLocale } from '@/hooks/useLocale';
import { CountryPicker } from './CountryPicker';

export function Nav() {
  const { country, t } = useLocale();
  const [pickerOpen, setPickerOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🛒</span>
            <span className="text-xl font-bold">YeboMart</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#problems" className="text-gray-400 hover:text-white transition">{t('nav.why')}</a>
            <a href="#features" className="text-gray-400 hover:text-white transition">{t('nav.features')}</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition">{t('nav.pricing')}</a>
            <a href="#hardware" className="text-gray-400 hover:text-white transition">{t('nav.hardware')}</a>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPickerOpen(true)}
              aria-label="Select country"
              data-open={pickerOpen}
              className="country-picker-btn flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-700/50 border border-slate-600 hover:bg-slate-600/50 hover:border-slate-500 transition"
            >
              <span className="text-xl">{country.flag}</span>
              <span className="hidden sm:inline text-sm text-gray-300">{country.currency}</span>
              <svg className="chevron w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <a
              href="https://app.yebomart.com"
              className="bg-brand-600 hover:bg-brand-500 px-5 py-2.5 rounded-lg font-medium transition"
            >
              {t('nav.getStarted')}
            </a>
          </div>
        </div>
      </nav>
      <CountryPicker open={pickerOpen} onClose={() => setPickerOpen(false)} />
    </>
  );
}
