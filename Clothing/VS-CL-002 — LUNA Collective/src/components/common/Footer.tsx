import React, { useState } from 'react';
import { 
  MessageCircle, 
  Sparkles, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  HeartHandshake 
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { CategoryId } from '../../types';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const { setActiveCategory, setActiveView, setIsSizeGuideOpen } = useShop();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubscribed(true);
  };

  const handleNav = (category: CategoryId, view: 'home' | 'catalog' | 'festive' | 'lookbook' = 'catalog') => {
    setActiveCategory(category);
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#261B14] text-[#FAF8F5] pt-14 pb-12 border-t border-[#3D2B1F]">
      {/* Guarantees Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-[#3D2B1F]/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center p-3">
            <div className="w-10 h-10 rounded-full bg-[#3D2B1F] flex items-center justify-center text-[#D4A59A] mb-3">
              <Truck className="w-5 h-5" />
            </div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#FAF8F5]">Complimentary Shipping</h4>
            <p className="text-[11px] text-[#D8CFBE]/80 mt-1">On all domestic orders above ₹3,999</p>
          </div>

          <div className="flex flex-col items-center p-3">
            <div className="w-10 h-10 rounded-full bg-[#3D2B1F] flex items-center justify-center text-[#D4A59A] mb-3">
              <RotateCcw className="w-5 h-5" />
            </div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#FAF8F5]">7-Day Easy Exchanges</h4>
            <p className="text-[11px] text-[#D8CFBE]/80 mt-1">Complimentary doorstep reverse pickup</p>
          </div>

          <div className="flex flex-col items-center p-3">
            <div className="w-10 h-10 rounded-full bg-[#3D2B1F] flex items-center justify-center text-[#D4A59A] mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#FAF8F5]">Authentic Natural Fibres</h4>
            <p className="text-[11px] text-[#D8CFBE]/80 mt-1">Pure European Linen & Chanderi Silk</p>
          </div>

          <div className="flex flex-col items-center p-3">
            <div className="w-10 h-10 rounded-full bg-[#3D2B1F] flex items-center justify-center text-[#D4A59A] mb-3">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#FAF8F5]">Artisanal Heritage</h4>
            <p className="text-[11px] text-[#D8CFBE]/80 mt-1">Consciously made in small ethical batches</p>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Intro & Newsletter */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-flex flex-col">
              <span className="font-serif text-3xl font-normal tracking-[0.2em] text-[#FAF8F5] uppercase">
                LUNA
              </span>
              <span className="text-[9px] tracking-[0.4em] text-[#D4A59A] uppercase -mt-1 font-sans font-medium">
                COLLECTIVE
              </span>
            </div>

            <p className="text-xs text-[#D8CFBE]/85 leading-relaxed max-w-sm font-light">
              Made to feel beautiful. We sculpt refined, poetic clothing for women who seek understated luxury, exceptional natural textiles, and conscious Indian heritage.
            </p>

            {/* Newsletter form */}
            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#FAF8F5] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4A59A]" /> Join The Patron Circle
              </h4>
              <p className="text-[11px] text-[#D8CFBE]/70 mb-3">
                Receive private collection previews and 10% off your inaugural order.
              </p>

              {isSubscribed ? (
                <div className="bg-[#3D2B1F] border border-[#D4A59A]/60 rounded-xl p-3 text-xs text-[#FAF8F5] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D4A59A]" />
                  <span>Welcome to the circle! Use code <strong className="text-[#D4A59A] tracking-wider font-mono">LUNA10</strong> at checkout.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="flex-1 bg-[#1A120D] border border-[#3D2B1F] rounded-xl px-3.5 py-2 text-xs text-[#FAF8F5] placeholder-[#D8CFBE]/40 focus:outline-none focus:border-[#D4A59A]"
                  />
                  <button
                    type="submit"
                    className="bg-[#D4A59A] hover:bg-[#B77B6E] text-[#261B14] px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Join</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#3D2B1F] flex items-center justify-center text-[#D8CFBE] hover:text-[#FAF8F5] hover:bg-[#5A4232] transition-colors"
                aria-label="Follow LUNA Collective on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#3D2B1F] flex items-center justify-center text-[#D8CFBE] hover:text-[#FAF8F5] hover:bg-[#5A4232] transition-colors"
                aria-label="Follow LUNA Collective on Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/+919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#3D2B1F] flex items-center justify-center text-[#25D366] hover:bg-[#5A4232] transition-colors"
                aria-label="Chat with Stylist on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Collections */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4A59A] mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D8CFBE]/80">
              <li>
                <button onClick={() => handleNav('all')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  New In Autumn '26
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('dresses')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  Linen & Satin Dresses
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('ethnic-wear', 'festive')} className="hover:text-[#FAF8F5] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <span>Noor Festive Edit</span>
                  <span className="text-[9px] bg-[#3D2B1F] text-[#D4A59A] px-1.5 py-0.5 rounded font-mono">NEW</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('co-ords')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  Co-ord Sets & Kimonos
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tops')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  Tops & Blouses
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('bottoms')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  Tailored Trousers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('accessories')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  Handcrafted Baroque Pearls
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('sale')} className="hover:text-[#D4A59A] text-[#D4A59A] transition-colors cursor-pointer">
                  End of Season Archive
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Client Care */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4A59A] mb-4">
              Client Care
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D8CFBE]/80">
              <li>
                <button onClick={() => setIsSizeGuideOpen(true)} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  Size & Measurement Guide
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/+919876543210?text=Hi%20LUNA%20Collective%2C%20I%20have%20an%20order%20enquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FAF8F5] transition-colors flex items-center gap-1"
                >
                  <span>WhatsApp Styling Help</span>
                  <span className="text-[10px] text-[#25D366]">●</span>
                </a>
              </li>
              <li>
                <span className="hover:text-[#FAF8F5] cursor-pointer transition-colors">
                  Shipping & Delivery Timeline
                </span>
              </li>
              <li>
                <span className="hover:text-[#FAF8F5] cursor-pointer transition-colors">
                  7-Day Returns & Exchanges
                </span>
              </li>
              <li>
                <span className="hover:text-[#FAF8F5] cursor-pointer transition-colors">
                  Track Your Consignment
                </span>
              </li>
              <li>
                <span className="hover:text-[#FAF8F5] cursor-pointer transition-colors">
                  Garment & Silk Care Guide
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Atelier & Locations */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4A59A] mb-4">
              Our Boutiques
            </h4>
            <div className="space-y-3 text-xs text-[#D8CFBE]/80">
              <div>
                <p className="font-semibold text-[#FAF8F5]">Mumbai Atelier</p>
                <p className="text-[11px] text-[#D8CFBE]/70">Kala Ghoda, Fort, Mumbai 400001</p>
                <p className="text-[11px] text-[#D8CFBE]/50">Mon – Sun: 11 AM – 8 PM</p>
              </div>

              <div>
                <p className="font-semibold text-[#FAF8F5]">New Delhi Salon</p>
                <p className="text-[11px] text-[#D8CFBE]/70">The Collonnade, Mehrauli 110030</p>
                <p className="text-[11px] text-[#D8CFBE]/50">Tue – Sun: 11 AM – 8 PM</p>
              </div>

              <div className="pt-2 border-t border-[#3D2B1F]">
                <p className="text-[11px] text-[#D8CFBE]/60">Client Support Helpline:</p>
                <p className="font-mono text-xs text-[#FAF8F5]">+91 (022) 4892-5600</p>
                <p className="text-[11px] text-[#D8CFBE]/70">concierge@lunacollective.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar & Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-[#3D2B1F]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8CFBE]/60">
        <p>© {new Date().getFullYear()} LUNA Collective Private Limited. All rights reserved.</p>
        
        {/* Payment badges */}
        <div className="flex items-center gap-3 text-[11px]">
          <span className="bg-[#1A120D] border border-[#3D2B1F] px-2 py-0.5 rounded text-[#D8CFBE]">UPI</span>
          <span className="bg-[#1A120D] border border-[#3D2B1F] px-2 py-0.5 rounded text-[#D8CFBE]">Visa</span>
          <span className="bg-[#1A120D] border border-[#3D2B1F] px-2 py-0.5 rounded text-[#D8CFBE]">Mastercard</span>
          <span className="bg-[#1A120D] border border-[#3D2B1F] px-2 py-0.5 rounded text-[#D8CFBE]">RuPay</span>
          <span className="bg-[#1A120D] border border-[#3D2B1F] px-2 py-0.5 rounded text-[#D8CFBE]">Netbanking</span>
          <span className="bg-[#1A120D] border border-[#3D2B1F] px-2 py-0.5 rounded text-[#D8CFBE]">COD</span>
        </div>
      </div>
    </footer>
  );
};
