import React from 'react';
import { ArrowRight, Coffee, Wifi, Zap, VolumeX, Clock } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreSpace: () => void;
  onViewMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreSpace, onViewMenu }) => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-sand-50">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sand-200/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-olive-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left / Main Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand-200/90 border border-sand-300 text-charcoal-800 text-xs font-semibold mb-5 sm:mb-6 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-ambercrema" />
              <span>Indiranagar's Premier Study & Work Café</span>
              <span className="text-charcoal-400">•</span>
              <span className="text-charcoal-600 font-normal">HAL 2nd Stage</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal-900 leading-[1.12] sm:leading-[1.15] mb-4 sm:mb-6">
              Your Space to{' '}
              <span className="font-serif italic font-normal text-ambercrema-dark underline decoration-sand-300 decoration-wavy decoration-1 underline-offset-4">
                Think
              </span>
              ,{' '}
              <span className="font-serif italic font-normal text-charcoal-800">
                Create
              </span>{' '}
              &amp;{' '}
              <span className="font-serif italic font-normal text-olive-800">
                Connect
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mb-6 sm:mb-8 text-balance font-normal">
              Where single-origin Chikmagalur roasts meet sub-38 dB silent study nooks, dual 520 Mbps enterprise fiber, and ergonomic seating. Built for deep work, thesis sprints, and founders who need a calm place to ship.
            </p>

            {/* Mobile Hero Visual Highlight (375px–768px specific card) */}
            <div className="w-full lg:hidden mb-6 rounded-2xl overflow-hidden border border-sand-200 shadow-card bg-sand-100 relative group">
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1000&q=80"
                  alt="The Daily Grind sunlit workspace with wooden desks and ergonomic seating"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent" />
                
                {/* Floating badge inside mobile image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-sand-50 bg-charcoal-900/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-charcoal-700/60 text-xs">
                  <div className="flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-ambercrema flex-shrink-0" />
                    <div>
                      <span className="font-semibold block text-white text-xs">₹200 Café Credit</span>
                      <span className="text-[10px] text-sand-200">Included on every Full Day Pass</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-olive-700/80 px-2 py-0.5 rounded text-white font-medium">
                    Walk-ins OK
                  </span>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons (Touch Friendly) */}
            <div className="w-full sm:w-auto flex flex-col xs:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full xs:w-auto px-6 py-3.5 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-sand-50 text-sm sm:text-base font-semibold transition-all shadow-subtle hover:shadow-md flex items-center justify-center gap-2.5 active:scale-[0.98]"
              >
                <span>Reserve a Workspace</span>
                <ArrowRight className="w-4 h-4 text-ambercrema" />
              </button>

              <button
                type="button"
                onClick={onExploreSpace}
                className="w-full xs:w-auto px-6 py-3.5 rounded-xl bg-sand-200/90 hover:bg-sand-300 text-charcoal-900 border border-sand-300 text-sm sm:text-base font-semibold transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <span>Explore Our Spaces</span>
              </button>

              <button
                type="button"
                onClick={onViewMenu}
                className="w-full xs:w-auto px-4 py-3.5 rounded-xl text-charcoal-700 hover:text-charcoal-950 hover:bg-sand-100 text-sm sm:text-base font-medium transition-colors flex items-center justify-center gap-1.5"
              >
                <Coffee className="w-4 h-4 text-wood-700" />
                <span>Café Menu</span>
              </button>
            </div>

            {/* Trust Metrics Bar */}
            <div className="w-full pt-6 border-t border-sand-200/90 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sand-200 flex items-center justify-center text-charcoal-900 flex-shrink-0">
                  <Wifi className="w-4 h-4 text-olive-700" />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal-900">520 Mbps</p>
                  <p className="text-[11px] text-charcoal-500">Dual Fiber Redundant</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sand-200 flex items-center justify-center text-charcoal-900 flex-shrink-0">
                  <Zap className="w-4 h-4 text-ambercrema" />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal-900">100% Outlets</p>
                  <p className="text-[11px] text-charcoal-500">65W USB-C at Seat</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sand-200 flex items-center justify-center text-charcoal-900 flex-shrink-0">
                  <VolumeX className="w-4 h-4 text-charcoal-700" />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal-900">&lt;38 dB Silence</p>
                  <p className="text-[11px] text-charcoal-500">Acoustic Mezzanine</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sand-200 flex items-center justify-center text-charcoal-900 flex-shrink-0">
                  <Clock className="w-4 h-4 text-wood-700" />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal-900">7:30 AM – 11 PM</p>
                  <p className="text-[11px] text-charcoal-500">Every Single Day</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Progressive Desktop Architectural Visual Mosaic */}
          <div className="hidden lg:block lg:col-span-5 relative">
            
            {/* Main Featured Photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-sand-300 bg-sand-200 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1200&q=80"
                alt="Architectural view of The Daily Grind study and coffee space"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-charcoal-950/10" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-sand-50/90 backdrop-blur-md border border-sand-200 text-charcoal-900 shadow-card">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ambercrema-dark">The Main Hall</span>
                    <h3 className="font-serif text-base font-bold text-charcoal-900">Sunlit Timber &amp; Oak Desks</h3>
                    <p className="text-xs text-charcoal-600 mt-0.5">Dual-band gigabit Wi-Fi, low-fi acoustic zoning</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-olive-800 bg-olive-100 px-2.5 py-1 rounded-full">
                      ₹490 / Day Pass
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Coffee & Pour-over Card */}
            <div className="absolute -top-6 -left-8 w-44 rounded-2xl overflow-hidden shadow-elevated border-2 border-sand-50 bg-white p-2.5">
              <div className="aspect-square rounded-xl overflow-hidden mb-2 relative">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80"
                  alt="V60 Pour Over coffee at The Daily Grind"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-1">
                <p className="text-[10px] text-charcoal-400 uppercase font-semibold">House Specialty</p>
                <p className="text-xs font-bold text-charcoal-900">V60 Pour-over</p>
                <p className="text-[11px] text-ambercrema font-bold">₹240 • Single Estate</p>
              </div>
            </div>

            {/* Overlapping Floating Quiet Meter Card */}
            <div className="absolute -bottom-6 -right-6 p-3.5 rounded-2xl bg-charcoal-900 text-sand-50 border border-charcoal-700 shadow-elevated text-xs max-w-[210px]">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold text-xs text-sand-100">Silent Mezzanine</span>
              </div>
              <p className="text-[11px] text-sand-300">
                Acoustic ceiling baffles ensure quiet flow state below 38 dB.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
