import React, { useState } from 'react';
import { AlertCircle, X, CheckCircle, Sparkles } from 'lucide-react';

export const DemoBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside 
      aria-label="Demo mode notice"
      className="bg-navy-950 text-charcoal-200 text-xs py-2 px-3 border-b border-gold-500/30 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 bg-gold-500/20 text-gold-300 font-medium px-2 py-0.5 rounded-full text-[11px] border border-gold-500/40">
            <Sparkles className="w-3 h-3 text-gold-400" />
            Interactive Corporate Showcase
          </span>
          <p className="text-charcoal-300 hidden sm:inline">
            Grand Meridian Hotel & Residences • Fully interactive booking flow, GSTIN corporate invoicing & instant voucher generation.
          </p>
          <p className="text-charcoal-300 sm:hidden">
            Interactive demo preview with instant confirmation voucher.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-gold-400 font-mono text-[11px] hidden md:inline-flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-emerald-400" /> Demo Booking Mode Active
          </span>
          <button 
            onClick={() => setDismissed(true)}
            aria-label="Dismiss banner"
            className="text-charcoal-400 hover:text-white p-1 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
