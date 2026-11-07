import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { EXPERIENCES, Experience } from '../../data/hotelConfig';
import { RoyalDivider } from '../common/RoyalOrnament';
import {
  Sparkles,
  Clock,
  Compass,
  Check,
  ChevronRight,
  Flame,
  Music,
  HeartHandshake
} from 'lucide-react';

export const Experiences: React.FC = () => {
  const { openExperienceModal, formatPrice } = useHotel();
  const [activeTab, setActiveTab] = useState<'all' | 'cultural' | 'wellness' | 'culinary' | 'heritage'>('all');

  const filtered = activeTab === 'all'
    ? EXPERIENCES
    : EXPERIENCES.filter(e => e.category === activeTab || (activeTab === 'cultural' && e.category === 'adventure'));

  return (
    <section id="experiences" className="py-20 sm:py-28 bg-walnut-950 text-ivory-50 relative overflow-hidden">
      {/* Dark Jaali pattern overlay */}
      <div className="absolute inset-0 bg-jaali-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-walnut-900 border border-gold-400/40 text-gold-300 text-xs font-serif uppercase tracking-[0.25em] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Living Imperial Traditions</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-ivory-50 font-bold tracking-tight">
            Curated Royal Experiences
          </h2>

          <RoyalDivider variant="gold" className="max-w-xs mx-auto my-4" />

          <p className="font-serif text-base sm:text-lg text-sandstone-300 font-light leading-relaxed">
            Step beyond conventional luxury into rituals and soirées perfected across three centuries in the courts of Mewar.
          </p>

          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 mt-8 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'all', label: 'All Curations' },
              { id: 'cultural', label: 'Folk & Court Traditions' },
              { id: 'heritage', label: 'Art & Architecture' },
              { id: 'wellness', label: 'Ayurvedic Wellness' },
              { id: 'culinary', label: 'Bespoke Dining' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`whitespace-nowrap px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-serif uppercase tracking-wider transition-all duration-300 min-h-[42px] ${
                  activeTab === tab.id
                    ? 'bg-gold-500 text-walnut-950 font-bold border border-gold-300 shadow-royal-gold'
                    : 'bg-walnut-900/80 text-sandstone-300 hover:text-ivory-50 border border-gold-400/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((exp) => (
            <div
              key={exp.id}
              className="bg-walnut-900/90 rounded-2xl overflow-hidden border border-gold-400/30 shadow-2xl flex flex-col justify-between group hover:border-gold-400 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Photo Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-walnut-950">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-walnut-950 via-walnut-950/40 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-maroon-950/90 border border-gold-400/40 text-gold-300 text-[10px] font-serif uppercase tracking-widest font-bold">
                    {exp.tagline}
                  </div>

                  {/* Pricing or Complimentary Pill */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-walnut-950/85 border border-gold-400/30 text-[11px] font-serif text-gold-300">
                    {exp.priceINR && exp.priceINR > 0
                      ? `${formatPrice(exp.priceINR)} / guest`
                      : 'Included with Stay'}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl text-ivory-100 font-bold group-hover:text-gold-300 transition-colors leading-snug">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-gold-400 font-serif italic mt-0.5">
                      {exp.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-sandstone-300/90 font-sans leading-relaxed line-clamp-3">
                    {exp.description}
                  </p>

                  {/* Duration and Timing */}
                  <div className="pt-2 border-t border-gold-400/10 flex items-center justify-between text-xs text-sandstone-300">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      <span>{exp.duration}</span>
                    </span>
                    <span className="text-[11px] text-sandstone-400 font-serif">
                      {exp.timing}
                    </span>
                  </div>

                  {/* Key Inclusions Preview */}
                  <div className="space-y-1.5 pt-2">
                    {exp.inclusions.slice(0, 2).map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-sandstone-300">
                        <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 sm:p-6 pt-0">
                <button
                  onClick={() => openExperienceModal(exp)}
                  className="w-full py-2.5 px-4 rounded-lg bg-walnut-800 hover:bg-gold-500 hover:text-walnut-950 border border-gold-400/40 text-gold-300 font-serif text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <span>Enquire Curated Experience</span>
                  <ChevronRight className="w-4 h-4 text-current" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

