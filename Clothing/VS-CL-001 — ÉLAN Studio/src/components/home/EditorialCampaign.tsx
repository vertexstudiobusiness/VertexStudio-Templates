import React from 'react';
import { Sparkles, Quote } from 'lucide-react';
import { BRAND_STORY } from '../../data/products';

export const EditorialCampaign: React.FC = () => {
  return (
    <section id="editorial-campaign" className="py-20 sm:py-32 bg-[#0c0b0a] border-b border-[#201d19] relative overflow-hidden">
      {/* Subtle background ambient texture */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Campaign Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-[#c5a880] text-xs uppercase tracking-[0.28em] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EDITORIAL CAMPAIGN • THE ATELIER CHRONICLES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#faf7f2] font-normal tracking-tight leading-[1.12]">
            Woven by Hand. <br />
            <span className="italic font-light text-[#ded6c9] font-serif">Tailored for Eternity.</span>
          </h2>
        </div>

        {/* Editorial Visual Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16">
          {/* Main Editorial Image */}
          <div className="md:col-span-7 relative group">
            <div className="relative aspect-[4/5] sm:aspect-[16/11] md:aspect-[4/5] overflow-hidden bg-[#161412]">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85"
                alt="ÉLAN Studio Campaign Craftsmanship"
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold block mb-1">
                  ATELIER PHOTO 01 • BENGAL & DELHI GUILDS
                </span>
                <p className="font-serif text-lg sm:text-xl text-[#faf7f2]">
                  The Raw Matka Silk Bandhgala in Natural Studio Light
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Editorial Column */}
          <div className="md:col-span-5 space-y-8">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#161412] hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85"
                alt="ÉLAN Studio Campaign Portrait"
                loading="lazy"
                className="w-full h-full object-cover object-center filter grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Pull Quote */}
            <div className="p-6 sm:p-8 bg-[#141210] border border-[#2b2721] relative">
              <Quote className="w-8 h-8 text-[#c5a880]/30 absolute top-4 right-4" />
              <p className="font-serif text-lg sm:text-xl text-[#ded6c9] italic leading-relaxed">
                {BRAND_STORY.quote}
              </p>
              <div className="mt-4 pt-4 border-t border-[#26231e]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#faf7f2]">
                  {BRAND_STORY.curator}
                </p>
                <p className="text-[11px] text-[#948b7e] mt-0.5">
                  {BRAND_STORY.curatorTitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Narrative Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#201d19]">
          {BRAND_STORY.pillars.map((pillar, idx) => (
            <div key={idx} className="space-y-3">
              <span className="text-xs font-serif text-[#c5a880] font-semibold">
                0{idx + 1} /
              </span>
              <h3 className="font-serif text-xl text-[#faf7f2] font-normal">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#948b7e] leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
