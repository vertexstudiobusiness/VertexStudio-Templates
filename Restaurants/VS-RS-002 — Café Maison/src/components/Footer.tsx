import React, { useState } from 'react';
import { CAFE_CONFIG } from '../data/cafeConfig';
import { MessageCircle, ArrowUp, Send, Check } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1511] text-[#EFE8DC] pt-16 sm:pt-20 pb-24 lg:pb-12 border-t border-[#3E3027]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16 border-b border-[#2E241D] text-left">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#EFE8DC] text-[#1C1511] flex items-center justify-center font-serif text-lg font-semibold">
                M
              </div>
              <div>
                <span className="font-serif text-2xl tracking-[0.08em] font-medium text-white block">
                  {CAFE_CONFIG.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#CBB99F] block">
                  Paris · København · Mumbai
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A2826D] max-w-sm leading-relaxed font-light">
              An independent sanctuary celebrating single-origin terroirs, 72-hour cold fermented laminated pastry, and the sacred everyday ritual of pause.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CAFE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#291F18] border border-[#3E3027] active:border-[#CBB99F] flex items-center justify-center text-[#EFE8DC] hover:text-white transition-colors"
                aria-label="Follow Café Maison on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${CAFE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Bonjour Café Maison! I am writing to you from your website.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#291F18] border border-[#3E3027] active:border-[#4F5E4B] flex items-center justify-center text-[#EFE8DC] hover:text-white transition-colors"
                aria-label="Chat with Café Maison on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5 sm:space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2.5 text-xs text-[#A2826D]">
              <li>
                <a href="#hero" className="hover:text-[#EFE8DC] transition-colors py-1 block">Home</a>
              </li>
              <li>
                <a href="#atmosphere" className="hover:text-[#EFE8DC] transition-colors py-1 block">Atmosphere</a>
              </li>
              <li>
                <a href="#bestsellers" className="hover:text-[#EFE8DC] transition-colors py-1 block">Bestsellers</a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#EFE8DC] transition-colors py-1 block">Our Story</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#EFE8DC] transition-colors py-1 block">Artisanal Menu</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#EFE8DC] transition-colors py-1 block">Visual Journal</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#EFE8DC] transition-colors py-1 block">Visit & Hours</a>
              </li>
            </ul>
          </div>

          {/* Hours & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Operating Hours
            </h4>
            <div className="space-y-2 text-xs text-[#A2826D] leading-relaxed">
              <p>
                <strong className="text-[#EFE8DC] block">Weekdays:</strong>
                07:30 AM – 09:30 PM
              </p>
              <p>
                <strong className="text-[#EFE8DC] block">Weekends:</strong>
                08:00 AM – 10:30 PM
              </p>
              <p className="pt-1 text-[11px] text-[#8A6750] italic">
                {CAFE_CONFIG.address.street}, {CAFE_CONFIG.address.neighborhood}
              </p>
            </div>
          </div>

          {/* Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Letters from the Roastery
            </h4>
            <p className="text-xs text-[#A2826D] leading-relaxed font-light">
              Occasional notes on new micro-lot harvests, seasonal tarts, and table availability.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full min-h-[44px] bg-[#291F18] border border-[#3E3027] rounded-sm pl-3.5 pr-12 text-sm sm:text-xs text-white placeholder-[#8A6750] focus:outline-none focus:border-[#CBB99F]"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-[#4F5E4B] active:bg-[#3D4A3A] text-white rounded-sm transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-[#889983]">Merci! You are now subscribed.</p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8A6750] text-center sm:text-left">
          <p>© {new Date().getFullYear()} {CAFE_CONFIG.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">WhatsApp: {CAFE_CONFIG.whatsappDisplayNumber}</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-[#EFE8DC] transition-colors min-h-[36px]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
