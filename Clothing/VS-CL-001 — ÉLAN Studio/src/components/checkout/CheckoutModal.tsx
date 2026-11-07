import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CreditCard,
  QrCode,
  Building,
  Banknote,
  ArrowRight,
  Gift,
  AlertCircle,
  Truck
} from 'lucide-react';
import type { CheckoutShipping, OrderRecord } from '../../types';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartSubtotal,
    discountAmount,
    shippingFee,
    cartTotal,
    clearCart,
    setLastOrder,
    setIsOrderSuccessOpen,
    promoCode
  } = useShop();

  const [formData, setFormData] = useState<CheckoutShipping>({
    fullName: 'Rohan Mehra',
    email: 'rohan.mehra@example.com',
    phone: '+91 98201 23456',
    addressLine1: 'B-14, Ground Floor, Golf Links',
    addressLine2: 'Near Khan Market',
    city: 'New Delhi',
    state: 'Delhi',
    postalCode: '110003',
    giftNote: '',
    isGiftBox: true
  });

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking' | 'cod'>('upi');
  const [upiId, setUpiId] = useState('rohan@okaxis');
  const [cardDetails, setCardDetails] = useState({
    number: '•••• •••• •••• 4242',
    name: 'ROHAN MEHRA',
    expiry: '08/29',
    cvv: '•••'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Lock body scroll
  useEffect(() => {
    if (isCheckoutOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCheckoutOpen]);

  if (!isCheckoutOpen) return null;

  const handleInputChange = (field: keyof CheckoutShipping, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (validationError) setValidationError('');
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.addressLine1.trim() || !formData.city.trim() || !formData.postalCode.trim()) {
      setValidationError('Please complete all mandatory shipping and contact coordinates.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const randomRef = Math.floor(1000 + Math.random() * 9000);
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 3);
      const estimatedDelivery = deliveryDate.toLocaleDateString('en-IN', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });

      const newOrder: OrderRecord = {
        orderId: `ELAN-2026-${randomRef}`,
        date: new Date().toISOString(),
        items: [...cart],
        shipping: { ...formData },
        paymentMethod,
        subtotal: cartSubtotal,
        discount: discountAmount,
        shippingFee,
        total: cartTotal,
        estimatedDelivery
      };

      setLastOrder(newOrder);
      clearCart();
      setIsSubmitting(false);
      setIsCheckoutOpen(false);
      setIsOrderSuccessOpen(true);
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[140] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Atelier Checkout"
      >
        {/* Dimmed backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCheckoutOpen(false)}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          className="relative w-full max-w-4xl bg-[#0e0d0b] text-[#faf7f2] border border-[#2b2721] shadow-2xl z-10 max-h-[92vh] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#201d19] bg-[#12100e]">
            <div>
              <span className="font-serif text-2xl tracking-[0.16em] uppercase text-[#faf7f2]">
                ÉLAN
              </span>
              <span className="block text-[8px] uppercase tracking-[0.35em] text-[#c5a880] -mt-0.5">
                SECURE ATELIER CHECKOUT
              </span>
            </div>

            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="w-9 h-9 rounded-full border border-[#2a2620] flex items-center justify-center text-[#ded6c9] hover:text-[#c5a880] hover:border-[#c5a880] transition-colors"
              aria-label="Close checkout"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Demo Mode Notice Banner */}
          <div className="bg-[#1c1712] border-b border-[#4d3820] px-6 py-2.5 flex items-center gap-2.5 text-xs text-[#dfcca6]">
            <AlertCircle className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
            <span>
              <strong>Demo Environment:</strong> You can test order placement safely. No monetary payment will be processed.
            </span>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Shipping & Payment Coordinates */}
              <div className="lg:col-span-7 space-y-6">
                {/* Step 1: Client & Delivery Coordinates */}
                <div>
                  <h3 className="text-xs uppercase tracking-[0.24em] font-semibold text-[#c5a880] mb-3 pb-2 border-b border-[#201d19]">
                    1. Client & Delivery Coordinates
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#948b7e] block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        required
                        className="w-full py-2.5 px-3 bg-[#141210] border border-[#2b2721] text-xs text-[#faf7f2] focus:outline-none focus:border-[#c5a880]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] uppercase tracking-wider text-[#948b7e] block mb-1">
                          Correspondence Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="w-full py-2.5 px-3 bg-[#141210] border border-[#2b2721] text-xs text-[#faf7f2] focus:outline-none focus:border-[#c5a880]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] uppercase tracking-wider text-[#948b7e] block mb-1">
                          Mobile / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                          className="w-full py-2.5 px-3 bg-[#141210] border border-[#2b2721] text-xs text-[#faf7f2] focus:outline-none focus:border-[#c5a880]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#948b7e] block mb-1">
                        Delivery Address *
                      </label>
                      <input
                        type="text"
                        value={formData.addressLine1}
                        onChange={(e) => handleInputChange('addressLine1', e.target.value)}
                        placeholder="House / Apartment / Estate / Street"
                        required
                        className="w-full py-2.5 px-3 bg-[#141210] border border-[#2b2721] text-xs text-[#faf7f2] focus:outline-none focus:border-[#c5a880]"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        value={formData.addressLine2 || ''}
                        onChange={(e) => handleInputChange('addressLine2', e.target.value)}
                        placeholder="Locality / Landmark / Suite (Optional)"
                        className="w-full py-2.5 px-3 bg-[#141210] border border-[#2b2721] text-xs text-[#faf7f2] focus:outline-none focus:border-[#c5a880]"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="text-[11px] uppercase tracking-wider text-[#948b7e] block mb-1">
                          City *
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          required
                          className="w-full py-2.5 px-3 bg-[#141210] border border-[#2b2721] text-xs text-[#faf7f2] focus:outline-none focus:border-[#c5a880]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] uppercase tracking-wider text-[#948b7e] block mb-1">
                          State *
                        </label>
                        <input
                          type="text"
                          value={formData.state}
                          onChange={(e) => handleInputChange('state', e.target.value)}
                          required
                          className="w-full py-2.5 px-3 bg-[#141210] border border-[#2b2721] text-xs text-[#faf7f2] focus:outline-none focus:border-[#c5a880]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] uppercase tracking-wider text-[#948b7e] block mb-1">
                          PIN Code *
                        </label>
                        <input
                          type="text"
                          value={formData.postalCode}
                          onChange={(e) => handleInputChange('postalCode', e.target.value)}
                          required
                          className="w-full py-2.5 px-3 bg-[#141210] border border-[#2b2721] text-xs text-[#faf7f2] focus:outline-none focus:border-[#c5a880]"
                        />
                      </div>
                    </div>

                    {/* Luxury Gift Packaging Option */}
                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 cursor-pointer p-3 bg-[#141210] border border-[#26231e]">
                        <input
                          type="checkbox"
                          checked={formData.isGiftBox}
                          onChange={(e) => handleInputChange('isGiftBox', e.target.checked)}
                          className="mt-0.5 accent-[#c5a880]"
                        />
                        <div className="text-xs">
                          <span className="font-semibold text-[#faf7f2] flex items-center gap-1.5">
                            <Gift className="w-3.5 h-3.5 text-[#c5a880]" />
                            <span>Complimentary Signature Gift Box & Wax-Sealed Note</span>
                          </span>
                          <span className="text-[11px] text-[#948b7e] block mt-0.5">
                            Handmade mulberry box finished with raw silk ribbon and calligraphic note.
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Step 2: Payment Instrument */}
                <div>
                  <h3 className="text-xs uppercase tracking-[0.24em] font-semibold text-[#c5a880] mb-3 pb-2 border-b border-[#201d19]">
                    2. Select Payment Instrument
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('upi')}
                      className={`p-3 border text-center flex flex-col items-center gap-1.5 transition-colors ${
                        paymentMethod === 'upi'
                          ? 'border-[#c5a880] bg-[#c5a880]/15 text-[#faf7f2]'
                          : 'border-[#26231e] bg-[#141210] text-[#948b7e] hover:border-[#38332b]'
                      }`}
                    >
                      <QrCode className="w-4 h-4 text-[#c5a880]" />
                      <span className="text-[10px] uppercase tracking-wider font-semibold">
                        Instant UPI
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 border text-center flex flex-col items-center gap-1.5 transition-colors ${
                        paymentMethod === 'card'
                          ? 'border-[#c5a880] bg-[#c5a880]/15 text-[#faf7f2]'
                          : 'border-[#26231e] bg-[#141210] text-[#948b7e] hover:border-[#38332b]'
                      }`}
                    >
                      <CreditCard className="w-4 h-4 text-[#c5a880]" />
                      <span className="text-[10px] uppercase tracking-wider font-semibold">
                        Luxury Card
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('netbanking')}
                      className={`p-3 border text-center flex flex-col items-center gap-1.5 transition-colors ${
                        paymentMethod === 'netbanking'
                          ? 'border-[#c5a880] bg-[#c5a880]/15 text-[#faf7f2]'
                          : 'border-[#26231e] bg-[#141210] text-[#948b7e] hover:border-[#38332b]'
                      }`}
                    >
                      <Building className="w-4 h-4 text-[#c5a880]" />
                      <span className="text-[10px] uppercase tracking-wider font-semibold">
                        Net Banking
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cod')}
                      className={`p-3 border text-center flex flex-col items-center gap-1.5 transition-colors ${
                        paymentMethod === 'cod'
                          ? 'border-[#c5a880] bg-[#c5a880]/15 text-[#faf7f2]'
                          : 'border-[#26231e] bg-[#141210] text-[#948b7e] hover:border-[#38332b]'
                      }`}
                    >
                      <Banknote className="w-4 h-4 text-[#c5a880]" />
                      <span className="text-[10px] uppercase tracking-wider font-semibold">
                        Pay on Delivery
                      </span>
                    </button>
                  </div>

                  {/* Payment Details Subform */}
                  <div className="p-3.5 bg-[#141210] border border-[#26231e] text-xs">
                    {paymentMethod === 'upi' && (
                      <div className="space-y-2">
                        <span className="text-[#c5a880] font-medium block">
                          Instant UPI via GPay, PhonePe, Paytm or BHIM
                        </span>
                        <input
                          type="text"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          placeholder="yourname@upi"
                          className="w-full py-2 px-3 bg-[#191714] border border-[#2b2721] text-xs text-[#faf7f2]"
                        />
                        <p className="text-[10px] text-[#948b7e]">
                          A verification notification will be approved in your demo test environment.
                        </p>
                      </div>
                    )}

                    {paymentMethod === 'card' && (
                      <div className="space-y-2.5">
                        <input
                          type="text"
                          value={cardDetails.number}
                          onChange={(e) =>
                            setCardDetails({ ...cardDetails, number: e.target.value })
                          }
                          placeholder="Card Number"
                          className="w-full py-2 px-3 bg-[#191714] border border-[#2b2721] text-xs text-[#faf7f2]"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            value={cardDetails.expiry}
                            onChange={(e) =>
                              setCardDetails({ ...cardDetails, expiry: e.target.value })
                            }
                            placeholder="MM/YY"
                            className="py-2 px-3 bg-[#191714] border border-[#2b2721] text-xs text-[#faf7f2]"
                          />
                          <input
                            type="text"
                            value={cardDetails.cvv}
                            onChange={(e) =>
                              setCardDetails({ ...cardDetails, cvv: e.target.value })
                            }
                            placeholder="CVV"
                            className="py-2 px-3 bg-[#191714] border border-[#2b2721] text-xs text-[#faf7f2]"
                          />
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'netbanking' && (
                      <p className="text-[#ded6c9] leading-relaxed">
                        Major Indian Banks available: HDFC Bank, ICICI Bank, State Bank of India, Axis Bank, Kotak Mahindra Bank. Instant secure OTP authorization.
                      </p>
                    )}

                    {paymentMethod === 'cod' && (
                      <p className="text-[#ded6c9] leading-relaxed">
                        Cash or UPI upon delivery. Our white-glove courier will contact you via WhatsApp 3 hours prior to dispatch for confirmation.
                      </p>
                    )}
                  </div>
                </div>

                {validationError && (
                  <p className="text-xs text-[#ff9e9e] font-medium">{validationError}</p>
                )}
              </div>

              {/* Right Column: Order Summary */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="p-5 bg-[#141210] border border-[#26231e] space-y-4">
                  <h3 className="text-xs uppercase tracking-[0.24em] font-semibold text-[#faf7f2] pb-2 border-b border-[#201d19]">
                    Order Summary ({cart.length} Pieces)
                  </h3>

                  {/* Items list */}
                  <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                    {cart.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-xs pb-2 border-b border-[#1c1a17]"
                      >
                        <div className="flex items-center gap-2.5">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-10 h-12 object-cover border border-[#24211d]"
                          />
                          <div>
                            <p className="font-serif text-[#faf7f2] truncate max-w-[170px]">
                              {item.product.name}
                            </p>
                            <p className="text-[10px] text-[#948b7e]">
                              {item.selectedSize} • {item.selectedColor.name} (Qty {item.quantity})
                            </p>
                          </div>
                        </div>
                        <span className="font-semibold text-[#faf7f2]">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Calculations */}
                  <div className="space-y-1.5 text-xs text-[#ded6c9] pt-1">
                    <div className="flex justify-between">
                      <span className="text-[#948b7e]">Subtotal</span>
                      <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
                    </div>

                    {discountAmount > 0 && (
                      <div className="flex justify-between text-[#c5a880]">
                        <span>Privilege Courtesy ({promoCode})</span>
                        <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span className="text-[#948b7e]">White-Glove Delivery</span>
                      <span>
                        {shippingFee === 0 ? (
                          <span className="text-emerald-400">Complimentary</span>
                        ) : (
                          `₹${shippingFee}`
                        )}
                      </span>
                    </div>

                    <div className="flex justify-between text-base font-semibold text-[#faf7f2] pt-2 border-t border-[#26231e]">
                      <span>Grand Total</span>
                      <span className="font-sans text-xl">
                        ₹{cartTotal.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#c5a880] text-[#0c0b0a] hover:bg-[#dfcca6] disabled:opacity-50 transition-colors font-semibold text-xs uppercase tracking-[0.24em] flex items-center justify-center gap-2 shadow-xl active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <span>Processing Atelier Acquisition...</span>
                      ) : (
                        <>
                          <span>Confirm Acquisition (₹{cartTotal.toLocaleString('en-IN')})</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-[10px] text-[#736a5f] text-center space-y-1">
                    <p className="flex items-center justify-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-[#c5a880]" />
                      <span>Complimentary White-Glove Dispatch within 48 Hours</span>
                    </p>
                    <p>Demo orders store receipt locally without debiting any card.</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
