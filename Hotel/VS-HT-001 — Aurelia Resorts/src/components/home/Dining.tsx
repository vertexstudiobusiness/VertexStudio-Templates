import React, { useState } from 'react';
import { DINING_VENUES } from '../../data/resortData';
import type { DiningVenue } from '../../types';
import { Clock, Utensils, Sparkles, MessageSquare, ChefHat } from 'lucide-react';
import { ModalDialog } from '../common/ModalDialog';

export const Dining: React.FC = () => {
  const [selectedVenue, setSelectedVenue] = useState<DiningVenue | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenMenu = (venue: DiningVenue) => {
    setSelectedVenue(venue);
    setModalOpen(true);
  };

  return (
    <section id="dining" className="py-20 sm:py-28 bg-[#f7f4ee] text-[#143d34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.25em] uppercase text-[#937345] mb-3">
            <span className="w-4 h-[1px] bg-[#c5a880]" />
            <span>Gastronomic Mastery</span>
            <span className="w-4 h-[1px] bg-[#c5a880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0b251f] font-light tracking-tight leading-tight">
            Flavors Inspired By Land, <br className="hidden sm:inline" />
            <span className="italic font-normal">Woodfire & Sea</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#1c5246]/80 font-sans leading-relaxed">
            Three distinctive culinary sanctuaries celebrating coastal Indian traditions, woodfired gastronomy, and avant-garde botanical mixology.
          </p>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DINING_VENUES.map((venue) => (
            <div
              key={venue.id}
              className="bg-[#fcfbf9] rounded-2xl overflow-hidden border border-[#c5a880]/20 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#061410]/80 backdrop-blur-md border border-[#c5a880]/40 text-[#dfbe85] text-[10px] font-sans tracking-widest uppercase font-semibold">
                    {venue.type}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-xs text-white flex items-center justify-between">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-[#dfbe85]" />
                    <span className="truncate">{venue.hours}</span>
                  </span>
                  <span>{venue.dressCode}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl text-[#0b251f] font-medium group-hover:text-[#937345] transition-colors">
                    {venue.name}
                  </h3>
                  <div className="text-xs text-[#937345] font-sans font-medium uppercase tracking-wider mt-1">
                    {venue.cuisine}
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-[#143d34]/80 leading-relaxed line-clamp-3">
                    {venue.description}
                  </p>
                </div>

                {/* Signature Dishes Preview */}
                <div className="space-y-2 py-3 border-t border-[#c5a880]/20">
                  <div className="text-[11px] font-sans uppercase tracking-wider text-[#937345] font-semibold flex items-center space-x-1">
                    <ChefHat className="w-3.5 h-3.5" />
                    <span>Signature Creations</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#1c5246]">
                    {venue.signatureDishes.slice(0, 2).map((dish, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Sparkles className="w-3 h-3 text-[#c5a880] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{dish}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenMenu(venue)}
                    className="min-h-[44px] px-3 py-2.5 rounded-xl border border-[#0b251f]/20 hover:border-[#0b251f] text-[#0b251f] hover:bg-white text-[11px] font-sans tracking-[0.14em] uppercase font-semibold transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <Utensils className="w-3.5 h-3.5" />
                    <span>View Menu</span>
                  </button>

                  <a
                    href={`https://wa.me/919876543210?text=${encodeURIComponent(
                      `Hello Aurelia Dining Concierge, I would like to reserve a table at ${venue.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-3 py-2.5 rounded-xl bg-gradient-to-r from-[#c5a880] to-[#dfbe85] hover:from-[#dfbe85] hover:to-[#ead8b7] text-[#05130f] text-[11px] font-sans tracking-[0.14em] uppercase font-bold shadow transition-all flex items-center justify-center space-x-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Book Table</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Restaurant Menu Details Modal Dialog */}
      <ModalDialog
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        titleId="dining-modal-title"
        title={selectedVenue?.name}
        maxWidthClass="max-w-2xl"
      >
        {selectedVenue && (
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden h-60">
              <img
                src={selectedVenue.image}
                alt={selectedVenue.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-[#937345]">
                <span className="font-semibold uppercase tracking-wider">{selectedVenue.cuisine}</span>
                <span>{selectedVenue.hours}</span>
              </div>
              <p className="text-sm text-[#1c5246] leading-relaxed">
                {selectedVenue.description}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-serif text-lg font-medium text-[#0b251f] flex items-center space-x-2">
                <ChefHat className="w-4 h-4 text-[#937345]" />
                <span>Executive Chef's Signature Tasting Selection</span>
              </h4>
              <div className="space-y-2.5 bg-white p-4 rounded-xl border border-[#c5a880]/20">
                {selectedVenue.signatureDishes.map((dish, i) => (
                  <div key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-[#143d34] pb-2 border-b border-[#c5a880]/10 last:border-none last:pb-0">
                    <span className="text-[#937345] font-serif font-bold text-sm">0{i + 1}</span>
                    <span>{dish}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#c5a880]/20 flex justify-end">
              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(
                  `Hello Aurelia Concierge, I would like to reserve a table at ${selectedVenue.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#c5a880] to-[#dfbe85] text-[#05130f] text-xs font-sans tracking-[0.18em] uppercase font-bold shadow-lg flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm Table via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </ModalDialog>
    </section>
  );
};
