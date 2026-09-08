import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { LocaleContext, useLocaleState } from '@/hooks/useLocale';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/sections/Hero';
import { ProofStrip } from '@/components/sections/ProofStrip';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Assistant } from '@/components/sections/Assistant';
import { Features } from '@/components/sections/Features';
import { Messages } from '@/components/sections/Messages';
import { Pricing } from '@/components/sections/Pricing';
import { Hardware } from '@/components/sections/Hardware';
import { Faq } from '@/components/sections/Faq';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/sections/Footer';
import { PrivacyPolicy } from '@/components/legal/PrivacyPolicy';
import { Terms } from '@/components/legal/Terms';

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <HowItWorks />
        <Assistant />
        <Features />
        <Messages />
        <Pricing />
        <Hardware />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

/** Reset scroll when moving between routes. A hash on the home route means
 *  the visitor asked for a section, so leave the browser to honour it. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  const locale = useLocaleState();

  return (
    <LocaleContext.Provider value={locale}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </LocaleContext.Provider>
  );
}
