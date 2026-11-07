import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const ANNOUNCEMENTS = [
  'Complimentary Express Shipping Across India on Orders Above ₹3,999',
  'The Noor Festive Edit ’26 is Live — Handwoven Chanderi & Organza',
  'Welcome to LUNA: Use Code LUNA10 for 10% Off Your First Order',
  'Boutique Concierge Available on WhatsApp for Personal Size & Styling Advice'
];

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
  };

  return (
    <div className="bg-[#3D2B1F] text-[#FAF8F5] py-2 px-3 text-xs tracking-wider transition-all relative overflow-hidden border-b border-[#5A4232]/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-center">
        <button
          onClick={handlePrev}
          aria-label="Previous announcement"
          className="p-1 hover:text-[#D4A59A] transition-colors focus:outline-none"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <div className="flex-1 flex items-center justify-center gap-2 px-2 overflow-hidden">
          <Sparkles className="w-3 h-3 text-[#D4A59A] shrink-0 animate-pulse" />
          <span className="truncate font-medium text-[11px] sm:text-xs tracking-wide">
            {ANNOUNCEMENTS[currentIndex]}
          </span>
        </div>

        <button
          onClick={handleNext}
          aria-label="Next announcement"
          className="p-1 hover:text-[#D4A59A] transition-colors focus:outline-none"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
