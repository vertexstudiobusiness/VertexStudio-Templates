import React, { useState } from 'react';
import { RESORT_CONFIG } from '../../data/resortData';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  Send,
  CheckCircle2,
} from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.includes('@')) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#05130f] text-[#fcfbf9] pt-20 pb-24 md:pb-16 border-t border-[#c5a880]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section: The Aurelia Chronicle */}
        <div className="bg-[#0b251f] rounded-3xl p-8 sm:p-12 border border-[#c5a880]/30 shadow-2xl mb-16 relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#dfbe85]">
              Privileged Dispatches
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#fcfbf9] font-light">
              The Aurelia Chronicle
            </h3>
            <p className="text-xs sm:text-sm text-[#dacdbd] leading-relaxed">
              Receive private invitations to seasonal culinary residencies, bespoke Ayurvedic retreats, and exclusive villa privileges before public announcement.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/80 border border-emerald-500/40 rounded-xl text-xs text-emerald-200 flex items-center justify-center space-x-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Thank you. You have been placed on our privileged dispatches list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3 pt-2 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your private email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-full bg-[#061410] border border-[#c5a880]/40 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-[#dfbe85]"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-full bg-gradient-to-r from-[#c5a880] to-[#dfbe85] text-[#05130f] font-sans text-xs tracking-wider uppercase font-bold shrink-0 shadow-lg cursor-pointer flex items-center justify-center space-x-1.5 active:scale-95"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links & Contacts Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#dfbe85]" />
              <span className="font-serif tracking-[0.25em] text-2xl font-light text-[#fcfbf9] uppercase">
                Aurelia
              </span>
            </div>
            <p className="text-xs text-[#dacdbd] max-w-sm leading-relaxed">
              An ultra-luxury coastal sanctuary on the pristine Cabo de Rama cliffs of South Goa. 85 acres of untamed nature, private pool villas, and tailored serenity.
            </p>
            <div className="flex space-x-3 text-[#c5a880] pt-2">
              <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-[#dfbe85] transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-[#dfbe85] transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-[#dfbe85] transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg text-[#dfbe85] font-normal tracking-wide">Concierge & Inquiries</h4>
            <ul className="space-y-2.5 text-xs text-[#dacdbd]">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>{RESORT_CONFIG.location}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
                <a href={`tel:${RESORT_CONFIG.reservationsPhone}`} className="hover:text-white transition-colors">
                  {RESORT_CONFIG.reservationsPhone}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#c5a880] shrink-0" />
                <a href={`mailto:${RESORT_CONFIG.reservationsEmail}`} className="hover:text-white transition-colors">
                  {RESORT_CONFIG.reservationsEmail}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>24/7 Dedicated Butler Desk</span>
              </li>
            </ul>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg text-[#dfbe85] font-normal tracking-wide">Sanctuary Stays</h4>
            <ul className="space-y-2 text-xs text-[#dacdbd]">
              <li><a href="#accommodations" className="hover:text-[#dfbe85] transition-colors">Heritage Garden Villas</a></li>
              <li><a href="#accommodations" className="hover:text-[#dfbe85] transition-colors">Oceanfront Cliffside Suites</a></li>
              <li><a href="#accommodations" className="hover:text-[#dfbe85] transition-colors">Azure Private Pool Villas</a></li>
              <li><a href="#accommodations" className="hover:text-[#dfbe85] transition-colors">Presidential Peninsula Residence</a></li>
              <li><a href="#offers" className="hover:text-[#dfbe85] transition-colors">Exclusive Packages</a></li>
            </ul>
          </div>

          {/* Experiences Nav Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg text-[#dfbe85] font-normal tracking-wide">Dining & Wellness</h4>
            <ul className="space-y-2 text-xs text-[#dacdbd]">
              <li><a href="#experiences" className="hover:text-[#dfbe85] transition-colors">Soma Ayurvedic Spa</a></li>
              <li><a href="#dining" className="hover:text-[#dfbe85] transition-colors">Saffron & Tide Seafood</a></li>
              <li><a href="#dining" className="hover:text-[#dfbe85] transition-colors">The Banyan Verandah</a></li>
              <li><a href="#dining" className="hover:text-[#dfbe85] transition-colors">Aura Sunset Lounge</a></li>
              <li><a href="#experiences" className="hover:text-[#dfbe85] transition-colors">Sunset Catamaran Charter</a></li>
            </ul>
          </div>
        </div>

        {/* Demo Disclaimer & Copyright Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <div className="text-center md:text-left space-y-1">
            <p>© {CURRENT_YEAR} {RESORT_CONFIG.legalName}. All rights reserved.</p>
            <p className="text-[11px] text-stone-500">
              *Demo Showcase Website: Created for high-end hospitality presentation. Booking forms simulate real-world reservation flows.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center space-x-1.5 px-4 py-2 rounded-full border border-white/10 hover:border-[#dfbe85] text-stone-300 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#dfbe85]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
