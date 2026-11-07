import React, { useEffect, useCallback } from 'react';
import { useHotel } from '../../context/HotelContext';
import { GALLERY_ITEMS } from '../../data/hotelConfig';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const LightboxModal: React.FC = () => {
  const {
    isLightboxOpen,
    lightboxIndex,
    openLightbox,
    closeLightbox
  } = useHotel();

  const handleNext = useCallback(() => {
    openLightbox((lightboxIndex + 1) % GALLERY_ITEMS.length);
  }, [lightboxIndex, openLightbox]);

  const handlePrev = useCallback(() => {
    openLightbox((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  }, [lightboxIndex, openLightbox]);

  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, closeLightbox, handleNext, handlePrev]);

  if (!isLightboxOpen) return null;

  const currentItem = GALLERY_ITEMS[lightboxIndex] || GALLERY_ITEMS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-walnut-950/95 backdrop-blur-lg p-3 sm:p-6 animate-fade-in">
      {/* Top Bar with Caption & Close */}
      <div className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between text-ivory-100 z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div>
          <span className="text-[10px] uppercase font-serif tracking-[0.25em] text-gold-400 block">
            {currentItem.category} • {lightboxIndex + 1} of {GALLERY_ITEMS.length}
          </span>
          <h3 className="font-display text-base sm:text-xl text-ivory-50 font-bold">
            {currentItem.title}
          </h3>
        </div>
        <button
          onClick={closeLightbox}
          className="p-2 rounded-full bg-walnut-900/80 hover:bg-white/20 text-sandstone-200 hover:text-white transition"
          aria-label="Close photo lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image */}
      <div className="relative max-w-5xl max-h-[80vh] w-full flex items-center justify-center p-2">
        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-gold-400/30"
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-walnut-900/80 hover:bg-gold-500 hover:text-walnut-950 text-gold-300 border border-gold-400/40 transition z-20"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-walnut-900/80 hover:bg-gold-500 hover:text-walnut-950 text-gold-300 border border-gold-400/40 transition z-20"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Caption */}
      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 text-center bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
        <p className="text-xs sm:text-sm text-sandstone-200 font-serif max-w-xl mx-auto italic">
          "{currentItem.caption}"
        </p>
      </div>
    </div>
  );
};

