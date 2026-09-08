import type { CSSProperties } from 'react';
import { LOOP } from '@/data/copy';
import { Reveal } from '@/components/ui/Reveal';

/* Five stations in a row, and one wire that comes back: the assistant's
   advice feeds the next order, which feeds the next sale. Wires draw and
   nodes light in sequence when the figure scrolls into view; the last node
   flips to the OK colour; a runner then travels the return wire on a loop. */
const X = [0, 235, 470, 705, 940];
const RETURN = 'M1040 150 V250 H100 V150';

const v = (o: Record<string, string | number>) => o as CSSProperties;

export function DiagramLoop() {
  return (
    <figure className="fig m-0">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-eyebrow text-mist lg:hidden">Swipe to see the whole drawing →</p>
      <Reveal self={false} className="no-bar overflow-x-auto overscroll-x-contain">
        <div className="min-w-[900px]">
          <svg
            viewBox="0 0 1140 300"
            className="h-auto w-full"
            role="img"
            aria-label="The YeboMart loop: till, stock, cash-up, WhatsApp report, assistant, and the assistant's advice feeding back into the till."
          >
            {/* hops between stations */}
            {X.slice(0, 4).map((x, i) => (
              <path
                key={`hop-${i}`}
                className="fig-wire"
                d={`M${x + 200} 95 H${x + 235}`}
                stroke="var(--fig-line)"
                strokeWidth="1.5"
                fill="none"
                style={v({ '--len': 35, '--d': `${280 + i * 170}ms` })}
              />
            ))}
            {/* return wire: advice back to the till */}
            <path
              className="fig-wire"
              d={RETURN}
              stroke="var(--fig-line)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="1140"
              style={v({ '--len': 1140, '--d': '1150ms', '--dur': '1400ms' })}
            />
            <path
              className="fade-step"
              d="M93 159 L100 150 L107 159"
              stroke="var(--fig-line)"
              strokeWidth="1.5"
              fill="none"
              style={v({ '--d': '2500ms' })}
            />
            <text className="m fade-step" x="570" y="276" textAnchor="middle" fill="var(--fig-accent)" fontSize="11" letterSpacing="1.6" style={v({ '--d': '2300ms' })}>
              RESTOCK ADVICE → NEXT ORDER
            </text>
            <circle className="fig-runner" r="4.5" fill="var(--fig-hot)" style={v({ offsetPath: `path('${RETURN}')`, '--d': '2600ms' })} />

            {/* stations */}
            {LOOP.map((s, i) => {
              const last = i === LOOP.length - 1;
              return (
                <g key={s.n}>
                  <rect
                    className={last ? 'fig-hold' : 'fig-node'}
                    x={X[i]}
                    y="40"
                    width="200"
                    height="110"
                    stroke="var(--fig-line)"
                    strokeWidth="1.3"
                    fill="var(--color-ink)"
                    style={v({ '--d': `${i * 170}ms` })}
                  />
                  <g className="fade-step" style={v({ '--d': `${i * 170 + 120}ms` })}>
                    <text className="m" x={X[i] + 20} y="70" fill={last ? 'var(--fig-ok)' : 'var(--fig-muted)'} fontSize="11" letterSpacing="1.4">
                      {s.n}
                    </text>
                    <text x={X[i] + 20} y="101" fill={last ? 'var(--fig-ok)' : 'var(--fig-text)'} fontSize="19" fontWeight="600">
                      {s.title}
                    </text>
                    <text x={X[i] + 20} y="127" fill="var(--fig-muted)" fontSize="12.5">
                      {s.body}
                    </text>
                  </g>
                </g>
              );
            })}
            <line x1="0" y1="296" x2="1140" y2="296" stroke="var(--fig-soft)" strokeWidth="1" />
          </svg>
        </div>
      </Reveal>
      <figcaption className="mt-4 max-w-[70ch] font-mono text-[11px] leading-relaxed text-mist">
        Fig. 01 — Every station reads the same database, so a sale on the till is already in stock, in the cash-up, in
        tonight's report, and in what your assistant knows.
      </figcaption>
    </figure>
  );
}
