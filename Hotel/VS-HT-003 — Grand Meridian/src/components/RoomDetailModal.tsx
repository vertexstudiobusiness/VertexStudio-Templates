import React, { useState } from 'react';
import { 
  X, 
  Check, 
  Wifi, 
  Coffee, 
  ShieldCheck, 
  Maximize2, 
  Users, 
  Bed, 
  VolumeX, 
  Calendar,
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Room, CurrencyCode } from '../types';
import { formatPrice } from '../utils/currency';
import { HOTEL_INFO } from '../data/hotelData';
import { motion, AnimatePresence } from 'framer-motion';

interface RoomDetailModalProps {
  room: Room | null;
  currency: CurrencyCode;
  onClose: () => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  currency,
  onClose,
  onBookRoom
}) => {
  if (!room) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'inclusions'>('overview');

  const whatsappMessage = encodeURIComponent(
    `Hello Grand Meridian, I am inquiring about availability and special corporate rates for the ${room.name}.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6">
        
        {/* Backdrop click to close */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative bg-white rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col border border-gold-500/30"
        >
          {/* Top Sticky Header */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-charcoal-200 bg-white sticky top-0 z-20">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600 bg-gold-50 px-2 py-0.5 rounded border border-gold-200">
                  {room.category}
                </span>
                <span className="text-xs text-charcoal-500">• {room.view}</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-navy-950">
                {room.name}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="touch-target p-2 rounded-full hover:bg-charcoal-100 text-charcoal-500 hover:text-navy-950 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto p-5 sm:p-8 flex-1 space-y-6">
            
            {/* Gallery Section */}
            <div className="space-y-3">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-navy-950">
                <img
                  src={room.images[activeImageIndex]}
                  alt={`${room.name} preview`}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute bottom-3 right-3 bg-navy-950/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-gold-500/30">
                  Photo {activeImageIndex + 1} of {room.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                {room.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 sm:w-24 aspect-[16/10] rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                      activeImageIndex === idx 
                        ? 'border-gold-500 ring-2 ring-gold-400/40' 
                        : 'border-transparent opacity-65 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Specs Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-charcoal-50 p-4 rounded-2xl border border-charcoal-200">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-navy-100 text-navy-900 flex items-center justify-center flex-shrink-0">
                  <Maximize2 className="w-4 h-4 text-gold-600" />
                </div>
                <div>
                  <div className="text-[10px] text-charcoal-500 uppercase tracking-wider font-semibold">Area</div>
                  <div className="text-xs sm:text-sm font-bold text-navy-950">{room.sizeSqFt} sq ft ({room.sizeSqM} m²)</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-navy-100 text-navy-900 flex items-center justify-center flex-shrink-0">
                  <Bed className="w-4 h-4 text-gold-600" />
                </div>
                <div>
                  <div className="text-[10px] text-charcoal-500 uppercase tracking-wider font-semibold">Bed Type</div>
                  <div className="text-xs sm:text-sm font-bold text-navy-950 line-clamp-1">{room.bedType}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-navy-100 text-navy-900 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-gold-600" />
                </div>
                <div>
                  <div className="text-[10px] text-charcoal-500 uppercase tracking-wider font-semibold">Capacity</div>
                  <div className="text-xs sm:text-sm font-bold text-navy-950">Up to {room.maxGuests} Guests</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-navy-100 text-navy-900 flex items-center justify-center flex-shrink-0">
                  <VolumeX className="w-4 h-4 text-gold-600" />
                </div>
                <div>
                  <div className="text-[10px] text-charcoal-500 uppercase tracking-wider font-semibold">Acoustics</div>
                  <div className="text-xs sm:text-sm font-bold text-navy-950">{room.specifications.soundproofing}</div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-charcoal-200">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-3 px-4 text-sm font-semibold transition-all relative ${
                  activeTab === 'overview'
                    ? 'text-navy-950 border-b-2 border-gold-500'
                    : 'text-charcoal-500 hover:text-navy-900'
                }`}
              >
                Overview & Specs
              </button>
              <button
                onClick={() => setActiveTab('inclusions')}
                className={`pb-3 px-4 text-sm font-semibold transition-all relative ${
                  activeTab === 'inclusions'
                    ? 'text-navy-950 border-b-2 border-gold-500'
                    : 'text-charcoal-500 hover:text-navy-900'
                }`}
              >
                Complimentary Inclusions
              </button>
              <button
                onClick={() => setActiveTab('amenities')}
                className={`pb-3 px-4 text-sm font-semibold transition-all relative ${
                  activeTab === 'amenities'
                    ? 'text-navy-950 border-b-2 border-gold-500'
                    : 'text-charcoal-500 hover:text-navy-900'
                }`}
              >
                Detailed Amenities
              </button>
            </div>

            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <div className="space-y-5">
                <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-light">
                  {room.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-charcoal-500">
                    Technical Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="p-3 rounded-xl bg-charcoal-50 border border-charcoal-200/80">
                      <span className="font-semibold text-navy-950 block mb-0.5">Workstation:</span>
                      <span className="text-charcoal-600">{room.specifications.workStation}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-charcoal-50 border border-charcoal-200/80">
                      <span className="font-semibold text-navy-950 block mb-0.5">High-Speed Connectivity:</span>
                      <span className="text-charcoal-600">{room.specifications.connectivity}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-charcoal-50 border border-charcoal-200/80">
                      <span className="font-semibold text-navy-950 block mb-0.5">Executive Bathroom:</span>
                      <span className="text-charcoal-600">{room.specifications.bathroom}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-charcoal-50 border border-charcoal-200/80">
                      <span className="font-semibold text-navy-950 block mb-0.5">Sound Insulation:</span>
                      <span className="text-charcoal-600">{room.specifications.soundproofing}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Inclusions */}
            {activeTab === 'inclusions' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-gold-50/60 border border-gold-200 text-xs sm:text-sm text-gold-950">
                  <Sparkles className="w-4 h-4 text-gold-600 inline mr-2" />
                  <strong>Included in your nightly tariff:</strong> These premium perks are bundled automatically with no hidden resort fees.
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {room.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-800 p-2.5 rounded-lg bg-charcoal-50">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Detailed Amenities */}
            {activeTab === 'amenities' && (
              <div className="space-y-5">
                {room.fullAmenities.map((cat, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-navy-900 border-b border-charcoal-200 pb-1">
                      {cat.category}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-charcoal-700">
                      {cat.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Bottom Sticky Action Footer */}
          <div className="p-4 sm:p-6 border-t border-charcoal-200 bg-charcoal-50 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-20">
            <div>
              <div className="text-[11px] text-charcoal-500 uppercase tracking-wider font-semibold">
                Nightly Corporate Tariff
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
                  {formatPrice(room.priceINR, currency)}
                </span>
                {room.originalPriceINR && (
                  <span className="text-xs sm:text-sm line-through text-charcoal-400">
                    {formatPrice(room.originalPriceINR, currency)}
                  </span>
                )}
                <span className="text-xs text-charcoal-500">+ 18% GST</span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target px-4 py-3 rounded-xl border border-emerald-500/40 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span className="hidden xs:inline">WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onBookRoom(room.id);
                }}
                className="flex-1 sm:flex-none touch-target px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 text-navy-950 font-bold text-sm sm:text-base shadow-lg shadow-gold-500/25 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Room Now</span>
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
