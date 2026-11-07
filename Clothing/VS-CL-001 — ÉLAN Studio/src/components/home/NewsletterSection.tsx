import React, { useState } from 'react';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const { showToast } = useShop();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid correspondence email address.');
      return;
    }

    setError('');
    setIsSubmitted(true);
    showToast(
      'Welcome to The ÉLAN Gazette',
      'Use privilege code ELAN10 for 10% courtesy on your first acquisition.',
      'info'
    );
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0c0b0a] border-b border-[#201d19]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-[#c5a880] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CORRESPONDENCE FROM THE ATELIER</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#faf7f2] font-normal tracking-tight mb-4">
          The ÉLAN Gazette
        </h2>

        <p className="text-sm sm:text-base text-[#ded6c9]/80 font-light max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Subscribers receive private preview access to limited handloom releases, invitations to salon trunk shows, and editorial essays on Indian textile preservation.
        </p>

        {isSubmitted ? (
          <div className="p-6 bg-[#141210] border border-[#c5a880]/40 max-w-md mx-auto text-center space-y-2 animate-fade-in">
            <CheckCircle2 className="w-8 h-8 text-[#c5a880] mx-auto" />
            <h3 className="font-serif text-xl text-[#faf7f2]">
              You are now enrolled.
            </h3>
            <p className="text-xs text-[#ded6c9] leading-relaxed">
              We have dispatched your introductory welcome letter. As our courtesy, use privilege code <span className="font-mono text-[#c5a880] font-semibold">ELAN10</span> at checkout for 10% off.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your email address"
                  className="w-full py-3.5 px-4 bg-[#141210] border border-[#2b2721] text-[#faf7f2] placeholder-[#736a5f] text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
                  aria-label="Email Address for Gazette"
                />
              </div>

              <button
                type="submit"
                className="py-3.5 px-7 bg-[#faf7f2] text-[#0c0b0a] hover:bg-[#c5a880] transition-colors text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 group whitespace-nowrap active:scale-[0.98]"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {error && (
              <p className="text-xs text-[#ff9e9e] mt-2.5 text-left">{error}</p>
            )}

            <p className="text-[11px] text-[#736a5f] mt-3 font-light">
              We respect your privacy. No spam; only thoughtful quarterly letters and private invitations.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
