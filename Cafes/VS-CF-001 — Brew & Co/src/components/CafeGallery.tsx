import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { CAFE_GALLERY } from '../data/galleryData';
import type { GalleryPhoto } from '../types';

export const CafeGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Perspectives' },
    { id: 'interior', label: 'Interior & Seating' },
    { id: 'brew-bar', label: 'Brew Bar' },
    { id: 'roastery', label: 'Roasting Lab' },
    { id: 'atmosphere', label: 'Atmosphere' },
  ];

  const filteredPhotos = CAFE_GALLERY.filter(
    (photo) => activeCategory === 'all' || photo.category === activeCategory
  );

  const openLightbox = (photo: GalleryPhoto) => {
    const index = CAFE_GALLERY.findIndex((p) => p.id === photo.id);
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedPhotoIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedPhotoIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + CAFE_GALLERY.length) % CAFE_GALLERY.length;
    });
  }, []);

  const handleNext = useCallback(() => {
    setSelectedPhotoIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % CAFE_GALLERY.length;
    });
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, closeLightbox, handlePrev, handleNext]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPhotoIndex]);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-coffee-900 relative overflow-hidden border-t border-coffee-800">
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coffee-800 border border-caramel-500/25 text-caramel-400 text-xs uppercase tracking-widest font-semibold mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>The Lavelle Road Sanctuary</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory-50 tracking-tight">
            A Space for Coffee Purists
          </h2>
          <p className="mt-3 text-sm sm:text-base text-coffee-300 font-light">
            Designed around quiet natural light, hand-polished concrete, acoustic felt baffles, and the rhythmic hiss of espresso steam.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 mb-10 sm:mb-12 pb-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-caramel-500 to-copper-500 text-coffee-950 shadow-md'
                  : 'bg-coffee-850 hover:bg-coffee-800 text-coffee-300 hover:text-ivory-100 border border-coffee-750'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <AnimatePresence>
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => openLightbox(photo)}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-square bg-coffee-950 cursor-pointer border border-coffee-800 hover:border-caramel-500/50 shadow-lg"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Overlay on hover/tap */}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/40 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full bg-coffee-950/80 backdrop-blur-md text-caramel-300 border border-caramel-500/30">
                      {photo.categoryLabel}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-coffee-900/80 backdrop-blur-sm text-ivory-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5 text-caramel-400" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-sm sm:text-base font-bold text-ivory-50 leading-tight">
                      {photo.title}
                    </h3>
                    <p className="text-[11px] text-coffee-200 line-clamp-1 mt-0.5">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-coffee-950/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6"
            onClick={closeLightbox}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between z-10" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-3">
                <span className="font-serif text-lg sm:text-xl font-bold text-ivory-50">
                  {CAFE_GALLERY[selectedPhotoIndex].title}
                </span>
                <span className="text-xs font-mono text-caramel-400 px-2 py-0.5 rounded bg-coffee-850">
                  {selectedPhotoIndex + 1} of {CAFE_GALLERY.length}
                </span>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-coffee-850 hover:bg-coffee-800 text-ivory-100 hover:text-caramel-400 border border-coffee-700 active:scale-95 transition-all"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Display */}
            <div
              className="relative flex-1 flex items-center justify-center my-3 max-h-[75vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-coffee-900/80 hover:bg-coffee-800 text-ivory-100 hover:text-caramel-400 border border-coffee-700/60 shadow-xl active:scale-95 transition-all"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Photo */}
              <motion.img
                key={selectedPhotoIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                src={CAFE_GALLERY[selectedPhotoIndex].image}
                alt={CAFE_GALLERY[selectedPhotoIndex].title}
                className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl border border-coffee-800"
              />

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-coffee-900/80 hover:bg-coffee-800 text-ivory-100 hover:text-caramel-400 border border-coffee-700/60 shadow-xl active:scale-95 transition-all"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div
              className="max-w-2xl mx-auto text-center z-10 px-4 py-2"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-xs sm:text-sm text-coffee-200 font-light">
                {CAFE_GALLERY[selectedPhotoIndex].caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
