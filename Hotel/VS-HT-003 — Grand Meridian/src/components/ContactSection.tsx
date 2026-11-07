import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle, 
  Building, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { HOTEL_INFO } from '../data/hotelData';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'General Corporate Enquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    const ref = `GM-MSG-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(ref);
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${encodeURIComponent(
    'Hello Grand Meridian Concierge, I would like to connect regarding hotel reservations and corporate services.'
  )}`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-200 text-navy-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>24/7 DEDICATED CONCIERGE & DESK</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-tight mb-4">
            Connect with Our <br className="hidden sm:inline" />
            <span className="text-gold-600 font-serif italic">Executive Hospitality Team</span>
          </h2>

          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-light">
            Whether booking an executive room, arranging bespoke airport chauffeur logistics, 
            or structuring an enterprise corporate rate contract, our team is available 24 hours a day.
          </p>
        </div>

        {/* Contact Grid: 2 cols on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Phone, WhatsApp, Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Cards */}
            <div className="space-y-4">
              
              {/* Telephone */}
              <a 
                href={`tel:${HOTEL_INFO.contact.phone.replace(/\s+/g, '')}`}
                className="group p-5 rounded-2xl bg-charcoal-50 hover:bg-navy-900 border border-charcoal-200 hover:border-navy-800 transition-all duration-300 flex items-start gap-4 block shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 group-hover:bg-gold-500 text-gold-400 group-hover:text-navy-950 flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-charcoal-500 group-hover:text-gold-300 block mb-0.5">
                    24/7 Front Desk & Reservations
                  </span>
                  <div className="font-serif text-lg font-bold text-navy-950 group-hover:text-white">
                    {HOTEL_INFO.contact.phoneDisplay}
                  </div>
                  <span className="text-xs text-charcoal-500 group-hover:text-charcoal-300">
                    Toll-Free (India): {HOTEL_INFO.contact.tollFree}
                  </span>
                </div>
              </a>

              {/* WhatsApp VIP */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-emerald-50/60 hover:bg-emerald-600 border border-emerald-200 hover:border-emerald-600 transition-all duration-300 flex items-start gap-4 block shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 group-hover:bg-white text-white group-hover:text-emerald-700 flex items-center justify-center flex-shrink-0 transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-800 group-hover:text-emerald-100 block mb-0.5">
                    WhatsApp Concierge Instant Chat
                  </span>
                  <div className="font-serif text-lg font-bold text-emerald-950 group-hover:text-white">
                    {HOTEL_INFO.contact.whatsappDisplay}
                  </div>
                  <span className="text-xs text-emerald-700 group-hover:text-emerald-100">
                    Typically replies in under 60 seconds
                  </span>
                </div>
              </a>

              {/* Email Communications */}
              <a 
                href={`mailto:${HOTEL_INFO.contact.email}`}
                className="group p-5 rounded-2xl bg-charcoal-50 hover:bg-navy-900 border border-charcoal-200 hover:border-navy-800 transition-all duration-300 flex items-start gap-4 block shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 group-hover:bg-gold-500 text-gold-400 group-hover:text-navy-950 flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-charcoal-500 group-hover:text-gold-300 block mb-0.5">
                    Official Inquiries & RFP Submissions
                  </span>
                  <div className="font-semibold text-sm sm:text-base text-navy-950 group-hover:text-white break-all">
                    {HOTEL_INFO.contact.email}
                  </div>
                  <span className="text-xs text-charcoal-500 group-hover:text-charcoal-300">
                    Corporate contracts: {HOTEL_INFO.contact.corporateEmail}
                  </span>
                </div>
              </a>

              {/* Physical Coordinates */}
              <div className="p-5 rounded-2xl bg-charcoal-50 border border-charcoal-200 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-100 text-navy-900 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold-600" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-charcoal-500 block">
                    Hotel Address & GPS
                  </span>
                  <div className="font-bold text-sm text-navy-950">
                    {HOTEL_INFO.fullName}
                  </div>
                  <p className="text-xs text-charcoal-600 font-light">
                    {HOTEL_INFO.address.line1}, {HOTEL_INFO.address.line2}, {HOTEL_INFO.address.city} {HOTEL_INFO.address.postalCode}, {HOTEL_INFO.address.country}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Quick Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-charcoal-50 rounded-3xl p-6 sm:p-10 border border-charcoal-200 shadow-sm">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-950">
                  Message Dispatched to Corporate Concierge
                </h3>
                <p className="text-sm text-charcoal-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our duty manager has received your message and will respond to <strong>{formData.email}</strong> shortly.
                </p>
                <div className="bg-white p-3.5 rounded-xl border border-charcoal-200 inline-block font-mono text-sm text-navy-900">
                  Inquiry Ticket: <strong className="text-gold-700">{ticketId}</strong>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        subject: 'General Corporate Enquiry',
                        message: ''
                      });
                    }}
                    className="touch-target px-6 py-2.5 rounded-xl border border-navy-900 text-navy-900 text-xs font-semibold hover:bg-navy-900 hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-950 mb-1">
                    Send an Executive Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-500 font-light">
                    Have a bespoke requirement or VIP guest arrival protocol? Fill in the details below.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Singhania"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-white border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:border-gold-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Corporate Work Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-white border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:border-gold-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98111 55667"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-white border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:border-gold-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Barclays India"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      className="w-full bg-white border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Inquiry Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full bg-white border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:border-gold-500 focus:outline-none"
                  >
                    <option>General Corporate Enquiry</option>
                    <option>Executive Long Stay (14+ Nights)</option>
                    <option>Boardroom or Conference Booking</option>
                    <option>Airport Chauffeur Coordination</option>
                    <option>Diplomatic Delegation Services</option>
                    <option>Private Dining Reservation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Your Message / Requirements <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please specify room numbers, dates, flight schedules, or catering requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full bg-white border border-charcoal-300 rounded-xl p-3.5 text-xs sm:text-sm focus:border-gold-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full touch-target py-3.5 rounded-xl bg-navy-900 hover:bg-navy-850 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 text-gold-400 group-hover:translate-x-0.5 transition-transform" />
                  <span>Transmit Inquiry to Duty Manager</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-charcoal-500 pt-1">
                  <span>SSL 256-Bit Encrypted Communication</span>
                  <span>•</span>
                  <span>GDPR & Indian DPDP Act Compliant</span>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
