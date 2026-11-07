import React from 'react';
import { Shield, Sparkles, HeartHandshake, Scissors } from 'lucide-react';

export const BrandPhilosophy: React.FC = () => {
  return (
    <section id="brand-philosophy" className="py-20 sm:py-32 bg-[#0e0d0b] border-b border-[#201d19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#c5a880] font-semibold block mb-3">
            OUR PHILOSOPHY & ETHOS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#faf7f2] font-normal tracking-tight leading-[1.15]">
            The Art of Intentional <br />
            <span className="italic font-light text-[#ded6c9] font-serif">Slow Luxury</span>
          </h2>
          <div className="w-16 h-px bg-[#c5a880]/50 mx-auto my-6" />
          <p className="text-sm sm:text-base text-[#ded6c9]/80 font-light leading-relaxed">
            In an era of fleeting trends and hyper-industrialization, ÉLAN Studio remains devoted to the cadence of the hand. We craft garments designed to be worn across decades and passed on as family heirlooms.
          </p>
        </div>

        {/* 4 Architectural Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-[#141210] border border-[#26231e] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#1e1c18] border border-[#332e26] flex items-center justify-center text-[#c5a880] mb-4">
                <Scissors className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#faf7f2] font-normal mb-2">
                Bespoke Tailoring
              </h3>
              <p className="text-xs text-[#948b7e] leading-relaxed font-light">
                Every Bandhgala, jacket, and trouser is cut individually. Our floating canvas construction contours to your natural posture over time.
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] mt-6 block font-medium">
              32 FITTING HOURS
            </span>
          </div>

          <div className="p-6 bg-[#141210] border border-[#26231e] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#1e1c18] border border-[#332e26] flex items-center justify-center text-[#c5a880] mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#faf7f2] font-normal mb-2">
                Noble Natural Fibres
              </h3>
              <p className="text-xs text-[#948b7e] leading-relaxed font-light">
                We work strictly with 100% natural fibres: pure mulberry silk, wild Bhagalpur tussar, French flax linen, and Grade-A Changthangi cashmere.
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] mt-6 block font-medium">
              ZERO SYNTHETICS
            </span>
          </div>

          <div className="p-6 bg-[#141210] border border-[#26231e] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#1e1c18] border border-[#332e26] flex items-center justify-center text-[#c5a880] mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#faf7f2] font-normal mb-2">
                Artisan Guild Honour
              </h3>
              <p className="text-xs text-[#948b7e] leading-relaxed font-light">
                We work directly with master weaving families in Varanasi, Chanderi, and Kashmir, guaranteeing ethical remuneration 3.5× above standard wage.
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] mt-6 block font-medium">
              FAIR CRAFT CHARTER
            </span>
          </div>

          <div className="p-6 bg-[#141210] border border-[#26231e] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#1e1c18] border border-[#332e26] flex items-center justify-center text-[#c5a880] mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#faf7f2] font-normal mb-2">
                Lifetime Care Promise
              </h3>
              <p className="text-xs text-[#948b7e] leading-relaxed font-light">
                Complimentary seam reinforcement, button re-anchoring, and expert storage advice at our New Delhi and Mumbai private ateliers.
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] mt-6 block font-medium">
              LIFETIME ATELIER SERVICE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
