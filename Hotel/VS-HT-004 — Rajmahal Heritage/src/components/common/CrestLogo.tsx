import React from 'react';

interface CrestLogoProps {
  variant?: 'light' | 'dark' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showSubtitle?: boolean;
}

export const CrestLogo: React.FC<CrestLogoProps> = ({
  variant = 'gold',
  size = 'md',
  className = '',
  showSubtitle = true,
}) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-walnut-950' : variant === 'light' ? 'text-ivory-50' : 'text-gold-300';
  const accentColor = isDark ? 'text-maroon-800' : 'text-gold-400';

  const iconSizeClass = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8 sm:w-9 sm:h-9',
    lg: 'w-12 h-12 sm:w-14 sm:h-14',
  }[size];

  const textSizeClass = {
    sm: 'text-xs tracking-[0.18em]',
    md: 'text-sm xs:text-base sm:text-lg md:text-xl tracking-[0.18em] sm:tracking-[0.25em]',
    lg: 'text-xl sm:text-2xl md:text-3xl tracking-[0.22em] sm:tracking-[0.3em]',
  }[size];

  const subSizeClass = {
    sm: 'text-[8px] tracking-[0.2em]',
    md: 'text-[9px] sm:text-[10px] md:text-xs tracking-[0.22em] sm:tracking-[0.3em]',
    lg: 'text-xs md:text-sm tracking-[0.25em] sm:tracking-[0.35em]',
  }[size];

  return (
    <a
      href="#"
      className={`inline-flex items-center gap-2 group select-none transition-transform active:scale-98 shrink-0 ${className}`}
    >
      {/* Royal Monogram Emblem */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizeClass}`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Royal Seal Shield */}
          <polygon
            points="50,5 92,26 92,68 50,95 8,68 8,26"
            className={`${isDark ? 'fill-sandstone-100 stroke-maroon-800' : 'fill-maroon-950/80 stroke-gold-400'}`}
            strokeWidth="3"
          />
          {/* Inner Inset Shield */}
          <polygon
            points="50,12 85,30 85,64 50,87 15,64 15,30"
            className={`${isDark ? 'stroke-maroon-900/40' : 'stroke-gold-300/40'}`}
            strokeWidth="1.5"
            strokeDasharray="3 2"
          />
          {/* Royal Rajput Chhatri Crown on Top */}
          <path
            d="M32 28 C32 18, 50 14, 50 14 C50 14, 68 18, 68 28 Z"
            className={`${isDark ? 'fill-maroon-800' : 'fill-gold-400'}`}
          />
          <circle cx="50" cy="11" r="2.5" className={`${isDark ? 'fill-maroon-900' : 'fill-gold-200'}`} />
          {/* Traditional Cusped Archway inside shield */}
          <path
            d="M32 68 V42 C32 34 40 32 50 32 C60 32 68 34 68 42 V68"
            className={`${isDark ? 'stroke-maroon-900' : 'stroke-gold-400'}`}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Monogram 'R' */}
          <text
            x="50"
            y="57"
            fontFamily="'Cinzel', 'Playfair Display', serif"
            fontSize="26"
            fontWeight="bold"
            textAnchor="middle"
            className={`${isDark ? 'fill-maroon-950' : 'fill-gold-200'}`}
          >
            R
          </text>
          {/* Golden Diamond base */}
          <polygon
            points="50,72 54,76 50,80 46,76"
            className={`${isDark ? 'fill-maroon-800' : 'fill-gold-400'}`}
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col">
        <span
          className={`font-display uppercase font-bold leading-none ${textSizeClass} ${textColor}`}
        >
          Rajmahal
        </span>
        <span
          className={`font-serif uppercase text-gold-400/90 leading-tight mt-0.5 ${subSizeClass} ${accentColor}`}
        >
          Heritage
        </span>
        {showSubtitle && (
          <span className="text-[8px] font-sans tracking-[0.25em] uppercase text-sandstone-400/80 -mt-0.5 hidden sm:block">
            Palace Sanctuary • Estd 1742
          </span>
        )}
      </div>
    </a>
  );
};
