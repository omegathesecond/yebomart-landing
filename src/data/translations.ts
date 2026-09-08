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
  | 'footer.madeIn'
  | 'footer.privacy'
  | 'footer.terms';

type Bundle = Record<TranslationKey, string>;

export const TRANSLATIONS: Record<'en' | 'fr', Bundle> = {
  en: {
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.hardware': 'Hardware',
    'nav.how': 'How it works',
    'nav.openApp': 'Open the app',
    'hero.cta': 'Set up your shop',
    'hero.eyebrow': 'For shop owners who can\'t stand at the till all day',
    'hero.line1': 'Know what your shop made today,',
    'hero.line2': 'and where every cent went.',
    'hero.lede':
      "YeboMart turns the phone in your pocket into the till, the stock book and the cash-up. Every sale carries a cashier's name, every closing shows whether the drawer matches, and every evening the day's numbers land on your WhatsApp. Sales keep saving when the signal drops.",
    'hero.whatsapp': 'WhatsApp us',
    'hero.facts': 'Every sale has a name · Cash-up variance at closing · Works offline · Report on WhatsApp at 18:00',
    'cta.title': 'Ring your first sale before the next customer walks in.',
    'cta.body': "Sign in with your phone number, name your shop, scan your stock in. Five minutes. The core is free, no card, no contract. We'll help you set up on WhatsApp.",
    'pricing.title': 'No monthly fee. Pay only for messages and assistant questions.',
    'pricing.subtitle': 'The till, stock, staff, credit book and reports cost nothing. Credits cover the things that cost us money.',
    'countryPicker.title': 'Select Your Country',
    'countryPicker.search': 'Search countries...',
    'footer.tagline': 'Shop management made simple',
    'footer.madeIn': 'Made in',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  fr: {
    'nav.features': 'Fonctionnalités',
    'nav.pricing': 'Tarifs',
    'nav.hardware': 'Matériel',
    'nav.how': 'Comment ça marche',
    'nav.openApp': "Ouvrir l'app",
    'hero.cta': 'Créer ma boutique',
    'hero.eyebrow': 'Pour les commerçants qui ne peuvent pas rester à la caisse toute la journée',
    'hero.line1': "Sachez ce que votre boutique a fait aujourd'hui,",
    'hero.line2': 'et où est passé chaque centime.',
    'hero.lede':
      "YeboMart transforme le téléphone dans votre poche en caisse, en registre de stock et en clôture de caisse. Chaque vente porte le nom du caissier, chaque clôture montre si le tiroir correspond, et chaque soir les chiffres du jour arrivent sur votre WhatsApp. Les ventes continuent d'être enregistrées quand le réseau tombe.",
    'hero.whatsapp': 'Écrivez-nous sur WhatsApp',
    'hero.facts': 'Chaque vente a un nom · Écart de caisse à la clôture · Hors ligne · Rapport WhatsApp à 18h',
    'cta.title': 'Encaissez votre première vente avant le prochain client.',
    'cta.body': "Connectez-vous avec votre numéro, nommez votre boutique, scannez votre stock. Cinq minutes. La base est gratuite, sans carte ni contrat. On vous aide à démarrer sur WhatsApp.",
    'pricing.title': "Pas d'abonnement. Payez seulement les messages et les questions à l'assistant.",
    'pricing.subtitle': 'La caisse, le stock, le personnel, le carnet de crédit et les rapports ne coûtent rien. Les crédits couvrent ce qui nous coûte de l\'argent.',
    'countryPicker.title': 'Sélectionner votre pays',
    'countryPicker.search': 'Rechercher des pays...',
    'footer.tagline': 'La gestion de boutique simplifiée',
    'footer.madeIn': 'Fait en',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': "Conditions d'utilisation",
  },
};

/** Portuguese-speaking countries (Mozambique) currently fall back to English
 *  copy until we have a `pt` bundle. The country flag + currency still render
 *  correctly because those come from the country data, not translations. */
export function bundleFor(lang: Lang): Bundle {
  return lang === 'fr' ? TRANSLATIONS.fr : TRANSLATIONS.en;
}
