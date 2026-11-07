import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  ArrowUp, 
  Send, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-navy-950 text-charcoal-300 border-t border-navy-800 relative z-10 pt-16 pb-8">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-navy-800">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-navy-900 border border-gold-500/40 p-1 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                  <rect x="8" y="8" width="84" height="84" rx="14" stroke="#C59A45" strokeWidth="4" />
                  <path d="M28 72 L28 28 L50 54 L72 28 L72 72" stroke="#E2C47E" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="50" cy="20" r="5" fill="#C59A45" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white block">
                  GRAND MERIDIAN
                </span>
                <span className="text-[10px] tracking-widest uppercase text-gold-400 font-semibold block">
                  Hotel & Residences • Aerocity
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-charcoal-400 font-light leading-relaxed">
              India's premier corporate hospitality destination, purpose-built for Fortune 500 leadership summits, 
              international delegations, and high-frequency business travelers in Delhi-NCR.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-charcoal-400">
              <span className="inline-flex items-center gap-1 bg-navy-900 border border-navy-800 px-2.5 py-1 rounded-md text-[11px] text-gold-400 font-mono">
                <Award className="w-3.5 h-3.5 text-gold-400" />
                5-Star Deluxe Classified
              </span>
              <span className="inline-flex items-center gap-1 bg-navy-900 border border-navy-800 px-2.5 py-1 rounded-md text-[11px] text-gold-400 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                LEED Gold Certified
              </span>
            </div>
          </div>

          {/* Quick Nav (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Accommodations
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#rooms" className="hover:text-gold-400 transition-colors">Executive King Rooms</a></li>
              <li><a href="#rooms" className="hover:text-gold-400 transition-colors">Deluxe Twin Rooms</a></li>
              <li><a href="#rooms" className="hover:text-gold-400 transition-colors">Club Business Suites</a></li>
              <li><a href="#rooms" className="hover:text-gold-400 transition-colors">Meridian Diplomatic Suite</a></li>
              <li><a href="#rooms" className="hover:text-gold-400 transition-colors">The Grand Presidential</a></li>
              <li><a href="#offers" className="hover:text-gold-400 transition-colors">Day-Use Transit Rooms</a></li>
            </ul>
          </div>

          {/* Business & Events (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Enterprise & Dining
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#facilities" className="hover:text-gold-400 transition-colors">10 Gbps Symmetrical Fiber Wi-Fi</a></li>
              <li><a href="#meetings" className="hover:text-gold-400 transition-colors">The Grand Ballroom (650 Pax)</a></li>
              <li><a href="#meetings" className="hover:text-gold-400 transition-colors">Hybrid 4K Boardrooms</a></li>
              <li><a href="#dining" className="hover:text-gold-400 transition-colors">The Meridian Table (24/7 Dining)</a></li>
              <li><a href="#dining" className="hover:text-gold-400 transition-colors">The Silk Route (Cantonese & Dim Sum)</a></li>
              <li><a href="#dining" className="hover:text-gold-400 transition-colors">Latitude 18 Bar & Lounge</a></li>
              <li><a href="#offers" className="hover:text-gold-400 transition-colors">Corporate Advantage Program (CAP)</a></li>
            </ul>
          </div>

          {/* Newsletter & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Corporate Intelligence
            </h4>
            <p className="text-xs text-charcoal-400 font-light">
              Receive quarterly economic briefings, corporate tariff updates, and exclusive airport lounge privileges.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold">
                ✓ Subscribed to Grand Meridian Corporate Briefs
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="corporate.email@company.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-navy-900 border border-navy-700 rounded-xl px-3 py-2 text-xs text-white placeholder-charcoal-500 focus:outline-none focus:border-gold-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-gold-500 hover:bg-gold-400 text-navy-950 rounded-lg text-xs font-bold transition-colors"
                  >
                    Join
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 text-xs text-charcoal-400 space-y-1">
              <div><strong>Hotline:</strong> {HOTEL_INFO.contact.phoneDisplay}</div>
              <div><strong>Concierge:</strong> {HOTEL_INFO.contact.email}</div>
              <div className="font-mono text-[11px] text-charcoal-500">GSTIN: 07AAACG9821A1Z2</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-400">
          <div>
            © {new Date().getFullYear()} {HOTEL_INFO.fullName}. All rights reserved. Realistic Corporate Hospitality Showcase.
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-gold-400 transition-colors">Terms of Stay</a>
            <a href="#home" className="hover:text-gold-400 transition-colors">Corporate Tariff Code</a>
            <button
              onClick={scrollToTop}
              className="touch-target p-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-gold-400 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
