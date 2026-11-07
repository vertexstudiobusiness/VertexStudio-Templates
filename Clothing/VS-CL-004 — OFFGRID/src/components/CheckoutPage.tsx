import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ShippingAddress, OrderDetails } from '../types';
import { 
  ShieldCheck, 
  Truck, 
  ArrowLeft, 
  CreditCard, 
  QrCode, 
  Banknote, 
  Check, 
  Tag, 
  Lock,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

const PINCODE_MAP: { [pin: string]: { city: string; state: string } } = {
  '400050': { city: 'Mumbai', state: 'Maharashtra' },
  '400001': { city: 'Mumbai', state: 'Maharashtra' },
  '110001': { city: 'New Delhi', state: 'Delhi' },
  '110016': { city: 'New Delhi', state: 'Delhi' },
  '560038': { city: 'Bengaluru', state: 'Karnataka' },
  '560001': { city: 'Bengaluru', state: 'Karnataka' },
  '500001': { city: 'Hyderabad', state: 'Telangana' },
  '600001': { city: 'Chennai', state: 'Tamil Nadu' },
  '700001': { city: 'Kolkata', state: 'West Bengal' },
  '380001': { city: 'Ahmedabad', state: 'Gujarat' },
  '411001': { city: 'Pune', state: 'Maharashtra' },
  '302001': { city: 'Jaipur', state: 'Rajasthan' },
  '641001': { city: 'Coimbatore', state: 'Tamil Nadu' },
  '682001': { city: 'Kochi', state: 'Kerala' },
  '160001': { city: 'Chandigarh', state: 'Punjab / Haryana' }
};

export const CheckoutPage: React.FC = () => {
  const {
    cart,
    cartSubtotal,
    discountAmount,
    shippingFee,
    cartTotal,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
    clearCart,
    setLastOrder,
    navigateTo,
    showToast
  } = useShop();

  // Form states
  const [address, setAddress] = useState<ShippingAddress>({
    fullName: 'Aryan Patel',
    phone: '9820063347',
    email: 'aryan@example.com',
    addressLine1: 'B-402, Sea Green Apartments, Perry Cross Road',
    addressLine2: 'Near Joggers Park',
    landmark: 'Bandra West',
    pincode: '400050',
    city: 'Mumbai',
    state: 'Maharashtra'
  });

  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [upiId, setUpiId] = useState('aryan@okhdfcbank');
  const [isProcessing, setIsProcessing] = useState(false);
  const [promoInput, setPromoInput] = useState('');

  // Auto-detect city from pincode
  const handlePincodeChange = (pin: string) => {
    const cleanPin = pin.replace(/\D/g, '').slice(0, 6);
    const lookup = PINCODE_MAP[cleanPin];
    if (lookup) {
      setAddress((prev) => ({
        ...prev,
        pincode: cleanPin,
        city: lookup.city,
        state: lookup.state
      }));
      showToast('PINCODE LOCATED', `${lookup.city}, ${lookup.state}`, 'info');
    } else {
      setAddress((prev) => ({ ...prev, pincode: cleanPin }));
    }
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim()) {
      applyPromoCode(promoInput);
      setPromoInput('');
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) {
      showToast('BAG EMPTY', 'Add items before placing order', 'error');
      return;
    }

    if (!address.fullName || !address.phone || !address.pincode || !address.addressLine1) {
      showToast('INCOMPLETE DETAILS', 'Please fill all required shipping fields', 'error');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);

      const generatedId = `OG-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const orderDetails: OrderDetails = {
        orderId: generatedId,
        date: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }),
        items: [...cart],
        subtotal: cartSubtotal,
        discount: discountAmount,
        shippingFee: shippingMethod === 'express' ? shippingFee + 199 : shippingFee,
        total: shippingMethod === 'express' ? cartTotal + 199 : cartTotal,
        shippingAddress: address,
        paymentMethod,
        paymentStatus: paymentMethod === 'cod' ? 'Pending COD Verification' : 'Paid',
        estimatedDelivery: '3-4 Business Days via Bluedart Express'
      };

      setLastOrder(orderDetails);
      clearCart();

      // Confetti explosion
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ff4400', '#f4f4f0', '#ffffff', '#2b2d35', '#d8ff00']
      });

      showToast('ORDER PLACED!', `Order #${generatedId} confirmed`, 'success');
      navigateTo('home'); // modal will pop open
    }, 1200);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center p-4 text-center">
        <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-offwhite uppercase">
          YOUR BAG IS EMPTY
        </h2>
        <p className="font-mono text-xs text-brand-concrete mt-2 mb-6">
          Add Drop 004 pieces to proceed with checkout.
        </p>
        <button
          onClick={() => navigateTo('shop')}
          className="bg-brand-orange text-black font-mono font-bold text-xs uppercase px-8 py-3.5"
        >
          EXPLORE CATALOGUE
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black pb-28">
      {/* Header */}
      <div className="bg-brand-surface border-b border-brand-border py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigateTo('shop')}
            className="flex items-center gap-2 text-xs font-mono text-brand-concrete hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>CONTINUE SHOPPING</span>
          </button>

          <div className="flex items-center gap-1.5 font-mono text-xs text-emerald-400">
            <Lock className="w-3.5 h-3.5" />
            <span>256-BIT SSL ENCRYPTED CHECKOUT</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <h1 className="font-display font-black text-3xl sm:text-4xl text-brand-offwhite uppercase tracking-tight mb-8 pb-4 border-b border-brand-border">
          CHECKOUT // <span className="text-brand-orange">ORDER DISPATCH</span>
        </h1>

        <form onSubmit={handleCompleteOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Delivery & Payment Details */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Contact Information */}
            <div className="bg-brand-surface border border-brand-border p-5 sm:p-7 space-y-4">
              <div className="flex items-center justify-between border-b border-brand-border pb-3">
                <h3 className="font-display font-bold text-base text-brand-offwhite uppercase flex items-center gap-2">
                  <span className="w-6 h-6 bg-brand-orange text-black text-xs font-mono font-bold flex items-center justify-center">
                    01
                  </span>
                  CONTACT & DISPATCH DETAILS
                </h3>
                <span className="text-[10px] font-mono text-brand-concrete">
                  SMS & WHATSAPP UPDATES
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-brand-concrete mb-1">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={address.fullName}
                    onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                    className="w-full bg-neutral-900 border border-brand-border px-3.5 py-3 text-base sm:text-xs font-mono text-white outline-none focus:border-brand-orange min-h-[46px]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-brand-concrete mb-1">
                    MOBILE NUMBER (FOR DELIVERY) *
                  </label>
                  <div className="flex">
                    <span className="bg-neutral-800 border border-r-0 border-brand-border px-3 py-3 text-base sm:text-xs font-mono text-brand-concrete flex items-center">
                      +91
                    </span>
                    <input
                      type="tel"
                      inputMode="numeric"
                      required
                      value={address.phone}
                      onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                      className="flex-1 bg-neutral-900 border border-brand-border px-3.5 py-3 text-base sm:text-xs font-mono text-white outline-none focus:border-brand-orange min-h-[46px]"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-mono text-brand-concrete mb-1">
                    EMAIL ADDRESS (ORDER RECEIPT) *
                  </label>
                  <input
                    type="email"
                    required
                    value={address.email}
                    onChange={(e) => setAddress({ ...address, email: e.target.value })}
                    className="w-full bg-neutral-900 border border-brand-border px-3.5 py-3 text-base sm:text-xs font-mono text-white outline-none focus:border-brand-orange min-h-[46px]"
                  />
                </div>
              </div>
            </div>

            {/* 2. Indian Shipping Address */}
            <div className="bg-brand-surface border border-brand-border p-5 sm:p-7 space-y-4">
              <div className="flex items-center justify-between border-b border-brand-border pb-3">
                <h3 className="font-display font-bold text-base text-brand-offwhite uppercase flex items-center gap-2">
                  <span className="w-6 h-6 bg-brand-orange text-black text-xs font-mono font-bold flex items-center justify-center">
                    02
                  </span>
                  DELIVERY ADDRESS
                </h3>
                <span className="text-[10px] font-mono text-brand-orange">
                  AUTO-CITY DETECTION ON PINCODE
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-brand-concrete mb-1">
                    PINCODE (6-DIGITS) *
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    required
                    value={address.pincode}
                    onChange={(e) => handlePincodeChange(e.target.value)}
                    placeholder="e.g. 400050"
                    maxLength={6}
                    className="w-full bg-neutral-900 border border-brand-orange px-3.5 py-3 text-base sm:text-xs font-mono text-white outline-none min-h-[46px]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-brand-concrete mb-1">
                    CITY *
                  </label>
                  <input
                    type="text"
                    required
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    className="w-full bg-neutral-900 border border-brand-border px-3.5 py-3 text-base sm:text-xs font-mono text-white outline-none focus:border-brand-orange min-h-[46px]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-brand-concrete mb-1">
                    STATE *
                  </label>
                  <input
                    type="text"
                    required
                    value={address.state}
                    onChange={(e) => setAddress({ ...address, state: e.target.value })}
                    className="w-full bg-neutral-900 border border-brand-border px-3.5 py-3 text-base sm:text-xs font-mono text-white outline-none focus:border-brand-orange min-h-[46px]"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-[11px] font-mono text-brand-concrete mb-1">
                    FLAT, HOUSE NO, BUILDING & STREET *
                  </label>
                  <input
                    type="text"
                    required
                    value={address.addressLine1}
                    onChange={(e) => setAddress({ ...address, addressLine1: e.target.value })}
                    placeholder="e.g. Flat 402, Skyline Towers, Perry Cross Road"
                    className="w-full bg-neutral-900 border border-brand-border px-3.5 py-3 text-base sm:text-xs font-mono text-white outline-none focus:border-brand-orange min-h-[46px]"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-[11px] font-mono text-brand-concrete mb-1">
                    LANDMARK / AREA (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    value={address.landmark}
                    onChange={(e) => setAddress({ ...address, landmark: e.target.value })}
                    placeholder="Near Joggers Park"
                    className="w-full bg-neutral-900 border border-brand-border px-3.5 py-3 text-base sm:text-xs font-mono text-white outline-none focus:border-brand-orange min-h-[46px]"
                  />
                </div>
              </div>
            </div>

            {/* 3. Payment Methods */}
            <div className="bg-brand-surface border border-brand-border p-5 sm:p-7 space-y-4">
              <div className="flex items-center justify-between border-b border-brand-border pb-3">
                <h3 className="font-display font-bold text-base text-brand-offwhite uppercase flex items-center gap-2">
                  <span className="w-6 h-6 bg-brand-orange text-black text-xs font-mono font-bold flex items-center justify-center">
                    03
                  </span>
                  PAYMENT METHOD
                </h3>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">
                  DEMO VERIFIED CHECKOUT
                </span>
              </div>

              {/* Payment Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3.5 border text-left transition-all font-mono ${
                    paymentMethod === 'upi'
                      ? 'border-brand-orange bg-brand-orange/15 text-white'
                      : 'border-brand-border bg-neutral-900 text-brand-concrete hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-orange mb-1">
                    <QrCode className="w-4 h-4" />
                    <span>UPI / QR CODE</span>
                  </div>
                  <p className="text-[10px] text-brand-concrete">
                    GPay, PhonePe, Paytm, BHIM
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3.5 border text-left transition-all font-mono ${
                    paymentMethod === 'card'
                      ? 'border-brand-orange bg-brand-orange/15 text-white'
                      : 'border-brand-border bg-neutral-900 text-brand-concrete hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-orange mb-1">
                    <CreditCard className="w-4 h-4" />
                    <span>CARDS & RUPAY</span>
                  </div>
                  <p className="text-[10px] text-brand-concrete">
                    Visa, Mastercard, RuPay
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3.5 border text-left transition-all font-mono ${
                    paymentMethod === 'cod'
                      ? 'border-brand-orange bg-brand-orange/15 text-white'
                      : 'border-brand-border bg-neutral-900 text-brand-concrete hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-orange mb-1">
                    <Banknote className="w-4 h-4" />
                    <span>CASH ON DELIVERY</span>
                  </div>
                  <p className="text-[10px] text-brand-concrete">
                    Pay upon doorstep delivery
                  </p>
                </button>
              </div>

              {/* Payment Details Container */}
              {paymentMethod === 'upi' && (
                <div className="bg-neutral-900 border border-brand-border p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-white font-bold">
                      INSTANT UPI PAYMENT
                    </span>
                    <span className="text-[10px] font-mono text-brand-orange border border-brand-orange px-1.5">
                      0% GATEWAY CHARGE
                    </span>
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-brand-concrete mb-1">
                      ENTER YOUR UPI VPA / ID
                    </label>
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="mobile@upi or username@okaxis"
                      className="w-full bg-neutral-950 border border-brand-border px-3 py-2 text-xs font-mono text-white outline-none focus:border-brand-orange"
                    />
                  </div>
                  <p className="text-[10px] font-mono text-brand-concrete">
                    A demo payment request notification will be simulated upon clicking Complete Order.
                  </p>
                </div>
              )}

              {paymentMethod === 'card' && (
                <div className="bg-neutral-900 border border-brand-border p-4 space-y-3">
                  <div>
                    <label className="block text-[11px] font-mono text-brand-concrete mb-1">
                      CARD NUMBER
                    </label>
                    <input
                      type="text"
                      defaultValue="4532 •••• •••• 8892"
                      className="w-full bg-neutral-950 border border-brand-border px-3 py-2 text-xs font-mono text-white outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-brand-concrete mb-1">
                        VALID THRU
                      </label>
                      <input
                        type="text"
                        defaultValue="12/28"
                        className="w-full bg-neutral-950 border border-brand-border px-3 py-2 text-xs font-mono text-white outline-none focus:border-brand-orange"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-brand-concrete mb-1">
                        CVV / CVC
                      </label>
                      <input
                        type="password"
                        defaultValue="842"
                        maxLength={4}
                        className="w-full bg-neutral-950 border border-brand-border px-3 py-2 text-xs font-mono text-white outline-none focus:border-brand-orange"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'cod' && (
                <div className="bg-neutral-900 border border-brand-border p-4">
                  <p className="text-xs font-mono text-brand-offwhite">
                    <strong>Cash on Delivery (COD) Selected:</strong> You will pay the delivery agent in cash or via mobile UPI QR scan when your package arrives at your doorstep.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Order Summary & Placement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-surface border border-brand-border p-5 sm:p-7 space-y-5 sticky top-24">
              <h3 className="font-display font-black text-lg text-brand-offwhite uppercase tracking-wider pb-3 border-b border-brand-border">
                ORDER DOSSIER ({cart.length} ITEMS)
              </h3>

              {/* Items List */}
              <div className="max-h-64 overflow-y-auto space-y-3 pr-1">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3 text-xs font-mono">
                    <img
                      src={item.product.images[0]}
                      alt=""
                      className="w-14 h-16 object-cover bg-neutral-900 border border-brand-border shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-bold truncate">{item.product.name}</h4>
                      <p className="text-brand-concrete text-[11px]">
                        Size: {item.selectedSize} • Qty: {item.quantity}
                      </p>
                      <span className="text-brand-orange font-bold">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo input */}
              <div className="pt-2 border-t border-brand-border">
                {appliedPromo ? (
                  <div className="flex items-center justify-between bg-neutral-900 border border-brand-orange p-2.5 text-xs font-mono">
                    <span className="text-brand-orange font-bold">
                      PROMO: {appliedPromo.code} (-₹{discountAmount.toLocaleString('en-IN')})
                    </span>
                    <button
                      type="button"
                      onClick={removePromoCode}
                      className="text-neutral-400 hover:text-white underline text-[11px]"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code (OFFGRID10)"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="flex-1 bg-neutral-900 border border-brand-border px-3 py-2 text-xs font-mono uppercase text-white outline-none focus:border-brand-orange"
                    />
                    <button
                      type="button"
                      onClick={handleApplyPromo}
                      className="bg-neutral-800 hover:bg-neutral-700 text-white font-mono text-xs px-3 py-2 border border-brand-border"
                    >
                      APPLY
                    </button>
                  </div>
                )}
              </div>

              {/* Financial Breakdown */}
              <div className="space-y-2 text-xs font-mono border-t border-brand-border pt-4">
                <div className="flex justify-between text-brand-concrete">
                  <span>SUBTOTAL</span>
                  <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-brand-orange font-bold">
                    <span>DISCOUNT ({appliedPromo?.code})</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between text-brand-concrete">
                  <span>EXPRESS SHIPPING</span>
                  <span>
                    {shippingFee === 0 ? (
                      <span className="text-emerald-400 font-bold">FREE</span>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-lg font-bold text-white pt-3 border-t border-brand-border">
                  <span>TOTAL AMOUNT</span>
                  <span className="text-brand-orange font-display font-black text-xl">
                    ₹{cartTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Order Placement CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-brand-orange hover:bg-white text-black font-mono font-bold text-sm tracking-wider uppercase py-4 flex items-center justify-center gap-2 transition-all shadow-glow-orange disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>TRANSMITTING ORDER...</span>
                ) : (
                  <>
                    <span>COMPLETE DEMO ORDER</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-[10px] font-mono text-brand-concrete text-center space-y-1">
                <p>⚡ This is a functional demo checkout. No actual money is debited.</p>
                <p>Order receipt and tracking link will be generated instantly.</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

