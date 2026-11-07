import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Plus } from 'lucide-react';
import { SEASONAL_SPECIALS } from '../data/seasonalDrinks';
import { useCart } from '../context/CartContext';
import type { SeasonalSpecial } from '../types';

export const SeasonalSpecials: React.FC = () => {
  const { addToCart, cafeConfig } = useCart();

  const handleAddSeasonal = (drink: SeasonalSpecial) => {
    addToCart({
      productId: drink.id,
      name: drink.name,
      price: drink.price,
      quantity: 1,
      image: drink.image,
      temperature: drink.name.includes('Cold') || drink.name.includes('Tonic') ? 'Iced' : 'Hot'
    });
  };

  return (
    <section id="seasonal" className="py-20 sm:py-28 bg-coffee-900 relative overflow-hidden border-t border-coffee-800">
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      {/* Warm Ambient Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-copper-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coffee-800 border border-copper-400/30 text-copper-300 text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-copper-400" />
            <span>Autumn / Winter 2026 Micro-Lot Release</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory-50 tracking-tight">
            Featured Seasonal Specials
          </h2>
          <p className="mt-3 text-sm sm:text-base text-coffee-300 font-light">
            Limited quarterly innovations conceived in our cupping lab, blending rare botanicals, culinary heritage, and micro-lot extractions.
          </p>
        </div>

        {/* 2x2 or 4-col responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SEASONAL_SPECIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between border border-coffee-750 hover:border-copper-400/40 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Photo container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-coffee-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/20 to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-copper-600/90 text-ivory-50 font-bold text-[10px] uppercase tracking-wider shadow">
                    {item.badge}
                  </span>

                  {/* Price */}
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-coffee-950/90 backdrop-blur-md border border-caramel-500/40 text-caramel-300 font-bold text-xs">
                    {cafeConfig.currencySymbol}{item.price}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-ivory-50 group-hover:text-copper-300 transition-colors">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-xs text-coffee-200 leading-relaxed font-light line-clamp-3">
                    {item.description}
                  </p>

                  {/* Flavor Profile Callout */}
                  <div className="mt-3.5 p-2.5 rounded-xl bg-coffee-950/80 border border-coffee-800">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-copper-400 block mb-0.5">
                      Flavor Character:
                    </span>
                    <p className="text-xs text-ivory-200 italic font-serif">
                      "{item.flavorProfile}"
                    </p>
                  </div>

                  {/* Ingredients */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {item.ingredients.slice(0, 3).map((ing) => (
                      <span
                        key={ing}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-coffee-850 text-coffee-300 font-medium"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Bar */}
              <div className="p-5 pt-0">
                <div className="flex items-center justify-between text-[11px] text-coffee-400 mb-3 pt-3 border-t border-coffee-800/80">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-copper-400" />
                    <span>Until {item.availableUntil}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleAddSeasonal(item)}
                  className="w-full min-h-[42px] rounded-xl bg-gradient-to-r from-copper-500 to-caramel-600 hover:brightness-110 active:scale-98 text-coffee-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                  aria-label={`Order seasonal ${item.name}`}
                >
                  <Plus className="w-4 h-4 text-coffee-950" />
                  <span>Add To Order</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
