import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { CAFE_CONFIG } from '../data/cafeConfig';
import { ShoppingBag, Menu as MenuIcon, CalendarCheck } from 'lucide-react';

interface NavbarProps {
  onOpenMobileNav: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMobileNav }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalCount, totalPrice, setIsCartOpen, setIsReservationModalOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Philosophy', href: '#atmosphere' },
    { label: 'Bestsellers', href: '#bestsellers' },
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Visit Us', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF8F3]/95 backdrop-blur-md py-2.5 sm:py-3 shadow-[0_4px_20px_rgba(41,31,24,0.06)] border-b border-[#EFE8DC]'
          : 'bg-[#FBF8F3]/85 backdrop-blur-sm py-3.5 sm:py-5 border-b border-[#EFE8DC]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Brand Logo - Compact on 375px, expanding gracefully */}
          <a
            href="#hero"
            className="group flex items-center gap-2 sm:gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F5E4B] shrink-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#291F18] flex items-center justify-center text-[#EFE8DC] font-serif text-base sm:text-lg font-semibold tracking-wider transition-transform duration-300 group-hover:scale-105 shadow-sm shrink-0">
              M
            </div>
            <div className="min-w-0">
              <span className="font-serif text-lg sm:text-2xl tracking-[0.06em] font-medium text-[#291F18] block leading-tight truncate">
                {CAFE_CONFIG.name}
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#7E6251] block font-medium">
                Paris · København
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.14em] uppercase font-medium text-[#5C473A]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 transition-colors hover:text-[#1C1511] group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#4F5E4B] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Table Reservation Button (Desktop/Tablet) */}
            <button
              onClick={() => setIsReservationModalOpen(true)}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs uppercase tracking-[0.14em] font-medium text-[#4F5E4B] hover:text-[#293327] hover:bg-[#EFE8DC]/60 rounded-sm transition-all duration-200 min-h-[40px]"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Table</span>
            </button>

            {/* Order Now / Bag Button (Mobile Touch Friendly) */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-[#291F18] hover:bg-[#1C1511] text-[#F7F3EB] text-[11px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.15em] font-medium rounded-sm shadow-sm transition-all duration-200 active:scale-95 min-h-[40px] sm:min-h-[42px]"
              aria-label={`Order Bag with ${totalCount} items`}
            >
              <ShoppingBag className="w-4 h-4 text-[#CBB99F] shrink-0" />
              <span className="hidden xs:inline">Bag</span>
              {totalCount > 0 ? (
                <span className="inline-flex items-center gap-1 pl-1 border-l border-white/20 text-[#EFE8DC]">
                  <span className="font-bold">({totalCount})</span>
                  <span className="font-sans font-semibold hidden sm:inline">₹{totalPrice}</span>
                </span>
              ) : (
                <span className="text-[10px] text-[#CBB99F] hidden sm:inline tracking-widest">• 0</span>
              )}
            </button>

            {/* Mobile Nav Hamburger Toggle (Minimum 44x44px Touch Target) */}
            <button
              onClick={onOpenMobileNav}
              className="lg:hidden w-11 h-11 flex items-center justify-center text-[#291F18] hover:bg-[#EFE8DC]/80 active:bg-[#EFE8DC] rounded-sm transition-colors focus:outline-none"
              aria-label="Open mobile menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
