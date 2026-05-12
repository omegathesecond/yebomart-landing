import type { Lang } from './countries';

export type TranslationKey =
  | 'nav.why'
  | 'nav.features'
  | 'nav.pricing'
  | 'nav.hardware'
  | 'nav.getStarted'
  | 'hero.badge'
  | 'hero.title1'
  | 'hero.title2'
  | 'hero.subtitle'
  | 'hero.cta'
  | 'hero.callCta'
  | 'hero.tagline'
  | 'pricing.title'
  | 'pricing.subtitle'
  | 'countryPicker.title'
  | 'countryPicker.search'
  | 'footer.tagline'
  | 'footer.madeIn';

type Bundle = Record<TranslationKey, string>;

export const TRANSLATIONS: Record<'en' | 'fr', Bundle> = {
  en: {
    'nav.why': 'Why YeboMart',
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.hardware': 'Hardware',
    'nav.getStarted': 'Get Started',
    'hero.badge': 'Powered by AI',
    'hero.title1': 'AI-Powered',
    'hero.title2': 'Shop Management',
    'hero.subtitle':
      'Your AI assistant tracks sales, predicts stock needs, catches theft, and sends you daily insights. Run your shop smarter — not harder.',
    'hero.cta': 'Get Started Free',
    'hero.callCta': 'Call +268 7842 2613',
    'hero.tagline': 'Works on phone, tablet, or computer • Works offline • 24/7 support',
    'pricing.title': 'Free to use. Pay only for AI & messaging.',
    'pricing.subtitle': 'No subscription. No tiers. Top up credits when you need them.',
    'countryPicker.title': 'Select Your Country',
    'countryPicker.search': 'Search countries...',
    'footer.tagline': 'Shop management made simple',
    'footer.madeIn': 'Made in',
  },
  fr: {
    'nav.why': 'Pourquoi YeboMart',
    'nav.features': 'Fonctionnalités',
    'nav.pricing': 'Tarifs',
    'nav.hardware': 'Matériel',
    'nav.getStarted': 'Commencer',
    'hero.badge': "Alimentée par l'IA",
    'hero.title1': 'Gestion de Boutique',
    'hero.title2': "Alimentée par l'IA",
    'hero.subtitle':
      "Votre assistant IA suit les ventes, prédit les besoins de stock, détecte les vols et vous envoie des informations quotidiennes. Gérez votre boutique plus intelligemment.",
    'hero.cta': 'Commencer gratuitement',
    'hero.callCta': 'Appeler +268 7842 2613',
    'hero.tagline': 'Téléphone, tablette ou ordinateur • Hors ligne • Support 24/7',
    'pricing.title': "Gratuit. Payez uniquement pour l'IA et la messagerie.",
    'pricing.subtitle': "Pas d'abonnement. Pas de paliers. Rechargez quand vous en avez besoin.",
    'countryPicker.title': 'Sélectionner votre pays',
    'countryPicker.search': 'Rechercher des pays...',
    'footer.tagline': 'La gestion de boutique simplifiée',
    'footer.madeIn': 'Fait en',
  },
};

/** Portuguese-speaking countries (Mozambique) currently fall back to English
 *  copy until we have a `pt` bundle. The country flag + currency still render
 *  correctly because those come from the country data, not translations. */
export function bundleFor(lang: Lang): Bundle {
  return lang === 'fr' ? TRANSLATIONS.fr : TRANSLATIONS.en;
}
