import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Flame, ChevronDown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <section className="relative w-full h-[94svh] sm:h-screen flex flex-col justify-between bg-brand-black overflow-hidden border-b border-brand-border">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      
      {/* Streetwear Campaign Background Image - Mobile & Desktop Tuned */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1600&auto=format&fit=crop"
          alt="OFFGRID Streetwear Campaign Drop 004"
          className="w-full h-full object-cover object-[55%_18%] sm:object-center filter brightness-[0.4] contrast-[1.2]"
          loading="eager"
        />
        {/* Scrims tailored for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/75 to-brand-black/20 sm:via-brand-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/40 to-transparent hidden sm:block" />
      </div>

      {/* Top Mobile Stamped Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 pt-3 sm:pt-6 flex items-center justify-between">
        <div className="flex items-center gap-2 bg-neutral-950/85 backdrop-blur-md border border-brand-border px-2.5 py-1 font-mono text-[10px] sm:text-xs">
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping shrink-0" />
          <span className="text-brand-orange font-bold uppercase tracking-wider">DROP 004 LIVE</span>
          <span className="text-neutral-500">//</span>
          <span className="text-brand-offwhite truncate">SECTOR ZERO</span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-brand-concrete">
          <span className="hidden xs:inline">MUMBAI HQ</span>
          <div className="h-2.5 w-10 barcode-strip opacity-70" />
        </div>
      </div>

      {/* Hero Headline & Primary Mobile Actions (Positioned for immediate mobile visibility) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 pb-6 sm:pb-14 flex flex-col justify-end">
        <div className="max-w-3xl space-y-3 sm:space-y-5">
          {/* Tagline Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="bg-brand-orange text-black font-mono font-black text-[10px] sm:text-xs px-2.5 py-1 uppercase tracking-wider">
              AUTONOMOUS APPAREL
            </span>
            <span className="text-brand-concrete font-mono text-[10px] sm:text-xs tracking-wider uppercase">
              // 150 PCS WORLDWIDE
            </span>
          </motion.div>

          {/* Bold Streetwear Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-[40px] xs:text-[46px] sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-brand-offwhite leading-[0.92] uppercase"
          >
            NOT MADE <br />
            <span className="text-stroke hover:text-brand-offwhite transition-colors duration-300">
              TO FIT
            </span>{' '}
            <span className="text-brand-orange">IN.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-base md:text-lg text-brand-concrete max-w-xl font-mono leading-relaxed line-clamp-3 sm:line-clamp-none"
          >
            Engineered for outliers. Heavyweight 300–450 GSM French Terry, architectural boxy drape, and water-repellent Cordura ripstop. No mass factory re-orders.
          </motion.p>

          {/* Mobile-First Action Buttons (Finger-friendly min-h-[48px]) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 sm:flex sm:items-center sm:gap-4 pt-2"
          >
            <button
              onClick={() => navigateTo('shop')}
              className="w-full sm:w-auto bg-brand-orange hover:bg-white text-black font-mono font-black text-xs sm:text-sm tracking-wider uppercase px-6 py-4 flex items-center justify-center gap-2.5 transition-all duration-200 shadow-glow-orange min-h-[48px] active:scale-[0.98]"
            >
              <span>SHOP DROP 004</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigateTo('lookbook')}
              className="w-full sm:w-auto bg-neutral-950/85 hover:bg-neutral-900 border border-brand-border hover:border-brand-orange text-brand-offwhite font-mono font-bold text-xs sm:text-sm tracking-wider uppercase px-6 py-4 flex items-center justify-center gap-2 backdrop-blur-sm transition-all duration-200 min-h-[48px] active:scale-[0.98]"
            >
              <Flame className="w-4 h-4 text-brand-orange" />
              <span>VIEW LOOKBOOK</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Specs Strip (Responsive on mobile) */}
      <div className="relative z-10 w-full border-t border-brand-border bg-neutral-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 font-mono text-[10px] sm:text-xs">
          <div className="flex items-center gap-4 text-brand-concrete overflow-x-auto no-scrollbar py-0.5">
            <span className="whitespace-nowrap">
              <strong className="text-brand-offwhite">300–450 GSM</strong> HEAVYWEIGHT
            </span>
            <span className="text-neutral-600">//</span>
            <span className="whitespace-nowrap">
              <strong className="text-brand-orange">LIMITED RUNS</strong>
            </span>
            <span className="hidden sm:inline text-neutral-600">//</span>
            <span className="hidden sm:inline whitespace-nowrap">
              <strong className="text-brand-offwhite">MUMBAI • TOKYO</strong>
            </span>
          </div>

          <div className="flex items-center gap-1 text-brand-concrete shrink-0">
            <span className="hidden xs:inline text-[9px] uppercase tracking-wider">SWIPE</span>
            <ChevronDown className="w-3.5 h-3.5 text-brand-orange animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
