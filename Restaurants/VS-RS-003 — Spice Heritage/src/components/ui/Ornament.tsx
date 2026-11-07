interface OrnamentProps {
  className?: string;
  /** Tailwind text color class that strokes the ornament */
  tone?: string;
  width?: number;
}

/** A refined lotus-diamond divider with tapering hairlines. */
export function Ornament({ className = "", tone = "text-gold-500", width = 220 }: OrnamentProps) {
  return (
    <svg
      width={width}
      height={16}
      viewBox="0 0 220 16"
      fill="none"
      aria-hidden="true"
      className={`${className} ${tone}`}
    >
      <line x1="0" y1="8" x2="86" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <circle cx="91" cy="8" r="2" fill="currentColor" opacity="0.8" />
      <g transform="translate(110 8)">
        <path d="M0 -7.4 L7.4 0 L0 7.4 L-7.4 0 Z" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <path d="M0 -3.8 L3.8 0 L0 3.8 L-3.8 0 Z" fill="currentColor" opacity="0.9" />
      </g>
      <circle cx="129" cy="8" r="2" fill="currentColor" opacity="0.8" />
      <line x1="134" y1="8" x2="220" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.55" />
    </svg>
  );
}
