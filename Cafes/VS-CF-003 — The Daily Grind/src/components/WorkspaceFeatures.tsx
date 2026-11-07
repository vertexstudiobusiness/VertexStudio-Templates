import React, { useState } from 'react';
import { Wifi, Zap, VolumeX, PhoneCall, Coffee, Armchair, Clock, Printer, Activity, CheckCircle, RefreshCw } from 'lucide-react';
import { WORKSPACE_FEATURES } from '../data/mockData';

export const WorkspaceFeatures: React.FC = () => {
  const [testingSpeed, setTestingSpeed] = useState(false);
  const [speedResult, setSpeedResult] = useState<{ download: number; upload: number; ping: number } | null>({
    download: 524,
    upload: 489,
    ping: 4,
  });

  const handleTestSpeed = () => {
    setTestingSpeed(true);
    setTimeout(() => {
      setSpeedResult({
        download: Math.floor(515 + Math.random() * 25),
        upload: Math.floor(480 + Math.random() * 20),
        ping: Math.floor(3 + Math.random() * 3),
      });
      setTestingSpeed(false);
    }, 1200);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi':
        return <Wifi className="w-5 h-5 text-olive-700" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-ambercrema-dark" />;
      case 'VolumeX':
        return <VolumeX className="w-5 h-5 text-charcoal-800" />;
      case 'PhoneCall':
        return <PhoneCall className="w-5 h-5 text-wood-700" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-ambercrema" />;
      case 'Armchair':
        return <Armchair className="w-5 h-5 text-olive-800" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-charcoal-700" />;
      case 'Printer':
        return <Printer className="w-5 h-5 text-wood-600" />;
      default:
        return <Wifi className="w-5 h-5 text-charcoal-700" />;
    }
  };

  return (
    <section id="features" className="py-16 sm:py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-200 border border-sand-300 text-charcoal-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-ambercrema" />
            <span>Productivity Infrastructure</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 font-serif leading-tight">
            Engineered for Unbroken Flow States
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-600 font-normal">
            Every square foot is calibrated for cognitive endurance — from acoustic ceiling baffles to surge-protected USB-C 65W sockets at every single seat.
          </p>
        </div>

        {/* Feature Cards Grid (Mobile-friendly 1 col -> 2 col -> 4 col) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {WORKSPACE_FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-sand-200 hover:border-sand-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-sand-100 border border-sand-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="text-base font-bold text-charcoal-900 mb-2 group-hover:text-ambercrema-dark transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-sand-100 flex items-center gap-1.5 text-[11px] font-semibold text-olive-800">
                <CheckCircle className="w-3.5 h-3.5 text-olive-600" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Wi-Fi & Acoustic Telemetry Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-charcoal-900 text-sand-50 border border-charcoal-800 shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left description */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-800 text-emerald-400 text-xs font-semibold mb-3 border border-charcoal-700">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>Live Studio Telemetry</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-sand-50 mb-2">
                Real-Time Bandwidth &amp; Acoustic Verification
              </h3>
              <p className="text-xs sm:text-sm text-sand-200/90 leading-relaxed">
                We believe remote workers deserve absolute transparency. Our dual enterprise connections are continuously monitored so you never face a dropped video pitch.
              </p>
            </div>

            {/* Right: Live Interactive Speed Meter Card */}
            <div className="lg:col-span-6 bg-charcoal-800/80 p-5 sm:p-6 rounded-2xl border border-charcoal-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-sand-100 uppercase tracking-wider">
                    Network Speed Test (Bengaluru Node)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleTestSpeed}
                  disabled={testingSpeed}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-charcoal-700 hover:bg-charcoal-600 text-sand-100 text-xs font-medium transition-colors disabled:opacity-60"
                >
                  <RefreshCw className={`w-3 h-3 ${testingSpeed ? 'animate-spin text-ambercrema' : ''}`} />
                  <span>{testingSpeed ? 'Testing...' : 'Retest'}</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-charcoal-900/90 border border-charcoal-700">
                  <p className="text-[11px] text-sand-400 mb-1">Download</p>
                  <p className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">
                    {testingSpeed ? '...' : `${speedResult?.download}`}
                  </p>
                  <p className="text-[10px] text-sand-400">Mbps</p>
                </div>

                <div className="p-3 rounded-xl bg-charcoal-900/90 border border-charcoal-700">
                  <p className="text-[11px] text-sand-400 mb-1">Upload</p>
                  <p className="text-xl sm:text-2xl font-bold text-ambercrema font-mono">
                    {testingSpeed ? '...' : `${speedResult?.upload}`}
                  </p>
                  <p className="text-[10px] text-sand-400">Mbps</p>
                </div>

                <div className="p-3 rounded-xl bg-charcoal-900/90 border border-charcoal-700">
                  <p className="text-[11px] text-sand-400 mb-1">Latency</p>
                  <p className="text-xl sm:text-2xl font-bold text-sand-100 font-mono">
                    {testingSpeed ? '...' : `${speedResult?.ping}`}
                  </p>
                  <p className="text-[10px] text-sand-400">ms Ping</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px] text-sand-300 pt-3 border-t border-charcoal-700">
                <span>ISP: Airtel Enterprise + ACT Gigabit Redundant</span>
                <span className="text-emerald-400 font-medium">99.98% Uptime</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
