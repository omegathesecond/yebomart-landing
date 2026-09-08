import { useCallback, useEffect, useState, type CSSProperties } from 'react';
import { useInView, useReducedMotion } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { ASSISTANT_QA, SHOP } from '@/data/copy';

const CYCLE = 5600;
const TYPING = 700;

/* Auto-cycles four real questions while on screen; the tabs name the topic
   rather than numbering the questions, so the strip doubles as proof of range.
   One question arrives spoken. Reduced motion shows the first pair, no typing
   pause, no cycling, no pulse. */
export function AssistantDemo() {
  const { ref, inView } = useInView<HTMLDivElement>({ once: false, threshold: 0.3 });
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);
  const [typing, setTyping] = useState(false);
  const running = inView && !reduced;

  const select = useCallback(
    (n: number) => {
      setI(n);
      setTyping(!reduced);
    },
    [reduced],
  );

  useEffect(() => {
    if (!running) return;
    const id = window.setTimeout(() => select((i + 1) % ASSISTANT_QA.length), CYCLE);
    return () => window.clearTimeout(id);
  }, [running, i, select]);

  useEffect(() => {
    if (!typing) return;
    const id = window.setTimeout(() => setTyping(false), TYPING);
    return () => window.clearTimeout(id);
  }, [typing, i]);

  const qa = ASSISTANT_QA[i];
  const listening = Boolean(qa.spoken) && !reduced;

  return (
    <div ref={ref} className="overflow-hidden rounded-sharp border border-line bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-brand font-display text-[13px] font-bold text-cream">
            Y
          </span>
          <div>
            <div className="font-display text-[14px] font-semibold leading-tight">Yebo</div>
            <div className="font-mono text-[10px] uppercase tracking-eyebrow text-mute">Assistant · {SHOP}</div>
          </div>
        </div>
        <span className="hidden font-mono text-[10px] uppercase tracking-eyebrow text-mute sm:block">Reading today's sales</span>
      </div>

      <div role="tablist" aria-label="Example questions" className="no-bar flex gap-1 overflow-x-auto border-b border-line px-3">
        {ASSISTANT_QA.map((item, n) => (
          <button
            key={item.tab}
            role="tab"
            aria-selected={n === i}
            onClick={() => select(n)}
            className={`whitespace-nowrap border-b-2 px-2.5 py-2.5 font-mono text-[11px] uppercase tracking-eyebrow transition-colors ${
              n === i ? 'border-brand text-ink' : 'border-transparent text-mute hover:text-ink'
            }`}
          >
            {item.tab}
          </button>
        ))}
      </div>

      <div className="min-h-[236px] space-y-4 px-5 py-5" aria-live="polite">
        <div key={`q${i}`} className="rv is-in flex justify-end">
          <div className="max-w-[85%] rounded-sharp rounded-tr-none bg-ink px-4 py-2.5 text-cream">
            {qa.spoken ? (
              <span className="mb-1.5 flex items-center gap-2">
                <Wave />
                <span className="font-mono text-[10px] uppercase tracking-eyebrow text-cream/60">Spoken</span>
              </span>
            ) : null}
            <p className="text-[14.5px]">{qa.q}</p>
          </div>
        </div>
        <div key={`a${i}`} className="rv is-in flex" style={{ '--d': '120ms' } as CSSProperties}>
          {typing ? (
            <span
              className="inline-flex items-center gap-1.5 rounded-sharp rounded-tl-none border border-line bg-wash px-4 py-3.5"
              aria-label="Thinking"
            >
              {[0, 1, 2].map((k) => (
                <span
                  key={k}
                  className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-brick"
                  style={{ animationDelay: `${k * 180}ms` }}
                />
              ))}
            </span>
          ) : (
            <p className="max-w-[92%] rounded-sharp rounded-tl-none border border-line bg-wash px-4 py-3 text-[14.5px] leading-[1.55]">
              {qa.a}
            </p>
          )}
        </div>
      </div>

      {/* Composer. The mic is the size of the send button, not a hint in a
          placeholder, because speaking is the point for someone stocking shelves. */}
      <div className="flex items-center gap-3 border-t border-line bg-sand px-4 py-3">
        <span className="flex-1 truncate font-mono text-[11.5px] text-mute">
          {listening ? 'Listening…' : 'Type a question, or hold to speak'}
        </span>
        <span className="relative grid h-10 w-10 shrink-0 place-items-center">
          {listening ? (
            <span aria-hidden="true" className="absolute inset-0 animate-pulse-dot rounded-full border-2 border-brand" />
          ) : null}
          <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-cream">
            <Icon name="mic" className="h-[18px] w-[18px]" />
          </span>
        </span>
      </div>
    </div>
  );
}

/* Seven bars at fixed heights: a waveform reads as one at a glance and stays
   still for anyone who asked for less motion. */
const BARS = [6, 11, 16, 9, 14, 7, 10];

function Wave() {
  return (
    <span aria-hidden="true" className="flex items-end gap-[2px]">
      {BARS.map((h, n) => (
        <span key={n} className="w-[2px] rounded-full bg-brand-hot" style={{ height: `${h}px` }} />
      ))}
    </span>
  );
}
