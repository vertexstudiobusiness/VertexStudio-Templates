import React, { useState } from 'react';
import { HOTEL_INFO, ARCHITECTURE_MATERIALS } from '../data/hotelData';

export const Architecture: React.FC = () => {
  const [activeMaterial, setActiveMaterial] = useState(ARCHITECTURE_MATERIALS[0].id);

  const currentMaterial =
    ARCHITECTURE_MATERIALS.find((m) => m.id === activeMaterial) || ARCHITECTURE_MATERIALS[0];

  const materialImages: Record<string, string> = {
    sandstone:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    lime:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
    teak:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
    linen:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80',
  };

  return (
    <section
      id="architecture"
      className="py-20 sm:py-28 lg:py-36 bg-haven-ivory text-haven-charcoal relative overflow-hidden"
      aria-label="Architecture and Design"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <span className="h-[1px] w-8 sm:w-12 bg-haven-stone/50" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-haven-stone-dark font-medium">
              Architecture & Materiality
            </span>
          </div>
          <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-haven-charcoal font-light tracking-tight">
            Built from the Living Earth
          </h2>
          <p className="mt-4 text-xs xs:text-sm sm:text-base text-haven-charcoal-light leading-relaxed font-sans">
            Designed by <span className="font-serif italic text-haven-charcoal">{HOTEL_INFO.architect}</span>, The Haven is an exercise in restraint. Every line, aperture, and courtyard is positioned to harness mountain drafts, soft morning luminescence, and the natural resonance of raw stone.
          </p>
        </div>

        {/* Interactive Material Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Material Selection List (Left Column) */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-haven-stone-dark font-medium mb-3">
              Explore The Four Primary Elements
            </p>

            <div className="space-y-3">
              {ARCHITECTURE_MATERIALS.map((mat) => (
                <button
                  key={mat.id}
                  type="button"
                  onClick={() => setActiveMaterial(mat.id)}
                  className={`w-full text-left p-4 sm:p-5 border transition-all duration-300 relative ${
                    activeMaterial === mat.id
                      ? 'bg-haven-cream border-haven-charcoal shadow-sm'
                      : 'bg-white/60 border-haven-stone/20 hover:border-haven-stone hover:bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] tracking-widest uppercase font-mono text-haven-olive">
                        {mat.badge}
                      </span>
                      <h3 className="font-serif text-base sm:text-lg text-haven-charcoal font-medium mt-0.5">
                        {mat.title}
                      </h3>
                      <p className="text-[11px] text-haven-stone-dark font-sans mt-1">
                        {mat.origin}
                      </p>
                    </div>

                    <span
                      className={`text-xs ${
                        activeMaterial === mat.id ? 'text-haven-charcoal font-bold' : 'text-haven-stone'
                      }`}
                    >
                      →
                    </span>
                  </div>

                  {activeMaterial === mat.id && (
                    <p className="mt-3 text-xs text-haven-charcoal-light leading-relaxed pt-3 border-t border-haven-stone/20 animate-fade-in font-sans">
                      {mat.description}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Large Material Visual & Details (Right Column) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-haven-sand border border-haven-stone/30 shadow-xl">
              <img
                src={materialImages[activeMaterial]}
                alt={`${currentMaterial.title} used in The Haven design`}
                className="w-full h-full object-cover transition-opacity duration-500"
                key={activeMaterial}
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-haven-charcoal/80 backdrop-blur-md text-haven-ivory text-[10px] tracking-widest uppercase font-mono">
                {currentMaterial.origin}
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-haven-charcoal/85 via-haven-charcoal/40 to-transparent text-haven-ivory">
                <p className="text-[10px] tracking-[0.2em] uppercase text-haven-sand">
                  Material Detail
                </p>
                <h4 className="font-serif text-lg sm:text-xl font-light">
                  {currentMaterial.title}
                </h4>
              </div>
            </div>

            {/* Architectural Stats Grid */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-haven-cream border border-haven-stone/20 text-center">
              <div>
                <span className="block font-serif text-xl sm:text-2xl text-haven-charcoal">0%</span>
                <span className="block text-[10px] tracking-wider uppercase text-haven-stone-dark">
                  Synthetic Paint
                </span>
              </div>
              <div className="border-x border-haven-stone/20">
                <span className="block font-serif text-xl sm:text-2xl text-haven-charcoal">100%</span>
                <span className="block text-[10px] tracking-wider uppercase text-haven-stone-dark">
                  Passive Cooling
                </span>
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl text-haven-charcoal">7 Gen</span>
                <span className="block text-[10px] tracking-wider uppercase text-haven-stone-dark">
                  Mason Guilds
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
