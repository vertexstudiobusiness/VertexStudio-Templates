import React, { useState, useEffect } from 'react';
import { Coffee, Menu as MenuIcon, X, MapPin, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { CAFE_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenBooking: (zoneId?: string, packageId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Space', href: '#our-space' },
    { name: 'Features', href: '#features' },
    { name: 'Packages', href: '#packages' },
    { name: 'Menu', href: '#menu' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-header py-3 border-b border-sand-300/60 shadow-subtle'
            : 'bg-sand-50/90 backdrop-blur-md py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5 group focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-charcoal-900 text-sand-50 flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
                <Coffee className="w-5 h-5 text-ambercrema" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-tight text-charcoal-900 block leading-tight">
                  The Daily Grind
                </span>
                <span className="text-[10px] uppercase tracking-widest text-charcoal-500 font-medium block">
                  Study & Work Café
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-charcoal-700">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="transition-colors hover:text-charcoal-950 hover:underline underline-offset-8 decoration-sand-400 py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Quick Live Pill (Desktop & Tablet) */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-olive-50 border border-olive-200 text-xs font-medium text-olive-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open: 7:30 AM – 11 PM</span>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-900 hover:bg-charcoal-800 text-sand-50 text-xs sm:text-sm font-semibold transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-charcoal-900 focus:ring-offset-2 focus:ring-offset-sand-50"
              >
                <span>Book a Desk</span>
                <ArrowRight className="w-4 h-4 text-ambercrema" />
              </button>
            </div>

            {/* Mobile Actions: WhatsApp Icon + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`https://wa.me/${CAFE_INFO.whatsapp}?text=Hi%20The%20Daily%20Grind,%20I%20would%20like%20to%20enquire%20about%20desk%20availability%20today.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-olive-50 border border-olive-200 text-olive-800 flex items-center justify-center hover:bg-olive-100 transition-colors"
                aria-label="WhatsApp quick enquiry"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-xl bg-sand-200/80 border border-sand-300 text-charcoal-900 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-charcoal-900"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-charcoal-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-sand-50 border-l border-sand-200 shadow-elevated p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-sand-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-charcoal-900 flex items-center justify-center">
                    <Coffee className="w-4 h-4 text-ambercrema" />
                  </div>
                  <span className="font-serif font-bold text-charcoal-900 text-base">The Daily Grind</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-lg bg-sand-200 text-charcoal-800 flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status pill inside drawer */}
              <div className="mt-4 p-3 rounded-xl bg-olive-50 border border-olive-200/80 flex items-center gap-2 text-xs text-olive-900">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <div>
                  <p className="font-semibold">Indiranagar Space Open</p>
                  <p className="text-olive-700 text-[11px]">7:30 AM – 11:00 PM • Fast Dual Fiber</p>
                </div>
              </div>

              {/* Nav Links */}
              <nav className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium text-charcoal-800 hover:bg-sand-200/70 hover:text-charcoal-950 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-charcoal-400" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="pt-6 border-t border-sand-200 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-sand-50 text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Reserve a Desk Now</span>
                <ArrowRight className="w-4 h-4 text-ambercrema" />
              </button>

              <a
                href={`https://wa.me/${CAFE_INFO.whatsapp}?text=Hi%20The%20Daily%20Grind,%20I'm%20inquiring%20about%20workspace%20availability%20and%20rates.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-emerald-100 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat with Host on WhatsApp</span>
              </a>

              <div className="flex items-center justify-between text-[11px] text-charcoal-500 pt-2 px-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> 12th Main, Indiranagar
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" /> {CAFE_INFO.phone}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
