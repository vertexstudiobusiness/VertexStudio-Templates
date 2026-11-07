import React, { useState } from 'react';
import { 
  X, 
  Briefcase, 
  CheckCircle, 
  Send, 
  Sparkles, 
  Building, 
  ShieldCheck, 
  FileText,
  Mail,
  Phone
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

interface CorporateRfpModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackageTitle?: string;
}

export const CorporateRfpModal: React.FC<CorporateRfpModalProps> = ({
  isOpen,
  onClose,
  defaultPackageTitle
}) => {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const [formData, setFormData] = useState({
    companyName: '',
    gstin: '',
    contactName: '',
    jobTitle: '',
    email: '',
    phone: '',
    annualRoomNights: '50 - 150 Nights',
    packageInterest: defaultPackageTitle || 'Corporate Advantage Program (Annual Contract)',
    estimatedMonthlyBudget: '₹5 Lakhs – ₹15 Lakhs',
    specialRequirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    const ref = `CORP-${Math.floor(10000 + Math.random() * 90000)}`;
    setTicketId(ref);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6">
        
        {/* Backdrop */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden z-10 my-4 max-h-[92vh] flex flex-col border border-gold-500/30"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-charcoal-200 bg-navy-950 text-white sticky top-0 z-20">
            <div>
              <div className="flex items-center gap-1.5 text-gold-400 text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Enterprise Hospitality Procurement</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold">
                Corporate Rate Agreement Request (RFP)
              </h2>
            </div>

            <button
              onClick={onClose}
              className="touch-target p-2 rounded-full hover:bg-navy-800 text-charcoal-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form Content */}
          <div className="overflow-y-auto p-6 sm:p-8 flex-1">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-950">
                  Corporate Tariff Agreement Initialized
                </h3>
                <p className="text-sm text-charcoal-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.contactName}</strong>. Our Director of Corporate Sales will reach out to schedule an executive rate presentation for <strong>{formData.companyName}</strong> within 2 business hours.
                </p>
                <div className="bg-charcoal-50 p-4 rounded-2xl border border-charcoal-200 inline-block font-mono text-sm text-navy-900">
                  Account File ID: <strong className="text-gold-700">{ticketId}</strong>
                </div>
                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className="touch-target px-8 py-3 rounded-xl bg-navy-900 hover:bg-navy-850 text-white font-bold text-sm"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="p-3.5 rounded-2xl bg-gold-50/60 border border-gold-200 text-xs text-gold-950">
                  <strong>Guaranteed Enterprise Perks:</strong> Fixed annual room rate slabs, guaranteed 4 PM checkout, direct company credit lines, and dedicated key account managers.
                </div>

                {/* Company & GST */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Company / Organization Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Google India Pvt Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                      className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:bg-white focus:border-gold-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Company GSTIN (For ITC Tax Credit)
                    </label>
                    <input
                      type="text"
                      placeholder="07AAAAA0000A1Z5"
                      value={formData.gstin}
                      onChange={(e) => setFormData(prev => ({ ...prev, gstin: e.target.value.toUpperCase() }))}
                      className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm uppercase font-mono focus:bg-white focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Contact Person Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Lead Contact Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pooja Krishnamurthy"
                      value={formData.contactName}
                      onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                      className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:bg-white focus:border-gold-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Job Designation / Role <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Head of Travel / VP Operations"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData(prev => ({ ...prev, jobTitle: e.target.value }))}
                      className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:bg-white focus:border-gold-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Corporate Work Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="pooja@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:bg-white focus:border-gold-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Mobile / Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 99000 11223"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:bg-white focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Annual Volume & Preferred Contract Structure */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Estimated Annual Room Nights
                    </label>
                    <select
                      value={formData.annualRoomNights}
                      onChange={(e) => setFormData(prev => ({ ...prev, annualRoomNights: e.target.value }))}
                      className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:bg-white focus:border-gold-500 focus:outline-none"
                    >
                      <option>25 - 50 Nights</option>
                      <option>50 - 150 Nights</option>
                      <option>150 - 300 Nights</option>
                      <option>300+ Nights (Enterprise Global Tier)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Program Category of Interest
                    </label>
                    <select
                      value={formData.packageInterest}
                      onChange={(e) => setFormData(prev => ({ ...prev, packageInterest: e.target.value }))}
                      className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:bg-white focus:border-gold-500 focus:outline-none"
                    >
                      <option>Corporate Advantage Program (Annual Contract)</option>
                      <option>Executive Extended Stay (14+ Nights)</option>
                      <option>Day-Use Transit Package (Flight Layovers)</option>
                      <option>Quarterly Leadership MICE Block</option>
                    </select>
                  </div>
                </div>

                {/* Special terms */}
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Special Bilateral Terms or Billing Requirements
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. 30-day corporate credit payment terms, dedicated airport shuttle requirements..."
                    value={formData.specialRequirements}
                    onChange={(e) => setFormData(prev => ({ ...prev, specialRequirements: e.target.value }))}
                    className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl p-3 text-xs sm:text-sm focus:bg-white focus:border-gold-500 focus:outline-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full touch-target py-3.5 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 text-navy-950 font-bold text-sm sm:text-base shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Corporate Tariff Request</span>
                  </button>
                  <p className="text-[11px] text-charcoal-500 text-center mt-2">
                    Direct confidential handling by Grand Meridian Aerocity Key Accounts Division.
                  </p>
                </div>

              </form>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
