import { useEffect, useMemo, useState } from 'react';
import {
  COUNTRIES,
  REGION_LABELS,
  REGION_ORDER,
  type CountryCode,
} from '@/data/countries';
import { useLocale } from '@/hooks/useLocale';

/**
 * Modal country/currency picker. Search filters by name, country code, or
 * currency. Regions render as collapsible groups in the canonical order.
 */
export function CountryPicker({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { countryCode, setCountryCode, country, t } = useLocale();
  const [search, setSearch] = useState('');

  // Reset search and close on Escape.
  useEffect(() => {
    if (!open) {
      setSearch('');
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const grouped = useMemo(() => {
    const q = search.trim().toLowerCase();
    const lang = country.lang === 'fr' ? 'fr' : 'en';

    return REGION_ORDER.map((region) => {
      const codes = (Object.keys(COUNTRIES) as CountryCode[]).filter((code) => {
        const c = COUNTRIES[code];
        if (c.region !== region) return false;
        if (!q) return true;
        const name = lang === 'fr' ? c.nameFr : c.name;
        return (
          name.toLowerCase().includes(q) ||
          code.toLowerCase().includes(q) ||
          c.currency.toLowerCase().includes(q)
        );
      });
      return { region, codes };
    }).filter((g) => g.codes.length > 0);
  }, [search, country.lang]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-md max-h-[85vh] bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden flex flex-col">
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">{t('countryPicker.title')}</h3>
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-2 hover:bg-slate-700 rounded-lg transition"
            >
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('countryPicker.search')}
              className="w-full py-3 pl-9 pr-4 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              autoFocus
            />
          </div>
        </div>

        <div className="overflow-y-auto flex-1">
          {grouped.length === 0 ? (
            <div className="p-4 text-center text-gray-400">No countries found</div>
          ) : (
            grouped.map(({ region, codes }) => (
              <div key={region}>
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-slate-900/80">
                  {REGION_LABELS[region][country.lang === 'fr' ? 'fr' : 'en']}
                </div>
                {codes.map((code) => {
                  const c = COUNTRIES[code];
                  const isSelected = code === countryCode;
                  const displayName = country.lang === 'fr' ? c.nameFr : c.name;
                  return (
                    <button
                      key={code}
                      onClick={() => {
                        setCountryCode(code);
                        onClose();
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 transition text-left ${
                        isSelected
                          ? 'bg-amber-500/10 text-amber-100'
                          : 'hover:bg-slate-800 text-gray-200'
                      }`}
                    >
                      <span className="text-2xl">{c.flag}</span>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{displayName}</div>
                        <div className="text-xs text-gray-500">
                          {c.symbol} {c.currency}
                        </div>
                      </div>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
