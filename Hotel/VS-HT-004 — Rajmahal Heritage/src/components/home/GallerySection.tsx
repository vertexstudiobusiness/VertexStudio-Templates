import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { GALLERY_ITEMS } from '../../data/hotelConfig';
import { RoyalDivider } from '../common/RoyalOrnament';
import {
  Image,
  Maximize2,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { openLightbox } = useHotel();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Perspectives' },
    { id: 'architecture', label: 'Palace Architecture' },
    { id: 'rooms', label: 'Suites & Chambers' },
    { id: 'dining', label: 'Royal Dining' },
    { id: 'experiences', label: 'Traditions' },
    { id: 'weddings', label: 'Celebrations' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-ivory-50 text-walnut-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sandstone-100 border border-gold-400/50 text-maroon-900 text-xs font-serif uppercase tracking-[0.25em] mb-3">
            <Image className="w-3.5 h-3.5 text-gold-600" />
            <span>Visual Grandeur</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-maroon-950 font-bold tracking-tight">
            The Palace in Frames
          </h2>

          <RoyalDivider variant="gold" className="max-w-xs mx-auto my-4" />

          <p className="font-serif text-base sm:text-lg text-walnut-700 font-light leading-relaxed">
            Immerse yourself in illuminated courtyards, hand-painted frescoes, stepped lotus pools, and celestial twilight vistas.
          </p>

          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 mt-8 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 sm:px-5 sm:py-2 rounded-full text-xs font-serif uppercase tracking-wider transition-all duration-300 min-h-[40px] ${
                  activeCategory === cat.id
                    ? 'bg-maroon-900 text-gold-200 border border-gold-400 shadow-md'
                    : 'bg-white hover:bg-sandstone-100 text-walnut-700 border border-sandstone-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (Mobile-First 1-2 cols, md 3 cols, lg 4 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => {
            const globalIndex = GALLERY_ITEMS.findIndex(g => g.id === item.id);
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(globalIndex >= 0 ? globalIndex : 0)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-walnut-950 cursor-pointer shadow-md hover:shadow-2xl border border-sandstone-200 hover:border-gold-400 transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Hover / Tap overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-walnut-950/90 via-walnut-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-ivory-50">
                  <span className="text-[10px] uppercase font-serif tracking-widest text-gold-400 font-bold">
                    {item.category}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-ivory-50 line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-sandstone-300 line-clamp-1 mt-0.5 font-sans">
                    {item.caption}
                  </p>
                </div>

                {/* Subtle zoom icon badge */}
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-walnut-950/70 border border-gold-400/40 text-gold-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

