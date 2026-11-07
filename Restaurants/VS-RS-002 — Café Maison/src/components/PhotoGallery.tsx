import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_PHOTOS } from '../data/galleryData';
import type { GalleryPhoto } from '../types';
import { ImageLightboxModal } from './ImageLightboxModal';
import { Camera, Eye } from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [filter, setFilter] = useState<'all' | 'coffee' | 'pastry' | 'interior' | 'moments'>('all');

  const filteredPhotos = filter === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === filter);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#F7F3EB] border-t border-[#EFE8DC]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2.5 sm:space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#4F5E4B] font-semibold">
            <Camera className="w-3.5 h-3.5 text-[#B86749]" />
            <span>Visual Journal</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1511] leading-tight">
            Moments at Café Maison
          </h2>
          <div className="w-12 h-[1.5px] bg-[#B86749] mx-auto mt-3" />
          <p className="text-[#5C473A] text-xs sm:text-sm md:text-base leading-relaxed font-light pt-1">
            Sunlight catching the steam of an early morning espresso, parchment paper dusted with flour, and quiet conversations that linger until dusk.
          </p>

          {/* Filter Chips (Mobile-friendly swiper) */}
          <div className="-mx-3.5 px-3.5 sm:mx-0 sm:px-0 flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 pt-3 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'coffee', label: 'Coffee' },
              { id: 'pastry', label: 'Viennoiserie' },
              { id: 'interior', label: 'Architecture' },
              { id: 'moments', label: 'Details' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`min-h-[36px] px-3 py-1.5 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.1em] font-medium whitespace-nowrap transition-colors shrink-0 active:scale-95 ${
                  filter === cat.id
                    ? 'bg-[#291F18] text-[#F7F3EB]'
                    : 'bg-[#FBF8F3] text-[#5C473A] hover:bg-[#EFE8DC]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Columns on Mobile (Instagram aesthetic), 3-Columns on Desktop */}
        <div className="columns-2 lg:columns-3 gap-3 sm:gap-6 space-y-3 sm:space-y-6">
          <AnimatePresence>
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="break-inside-avoid"
              >
                <div
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative cursor-pointer overflow-hidden rounded-sm bg-[#EFE8DC] border border-[#EFE8DC] shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient & Hover / Tap Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1511]/85 via-[#1C1511]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-2.5 sm:p-5 text-left">
                    <div className="self-end">
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        <Eye className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <div className="text-white space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.16em] font-semibold text-[#EFE8DC]/80 block">
                        {photo.category}
                      </span>
                      <p className="font-serif text-xs sm:text-base lg:text-lg leading-snug font-medium text-white line-clamp-1">
                        {photo.title}
                      </p>
                      <p className="text-[10px] sm:text-xs text-[#EFE8DC]/80 line-clamp-1 hidden sm:block">
                        {photo.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Dialog Modal */}
        <ImageLightboxModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />

      </div>
    </section>
  );
};
