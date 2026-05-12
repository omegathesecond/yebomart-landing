import { LocaleContext, useLocaleState } from '@/hooks/useLocale';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/sections/Hero';
import { Problems } from '@/components/sections/Problems';
import { AIFeatures } from '@/components/sections/AIFeatures';
import { Solutions } from '@/components/sections/Solutions';
import { Setup } from '@/components/sections/Setup';
import { Pricing } from '@/components/sections/Pricing';
import { Hardware } from '@/components/sections/Hardware';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export function App() {
  const locale = useLocaleState();

  return (
    <LocaleContext.Provider value={locale}>
      <Nav />
      <main>
        <Hero />
        <Problems />
        <AIFeatures />
        <Solutions />
        <Setup />
        <Pricing />
        <Hardware />
        <Contact />
      </main>
      <Footer />
    </LocaleContext.Provider>
  );
}
