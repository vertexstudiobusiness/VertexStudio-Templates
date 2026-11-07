import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Ruler, HelpCircle, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen, currentProduct } = useShop();
  const [unit, setUnit] = useState<'inches' | 'cm'>('inches');
  
  // Fit Finder state
  const [userHeight, setUserHeight] = useState('175'); // in cm
  const [userWeight, setUserWeight] = useState('72'); // in kg
  const [preferredFit, setPreferredFit] = useState<'boxy' | 'standard'>('boxy');

  const calculateRecommendedSize = () => {
    const h = parseInt(userHeight) || 175;
    const w = parseInt(userWeight) || 70;

    if (w < 60) return preferredFit === 'boxy' ? 'M' : 'S';
    if (w <= 72) return preferredFit === 'boxy' ? 'L' : 'M';
    if (w <= 85) return preferredFit === 'boxy' ? 'XL' : 'L';
    return preferredFit === 'boxy' ? 'XXL' : 'XL';
  };

  const recommended = calculateRecommendedSize();

  return (
    <AnimatePresence>
      {isSizeGuideOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSizeGuideOpen(false)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-neutral-950 border border-brand-border z-10 max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-brand-border flex items-center justify-between bg-brand-surface sticky top-0 z-20">
              <div className="flex items-center gap-2">
                <Ruler className="w-5 h-5 text-brand-orange" />
                <h3 className="font-display font-black text-lg sm:text-xl text-brand-offwhite uppercase tracking-wider">
                  STREETWEAR SIZING ARCHITECTURE
                </h3>
              </div>
              <button
                onClick={() => setIsSizeGuideOpen(false)}
                className="p-1 text-brand-concrete hover:text-white"
                aria-label="Close size guide"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-6">
              {/* Product Sizing Context */}
              <div className="bg-neutral-900 border border-brand-border p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-bold">
                    SPECIFICATIONS FOR
                  </span>
                  <h4 className="font-display font-bold text-base text-brand-offwhite">
                    {currentProduct.name}
                  </h4>
                  <p className="text-xs font-mono text-brand-concrete mt-0.5">
                    Cut: <strong className="text-white">{currentProduct.fit}</strong> • Weight: <strong className="text-white">{currentProduct.gsm}</strong>
                  </p>
                </div>

                {/* Unit Switcher */}
                <div className="flex border border-brand-border bg-black self-end sm:self-auto">
                  <button
                    onClick={() => setUnit('inches')}
                    className={`px-3 py-1 font-mono text-xs font-bold transition-colors ${
                      unit === 'inches'
                        ? 'bg-brand-orange text-black'
                        : 'text-brand-concrete hover:text-white'
                    }`}
                  >
                    INCHES
                  </button>
                  <button
                    onClick={() => setUnit('cm')}
                    className={`px-3 py-1 font-mono text-xs font-bold transition-colors ${
                      unit === 'cm'
                        ? 'bg-brand-orange text-black'
                        : 'text-brand-concrete hover:text-white'
                    }`}
                  >
                    CENTIMETERS
                  </button>
                </div>
              </div>

              {/* Garment Measurements Table */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-brand-offwhite">
                    GARMENT FLAT MEASUREMENTS ({unit.toUpperCase()})
                  </h5>
                  <span className="text-[10px] font-mono text-brand-concrete">
                    Tolerance ±0.5"
                  </span>
                </div>

                <div className="overflow-x-auto border border-brand-border">
                  <table className="w-full text-left font-mono text-xs">
                    <thead className="bg-neutral-900 text-brand-orange border-b border-brand-border">
                      <tr>
                        <th className="p-3 font-bold">SIZE</th>
                        <th className="p-3 font-bold">CHEST</th>
                        <th className="p-3 font-bold">LENGTH</th>
                        <th className="p-3 font-bold">SHOULDER</th>
                        <th className="p-3 font-bold">SLEEVE</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40 text-brand-offwhite">
                      {currentProduct.measurements.map((m) => {
                        // Helper to convert inches to cm if unit is cm
                        const formatVal = (valStr: string) => {
                          if (unit === 'inches') return valStr;
                          // If it contains quotes, extract numbers
                          const match = valStr.match(/(\d+\.?\d*)/);
                          if (match) {
                            const cm = Math.round(parseFloat(match[1]) * 2.54);
                            return `${cm} cm`;
                          }
                          return valStr;
                        };

                        return (
                          <tr key={m.size} className="hover:bg-neutral-900/50 transition-colors">
                            <td className="p-3 font-bold text-brand-orange bg-brand-surface/40">
                              {m.size}
                            </td>
                            <td className="p-3">{formatVal(m.chest)}</td>
                            <td className="p-3">{formatVal(m.length)}</td>
                            <td className="p-3">{formatVal(m.shoulder)}</td>
                            <td className="p-3">{formatVal(m.sleeve)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Interactive Fit Finder */}
              <div className="border border-brand-border bg-brand-surface p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-brand-orange" />
                  <h5 className="font-display font-bold text-sm text-brand-offwhite uppercase tracking-wider">
                    SMART STREETWEAR FIT CALCULATOR
                  </h5>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  <div>
                    <label className="block text-[11px] font-mono text-brand-concrete mb-1">
                      HEIGHT (CM)
                    </label>
                    <input
                      type="number"
                      inputMode="numeric"
                      value={userHeight}
                      onChange={(e) => setUserHeight(e.target.value)}
                      className="w-full bg-neutral-900 border border-brand-border px-3 py-2.5 text-base sm:text-xs font-mono text-white outline-none focus:border-brand-orange min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-brand-concrete mb-1">
                      WEIGHT (KG)
                    </label>
                    <input
                      type="number"
                      inputMode="numeric"
                      value={userWeight}
                      onChange={(e) => setUserWeight(e.target.value)}
                      className="w-full bg-neutral-900 border border-brand-border px-3 py-2.5 text-base sm:text-xs font-mono text-white outline-none focus:border-brand-orange min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-brand-concrete mb-1">
                      DESIRED SILHOUETTE
                    </label>
                    <select
                      value={preferredFit}
                      onChange={(e) => setPreferredFit(e.target.value as any)}
                      className="w-full bg-neutral-900 border border-brand-border px-3 py-2.5 text-base sm:text-xs font-mono text-white outline-none focus:border-brand-orange min-h-[44px]"
                    >
                      <option value="boxy">True Boxy Oversized (Recommended)</option>
                      <option value="standard">Standard Relaxed Fit</option>
                    </select>
                  </div>
                </div>

                {/* Recommendation Result */}
                <div className="bg-brand-orange/10 border border-brand-orange/40 p-3.5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-brand-orange uppercase font-bold">
                      OFFGRID ENGINE RECOMMENDATION:
                    </span>
                    <p className="font-display font-bold text-lg text-white">
                      SIZE {recommended}
                    </p>
                    <p className="text-xs font-mono text-brand-concrete">
                      Gives you the intended runway streetwear shoulder drop and boxy torso.
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-brand-orange text-black font-display font-black text-xl flex items-center justify-center shrink-0">
                    {recommended}
                  </div>
                </div>
              </div>

              {/* Sizing Manifesto Advice */}
              <div className="text-xs font-mono text-brand-concrete space-y-2 border-t border-brand-border/60 pt-4">
                <p>
                  <strong className="text-white">Note on OFFGRID Silhouettes:</strong> Our garments are engineered intentionally oversized. You do NOT need to size up for a relaxed streetwear fit. Ordering your standard size gives you the designed drape shown in our campaign photography.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

