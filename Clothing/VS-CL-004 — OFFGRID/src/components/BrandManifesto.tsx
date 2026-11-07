import React from 'react';
import { useShop } from '../context/ShopContext';
import { ShieldCheck, Compass, Zap, Flame, ArrowRight } from 'lucide-react';

export const BrandManifesto: React.FC = () => {
  const { navigateTo } = useShop();

  const tenets = [
    {
      num: '01',
      title: 'ANTI-FAST FASHION',
      desc: 'We discard the conventional 52-season retail calendar. Every silhouette is drafted from scratch, wear-tested on skate decks and Mumbai streets, and produced in limited batches that never end up in clearance landfill bins.'
    },
    {
      num: '02',
      title: 'ARMOR-GRADE FLEECE',
      desc: 'No flimsy 180 GSM polyester blends. Our standard begins at 300 GSM for tees and peaks at 450 GSM French Terry for hoodies. Built to hold shape, survive monsoon moisture, and age like vintage raw denim.'
    },
    {
      num: '03',
      title: 'ZERO RESTOCK POLICY',
      desc: 'When Drop 004 is depleted, the pattern plates are sealed into our physical archive vault. True limited drops ensure that your piece remains rare, authentic, and forever distinct.'
    },
    {
      num: '04',
      title: 'INDEPENDENT CULT',
      desc: 'No corporate holding groups or venture boards dictating watered-down commercial drops. OFFGRID exists for the outliers, creators, musicians, and night-crawlers who refuse to fit inside prescribed moulds.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-neutral-950 border-b border-brand-border relative overflow-hidden">
      {/* Background Stencil Grid Lines */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Coordinates Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-brand-concrete pb-6 border-b border-brand-border mb-12">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-brand-orange" />
            <span className="text-brand-offwhite font-bold">OFFGRID® CULTURE MANIFESTO</span>
            <span>//</span>
            <span>DOC REF: #OG-MUM-2026</span>
          </div>

          <div className="flex items-center gap-3">
            <span>HEADQUARTERS: BANDRA WEST (MH-02)</span>
            <div className="h-2.5 w-12 barcode-strip" />
          </div>
        </div>

        {/* Central Bold Statement */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <span className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold block mb-2">
            WHY WE EXIST
          </span>
          <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-brand-offwhite uppercase tracking-tight leading-[1.08]">
            WE DO NOT MAKE CLOTHES <br />
            FOR PEOPLE WHO WANT TO <br />
            <span className="text-stroke hover:text-brand-orange transition-colors">BLEND INTO THE HERD.</span>
          </h2>
        </div>

        {/* 4 Tenets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {tenets.map((tenet) => (
            <div
              key={tenet.num}
              className="bg-brand-surface border border-brand-border hover:border-brand-orange/60 p-6 sm:p-8 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-display font-black text-2xl text-brand-orange">
                  // {tenet.num}
                </span>
                <span className="text-[10px] font-mono text-brand-concrete border border-brand-border px-2 py-0.5">
                  TENET
                </span>
              </div>

              <h3 className="font-display font-black text-xl text-brand-offwhite uppercase mb-2 group-hover:text-brand-orange transition-colors">
                {tenet.title}
              </h3>

              <p className="font-mono text-xs sm:text-sm text-brand-concrete leading-relaxed">
                {tenet.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-brand-surface border border-brand-border p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-black text-lg sm:text-xl text-brand-offwhite uppercase">
              EXPERIENCE THE FULL DROP 004 CAPSULE
            </h4>
            <p className="font-mono text-xs text-brand-concrete">
              Complimentary express shipping across India on orders above ₹1,999.
            </p>
          </div>

          <button
            onClick={() => navigateTo('shop')}
            className="bg-brand-orange hover:bg-white text-black font-mono font-bold text-xs uppercase px-8 py-3.5 tracking-wider transition-all shadow-glow-orange shrink-0 flex items-center gap-2"
          >
            <span>SHOP ALL PIECES</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

