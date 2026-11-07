import React, { useEffect, useRef } from 'react';
import type { GalleryPhoto } from '../types';
import { X, Sparkles } from 'lucide-react';

interface ImageLightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({ photo, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (photo) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [photo]);

  const handleDialogClose = () => {
    if (dialogRef.current) {
      dialogRef.current.returnValue = '';
    }
    onClose();
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    const isOutside =
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom;

    if (isOutside) {
      handleDialogClose();
    }
  };

  if (!photo) return null;

  return (
    <dialog
      ref={dialogRef}
      onClose={handleDialogClose}
      onPointerDown={handlePointerDown}
      aria-labelledby="lightbox-title"
      {...({ closedby: 'any' } as any)}
      className="p-0 bg-transparent text-[#291F18] border-none max-w-4xl w-[94vw] max-h-[92vh] focus:outline-none backdrop:bg-[#1C1511]/85 my-auto"
    >
      <div
        className="relative bg-[#FBF8F3] rounded-sm border border-[#EFE8DC] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
        onPointerDown={(e) => e.stopPropagation()}
      >
        {/* Large Close Button (Easy thumb reach, 44x44px target) */}
        <button
          type="button"
          onClick={handleDialogClose}
          autoFocus
          className="absolute top-3 right-3 z-30 w-11 h-11 rounded-full bg-[#1C1511]/85 active:bg-[#1C1511] text-[#F7F3EB] flex items-center justify-center transition-transform active:scale-95 shadow-lg"
          aria-label="Close photo preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image (Responsive aspect) */}
        <div className="md:w-3/5 aspect-[4/3] md:aspect-auto max-h-[48vh] md:max-h-[75vh] bg-[#EFE8DC] overflow-hidden relative shrink-0">
          <img
            src={photo.image}
            alt={photo.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Caption & Story Details */}
        <div className="md:w-2/5 p-5 sm:p-8 flex flex-col justify-between text-left space-y-4 sm:space-y-6 bg-[#FBF8F3]">
          <div className="space-y-2.5 sm:space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-[#EFE8DC] text-[#4F5E4B] text-[10px] uppercase tracking-[0.2em] font-semibold">
              <Sparkles className="w-3 h-3 text-[#B86749]" />
              <span>{photo.category}</span>
            </div>

            <h3 id="lightbox-title" className="font-serif text-xl sm:text-3xl text-[#1C1511] leading-tight">
              {photo.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#5C473A] leading-relaxed font-light">
              {photo.subtitle}
            </p>
          </div>

          <div className="pt-4 sm:pt-6 border-t border-[#EFE8DC] space-y-2.5 sm:space-y-3">
            <div className="flex items-center justify-between text-xs text-[#7E6251]">
              <span>Location</span>
              <span className="font-medium text-[#291F18]">Café Maison, Pali Hill</span>
            </div>
            <div className="flex items-center justify-between text-xs text-[#7E6251]">
              <span>Ambiance</span>
              <span className="font-medium text-[#291F18]">Natural Daylight & Terrazzo</span>
            </div>
            <div className="pt-1">
              <button
                type="button"
                onClick={handleDialogClose}
                className="w-full min-h-[44px] py-2.5 bg-[#291F18] active:bg-[#1C1511] text-[#F7F3EB] text-xs uppercase tracking-[0.16em] font-medium rounded-sm transition-colors text-center"
              >
                Back to Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};
