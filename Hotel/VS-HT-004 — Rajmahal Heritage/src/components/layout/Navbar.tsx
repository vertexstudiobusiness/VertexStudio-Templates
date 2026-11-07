import React, { useState, useEffect } from 'react';
import { useHotel } from '../../context/HotelContext';
import { HOTEL_CONFIG } from '../../data/hotelConfig';
import { CrestLogo } from '../common/CrestLogo';
import {
  Menu,
  Phone,
  Volume2,
  VolumeX,
  Calendar,
  ChevronDown
} from 'lucide-react';

interface NavbarProps {
  onOpenMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMobileMenu }) => {
  const {
    currentCurrency,
    setCurrency,
    openBookingModal,
    isAudioPlaying,
    toggleAudio,
  } = useHotel();

  const [isScrolled, setIsScrolled] = useState(false);
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

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'The Palace', href: '#palace-heritage' },
    { name: 'Rooms & Suites', href: '#rooms' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Dining', href: '#dining' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Celebrations', href: '#celebrations' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-walnut-950/95 backdrop-blur-md shadow-xl border-b border-gold-400/20 py-2 sm:py-3'
          : 'bg-gradient-to-b from-walnut-950/90 via-walnut-950/60 to-transparent py-2.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Brand Monogram & Crest Logo */}
          <div className="flex items-center min-w-0">
            <CrestLogo variant="light" size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-6 text-[13px] tracking-[0.18em] uppercase font-serif text-ivory-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 text-ivory-200 hover:text-gold-300 transition-colors duration-200 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Utilities (Desktop & Mobile) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Ambient Audio Sitar Toggle */}
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-full border transition-all duration-300 min-h-[38px] min-w-[38px] flex items-center justify-center ${
                isAudioPlaying
                  ? 'bg-gold-500/20 border-gold-400 text-gold-300 animate-pulse'
                  : 'bg-walnut-900/60 border-gold-400/30 text-sandstone-300 hover:text-gold-200'
              }`}
              title={isAudioPlaying ? 'Mute Royal Ambient Sitar' : 'Play Royal Ambient Sitar'}
              aria-label="Toggle ambient sitar audio"
            >
              {isAudioPlaying ? (
                <Volume2 className="w-4 h-4 text-gold-400" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Currency Selector (Dropdown on tablet & desktop) */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-walnut-900/80 border border-gold-400/40 text-xs font-serif text-gold-200 hover:border-gold-300 transition min-h-[38px]"
                aria-expanded={currencyDropdownOpen}
              >
                <span>{currentCurrency}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {currencyDropdownOpen && (
                <div
                  className="absolute right-0 mt-1.5 w-32 bg-walnut-950 border border-gold-400/40 rounded shadow-xl py-1 z-50 animate-fade-in"
                  onMouseLeave={() => setCurrencyDropdownOpen(false)}
                >
                  {HOTEL_CONFIG.currencies.map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => {
                        setCurrency(curr.code);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs font-serif flex items-center justify-between hover:bg-maroon-900/60 ${
                        curr.code === currentCurrency
                          ? 'text-gold-300 font-bold bg-maroon-950'
                          : 'text-ivory-200'
                      }`}
                    >
                      <span>{curr.code}</span>
                      <span className="text-[10px] text-sandstone-400">{curr.symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Phone / Concierge (Desktop) */}
            <a
              href={`tel:${HOTEL_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs text-sandstone-300 hover:text-gold-200 tracking-wider font-serif"
              title="Call Royal Concierge"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span className="hidden xl:inline">{HOTEL_CONFIG.contact.phoneDisplay}</span>
            </a>

            {/* Reserve Your Stay CTA Button */}
            <button
              onClick={() => openBookingModal()}
              className="relative group overflow-hidden px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 border border-gold-400/60 text-gold-200 text-xs sm:text-sm font-serif tracking-[0.16em] uppercase font-bold shadow-royal hover:shadow-royal-gold transition-all duration-300 min-h-[38px] flex items-center"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span className="hidden xs:inline">Reserve</span>
                <span className="xs:hidden">Book</span>
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 opacity-20 transition-transform duration-500" />
            </button>

            {/* Hamburger Button for Mobile & Tablet */}
            <button
              onClick={onOpenMobileMenu}
              className="xl:hidden p-2 text-ivory-100 hover:text-gold-300 focus:outline-none transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-white/5 active:scale-95"
              aria-label="Open palace navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
