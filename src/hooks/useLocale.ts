import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { COUNTRIES, type CountryCode, type CountryInfo, formatPrice } from '@/data/countries';
import { bundleFor, type TranslationKey } from '@/data/translations';

const LS_COUNTRY = 'yebomart-country';
const LS_MANUAL = 'yebomart-country-manual';

interface LocaleContextValue {
  countryCode: CountryCode;
  country: CountryInfo;
  setCountryCode: (code: CountryCode) => void;
  /** Translate a key in the active language. */
  t: (key: TranslationKey) => string;
  /** Convert + format a SZL value into the active locale's currency. */
  price: (amountSzl: number) => string;
}

export const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

/**
 * Picks the initial country in this order:
 *   1. localStorage (returning visitor)
 *   2. default `SZ` (Eswatini, base currency)
 *
 * IP geolocation happens asynchronously after mount so we don't block render
 * on a network call. If a user has previously picked a country manually
 * (LS_MANUAL flag), we never override their choice via geo-IP.
 */
function getInitialCountry(): CountryCode {
  if (typeof window === 'undefined') return 'SZ';
  const saved = localStorage.getItem(LS_COUNTRY);
  if (saved && saved in COUNTRIES) return saved as CountryCode;
  return 'SZ';
}

export function useLocaleState(): LocaleContextValue {
  const [countryCode, setCountryCodeState] = useState<CountryCode>(getInitialCountry);

  // IP-based auto-detection on first visit. Skipped if user has ever
  // manually selected a country (we respect their choice forever).
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (localStorage.getItem(LS_MANUAL)) return;

    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (!res.ok) return;
        const data = (await res.json()) as { country_code?: string };
        const code = data.country_code as CountryCode | undefined;
        if (!cancelled && code && code in COUNTRIES) {
          setCountryCodeState(code);
          localStorage.setItem(LS_COUNTRY, code);
        }
      } catch {
        // Best-effort; non-detection just keeps default.
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const setCountryCode = useCallback((code: CountryCode) => {
    setCountryCodeState(code);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LS_COUNTRY, code);
      localStorage.setItem(LS_MANUAL, 'true');
    }
  }, []);

  return useMemo(() => {
    const country = COUNTRIES[countryCode];
    const bundle = bundleFor(country.lang);
    return {
      countryCode,
      country,
      setCountryCode,
      t: (key: TranslationKey) => bundle[key],
      price: (amountSzl: number) => formatPrice(amountSzl, country),
    };
  }, [countryCode, setCountryCode]);
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used inside <LocaleProvider>');
  return ctx;
}
