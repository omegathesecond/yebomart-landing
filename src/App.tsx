import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import { PrivacyPolicy } from '@/components/legal/PrivacyPolicy';
import { Terms } from '@/components/legal/Terms';

function Home() {
  return (
    <>
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
    </>
  );
}

/** Reset scroll position when navigating between routes (the home page uses
 *  `scroll-behavior: smooth`, which otherwise leaves legal pages scrolled). */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
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
