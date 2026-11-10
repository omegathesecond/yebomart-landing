import type { Lang } from './countries';

export type TranslationKey =
  | 'nav.features'
  | 'nav.pricing'
  | 'nav.hardware'
  | 'nav.how'
  | 'nav.assistant'
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
    'nav.assistant': 'Assistant',
    'nav.openApp': 'Open the app',
    'hero.cta': "Open your shop",
    'hero.eyebrow': "Are you running a shop?",
    'hero.line1': "An easy way",
    'hero.line2': "to run your shop.",
    'hero.lede':
      "Use an easy till, follow your stock and count the cash at closing. Switch on daily WhatsApp updates to see what is running low.",
    'hero.whatsapp': "Ask us on WhatsApp",
    'hero.facts': "Easy till · Smart stock tracking · Cash at closing · Optional WhatsApp updates",
    'cta.title': "Start with your next sale.",
    'cta.body': "Sign in, name your shop and add your products. Then tap or scan items to make a sale. Need help? Ask us on WhatsApp.",
    'pricing.title': "Choose the plan for your shop.",
    'pricing.subtitle': "Check the current plans and what each includes. WhatsApp updates and assistant use follow your plan or credit allowance.",
    'countryPicker.title': 'Select Your Country',
    'countryPicker.search': 'Search countries...',
    'footer.tagline': "An easy way to run your shop.",
    'footer.madeIn': 'Made in',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  fr: {
    'nav.features': 'Fonctionnalités',
    'nav.pricing': 'Tarifs',
    'nav.hardware': 'Matériel',
    'nav.how': 'Comment ça marche',
    'nav.assistant': 'Assistant',
    'nav.openApp': "Ouvrir l'app",
    'hero.cta': "Ouvrir ma boutique",
    'hero.eyebrow': "Vous tenez une boutique ?",
    'hero.line1': "Une façon simple",
    'hero.line2': "de gérer votre boutique.",
    'hero.lede':
      "Encaissez les ventes, suivez votre stock et comptez la caisse en fin de journée. Activez les messages WhatsApp quotidiens pour voir les produits dont le stock est bas.",
    'hero.whatsapp': "Écrivez-nous sur WhatsApp",
    'hero.facts': "Caisse simple · Suivi du stock · Clôture de caisse · Messages WhatsApp en option",
    'cta.title': "Commencez par votre prochaine vente.",
    'cta.body': "Connectez-vous, nommez votre boutique et ajoutez vos produits. Touchez les articles ou scannez-les pour encaisser. Besoin d’aide ? Écrivez-nous sur WhatsApp.",
    'pricing.title': "Choisissez l’offre pour votre boutique.",
    'pricing.subtitle': "Consultez les offres et ce qu’elles comprennent. Les messages WhatsApp et l’assistant dépendent de votre offre ou de vos crédits.",
    'countryPicker.title': 'Sélectionner votre pays',
    'countryPicker.search': 'Rechercher des pays...',
    'footer.tagline': "Une façon simple de gérer votre boutique.",
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
