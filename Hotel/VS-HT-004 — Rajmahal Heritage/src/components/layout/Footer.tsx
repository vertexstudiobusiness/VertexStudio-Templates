import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { HOTEL_CONFIG } from '../../data/hotelConfig';
import { CrestLogo } from '../common/CrestLogo';
import { RoyalDivider } from '../common/RoyalOrnament';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUp,
  Instagram,
  Facebook,
  Youtube,
  Send,
  CheckCircle,
  ShieldAlert
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { openDisclaimer, sendWhatsAppEnquiry } = useHotel();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-walnut-950 via-walnut-950 to-black text-ivory-100 border-t border-gold-400/30 relative overflow-hidden">
      {/* Decorative filigree top trim */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top Brand & Newsletter Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-gold-400/20">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <CrestLogo variant="gold" size="lg" />

            <p className="font-serif text-sm text-sandstone-300 leading-relaxed max-w-sm pt-2">
              A timeless sanctuary of Rajput royal hospitality, restored 18th-century sandstone courtyards, and starlit imperial dining in the majestic foothills of Rajasthan.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={HOTEL_CONFIG.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-walnut-900 border border-gold-400/40 text-gold-300 flex items-center justify-center hover:bg-gold-500 hover:text-walnut-950 transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={HOTEL_CONFIG.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-walnut-900 border border-gold-400/40 text-gold-300 flex items-center justify-center hover:bg-gold-500 hover:text-walnut-950 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={HOTEL_CONFIG.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-walnut-900 border border-gold-400/40 text-gold-300 flex items-center justify-center hover:bg-gold-500 hover:text-walnut-950 transition"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <button
                onClick={() => sendWhatsAppEnquiry("Namaste Concierge, I am reaching out through your official website footer.")}
                className="w-9 h-9 rounded-full bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 flex items-center justify-center hover:bg-emerald-800 transition"
                aria-label="WhatsApp Concierge"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-gold-400">
              The Royal Estate
            </h4>
            <ul className="space-y-2 text-xs font-serif text-sandstone-300">
              <li>
                <a href="#palace-heritage" className="hover:text-gold-200 transition">Palace History & Lore</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-gold-200 transition">Suites & Royal Chambers</a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-gold-200 transition">Curated Experiences & Spa</a>
              </li>
              <li>
                <a href="#dining" className="hover:text-gold-200 transition">Shahi Dastarkhwan Dining</a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-gold-200 transition">Courtyards & Rajput Arches</a>
              </li>
              <li>
                <a href="#celebrations" className="hover:text-gold-200 transition">Destination Royal Weddings</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-gold-200 transition">Seasonal Stay Packages</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold-200 transition">Palace Photography Gallery</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / The Imperial Chronicles (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-gold-400">
              The Imperial Chronicles
            </h4>
            <p className="text-xs text-sandstone-300 font-sans leading-relaxed">
              Subscribe for private seasonal invitations, chef's Mewari recipes, and private concert announcements.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-900/50 border border-emerald-500/40 rounded-lg text-xs text-emerald-200 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>You have been inscribed into the Imperial Chronicles.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your royal address"
                    className="flex-1 bg-walnut-900/90 border border-gold-400/40 rounded-l-lg px-3 py-2.5 text-xs text-ivory-100 placeholder:text-sandstone-500 focus:outline-none focus:border-gold-400"
                  />
                  <button
                    type="submit"
                    className="bg-gold-500 hover:bg-gold-400 text-walnut-950 px-4 py-2.5 rounded-r-lg text-xs font-serif font-bold uppercase tracking-wider transition flex items-center justify-center"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-sandstone-400 font-serif block">
                  Strictly confidential. No unsolicited mailings.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Contact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 border-b border-gold-400/20 text-xs">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-serif font-bold text-ivory-100">{HOTEL_CONFIG.location.address}</p>
              <p className="text-sandstone-400 font-sans">{HOTEL_CONFIG.location.city}, {HOTEL_CONFIG.location.state}, {HOTEL_CONFIG.location.country}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-serif font-bold text-ivory-100">{HOTEL_CONFIG.contact.phoneDisplay}</p>
              <p className="text-sandstone-400 font-sans">Toll-Free: {HOTEL_CONFIG.contact.tollFree} • 24/7 Desk</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-serif font-bold text-ivory-100">{HOTEL_CONFIG.contact.reservationsEmail}</p>
              <p className="text-sandstone-400 font-sans">Weddings: {HOTEL_CONFIG.contact.weddingsEmail}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Demo Notice & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-sandstone-400 font-sans">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} Rajmahal Heritage. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <button
              onClick={openDisclaimer}
              className="text-gold-400 hover:text-gold-300 underline font-serif flex items-center gap-1"
            >
              <ShieldAlert className="w-3 h-3" />
              Demo Showcase Notice
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gold-300 hover:text-gold-200 transition font-serif uppercase tracking-wider text-[11px]"
          >
            <span>Ascend to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

