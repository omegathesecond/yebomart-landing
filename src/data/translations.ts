import type { Lang } from './countries';

export type TranslationKey =
  | 'nav.features'
  | 'nav.pricing'
  | 'nav.hardware'
  | 'nav.how'
  | 'nav.openApp'
  | 'hero.cta'
  | 'hero.eyebrow'
  | 'hero.line1'
  | 'hero.line2'
  | 'hero.lede'
  | 'hero.whatsapp'
  | 'hero.facts'
  | 'cta.title'
  | 'cta.body'
  | 'pricing.title'
  | 'pricing.subtitle'
  | 'countryPicker.title'
  | 'countryPicker.search'
  | 'footer.tagline'
  | 'footer.madeIn';

type Bundle = Record<TranslationKey, string>;

export const TRANSLATIONS: Record<'en' | 'fr', Bundle> = {
  en: {
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.hardware': 'Hardware',
    'nav.how': 'How it works',
    'nav.openApp': 'Open the app',
    'hero.cta': 'Open the app',
    'hero.eyebrow': 'Free POS & shop management',
    'hero.line1': 'Run your whole shop',
    'hero.line2': 'from your phone.',
    'hero.lede':
      "YeboMart is a free point-of-sale for African shops. Ring up sales, watch stock move, count the till, and get the day's numbers on WhatsApp. Works offline. No computer needed.",
    'hero.whatsapp': 'WhatsApp us',
    'hero.facts': 'Free core · Works offline · 22 countries · English & French',
    'cta.title': 'Ready when your next customer is.',
    'cta.body': "Sign in with your phone number and ring your first sale in five minutes. We'll help you set up on WhatsApp.",
    'pricing.title': 'Free to use. Pay only for AI & messaging.',
    'pricing.subtitle': 'No subscription. No tiers. Top up credits when you need them.',
    'countryPicker.title': 'Select Your Country',
    'countryPicker.search': 'Search countries...',
    'footer.tagline': 'Shop management made simple',
    'footer.madeIn': 'Made in',
  },
  fr: {
    'nav.features': 'Fonctionnalités',
    'nav.pricing': 'Tarifs',
    'nav.hardware': 'Matériel',
    'nav.how': 'Comment ça marche',
    'nav.openApp': "Ouvrir l'app",
    'hero.cta': "Ouvrir l'app",
    'hero.eyebrow': 'Caisse et gestion de boutique gratuites',
    'hero.line1': 'Gérez toute votre boutique',
    'hero.line2': 'depuis votre téléphone.',
    'hero.lede':
      "YeboMart est une caisse gratuite pour les boutiques africaines. Encaissez, suivez le stock, comptez la caisse et recevez les chiffres du jour sur WhatsApp. Fonctionne hors ligne. Sans ordinateur.",
    'hero.whatsapp': 'Écrivez-nous sur WhatsApp',
    'hero.facts': 'Gratuit · Hors ligne · 22 pays · Anglais et français',
    'cta.title': 'Prêt dès votre prochain client.',
    'cta.body': "Connectez-vous avec votre numéro et encaissez votre première vente en cinq minutes. On vous aide à démarrer sur WhatsApp.",
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
