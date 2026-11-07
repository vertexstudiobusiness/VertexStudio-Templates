import React, { useRef, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../types/hotel';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (currentIndex !== null) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onNavigate]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const r = dialog.getBoundingClientRect();
    const isOutside =
      e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    if (isOutside) {
      onClose();
    }
  };

  if (currentIndex === null) return null;
  const currentItem = items[currentIndex];

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onPointerDown={handlePointerDown}
      aria-labelledby="lightbox-image-title"
      className="m-auto w-[96vw] max-w-6xl max-h-[94vh] bg-haven-charcoal-dark text-haven-ivory p-0 border border-haven-stone/20 shadow-2xl backdrop:bg-haven-charcoal/90 backdrop:backdrop-blur-md"
    >
      <div
        className="flex flex-col h-full max-h-[94vh] select-none"
        onPointerDown={(e) => e.stopPropagation()}
      >
        {/* Top Controls Bar */}
        <div className="flex items-center justify-between p-4 bg-haven-charcoal/80 border-b border-white/10 text-xs">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-haven-stone-light">
              {currentIndex + 1} / {items.length}
            </span>
            <span className="text-[10px] tracking-widest uppercase px-2 py-0.5 bg-white/10 rounded-xs text-haven-sand">
              {currentItem.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="p-2 text-haven-ivory/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Image Viewport with Nav Arrows */}
        <div className="relative flex-1 flex items-center justify-center p-3 sm:p-6 min-h-[50vh] sm:min-h-[65vh] bg-black/40 overflow-hidden">
          <img
            src={currentItem.url}
            alt={currentItem.title}
            className="max-h-[70vh] max-w-full object-contain mx-auto shadow-2xl transition-opacity duration-300"
            key={currentItem.id}
          />

          {/* Previous Button */}
          <button
            type="button"
            onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-haven-charcoal/80 hover:bg-haven-charcoal text-white flex items-center justify-center transition-all border border-white/15"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={() => onNavigate((currentIndex + 1) % items.length)}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-haven-charcoal/80 hover:bg-haven-charcoal text-white flex items-center justify-center transition-all border border-white/15"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Caption Bar */}
        <div className="p-4 sm:p-5 bg-haven-charcoal border-t border-white/10 text-center">
          <h3 id="lightbox-image-title" className="font-serif text-lg sm:text-xl text-haven-ivory font-light">
            {currentItem.title}
          </h3>
          <p className="text-xs text-haven-stone-light/80 mt-1 font-sans">
            {currentItem.caption}
          </p>
        </div>
      </div>
    </dialog>
  );
};
