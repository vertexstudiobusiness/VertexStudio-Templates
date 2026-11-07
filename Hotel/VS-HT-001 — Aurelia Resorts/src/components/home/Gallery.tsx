import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../../data/resortData';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Architecture', 'Villas', 'Pools & Ocean', 'Dining', 'Wellness'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#061410] text-[#fcfbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.25em] uppercase text-[#dfbe85] mb-3">
            <span className="w-4 h-[1px] bg-[#c5a880]" />
            <span>Visual Poetry</span>
            <span className="w-4 h-[1px] bg-[#c5a880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#fcfbf9] font-light tracking-tight leading-tight">
            Cinematic Glimpses of <br className="hidden sm:inline" />
            <span className="italic font-normal gold-gradient-text">Aurelia Sanctuaries</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#dacdbd] font-sans leading-relaxed">
            Immerse yourself in the interplay of Goan sunlight, stone textures, and horizon views through our curated lens.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 -mx-4 px-4 sm:mx-0 sm:px-0 space-x-2 sm:space-x-3 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans tracking-[0.16em] uppercase whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#c5a880] text-[#061410] font-bold shadow-lg'
                  : 'bg-white/5 text-[#dacdbd] hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer group border border-[#c5a880]/20 bg-stone-900"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#dfbe85]" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-sans tracking-widest uppercase text-[#dfbe85] font-semibold">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl font-medium mt-0.5">{item.title}</h3>
                <p className="text-xs text-stone-300 font-sans line-clamp-1 mt-1">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog (Modern Web Guidance Native Dialog) */}
      {lightboxIndex !== null && (
        <dialog
          open
          // @ts-ignore
          closedby="any"
          aria-label="Image gallery lightbox"
          className="fixed inset-0 z-50 w-screen h-screen m-0 p-0 max-w-none max-h-none bg-black/95 text-white flex flex-col items-center justify-center border-none"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close lightbox"
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            type="button"
            onClick={prevImage}
            aria-label="Previous photo"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={nextImage}
            aria-label="Next photo"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image and Caption Container */}
          <div className="relative max-w-5xl max-h-[85vh] p-4 flex flex-col items-center justify-center">
            <img
              src={filteredItems[lightboxIndex]?.image}
              alt={filteredItems[lightboxIndex]?.title}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center max-w-2xl px-4">
              <span className="text-xs uppercase tracking-widest text-[#dfbe85]">
                {filteredItems[lightboxIndex]?.category} • {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="font-serif text-2xl font-light mt-1">
                {filteredItems[lightboxIndex]?.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-sans mt-1">
                {filteredItems[lightboxIndex]?.caption}
              </p>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
};
