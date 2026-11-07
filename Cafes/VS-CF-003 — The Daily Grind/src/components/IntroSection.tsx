import React from 'react';
import { Coffee, ShieldCheck, Sparkles, Check, X } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-sand-100 border-y border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-200 border border-sand-300 text-charcoal-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-ambercrema" />
            <span>The Daily Grind Philosophy</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 font-serif leading-tight">
            The Third Space Built for Deep Focus &amp; Specialty Brews
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-600 leading-relaxed font-normal">
            We built The Daily Grind because we were tired of choosing between the noisy chaos of conventional coffee shops and the soulless sterility of corporate coworking cubicles.
          </p>
        </div>

        {/* 3 Pillar Feature Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
          
          {/* Card 1: Traditional Café */}
          <div className="p-6 sm:p-7 rounded-2xl bg-sand-50/70 border border-sand-200 flex flex-col justify-between text-charcoal-700">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sand-200 flex items-center justify-center text-charcoal-600 mb-4">
                <Coffee className="w-5 h-5 text-charcoal-500" />
              </div>
              <h3 className="text-lg font-bold text-charcoal-900 mb-2">Typical Coffee Shops</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 mb-4">
                Designed for quick social catchups, leaving workers frustrated and on edge.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal-600">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Blaring espresso grinders and loud chatter (&gt;75 dB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Only 2 power sockets for 40 seats</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Glances from staff if you sit longer than an hour</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Unreliable public guest Wi-Fi dropping mid-call</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-sand-200 text-xs text-charcoal-500 italic">
              Unsuitable for high-stakes deep work.
            </div>
          </div>

          {/* Card 2: The Daily Grind (Center Highlight) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-charcoal-900 border-2 border-ambercrema/40 text-sand-50 shadow-card flex flex-col justify-between relative order-first md:order-none">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-ambercrema text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
              The Daily Grind
            </div>

            <div>
              <div className="w-10 h-10 rounded-xl bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-ambercrema mb-4 mt-1">
                <Sparkles className="w-5 h-5 text-ambercrema" />
              </div>
              <h3 className="text-xl font-serif font-bold text-sand-50 mb-2">
                Acoustic Sanctum &amp; Specialty Bar
              </h3>
              <p className="text-xs sm:text-sm text-sand-200/90 mb-4">
                Intentional hospitality where your seat is guaranteed, power is ubiquitous, and your coffee is roasted to perfection.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-sand-200">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-ambercrema flex-shrink-0 mt-0.5" />
                  <span><strong>Acoustically insulated Silent Zone</strong> (&lt;38 dB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-ambercrema flex-shrink-0 mt-0.5" />
                  <span><strong>Power &amp; 65W USB-C</strong> at 100% of seats</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-ambercrema flex-shrink-0 mt-0.5" />
                  <span><strong>Dual 520 Mbps redundant fiber</strong> with zero drops</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-ambercrema flex-shrink-0 mt-0.5" />
                  <span><strong>Included café credits</strong> with every workspace pass</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-charcoal-800 text-xs text-ambercrema-light font-medium">
              Stay 4 hours or all day — you belong here.
            </div>
          </div>

          {/* Card 3: Sterile Coworking */}
          <div className="p-6 sm:p-7 rounded-2xl bg-sand-50/70 border border-sand-200 flex flex-col justify-between text-charcoal-700">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sand-200 flex items-center justify-center text-charcoal-600 mb-4">
                <ShieldCheck className="w-5 h-5 text-charcoal-500" />
              </div>
              <h3 className="text-lg font-bold text-charcoal-900 mb-2">Corporate Coworking</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 mb-4">
                Functional infrastructure, but completely devoid of warmth and inspiration.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal-600">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Fluorescent harsh office lighting that strains your eyes</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Stale instant coffee or generic pantry dispensers</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Rigid monthly locks and complicated signup forms</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Impersonal corporate vibe that drains creative inspiration</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-sand-200 text-xs text-charcoal-500 italic">
              Lacks the warmth of an artisan third place.
            </div>
          </div>

        </div>

        {/* Story note */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white border border-sand-300 shadow-sm text-center">
          <p className="font-serif italic text-base sm:text-lg text-charcoal-800 leading-relaxed">
            &ldquo;We roast small batches of Chikmagalur beans in the morning, brew with surgical precision, and treat our space like a library of passionate minds. You do not just get a seat — you get uninterrupted momentum.&rdquo;
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-sand-200">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                alt="Curator of The Daily Grind"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-charcoal-900">Arjun &amp; Devika Rao</p>
              <p className="text-[11px] text-charcoal-500">Founders &amp; Head Roasters, The Daily Grind Bengaluru</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
