import React, { useState } from 'react';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  Smartphone, 
  Building, 
  Banknote, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  PackageCheck, 
  MessageCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useShop } from '../../context/ShopContext';
import { CheckoutForm } from '../../types';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartSubtotal,
    cartDiscount,
    cartShipping,
    cartTotal,
    formatPrice,
    completeOrder,
    lastOrder,
    setActiveView
  } = useShop();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [formData, setFormData] = useState<CheckoutForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    state: 'Maharashtra',
    pincode: '',
    paymentMethod: 'upi',
    deliveryOption: 'standard',
    notes: ''
  });

  const [confirmedOrderId, setConfirmedOrderId] = useState<string | null>(null);

  if (!isCheckoutOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.firstName || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.pincode) {
        alert('Please fill in the required delivery fields');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      // Complete Order
      const newId = completeOrder(formData);
      setConfirmedOrderId(newId);
      setStep(4);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4A59A', '#3D2B1F', '#B77B6E', '#F7EBE8']
        });
      } catch (err) {
        console.warn('Confetti error', err);
      }
    }
  };

  const handleFinish = () => {
    setIsCheckoutOpen(false);
    setStep(1);
    setActiveView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const indianStates = [
    'Maharashtra', 'Delhi NCR', 'Karnataka', 'Tamil Nadu', 'Telangana',
    'Gujarat', 'Rajasthan', 'West Bengal', 'Uttar Pradesh', 'Kerala',
    'Punjab', 'Haryana', 'Madhya Pradesh', 'Goa'
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl bg-[#FAF8F5] text-[#261B14] rounded-3xl shadow-2xl border border-[#D8CFBE] overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-[#D8CFBE]/60 bg-[#F6F3EE]">
          <div className="flex items-center gap-3">
            <span className="font-serif text-xl sm:text-2xl font-normal text-[#3D2B1F]">
              LUNA Boutique Checkout
            </span>
            <span className="bg-[#F7EBE8] text-[#B77B6E] text-[10px] font-semibold px-2 py-0.5 rounded-full border border-[#D4A59A]/40 hidden sm:inline-block">
              Demo Mode
            </span>
          </div>

          {step !== 4 && (
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="p-1.5 text-[#5A4232] hover:text-[#261B14] hover:bg-[#EFE9E0] rounded-full transition-colors"
              aria-label="Close checkout"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Demo Reassurance Banner */}
        {step !== 4 && (
          <div className="bg-[#FAF8F5] px-4 py-2 border-b border-[#D8CFBE]/40 text-center text-[11px] text-[#5A4232] flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B77B6E]" />
            <span>This is a simulated demo checkout. No actual credit card charge will be made.</span>
          </div>
        )}

        {/* Stepper Tabs (Steps 1 to 3) */}
        {step !== 4 && (
          <div className="grid grid-cols-3 border-b border-[#D8CFBE]/60 text-center text-xs bg-[#F6F3EE]/50 font-medium">
            <div className={`py-3 border-b-2 transition-colors ${step === 1 ? 'border-[#3D2B1F] text-[#3D2B1F] font-semibold' : 'border-transparent text-[#5A4232]'}`}>
              1. Delivery Address
            </div>
            <div className={`py-3 border-b-2 transition-colors ${step === 2 ? 'border-[#3D2B1F] text-[#3D2B1F] font-semibold' : 'border-transparent text-[#5A4232]'}`}>
              2. Shipping Speed
            </div>
            <div className={`py-3 border-b-2 transition-colors ${step === 3 ? 'border-[#3D2B1F] text-[#3D2B1F] font-semibold' : 'border-transparent text-[#5A4232]'}`}>
              3. Payment & Confirm
            </div>
          </div>
        )}

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7">
          {/* STEP 1: Address */}
          {step === 1 && (
            <form onSubmit={handleNextStep} id="checkout-form" className="space-y-4">
              <h3 className="font-serif text-lg font-semibold text-[#261B14] mb-2">
                Recipient Contact & Delivery Address
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#3D2B1F] block mb-1">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="e.g. Tara"
                    className="w-full bg-white border border-[#D8CFBE] rounded-xl px-3.5 py-2.5 text-xs text-[#261B14] focus:outline-none focus:border-[#3D2B1F]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#3D2B1F] block mb-1">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="e.g. Sharma"
                    className="w-full bg-white border border-[#D8CFBE] rounded-xl px-3.5 py-2.5 text-xs text-[#261B14] focus:outline-none focus:border-[#3D2B1F]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#3D2B1F] block mb-1">Email Address (for order tracking) *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tara.sharma@example.com"
                    className="w-full bg-white border border-[#D8CFBE] rounded-xl px-3.5 py-2.5 text-xs text-[#261B14] focus:outline-none focus:border-[#3D2B1F]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#3D2B1F] block mb-1">Contact Mobile (+91) *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="98765 43210"
                    className="w-full bg-white border border-[#D8CFBE] rounded-xl px-3.5 py-2.5 text-xs text-[#261B14] focus:outline-none focus:border-[#3D2B1F]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#3D2B1F] block mb-1">Street Address & House / Villa No. *</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="e.g. 402, Sea Green Apartments, Perry Cross Road"
                  className="w-full bg-white border border-[#D8CFBE] rounded-xl px-3.5 py-2.5 text-xs text-[#261B14] focus:outline-none focus:border-[#3D2B1F]"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#3D2B1F] block mb-1">City *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Mumbai"
                    className="w-full bg-white border border-[#D8CFBE] rounded-xl px-3.5 py-2.5 text-xs text-[#261B14] focus:outline-none focus:border-[#3D2B1F]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#3D2B1F] block mb-1">State *</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-[#D8CFBE] rounded-xl px-3.5 py-2.5 text-xs text-[#261B14] focus:outline-none focus:border-[#3D2B1F]"
                  >
                    {indianStates.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#3D2B1F] block mb-1">Pincode *</label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="400050"
                    maxLength={6}
                    className="w-full bg-white border border-[#D8CFBE] rounded-xl px-3.5 py-2.5 text-xs text-[#261B14] focus:outline-none focus:border-[#3D2B1F]"
                  />
                </div>
              </div>
            </form>
          )}

          {/* STEP 2: Shipping Method */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-semibold text-[#261B14] mb-2">
                Select Delivery Mode
              </h3>

              <div
                onClick={() => setFormData((prev) => ({ ...prev, deliveryOption: 'standard' }))}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                  formData.deliveryOption === 'standard'
                    ? 'border-[#3D2B1F] bg-[#F6F3EE]'
                    : 'border-[#D8CFBE] bg-white hover:border-[#3D2B1F]/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#3D2B1F]">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#261B14]">
                      Complimentary Standard Express
                    </h4>
                    <p className="text-[11px] text-[#5A4232]">
                      Delivery in 3 to 5 business days across India
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#1E8E42]">
                  {cartShipping === 0 ? 'FREE' : formatPrice(cartShipping)}
                </span>
              </div>

              <div
                onClick={() => setFormData((prev) => ({ ...prev, deliveryOption: 'express' }))}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                  formData.deliveryOption === 'express'
                    ? 'border-[#3D2B1F] bg-[#F6F3EE]'
                    : 'border-[#D8CFBE] bg-white hover:border-[#3D2B1F]/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#B77B6E]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#261B14]">
                      Boutique Priority Metro Courier
                    </h4>
                    <p className="text-[11px] text-[#5A4232]">
                      Priority handoff within 24–48 hours in metro pin codes
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#3D2B1F]">
                  ₹350
                </span>
              </div>
            </div>
          )}

          {/* STEP 3: Payment Method */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-semibold text-[#261B14] mb-2">
                Select Demo Payment Mode
              </h3>

              <div className="space-y-2.5">
                {/* UPI Option */}
                <div
                  onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: 'upi' }))}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                    formData.paymentMethod === 'upi'
                      ? 'border-[#3D2B1F] bg-[#F6F3EE]'
                      : 'border-[#D8CFBE] bg-white hover:border-[#3D2B1F]/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-[#B77B6E]" />
                    <div>
                      <h4 className="text-xs font-semibold text-[#261B14]">
                        UPI (Instant QR / Google Pay / PhonePe / Paytm)
                      </h4>
                      <p className="text-[11px] text-[#5A4232]">
                        Instant zero-fee payment via any UPI app
                      </p>
                    </div>
                  </div>
                  {formData.paymentMethod === 'upi' && <Check className="w-4 h-4 text-[#3D2B1F]" />}
                </div>

                {/* Credit / Debit Card */}
                <div
                  onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: 'card' }))}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                    formData.paymentMethod === 'card'
                      ? 'border-[#3D2B1F] bg-[#F6F3EE]'
                      : 'border-[#D8CFBE] bg-white hover:border-[#3D2B1F]/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-[#B77B6E]" />
                    <div>
                      <h4 className="text-xs font-semibold text-[#261B14]">
                        Credit / Debit Card (Visa, MasterCard, RuPay, Amex)
                      </h4>
                      <p className="text-[11px] text-[#5A4232]">
                        256-Bit encrypted simulated payment gateway
                      </p>
                    </div>
                  </div>
                  {formData.paymentMethod === 'card' && <Check className="w-4 h-4 text-[#3D2B1F]" />}
                </div>

                {/* Netbanking */}
                <div
                  onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: 'netbanking' }))}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                    formData.paymentMethod === 'netbanking'
                      ? 'border-[#3D2B1F] bg-[#F6F3EE]'
                      : 'border-[#D8CFBE] bg-white hover:border-[#3D2B1F]/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-[#B77B6E]" />
                    <div>
                      <h4 className="text-xs font-semibold text-[#261B14]">
                        Netbanking (All Major Indian Banks)
                      </h4>
                      <p className="text-[11px] text-[#5A4232]">
                        HDFC, ICICI, SBI, Axis, Kotak Mahindra
                      </p>
                    </div>
                  </div>
                  {formData.paymentMethod === 'netbanking' && <Check className="w-4 h-4 text-[#3D2B1F]" />}
                </div>

                {/* Cash on Delivery */}
                <div
                  onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: 'cod' }))}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                    formData.paymentMethod === 'cod'
                      ? 'border-[#3D2B1F] bg-[#F6F3EE]'
                      : 'border-[#D8CFBE] bg-white hover:border-[#3D2B1F]/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Banknote className="w-5 h-5 text-[#B77B6E]" />
                    <div>
                      <h4 className="text-xs font-semibold text-[#261B14]">
                        Cash on Delivery (COD)
                      </h4>
                      <p className="text-[11px] text-[#5A4232]">
                        Pay with cash or UPI scan upon courier arrival
                      </p>
                    </div>
                  </div>
                  {formData.paymentMethod === 'cod' && <Check className="w-4 h-4 text-[#3D2B1F]" />}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Order Confirmation Celebration! */}
          {step === 4 && (
            <div className="text-center py-6 sm:py-8 max-w-lg mx-auto space-y-5 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#E8F8EE] text-[#1E8E42] flex items-center justify-center mx-auto shadow-inner">
                <PackageCheck className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#B77B6E] block mb-1">
                  Thank You for Patronising LUNA Collective
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#261B14]">
                  Order Placed Successfully!
                </h3>
                <p className="text-xs text-[#5A4232] mt-1">
                  Order Reference: <strong className="font-mono text-[#3D2B1F]">{confirmedOrderId}</strong>
                </p>
              </div>

              {/* Order Tracking Progress Card */}
              <div className="bg-[#F6F3EE] rounded-2xl p-4 sm:p-5 text-left border border-[#D8CFBE]/70 space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-[#D8CFBE]/50">
                  <span className="font-semibold text-[#3D2B1F]">Estimated Delivery</span>
                  <span className="text-[#1E8E42] font-semibold">3 to 5 Business Days</span>
                </div>

                <div className="text-xs text-[#5A4232] space-y-1">
                  <p><strong className="text-[#261B14]">Recipient:</strong> {formData.firstName} {formData.lastName}</p>
                  <p><strong className="text-[#261B14]">Address:</strong> {formData.address}, {formData.city}, {formData.state} - {formData.pincode}</p>
                  <p><strong className="text-[#261B14]">Payment Mode:</strong> {formData.paymentMethod.toUpperCase()} (Demo Verified)</p>
                </div>

                {/* WhatsApp Tracking Notification Reassurance */}
                <div className="mt-3 pt-3 border-t border-[#D8CFBE]/50 flex items-center justify-between bg-white p-3 rounded-xl">
                  <div className="flex items-center gap-2 text-xs text-[#1E8E42]">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp updates sent to +91 {formData.phone || '9876543210'}</span>
                  </div>
                  <Check className="w-4 h-4 text-[#1E8E42]" />
                </div>
              </div>

              <button
                onClick={handleFinish}
                className="w-full bg-[#3D2B1F] hover:bg-[#5A4232] text-[#FAF8F5] py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-colors shadow-md"
              >
                Continue Exploring Collections
              </button>
            </div>
          )}
        </div>

        {/* Footer Actions (Steps 1 to 3) */}
        {step !== 4 && (
          <div className="p-4 sm:p-5 border-t border-[#D8CFBE]/60 bg-[#F6F3EE] flex items-center justify-between gap-3">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => (s - 1) as any)}
                className="px-4 py-2 text-xs font-semibold text-[#5A4232] hover:text-[#261B14] flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={handleNextStep}
              className="bg-[#3D2B1F] hover:bg-[#5A4232] text-[#FAF8F5] px-6 py-3 rounded-full text-xs font-semibold tracking-wider transition-all shadow-md flex items-center gap-2 active:scale-98"
            >
              <span>
                {step === 3 ? `Place Order · ${formatPrice(cartTotal)}` : 'Continue'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
