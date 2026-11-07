import React, { useState } from 'react';
import { Coffee, MessageCircle, Send, CheckCircle2, Heart, ArrowUp } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';

// Clean SVG for Instagram
const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const { cafeConfig, setIsConfigModalOpen } = useCart();
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const instagramPosts = [
    {
      id: 'ig-1',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400&auto=format&fit=crop',
      caption: 'The morning V60 bloom ritual. #SpecialtyCoffee'
    },
    {
      id: 'ig-2',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=400&auto=format&fit=crop',
      caption: 'Velvety cortado in local stoneware. #BrewAndCo'
    },
    {
      id: 'ig-3',
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=400&auto=format&fit=crop',
      caption: '24hr Kyoto cold brew dripping drop-by-drop.'
    },
    {
      id: 'ig-4',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400&auto=format&fit=crop',
      caption: 'Twice-baked almond croissants fresh at 7 AM.'
    },
    {
      id: 'ig-5',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=400&auto=format&fit=crop',
      caption: 'Roasting fresh nano-lots from Chikmagalur.'
    },
    {
      id: 'ig-6',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=400&auto=format&fit=crop',
      caption: 'Afternoon light over the walnut tables.'
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      setNewsletterStatus('error');
      return;
    }

    setErrorMessage('');
    setNewsletterStatus('loading');

    setTimeout(() => {
      setNewsletterStatus('success');
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.9 },
          colors: ['#c67d3b', '#db8262', '#f7f4ec']
        });
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-coffee-950 text-ivory-100 relative overflow-hidden border-t border-coffee-800">
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      {/* Instagram Grid Header */}
      <div className="border-b border-coffee-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5">
              <InstagramIcon className="w-5 h-5 text-caramel-400" />
              <span className="font-serif font-bold text-base sm:text-lg text-ivory-50">
                Follow Along On Instagram
              </span>
              <span className="text-xs text-coffee-300 font-mono">
                {cafeConfig.instagramHandle}
              </span>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-caramel-400 hover:text-caramel-300 font-semibold uppercase tracking-wider flex items-center gap-1"
            >
              <span>Explore Feed</span>
              <span>→</span>
            </a>
          </div>

          {/* 6 Photos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden bg-coffee-900 border border-coffee-800 shadow"
                aria-label={`View Instagram post: ${post.caption}`}
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-coffee-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                  <p className="text-[11px] text-ivory-100 line-clamp-3 font-light">
                    {post.caption}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-caramel-500 to-copper-600 flex items-center justify-center p-0.5">
                <div className="w-full h-full rounded-full bg-coffee-900 flex items-center justify-center text-caramel-400">
                  <Coffee className="w-4 h-4" />
                </div>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-ivory-50">
                {cafeConfig.cafeName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-coffee-300 leading-relaxed font-light">
              An unhurried specialty coffee roastery and café dedicated to high-altitude Indian micro-lots, scientific extraction, and thoughtful hospitality.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${cafeConfig.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-coffee-900 hover:bg-coffee-850 border border-coffee-800 text-emerald-400 hover:text-emerald-300 transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-coffee-900 hover:bg-coffee-850 border border-coffee-800 text-caramel-400 hover:text-caramel-300 transition-colors"
                aria-label="Follow on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setIsConfigModalOpen(true)}
                className="px-3 py-2 rounded-xl bg-coffee-900 hover:bg-coffee-850 border border-coffee-800 text-xs text-coffee-400 hover:text-caramel-400 transition-colors"
              >
                Config Settings
              </button>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm text-ivory-50 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-coffee-300">
              <li><a href="#hero" className="hover:text-caramel-400 transition-colors">Home</a></li>
              <li><a href="#signature" className="hover:text-caramel-400 transition-colors">Our Coffee</a></li>
              <li><a href="#craftsmanship" className="hover:text-caramel-400 transition-colors">Craftsmanship</a></li>
              <li><a href="#menu" className="hover:text-caramel-400 transition-colors">Café Menu</a></li>
              <li><a href="#beans" className="hover:text-caramel-400 transition-colors">Beans & Gear</a></li>
              <li><a href="#gallery" className="hover:text-caramel-400 transition-colors">The Space</a></li>
              <li><a href="#visit" className="hover:text-caramel-400 transition-colors">Visit & Reserve</a></li>
            </ul>
          </div>

          {/* Visit Snapshot Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm text-ivory-50 uppercase tracking-wider">
              Hours & Space
            </h4>
            <div className="space-y-2 text-xs text-coffee-300">
              <p>
                <span className="text-ivory-100 font-medium block">Mon – Fri</span>
                7:30 AM – 10:30 PM
              </p>
              <p>
                <span className="text-ivory-100 font-medium block">Sat – Sun</span>
                7:00 AM – 11:00 PM
              </p>
              <p className="pt-1 text-caramel-400 font-mono text-[11px]">
                Cupping: Sat 11:00 AM
              </p>
            </div>
          </div>

          {/* Newsletter Subscription Col (Complies with Modern Web Guidance) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm text-ivory-50 uppercase tracking-wider">
              The Roaster's Dispatch
            </h4>
            <p className="text-xs text-coffee-300 font-light leading-relaxed">
              Receive cupping invitations, announcements of limited harvest nano-lots, and home brewing recipes once a month. No spam, ever.
            </p>

            {newsletterStatus === 'success' ? (
              <div className="p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center gap-2.5 text-xs text-emerald-300">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>You're subscribed! Welcome to the Brew & Co. community.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} noValidate className="space-y-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email Address for Roaster's Dispatch
                </label>
                <div className="flex gap-2">
                  <input
                    id="newsletter-email"
                    name="newsletterEmail"
                    type="email"
                    required
                    autoComplete="email"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (newsletterStatus === 'error') setNewsletterStatus('idle');
                    }}
                    placeholder="Enter your email..."
                    className="flex-1 min-h-[46px] px-3.5 rounded-xl bg-coffee-900 border border-coffee-750 text-xs text-ivory-50 placeholder:text-coffee-500 focus:outline-none focus:border-caramel-500"
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === 'loading'}
                    className="min-h-[46px] px-4 rounded-xl bg-gradient-to-r from-caramel-500 to-copper-500 hover:brightness-110 active:scale-95 text-coffee-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all disabled:opacity-60 shadow"
                    aria-label="Subscribe to newsletter"
                  >
                    <span>{newsletterStatus === 'loading' ? 'Joining...' : 'Subscribe'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {errorMessage && (
                  <span className="text-[11px] text-red-400 block">{errorMessage}</span>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Demo Notice Banner & Copyright */}
        <div className="mt-14 pt-8 border-t border-coffee-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-coffee-400 font-light">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {cafeConfig.cafeName}. All rights reserved.</span>
            <span className="hidden sm:inline text-coffee-700">•</span>
            <span className="text-coffee-400 bg-coffee-900 px-2 py-0.5 rounded text-[11px]">
              Demo Specialty Coffee Template (Fictional Indian Café)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-coffee-400">
              Crafted with <Heart className="w-3 h-3 text-copper-400 fill-copper-400" /> for coffee lovers
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-coffee-900 hover:bg-coffee-850 text-coffee-300 hover:text-caramel-400 border border-coffee-800 transition-colors"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
