import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Flame, Droplets, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const BrandStory: React.FC = () => {
  const pillars = [
    {
      icon: Mountain,
      title: 'High-Altitude Terroir',
      elevation: '1,200m – 1,550m MSL',
      desc: 'Sourced from biodiverse family-owned micro-lots in Chikmagalur and Biligirirangana Hills. Shade-grown under ancient silver oak canopies, where cool mountain mists slow cherry maturation, concentrating complex sugars and natural malic acidity.'
    },
    {
      icon: Flame,
      title: 'Artisanal Drum Roasting',
      elevation: 'Single-Degree Precision',
      desc: 'We roast weekly in calibrated 15kg batches. By constantly tracking the Rate of Rise (RoR) and bean temperature curves, we accentuate terroir-specific notes of citrus blossom and bittersweet cocoa without masking origin characteristics behind smoke.'
    },
    {
      icon: Droplets,
      title: 'Water Chemistry & Extraction',
      elevation: '130 TDS Mineral Balance',
      desc: 'Coffee is 98.5% water. We filter and remineralize our water to exact magnesium-to-calcium ratios before dialing our Mazzer flat burrs daily with digital refractometers to guarantee optimal 18%–22% extraction yield in every cup.'
    }
  ];

  return (
    <section id="story" className="py-20 sm:py-28 bg-coffee-900 relative overflow-hidden border-t border-coffee-800/60">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-caramel-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-copper-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coffee-800/80 border border-caramel-500/20 text-caramel-400 text-xs uppercase tracking-widest font-semibold mb-4">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Our Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory-50 tracking-tight">
            Rooted in Soil, <br className="hidden sm:inline" />
            <span className="italic font-normal text-caramel-400">Refined by Science.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-coffee-200 leading-relaxed font-light">
            We created Brew & Co. out of an unhurried obsession: to present Indian specialty coffee with the culinary respect and scientific precision it has always deserved.
          </p>
        </div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Left Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-coffee-700/60">
              <img
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=900&auto=format&fit=crop"
                alt="Fresh coffee cherries and roasted coffee beans"
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-coffee-950/85 backdrop-blur-md border border-caramel-500/25">
                <span className="text-[11px] uppercase tracking-wider text-caramel-400 font-semibold block mb-1">
                  Direct Trade Traceability
                </span>
                <p className="text-xs sm:text-sm text-ivory-100 font-medium">
                  "Every bag can be traced to a specific estate micro-plot, harvesting date, and processing method."
                </p>
              </div>
            </div>

            {/* Overlapping Badge */}
            <div className="hidden sm:block absolute -top-5 -right-5 z-20 p-4 rounded-2xl bg-gradient-to-br from-caramel-500 to-copper-600 text-coffee-950 shadow-xl max-w-[190px]">
              <span className="text-2xl font-serif font-bold block leading-none mb-1">100%</span>
              <span className="text-xs font-semibold leading-tight block">
                Ethically Paid Estate Premiums Above Fair Trade
              </span>
            </div>
          </div>

          {/* Right Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="border-l-2 border-caramel-500 pl-4 sm:pl-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ivory-50">
                Beyond Conventional Commercial Coffee
              </h3>
              <p className="mt-3 text-sm sm:text-base text-coffee-200 leading-relaxed">
                Commercial coffee is roasted dark to mask defects and bitter robusta beans. At Brew & Co., we work exclusively with certified 100% Arabica micro-lots scoring 86 points and higher on the international Specialty Coffee Association (SCA) scale.
              </p>
            </div>

            <p className="text-sm sm:text-base text-coffee-300 leading-relaxed font-light">
              By working hand-in-glove with multi-generational estate planters across Karnataka and Tamil Nadu, we encourage experimental anaerobic fermentations, naturals, and honey processing that yield vibrant notes of wild blackberry, raw honeycomb, and bergamot citrus.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Single-Origin Micro-lots & Nano-lots',
                'Zero Artificial Flavors or Preservatives',
                'Refractometer-Tested Daily Extraction',
                'Compostable Nitrogen-Flushed Packaging',
                'Single-Origin House Bean-to-Bar Cacao',
                'Artisan Local Potter Ceramic Ware'
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-ivory-100">
                  <CheckCircle2 className="w-4 h-4 text-caramel-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 sm:p-7 rounded-3xl relative group hover:border-caramel-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-coffee-800 to-coffee-850 border border-caramel-500/30 flex items-center justify-center text-caramel-400 mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-ivory-50">
                    {pillar.title}
                  </h4>
                  <span className="text-[11px] font-mono text-copper-400">
                    0{idx + 1}
                  </span>
                </div>
                <span className="inline-block text-xs font-mono text-caramel-400/90 mb-3 bg-coffee-800/80 px-2 py-0.5 rounded">
                  {pillar.elevation}
                </span>
                <p className="text-xs sm:text-sm text-coffee-200 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
