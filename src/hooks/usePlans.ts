import { useCallback, useEffect, useState } from 'react';

/**
 * The plans, read live from the API that actually bills them.
 *
 * The API raises the invoice, so its price is the one a shop pays. Mirroring
 * that table here in the page would drift the moment a price changed, and the
 * site would keep quoting the old number with nothing to catch it.
 *
 * There is deliberately NO hardcoded fallback. Showing yesterday's prices when
 * the endpoint is unreachable is exactly the silent fallback the house rules
 * forbid: it looks like a working page while quoting a number we might not
 * honour. If the fetch fails the section says so and offers a retry.
 */

const API_URL = import.meta.env.VITE_API_URL || 'https://api.yebomart.com';

export type PlanCode = 'TILL' | 'SHOP' | 'BUSY';

export interface ApiPlan {
  code: PlanCode;
  name: string;
  tagline: string;
  price_szl: number;
  automated_messages: boolean;
  features: string[];
  allowances: Record<string, number | null>;
}

interface State {
  plans: ApiPlan[] | null;
  loading: boolean;
  error: string | null;
}

export function usePlans() {
  const [state, setState] = useState<State>({ plans: null, loading: true, error: null });

  const load = useCallback(async () => {
    setState({ plans: null, loading: true, error: null });
    try {
      const res = await fetch(`${API_URL}/api/billing/plans`, {
        headers: { Accept: 'application/json' },
        // 8s: long enough for a cold Cloud Run start, short enough that a
        // visitor is not left staring at a spinner.
        signal: AbortSignal.timeout(8000),
      });
      const body = (await res.json().catch(() => null)) as
        | { success?: boolean; data?: { plans?: ApiPlan[] } }
        | null;

      if (!res.ok || !body?.success || !Array.isArray(body.data?.plans)) {
        throw new Error(`Pricing service returned ${res.status}`);
      }

      // Cheapest first, so the free plan reads as the entry point.
      const plans = [...body.data.plans].sort((a, b) => a.price_szl - b.price_szl);
      setState({ plans, loading: false, error: null });
    } catch (err) {
      setState({
        plans: null,
        loading: false,
        error: err instanceof Error ? err.message : 'Could not reach the pricing service',
      });
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { ...state, retry: load };
}
