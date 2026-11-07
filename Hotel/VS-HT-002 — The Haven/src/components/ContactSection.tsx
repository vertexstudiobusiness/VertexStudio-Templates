import React, { useState } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, Mail, MessageSquare, MapPin, Send, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 lg:py-36 bg-haven-charcoal text-haven-ivory relative overflow-hidden"
      aria-label="Contact and Concierge"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Concierge Inquiries */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <span className="h-[1px] w-8 sm:w-12 bg-haven-stone/40" />
                <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-haven-sand font-medium">
                  Direct Inquiries & Concierge
                </span>
              </div>
              <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-haven-ivory font-light tracking-tight">
                Begin Your Journey
              </h2>
              <p className="mt-4 text-xs xs:text-sm sm:text-base text-haven-stone-light/80 leading-relaxed font-sans max-w-xl">
                Whether seeking private residence buyouts, tailored culinary immersions, or simply advice on arrival routes, our resident hosts await your message.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Card */}
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="p-5 bg-white/5 border border-white/10 hover:border-haven-sand/50 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <Phone className="w-5 h-5 text-haven-sand mb-2" />
                  <span className="text-[10px] uppercase font-mono tracking-wider text-haven-stone-light block">
                    Concierge Line
                  </span>
                  <span className="font-serif text-lg text-haven-ivory group-hover:text-haven-sand transition-colors">
                    {HOTEL_INFO.phone}
                  </span>
                </div>
                <span className="text-[10px] text-haven-stone-light/60 mt-3">
                  07:00 – 23:00 IST Daily
                </span>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/919876543210?text=Hello%20The%20Haven%20Concierge"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white/5 border border-white/10 hover:border-haven-sand/50 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <MessageSquare className="w-5 h-5 text-haven-sand mb-2" />
                  <span className="text-[10px] uppercase font-mono tracking-wider text-haven-stone-light block">
                    Instant WhatsApp
                  </span>
                  <span className="font-serif text-lg text-haven-ivory group-hover:text-haven-sand transition-colors">
                    {HOTEL_INFO.whatsapp}
                  </span>
                </div>
                <span className="text-[10px] text-haven-stone-light/60 mt-3">
                  Fastest for room queries
                </span>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${HOTEL_INFO.email}`}
                className="p-5 bg-white/5 border border-white/10 hover:border-haven-sand/50 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <Mail className="w-5 h-5 text-haven-sand mb-2" />
                  <span className="text-[10px] uppercase font-mono tracking-wider text-haven-stone-light block">
                    Electronic Mail
                  </span>
                  <span className="font-serif text-base sm:text-lg text-haven-ivory group-hover:text-haven-sand transition-colors truncate block">
                    {HOTEL_INFO.email}
                  </span>
                </div>
                <span className="text-[10px] text-haven-stone-light/60 mt-3">
                  For private events & buyouts
                </span>
              </a>

              {/* Physical Sanctuary Location Card */}
              <div className="p-5 bg-white/5 border border-white/10 flex flex-col justify-between">
                <div>
                  <MapPin className="w-5 h-5 text-haven-sand mb-2" />
                  <span className="text-[10px] uppercase font-mono tracking-wider text-haven-stone-light block">
                    Sanctuary Address
                  </span>
                  <span className="font-serif text-sm text-haven-ivory block">
                    Village Morwali, Post Gogunda, Aravalli Foothills, Udaipur 313001, Rajasthan
                  </span>
                </div>
                <span className="text-[10px] text-haven-stone-light/60 mt-3 font-mono">
                  {HOTEL_INFO.coordinates}
                </span>
              </div>
            </div>

            {/* Quick Action Button */}
            <div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="h-12 px-8 bg-haven-ivory text-haven-charcoal text-xs tracking-[0.2em] uppercase font-medium hover:bg-white transition-all shadow-xl"
              >
                Check Real-Time Availability
              </button>
            </div>
          </div>

          {/* Right Column: The Haven Chronicle Newsletter */}
          <div className="lg:col-span-5 bg-white/5 border border-white/15 p-6 sm:p-8 space-y-6">
            <span className="text-[10px] tracking-[0.25em] uppercase font-mono text-haven-sand block">
              Quarterly Dispatches
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-haven-ivory font-light leading-snug">
              The Haven Chronicle
            </h3>
            <p className="text-xs sm:text-[13px] text-haven-stone-light/80 leading-relaxed font-sans">
              A private quarterly dispatch detailing architectural experiments, wild foraging notes, upcoming resident masterclasses, and unhurried reflections from the Rajasthan hills.
            </p>

            {newsletterSubscribed ? (
              <div className="p-4 bg-haven-olive/20 border border-haven-olive/40 flex items-center space-x-3 text-xs text-haven-sand">
                <CheckCircle2 className="w-5 h-5 text-haven-sand shrink-0" />
                <span>You are now subscribed to The Haven Chronicle. Welcome to our circle of quietude.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full h-12 px-4 bg-white/10 border border-white/20 text-xs sm:text-sm text-haven-ivory placeholder-haven-stone focus:outline-none focus:border-haven-sand transition-colors font-sans"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-11 bg-haven-sand text-haven-charcoal hover:bg-white text-xs tracking-[0.2em] uppercase font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Subscribe to Dispatches</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-4 border-t border-white/10 text-[11px] text-haven-stone-light/60">
              We respect your privacy. No spam. You may cancel at any moment.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
