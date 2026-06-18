import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/sections/Footer';

interface LegalLayoutProps {
  title: string;
  /** Human-readable last-revision date, shown under the title. */
  lastUpdated: string;
  children: ReactNode;
}

/**
 * Shared chrome for the standalone legal pages (Privacy, Terms).
 *
 * Deliberately lighter than the marketing <Nav>: the section anchors
 * (`#problems`, `#pricing`, …) only exist on the home route, so we render a
 * minimal header whose logo links back home instead of re-using <Nav> with
 * dead in-page links.
 */
export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🛒</span>
            <span className="text-xl font-bold">YeboMart</span>
          </Link>
          <Link to="/" className="text-gray-400 hover:text-white transition text-sm">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="pt-28 pb-20 px-6">
        <article className="max-w-3xl mx-auto legal-prose">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
          <p className="text-gray-500 text-sm mb-10">Last updated: {lastUpdated}</p>
          {children}
        </article>
      </main>

      <Footer />
    </>
  );
}
