import { createElement, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

let motionFlagged = false;

/**
 * Adds `js-motion` to <html> on first use (so start states engage), then
 * reports when the element is on screen. `once` (default) latches true the
 * first time; `once: false` tracks visibility continuously (for demos that
 * should pause off-screen). Without IntersectionObserver it reports true —
 * the finished drawing.
 */
export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit & { once?: boolean }) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const once = options?.once ?? true;

  useEffect(() => {
    if (!motionFlagged) {
      document.documentElement.classList.add('js-motion');
      motionFlagged = true;
    }
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            if (once) io.disconnect();
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px', ...options },
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}

/** True when the visitor asked for reduced motion. Demos render a static final frame. */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const on = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return reduced;
}

/**
 * Wrapper that gains `.is-in` when scrolled into view. With `self` (default)
 * it also carries `.rv`, so it rises in itself; `.rv` descendants inherit
 * `--d` from `delay` unless they set their own.
 */
export function Reveal({
  as = 'div',
  className = '',
  delay = 0,
  self = true,
  children,
}: {
  as?: 'div' | 'li' | 'article' | 'figure';
  className?: string;
  delay?: number;
  self?: boolean;
  children: ReactNode;
}) {
  const { ref, inView } = useInView<HTMLElement>();
  return createElement(
    as,
    {
      ref,
      className: `${self ? 'rv' : ''} ${className} ${inView ? 'is-in' : ''}`.trim(),
      style: delay ? ({ '--d': `${delay}ms` } as CSSProperties) : undefined,
    },
    children,
  );
}
