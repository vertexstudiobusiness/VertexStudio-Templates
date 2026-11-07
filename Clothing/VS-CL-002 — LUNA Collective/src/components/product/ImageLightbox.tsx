import React from 'react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const ImageLightbox: React.FC = () => {
  const { lightboxImage, closeLightbox } = useShop();

  if (!lightboxImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={closeLightbox}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={closeLightbox}
        className="absolute top-4 right-4 p-2.5 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors z-20"
        aria-label="Close image viewer"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={lightboxImage}
          alt="Product high resolution preview"
          className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl transition-transform duration-300"
        />
      </div>
    </div>
  );
};
