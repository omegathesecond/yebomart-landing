import { LocaleContext, useLocaleState } from '@/hooks/useLocale';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/sections/Hero';
import { ProofStrip } from '@/components/sections/ProofStrip';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Features } from '@/components/sections/Features';
import { Assistant } from '@/components/sections/Assistant';
import { Messages } from '@/components/sections/Messages';
import { Pricing } from '@/components/sections/Pricing';
import { Hardware } from '@/components/sections/Hardware';
import { Faq } from '@/components/sections/Faq';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/sections/Footer';

export function App() {
  const locale = useLocaleState();

  return (
    <LocaleContext.Provider value={locale}>
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <HowItWorks />
        <Features />
        <Assistant />
        <Messages />
        <Pricing />
        <Hardware />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </LocaleContext.Provider>
  );
}
