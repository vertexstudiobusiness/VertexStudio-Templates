import React from 'react';
import { HOTEL_CONFIG } from '../../data/hotelConfig';
import { RoyalDivider, ArchFrame } from '../common/RoyalOrnament';
import { CrestLogo } from '../common/CrestLogo';
import {
  Compass,
  Scroll,
  Clock,
  Sparkles,
  Award,
  Layers,
  ArrowRight
} from 'lucide-react';

export const HeritageStory: React.FC = () => {
  const milestones = [
    {
      year: "1742",
      title: "Founding by Maharaja Vikramaditya",
      desc: "Commissioned as an imperial summer sanctuary away from battlefield turbulence, designed with passive geothermal water cooling and sandstone courtyards."
    },
    {
      year: "1886",
      title: "The Belgian Mirror Shish Mahal",
      desc: "Belgian crystal chandeliers and over 40,000 hand-cut convex glass mirrors were incorporated into the private royal assembly chambers."
    },
    {
      year: "1974",
      title: "Living Heritage Conservation",
      desc: "Architectural conservationists and master stone masons began a meticulous restoration, preserving every hand-painted fresco and cusped Rajput archway."
    },
    {
      year: "Present",
      title: "A Contemporary Royal Sanctuary",
      desc: "Reopened as an extraordinary palace hotel pairing imperial heritage butler customs with modern luxury suites and holistic Ayurvedic wellness."
    }
  ];

  return (
    <section id="palace-heritage" className="py-20 sm:py-28 bg-ivory-50 text-walnut-900 relative overflow-hidden">
      {/* Subtle background Jaali lattice texture */}
      <div className="absolute inset-0 bg-jaali-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sandstone-100 border border-gold-400/40 text-maroon-900 text-xs font-serif uppercase tracking-[0.25em] mb-3">
            <Scroll className="w-3.5 h-3.5 text-gold-600" />
            <span>The Living Palace Chronicles</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-maroon-950 font-bold tracking-tight leading-tight">
            An Imperial Legacy Preserved in Sandstone & Silk
          </h2>

          <RoyalDivider variant="gold" className="max-w-xs mx-auto my-4" />

          <p className="font-serif text-base sm:text-lg text-walnut-700 leading-relaxed font-light">
            Perched gracefully amidst the Aravali foothills, Rajmahal Heritage was envisioned in 1742 as a secluded royal haven where Rajput nobility held intimate durbars and poetic twilight gatherings.
          </p>
        </div>

        {/* Narrative & Architecture Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          {/* Left Column: Architectural Imagery with Rajput Arch Motif */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 mx-auto max-w-md lg:max-w-none">
              {/* Primary Architectural Arch Window */}
              <div className="relative rounded-t-[140px] sm:rounded-t-[180px] overflow-hidden border-2 border-gold-400/50 shadow-2xl bg-walnut-950 p-2">
                <div className="rounded-t-[130px] sm:rounded-t-[170px] overflow-hidden aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1000&q=80"
                    alt="Authentic hand-carved Rajput cusped arches and courtyards"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Overlapping Inset Card: Authentic Detail */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-walnut-950 text-ivory-100 p-4 sm:p-5 rounded-2xl border border-gold-400/50 shadow-2xl max-w-[260px] sm:max-w-[280px]">
                <div className="flex items-center gap-2 text-gold-400 mb-1">
                  <Sparkles className="w-4 h-4 text-gold-400" />
                  <span className="text-[10px] uppercase font-serif tracking-[0.2em] font-bold">
                    Architectural Marvel
                  </span>
                </div>
                <p className="text-xs text-sandstone-200 font-serif leading-relaxed">
                  "Built with yellow Jaisalmer sandstone and white Makrana marble, remaining naturally cool under Rajasthan sun."
                </p>
              </div>

              {/* Crest Badge Floating */}
              <div className="absolute -top-4 -left-2 sm:-left-4 bg-maroon-950 p-3 rounded-2xl border border-gold-400/40 shadow-xl hidden sm:block">
                <CrestLogo variant="gold" size="sm" showSubtitle={false} />
              </div>
            </div>
          </div>

          {/* Right Column: Historical Prose & Architectural Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-walnut-800 leading-relaxed font-sans text-sm sm:text-base">
              <h3 className="font-display text-2xl sm:text-3xl text-maroon-900 font-bold leading-snug">
                Where Kings Found Solace & Poets Wrote Epics
              </h3>

              <p>
                Unlike massive defensive citadels, Rajmahal Heritage was built as a <em>Vilas</em>—a pleasure palace celebrating peace, arts, music, and seasonal monsoons. The architecture mirrors the natural contours of the Aravali ridges, framing celestial views of evening sunsets.
              </p>

              <p>
                Each courtyard, or <em>Chowk</em>, was conceived with a distinct purpose: the outer <strong>Mardana Courtyard</strong> for regal greetings and royal vintage polo assemblies, and the private <strong>Zenana Courtyard</strong> with its cascading lotus fountain and quiet jharokhas shaded by century-old frangipani trees.
              </p>
            </div>

            {/* Architectural Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-sandstone-100/70 border border-sandstone-300">
                <p className="font-serif font-bold text-maroon-950 text-sm mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                  Thikri Convex Glasswork
                </p>
                <p className="text-xs text-walnut-600 font-sans">
                  Intricate mirror mosaic work reflecting candlelight like a starry night sky.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-sandstone-100/70 border border-sandstone-300">
                <p className="font-serif font-bold text-maroon-950 text-sm mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                  Carved Jharokha Balconies
                </p>
                <p className="text-xs text-walnut-600 font-sans">
                  Stone oriel windows engineered to funnel mountain breezes into bedchambers.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-sandstone-100/70 border border-sandstone-300">
                <p className="font-serif font-bold text-maroon-950 text-sm mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                  Baori Stepwell Geometry
                </p>
                <p className="text-xs text-walnut-600 font-sans">
                  Reimagined stepwell swimming pool with shaded chhatris and sandstone steps.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-sandstone-100/70 border border-sandstone-300">
                <p className="font-serif font-bold text-maroon-950 text-sm mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                  Natural Lime Plaster (Chuna)
                </p>
                <p className="text-xs text-walnut-600 font-sans">
                  Polished with crushed sea shells and eggshell finishes that breathe with the seasons.
                </p>
              </div>
            </div>

            {/* Read Architecture Section Link */}
            <div className="pt-2">
              <a
                href="#architecture"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-serif uppercase tracking-[0.2em] text-maroon-900 font-bold hover:text-gold-700 transition group"
              >
                <span>Discover Palace Courtyards & Arches</span>
                <ArrowRight className="w-4 h-4 text-gold-600 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Palace Heritage Timeline Milestones */}
        <div className="bg-sandstone-100/60 border border-gold-300/40 rounded-2xl p-6 sm:p-10 mb-16 royal-card-shadow">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-serif font-semibold">
              Chronicles Through Centuries
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-maroon-950 font-bold mt-1">
              The Evolution of Majesty
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={m.year}
                className="relative bg-white/90 p-5 rounded-xl border border-sandstone-300 hover:border-gold-400 transition-all shadow-sm hover:shadow-md"
              >
                <div className="text-2xl sm:text-3xl font-display font-black text-gold-600 mb-2">
                  {m.year}
                </div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-maroon-950 mb-1.5 leading-snug">
                  {m.title}
                </h4>
                <p className="text-xs text-walnut-600 font-sans leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Palace Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-gradient-to-r from-maroon-950 via-maroon-900 to-walnut-950 text-ivory-50 p-6 sm:p-8 rounded-2xl border border-gold-400/40 shadow-royal">
          {HOTEL_CONFIG.stats.map((stat, idx) => (
            <div key={stat.label} className="text-center py-2">
              <p className="font-display font-bold text-2xl sm:text-4xl text-gold-300">
                {stat.value}
              </p>
              <p className="text-[11px] sm:text-xs text-sandstone-300 uppercase tracking-widest font-serif mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
