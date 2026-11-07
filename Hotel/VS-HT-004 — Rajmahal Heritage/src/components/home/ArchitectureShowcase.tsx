import React, { useState } from 'react';
import { ARCHITECTURE_SHOWCASE } from '../../data/hotelConfig';
import { RoyalDivider } from '../common/RoyalOrnament';
import {
  Compass,
  Layers,
  Sparkles,
  ChevronRight,
  Info,
  Maximize2
} from 'lucide-react';

export const ArchitectureShowcase: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const activeItem = ARCHITECTURE_SHOWCASE[activeItemIndex];

  return (
    <section id="architecture" className="py-20 sm:py-28 bg-sandstone-100/70 text-walnut-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sandstone-200 border border-gold-400/50 text-maroon-900 text-xs font-serif uppercase tracking-[0.25em] mb-3">
            <Compass className="w-3.5 h-3.5 text-gold-600" />
            <span>Living Rajputana Architecture</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-maroon-950 font-bold tracking-tight">
            Courtyards, Arches & Stepped Waters
          </h2>

          <RoyalDivider variant="gold" className="max-w-xs mx-auto my-4" />

          <p className="font-serif text-base sm:text-lg text-walnut-700 font-light leading-relaxed">
            Constructed according to ancient Vedic Vastu Shastra and Rajput royal court architecture, where airflow, natural stone cooling, and reflections evoke ethereal grandeur.
          </p>
        </div>

        {/* Interactive Architecture Feature Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-gold-300/40 shadow-2xl royal-card-shadow">
          {/* Left Column: Image with Cusped Rajput Arch Framing (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-walnut-950 shadow-inner group">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />

              {/* Decorative Arch Line */}
              <div className="absolute inset-2 sm:inset-3 border border-gold-300/40 rounded-xl sm:rounded-2xl pointer-events-none" />

              {/* Inset Details Ribbon */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-walnut-950/85 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-gold-400/40 text-ivory-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-serif tracking-[0.2em] text-gold-300 font-bold block">
                    Architectural Specification
                  </span>
                  <span className="text-xs sm:text-sm font-sans text-sandstone-200">
                    {activeItem.details}
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-gold-400">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Navigation Selector (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-serif tracking-[0.25em] text-gold-600 font-bold">
                {activeItem.subtitle}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-maroon-950 font-bold leading-tight">
                {activeItem.title}
              </h3>
              <p className="text-sm text-walnut-700 leading-relaxed font-sans pt-2">
                {activeItem.description}
              </p>
            </div>

            {/* Selector Pills */}
            <div className="space-y-2.5 pt-3 border-t border-sandstone-200">
              <p className="text-xs uppercase tracking-wider font-serif text-walnut-500 font-semibold">
                Explore Palace Elements:
              </p>
              <div className="grid grid-cols-1 gap-2">
                {ARCHITECTURE_SHOWCASE.map((item, idx) => (
                  <button
                    key={item.title}
                    onClick={() => setActiveItemIndex(idx)}
                    className={`text-left p-3 rounded-xl border transition-all duration-200 flex items-center justify-between min-h-[46px] ${
                      activeItemIndex === idx
                        ? 'bg-maroon-950 text-gold-200 border-gold-400 shadow-md'
                        : 'bg-sandstone-50 hover:bg-sandstone-100 text-walnut-800 border-sandstone-200'
                    }`}
                  >
                    <div>
                      <span className="font-serif font-bold text-xs sm:text-sm block">
                        {item.title}
                      </span>
                      <span className="text-[11px] opacity-75 font-sans">
                        {item.subtitle}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${activeItemIndex === idx ? 'text-gold-300 translate-x-1' : 'text-walnut-400'}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

