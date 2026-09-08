import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/sections/Footer';
import { YeboLogo } from '@/components/ui/YeboLogo';
import { Eyebrow } from '@/components/ui/Eyebrow';

interface LegalLayoutProps {
  title: string;
  /** Human-readable last-revision date, shown under the title. */
  lastUpdated: string;
  children: ReactNode;
}

/**
 * Shared chrome for the standalone legal pages (Privacy, Terms). Lighter than
 * the marketing <Nav>: the section anchors only exist on the home route, so
 * this header just carries the logo and a way back.
 */
export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-cream/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link to="/" aria-label="YeboMart home">
            <YeboLogo />
          </Link>
          <Link to="/" className="font-display text-[14px] text-mute transition-colors hover:text-ink">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="px-5 pb-24 pt-32 sm:px-8">
        <article className="legal-prose mx-auto max-w-[70ch]">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-4 font-display text-[clamp(30px,4.6vw,48px)] font-bold leading-[1.06] tracking-tightest">{title}</h1>
          <p className="mb-10 mt-3 font-mono text-[11px] uppercase tracking-eyebrow text-mute">Last updated: {lastUpdated}</p>
          {children}
        </article>
      </main>

      <Footer />
    </>
  );
}
