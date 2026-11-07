import React, { useState } from 'react';
import { 
  Briefcase, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Clock, 
  Calendar, 
  Tag,
  Building,
  ShieldCheck
} from 'lucide-react';
import { CORPORATE_OFFERS, HOTEL_INFO } from '../data/hotelData';
import { CorporateOffer } from '../types';
import { CorporateRfpModal } from './CorporateRfpModal';

interface CorporateOffersProps {
  onOpenBooking: () => void;
}

export const CorporateOffers: React.FC<CorporateOffersProps> = ({ onOpenBooking }) => {
  const [rfpModalOpen, setRfpModalOpen] = useState(false);
  const [selectedOfferTitle, setSelectedOfferTitle] = useState<string>('');

  const handleOpenRfp = (offerTitle: string) => {
    setSelectedOfferTitle(offerTitle);
    setRfpModalOpen(true);
  };

  return (
    <section id="offers" className="py-16 sm:py-24 bg-charcoal-50 relative overflow-hidden">
      
      {/* Decorative styling */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-100 border border-navy-200 text-navy-900 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>TAILORED ENTERPRISE PACKAGES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-tight mb-4">
            Corporate Programs & <br className="hidden sm:inline" />
            <span className="text-gold-600 font-serif italic">Extended Stay Privileges</span>
          </h2>

          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-light">
            Designed to optimize travel budgets while elevating guest comfort. 
            Enjoy preferred contract tariffs, guaranteed late check-outs, and flexible corporate credit facilities.
          </p>
        </div>

        {/* 3 Offer Cards Grid (Mobile-First: 1 col on 375px, 3 col on lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {CORPORATE_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-3xl overflow-hidden border border-charcoal-200 hover:border-gold-500/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Badges */}
                <div className="relative aspect-[16/9] overflow-hidden bg-navy-950">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-black/20" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-gold-500 text-navy-950 shadow">
                      {offer.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 text-xs text-charcoal-200 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    <span>{offer.validity}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-950 mb-2.5 group-hover:text-gold-700 transition-colors">
                    {offer.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed mb-5">
                    {offer.description}
                  </p>

                  {/* Benefits Checklist */}
                  <div className="space-y-2 border-t border-charcoal-100 pt-4">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-charcoal-500 block mb-1">
                      Included Corporate Privileges:
                    </span>
                    {offer.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-charcoal-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleOpenRfp(offer.title)}
                  className="w-full touch-target py-3 rounded-xl bg-navy-900 hover:bg-navy-850 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <Briefcase className="w-4 h-4 text-gold-400" />
                  <span>Enquire / Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Fast Track Bar */}
        <div className="p-6 rounded-3xl bg-white border border-charcoal-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 flex-shrink-0">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-navy-950">
                Are you an authorized corporate travel manager or travel agent?
              </div>
              <div className="text-[11px] sm:text-xs text-charcoal-500">
                GDS Codes: Amadeus (GM DEL918) • Sabre (GM 38192) • Galileo/Apollo (GM 48190) • Worldspan (GM DEL01)
              </div>
            </div>
          </div>

          <button
            onClick={() => handleOpenRfp('GDS & Travel Agency Agreement')}
            className="w-full sm:w-auto touch-target px-5 py-2.5 rounded-xl border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold text-xs sm:text-sm transition-colors flex-shrink-0"
          >
            Connect with Sales Director
          </button>
        </div>

      </div>

      {/* Corporate RFP Modal */}
      <CorporateRfpModal
        isOpen={rfpModalOpen}
        onClose={() => setRfpModalOpen(false)}
        defaultPackageTitle={selectedOfferTitle}
      />

    </section>
  );
};
