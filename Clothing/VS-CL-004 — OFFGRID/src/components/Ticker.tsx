import React from 'react';

interface TickerProps {
  reverse?: boolean;
  text?: string;
  className?: string;
}

export const Ticker: React.FC<TickerProps> = ({ 
  reverse = false, 
  className = "bg-brand-orange text-black border-y border-black font-display font-black text-sm sm:text-base py-2.5" 
}) => {
  const items = [
    'DROP 004 : SECTOR ZERO',
    'NOT MADE TO FIT IN',
    '300+ GSM HEAVYWEIGHT FLEECE',
    'NO RESTOCKS ONCE GONE',
    'WORLDWIDE DISPATCH FROM MUMBAI',
    'OFFGRID APPAREL LABS',
    'ANARCHIC SILHOUETTES',
    'STREET SYNDICATE'
  ];

  return (
    <div className={`w-full overflow-hidden whitespace-nowrap select-none ${className}`}>
      <div className={`inline-block flex items-center ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {[...items, ...items, ...items, ...items].map((phrase, idx) => (
          <span key={idx} className="inline-flex items-center mx-4 tracking-wider uppercase">
            <span>{phrase}</span>
            <span className="mx-3 opacity-60">///</span>
          </span>
        ))}
      </div>
    </div>
  );
};

