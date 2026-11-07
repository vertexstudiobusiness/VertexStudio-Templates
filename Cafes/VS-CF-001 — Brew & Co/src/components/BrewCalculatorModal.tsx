import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sliders, Droplets, Thermometer, Clock, Sparkles, Scale, Coffee, ArrowRight } from 'lucide-react';
import { BREW_METHODS, type BrewMethod } from '../data/brewGuideData';
import { useCart } from '../context/CartContext';

export const BrewCalculatorModal: React.FC = () => {
  const { isBrewGuideOpen, setIsBrewGuideOpen } = useCart();
  const [selectedMethodId, setSelectedMethodId] = useState<string>('v60');
  const [cups, setCups] = useState<number>(2);
  const [dosePerCup, setDosePerCup] = useState<number>(15); // grams

  if (!isBrewGuideOpen) return null;

  const currentMethod: BrewMethod = BREW_METHODS.find((m) => m.id === selectedMethodId) || BREW_METHODS[0];

  const totalCoffeeGrams = cups * dosePerCup;
  const totalWaterGrams = Math.round(totalCoffeeGrams * currentMethod.ratio);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsBrewGuideOpen(false)}
          className="fixed inset-0 bg-coffee-950/85 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="relative w-full max-w-2xl bg-coffee-900 border border-coffee-750 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]"
        >
          {/* Modal Header */}
          <div className="p-5 sm:p-6 border-b border-coffee-800 flex items-center justify-between shrink-0 bg-coffee-950">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-caramel-500/20 text-caramel-400 flex items-center justify-center border border-caramel-500/30">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-caramel-400 font-semibold block">
                  Artisan Brew Lab
                </span>
                <h2 className="font-serif font-bold text-xl sm:text-2xl text-ivory-50">
                  Specialty Ratio Calculator
                </h2>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsBrewGuideOpen(false)}
              className="p-2.5 rounded-full bg-coffee-850 hover:bg-coffee-800 text-ivory-100 hover:text-caramel-400 border border-coffee-700 active:scale-95 transition-all"
              aria-label="Close calculator"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
            {/* Method Selectors */}
            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-coffee-300 mb-2">
                1. Select Brewing Method
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {BREW_METHODS.map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setSelectedMethodId(method.id)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      selectedMethodId === method.id
                        ? 'bg-caramel-500/20 border-caramel-500 text-caramel-300 shadow-md'
                        : 'bg-coffee-850 border-coffee-750 text-coffee-300 hover:text-ivory-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <Coffee className="w-4 h-4 text-caramel-400" />
                      <span className="text-[10px] font-mono text-copper-400">1:{method.ratio}</span>
                    </div>
                    <span className="font-serif font-bold text-xs sm:text-sm block text-ivory-50 leading-tight">
                      {method.name.split(' ')[0]}
                    </span>
                    <span className="text-[10px] text-coffee-400 line-clamp-1">
                      {method.grind.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Serving Size & Ratio Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-coffee-850/80 border border-coffee-800">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-ivory-100">Number of Cups</span>
                  <span className="font-mono text-xs font-bold text-caramel-400">{cups} {cups === 1 ? 'Cup' : 'Cups'}</span>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setCups(n)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition-colors ${
                        cups === n
                          ? 'bg-caramel-500 text-coffee-950 shadow-sm'
                          : 'bg-coffee-900 border border-coffee-750 text-coffee-300 hover:text-ivory-100'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-ivory-100">Dose per Cup</span>
                  <span className="font-mono text-xs font-bold text-copper-400">{dosePerCup}g</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="22"
                  step="1"
                  value={dosePerCup}
                  onChange={(e) => setDosePerCup(Number(e.target.value))}
                  className="w-full accent-caramel-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-coffee-400 mt-1">
                  <span>12g (Light)</span>
                  <span>15g (Golden Standard)</span>
                  <span>22g (Bold)</span>
                </div>
              </div>
            </div>

            {/* Calculated Output Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-coffee-950 border border-caramel-500/30 flex flex-col items-center text-center">
                <Scale className="w-4 h-4 text-caramel-400 mb-1" />
                <span className="font-serif text-xl sm:text-2xl font-bold text-ivory-50">
                  {totalCoffeeGrams}g
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-coffee-300">
                  Coffee Beans
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-coffee-950 border border-caramel-500/30 flex flex-col items-center text-center">
                <Droplets className="w-4 h-4 text-cyan-400 mb-1" />
                <span className="font-serif text-xl sm:text-2xl font-bold text-ivory-50">
                  {totalWaterGrams}ml
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-coffee-300">
                  Water Volume
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-coffee-950 border border-coffee-800 flex flex-col items-center text-center">
                <Thermometer className="w-4 h-4 text-orange-400 mb-1" />
                <span className="font-serif text-sm sm:text-base font-bold text-ivory-50 truncate w-full">
                  {currentMethod.temp}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-coffee-300">
                  Water Temp
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-coffee-950 border border-coffee-800 flex flex-col items-center text-center">
                <Clock className="w-4 h-4 text-emerald-400 mb-1" />
                <span className="font-serif text-sm sm:text-base font-bold text-ivory-50 truncate w-full">
                  {currentMethod.time}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-coffee-300">
                  Extraction Time
                </span>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-mono tracking-wider text-caramel-400 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Brew Protocol for {currentMethod.name}</span>
              </h4>

              <div className="space-y-2">
                {currentMethod.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-coffee-850/60 border border-coffee-800 flex items-start gap-3"
                  >
                    <span className="font-mono text-xs font-bold text-caramel-400 shrink-0 w-20">
                      {step.time}
                    </span>
                    <p className="text-xs text-coffee-200 font-light leading-relaxed">
                      {step.action}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="p-5 sm:p-6 bg-coffee-950 border-t border-coffee-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <span className="text-xs text-coffee-300 text-center sm:text-left">
              Need freshly roasted beans ground specifically for this method?
            </span>
            <button
              type="button"
              onClick={() => {
                setIsBrewGuideOpen(false);
                const el = document.querySelector('#beans');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-caramel-500 to-copper-500 text-coffee-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow"
            >
              <span>Explore Whole Beans</span>
              <ArrowRight className="w-3.5 h-3.5 text-coffee-950" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
