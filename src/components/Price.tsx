import { useLocale } from '@/hooks/useLocale';

/**
 * Renders a SZL value in the visitor's currency. Same role as the
 * `<span data-price="...">` annotations in the old static page, but compiled
 * into the component tree instead of patched at runtime.
 */
export function Price({ szl, className }: { szl: number; className?: string }) {
  const { price } = useLocale();
  return <span className={className}>{price(szl)}</span>;
}
