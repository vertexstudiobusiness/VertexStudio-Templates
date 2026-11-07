import React from 'react';
import { Wifi, Volume2, Coffee, CheckCircle2 } from 'lucide-react';

export const LiveStatusBanner: React.FC = () => {
  return (
    <section className="bg-sand-100 border-b border-sand-200/80 text-charcoal-700 text-xs py-2.5 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        {/* Left: Live pulse */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-charcoal-900 tracking-tight flex items-center gap-1.5">
            Live Workspace Status:
          </span>
          <span className="text-charcoal-600 font-medium">
            18 Desks & 2 Pods Available Now
          </span>
        </div>

        {/* Right: Metrics Ticker */}
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap text-[11px] sm:text-xs">
          <div className="flex items-center gap-1.5 text-charcoal-600">
            <Wifi className="w-3.5 h-3.5 text-olive-600" />
            <span className="font-medium text-charcoal-800">520 Mbps</span>
            <span className="hidden xs:inline text-charcoal-400">Fiber (Dual WAN)</span>
          </div>

          <div className="flex items-center gap-1.5 text-charcoal-600">
            <Volume2 className="w-3.5 h-3.5 text-ambercrema" />
            <span className="font-medium text-charcoal-800">38 dB</span>
            <span className="hidden sm:inline text-charcoal-400">Silent Zone</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 text-charcoal-600">
            <Coffee className="w-3.5 h-3.5 text-wood-700" />
            <span>On Hopper: <strong className="text-charcoal-800 font-medium">Chikmagalur Red Honey</strong></span>
          </div>

          <div className="flex items-center gap-1 text-emerald-800 font-medium bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            <span>Walk-ins Welcome</span>
          </div>
        </div>
      </div>
    </section>
  );
};
