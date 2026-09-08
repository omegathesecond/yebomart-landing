import type { ReactNode } from 'react';

type Variant = 'primary' | 'ink' | 'ghost' | 'onDark' | 'ghostDark';

const VARIANT: Record<Variant, string> = {
  primary: 'bg-brand text-ink hover:bg-ink hover:text-cream',
  ink: 'bg-ink text-cream hover:bg-brand hover:text-ink',
  ghost: 'border border-line-strong text-ink hover:border-ink hover:bg-ink hover:text-cream',
  onDark: 'bg-cream text-ink hover:bg-brand',
  ghostDark: 'border border-cream/40 text-cream hover:border-cream hover:bg-cream hover:text-ink',
};

const SIZE = {
  md: 'px-5 py-3 text-[15px]',
  lg: 'px-7 py-4 text-[16px]',
};

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  external = false,
  className = '',
  children,
}: {
  href: string;
  variant?: Variant;
  size?: 'md' | 'lg';
  external?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-sharp font-display font-medium transition-colors duration-200 ${VARIANT[variant]} ${SIZE[size]} ${className}`}
    >
      {children}
    </a>
  );
}
