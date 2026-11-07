import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Globe, ChevronDown } from 'lucide-react';
import type { Currency } from '../types/hotel';
import { HOTEL_INFO } from '../data/hotelData';

interface NavbarProps {
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenBooking: (roomId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currency,
  onCurrencyChange,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Stay', href: '#stay' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Journal', href: '#journal' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-3.5 border-b border-haven-stone/20 shadow-sm'
            : 'bg-gradient-to-b from-haven-charcoal/60 via-haven-charcoal/20 to-transparent py-5 sm:py-6 text-haven-ivory'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Location */}
            <a
              href="#"
              className="group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-haven-stone"
            >
              <span
                className={`font-serif tracking-[0.25em] text-lg sm:text-xl uppercase font-light transition-colors ${
                  isScrolled ? 'text-haven-charcoal' : 'text-haven-ivory'
                }`}
              >
                The Haven
              </span>
              <span
                className={`text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-sans -mt-0.5 transition-colors ${
                  isScrolled ? 'text-haven-stone-dark' : 'text-haven-stone-light/80'
                }`}
              >
                Aravalli Foothills
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-[12px] tracking-[0.16em] uppercase transition-colors relative py-1 hover:opacity-100 ${
                    isScrolled
                      ? 'text-haven-charcoal/80 hover:text-haven-charcoal'
                      : 'text-haven-ivory/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right Controls: Currency, WhatsApp, Reserve Button, Mobile Hamburger */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Currency Selector (Desktop & Tablet) */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                  className={`hidden sm:flex items-center space-x-1 px-2.5 py-1.5 rounded-sm text-xs tracking-wider uppercase border transition-colors ${
                    isScrolled
                      ? 'border-haven-stone/30 text-haven-charcoal hover:bg-haven-stone/10'
                      : 'border-white/20 text-haven-ivory hover:bg-white/10'
                  }`}
                  aria-label="Select Currency"
                >
                  <Globe className="w-3.5 h-3.5 opacity-80" />
                  <span className="font-mono font-medium">{currency}</span>
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </button>

                {currencyDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-28 bg-white border border-haven-stone/20 shadow-lg py-1 z-50 rounded-sm">
                    {(['INR', 'USD', 'EUR'] as Currency[]).map((c) => (
                      <button
                        key={c}
                        onClick={() => {
                          onCurrencyChange(c);
                          setCurrencyDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs font-mono transition-colors flex items-center justify-between ${
                          currency === c
                            ? 'bg-haven-cream text-haven-charcoal font-semibold'
                            : 'text-haven-charcoal/70 hover:bg-haven-ivory'
                        }`}
                      >
                        <span>{c}</span>
                        <span className="text-[10px] text-haven-stone-dark">
                          {c === 'INR' ? '₹' : c === 'USD' ? '$' : '€'}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Reserve CTA Button (Tablet & Desktop) */}
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className={`hidden md:inline-flex items-center justify-center px-4 sm:px-5 py-2 text-xs tracking-[0.18em] uppercase transition-all duration-300 font-medium ${
                  isScrolled
                    ? 'bg-haven-charcoal text-haven-ivory hover:bg-haven-charcoal-light shadow-sm'
                    : 'bg-haven-ivory text-haven-charcoal hover:bg-white shadow-md'
                }`}
              >
                Reserve Key
              </button>

              {/* Mobile Reserve Compact Button */}
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className={`md:hidden px-3 py-1.5 text-[11px] tracking-wider uppercase font-medium transition-colors ${
                  isScrolled
                    ? 'bg-haven-charcoal text-haven-ivory'
                    : 'bg-haven-ivory text-haven-charcoal'
                }`}
              >
                Reserve
              </button>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-haven-stone transition-colors ${
                  isScrolled
                    ? 'text-haven-charcoal hover:bg-haven-stone/10'
                    : 'text-haven-ivory hover:bg-white/10'
                }`}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-haven-charcoal/60 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-[340px] xs:max-w-[380px] bg-haven-ivory border-l border-haven-stone/20 shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-haven-stone/20">
                <div>
                  <span className="font-serif text-lg tracking-[0.25em] text-haven-charcoal uppercase">
                    The Haven
                  </span>
                  <p className="text-[10px] tracking-widest text-haven-stone-dark uppercase">
                    Boutique Sanctuary
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-haven-charcoal hover:bg-haven-stone/10 rounded-sm"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="py-6 flex flex-col space-y-4" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.href)}
                    className="text-left text-base sm:text-lg font-serif tracking-[0.1em] text-haven-charcoal hover:text-haven-olive transition-colors py-1 flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-haven-stone group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Controls & Concierge Info */}
            <div className="pt-6 border-t border-haven-stone/20 space-y-5">
              {/* Currency Picker in Mobile Drawer */}
              <div>
                <p className="text-[10px] tracking-widest uppercase text-haven-stone-dark mb-2">
                  Display Currency
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {(['INR', 'USD', 'EUR'] as Currency[]).map((c) => (
                    <button
                      key={c}
                      onClick={() => onCurrencyChange(c)}
                      className={`py-2 text-xs font-mono text-center border transition-colors ${
                        currency === c
                          ? 'border-haven-charcoal bg-haven-charcoal text-white font-medium'
                          : 'border-haven-stone/30 bg-white text-haven-charcoal/80 hover:bg-haven-cream'
                      }`}
                    >
                      {c} {c === 'INR' ? '₹' : c === 'USD' ? '$' : '€'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reserve CTA in Drawer */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 bg-haven-charcoal text-haven-ivory text-xs tracking-[0.2em] uppercase font-medium hover:bg-haven-charcoal-light transition-colors text-center shadow-md"
              >
                Reserve Your Stay
              </button>

              {/* Direct Concierge Contact in Drawer */}
              <div className="bg-haven-cream/60 p-3.5 border border-haven-stone/20 text-xs space-y-2">
                <p className="font-serif text-haven-charcoal font-medium">Bespoke Concierge Desk</p>
                <div className="flex items-center space-x-2 text-haven-stone-dark">
                  <Phone className="w-3.5 h-3.5 text-haven-olive" />
                  <a href={`tel:${HOTEL_INFO.phone}`} className="hover:underline">
                    {HOTEL_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-haven-stone-dark">
                  <MessageSquare className="w-3.5 h-3.5 text-haven-olive" />
                  <a
                    href={`https://wa.me/919876543210?text=Hello%20The%20Haven`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    WhatsApp Concierge
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
