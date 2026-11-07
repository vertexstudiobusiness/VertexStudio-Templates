import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  Calendar, 
  ChevronRight, 
  MapPin, 
  Clock, 
  Sparkles,
  Globe,
  Briefcase,
  Building,
  UtensilsCrossed,
  Tag,
  BedDouble
} from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { CurrencyCode } from '../types';
import { CURRENCIES } from '../utils/currency';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentCurrency: CurrencyCode;
  onCurrencyChange: (code: CurrencyCode) => void;
  onOpenBooking: () => void;
  onOpenCorporateRfp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onCurrencyChange,
  onOpenBooking,
  onOpenCorporateRfp
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home', icon: Building },
    { label: 'Rooms & Suites', href: '#rooms', icon: BedDouble },
    { label: 'Business Facilities', href: '#facilities', icon: Briefcase },
    { label: 'Meetings & Events', href: '#meetings', icon: Building },
    { label: 'Dining', href: '#dining', icon: UtensilsCrossed },
    { label: 'Corporate Offers', href: '#offers', icon: Tag },
    { label: 'Location', href: '#location', icon: MapPin },
    { label: 'Contact', href: '#contact', icon: Phone },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${encodeURIComponent(
    'Hello Grand Meridian Concierge, I would like to enquire about room reservations and corporate rates.'
  )}`;

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Bar (Desktop Only) */}
      <div className="hidden lg:block bg-navy-950 text-charcoal-300 text-xs py-1.5 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-charcoal-400">
              <MapPin className="w-3.5 h-3.5 text-gold-500" />
              <span>Asset Area 8, Hospitality District, Aerocity, New Delhi</span>
            </span>
            <span className="flex items-center gap-1.5 text-charcoal-400 border-l border-navy-800 pl-6">
              <Clock className="w-3.5 h-3.5 text-gold-500" />
              <span>IST (UTC+5:30) • 24°C Aerocity</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${HOTEL_INFO.contact.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-charcoal-300 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              <span>Direct: {HOTEL_INFO.contact.phoneDisplay}</span>
            </a>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Concierge</span>
            </a>

            {/* Currency Switcher */}
            <div className="relative">
              <button
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1.5 bg-navy-900 border border-navy-700 rounded px-2 py-0.5 text-charcoal-200 hover:border-gold-500/50 transition-colors"
                aria-label="Select Currency"
              >
                <Globe className="w-3 h-3 text-gold-400" />
                <span className="font-semibold text-gold-400">{currentCurrency}</span>
                <span className="text-[10px] text-charcoal-400">({CURRENCIES[currentCurrency].symbol.trim()})</span>
              </button>

              {currencyDropdownOpen && (
                <div 
                  className="absolute right-0 mt-1 w-44 bg-navy-900 border border-gold-500/30 rounded-lg shadow-xl py-1 z-50"
                  onMouseLeave={() => setCurrencyDropdownOpen(false)}
                >
                  {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => (
                    <button
                      key={code}
                      onClick={() => {
                        onCurrencyChange(code);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-navy-800 transition-colors ${
                        currentCurrency === code ? 'text-gold-400 font-semibold bg-navy-850' : 'text-charcoal-200'
                      }`}
                    >
                      <span>{CURRENCIES[code].label}</span>
                      <span className="text-charcoal-400">{CURRENCIES[code].symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-navy-900/95 backdrop-blur-md shadow-lg border-b border-navy-800/80 py-2.5 sm:py-3' 
            : 'bg-navy-900/90 backdrop-blur-sm border-b border-navy-800/50 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Brand Crest */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
          >
            {/* Geometric Modern Crest Icon */}
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-navy-850 to-navy-950 border border-gold-500/40 p-1 flex items-center justify-center shadow-inner shadow-gold-500/10 group-hover:border-gold-400 transition-colors">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                <rect x="8" y="8" width="84" height="84" rx="14" stroke="#C59A45" strokeWidth="3" opacity="0.4" />
                <path d="M28 72 L28 28 L50 54 L72 28 L72 72" stroke="#E2C47E" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="50" cy="20" r="4.5" fill="#C59A45" />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-lg sm:text-2xl font-bold tracking-wider text-white group-hover:text-gold-200 transition-colors">
                  GRAND MERIDIAN
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 border border-gold-500/30 px-1.5 py-0.5 rounded">
                  5-STAR
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-charcoal-400 font-sans font-medium">
                Hotel & Residences • Aerocity
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-2.5 py-1.5 text-xs xl:text-sm font-medium text-charcoal-200 hover:text-gold-400 transition-colors rounded hover:bg-navy-800/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Header Action CTAs (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenCorporateRfp}
              className="px-3.5 py-2 text-xs font-semibold text-gold-300 hover:text-white border border-gold-500/40 hover:border-gold-400 rounded-md transition-all duration-200 hover:bg-gold-500/10"
            >
              Corporate RFP
            </button>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 text-xs xl:text-sm font-semibold text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 rounded-md shadow-md shadow-gold-500/20 hover:shadow-gold-500/40 transition-all duration-300 flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Your Stay</span>
            </button>
          </div>

          {/* Mobile Right Bar: Currency Toggle, Call CTA, and Hamburger Button */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Quick Currency Selector for Mobile */}
            <button
              onClick={() => {
                const codes: CurrencyCode[] = ['INR', 'USD', 'EUR', 'GBP', 'AED'];
                const currentIndex = codes.indexOf(currentCurrency);
                const nextCode = codes[(currentIndex + 1) % codes.length];
                onCurrencyChange(nextCode);
              }}
              className="touch-target px-2 py-1 rounded bg-navy-800 border border-navy-700 text-gold-400 text-xs font-bold flex items-center gap-1"
              aria-label="Toggle currency"
            >
              <span>{currentCurrency}</span>
            </button>

            {/* Direct Phone Call for Mobile */}
            <a
              href={`tel:${HOTEL_INFO.contact.phone.replace(/\s+/g, '')}`}
              className="touch-target flex items-center justify-center p-2 rounded-lg bg-navy-800/80 border border-gold-500/30 text-gold-400 hover:text-white transition-colors"
              aria-label="Call Hotel"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Mobile Book Button */}
            <button
              onClick={onOpenBooking}
              className="touch-target px-3 py-1.5 rounded-lg bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 font-bold text-xs shadow-sm flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="touch-target p-2 rounded-lg text-charcoal-200 hover:text-white bg-navy-800 border border-navy-700 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-gold-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer (Strictly Mobile-First, Touch-Optimized 375px–430px) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bottom-0 bg-navy-950/98 backdrop-blur-xl border-t border-navy-800 z-50 overflow-y-auto flex flex-col justify-between p-4 sm:p-6"
          >
            {/* Quick Action Buttons at top of mobile menu */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <a
                href={`tel:${HOTEL_INFO.contact.phone.replace(/\s+/g, '')}`}
                className="touch-target flex items-center justify-center gap-2 bg-navy-900 border border-navy-700 rounded-lg py-2.5 text-xs font-semibold text-charcoal-100 hover:text-gold-400"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>Call Front Desk</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target flex items-center justify-center gap-2 bg-emerald-950/40 border border-emerald-500/30 rounded-lg py-2.5 text-xs font-semibold text-emerald-400"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp VIP</span>
              </a>
            </div>

            {/* Navigation Links with generous touch height */}
            <div className="flex-1 space-y-1">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="touch-target flex items-center justify-between px-3 py-3 rounded-lg text-charcoal-200 hover:text-white hover:bg-navy-900 transition-colors border-b border-navy-900/60"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-md bg-navy-900 border border-navy-800 flex items-center justify-center text-gold-400">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium">{link.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-charcoal-500" />
                  </a>
                );
              })}
            </div>

            {/* Bottom Actions inside Mobile Drawer */}
            <div className="pt-4 mt-4 border-t border-navy-800 space-y-3">
              {/* Currency Selector Full Row */}
              <div className="flex items-center justify-between bg-navy-900 px-3 py-2 rounded-lg border border-navy-800">
                <span className="text-xs text-charcoal-400">Display Currency:</span>
                <div className="flex items-center gap-1.5">
                  {(Object.keys(CURRENCIES) as CurrencyCode[]).map((c) => (
                    <button
                      key={c}
                      onClick={() => onCurrencyChange(c)}
                      className={`text-xs px-2 py-1 rounded font-semibold ${
                        currentCurrency === c 
                          ? 'bg-gold-500 text-navy-950' 
                          : 'bg-navy-800 text-charcoal-300 hover:text-white'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Corporate RFP & Book Now CTAs */}
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCorporateRfp();
                  }}
                  className="w-full touch-target py-3 rounded-lg border border-gold-500/40 text-gold-300 font-semibold text-sm hover:bg-gold-500/10 flex items-center justify-center gap-2"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Corporate Rates & RFP Enquiry</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full touch-target py-3.5 rounded-lg bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-navy-950 font-bold text-sm shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your Stay (Best Rate Guarantee)</span>
                </button>
              </div>

              {/* Hotel Coordinates info */}
              <div className="text-center text-[11px] text-charcoal-500 pt-2">
                Aerocity, New Delhi • 12 Mins to Terminal 3 • 24/7 Concierge
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
