import React from 'react';
import { 
  Building, 
  Wifi, 
  VolumeX, 
  Briefcase, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  MapPin, 
  ChevronRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface OverviewProps {
  onOpenBooking: () => void;
  onOpenCorporateRfp: () => void;
}

export const Overview: React.FC<OverviewProps> = ({ onOpenBooking, onOpenCorporateRfp }) => {
  const pillars = [
    {
      icon: MapPin,
      title: "Strategic Aerocity Location",
      desc: "Positioned in Delhi's secure high-security hospitality enclave. Just 12 minutes to IGI Terminal 3, 3 minutes to the Airport Express Metro, and 18 minutes to DLF Cyber City Gurugram.",
      badge: "Zero Traffic Bottlenecks"
    },
    {
      icon: Wifi,
      title: "10 Gbps Enterprise Connectivity",
      desc: "Engineered with dual redundant Tier-1 ISP fiber backbones, Wi-Fi 6 Cisco Meraki access points, and in-room Cat-6 wired drops for latency-free global video conferences.",
      badge: "99.99% Uptime"
    },
    {
      icon: VolumeX,
      title: "Certified Acoustic Silence",
      desc: "Every room features STC-52 acoustic double-glazed insulated windows and sound-baffled walls, ensuring total silence from aircraft and highway movement for deep focus.",
      badge: "STC-52 Soundproofed"
    },
    {
      icon: Briefcase,
      title: "Personalized Corporate Concierge",
      desc: "Dedicated relationship managers, swift 3-minute express check-in, instant company GST invoicing with input tax credit, and priority boardroom allocation.",
      badge: "Dedicated Account Desk"
    }
  ];

  return (
    <section id="overview" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      
      {/* Subtle background ornamentation */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-200 text-navy-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>EXECUTIVE HOSPITALITY REDEFINED</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-tight mb-4">
            Engineered for the Demands of <br className="hidden sm:inline" />
            <span className="text-gold-600 font-serif italic">Global Business Leaders</span>
          </h2>

          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-light">
            Founded with a singular vision: to eliminate the friction from international business travel. 
            Grand Meridian synthesizes the timeless warmth of Indian hospitality with the high-velocity infrastructure demanded by Fortune 500 corporations.
          </p>
        </div>

        {/* 4 Pillars Grid (Mobile-First: 1 col on 375px, 2 col on tablet/desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-charcoal-50 hover:bg-white rounded-2xl p-6 sm:p-8 border border-charcoal-200 hover:border-gold-500/50 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-md group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-navy-800 bg-navy-100/70 px-2.5 py-1 rounded-full border border-navy-200/80">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-950 mb-2.5 group-hover:text-navy-800">
                    {pillar.title}
                  </h3>

                  <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-charcoal-200/60 flex items-center gap-1.5 text-xs font-semibold text-gold-600 group-hover:text-gold-700">
                  <span>Explore Standards</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Stats Bar with Navy Background */}
        <div className="bg-navy-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-navy-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#c59a45_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
            {HOTEL_INFO.quickStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col border-l border-gold-500/30 pl-4 sm:pl-5">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-400 mb-1">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-charcoal-300 font-light leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Action Row inside Stats Box */}
          <div className="relative z-10 mt-8 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs sm:text-sm text-charcoal-300 flex-wrap">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>LEED Gold Certified Facility</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>ISO 27001 Secured High-Speed Networks</span>
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenCorporateRfp}
                className="w-full sm:w-auto touch-target px-5 py-2.5 rounded-lg bg-navy-800 hover:bg-navy-750 text-gold-300 text-xs sm:text-sm font-semibold border border-gold-500/30 transition-colors"
              >
                Request Corporate Tariff
              </button>
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto touch-target px-6 py-2.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs sm:text-sm font-bold shadow-md transition-colors"
              >
                Reserve Stay
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
