import React from 'react';
import { useShop } from '../context/ShopContext';
import { 
  MapPin, 
  MessageSquare, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  CreditCard,
  ArrowUp
} from 'lucide-react';
import { InstagramIcon, TwitterIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  const { navigateTo, setIsSizeGuideOpen } = useShop();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-brand-offwhite border-t border-brand-border relative overflow-hidden">
      {/* Top Value Badges Strip */}
      <div className="border-b border-brand-border bg-brand-surface py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-neutral-900 border border-brand-border flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5 text-brand-orange" />
            </div>
            <div>
              <span className="font-bold text-white block">FREE EXPRESS SHIPPING</span>
              <span className="text-brand-concrete text-[11px]">On all orders above ₹1,999</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-neutral-900 border border-brand-border flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5 text-brand-orange" />
            </div>
            <div>
              <span className="font-bold text-white block">7-DAY HASSLE-FREE EXCHANGE</span>
              <span className="text-brand-concrete text-[11px]">Doorstep reverse pickup</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-neutral-900 border border-brand-border flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5 text-brand-orange" />
            </div>
            <div>
              <span className="font-bold text-white block">CASH ON DELIVERY & UPI</span>
              <span className="text-brand-concrete text-[11px]">Instant UPI QR & cards</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-neutral-900 border border-brand-border flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-brand-orange" />
            </div>
            <div>
              <span className="font-bold text-white block">300-450 GSM ASSURANCE</span>
              <span className="text-brand-concrete text-[11px]">Zero synthetic shrink</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 pb-28 lg:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-3xl tracking-tighter text-brand-offwhite">
                OFFGRID<span className="text-brand-orange">®</span>
              </span>
              <span className="text-[10px] font-mono border border-brand-orange text-brand-orange px-1.5 py-0.5">
                LABS
              </span>
            </div>

            <p className="font-mono text-xs text-brand-concrete max-w-sm leading-relaxed">
              Autonomous Indian streetwear label engineered for outliers. Heavyweight French Terry, modular cordura ripstop, and strict limited-edition drops. Not made to fit in.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/919820063347?text=Hello%20OFFGRID!%20I%20have%20a%20question%20about%20an%20order."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] font-mono text-xs font-bold px-4 py-2.5 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP VIP CONCIERGE (+91 98200 OFFGRID)</span>
              </a>
            </div>
          </div>

          {/* Navigation Col 1: DROPS */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-display font-bold text-sm text-brand-orange uppercase tracking-wider">
              ARCHIVE & DROPS
            </h4>
            <ul className="space-y-2 text-brand-concrete">
              <li>
                <button
                  onClick={() => navigateTo('shop', undefined, 'All')}
                  className="hover:text-brand-offwhite transition-colors"
                >
                  Drop 004 : Sector Zero
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('shop', undefined, 'T-Shirts')}
                  className="hover:text-brand-offwhite transition-colors"
                >
                  300 GSM Heavy Tees
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('shop', undefined, 'Hoodies')}
                  className="hover:text-brand-offwhite transition-colors"
                >
                  450 GSM French Terry Hoodies
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('shop', undefined, 'Bottoms')}
                  className="hover:text-brand-offwhite transition-colors"
                >
                  Tactical Modular Cargos
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('shop', undefined, 'Outerwear')}
                  className="hover:text-brand-offwhite transition-colors"
                >
                  Japanese Flight Satin Bombers
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('lookbook')}
                  className="hover:text-brand-offwhite transition-colors text-brand-orange"
                >
                  Campaign Lookbook
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Col 2: CUSTOMER CARE */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-display font-bold text-sm text-brand-orange uppercase tracking-wider">
              CLIENT SERVICES
            </h4>
            <ul className="space-y-2 text-brand-concrete">
              <li>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="hover:text-brand-offwhite transition-colors"
                >
                  Streetwear Size Guide & Fit
                </button>
              </li>
              <li>
                <a href="#shipping" className="hover:text-brand-offwhite transition-colors">
                  Express Shipping Timeline
                </a>
              </li>
              <li>
                <a href="#returns" className="hover:text-brand-offwhite transition-colors">
                  7-Day Exchange Policy
                </a>
              </li>
              <li>
                <a href="#care" className="hover:text-brand-offwhite transition-colors">
                  Garment Wash & Care Specs
                </a>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('manifesto')}
                  className="hover:text-brand-offwhite transition-colors"
                >
                  Brand Manifesto
                </button>
              </li>
              <li>
                <span className="text-white block pt-1">SUPPORT: support@offgrid.in</span>
              </li>
            </ul>
          </div>

          {/* Navigation Col 3: FLAGSHIPS */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-display font-bold text-sm text-brand-orange uppercase tracking-wider">
              PHYSICAL HUBS
            </h4>
            <div className="space-y-3 text-brand-concrete">
              <div>
                <strong className="text-white block">BANDRA FLAGSHIP (MH-02)</strong>
                <p className="text-[11px] mt-0.5">
                  Shop 4, Pali Hill Road, Bandra West, Mumbai 400050
                </p>
                <span className="text-[10px] text-brand-orange">Open Daily: 11AM – 9PM</span>
              </div>

              <div>
                <strong className="text-white block">INDIRANAGAR STUDIO (KA-01)</strong>
                <p className="text-[11px] mt-0.5">
                  12th Main Rd, HAL 2nd Stage, Indiranagar, Bengaluru 560038
                </p>
                <span className="text-[10px] text-brand-orange">Open Daily: 11AM – 9PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Huge Brutalist OFFGRID Wordmark */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-brand-border select-none">
          <div className="text-center">
            <h2 className="font-display font-black text-6xl sm:text-9xl md:text-[14vw] tracking-tighter text-neutral-900 hover:text-neutral-800 transition-colors uppercase leading-none">
              OFFGRID<span className="text-brand-orange">®</span>
            </h2>
          </div>
        </div>

        {/* Bottom Legal & Payment Badges */}
        <div className="mt-8 pt-6 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-brand-concrete">
          <div>
            © {new Date().getFullYear()} OFFGRID APPAREL CO. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-3 text-brand-concrete">
            <span>UPI</span>
            <span>•</span>
            <span>RUPAY</span>
            <span>•</span>
            <span>VISA</span>
            <span>•</span>
            <span>MASTERCARD</span>
            <span>•</span>
            <span>CASH ON DELIVERY</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-brand-orange hover:text-white transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
