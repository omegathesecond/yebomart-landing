import type { ReactNode } from 'react';

/* 24px line icons, stroke = currentColor. No emoji anywhere on the page. */
const PATHS = {
  till: (
    <>
      <rect x="3" y="10" width="18" height="10" rx="1" />
      <path d="M7 10V6h10v4M8 14h8M8 17h4" />
    </>
  ),
  stock: <path d="M3 7l9-4 9 4v10l-9 4-9-4V7zM3 7l9 4 9-4M12 11v10" />,
  cash: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="1" />
      <circle cx="12" cy="12" r="3" />
      <path d="M6 12h.01M18 12h.01" />
    </>
  ),
  staff: (
    <>
      <circle cx="9" cy="7" r="4" />
      <path d="M2 21v-2a4 4 0 014-4h6a4 4 0 014 4v2M16 3.1a4 4 0 010 7.8M22 21v-2a4 4 0 00-3-3.9" />
    </>
  ),
  returns: <path d="M3 7h13a5 5 0 010 10H9M7 3L3 7l4 4" />,
  supplier: (
    <>
      <path d="M1 4h15v12H1zM16 9h4l3 3v4h-7z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </>
  ),
  credit: <path d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />,
  expense: <path d="M6 2h12v20l-3-2-3 2-3-2-3 2V2zM9 8h6M9 12h6" />,
  audit: <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2 2 2 0 01-2 2h-2a2 2 0 01-2-2zM9 14l2 2 4-4" />,
  tax: (
    <>
      <path d="M19 5L5 19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </>
  ),
  check: <path d="M20 6L9 17l-5-5" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  whatsapp: <path d="M21 11.5a8.5 8.5 0 01-12.4 7.5L3 21l2-5.4A8.5 8.5 0 1121 11.5zM9 9.5c.3 2.5 2.5 4.5 5 5l1.2-1.2a.6.6 0 01.6-.15l1.7.6M9 9.5l.6-1.7a.6.6 0 00-.15-.6L8.3 6" />,
  phone: <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.6a2 2 0 01-.5 2.1L8.1 9.6a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.8.3 1.7.6 2.6.7a2 2 0 011.7 2.3z" />,
  scan: <path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M7 12h10" />,
  printer: <path d="M6 9V3h12v6M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v7H6z" />,
  offline: <path d="M3 3l18 18M17.5 17H7a4 4 0 01-.9-7.9M9.5 5.6A7 7 0 0119 12v.5a4 4 0 012.6 3.2" />,
  sync: <path d="M21 12a9 9 0 11-2.6-6.4M21 3v6h-6" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10 15 15 0 014-10z" />
    </>
  ),
  chat: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
  sms: <path d="M4 4h16v12H8l-4 4V4zM8 9h8M8 12h5" />,
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="1" />
      <path d="M22 6l-10 7L2 6" />
    </>
  ),
  store: <path d="M3 9l1-5h16l1 5M3 9a3 3 0 006 0 3 3 0 006 0 3 3 0 006 0M5 11v10h14V11M9 21v-6h6v6" />,
  mic: (
    <>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10a7 7 0 0014 0M12 17v4M8 21h8" />
    </>
  ),
  spark: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />,
  plus: <path d="M12 5v14M5 12h14" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  pin: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="1" />
      <path d="M8 10V7a4 4 0 018 0v3M12 15v2" />
    </>
  ),
  report: <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />,
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof PATHS;

export function Icon({ name, className = 'h-6 w-6' }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}
