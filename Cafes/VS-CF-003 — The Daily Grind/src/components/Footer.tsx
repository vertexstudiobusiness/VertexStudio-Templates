import React, { useState } from 'react';
import { Coffee, ArrowRight, Heart, MapPin, Phone, Check } from 'lucide-react';
import { CAFE_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && /^\S+@\S+\.\S+$/.test(newsletterEmail)) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-charcoal-950 text-sand-100 pt-16 pb-24 sm:pb-16 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-charcoal-800">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-ambercrema shadow-sm">
                <Coffee className="w-5 h-5 text-ambercrema" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white block">
                  The Daily Grind
                </span>
                <span className="text-[10px] uppercase tracking-widest text-ambercrema font-medium block">
                  Study &amp; Work Café • Bengaluru
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-sand-300 leading-relaxed max-w-sm">
              A productivity sanctuary blending single-origin specialty coffee roasts with sub-38 dB silent study nooks, dual 520 Mbps redundant enterprise fiber, and ergonomic seating.
            </p>

            <div className="pt-2 text-xs text-sand-400 space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-ambercrema" />
                <span>1048, 12th Main Road, Indiranagar, Bengaluru 560038</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-ambercrema" />
                <span>{CAFE_INFO.phone}</span>
              </p>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-bold text-white mb-4 uppercase tracking-wider text-xs">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-sand-300">
              <li>
                <a href="#our-space" className="hover:text-white transition-colors">Acoustic Zones</a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">Wi-Fi &amp; Amenities</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">Study Combos</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Specialty Coffee Menu</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Day Passes &amp; Desks</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Space Photo Tour</a>
              </li>
            </ul>
          </div>

          {/* Operating Hours (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold text-white mb-4 uppercase tracking-wider text-xs">
              Studio Timings
            </h4>
            <ul className="space-y-3 text-xs text-sand-300">
              <li className="flex justify-between border-b border-charcoal-800 pb-2">
                <span>Mon – Fri:</span>
                <span className="font-mono text-white font-bold">{CAFE_INFO.hours.weekdays}</span>
              </li>
              <li className="flex justify-between border-b border-charcoal-800 pb-2">
                <span>Sat – Sun:</span>
                <span className="font-mono text-white font-bold">{CAFE_INFO.hours.weekends}</span>
              </li>
              <li className="pt-1 text-[11px] text-ambercrema-light">
                *Silent Mezzanine whisper protocol active 100% of open hours.
              </li>
            </ul>
          </div>

          {/* Newsletter / Cupping Club (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white mb-1 uppercase tracking-wider text-xs">
              The Pour-Over Dispatch
            </h4>
            <p className="text-xs text-sand-300">
              Subscribe for weekly single-origin roaster notes, deep-work playlists, and founder fireside invites.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-900 border border-charcoal-700 text-xs text-sand-50 placeholder:text-sand-400 focus:outline-none focus:ring-1 focus:ring-ambercrema"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 rounded-lg bg-ambercrema hover:bg-ambercrema-dark text-white text-xs font-semibold flex items-center transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Welcome to our community brew list!
                </p>
              )}
            </form>

            <div className="pt-2 flex items-center gap-3 text-sand-400">
              <span className="text-[11px]">Follow us:</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-charcoal-900 flex items-center justify-center hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-charcoal-900 flex items-center justify-center hover:text-white transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-charcoal-900 flex items-center justify-center hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-400 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} The Daily Grind Specialty Roastery &amp; Work Café. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Handcrafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for thinkers, builders &amp; creators in Bengaluru.
          </p>
        </div>

      </div>
    </footer>
  );
};
