import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, ShoppingBag, Check, RefreshCw } from 'lucide-react';
import { BEANS_AND_MERCH, GRIND_OPTIONS } from '../data/beansAndMerch';
import { useCart } from '../context/CartContext';
import type { MerchItem } from '../types';

export const BeansAndMerch: React.FC = () => {
  const { addToCart, cafeConfig } = useCart();
  const [selectedGrinds, setSelectedGrinds] = useState<Record<string, string>>({
    'bean-1': 'whole-bean',
    'bean-2': 'whole-bean',
    'bean-3': 'whole-bean',
    'bean-4': 'whole-bean'
  });
  const [isSubscriptionActive, setIsSubscriptionActive] = useState(false);

  const handleGrindChange = (itemId: string, grindId: string) => {
    setSelectedGrinds((prev) => ({ ...prev, [itemId]: grindId }));
  };

  const handleAddBeanOrMerch = (item: MerchItem) => {
    const isBean = item.category === 'beans';
    const chosenGrindId = selectedGrinds[item.id] || 'whole-bean';
    const chosenGrind = GRIND_OPTIONS.find((g) => g.id === chosenGrindId)?.label;

    const finalPrice = isSubscriptionActive && isBean
      ? Math.round(item.price * 0.85)
      : item.price;

    addToCart({
      productId: item.id,
      name: `${item.name}${isSubscriptionActive && isBean ? ' (Bi-Weekly Subscription)' : ''}`,
      price: finalPrice,
      quantity: 1,
      image: item.image,
      grindChoice: isBean ? chosenGrind : undefined
    });
  };

  return (
    <section id="beans" className="py-20 sm:py-28 bg-coffee-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coffee-900 border border-caramel-500/25 text-caramel-400 text-xs uppercase tracking-widest font-semibold mb-3">
              <Package className="w-3.5 h-3.5" />
              <span>Take Brew & Co. Home</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory-50 tracking-tight">
              Single Origin Beans & Gear
            </h2>
            <p className="mt-3 text-sm sm:text-base text-coffee-300 font-light">
              Shipped within 48 hours of roasting in nitrogen-flushed, one-way degas valve craft pouches to guarantee pristine peak extraction at home.
            </p>
          </div>

          {/* Subscription Discount Banner Toggle */}
          <div className="glass-card p-3 sm:p-4 rounded-2xl flex items-center justify-between sm:justify-end gap-3.5 border border-caramel-500/30">
            <div className="text-left">
              <span className="text-xs font-bold text-ivory-50 flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 text-caramel-400 animate-spin-slow" />
                <span>Bean Subscription Club</span>
              </span>
              <span className="text-[11px] text-caramel-400 block font-medium">
                Save 15% on recurring fresh deliveries
              </span>
            </div>

            <button
              type="button"
              role="switch"
              aria-checked={isSubscriptionActive}
              onClick={() => setIsSubscriptionActive(!isSubscriptionActive)}
              className={`w-12 h-6 rounded-full transition-colors relative focus:outline-none p-0.5 ${
                isSubscriptionActive ? 'bg-gradient-to-r from-caramel-500 to-copper-500' : 'bg-coffee-800'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-coffee-950 transition-transform ${
                  isSubscriptionActive ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BEANS_AND_MERCH.map((item, idx) => {
            const isBean = item.category === 'beans';
            const effectivePrice = isSubscriptionActive && isBean
              ? Math.round(item.price * 0.85)
              : item.price;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between border border-coffee-800 hover:border-caramel-500/40 transition-all shadow-xl group"
              >
                <div>
                  {/* Photo container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-coffee-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/20 to-transparent" />

                    {/* Weight / Type Pill */}
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-coffee-950/85 backdrop-blur-md border border-caramel-500/30 text-[11px] font-semibold text-caramel-300">
                      {item.weightOrSize}
                    </span>

                    {/* Price Pill */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-caramel-500 text-coffee-950 font-bold text-sm shadow">
                      {isSubscriptionActive && isBean && (
                        <span className="text-[11px] line-through opacity-70">
                          {cafeConfig.currencySymbol}{item.price}
                        </span>
                      )}
                      <span>{cafeConfig.currencySymbol}{effectivePrice}</span>
                    </div>

                    {isBean && item.roastLevel && (
                      <div className="absolute bottom-3 left-3 px-3 py-1 rounded-xl bg-coffee-950/80 backdrop-blur-sm border border-white/5 text-[11px] text-ivory-200 font-mono">
                        {item.roastLevel}
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-serif text-xl font-bold text-ivory-50 group-hover:text-caramel-300 transition-colors">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-coffee-200 leading-relaxed font-light line-clamp-3">
                      {item.description}
                    </p>

                    {/* Tasting notes */}
                    {isBean && item.tastingNotes && (
                      <div className="mt-4 pt-3 border-t border-coffee-800">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-caramel-400 block mb-1.5">
                          Cupping Notes:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tastingNotes.map((note) => (
                            <span
                              key={note}
                              className="text-[11px] px-2.5 py-0.5 rounded-lg bg-coffee-900 border border-coffee-750 text-ivory-200"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Features checklist */}
                    {item.features && (
                      <div className="mt-3.5 space-y-1.5">
                        {item.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs text-coffee-300">
                            <Check className="w-3.5 h-3.5 text-caramel-400 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Grind Selector for Beans (Accessible Dropdown Select) */}
                    {isBean && (
                      <div className="mt-4 pt-3 border-t border-coffee-800">
                        <label
                          htmlFor={`grind-select-${item.id}`}
                          className="block text-[11px] uppercase font-mono tracking-wider text-coffee-300 mb-1.5"
                        >
                          Select Custom Grind:
                        </label>
                        <select
                          id={`grind-select-${item.id}`}
                          value={selectedGrinds[item.id] || 'whole-bean'}
                          onChange={(e) => handleGrindChange(item.id, e.target.value)}
                          className="w-full min-h-[44px] px-3 rounded-xl bg-coffee-900 border border-coffee-700 text-xs text-ivory-100 focus:border-caramel-500 transition-colors"
                        >
                          {GRIND_OPTIONS.map((grind) => (
                            <option key={grind.id} value={grind.id} className="bg-coffee-900 text-ivory-100">
                              {grind.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-5 sm:p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => handleAddBeanOrMerch(item)}
                    className="w-full min-h-[46px] rounded-2xl bg-gradient-to-r from-caramel-500 to-copper-500 hover:brightness-110 active:scale-98 text-coffee-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                    aria-label={`Add ${item.name} to order`}
                  >
                    <ShoppingBag className="w-4 h-4 text-coffee-950" />
                    <span>
                      {isSubscriptionActive && isBean ? 'Subscribe at 15% Off' : 'Add To Order'}
                    </span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
