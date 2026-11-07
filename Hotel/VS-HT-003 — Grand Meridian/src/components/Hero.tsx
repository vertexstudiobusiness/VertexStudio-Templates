import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Plane, 
  Wifi, 
  Building2, 
  Clock, 
  Play,
  Calendar,
  Award
} from 'lucide-react';
import { QuickBookingBar } from './QuickBookingBar';
import { HOTEL_INFO } from '../data/hotelData';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreRooms: () => void;
  onSearch: (criteria: any) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreRooms, onSearch }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-between pt-6 pb-12 sm:pb-16 overflow-hidden">
      
      {/* Background Image with Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
          alt="Grand Meridian Luxury Hotel & Residences"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-slow"
        />
        {/* Deep Multi-stop Navy Gradients to guarantee high contrast and zero visual clipping */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-900/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-transparent" />
        {/* Subtle geometric grid backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(#c59a45_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      {/* Main Hero Content (Mobile-First 375px–430px up to 1440px) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center pt-8 sm:pt-12">
        
        <div className="max-w-3xl">
          
          {/* Trust & Location Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-900/90 border border-gold-500/40 text-gold-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-md"
          >
            <Award className="w-3.5 h-3.5 text-gold-400" />
            <span className="font-semibold">Aerocity Delhi • 5-Star Deluxe Corporate Hotel</span>
            <span className="w-1 h-1 rounded-full bg-gold-400"></span>
            <span className="text-charcoal-300 hidden xs:inline">12 Mins to Terminal 3</span>
          </motion.div>

          {/* Headline - Exact required headline: "Where Business Meets Exceptional Comfort" */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] sm:leading-[1.12] mb-4 sm:mb-6"
          >
            Where Business Meets <br className="hidden xs:inline" />
            <span className="gold-gradient-text font-serif italic font-normal">
              Exceptional Comfort.
            </span>
          </motion.h1>

          {/* Subtitle with key corporate propositions */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm xs:text-base sm:text-lg text-charcoal-200 max-w-2xl leading-relaxed mb-6 sm:mb-8 font-light"
          >
            Engineered for global business leaders, international delegations, and high-frequency corporate travelers. 
            Experience 10 Gbps fiber connectivity, acoustic soundproof suites, 18 boardroom venues, and personalized 24/7 concierge service in the heart of Delhi-NCR Aerocity.
          </motion.p>

          {/* Primary & Secondary Call to Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            <button
              onClick={onOpenBooking}
              className="touch-target px-7 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 text-navy-950 font-bold text-sm sm:text-base shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 transition-all duration-300 flex items-center justify-center gap-2.5 group"
            >
              <Calendar className="w-4 h-4 text-navy-950" />
              <span>Book Your Stay</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreRooms}
              className="touch-target px-6 py-3.5 sm:py-4 rounded-xl bg-navy-900/80 hover:bg-navy-850 border border-gold-500/40 hover:border-gold-400 text-white font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore Rooms & Suites</span>
            </button>
          </motion.div>

        </div>

        {/* Quick Booking Search Component Docked */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full mt-2"
        >
          <QuickBookingBar onSearch={onSearch} />
        </motion.div>

      </div>

      {/* Highlights Strip (Mobile-optimized horizontal scroll or grid) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8 sm:mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-navy-800/80">
          
          <div className="flex items-center gap-2.5 sm:gap-3 bg-navy-900/60 backdrop-blur-sm p-3 rounded-xl border border-navy-800">
            <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
              <Plane className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">12 Mins to T3</div>
              <div className="text-[10px] sm:text-xs text-charcoal-400">Complimentary Shuttle</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 bg-navy-900/60 backdrop-blur-sm p-3 rounded-xl border border-navy-800">
            <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
              <Wifi className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">10 Gbps Fiber</div>
              <div className="text-[10px] sm:text-xs text-charcoal-400">Wi-Fi 6 & In-Room Cat-6</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 bg-navy-900/60 backdrop-blur-sm p-3 rounded-xl border border-navy-800">
            <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">18 Venues & Boardrooms</div>
              <div className="text-[10px] sm:text-xs text-charcoal-400">4K Telepresence Ready</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 bg-navy-900/60 backdrop-blur-sm p-3 rounded-xl border border-navy-800">
            <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">24/7 Corporate Care</div>
              <div className="text-[10px] sm:text-xs text-charcoal-400">Express Dining & Butler</div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
