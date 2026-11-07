import React from 'react';
import { Compass, Feather, Leaf } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="py-20 sm:py-28 lg:py-36 bg-haven-ivory text-haven-charcoal relative overflow-hidden"
      aria-label="Our Philosophy"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
        {/* Editorial Eyebrow */}
        <div className="flex items-center space-x-3 mb-6 sm:mb-8">
          <span className="h-[1px] w-8 sm:w-12 bg-haven-stone/50" />
          <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-haven-stone-dark font-medium">
            Our Guiding Philosophy
          </span>
        </div>

        {/* Large Statement Quote */}
        <div className="max-w-5xl mb-14 sm:mb-20">
          <blockquote className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-haven-charcoal leading-[1.2] tracking-tight text-balance">
            “Luxury is not excess, but the stillness found when everything extraneous has been gently stripped away.”
          </blockquote>
        </div>

        {/* Asymmetric Grid: Photography & Editorial Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Asymmetric Double Photography */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6">
            {/* Primary Tall Architectural Photo */}
            <div className="sm:col-span-7 relative group overflow-hidden bg-haven-sand">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Sunken stone bath and natural textured lime plaster bathed in morning skylight at The Haven"
                className="w-full h-[380px] xs:h-[440px] sm:h-[520px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-haven-charcoal/70 to-transparent text-haven-ivory">
                <p className="text-[10px] tracking-widest uppercase text-haven-sand">
                  Sanctuary Interior
                </p>
                <p className="font-serif text-sm">Sunken Bath in Monolithic Travertine</p>
              </div>
            </div>

            {/* Secondary Off-axis Photo & Monogram Card */}
            <div className="sm:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-6 sm:pt-12">
              <div className="relative group overflow-hidden bg-haven-sand">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
                  alt="Raw sandstone archways opening onto quiet courtyards"
                  className="w-full h-[220px] xs:h-[260px] sm:h-[300px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Architectural Monogram Card */}
              <div className="p-6 bg-haven-cream border border-haven-stone/30">
                <span className="font-display text-3xl text-haven-olive tracking-wider block mb-2">
                  01 / 14
                </span>
                <p className="font-serif text-sm text-haven-charcoal mb-1">
                  14 Keys across 42 Acres
                </p>
                <p className="text-xs text-haven-stone-dark leading-relaxed">
                  Every suite is intentionally oriented away from its neighbor, ensuring total acoustic and visual solitude.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Pillars */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4 text-haven-charcoal-light font-sans text-xs xs:text-sm sm:text-base leading-relaxed">
              <p>
                Conceived as an architectural dialogue between the rugged granite of Rajasthan’s Aravalli range and the tactile restraint of Nordic design, The Haven was never intended as a hotel.
              </p>
              <p>
                It is a place of unhurried retreat. Here, time loses its sharp edges. There are no ringing telephones, no buffet queues, and no plastic. Instead, the day is marked by the shifting slant of desert sunlight across lime-washed corridors and the faint murmur of wind through wild acacia trees.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="space-y-6 pt-4 border-t border-haven-stone/30">
              {/* Pillar 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 rounded-sm bg-haven-cream border border-haven-stone/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Feather className="w-4 h-4 text-haven-olive" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-haven-charcoal font-medium mb-1">
                    Purity of Honest Materials
                  </h3>
                  <p className="text-xs text-haven-stone-dark leading-relaxed">
                    Locally dry-stacked Dholpur sandstone, breathable Araish lime wash, and reclaimed colonial teakwood that develop character with age.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 rounded-sm bg-haven-cream border border-haven-stone/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-4 h-4 text-haven-olive" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-haven-charcoal font-medium mb-1">
                    The Art of Slow Hospitality
                  </h3>
                  <p className="text-xs text-haven-stone-dark leading-relaxed">
                    Breakfast served whenever you awaken, unscripted culinary encounters, and discrete hosts attuned to your natural rhythm.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 rounded-sm bg-haven-cream border border-haven-stone/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Leaf className="w-4 h-4 text-haven-olive" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-haven-charcoal font-medium mb-1">
                    Ecological Custodianship
                  </h3>
                  <p className="text-xs text-haven-stone-dark leading-relaxed">
                    Passive thermal mass orientation, 100% solar array generation, zero single-use plastics, and native reforestation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
