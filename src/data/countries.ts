/**
 * African market localization data.
 *
 * `rate` is the multiplier from SZL (the base currency this site is priced
 * in) to the local currency. Every price on the page is authored in SZL and
 * converted via this multiplier at render time.
 */

export type CountryCode =
  | 'SZ' | 'ZA' | 'BW' | 'ZM' | 'ZW' | 'MZ' | 'MW' | 'LS' | 'NA'
  | 'KE' | 'TZ' | 'UG' | 'RW' | 'ET'
  | 'NG' | 'GH' | 'SN' | 'CI'
  | 'CM' | 'CD'
  | 'MA' | 'EG';

export type Region = 'southern' | 'east' | 'west' | 'central' | 'north';
export type Lang = 'en' | 'fr' | 'pt';

export interface CountryInfo {
  name: string;
  nameFr: string;
  flag: string;
  currency: string;
  symbol: string;
  rate: number;
  decimals: 0 | 2;
  region: Region;
  lang: Lang;
}

export const COUNTRIES: Record<CountryCode, CountryInfo> = {
  // Southern Africa
  SZ: { name: 'Eswatini', nameFr: 'Eswatini', flag: '🇸🇿', currency: 'SZL', symbol: 'E', rate: 1, decimals: 2, region: 'southern', lang: 'en' },
  ZA: { name: 'South Africa', nameFr: 'Afrique du Sud', flag: '🇿🇦', currency: 'ZAR', symbol: 'R', rate: 1.3, decimals: 2, region: 'southern', lang: 'en' },
  BW: { name: 'Botswana', nameFr: 'Botswana', flag: '🇧🇼', currency: 'BWP', symbol: 'P', rate: 1.8, decimals: 2, region: 'southern', lang: 'en' },
  ZM: { name: 'Zambia', nameFr: 'Zambie', flag: '🇿🇲', currency: 'ZMW', symbol: 'K', rate: 1, decimals: 2, region: 'southern', lang: 'en' },
  ZW: { name: 'Zimbabwe', nameFr: 'Zimbabwe', flag: '🇿🇼', currency: 'USD', symbol: '$', rate: 0.03, decimals: 2, region: 'southern', lang: 'en' },
  MZ: { name: 'Mozambique', nameFr: 'Mozambique', flag: '🇲🇿', currency: 'MZN', symbol: 'MT', rate: 1, decimals: 2, region: 'southern', lang: 'pt' },
  MW: { name: 'Malawi', nameFr: 'Malawi', flag: '🇲🇼', currency: 'MWK', symbol: 'MK', rate: 95, decimals: 2, region: 'southern', lang: 'en' },
  LS: { name: 'Lesotho', nameFr: 'Lesotho', flag: '🇱🇸', currency: 'LSL', symbol: 'L', rate: 1, decimals: 2, region: 'southern', lang: 'en' },
  NA: { name: 'Namibia', nameFr: 'Namibie', flag: '🇳🇦', currency: 'NAD', symbol: 'N$', rate: 1, decimals: 2, region: 'southern', lang: 'en' },
  // East Africa
  KE: { name: 'Kenya', nameFr: 'Kenya', flag: '🇰🇪', currency: 'KES', symbol: 'KSh', rate: 5, decimals: 2, region: 'east', lang: 'en' },
  TZ: { name: 'Tanzania', nameFr: 'Tanzanie', flag: '🇹🇿', currency: 'TZS', symbol: 'TSh', rate: 100, decimals: 0, region: 'east', lang: 'en' },
  UG: { name: 'Uganda', nameFr: 'Ouganda', flag: '🇺🇬', currency: 'UGX', symbol: 'USh', rate: 200, decimals: 0, region: 'east', lang: 'en' },
  RW: { name: 'Rwanda', nameFr: 'Rwanda', flag: '🇷🇼', currency: 'RWF', symbol: 'FRw', rate: 50, decimals: 0, region: 'east', lang: 'en' },
  ET: { name: 'Ethiopia', nameFr: 'Éthiopie', flag: '🇪🇹', currency: 'ETB', symbol: 'Br', rate: 5, decimals: 2, region: 'east', lang: 'en' },
  // West Africa
  NG: { name: 'Nigeria', nameFr: 'Nigéria', flag: '🇳🇬', currency: 'NGN', symbol: '₦', rate: 84, decimals: 2, region: 'west', lang: 'en' },
  GH: { name: 'Ghana', nameFr: 'Ghana', flag: '🇬🇭', currency: 'GHS', symbol: 'GH₵', rate: 1.2, decimals: 2, region: 'west', lang: 'en' },
  SN: { name: 'Senegal', nameFr: 'Sénégal', flag: '🇸🇳', currency: 'XOF', symbol: 'CFA', rate: 27, decimals: 0, region: 'west', lang: 'fr' },
  CI: { name: 'Ivory Coast', nameFr: "Côte d'Ivoire", flag: '🇨🇮', currency: 'XOF', symbol: 'CFA', rate: 34, decimals: 0, region: 'west', lang: 'fr' },
  // Central Africa
  CM: { name: 'Cameroon', nameFr: 'Cameroun', flag: '🇨🇲', currency: 'XAF', symbol: 'FCFA', rate: 34, decimals: 0, region: 'central', lang: 'fr' },
  CD: { name: 'DR Congo', nameFr: 'RD Congo', flag: '🇨🇩', currency: 'CDF', symbol: 'FC', rate: 140, decimals: 2, region: 'central', lang: 'fr' },
  // North Africa
  MA: { name: 'Morocco', nameFr: 'Maroc', flag: '🇲🇦', currency: 'MAD', symbol: 'DH', rate: 0.55, decimals: 2, region: 'north', lang: 'fr' },
  EG: { name: 'Egypt', nameFr: 'Égypte', flag: '🇪🇬', currency: 'EGP', symbol: 'E£', rate: 2.7, decimals: 2, region: 'north', lang: 'en' },
};

export const REGION_LABELS: Record<Region, { en: string; fr: string }> = {
  southern: { en: 'Southern Africa', fr: 'Afrique Australe' },
  east: { en: 'East Africa', fr: "Afrique de l'Est" },
  west: { en: 'West Africa', fr: "Afrique de l'Ouest" },
  central: { en: 'Central Africa', fr: 'Afrique Centrale' },
  north: { en: 'North Africa', fr: 'Afrique du Nord' },
};

export const REGION_ORDER: Region[] = ['southern', 'east', 'west', 'central', 'north'];

/** Format a converted price using the country's currency rules. */
export function formatPrice(amountSzl: number, country: CountryInfo): string {
  const converted = amountSzl * country.rate;
  const formatted =
    country.decimals === 0
      ? Math.round(converted).toLocaleString()
      : converted.toLocaleString(undefined, {
          minimumFractionDigits: country.decimals,
          maximumFractionDigits: country.decimals,
        });
  return `${country.symbol}${formatted}`;
}
