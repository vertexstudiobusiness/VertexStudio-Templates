import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Mail, ArrowRight, CheckCircle2, Copy, Sparkles, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Newsletter: React.FC = () => {
  const { showToast } = useShop();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      showToast('INVALID EMAIL', 'Please enter a valid email address', 'error');
      return;
    }

    setSubscribed(true);
    showToast('WELCOME TO THE FREQUENCY', '10% discount code unlocked: OFFGRID10', 'success');

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#ff4400', '#f4f4f0', '#2b2d35']
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('OFFGRID10');
    setCopied(true);
    showToast('CODE COPIED', 'OFFGRID10 copied to clipboard', 'info');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 sm:py-24 bg-neutral-950 border-b border-brand-border relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-brand-surface border border-brand-border px-3 py-1 text-xs font-mono text-brand-orange uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SUBSCRIBE TO THE UNDERGROUND FREQUENCY</span>
        </div>

        <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-brand-offwhite uppercase tracking-tight leading-tight">
          GET 10% OFF YOUR <br />
          <span className="text-brand-orange">FIRST DROP</span> ORDER
        </h2>

        <p className="font-mono text-xs sm:text-sm text-brand-concrete max-w-lg mx-auto mt-3 mb-8 leading-relaxed">
          Be the first to receive secret release links, archive studio lookbooks, and private drop invitations before public announcements.
        </p>

        {subscribed ? (
          <div className="bg-brand-surface border border-brand-orange p-6 sm:p-8 max-w-md mx-auto text-center space-y-4 shadow-glow-orange">
            <div className="w-12 h-12 bg-brand-orange/20 text-brand-orange border border-brand-orange/40 rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div>
              <h3 className="font-display font-bold text-lg text-brand-offwhite uppercase">
                YOU'RE ON THE INSIDE
              </h3>
              <p className="text-xs font-mono text-brand-concrete mt-1">
                Your private frequency pass code is ready for checkout.
              </p>
            </div>

            <div className="flex items-center justify-between bg-neutral-900 border border-brand-border px-4 py-3">
              <div>
                <span className="text-[10px] font-mono text-brand-concrete block uppercase text-left">
                  DISCOUNT CODE (10% OFF)
                </span>
                <span className="font-mono text-base font-bold text-brand-orange tracking-widest">
                  OFFGRID10
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="bg-brand-orange text-black font-mono font-bold text-xs px-3 py-1.5 hover:bg-white transition-colors flex items-center gap-1"
              >
                <Copy className="w-3 h-3" />
                <span>{copied ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-brand-surface border border-brand-border px-4 py-3.5 text-base sm:text-xs font-mono text-white outline-none focus:border-brand-orange min-h-[46px]"
              />
              <button
                type="submit"
                className="bg-brand-orange hover:bg-white text-black font-mono font-bold text-xs uppercase px-6 py-3.5 tracking-wider transition-colors shrink-0 shadow-glow-orange min-h-[46px] active:scale-[0.98]"
              >
                SUBSCRIBE
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-brand-concrete pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-brand-orange" /> NO SPAM GUARANTEE
              </span>
              <span>•</span>
              <span>ONE-CLICK UNSUBSCRIBE</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

