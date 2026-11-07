import React from 'react';
import { Star, ShieldCheck, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/hotelData';

export const Testimonials: React.FC = () => {
  const corporateLogos = [
    'Google',
    'McKinsey & Co',
    'Deloitte',
    'Barclays',
    'Tata Group',
    'Microsoft',
    'Amazon AWS',
    'Siemens'
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-200 text-navy-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>EXECUTIVE ENDORSEMENTS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-tight mb-4">
            Trusted by the Leaders of <br className="hidden sm:inline" />
            <span className="text-gold-600 font-serif italic">Global Commerce</span>
          </h2>

          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-light">
            Read verified reviews from managing directors, strategy partners, and technology founders who make Grand Meridian their preferred headquarters in Delhi-NCR.
          </p>
        </div>

        {/* Corporate Trust Strip / Logos */}
        <div className="mb-14 pb-10 border-b border-charcoal-200">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-charcoal-400 mb-6">
            Preferred Hospitality Partner For Traveling Executives From
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {corporateLogos.map((logo, idx) => (
              <span 
                key={idx} 
                className="font-serif font-bold text-base sm:text-xl text-charcoal-600 hover:text-navy-900 tracking-wider transition-colors"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials Grid (Mobile-First: 1 col on 375px, 2 col on md/lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-charcoal-50 rounded-3xl p-6 sm:p-8 border border-charcoal-200 hover:border-gold-500/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Quote Icon & Star Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-gold-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>

                  <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Corporate Stay</span>
                  </span>
                </div>

                {/* Content */}
                <p className="font-serif text-sm sm:text-base text-navy-950 italic leading-relaxed mb-6 font-light">
                  "{t.content}"
                </p>
              </div>

              {/* Guest Profile Footer */}
              <div className="pt-4 border-t border-charcoal-200/80 flex items-center gap-3.5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-400 shadow-sm flex-shrink-0"
                />
                <div>
                  <h4 className="font-bold text-sm text-navy-950">
                    {t.name}
                  </h4>
                  <div className="text-xs text-charcoal-600 font-medium">
                    {t.role} • <span className="text-navy-800 font-semibold">{t.company}</span>
                  </div>
                  <div className="text-[11px] text-charcoal-400">
                    {t.location} • {t.date}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
