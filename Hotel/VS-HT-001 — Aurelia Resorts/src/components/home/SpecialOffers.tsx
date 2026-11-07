import React, { useState } from 'react';
import { SPECIAL_OFFERS } from '../../data/resortData';
import type { SpecialOffer } from '../../types';
import { Tag, Calendar, Check, ArrowRight, MessageSquare } from 'lucide-react';
import { ModalDialog } from '../common/ModalDialog';

interface SpecialOffersProps {
  onOpenBooking: (roomOrOfferName?: string) => void;
}

export const SpecialOffers: React.FC<SpecialOffersProps> = ({ onOpenBooking }) => {
  const [selectedOffer, setSelectedOffer] = useState<SpecialOffer | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenOffer = (offer: SpecialOffer) => {
    setSelectedOffer(offer);
    setModalOpen(true);
  };

  return (
    <section id="offers" className="py-20 sm:py-28 bg-[#0b251f] text-[#fcfbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.25em] uppercase text-[#dfbe85] mb-3">
            <span className="w-4 h-[1px] bg-[#c5a880]" />
            <span>Curated Packages</span>
            <span className="w-4 h-[1px] bg-[#c5a880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#fcfbf9] font-light tracking-tight leading-tight">
            Privileged Stays & <br className="hidden sm:inline" />
            <span className="italic font-normal gold-gradient-text">Exclusive Privileges</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#dacdbd] font-sans leading-relaxed">
            Enhance your stay with thoughtfully designed retreat packages offering complimentary nights, spa credits, and Michelin-calibre culinary immersions.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPECIAL_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="bg-[#061410] rounded-2xl overflow-hidden border border-[#c5a880]/30 shadow-xl hover:border-[#dfbe85] transition-all duration-500 flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061410] via-black/30 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#c5a880] text-[#061410] text-[10px] font-sans tracking-widest uppercase font-bold">
                    {offer.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-xs text-[#dfbe85] flex items-center space-x-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{offer.savings}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[11px] text-[#dacdbd] font-sans flex items-center space-x-1 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>{offer.validity}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#fcfbf9] group-hover:text-[#dfbe85] transition-colors">
                    {offer.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-stone-300 leading-relaxed line-clamp-3">
                    {offer.description}
                  </p>
                </div>

                {/* Inclusions summary */}
                <div className="space-y-1.5 py-3 border-t border-white/10 text-xs text-stone-300">
                  {offer.inclusions.slice(0, 2).map((inc, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-[#dfbe85] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{inc}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenOffer(offer)}
                    className="min-h-[44px] px-3 py-2.5 rounded-xl border border-[#c5a880]/40 hover:border-[#dfbe85] text-[#fcfbf9] text-[11px] font-sans tracking-[0.14em] uppercase font-semibold transition-all flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(offer.title)}
                    className="min-h-[44px] px-3 py-2.5 rounded-xl bg-gradient-to-r from-[#c5a880] to-[#dfbe85] hover:from-[#dfbe85] hover:to-[#ead8b7] text-[#05130f] text-[11px] font-sans tracking-[0.14em] uppercase font-bold shadow transition-all flex items-center justify-center space-x-1 cursor-pointer active:scale-95"
                  >
                    <span>Reserve</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offer Detail Modal Dialog */}
      <ModalDialog
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        titleId="offer-modal-title"
        title={selectedOffer?.title}
        maxWidthClass="max-w-2xl"
      >
        {selectedOffer && (
          <div className="space-y-5">
            <div className="rounded-xl overflow-hidden h-60">
              <img
                src={selectedOffer.image}
                alt={selectedOffer.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-[#937345]">
              <span className="font-semibold uppercase tracking-wider">{selectedOffer.tag}</span>
              <span>{selectedOffer.validity}</span>
            </div>

            <p className="text-sm text-[#1c5246] leading-relaxed">
              {selectedOffer.description}
            </p>

            <div className="space-y-2 bg-stone-50 p-4 rounded-xl border border-[#c5a880]/20">
              <h4 className="font-serif text-base font-semibold text-[#0b251f]">Package Privileges</h4>
              <div className="space-y-2">
                {selectedOffer.inclusions.map((inc, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-[#143d34]">
                    <Check className="w-4 h-4 text-[#937345] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#c5a880]/20 flex flex-col sm:flex-row justify-between items-center gap-3">
              <div className="text-xs text-stone-500 font-mono">
                Booking Code: <span className="font-bold text-[#0b251f]">{selectedOffer.code}</span>
              </div>

              <div className="flex space-x-2 w-full sm:w-auto">
                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(
                    `Hello Aurelia Concierge, I would like to inquire about the package: ${selectedOffer.title} (Code: ${selectedOffer.code}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-full border border-emerald-600/40 text-emerald-800 text-xs font-sans tracking-wider uppercase font-semibold flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setModalOpen(false);
                    onOpenBooking(selectedOffer.title);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#c5a880] to-[#dfbe85] text-[#05130f] text-xs font-sans tracking-wider uppercase font-bold shadow flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Claim Package</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </ModalDialog>
    </section>
  );
};
