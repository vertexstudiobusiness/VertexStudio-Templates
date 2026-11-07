import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const CartIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="17" cy="20" r="1.4" fill="currentColor" stroke="none" />
    <path d="M2.5 3.5h2l2.4 11.2a1.6 1.6 0 0 0 1.6 1.3h8.3a1.6 1.6 0 0 0 1.6-1.2l1.9-7.3H6" />
  </svg>
);

export const PlusIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const MinusIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14" />
  </svg>
);

export const CloseIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const ArrowRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const ArrowLeft = (p: P) => (
  <svg {...base} {...p}>
    <path d="M20 12H5M11 6l-6 6 6 6" />
  </svg>
);

export const ChevronLeft = (p: P) => (
  <svg {...base} {...p}>
    <path d="M15 5l-7 7 7 7" />
  </svg>
);

export const ChevronRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M9 5l7 7-7 7" />
  </svg>
);

export const StarIcon = ({ filled = true, ...p }: P & { filled?: boolean }) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.6}>
    <path d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9z" />
  </svg>
);

export const CheckIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 12.5l5 5L20 6.5" />
  </svg>
);

export const MenuIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h10" />
  </svg>
);

export const QuoteIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p} fill="currentColor">
    <path d="M10 7v4H5.5c0 3 1 5.5 3.5 5.5V20c-4 0-6.5-3.4-6.5-9V7zM21 7v4h-4.5c0 3 1 5.5 3.5 5.5V20c-4 0-6.5-3.4-6.5-9V7z" />
  </svg>
);

export const PhoneIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

export const MapPinIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-6 7-11.5A7 7 0 0 0 5 9.5C5 15 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.6" />
  </svg>
);

export const ClockIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
);

export const HeartIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p} fill="currentColor">
    <path d="M12 21s-8.5-5.3-8.5-11A4.7 4.7 0 0 1 12 7.4 4.7 4.7 0 0 1 20.5 10c0 5.7-8.5 11-8.5 11z" />
  </svg>
);

export const FlameIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p} fill="currentColor">
    <path d="M12 2.5c.7 2.4 3 3.8 3 7 0 1-.3 1.9-.8 2.6.1-1.4-.7-2.6-1.7-3.4.2 2.3-2.5 3.4-2.5 5.6a2 2 0 0 0 .7 1.5C9 15.5 7.4 13.8 7.4 11c0-4 4-4.4 4.6-8.5z" />
    <path d="M12 22a5.2 5.2 0 0 1-5.2-5.2C6.8 13 10 12 10 9c2.5 1.8 7.2 3.1 7.2 7.8A5.2 5.2 0 0 1 12 22z" opacity="0" />
  </svg>
);

export const LeafIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p} fill="currentColor">
    <path d="M5 21c0-8 5-15 14-15 0 9-5 14-11 14-1 0-2-.1-2-.4L8 17c5-1 8-4 9-8-4 1-10 4-11 8-.4 1.4-.6 2.8-1 4z" />
  </svg>
);

/* Brand marks ─────────────────────────────────────────────── */

export const WhatsAppIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p} fill="currentColor">
    <path d="M12 2a10 10 0 0 0-8.7 15L2 22l5.2-1.3A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 1 1-8.2 8.2c0-1.3.3-2.6.9-3.7l-1-3.2 3.3.9c1.5-.8 3.2-1.3 5-1.3zm-3 3.3c-.2 0-.6.1-.8.4-.3.3-.9 1-.9 2.2s.9 2.5 1 2.7c.2.2 1.9 3 4.7 4.1 2.3.9 2.8.7 3.3.7s1.6-.6 1.8-1.2c.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-2.2-1c-.3-.1-.5-.2-.7.1l-1 1.2c-.2.2-.4.2-.6.1a8.6 8.6 0 0 1-2.5-1.6 9.5 9.5 0 0 1-1.7-2.2c-.2-.3 0-.4.1-.6l.6-.7c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-1-2.3c-.2-.4-.4-.4-.6-.4z" />
  </svg>
);

export const InstagramIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const XIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p} fill="currentColor">
    <path d="M17.8 3h3.1l-6.8 7.8L22 21h-6.3l-4.9-6.4L5.2 21H2.1l7.3-8.3L2.5 3h6.4l4.4 5.8zm-1.1 16.2h1.7L7.8 4.7H6z" />
  </svg>
);
