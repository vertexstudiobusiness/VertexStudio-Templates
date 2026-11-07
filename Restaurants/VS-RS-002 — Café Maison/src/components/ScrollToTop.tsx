import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-30 w-10 h-10 rounded-full bg-[#291F18] text-[#EFE8DC] hover:text-white hover:bg-[#1C1511] shadow-lg border border-[#EFE8DC]/30 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
      aria-label="Scroll to top of page"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
