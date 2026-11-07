import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { Clock, ShieldAlert, ArrowRight, CheckCircle2, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';

export const DropCountdown: React.FC = () => {
  const { showToast } = useShop();

  // Target countdown: 3 days, 14 hours, 22 mins from now
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 22,
    seconds: 45
  });

  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleJoinVip = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneOrEmail.trim()) return;

    setIsSubscribed(true);
    showToast('VIP ACCESS GRANTED', 'You have been added to the Drop 005 Priority Whitelist!', 'success');
    
    // Confetti pop
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#ff4400', '#f4f4f0', '#ffffff', '#2b2d35']
    });
  };

  const copyVipCode = () => {
    navigator.clipboard.writeText('FIRSTDROP');
    setCopiedCode(true);
    showToast('CODE COPIED', 'Use FIRSTDROP at checkout for ₹500 flat off', 'info');
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <section className="py-20 sm:py-28 bg-brand-surface border-b border-brand-border relative overflow-hidden">
      {/* Background Stencil Watermarks */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-stroke font-display font-black text-7xl sm:text-9xl opacity-10 select-none pointer-events-none">
        005
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-neutral-950 border-2 border-brand-orange p-6 sm:p-12 shadow-glow-orange">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Countdown Alert & Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-ping" />
                <span className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold">
                  NEXT DROP PREPARATION // IN QUEUE
                </span>
              </div>

              <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-5xl text-brand-offwhite uppercase tracking-tight leading-tight">
                DROP 005: <span className="text-brand-orange">SOLAR ECLIPSE</span>
              </h2>

              <p className="font-mono text-xs sm:text-sm text-brand-concrete max-w-xl leading-relaxed">
                Featuring thermal-reactive dyes that shift pigment in direct sunlight, 500 GSM loopback heavyweight bombers, and Japanese raw indigo denim. Limited strictly to 120 numbered editions.
              </p>

              {/* Countdown Clocks */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 pt-3 max-w-md">
                <div className="bg-brand-surface border border-brand-border p-2 sm:p-3 text-center">
                  <span className="font-display font-black text-xl xs:text-2xl sm:text-4xl text-brand-offwhite block">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[9px] sm:text-[10px] text-brand-concrete uppercase">
                    DAYS
                  </span>
                </div>

                <div className="bg-brand-surface border border-brand-border p-2 sm:p-3 text-center">
                  <span className="font-display font-black text-xl xs:text-2xl sm:text-4xl text-brand-offwhite block">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[9px] sm:text-[10px] text-brand-concrete uppercase">
                    HOURS
                  </span>
                </div>

                <div className="bg-brand-surface border border-brand-border p-2 sm:p-3 text-center">
                  <span className="font-display font-black text-xl xs:text-2xl sm:text-4xl text-brand-offwhite block">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[9px] sm:text-[10px] text-brand-concrete uppercase">
                    MINS
                  </span>
                </div>

                <div className="bg-brand-surface border border-brand-orange p-2 sm:p-3 text-center">
                  <span className="font-display font-black text-xl xs:text-2xl sm:text-4xl text-brand-orange block">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[9px] sm:text-[10px] text-brand-orange uppercase font-bold">
                    SECS
                  </span>
                </div>
              </div>
            </div>

            {/* Right: VIP Whitelist Registration */}
            <div className="lg:col-span-5 bg-brand-surface border border-brand-border p-5 sm:p-7">
              {isSubscribed ? (
                <div className="text-center space-y-4 py-4">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-brand-offwhite uppercase">
                      VIP STATUS: ACTIVE
                    </h3>
                    <p className="text-xs font-mono text-brand-concrete mt-1">
                      You will receive early private checkout link 2 hours before public launch.
                    </p>
                  </div>

                  {/* Secret Code Gift */}
                  <div className="bg-neutral-900 border border-brand-orange p-3 text-left">
                    <span className="text-[10px] font-mono text-brand-orange uppercase font-bold block">
                      SECRET UNLOCKED: ₹500 OFF CURRENT ORDERS
                    </span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="font-mono text-base font-bold text-white tracking-widest">
                        FIRSTDROP
                      </span>
                      <button
                        onClick={copyVipCode}
                        className="flex items-center gap-1 text-xs font-mono bg-brand-orange text-black font-bold px-2.5 py-1 hover:bg-white transition-colors"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{copiedCode ? 'COPIED' : 'COPY'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-display font-black text-lg sm:text-xl text-brand-offwhite uppercase">
                      UNLOCK 2-HOUR EARLY ACCESS
                    </h3>
                    <p className="font-mono text-xs text-brand-concrete mt-1">
                      Drop 004 sold 60% of units during early access. Register your WhatsApp or Email to skip the public queue.
                    </p>
                  </div>

                  <form onSubmit={handleJoinVip} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Enter Mobile (+91) or Email address"
                      value={phoneOrEmail}
                      onChange={(e) => setPhoneOrEmail(e.target.value)}
                      required
                      className="w-full bg-neutral-900 border border-brand-border px-3.5 py-3 text-base sm:text-xs font-mono text-white outline-none focus:border-brand-orange min-h-[46px]"
                    />

                    <button
                      type="submit"
                      className="w-full bg-brand-orange hover:bg-white text-black font-mono font-bold text-xs uppercase py-3.5 min-h-[48px] flex items-center justify-center gap-2 transition-colors shadow-glow-orange active:scale-[0.98]"
                    >
                      <span>JOIN PRIORITY WHITELIST</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>

                  <div className="flex items-center justify-between text-[10px] font-mono text-brand-concrete">
                    <span>ZERO SPAM • INSTANT OPT-OUT</span>
                    <span>1,842 MEMBERS JOINED</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

