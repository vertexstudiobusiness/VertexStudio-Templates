import React from 'react';
import { useShop } from '../context/ShopContext';
import { 
  X, 
  ArrowRight, 
  Search, 
  MapPin, 
  MessageSquare, 
  Flame, 
  ShieldCheck,
  Ruler,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileMenu: React.FC = () => {
  const { 
    isMobileMenuOpen, 
    setIsMobileMenuOpen, 
    navigateTo, 
    searchQuery, 
    setSearchQuery,
    setIsSizeGuideOpen 
  } = useShop();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigateTo('shop');
      setIsMobileMenuOpen(false);
    }
  };

  const quickTags = ['450GSM', 'CARGOS', 'OVERSIZED', 'DROP 004', 'BOMBER'];

  const navItems = [
    { label: 'DROP 004 // SECTOR ZERO', cat: 'All', badge: 'NEW RELEASE', highlight: true, count: '14 PIECES' },
    { label: 'OVERSIZED T-SHIRTS', cat: 'T-Shirts', sub: '300-320 GSM Combed Cotton', count: '5 STYLES' },
    { label: 'HEAVYWEIGHT HOODIES', cat: 'Hoodies', sub: '450 GSM French Terry Fleece', count: '4 STYLES' },
    { label: 'CARGOS & DENIM', cat: 'Bottoms', sub: 'Ripstop Cordura & Fidlock', count: '4 STYLES' },
    { label: 'UTILITY OUTERWEAR', cat: 'Outerwear', sub: 'Japanese Flight Nylon', count: '2 STYLES' },
    { label: 'STREET ACCESSORIES', cat: 'Accessories', sub: 'Chest Rigs & Industrial Belts', count: '3 STYLES' },
  ];

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Drawer Body (90vw, max-w-sm) */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed inset-y-0 left-0 w-[90vw] max-w-sm bg-neutral-950 border-r border-brand-border flex flex-col justify-between overflow-y-auto z-10"
          >
            {/* Header */}
            <div>
              <div className="p-4 sm:p-5 border-b border-brand-border flex items-center justify-between bg-brand-surface">
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-2xl tracking-tighter text-brand-offwhite">
                    OFFGRID<span className="text-brand-orange">®</span>
                  </span>
                  <span className="text-[9px] font-mono text-brand-orange border border-brand-orange/40 px-1.5 py-0.5">
                    MENU
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-1 text-brand-concrete hover:text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6 text-brand-orange" />
                </button>
              </div>

              {/* Mobile Quick Search with Instant Filter Chips */}
              <div className="p-4 border-b border-brand-border bg-neutral-900/60 space-y-2.5">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search drops, 450gsm, cargos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-brand-black border border-brand-border text-xs text-brand-offwhite pl-9 pr-4 py-3 font-mono outline-none focus:border-brand-orange"
                  />
                  <Search className="w-4 h-4 text-brand-concrete absolute left-3 top-3.5" />
                </form>

                {/* Popular Tags */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                  <span className="text-[9px] font-mono text-brand-concrete shrink-0">TAGS:</span>
                  {quickTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => {
                        setSearchQuery(tag);
                        navigateTo('shop');
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-[9px] font-mono px-2 py-0.5 bg-neutral-800 text-brand-concrete hover:text-brand-orange hover:bg-neutral-700 border border-brand-border shrink-0"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Links (min 48px touch targets) */}
              <div className="p-3 space-y-1">
                {navItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      navigateTo('shop', undefined, item.cat);
                    }}
                    className={`w-full text-left p-3.5 flex items-center justify-between border-b border-brand-border/40 min-h-[52px] transition-all active:scale-[0.99] ${
                      item.highlight 
                        ? 'bg-brand-surface text-brand-orange border-l-4 border-l-brand-orange' 
                        : 'text-brand-offwhite hover:text-brand-orange hover:bg-neutral-900'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-sm sm:text-base tracking-wide">
                          {item.label}
                        </span>
                        {item.badge && (
                          <span className="bg-brand-orange text-black font-mono font-black text-[9px] px-1.5 py-0.5">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.sub && (
                        <p className="text-[10px] font-mono text-brand-concrete mt-0.5">
                          {item.sub}
                        </p>
                      )}
                    </div>
                    <span className="font-mono text-[10px] text-brand-concrete shrink-0">
                      {item.count}
                    </span>
                  </button>
                ))}

                {/* Lookbook link */}
                <button
                  onClick={() => navigateTo('lookbook')}
                  className="w-full text-left p-3.5 flex items-center justify-between text-brand-offwhite hover:text-brand-orange border-b border-brand-border/40 min-h-[48px]"
                >
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-brand-orange" />
                    <span className="font-display font-bold text-sm tracking-wide">
                      CAMPAIGN LOOKBOOK (35MM)
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-brand-concrete" />
                </button>

                {/* Size guide link */}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsSizeGuideOpen(true);
                  }}
                  className="w-full text-left p-3.5 flex items-center justify-between text-brand-offwhite hover:text-brand-orange border-b border-brand-border/40 min-h-[48px]"
                >
                  <div className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-brand-orange" />
                    <span className="font-display font-bold text-sm tracking-wide">
                      STREETWEAR SIZE CALCULATOR
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-brand-concrete" />
                </button>

                {/* Manifesto link */}
                <button
                  onClick={() => navigateTo('manifesto')}
                  className="w-full text-left p-3.5 flex items-center justify-between text-brand-offwhite hover:text-brand-orange min-h-[48px]"
                >
                  <span className="font-display font-bold text-sm tracking-wide">
                    BRAND CULTURE MANIFESTO
                  </span>
                  <ArrowRight className="w-4 h-4 text-brand-concrete" />
                </button>
              </div>
            </div>

            {/* Mobile Footer & WhatsApp VIP Support */}
            <div className="p-4 border-t border-brand-border bg-brand-surface space-y-3 pb-8 safe-area-pb">
              <a
                href="https://wa.me/919820063347?text=Hi%20OFFGRID!%20Need%20assistance%20with%20sizing%20and%20drop%20selection."
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/60 text-[#25D366] font-mono text-xs font-bold py-3.5 transition-colors min-h-[48px]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP VIP CONCIERGE</span>
              </a>

              <div className="flex items-center justify-between text-[10px] font-mono text-brand-concrete pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange" /> BANDRA & BANGALORE
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-brand-orange" /> INR PRICING (₹)
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
