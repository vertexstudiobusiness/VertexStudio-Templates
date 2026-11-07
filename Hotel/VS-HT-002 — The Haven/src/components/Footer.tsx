import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-haven-charcoal-dark text-haven-stone-light/70 py-16 sm:py-20 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
        {/* Top Footer: Brand, Navigation & Back to Top */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-12 sm:pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="max-w-sm space-y-3">
            <span className="font-serif text-2xl tracking-[0.25em] text-haven-ivory uppercase block font-light">
              The Haven
            </span>
            <p className="text-xs text-haven-stone-light/70 font-sans leading-relaxed">
              An architectural retreat in Rajasthan’s Aravalli Hills. Fourteen keys sculpted from native stone, slaked lime, and reclaimed teak.
            </p>
            <p className="text-[11px] font-mono text-haven-sand">
              {HOTEL_INFO.coordinates} • {HOTEL_INFO.altitude}
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-sans">
            <div className="space-y-2.5">
              <span className="text-[10px] tracking-[0.2em] uppercase text-haven-sand font-mono block">
                Sanctuary
              </span>
              <ul className="space-y-2">
                <li>
                  <a href="#stay" className="hover:text-haven-ivory transition-colors">
                    The Estate
                  </a>
                </li>
                <li>
                  <a href="#rooms" className="hover:text-haven-ivory transition-colors">
                    Fourteen Keys
                  </a>
                </li>
                <li>
                  <a href="#philosophy" className="hover:text-haven-ivory transition-colors">
                    Philosophy
                  </a>
                </li>
                <li>
                  <a href="#architecture" className="hover:text-haven-ivory transition-colors">
                    Materiality
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <span className="text-[10px] tracking-[0.2em] uppercase text-haven-sand font-mono block">
                Experiences
              </span>
              <ul className="space-y-2">
                <li>
                  <a href="#experiences" className="hover:text-haven-ivory transition-colors">
                    Curated Immersions
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-haven-ivory transition-colors">
                    Visual Monograph
                  </a>
                </li>
                <li>
                  <a href="#journal" className="hover:text-haven-ivory transition-colors">
                    Dispatches
                  </a>
                </li>
                <li>
                  <a href="#location" className="hover:text-haven-ivory transition-colors">
                    Arrival & Map
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1 space-y-2.5">
              <span className="text-[10px] tracking-[0.2em] uppercase text-haven-sand font-mono block">
                Concierge
              </span>
              <p className="text-[11px] text-haven-stone-light/70">{HOTEL_INFO.phone}</p>
              <p className="text-[11px] text-haven-stone-light/70 truncate">{HOTEL_INFO.email}</p>
              <p className="text-[11px] text-haven-stone-light/70">Udaipur, Rajasthan, India</p>
            </div>
          </div>

          {/* Back to Top Button */}
          <div className="self-start">
            <button
              type="button"
              onClick={scrollToTop}
              className="p-3 rounded-full border border-white/20 text-haven-ivory hover:border-haven-sand hover:text-haven-sand transition-colors flex items-center justify-center"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Footer: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-haven-stone-light/50 font-sans">
          <p>© {new Date().getFullYear()} The Haven Retreat LLP. All rights reserved. Architectural design by Studio Kanso.</p>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-haven-ivory transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-haven-ivory transition-colors">
              Terms of Solitude
            </a>
            <a href="#" className="hover:text-haven-ivory transition-colors">
              Sustainability Charter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
