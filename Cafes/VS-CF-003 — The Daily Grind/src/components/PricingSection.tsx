import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, Coffee, Calculator } from 'lucide-react';
import { WORKSPACE_PLANS } from '../data/mockData';
import type { PricingTier } from '../types';

interface PricingSectionProps {
  onSelectPlanForBooking: (planId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlanForBooking }) => {
  const [activeTab, setActiveTab] = useState<PricingTier>('passes');

  // Calculator State
  const [calcDays, setCalcDays] = useState<number>(3);
  const [calcCoffeePerDay, setCalcCoffeePerDay] = useState<number>(2);

  const filteredPlans = WORKSPACE_PLANS.filter((p) => p.category === activeTab);

  // Calculator logic
  const dailyPassPrice = 490;
  const includedCreditPerDay = 200;
  const effectivePassSpend = calcDays * dailyPassPrice;
  const totalFreeCoffeeCredit = calcDays * includedCreditPerDay;

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-sand-100 border-t border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-200 border border-sand-300 text-charcoal-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-ambercrema" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 font-serif leading-tight">
            Workspace Passes &amp; Memberships
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-600 font-normal">
            Every pass includes generous food &amp; specialty coffee credits. No lock-in deposits or hidden registration fees.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-sand-200/90 border border-sand-300 max-w-full overflow-x-auto no-scrollbar">
            <button
              type="button"
              onClick={() => setActiveTab('passes')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'passes'
                  ? 'bg-charcoal-900 text-sand-50 shadow-sm'
                  : 'text-charcoal-700 hover:text-charcoal-950'
              }`}
            >
              Day &amp; Flexi Passes
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('memberships')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'memberships'
                  ? 'bg-charcoal-900 text-sand-50 shadow-sm'
                  : 'text-charcoal-700 hover:text-charcoal-950'
              }`}
            >
              Monthly Resident Desks
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('pods')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'pods'
                  ? 'bg-charcoal-900 text-sand-50 shadow-sm'
                  : 'text-charcoal-700 hover:text-charcoal-950'
              }`}
            >
              Private Meeting Pods
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className={`grid gap-6 items-stretch mb-16 ${
          filteredPlans.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' : 'grid-cols-1 md:grid-cols-3'
        }`}>
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 sm:p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular
                  ? 'bg-charcoal-900 text-sand-50 border-2 border-ambercrema shadow-card'
                  : 'bg-white text-charcoal-900 border border-sand-300 shadow-sm hover:shadow-card'
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm ${
                  plan.isPopular ? 'bg-ambercrema text-white' : 'bg-olive-700 text-white'
                }`}>
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h3 className={`text-xl font-bold font-serif ${
                    plan.isPopular ? 'text-sand-50' : 'text-charcoal-900'
                  }`}>
                    {plan.title}
                  </h3>
                  <p className={`text-xs mt-1 leading-relaxed ${
                    plan.isPopular ? 'text-sand-300' : 'text-charcoal-600'
                  }`}>
                    {plan.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-6 pb-4 border-b border-sand-200/40">
                  <span className="text-3xl sm:text-4xl font-extrabold font-serif">₹{plan.price}</span>
                  <span className={`text-xs ${plan.isPopular ? 'text-sand-400' : 'text-charcoal-500'}`}>
                    / {plan.period}
                  </span>
                </div>

                {/* Credit highlight tag */}
                {plan.cafeCredit > 0 && (
                  <div className={`mb-6 p-3 rounded-xl border flex items-center gap-2.5 text-xs ${
                    plan.isPopular
                      ? 'bg-charcoal-800/80 border-ambercrema/30 text-sand-200'
                      : 'bg-sand-50 border-sand-300 text-charcoal-800'
                  }`}>
                    <Coffee className="w-4 h-4 text-ambercrema flex-shrink-0" />
                    <div>
                      <strong className="font-semibold block">₹{plan.cafeCredit} Café Credit</strong>
                      <span className="text-[11px] opacity-80">Redeemable on all food &amp; single-origin brews</span>
                    </div>
                  </div>
                )}

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  <p className={`text-[11px] font-bold uppercase tracking-wider ${
                    plan.isPopular ? 'text-sand-300' : 'text-charcoal-500'
                  }`}>
                    Included with plan:
                  </p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        plan.isPopular ? 'text-ambercrema' : 'text-emerald-600'
                      }`} />
                      <span className={plan.isPopular ? 'text-sand-200' : 'text-charcoal-700'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-sand-200/30">
                <p className={`text-[11px] mb-3 font-medium ${
                  plan.isPopular ? 'text-sand-400' : 'text-charcoal-500'
                }`}>
                  Best for: {plan.idealFor}
                </p>
                <button
                  type="button"
                  onClick={() => onSelectPlanForBooking(plan.id)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-xs active:scale-[0.98] ${
                    plan.isPopular
                      ? 'bg-ambercrema hover:bg-ambercrema-dark text-white'
                      : 'bg-charcoal-900 hover:bg-charcoal-800 text-sand-50'
                  }`}
                >
                  <span>Choose Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive Pass & Food Credit Calculator */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-sand-300 p-6 sm:p-8 shadow-card">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg bg-sand-100 flex items-center justify-center text-charcoal-900">
              <Calculator className="w-4 h-4 text-ambercrema-dark" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal-900">
                Productivity &amp; Coffee Savings Calculator
              </h3>
              <p className="text-xs text-charcoal-500">
                See how much real value you unlock with our included ₹200 daily café credit.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-sand-200">
            {/* Controls */}
            <div className="space-y-4">
              <div>
                <label className="flex justify-between text-xs font-semibold text-charcoal-800 mb-1.5">
                  <span>Days per week visiting:</span>
                  <span className="text-ambercrema-dark font-bold font-mono">{calcDays} Days</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={calcDays}
                  onChange={(e) => setCalcDays(Number(e.target.value))}
                  className="w-full accent-ambercrema cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-charcoal-400">
                  <span>1 Day</span>
                  <span>3 Days</span>
                  <span>6 Days</span>
                </div>
              </div>

              <div>
                <label className="flex justify-between text-xs font-semibold text-charcoal-800 mb-1.5">
                  <span>Specialty Coffees per day:</span>
                  <span className="text-ambercrema-dark font-bold font-mono">{calcCoffeePerDay} Cups</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="4"
                  value={calcCoffeePerDay}
                  onChange={(e) => setCalcCoffeePerDay(Number(e.target.value))}
                  className="w-full accent-ambercrema cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-charcoal-400">
                  <span>1 Cup</span>
                  <span>2 Cups</span>
                  <span>4 Cups</span>
                </div>
              </div>
            </div>

            {/* Results display */}
            <div className="p-4 rounded-2xl bg-sand-50 border border-sand-200 flex flex-col justify-between">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-charcoal-600">
                  <span>Weekly Day Passes ({calcDays} × ₹490):</span>
                  <span className="font-mono font-medium text-charcoal-900">₹{effectivePassSpend}</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Included Café Credits ({calcDays} × ₹200):</span>
                  <span className="font-mono font-bold">-₹{totalFreeCoffeeCredit}</span>
                </div>
                <div className="pt-2 border-t border-sand-200 flex justify-between items-baseline">
                  <span className="font-bold text-charcoal-900 text-sm">Effective Workspace Cost:</span>
                  <span className="text-xl font-extrabold text-charcoal-900 font-serif">
                    ₹{effectivePassSpend - totalFreeCoffeeCredit}
                  </span>
                </div>
              </div>

              <div className="mt-3 text-[11px] text-charcoal-500 italic">
                You effectively pay only ₹{Math.round((effectivePassSpend - totalFreeCoffeeCredit) / calcDays)}/day for 12 hours of uninterrupted 520 Mbps workspace.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
