import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/hotelData';
import { LightboxModal } from './LightboxModal';
import { Maximize2 } from 'lucide-react';

export const EditorialGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Perspectives' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'interiors', label: 'Sanctuary Interiors' },
    { id: 'grounds', label: 'Estates & Pools' },
    { id: 'dining', label: 'Culinary' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    // Find index in filteredItems or original list
    setLightboxIndex(index);
  };

  return (
    <section
      id="gallery"
      className="py-20 sm:py-28 lg:py-36 bg-haven-ivory text-haven-charcoal relative overflow-hidden"
      aria-label="Editorial Gallery"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-3">
              <span className="h-[1px] w-8 sm:w-12 bg-haven-stone/50" />
              <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-haven-stone-dark font-medium">
                Visual Monograph
              </span>
            </div>
            <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-haven-charcoal font-light tracking-tight">
              Moments of Quiet Splendor
            </h2>
            <p className="mt-3 text-xs xs:text-sm sm:text-base text-haven-stone-dark leading-relaxed font-sans">
              An architectural and sensory photographic study of The Haven’s spaces, textures, light, and solitude.
            </p>
          </div>

          <div className="text-xs text-haven-stone-dark hidden sm:block">
            <span className="font-mono">Tap any image for fullscreen view</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs tracking-[0.14em] uppercase transition-all duration-200 whitespace-nowrap border ${
                activeCategory === cat.id
                  ? 'bg-haven-charcoal text-haven-ivory border-haven-charcoal'
                  : 'bg-white text-haven-charcoal/80 border-haven-stone/30 hover:border-haven-stone'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
          {filteredItems.map((item, idx) => {
            // Asymmetric layout classes
            const colSpanClass =
              idx % 6 === 0
                ? 'lg:col-span-8'
                : idx % 6 === 1
                ? 'lg:col-span-4'
                : idx % 6 === 2
                ? 'lg:col-span-4'
                : idx % 6 === 3
                ? 'lg:col-span-4'
                : idx % 6 === 4
                ? 'lg:col-span-4'
                : 'lg:col-span-12';

            const heightClass =
              idx % 6 === 0
                ? 'h-[300px] xs:h-[380px] sm:h-[480px]'
                : idx % 6 === 5
                ? 'h-[280px] xs:h-[340px] sm:h-[420px]'
                : 'h-[260px] xs:h-[320px] sm:h-[380px]';

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className={`${colSpanClass} relative group overflow-hidden bg-haven-sand cursor-pointer border border-haven-stone/20`}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className={`w-full ${heightClass} object-cover transition-transform duration-700 ease-out group-hover:scale-105`}
                  loading="lazy"
                />

                {/* Hover / Tap Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-haven-charcoal/85 via-haven-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-haven-ivory">
                  <div className="flex justify-end">
                    <span className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-haven-sand block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-light">
                      {item.title}
                    </h3>
                    <p className="text-xs text-haven-stone-light/90 font-sans mt-0.5 line-clamp-1">
                      {item.caption}
                    </p>
                  </div>
                </div>

                {/* Mobile permanent subtle caption bar */}
                <div className="sm:hidden absolute bottom-0 inset-x-0 p-2.5 bg-haven-charcoal/60 backdrop-blur-xs text-haven-ivory flex items-center justify-between text-[11px]">
                  <span className="font-serif truncate">{item.title}</span>
                  <span className="text-[9px] uppercase tracking-wider text-haven-sand ml-2 shrink-0">
                    View
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal Component */}
        <LightboxModal
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      </div>
    </section>
  );
};
