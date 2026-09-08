/**
 * The family mark: round Yebo-orange badge with a bold cream "Y", beside a
 * two-tone wordmark ("Yebo" orange, product suffix ink — cream on dark).
 * Pure markup, never an <img>, so it renders identically everywhere.
 * Spec: ~/.claude/skills/yebo-logo.
 */
type Props = {
  suffix?: string;
  onDark?: boolean;
  size?: 'sm' | 'md' | 'lg';
  badgeOnly?: boolean;
  className?: string;
};

const SIZE = {
  sm: { badge: 'h-7 w-7 text-[13px]', wordmark: 'text-lg', gap: 'gap-2' },
  md: { badge: 'h-8 w-8 text-[15px]', wordmark: 'text-xl', gap: 'gap-2.5' },
  lg: { badge: 'h-10 w-10 text-[18px]', wordmark: 'text-2xl', gap: 'gap-3' },
};

export function YeboLogo({ suffix = 'Mart', onDark = false, size = 'md', badgeOnly = false, className = '' }: Props) {
  const s = SIZE[size];
  const badge = (
    <span
      aria-hidden="true"
      className={`grid ${s.badge} shrink-0 place-items-center rounded-full bg-brand font-display font-bold text-cream`}
    >
      Y
    </span>
  );
  if (badgeOnly) return <span className={className}>{badge}</span>;
  return (
    <span className={`inline-flex items-center ${s.gap} ${className}`}>
      {badge}
      <span className={`font-display ${s.wordmark} font-semibold tracking-tight`}>
        <span className="text-brand">Yebo</span>
        <span className={onDark ? 'text-cream' : 'text-ink'}>{suffix}</span>
      </span>
    </span>
  );
}
