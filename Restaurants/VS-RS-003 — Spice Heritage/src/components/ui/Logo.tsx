import { business } from "../../config/site";

/** Mughal-arch monogram flame mark. */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 48" className={className} aria-hidden="true">
      <path
        d="M20 2 C11 9.5 6.5 16.5 6.5 27 L6.5 45 L33.5 45 L33.5 27 C33.5 16.5 29 9.5 20 2 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M20 16.5 C16.6 20.2 15.1 23.2 15.1 26.2 C15.1 30 17.3 32 20 32 C22.7 32 24.9 30 24.9 26.2 C24.9 23.2 23.4 20.2 20 16.5 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <circle cx="20" cy="37.5" r="1.7" fill="currentColor" />
    </svg>
  );
}

/** Full logo lock-up: monogram + serif wordmark + tagline whisker. */
export function Logo({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Monogram className={compact ? "h-8 w-7" : "h-10 w-8 md:h-11 md:w-9"} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-semibold tracking-wide ${
            compact ? "text-lg" : "text-xl md:text-2xl"
          }`}
        >
          {business.name}
        </span>
        <span
          className={`font-body font-light uppercase text-gold-500 tracking-[0.34em] ${
            compact ? "text-[8.5px]" : "text-[9px] md:text-[10px]"
          }`}
        >
          {business.tagline}
        </span>
      </span>
    </span>
  );
}
