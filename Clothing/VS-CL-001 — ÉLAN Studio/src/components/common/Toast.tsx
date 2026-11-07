import React from 'react';
import { useShop } from '../../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Check, X } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast } = useShop();

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-[120] max-w-sm w-[calc(100%-2rem)] pointer-events-none">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto bg-[#141311]/95 text-[#faf7f2] border border-[#c5a880]/30 shadow-2xl backdrop-blur-xl p-4 rounded-none flex items-start gap-3.5"
            role="status"
            aria-live="polite"
          >
            <div className="w-8 h-8 rounded-full bg-[#c5a880]/15 flex items-center justify-center text-[#c5a880] flex-shrink-0 mt-0.5">
              {toast.type === 'cart' && <ShoppingBag className="w-4 h-4" />}
              {toast.type === 'wishlist' && <Heart className="w-4 h-4 fill-[#c5a880]" />}
              {toast.type === 'info' && <Check className="w-4 h-4" />}
            </div>

            <div className="flex-1 min-w-0 pr-1">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c5a880]">
                {toast.title}
              </p>
              {toast.subtitle && (
                <p className="text-sm text-[#ded6c9] font-light mt-0.5 truncate">
                  {toast.subtitle}
                </p>
              )}
            </div>

            <button
              onClick={() => {}}
              aria-label="Dismiss notification"
              className="text-[#948b7e] hover:text-[#faf7f2] transition-colors p-1 -mr-1 -mt-1"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
