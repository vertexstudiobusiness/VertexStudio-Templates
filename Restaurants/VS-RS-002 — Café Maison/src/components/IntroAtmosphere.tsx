import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_STORY } from '../data/cafeConfig';
import { Feather, Flame, Sparkles } from 'lucide-react';

export const IntroAtmosphere: React.FC = () => {
  const icons = [Flame, Feather, Sparkles];

  return (
    <section id="atmosphere" className="py-24 bg-[#F7F3EB] relative border-y border-[#EFE8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#4F5E4B] font-semibold block">
            Atmosphere & Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1511] leading-tight">
            A sanctuary sculpted for the senses, where time gently loosens its grip.
          </h2>
          <div className="w-16 h-[1.5px] bg-[#B86749] mx-auto mt-6" />
          <p className="text-[#5C473A] text-base sm:text-lg leading-relaxed pt-2 font-light">
            We built Café Maison around one simple belief: that a morning coffee should never be a rushed transaction,
            but a mindful pause. In the heart of the city, we carved out a sun-dappled haven inspired by Parisian salons and Copenhagen coffee bars.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {BRAND_STORY.philosophyPillars.map((pillar, idx) => {
            const Icon = icons[idx] || Sparkles;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#FBF8F3] p-8 lg:p-10 rounded-sm border border-[#EFE8DC] relative group hover:border-[#4F5E4B]/40 transition-colors shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-[#EFE8DC]/80 flex items-center justify-center text-[#4F5E4B] mb-6 group-hover:bg-[#4F5E4B] group-hover:text-[#F7F3EB] transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B86749] block mb-2">
                  {pillar.tag}
                </span>
                <h3 className="font-serif text-2xl text-[#1C1511] mb-3 group-hover:text-[#4F5E4B] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#5C473A] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Sensory Quote Callout Strip */}
        <div className="mt-16 bg-[#291F18] text-[#F7F3EB] rounded-sm p-8 sm:p-12 relative overflow-hidden text-center max-w-4xl mx-auto shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4F5E4B]/20 rounded-full blur-2xl pointer-events-none" />
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl max-w-2xl mx-auto leading-relaxed text-[#EFE8DC]">
            "{BRAND_STORY.quote}"
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 text-xs tracking-[0.2em] uppercase text-[#CBB99F]">
            <span>{BRAND_STORY.founders}</span>
            <span>•</span>
            <span>Founders & Curators</span>
          </div>
        </div>

      </div>
    </section>
  );
};
