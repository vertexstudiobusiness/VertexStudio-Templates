import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Coffee, 
  ShoppingBag, 
  Menu as MenuIcon, 
  X, 
  MessageCircle, 
  Sliders, 
  MapPin, 
  Clock, 
  Settings2,
  ChevronRight
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen, cafeConfig, setIsBrewGuideOpen, setIsConfigModalOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Coffee', href: '#signature' },
    { label: 'Craft', href: '#craftsmanship' },
    { label: 'Menu', href: '#menu' },
    { label: 'Beans & Gear', href: '#beans' },
    { label: 'The Space', href: '#gallery' },
    { label: 'Visit Us', href: '#visit' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-2xl shadow-coffee-950/60'
            : 'bg-gradient-to-b from-coffee-950/90 via-coffee-950/50 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Brew & Co. Home"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-caramel-500 to-copper-600 flex items-center justify-center p-0.5 shadow-lg shadow-caramel-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-full bg-coffee-900 flex items-center justify-center text-caramel-400">
                  <Coffee className="w-5 h-5 text-caramel-400 transition-transform group-hover:rotate-12" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-ivory-50 group-hover:text-caramel-300 transition-colors">
                  {cafeConfig.cafeName}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-coffee-300 font-medium">
                  Specialty Coffee Roasters
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-sm font-medium text-ivory-200 hover:text-caramel-400 transition-colors py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-caramel-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Brew Calculator Trigger */}
              <button
                type="button"
                onClick={() => setIsBrewGuideOpen(true)}
                className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium text-coffee-200 hover:text-ivory-50 hover:bg-coffee-800/60 border border-coffee-700/60 transition-all"
                title="Open Specialty Brew Ratio Calculator"
                aria-label="Open Brew Calculator"
              >
                <Sliders className="w-3.5 h-3.5 text-caramel-400" />
                <span>Brew Ratio</span>
              </button>

              {/* Order Bag / Cart Button */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 sm:px-3 sm:py-2 rounded-full bg-coffee-850 hover:bg-coffee-800 border border-caramel-500/30 text-ivory-50 flex items-center gap-2 transition-transform active:scale-95"
                aria-label={`View order bag with ${totalItems} items`}
              >
                <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-caramel-400" />
                <span className="hidden sm:inline text-xs font-semibold">Order Bag</span>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="min-w-5 h-5 px-1.5 rounded-full bg-gradient-to-r from-caramel-500 to-copper-500 text-coffee-950 text-[11px] font-bold flex items-center justify-center shadow-md"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </button>

              {/* Quick WhatsApp Order Desktop CTA */}
              <a
                href="#menu"
                onClick={(e) => handleNavClick(e, '#menu')}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-caramel-500 to-copper-500 text-coffee-950 font-semibold text-xs tracking-wide uppercase hover:brightness-110 transition-all shadow-md shadow-caramel-500/20 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quick Order</span>
              </a>

              {/* Config Settings Trigger (Easy Customization) */}
              <button
                type="button"
                onClick={() => setIsConfigModalOpen(true)}
                className="p-2 text-coffee-400 hover:text-caramel-400 transition-colors"
                title="Customize Café Details (Demo Config)"
                aria-label="Customize Demo Settings"
              >
                <Settings2 className="w-4 h-4" />
              </button>

              {/* Mobile Hamburger Toggle (Finger friendly minimum 44px target) */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-coffee-850 border border-coffee-700/60 text-ivory-100 hover:text-caramel-400 active:scale-95 transition-all"
                aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-caramel-400" />
                ) : (
                  <MenuIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden bg-coffee-950/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-xs sm:max-w-sm bg-coffee-900 border-l border-coffee-800 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-coffee-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-caramel-500/20 border border-caramel-500/40 flex items-center justify-center text-caramel-400">
                      <Coffee className="w-4 h-4" />
                    </div>
                    <span className="font-serif font-bold text-lg text-ivory-50">
                      {cafeConfig.cafeName}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-coffee-800 text-coffee-300 hover:text-ivory-50"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="py-6 space-y-1">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx }}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="flex items-center justify-between py-3 px-3 rounded-xl text-base font-medium text-ivory-100 hover:text-caramel-400 hover:bg-coffee-850 active:bg-coffee-800 transition-colors"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-coffee-400" />
                    </motion.a>
                  ))}
                </nav>

                {/* Quick Interactive Tools */}
                <div className="pt-2 pb-6 border-t border-coffee-800 space-y-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsBrewGuideOpen(true);
                    }}
                    className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl bg-coffee-850 border border-coffee-700/60 text-sm font-medium text-ivory-200 hover:text-caramel-300"
                  >
                    <div className="flex items-center gap-2.5">
                      <Sliders className="w-4 h-4 text-caramel-400" />
                      <span>Brew Ratio Calculator</span>
                    </div>
                    <span className="text-[11px] bg-coffee-750 text-caramel-400 px-2 py-0.5 rounded font-mono">
                      Interactive
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsCartOpen(true);
                    }}
                    className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl bg-coffee-850 border border-caramel-500/20 text-sm font-medium text-ivory-100"
                  >
                    <div className="flex items-center gap-2.5">
                      <ShoppingBag className="w-4 h-4 text-caramel-400" />
                      <span>Your Order Bag</span>
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-caramel-500 text-coffee-950">
                      {totalItems} items
                    </span>
                  </button>
                </div>
              </div>

              {/* Bottom Card: Location & Hours */}
              <div className="pt-4 border-t border-coffee-800 text-xs text-coffee-300 space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                  <span>{cafeConfig.addressLine1}, {cafeConfig.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-copper-400 shrink-0" />
                  <span>Mon–Sun: 7:30 AM – 10:30 PM</span>
                </div>
                <div className="pt-3">
                  <a
                    href={`https://wa.me/${cafeConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${cafeConfig.cafeName}, I would like to place an order or inquire about table seating.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-caramel-500 to-copper-500 text-coffee-950 font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-caramel-500/20"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
