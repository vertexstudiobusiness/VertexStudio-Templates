import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle, MapPin, Clock, CalendarCheck, ChevronRight, ShoppingBag } from 'lucide-react';
import { CAFE_CONFIG } from '../data/cafeConfig';
import { useCart } from '../context/CartContext';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const { totalCount, totalPrice, setIsCartOpen, setIsReservationModalOpen } = useCart();

  const navLinks = [
    { label: 'Home', href: '#hero', sub: 'Welcome & Highlights' },
    { label: 'Our Philosophy', href: '#atmosphere', sub: 'Atmosphere & Craft' },
    { label: 'Bestselling Bakes', href: '#bestsellers', sub: 'Signature Coffees & Pastries' },
    { label: 'Our Heritage', href: '#story', sub: 'Paris × Copenhagen Roots' },
    { label: 'Artisanal Menu', href: '#menu', sub: 'Full Food & Drink Selection' },
    { label: 'Visual Journal', href: '#gallery', sub: 'Moments at Café Maison' },
    { label: 'Testimonials', href: '#testimonials', sub: 'Connoisseur Reviews' },
    { label: 'Location & Hours', href: '#location', sub: 'Pali Hill Sanctuary' },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1C1511]/75 backdrop-blur-md"
          />

          {/* Drawer (Mobile First: Full-width on <400px, max-w-sm on larger) */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="absolute right-0 top-0 bottom-0 w-full sm:max-w-sm bg-[#FBF8F3] shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#EFE8DC]"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between p-5 border-b border-[#EFE8DC] bg-[#F7F3EB]/70">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#291F18] flex items-center justify-center text-[#EFE8DC] font-serif text-base font-semibold shadow-sm">
                    M
                  </div>
                  <div>
                    <span className="font-serif text-xl text-[#291F18] tracking-wider block leading-none font-medium">
                      {CAFE_CONFIG.name}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#7E6251] block mt-0.5">
                      Artisanal Roastery
                    </span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-11 h-11 flex items-center justify-center text-[#5C473A] hover:text-[#1C1511] hover:bg-[#EFE8DC] active:bg-[#E2D7C5] rounded-full transition-colors"
                  aria-label="Close mobile navigation"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Quick Primary Actions in Mobile Nav */}
              <div className="p-4 bg-[#F7F3EB]/40 border-b border-[#EFE8DC] grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => {
                    onClose();
                    setIsCartOpen(true);
                  }}
                  className="w-full min-h-[46px] px-3 py-2 bg-[#291F18] active:bg-[#1C1511] text-[#F7F3EB] text-[11px] uppercase tracking-[0.12em] font-medium rounded-sm flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-[#CBB99F]" />
                  <span>Bag {totalCount > 0 ? `(${totalCount} • ₹${totalPrice})` : ''}</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    setIsReservationModalOpen(true);
                  }}
                  className="w-full min-h-[46px] px-3 py-2 border border-[#4F5E4B] text-[#4F5E4B] active:bg-[#4F5E4B] active:text-white text-[11px] uppercase tracking-[0.12em] font-medium rounded-sm flex items-center justify-center gap-1.5 transition-colors"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Table</span>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center justify-between min-h-[50px] px-3 py-2.5 rounded-sm hover:bg-[#F7F3EB] active:bg-[#EFE8DC] transition-colors group"
                  >
                    <div>
                      <span className="font-serif text-lg text-[#1C1511] group-hover:text-[#4F5E4B] transition-colors block leading-snug">
                        {link.label}
                      </span>
                      <span className="text-[11px] text-[#7E6251] block font-light">
                        {link.sub}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#CBB99F] group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Contact / Location Card */}
            <div className="p-5 border-t border-[#EFE8DC] bg-[#F7F3EB] space-y-3.5 text-xs text-[#5C473A]">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#4F5E4B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#291F18]">Open Daily from 07:30 AM</p>
                  <p className="text-[11px] text-[#7E6251]">Mon–Fri: 07:30–21:30 | Sat–Sun: 08:00–22:30</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#4F5E4B] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#5C473A] leading-tight">
                  {CAFE_CONFIG.address.street}, {CAFE_CONFIG.address.neighborhood}
                </p>
              </div>

              <div className="pt-2 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${CAFE_CONFIG.phone}`}
                  className="min-h-[44px] flex items-center justify-center gap-1.5 bg-[#FBF8F3] border border-[#EFE8DC] rounded-sm text-xs text-[#291F18] font-medium active:bg-[#EFE8DC]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#4F5E4B]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/${CAFE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Bonjour Café Maison! I am contacting you from the mobile website.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center justify-center gap-1.5 bg-[#4F5E4B] text-white rounded-sm text-xs font-medium active:bg-[#3D4A3A]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
