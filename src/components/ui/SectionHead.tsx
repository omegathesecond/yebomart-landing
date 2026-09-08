import { Eyebrow } from './Eyebrow';
import { Reveal } from './Reveal';

export function SectionHead({
  index,
  label,
  heading,
  lede,
  align = 'left',
  className = '',
}: {
  index?: string;
  label: string;
  heading: string;
  lede?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  const center = align === 'center';
  return (
    <Reveal className={`${center ? 'mx-auto text-center' : ''} ${className}`}>
      <Eyebrow index={index} className={`rv ${center ? 'justify-center' : ''}`}>
        {label}
      </Eyebrow>
      <h2
        className={`rv mt-5 max-w-[22ch] font-display text-[clamp(30px,4.6vw,52px)] font-bold leading-[1.06] tracking-tightest ${
          center ? 'mx-auto' : ''
        }`}
        style={{ '--d': '80ms' } as React.CSSProperties}
      >
        {heading}
      </h2>
      {lede ? (
        <p
          className={`lede rv mt-5 max-w-[58ch] text-[17px] leading-[1.62] ${center ? 'mx-auto' : ''}`}
          style={{ '--d': '160ms' } as React.CSSProperties}
        >
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}
