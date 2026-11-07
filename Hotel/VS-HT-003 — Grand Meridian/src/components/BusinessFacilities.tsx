import React, { useState } from 'react';
import { 
  Wifi, 
  Building2, 
  MonitorPlay, 
  Car, 
  FileText, 
  Dumbbell, 
  Check, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { BUSINESS_FACILITIES } from '../data/hotelData';

interface BusinessFacilitiesProps {
  onOpenCorporateRfp: () => void;
}

export const BusinessFacilities: React.FC<BusinessFacilitiesProps> = ({ onOpenCorporateRfp }) => {
  const [activeFacility, setActiveFacility] = useState<string>(BUSINESS_FACILITIES[0].id);

  const iconMap: Record<string, React.ElementType> = {
    Wifi,
    Building2,
    MonitorPlay,
    Car,
    FileText,
    Dumbbell
  };

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-200 text-navy-800 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>HIGH-VELOCITY INFRASTRUCTURE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-tight">
              Business Facilities Built for <br className="hidden sm:inline" />
              <span className="text-gold-600 font-serif italic">Peak Productivity</span>
            </h2>

            <p className="text-sm sm:text-base text-charcoal-600 mt-3 font-light leading-relaxed">
              We eliminate technical roadblocks. From 10 Gbps redundant fiber Wi-Fi to soundproof Zoom pods, 
              airport Mercedes transfers, and 24/7 business lounge barista service, every amenity is optimized for corporate velocity.
            </p>
          </div>

          <button
            onClick={onOpenCorporateRfp}
            className="touch-target self-start md:self-end px-5 py-3 rounded-xl border border-navy-900 text-navy-950 hover:bg-navy-900 hover:text-white font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 group"
          >
            <span>Corporate Account Enquiry</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Facilities Grid (Mobile-First 375px: 1 col, md: 2 col, lg: 3 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BUSINESS_FACILITIES.map((facility) => {
            const Icon = iconMap[facility.icon] || Building2;
            const isSelected = activeFacility === facility.id;

            return (
              <div
                key={facility.id}
                onClick={() => setActiveFacility(facility.id)}
                className={`cursor-pointer rounded-3xl p-6 sm:p-7 border-2 transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-gold-500 bg-white shadow-xl ring-2 ring-gold-400/20'
                    : 'border-charcoal-200 bg-charcoal-50/70 hover:bg-white hover:border-gold-300 shadow-sm'
                }`}
              >
                <div>
                  {/* Top Icon & Stat Pill */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-navy-900 text-gold-400 shadow-md'
                        : 'bg-white border border-charcoal-200 text-navy-900'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-bold text-navy-900 bg-navy-100/80 px-3 py-1 rounded-full border border-navy-200">
                      {facility.stat}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-950 mb-2.5">
                    {facility.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light mb-6">
                    {facility.description}
                  </p>
                </div>

                {/* Sub-features Checklist */}
                <div className="pt-4 border-t border-charcoal-200/80 space-y-2">
                  <div className="text-[11px] uppercase tracking-wider font-bold text-charcoal-500 mb-1">
                    Enterprise Features:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-charcoal-700">
                    {facility.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-1.5 truncate">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span className="truncate">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Corporate Trust Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-navy-950 text-white border border-gold-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                Guaranteed Corporate Service Level Agreement (SLA)
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-300 font-light">
                Zero Wi-Fi dropouts, dedicated bandwidth reservation, and 15-minute response on IT & audio-visual dispatch.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="flex -space-x-2">
              <span className="w-8 h-8 rounded-full bg-navy-800 border-2 border-navy-950 flex items-center justify-center text-[10px] font-bold text-gold-400">T3</span>
              <span className="w-8 h-8 rounded-full bg-navy-800 border-2 border-navy-950 flex items-center justify-center text-[10px] font-bold text-gold-400">10G</span>
              <span className="w-8 h-8 rounded-full bg-navy-800 border-2 border-navy-950 flex items-center justify-center text-[10px] font-bold text-gold-400">24/7</span>
            </div>
            <span className="text-xs text-charcoal-300 font-medium">99.4% Corporate CSAT</span>
          </div>
        </div>

      </div>
    </section>
  );
};
