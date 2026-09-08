import type { ReactNode } from 'react';

/* Editorial section label: "01 — How it works". Styles live in index.css (.eyebrow). */
export function Eyebrow({ index, className = '', children }: { index?: string; className?: string; children: ReactNode }) {
  return (
    <span className={`eyebrow ${className}`}>
      {index ? <span className="num">{index}</span> : null}
      <span className="rule" aria-hidden="true" />
      {children}
    </span>
  );
}
