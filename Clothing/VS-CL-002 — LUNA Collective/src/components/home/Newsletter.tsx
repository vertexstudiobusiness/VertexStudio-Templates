import React, { useState } from 'react';
import { Mail, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-[#F6F3EE] border-t border-[#D8CFBE]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 md:p-14 border border-[#D8CFBE]/70 shadow-lg relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 rounded-full bg-[#F7EBE8]/60 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-48 h-48 rounded-full bg-[#EFE9E0]/80 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#F7EBE8] text-[#B77B6E] flex items-center justify-center mx-auto mb-4">
              <Mail className="w-5 h-5" />
            </div>

            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#B77B6E] block mb-2">
              Private Patron Invitations
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#261B14] mb-3">
              Join The LUNA Circle
            </h2>

            <p className="text-xs sm:text-sm text-[#5A4232] font-light leading-relaxed mb-6">
              Subscribe to receive private preview access to our seasonal capsule collections, atelier stories, and enjoy a <span className="font-medium text-[#261B14]">10% welcome privilege</span> on your first order.
            </p>

            {submitted ? (
              <div className="bg-[#F7EBE8] border border-[#D4A59A]/60 rounded-2xl p-4 text-xs text-[#261B14] animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-center gap-2 mb-1 text-[#1E8E42] font-semibold">
                  <Check className="w-4 h-4" />
                  <span>You are now part of our circle!</span>
                </div>
                <p className="text-[#5A4232] text-xs">
                  Your welcome privilege is ready: Apply coupon <strong className="font-mono text-[#3D2B1F] bg-white px-2 py-0.5 rounded border border-[#D8CFBE] mx-1">LUNA10</strong> at checkout.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="flex-1 bg-white border border-[#D8CFBE] rounded-full px-5 py-3 text-xs sm:text-sm text-[#261B14] placeholder-[#5A4232]/50 focus:outline-none focus:border-[#3D2B1F] shadow-2xs"
                />
                <button
                  type="submit"
                  className="bg-[#3D2B1F] hover:bg-[#5A4232] text-[#FAF8F5] px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-1.5 shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#5A4232]/70 font-light">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B77B6E]" />
              <span>We respect your privacy. No spam, ever. Unsubscribe in one click.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
