import type { ReactNode } from 'react';

export type Tone = 'cream' | 'sand' | 'ink' | 'brand';

/* `on-ink` flips eyebrows, ledes, focus rings and figure palettes (see index.css),
   so a section moved between tones needs no per-child colour props. */
const TONE: Record<Tone, string> = {
  cream: 'bg-cream text-ink',
  sand: 'bg-sand text-ink',
  ink: 'on-ink bg-ink text-cream',
  brand: 'on-brand bg-brand text-ink',
};

export function Section({
  id,
  tone = 'cream',
  className = '',
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative scroll-mt-20 ${TONE[tone]} ${className}`}>
      {children}
    </section>
  );
}

export function Page({ className = '', children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-page px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}
