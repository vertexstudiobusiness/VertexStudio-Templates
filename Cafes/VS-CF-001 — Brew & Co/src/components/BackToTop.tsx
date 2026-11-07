import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { cafeConfig } = useCart();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5"
        >
          {/* Quick Floating WhatsApp Bubble */}
          <a
            href={`https://wa.me/${cafeConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${cafeConfig.cafeName}, I'm browsing your menu and would like to order.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 p-3 sm:px-4 sm:py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/40 active:scale-95 transition-all"
            aria-label="Order on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span className="hidden sm:inline text-xs font-bold tracking-wide">
              Quick WhatsApp
            </span>
          </a>

          {/* Back To Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-3 rounded-full bg-coffee-900/90 hover:bg-coffee-800 text-caramel-400 hover:text-caramel-300 border border-caramel-500/30 shadow-xl backdrop-blur-md active:scale-95 transition-all"
            title="Scroll back to top"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
