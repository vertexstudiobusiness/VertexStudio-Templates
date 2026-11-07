import React from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { WORK_PACKAGES } from '../data/mockData';

interface PackagesSectionProps {
  onSelectPackageForBooking: (packageId: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackageForBooking }) => {
  return (
    <section id="packages" className="py-16 sm:py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-200 border border-sand-300 text-charcoal-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-ambercrema" />
            <span>Curated Work Combos</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 font-serif leading-tight">
            Study &amp; Work Packages
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-600 font-normal">
            All-in-one productivity bundles including guaranteed seating, high-speed fiber, and hand-crafted specialty coffee &amp; brain food.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {WORK_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'bg-charcoal-900 text-sand-50 border-2 border-ambercrema shadow-card'
                  : 'bg-white text-charcoal-900 border border-sand-300 hover:shadow-card'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-ambercrema text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  Curator's Choice
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                    pkg.popular ? 'bg-charcoal-800 text-ambercrema' : 'bg-sand-100 text-charcoal-700'
                  }`}>
                    {pkg.duration}
                  </span>
                  <span className={`text-xs font-bold ${
                    pkg.popular ? 'text-emerald-400' : 'text-emerald-700'
                  }`}>
                    {pkg.savings}
                  </span>
                </div>

                <h3 className={`text-xl font-bold font-serif mb-1 ${
                  pkg.popular ? 'text-sand-50' : 'text-charcoal-900'
                }`}>
                  {pkg.name}
                </h3>

                <p className={`text-xs leading-relaxed mb-4 ${
                  pkg.popular ? 'text-sand-300' : 'text-charcoal-600'
                }`}>
                  {pkg.tagline}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-6 pb-4 border-b border-sand-200/40">
                  <span className="text-3xl font-extrabold font-serif">₹{pkg.price}</span>
                  <span className={`text-xs ${pkg.popular ? 'text-sand-400' : 'text-charcoal-500'}`}>
                    / package (incl. GST)
                  </span>
                </div>

                {/* What's Included */}
                <div className="space-y-3 mb-6">
                  <p className={`text-[11px] font-bold uppercase tracking-wider ${
                    pkg.popular ? 'text-sand-300' : 'text-charcoal-500'
                  }`}>
                    Included in this pass:
                  </p>
                  {pkg.itemsIncluded.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs">
                      <Check className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                        pkg.popular ? 'text-ambercrema' : 'text-emerald-600'
                      }`} />
                      <span className={pkg.popular ? 'text-sand-200' : 'text-charcoal-700'}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-sand-200/30">
                <button
                  type="button"
                  onClick={() => onSelectPackageForBooking(pkg.id)}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-xs active:scale-[0.98] ${
                    pkg.popular
                      ? 'bg-ambercrema hover:bg-ambercrema-dark text-white'
                      : 'bg-charcoal-900 hover:bg-charcoal-800 text-sand-50'
                  }`}
                >
                  <span>Select this Combo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 text-center text-xs text-charcoal-500">
          All workspace passes include high-speed 520 Mbps Wi-Fi, power outlets at seat, filtered drinking water, and washroom access.
        </div>

      </div>
    </section>
  );
};
