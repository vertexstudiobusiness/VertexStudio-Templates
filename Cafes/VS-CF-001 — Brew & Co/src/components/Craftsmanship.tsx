import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Sliders, ShieldCheck, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Craftsmanship: React.FC = () => {
  const { setIsBrewGuideOpen } = useCart();
  const [activeTab, setActiveTab] = useState<'sourcing' | 'roasting' | 'extraction' | 'ceramics'>('sourcing');

  const craftTabs = [
    {
      id: 'sourcing' as const,
      label: '01. Sourcing & Terroir',
      title: 'Biodiverse High-Altitude Micro-Lots',
      subtitle: 'Ethical direct trade from the Western Ghats',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1000&auto=format&fit=crop',
      points: [
        'Single-origin microlots cultivated between 1,200m and 1,600m above sea level.',
        'Shade-grown under indigenous jackfruit, silver oak, and wild fig canopies.',
        'Ripe cherries selectively hand-picked at optimal 21°–24° Brix sugar density.',
        'Zero intermediaries: growers receive 35%–55% higher payout than global commodity C-price.'
      ],
      metric: '86+ SCA',
      metricLabel: 'Minimum Certified Quality Score'
    },
    {
      id: 'roasting' as const,
      label: '02. Small-Batch Roasting',
      title: 'Rate-of-Rise (RoR) Temperature Profiling',
      subtitle: 'Convection and conduction harmony in 15kg batches',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop',
      points: [
        'Weekly roasting in artisanal cast-iron drum roasters fitted with precision thermocouples.',
        'Individualized roast curves mapped to each estate’s bean moisture, density, and altitude.',
        'Gentle caramelization of natural fructose during the Maillard and First Crack phases.',
        'Cooled immediately on fluid-bed suction trays to lock in volatile aromatics.'
      ],
      metric: '7–14 Days',
      metricLabel: 'Ideal Degassing & Flavor Peak Window'
    },
    {
      id: 'extraction' as const,
      label: '03. Scientific Extraction',
      title: 'Hydra Multi-Stage Pressure Profiling',
      subtitle: 'Dialing TDS, temperature, and grind micron variance',
      image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1000&auto=format&fit=crop',
      points: [
        'Extraction on Synesso MVP Hydra with independent 4-stage pressure profiling per group.',
        'Water remineralized to 130 TDS with targeted calcium-to-magnesium equilibrium.',
        'Mazzer 83mm titanium flat burrs calibrated with laser diffraction consistency.',
        'Digital refractometer TDS testing twice daily ensuring 18%–22% golden extraction yield.'
      ],
      metric: '92.5°C ±0.2°',
      metricLabel: 'Digital PID Thermal Stability'
    },
    {
      id: 'ceramics' as const,
      label: '04. Artisanal Presentation',
      title: 'Handcrafted Stoneware Ceramics',
      subtitle: 'Thermal retention engineered for aromatic concentration',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop',
      points: [
        'Every ceramic cup is thrown by independent studio potters in Karnataka.',
        'Egg-shaped interior curvature preserves the crema integrity and latte art clarity.',
        'High thermal mass maintains coffee at optimal 60°C–65°C tasting temperature.',
        'Unfinished tactile clay exterior with food-safe non-reactive interior glaze.'
      ],
      metric: '62°C',
      metricLabel: 'Perfect Sensory Drinking Temperature'
    }
  ];

  const currentTab = craftTabs.find((t) => t.id === activeTab)!;

  return (
    <section id="craftsmanship" className="py-20 sm:py-28 bg-coffee-900 relative overflow-hidden border-t border-coffee-800">
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coffee-800 border border-caramel-500/25 text-caramel-400 text-xs uppercase tracking-widest font-semibold mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>The Science of Coffee</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory-50 tracking-tight">
            Craftsmanship in Every Milligram
          </h2>
          <p className="mt-4 text-sm sm:text-base text-coffee-200 font-light leading-relaxed">
            From the volcanic red soil of the Western Ghats to the mineral content in our water boilers, no variable is left to chance.
          </p>
        </div>

        {/* Interactive Step Switcher Tabs - Mobile scrollable pill bar */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 pb-4 mb-8 sm:mb-12">
          {craftTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`min-h-[44px] px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-caramel-500 to-copper-500 text-coffee-950 shadow-lg shadow-caramel-500/20'
                  : 'bg-coffee-850 hover:bg-coffee-800 text-coffee-300 hover:text-ivory-100 border border-coffee-750'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Detail Pane */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center glass-card p-6 sm:p-10 lg:p-12 rounded-3xl border border-coffee-800"
          >
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-coffee-700/60">
                <img
                  src={currentTab.image}
                  alt={currentTab.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/80 via-transparent to-transparent" />
                
                {/* Floating Stat Widget */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-coffee-950/90 backdrop-blur-md border border-caramel-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-caramel-400 block">
                      {currentTab.metricLabel}
                    </span>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-ivory-50">
                      {currentTab.metric}
                    </span>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-caramel-400 font-semibold block mb-1">
                  {currentTab.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-ivory-50 leading-tight">
                  {currentTab.title}
                </h3>
              </div>

              {/* Bullet Points */}
              <div className="space-y-3.5">
                {currentTab.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-caramel-500/15 border border-caramel-500/40 text-caramel-400 flex items-center justify-center text-xs font-mono shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-coffee-200 leading-relaxed font-light">
                      {pt}
                    </p>
                  </div>
                ))}
              </div>

              {/* Interactive Brew Calculator CTA */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsBrewGuideOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-coffee-800 hover:bg-coffee-750 border border-caramel-500/30 text-caramel-300 hover:text-caramel-200 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md group"
                >
                  <Sliders className="w-4 h-4 text-caramel-400" />
                  <span>Launch Brew Ratio Calculator</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
