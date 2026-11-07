import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowLeft, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

export const ManifestoPage: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <div className="min-h-screen bg-brand-black pb-28">
      {/* Header */}
      <div className="bg-brand-surface border-b border-brand-border py-8 sm:py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2 text-xs font-mono text-brand-concrete hover:text-white mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN HOME</span>
          </button>
          <span className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold block mb-1">
            OFFGRID FOUNDING PHILOSOPHY
          </span>
          <h1 className="font-display font-black text-2xl xs:text-3xl sm:text-6xl text-brand-offwhite uppercase tracking-tight">
            THE MANIFESTO: <br />
            <span className="text-brand-orange">NOT MADE TO FIT IN.</span>
          </h1>
        </div>
      </div>

      {/* Main Text Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-12">
        <div className="border-l-4 border-l-brand-orange pl-6 py-2">
          <p className="font-display font-black text-2xl sm:text-3xl text-brand-offwhite uppercase leading-snug">
            "WE STARTED OFFGRID WITH A SIMPLE OBSERVATION: FAST FASHION HAD MADE STREETWEAR TOOTHLESS, THIN, AND DERIVATIVE."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-mono text-brand-concrete leading-relaxed">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-white uppercase">
              1. THE WEIGHT OF CLOTH
            </h3>
            <p>
              When you put on an OFFGRID garment, you immediately feel the physical gravity of the cotton. We refuse to touch 180 GSM single jerseys that twist in the wash after two cycles. Our tees begin at 300 GSM; our hoodies are carved out of 450 GSM diagonal French Terry sourced from organic spinners in Tamil Nadu.
            </p>
            <p>
              This isn't an arbitrary flex: heavy cloth holds shape. It stands away from the body, producing that clean, boxy brutalist silhouette that cheap thin garments simply cannot replicate.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-white uppercase">
              2. BORN ON MONSOON CONCRETE
            </h3>
            <p>
              International brands design for European snowfall or California sunshine. We design our tactical cargos and utility bombers to withstand coastal Mumbai humidity, sudden monsoon downpours, and Delhi winter smog.
            </p>
            <p>
              We integrate Cordura ripstop weaves, quick-release aluminum buckles, breathable mesh linings, and DWR hydrophobic coatings into silhouettes that skate, ride, and navigate the concrete grid daily.
            </p>
          </div>
        </div>

        {/* Archival Pillars */}
        <div className="bg-brand-surface border border-brand-border p-6 sm:p-8 space-y-6">
          <h3 className="font-display font-black text-xl text-white uppercase">
            OUR ARCHIVAL COMMITMENT
          </h3>

          <div className="space-y-4 font-mono text-xs sm:text-sm text-brand-offwhite">
            <div className="flex gap-4 items-start">
              <span className="text-brand-orange font-bold font-display text-lg">01</span>
              <div>
                <strong className="block text-white">NO RESTOCKS ON NUMBERED PIECES</strong>
                <span className="text-brand-concrete text-xs">When Drop 004 is depleted, we archive the screen plates forever. We do not dilute rarity.</span>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-brand-orange font-bold font-display text-lg">02</span>
              <div>
                <strong className="block text-white">ETHICAL DOMESTIC CRAFTSMANSHIP</strong>
                <span className="text-brand-concrete text-xs">All knitting, pigment-dyeing, cutting, and stitching happens in certified Indian craft studios with fair living wages.</span>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-brand-orange font-bold font-display text-lg">03</span>
              <div>
                <strong className="block text-white">LIFETIME STRUCTURAL WARRANTY</strong>
                <span className="text-brand-concrete text-xs">If any seam, bar-tack, or heavy zipper fails under normal wear within 365 days, we repair or replace it free.</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-brand-border">
          <button
            onClick={() => navigateTo('shop')}
            className="bg-brand-orange hover:bg-white text-black font-mono font-bold text-xs uppercase px-8 py-4 tracking-wider transition-all shadow-glow-orange inline-flex items-center gap-2"
          >
            <span>JOIN THE DISRUPTION // SHOP DROP 004</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

