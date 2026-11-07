import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Settings, RotateCcw, Check, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ConfigModal: React.FC = () => {
  const { isConfigModalOpen, setIsConfigModalOpen, cafeConfig, updateConfig } = useCart();

  const [form, setForm] = useState({ ...cafeConfig });
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isConfigModalOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateConfig(form);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setIsConfigModalOpen(false);
    }, 700);
  };

  const handleReset = () => {
    const defaults = {
      cafeName: 'Brew & Co.',
      tagline: 'Specialty Coffee Roasters & Artisanal Café',
      whatsappNumber: '+919876543210',
      phoneNumber: '+91 80 4920 1840',
      email: 'hello@brewandco.in',
      addressLine1: '14/2 Lavelle Road, Shanthala Nagar',
      addressLine2: 'Opposite Bangalore Club, Ashok Nagar',
      city: 'Bengaluru, Karnataka',
      pincode: '560001',
      currencySymbol: '₹',
      instagramHandle: '@brewandco.roasters'
    };
    setForm(defaults);
    updateConfig(defaults);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsConfigModalOpen(false)}
          className="fixed inset-0 bg-coffee-950/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-coffee-900 border border-coffee-750 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-coffee-800 flex items-center justify-between shrink-0 bg-coffee-950">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-coffee-850 text-caramel-400 flex items-center justify-center border border-coffee-750">
                <Settings className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-ivory-50">
                  Customization & Demo Settings
                </h3>
                <span className="text-[11px] text-coffee-400">
                  Easily adapt brand name, WhatsApp recipient, and location
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsConfigModalOpen(false)}
              className="p-2 rounded-xl bg-coffee-850 hover:bg-coffee-800 text-ivory-100"
              aria-label="Close configuration"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            <div className="p-3 rounded-xl bg-caramel-500/10 border border-caramel-500/25 text-xs text-caramel-300 flex items-start gap-2">
              <Info className="w-4 h-4 text-caramel-400 shrink-0 mt-0.5" />
              <span>
                Tip: Enter your real WhatsApp number with country code (e.g. +91 9876543210) to test 1-click WhatsApp order generation in real-time!
              </span>
            </div>

            <div>
              <label className="block text-xs font-medium text-coffee-200 mb-1">
                Café Brand Name
              </label>
              <input
                type="text"
                value={form.cafeName}
                onChange={(e) => setForm({ ...form, cafeName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-coffee-950 border border-coffee-750 text-xs text-ivory-100 focus:border-caramel-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-coffee-200 mb-1">
                  WhatsApp Number (Orders)
                </label>
                <input
                  type="text"
                  value={form.whatsappNumber}
                  onChange={(e) => setForm({ ...form, whatsappNumber: e.target.value })}
                  placeholder="+919876543210"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-coffee-950 border border-coffee-750 text-xs text-ivory-100 focus:border-caramel-500 focus:outline-none font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-coffee-200 mb-1">
                  Currency Symbol
                </label>
                <input
                  type="text"
                  value={form.currencySymbol}
                  onChange={(e) => setForm({ ...form, currencySymbol: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-coffee-950 border border-coffee-750 text-xs text-ivory-100 focus:border-caramel-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-coffee-200 mb-1">
                Address Line 1
              </label>
              <input
                type="text"
                value={form.addressLine1}
                onChange={(e) => setForm({ ...form, addressLine1: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-coffee-950 border border-coffee-750 text-xs text-ivory-100 focus:border-caramel-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-coffee-200 mb-1">
                  City & State
                </label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-coffee-950 border border-coffee-750 text-xs text-ivory-100 focus:border-caramel-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-coffee-200 mb-1">
                  Pincode
                </label>
                <input
                  type="text"
                  value={form.pincode}
                  onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-coffee-950 border border-coffee-750 text-xs text-ivory-100 focus:border-caramel-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-coffee-800 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2.5 rounded-xl bg-coffee-800 hover:bg-coffee-750 text-xs font-semibold text-coffee-300 hover:text-ivory-100 flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-caramel-500 to-copper-500 hover:brightness-110 text-coffee-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <span>Save Configuration</span>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
