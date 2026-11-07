import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, MessageSquare, ChevronDown } from 'lucide-react';
import type { CurrencyCode } from '../../types';
import { RESORT_CONFIG } from '../../data/resortData';
import { CURRENCIES } from '../../utils/formatters';

interface NavbarProps {
  currentCurrency: CurrencyCode;
  onCurrencyChange: (currency: CurrencyCode) => void;
  onOpenBooking: (roomName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onCurrencyChange,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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
    { label: 'Stay', href: '#accommodations' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Dining', href: '#dining' },
    { label: 'Sanctuary', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Offers', href: '#offers' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#061410]/95 backdrop-blur-md py-3.5 shadow-xl border-b border-[#c5a880]/20'
            : 'bg-gradient-to-b from-[#05130f]/90 via-[#05130f]/40 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Mobile hamburger */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                className="p-2 -ml-2 text-[#f7f4ee] hover:text-[#dfbe85] transition-colors rounded-lg focus:outline-none focus:ring-1 focus:ring-[#c5a880]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Brand Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
            >
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#dfbe85] shadow-[0_0_8px_rgba(223,190,133,0.8)] transition-transform duration-500 group-hover:scale-125" />
                <span className="font-serif tracking-[0.25em] text-xl sm:text-2xl lg:text-3xl font-light text-[#fcfbf9] uppercase">
                  Aurelia
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#dfbe85] shadow-[0_0_8px_rgba(223,190,133,0.8)] transition-transform duration-500 group-hover:scale-125" />
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-[#c5a880] uppercase font-sans mt-0.5">
                Resorts & Spa • Goa
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs tracking-[0.18em] uppercase text-[#f7f4ee]/85 hover:text-[#dfbe85] transition-all duration-300 relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#dfbe85] after:transition-all after:duration-300 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Currency + Reserve CTA */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Currency Selector */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                  className="flex items-center space-x-1 px-2.5 py-1.5 rounded-full border border-[#c5a880]/30 text-[#f7f4ee] hover:border-[#dfbe85] text-xs font-sans tracking-wider transition-colors"
                  aria-expanded={currencyDropdownOpen}
                  aria-label="Select currency"
                >
                  <span>{currentCurrency}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#c5a880]" />
                </button>

                {currencyDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-28 bg-[#0b251f] border border-[#c5a880]/30 rounded-xl shadow-2xl py-1 z-50 overflow-hidden">
                    {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => (
                      <button
                        key={code}
                        type="button"
                        onClick={() => {
                          onCurrencyChange(code);
                          setCurrencyDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-[#143d34] transition-colors ${
                          currentCurrency === code ? 'text-[#dfbe85] font-semibold bg-[#143d34]/60' : 'text-[#f7f4ee]'
                        }`}
                      >
                        <span>{code}</span>
                        <span className="text-stone-400">{CURRENCIES[code].symbol}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Reserve CTA */}
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#c5a880] to-[#dfbe85] hover:from-[#dfbe85] hover:to-[#ead8b7] text-[#05130f] font-sans text-xs tracking-[0.16em] uppercase font-semibold transition-all duration-300 shadow-lg shadow-[#000]/30 hover:shadow-[#c5a880]/20 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve</span>
              </button>

              {/* Mobile quick reserve icon button */}
              <button
                type="button"
                onClick={() => onOpenBooking()}
                aria-label="Quick Booking"
                className="sm:hidden p-2 rounded-full bg-gradient-to-r from-[#c5a880] to-[#dfbe85] text-[#05130f] active:scale-95"
              >
                <Calendar className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Touch-Friendly, Mobile-First) */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#061410] text-[#f7f4ee] animate-in fade-in duration-300"
        >
          {/* Header inside mobile menu */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#c5a880]/20">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#dfbe85]" />
              <span className="font-serif tracking-[0.2em] text-xl font-light text-[#fcfbf9] uppercase">
                Aurelia
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 text-[#f7f4ee] hover:text-[#dfbe85] rounded-full hover:bg-white/5"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links list */}
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <nav className="space-y-4" aria-label="Mobile Links">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-2xl font-serif tracking-wider text-[#fcfbf9] hover:text-[#dfbe85] py-2 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Bottom contacts & booking button */}
            <div className="pt-8 space-y-5 border-t border-[#c5a880]/20 mt-6">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#c5a880] to-[#dfbe85] text-[#05130f] font-sans text-xs tracking-[0.2em] uppercase font-bold shadow-lg flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Stay</span>
              </button>

              <div className="flex items-center justify-between pt-2 text-xs text-[#c5a880]">
                <a
                  href={`tel:${RESORT_CONFIG.reservationsPhone.replace(/\s+/g, '')}`}
                  className="flex items-center space-x-2 hover:text-[#dfbe85]"
                >
                  <Phone className="w-4 h-4" />
                  <span>{RESORT_CONFIG.reservationsPhone}</span>
                </a>
                <a
                  href={`https://wa.me/919876543210`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-emerald-400 hover:text-emerald-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
