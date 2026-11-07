import React from 'react';
import { useHotel } from '../../context/HotelContext';
import { PACKAGES } from '../../data/hotelConfig';
import { RoyalDivider } from '../common/RoyalOrnament';
import {
  Sparkles,
  Calendar,
  CheckCircle,
  Tag,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const PackagesSection: React.FC = () => {
  const { openBookingModal, formatPrice } = useHotel();

  return (
    <section id="packages" className="py-20 sm:py-28 bg-sandstone-50 text-walnut-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sandstone-200 border border-gold-400/50 text-maroon-900 text-xs font-serif uppercase tracking-[0.25em] mb-3">
            <Tag className="w-3.5 h-3.5 text-gold-600" />
            <span>Curated Palace Privileges</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-maroon-950 font-bold tracking-tight">
            Special Royal Packages
          </h2>

          <RoyalDivider variant="gold" className="max-w-xs mx-auto my-4" />

          <p className="font-serif text-base sm:text-lg text-walnut-700 font-light leading-relaxed">
            Exclusive seasonal sojourns blending imperial suites, signature degustation dinners, and holistic Ayurvedic rejuvenation.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden border border-gold-300/50 shadow-xl flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 hover:border-gold-500 royal-border-gold"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-[16/10] overflow-hidden bg-walnut-950">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-walnut-950/80 via-transparent to-black/20" />

                  {/* Savings Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-maroon-950/90 border border-gold-400/60 text-gold-200 text-[10px] font-serif uppercase tracking-widest font-bold">
                    {pkg.savings}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-ivory-50 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-serif tracking-widest text-gold-300 block">
                        {pkg.duration}
                      </span>
                      <span className="font-display text-2xl font-black text-ivory-50">
                        {formatPrice(pkg.priceINR)}
                      </span>
                      <span className="text-xs text-sandstone-300 font-sans ml-1">all-inclusive</span>
                    </div>
                    <span className="text-[10px] text-sandstone-300 font-serif">
                      {pkg.validUntil}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                  <h3 className="font-display text-xl text-maroon-950 font-bold group-hover:text-maroon-800 transition-colors leading-snug">
                    {pkg.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-walnut-600 font-sans leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Inclusions */}
                  <div className="space-y-2 pt-3 border-t border-sandstone-200">
                    <p className="text-xs uppercase font-serif tracking-wider text-walnut-500 font-semibold">
                      Package Privileges:
                    </p>
                    {pkg.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-walnut-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => openBookingModal(undefined, pkg.title)}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 hover:from-maroon-800 hover:to-maroon-700 text-gold-200 font-serif font-bold text-xs uppercase tracking-[0.18em] shadow-royal hover:shadow-royal-gold transition flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span>Reserve This Package</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

