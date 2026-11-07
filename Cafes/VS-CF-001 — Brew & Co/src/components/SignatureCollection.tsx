import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Plus, SlidersHorizontal, MapPin } from 'lucide-react';
import { SIGNATURE_COFFEE } from '../data/signatureDrinks';
import { useCart } from '../context/CartContext';
import type { CoffeeProduct } from '../types';

export const SignatureCollection: React.FC = () => {
  const { addToCart, cafeConfig, setActiveItemForCustomization } = useCart();

  const handleQuickAdd = (drink: CoffeeProduct) => {
    addToCart({
      productId: drink.id,
      name: drink.name,
      price: drink.price,
      quantity: 1,
      image: drink.image,
      milkChoice: drink.name.includes('Cold Brew') || drink.name.includes('Espresso') || drink.name.includes('V60') ? undefined : 'Whole Milk',
      temperature: drink.name.includes('Cold Brew') ? 'Iced' : 'Hot'
    });
  };

  return (
    <section id="signature" className="py-20 sm:py-28 bg-coffee-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coffee-900 border border-caramel-500/25 text-caramel-400 text-xs uppercase tracking-widest font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Selection</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory-50 tracking-tight">
              Signature Extractions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-coffee-300 font-light">
              Crafted without compromise. Each drink represents an uncompromising dedication to origin traceability, extraction timing, and temperature symmetry.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm text-coffee-300">
              Prices in <span className="font-semibold text-caramel-400">{cafeConfig.currencySymbol} INR</span> • Freshly extracted
            </span>
          </div>
        </div>

        {/* Product Cards Grid - 1 col on mobile (375px+), 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SIGNATURE_COFFEE.map((drink, idx) => (
            <motion.div
              key={drink.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group glass-card rounded-3xl overflow-hidden flex flex-col justify-between border border-coffee-800 hover:border-caramel-500/40 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Image Container with Aspect Ratio to avoid CLS */}
                <div className="relative aspect-[16/10] overflow-hidden bg-coffee-900">
                  <img
                    src={drink.image}
                    alt={drink.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/20 to-transparent" />
                  
                  {/* Badge */}
                  {drink.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-coffee-950/85 backdrop-blur-md border border-caramel-500/30 text-[11px] font-semibold text-caramel-300 tracking-wide uppercase">
                      {drink.badge}
                    </span>
                  )}

                  {/* Price Tag Pill */}
                  <div className="absolute top-3 right-3 px-3.5 py-1 rounded-full bg-caramel-500 text-coffee-950 font-bold text-sm shadow-lg">
                    {cafeConfig.currencySymbol}{drink.price}
                  </div>

                  {/* Origin Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-ivory-200 bg-coffee-950/70 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/5">
                    <div className="flex items-center gap-1.5 truncate">
                      <MapPin className="w-3.5 h-3.5 text-caramel-400 shrink-0" />
                      <span className="truncate">{drink.origin}</span>
                    </div>
                    <span className="text-coffee-300 font-mono shrink-0 ml-2">{drink.roast}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <span className="text-xs uppercase tracking-wider text-caramel-400 font-medium block mb-1">
                    {drink.tagline}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory-50 group-hover:text-caramel-300 transition-colors">
                    {drink.name}
                  </h3>
                  
                  <p className="mt-2.5 text-xs sm:text-sm text-coffee-200 leading-relaxed font-light line-clamp-3">
                    {drink.description}
                  </p>

                  {/* Tasting Notes Chips */}
                  <div className="mt-4 pt-3 border-t border-coffee-800/80">
                    <span className="text-[10px] uppercase tracking-wider text-coffee-400 block mb-2 font-medium">
                      Sensory Profile:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {drink.notes.map((note) => (
                        <span
                          key={note}
                          className="px-2.5 py-1 rounded-lg bg-coffee-900 border border-coffee-700/60 text-[11px] text-ivory-200 font-medium"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons (Comfortable 48px tap target on mobile) */}
              <div className="p-5 sm:p-6 pt-0 flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => handleQuickAdd(drink)}
                  className="flex-1 min-h-[44px] sm:min-h-[46px] rounded-2xl bg-gradient-to-r from-caramel-500 to-copper-500 hover:brightness-110 active:scale-98 text-coffee-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                  aria-label={`Add ${drink.name} to order bag`}
                >
                  <Plus className="w-4 h-4 text-coffee-950" />
                  <span>Quick Add</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveItemForCustomization(drink)}
                  className="p-3 rounded-2xl bg-coffee-850 hover:bg-coffee-800 border border-coffee-700/80 text-caramel-400 hover:text-caramel-300 active:scale-95 transition-all"
                  title="Customize milk, sweetness, and temperature"
                  aria-label={`Customize options for ${drink.name}`}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
