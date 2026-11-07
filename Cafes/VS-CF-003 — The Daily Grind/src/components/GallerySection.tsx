import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import type { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Spaces' },
    { id: 'focus', label: 'Focus & Study' },
    { id: 'coffee', label: 'Coffee & Kitchen' },
    { id: 'pods', label: 'Meeting Pods' },
    { id: 'verandah', label: 'Garden Verandah' },
  ];

  const filteredGallery = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = filteredGallery.findIndex((i) => i.id === item.id);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-sand-100 border-t border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-200 border border-sand-300 text-charcoal-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <ImageIcon className="w-3.5 h-3.5 text-ambercrema" />
            <span>Visual Tour</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 font-serif leading-tight">
            Inside The Daily Grind
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-600 font-normal">
            Take a look through our sunlit timber workspaces, acoustic focus mezzanine, soundproof meeting rooms, and covered tropical garden verandah.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-charcoal-900 text-sand-50 shadow-sm'
                  : 'bg-white text-charcoal-700 hover:bg-sand-200/80 border border-sand-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group relative rounded-2xl overflow-hidden bg-sand-200 border border-sand-300 aspect-[4/3] sm:aspect-square cursor-pointer shadow-sm hover:shadow-card transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-serif text-sm font-bold text-sand-50 leading-snug">{item.title}</p>
                  <Maximize2 className="w-4 h-4 text-ambercrema flex-shrink-0 ml-2" />
                </div>
                <p className="text-[11px] text-sand-200 line-clamp-1">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/90 backdrop-blur-md">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-charcoal-800 text-sand-50 flex items-center justify-center hover:bg-charcoal-700 transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-charcoal-800 text-sand-50 flex items-center justify-center hover:bg-charcoal-700 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Button */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-charcoal-800 text-sand-50 flex items-center justify-center hover:bg-charcoal-700 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Preview Box */}
            <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
              <div className="rounded-2xl overflow-hidden max-h-[70vh] shadow-elevated border border-charcoal-800 bg-charcoal-900">
                <img
                  src={filteredGallery[lightboxIndex].image}
                  alt={filteredGallery[lightboxIndex].title}
                  className="max-h-[70vh] w-auto object-contain mx-auto"
                />
              </div>
              <div className="mt-4 text-center text-sand-100 max-w-lg">
                <h4 className="font-serif text-lg font-bold text-white">
                  {filteredGallery[lightboxIndex].title}
                </h4>
                <p className="text-xs text-sand-300 mt-1">
                  {filteredGallery[lightboxIndex].caption}
                </p>
                <p className="text-[10px] text-sand-400 mt-2">
                  Image {lightboxIndex + 1} of {filteredGallery.length}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
