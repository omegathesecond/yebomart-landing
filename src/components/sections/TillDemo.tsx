import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { useInView, useReducedMotion } from '@/components/ui/Reveal';
import { Icon, type IconName } from '@/components/ui/Icon';
import { SHOP } from '@/data/copy';

/* One fictional Eswatini sale, replayed on a loop while the card is on
   screen. Amounts stay in SZL on purpose: it is a screenshot of one shop,
   not a price list, so it does not go through the currency converter. */
const ITEMS = [
  { name: 'White bread 700g', qty: 2, unit: 14 },
  { name: 'Fresh milk 1L', qty: 1, unit: 18.5 },
  { name: 'Airtime E20', qty: 1, unit: 20 },
];
const TOTAL = ITEMS.reduce((s, i) => s + i.qty * i.unit, 0);
const CASH = 70;

/* phase: 0 empty · 1–3 items ring up · 4 total counts · 5 stock chip ·
   6 saved offline · 7 synced + change given. WAIT[i] is the dwell at phase i. */
const LAST = 7;
const WAIT = [500, 800, 800, 800, 700, 700, 1300, 2600];

const money = (n: number) => `E${n.toFixed(2)}`;

function useCountUp(target: number, active: boolean, ms = 700) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) {
      setV(0);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / ms);
      setV(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, ms]);
  return v;
}

export function TillDemo() {
  const { ref, inView } = useInView<HTMLDivElement>({ once: false, threshold: 0.3 });
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState(0);
  const running = inView && !reduced;

  useEffect(() => {
    if (!running) return;
    const id = window.setTimeout(() => setPhase((p) => (p >= LAST ? 0 : p + 1)), WAIT[phase]);
    return () => window.clearTimeout(id);
  }, [running, phase]);

  const p = reduced ? LAST : phase;
  const counted = useCountUp(TOTAL, p >= 4 && !reduced);
  const total = reduced ? TOTAL : counted;

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[400px]" role="img" aria-label="A sale being rung up on the YeboMart till: three items, the total, stock dropping, then the sale syncing.">
      <div aria-hidden="true" className="absolute -inset-10 -z-10 rounded-full bg-wash blur-3xl" />
      <div className="overflow-hidden rounded-sharp border border-line bg-white shadow-card">
        <div className="flex items-start justify-between border-b border-line px-5 py-4">
          <div>
            <div className="font-display text-[15px] font-semibold">{SHOP}</div>
            <div className="mt-0.5 font-mono text-[11px] uppercase tracking-eyebrow text-mute">Till 1 · Cashier Sipho</div>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-eyebrow text-mute">
            <span className="inline-block h-2 w-2 animate-pulse-dot rounded-full bg-ok" />
            Live
          </div>
        </div>

        <div className="px-5 pt-4">
          <ul className="min-h-[132px] space-y-2.5">
            {ITEMS.slice(0, Math.min(p, 3)).map((it) => (
              <li key={it.name} className="rv is-in flex items-baseline justify-between gap-3">
                <div>
                  <div className="text-[15px]">{it.name}</div>
                  <div className="font-mono text-[11px] text-mute">
                    {it.qty} × {money(it.unit)}
                  </div>
                </div>
                <div className="font-mono text-[15px] tabular-nums">{money(it.qty * it.unit)}</div>
              </li>
            ))}
            {p === 0 ? (
              <li className="font-mono text-[12px] text-mute">
                Scan or tap an item<span className="animate-blink">▍</span>
              </li>
            ) : null}
          </ul>
          <div className="my-4 border-t border-dashed border-line-strong" />
          <div className="flex items-baseline justify-between">
            <span className="font-display text-[15px] font-semibold">Total</span>
            <span className={`font-mono text-[26px] font-medium tabular-nums ${p >= 4 ? 'text-ink' : 'text-mute/40'}`}>
              {money(p >= 4 ? total : 0)}
            </span>
          </div>
          <div
            className={`mt-1 flex justify-between font-mono text-[11px] text-mute transition-opacity duration-500 ${
              p >= 7 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span>Cash {money(CASH)}</span>
            <span>Change {money(CASH - TOTAL)}</span>
          </div>
        </div>

        <div className="mt-4 flex min-h-[54px] flex-wrap items-center gap-2 border-t border-line bg-sand px-5 py-3">
          {p >= 5 ? <Chip icon="stock">Bread 14 → 12 left</Chip> : null}
          {p === 6 ? (
            <Chip icon="offline" tone="mute">
              Saved offline
            </Chip>
          ) : null}
          {p >= 7 ? (
            <Chip icon="check" tone="ok">
              Synced
            </Chip>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function Chip({ icon, tone = 'ink', children }: { icon: IconName; tone?: 'ink' | 'mute' | 'ok'; children: ReactNode }) {
  const skin =
    tone === 'ok'
      ? 'border-ok/30 bg-ok/10 text-ok'
      : tone === 'mute'
        ? 'border-line-strong text-mute'
        : 'border-line bg-white text-ink';
  return (
    <span className={`rv is-in inline-flex items-center gap-1.5 rounded-sharp border px-2 py-1 font-mono text-[11px] ${skin}`} style={{ '--d': '0ms' } as CSSProperties}>
      <Icon name={icon} className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}
