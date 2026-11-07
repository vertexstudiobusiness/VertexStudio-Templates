import React from 'react';
import { X, Utensils, Clock, Sparkles, MessageSquare, Phone } from 'lucide-react';
import { Restaurant, CurrencyCode } from '../types';
import { formatPrice } from '../utils/currency';
import { HOTEL_INFO } from '../data/hotelData';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuPreviewModalProps {
  restaurant: Restaurant | null;
  currency: CurrencyCode;
  onClose: () => void;
}

export const MenuPreviewModal: React.FC<MenuPreviewModalProps> = ({
  restaurant,
  currency,
  onClose
}) => {
  if (!restaurant) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Grand Meridian F&B team, I would like to reserve a table at ${restaurant.name}.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6">
        
        {/* Backdrop */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden z-10 my-4 max-h-[90vh] flex flex-col border border-gold-500/30"
        >
          {/* Header */}
          <div className="relative aspect-[16/7] overflow-hidden bg-navy-950 flex-shrink-0">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-black/30" />
            
            <button
              onClick={onClose}
              className="touch-target absolute top-3 right-3 p-2 rounded-full bg-navy-900/80 text-white hover:bg-navy-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-5 right-5 text-white">
              <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 bg-navy-900/90 px-2 py-0.5 rounded border border-gold-500/40">
                {restaurant.cuisine}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1">
                {restaurant.name}
              </h2>
              <div className="flex items-center gap-4 text-xs text-charcoal-300 mt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  <span>{restaurant.timing}</span>
                </span>
                <span>• Dress Code: {restaurant.dressCode}</span>
              </div>
            </div>
          </div>

          {/* Menu Items List */}
          <div className="overflow-y-auto p-5 sm:p-7 flex-1 space-y-6">
            <div className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
              {restaurant.description}
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-navy-950 border-b border-charcoal-200 pb-2 flex items-center justify-between">
                <span>Executive Chef's Signature Selections</span>
                <span className="text-[10px] text-charcoal-500 font-normal">Prices in {currency} (Taxes extra)</span>
              </h3>

              <div className="divide-y divide-charcoal-100">
                {restaurant.signatureDishes.map((dish, i) => (
                  <div key={i} className="py-3.5 flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full border-2 flex items-center justify-center p-0.5 ${
                          dish.dietary === 'veg' ? 'border-emerald-600' : 'border-rose-600'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${dish.dietary === 'veg' ? 'bg-emerald-600' : 'bg-rose-600'}`} />
                        </span>
                        <h4 className="font-serif font-bold text-base text-navy-950">
                          {dish.name}
                        </h4>
                      </div>
                      <p className="text-xs text-charcoal-600 font-light pr-2">
                        {dish.description}
                      </p>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="font-serif font-bold text-base text-navy-950">
                        {formatPrice(dish.priceINR, currency)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* In-Room Breakfast Notice */}
            <div className="bg-charcoal-50 p-4 rounded-2xl border border-charcoal-200 text-xs text-charcoal-600 space-y-1">
              <strong>Dietary Inquiries:</strong> Halal, gluten-free, vegan, and Jain preparations are gladly catered with 30 minutes advance notification to our executive culinary team.
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-4 sm:p-5 border-t border-charcoal-200 bg-charcoal-50 flex items-center justify-between gap-3">
            <a
              href={`tel:${HOTEL_INFO.contact.phone.replace(/\s+/g, '')}`}
              className="touch-target px-4 py-2.5 rounded-xl border border-charcoal-300 text-navy-900 font-semibold text-xs sm:text-sm hover:bg-white transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-gold-600" />
              <span>Call Hostess Desk</span>
            </a>

            <a
              href={`https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 text-navy-950 font-bold text-xs sm:text-sm shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Reserve Table on WhatsApp</span>
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
