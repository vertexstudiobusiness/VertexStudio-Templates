import React from 'react';

export const RoyalDivider: React.FC<{
  className?: string;
  variant?: 'gold' | 'maroon' | 'sandstone';
  withCenterLotus?: boolean;
}> = ({ className = '', variant = 'gold', withCenterLotus = true }) => {
  const colorClass =
    variant === 'gold'
      ? 'text-gold-400 border-gold-300/40'
      : variant === 'maroon'
      ? 'text-maroon-700 border-maroon-600/30'
      : 'text-sandstone-500 border-sandstone-300/40';

  return (
    <div className={`flex items-center justify-center gap-3 w-full my-4 ${className}`}>
      <div className={`flex-1 h-[1px] bg-gradient-to-r from-transparent via-current to-current opacity-40 ${colorClass}`} />
      
      {withCenterLotus ? (
        <div className={`flex items-center gap-1.5 px-2 ${colorClass}`}>
          {/* Subtle Rajput lotus or diamond crest */}
          <span className="w-1.5 h-1.5 rotate-45 bg-current opacity-60 inline-block" />
          <svg className="w-5 h-5 fill-current opacity-90 inline-block" viewBox="0 0 24 24">
            <path d="M12 2C12 2 10 7 10 9C10 10.5 11 11.5 12 11.5C13 11.5 14 10.5 14 9C14 7 12 2 12 2Z" />
            <path d="M7 6C7 6 7 10 8 11.5C8.8 12.8 10 13.5 12 13.5C14 13.5 15.2 12.8 16 11.5C17 10 17 6 17 6C17 6 15 9.5 13.5 10.5C12.5 11 11.5 11 10.5 10.5C9 9.5 7 6 7 6Z" opacity="0.85" />
            <path d="M3 11C3 11 5 14 7 15C9 16 10.5 16 12 16C13.5 16 15 16 17 15C19 14 21 11 21 11C21 11 18 15 15.5 16.5C13.5 17.5 10.5 17.5 8.5 16.5C6 15 3 11 3 11Z" opacity="0.6" />
            <circle cx="12" cy="19" r="1.5" />
          </svg>
          <span className="w-1.5 h-1.5 rotate-45 bg-current opacity-60 inline-block" />
        </div>
      ) : (
        <span className={`w-2 h-2 rotate-45 bg-current opacity-70 ${colorClass}`} />
      )}

      <div className={`flex-1 h-[1px] bg-gradient-to-l from-transparent via-current to-current opacity-40 ${colorClass}`} />
    </div>
  );
};

export const ArchFrame: React.FC<{
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'gold';
}> = ({ children, className = '', variant = 'gold' }) => {
  const borderStyles =
    variant === 'gold'
      ? 'border border-gold-400/40 shadow-royal-gold'
      : variant === 'dark'
      ? 'border border-maroon-800/50 shadow-royal'
      : 'border border-sandstone-300/60 shadow-md';

  return (
    <div className={`relative overflow-hidden royal-cusped-arch ${borderStyles} ${className}`}>
      {/* Decorative inner arch accent line */}
      <div className="absolute inset-1.5 royal-cusped-arch border border-gold-300/20 pointer-events-none z-10" />
      {children}
    </div>
  );
};

export const CornerOrnament: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position, className = '' }) => {
  const rotationClass = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <svg
      className={`w-6 h-6 text-gold-400/60 fill-none stroke-current stroke-1 pointer-events-none ${rotationClass} ${className}`}
      viewBox="0 0 24 24"
    >
      <path d="M2 2 H14 C8 2 2 8 2 14 V2 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M2 2 L2 22 M2 2 L22 2" strokeWidth="1.5" />
      <circle cx="6" cy="6" r="1.5" fill="currentColor" />
    </svg>
  );
};
