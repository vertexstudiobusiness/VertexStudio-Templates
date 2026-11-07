import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Sparkles, 
  MessageSquare, 
  Tag,
  ShieldCheck,
  Truck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    cartCount,
    cartSubtotal,
    discountAmount,
    shippingFee,
    cartTotal,
    appliedPromo,
    promoError,
    applyPromoCode,
    removePromoCode,
    updateCartQuantity,
    removeFromCart,
    navigateTo
  } = useShop();

  const [promoInput, setPromoInput] = useState('');

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim()) {
      const success = applyPromoCode(promoInput);
      if (success) {
        setPromoInput('');
      }
    }
  };

  // Free shipping target is ₹1,999
  const freeShippingThreshold = 1999;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const freeShippingProgress = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    navigateTo('checkout');
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    const itemList = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.product.name} (Size: ${item.selectedSize}, Color: ${item.selectedColor}, Qty: ${item.quantity}) - ₹${(item.product.price * item.quantity).toLocaleString('en-IN')}`
      )
      .join('\n');

    const msg = encodeURIComponent(
      `Hello OFFGRID! I want to complete this order via WhatsApp:\n\n*Items:*\n${itemList}\n\n*Subtotal:* ₹${cartSubtotal.toLocaleString('en-IN')}\n*Discount:* ₹${discountAmount.toLocaleString('en-IN')}\n*Shipping:* ${shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}\n*Total:* ₹${cartTotal.toLocaleString('en-IN')}\n\nPlease share delivery confirmation details.`
    );
    window.open(`https://wa.me/919820063347?text=${msg}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Drawer Body */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-neutral-950 border-l border-brand-border flex flex-col justify-between z-10 shadow-2xl"
          >
            {/* Header */}
            <div>
              <div className="p-4 sm:p-5 border-b border-brand-border flex items-center justify-between bg-brand-surface">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-brand-orange" />
                  <span className="font-display font-black text-lg tracking-wider text-brand-offwhite uppercase">
                    YOUR BAG ({cartCount})
                  </span>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 text-brand-concrete hover:text-white transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Free Express Shipping Meter */}
              <div className="p-3 bg-neutral-900 border-b border-brand-border/60">
                <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                  <span className="flex items-center gap-1.5 text-brand-offwhite">
                    <Truck className="w-3.5 h-3.5 text-brand-orange" />
                    {amountNeededForFreeShipping === 0 ? (
                      <span className="text-brand-orange font-bold">
                        UNLOCKED: FREE EXPRESS SHIPPING ACROSS INDIA!
                      </span>
                    ) : (
                      <span>
                        Add{' '}
                        <strong className="text-brand-orange font-bold">
                          ₹{amountNeededForFreeShipping.toLocaleString('en-IN')}
                        </strong>{' '}
                        more for FREE delivery
                      </span>
                    )}
                  </span>
                  <span className="text-brand-concrete">
                    {Math.round(freeShippingProgress)}%
                  </span>
                </div>
                <div className="w-full bg-neutral-800 h-1.5 overflow-hidden">
                  <motion.div
                    className="h-full bg-brand-orange"
                    initial={{ width: 0 }}
                    animate={{ width: `${freeShippingProgress}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            </div>

            {/* Middle: Items List or Empty State */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-neutral-900 border border-brand-border flex items-center justify-center mb-4 text-brand-concrete">
                    <ShoppingBag className="w-8 h-8 stroke-1" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-brand-offwhite uppercase">
                    YOUR BAG IS EMPTY
                  </h3>
                  <p className="text-xs font-mono text-brand-concrete max-w-xs mt-1 mb-6">
                    Don't let Drop 004 sell out before you lock down your pieces.
                  </p>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      navigateTo('shop');
                    }}
                    className="bg-brand-orange text-black font-mono font-bold text-xs uppercase px-6 py-3 hover:bg-white transition-colors"
                  >
                    EXPLORE DROP 004
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 bg-brand-surface border border-brand-border p-3 relative group"
                    >
                      {/* Image */}
                      <div className="w-20 h-24 bg-neutral-900 overflow-hidden shrink-0">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <h4 className="font-display font-bold text-xs sm:text-sm text-brand-offwhite leading-tight truncate">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-neutral-500 hover:text-red-400 p-1 -mr-1"
                              title="Remove"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="flex items-center gap-2 mt-1 text-[11px] font-mono text-brand-concrete">
                            <span className="bg-neutral-800 px-1.5 py-0.5 border border-brand-border">
                              SIZE: {item.selectedSize}
                            </span>
                            <span className="bg-neutral-800 px-1.5 py-0.5 border border-brand-border truncate max-w-[100px]">
                              {item.selectedColor}
                            </span>
                          </div>
                        </div>

                        {/* Price & Quantity Controls - Finger-friendly touch targets */}
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-brand-border/40">
                          <div className="flex items-center border border-brand-border bg-neutral-900">
                            <button
                              onClick={() => updateCartQuantity(item.id, -1)}
                              className="p-2 min-h-[38px] min-w-[36px] flex items-center justify-center hover:text-brand-orange text-brand-concrete transition-colors active:scale-90"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-2.5 font-mono text-xs font-bold text-brand-offwhite">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateCartQuantity(item.id, 1)}
                              className="p-2 min-h-[38px] min-w-[36px] flex items-center justify-center hover:text-brand-orange text-brand-concrete transition-colors active:scale-90"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="font-mono text-xs sm:text-sm font-bold text-brand-orange">
                            ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Section: Promo Code + Breakdown + Checkout */}
            {cart.length > 0 && (
              <div className="p-4 sm:p-5 border-t border-brand-border bg-brand-surface space-y-4">
                {/* Promo Input */}
                <div>
                  {appliedPromo ? (
                    <div className="flex items-center justify-between bg-neutral-900 border border-brand-orange/60 px-3 py-2 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <Tag className="w-3.5 h-3.5 text-brand-orange" />
                        <span className="text-brand-orange font-bold">
                          {appliedPromo.code} ({appliedPromo.description})
                        </span>
                      </div>
                      <button
                        onClick={removePromoCode}
                        className="text-neutral-400 hover:text-white text-xs underline"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyPromo} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Discount code (try: OFFGRID10)"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        className="flex-1 bg-neutral-900 border border-brand-border px-3 py-2 text-xs font-mono uppercase text-brand-offwhite outline-none focus:border-brand-orange"
                      />
                      <button
                        type="submit"
                        className="bg-neutral-800 hover:bg-neutral-700 text-brand-offwhite font-mono text-xs font-bold px-3 py-2 border border-brand-border"
                      >
                        APPLY
                      </button>
                    </form>
                  )}
                  {promoError && (
                    <p className="text-[11px] font-mono text-red-400 mt-1">
                      {promoError}
                    </p>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-1.5 text-xs font-mono">
                  <div className="flex justify-between text-brand-concrete">
                    <span>SUBTOTAL</span>
                    <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-brand-orange font-semibold">
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

                  <div className="flex justify-between text-base font-bold text-brand-offwhite pt-2 border-t border-brand-border">
                    <span>ESTIMATED TOTAL</span>
                    <span className="text-brand-orange">
                      ₹{cartTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Primary CTA Buttons */}
                <div className="space-y-2 pt-1">
                  <button
                    onClick={handleProceedToCheckout}
                    className="w-full bg-brand-orange hover:bg-white text-black font-mono font-bold text-sm tracking-wider uppercase py-3.5 flex items-center justify-center gap-2 transition-all shadow-glow-orange"
                  >
                    <span>CHECKOUT NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleWhatsAppCheckout}
                    className="w-full bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-[#25D366] font-mono font-bold text-xs tracking-wider uppercase py-2.5 flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>ORDER VIA WHATSAPP (INSTANT CONFIRMATION)</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-brand-concrete">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-brand-orange" /> 7-DAY EASY EXCHANGES
                  </span>
                  <span>•</span>
                  <span>CASH ON DELIVERY ACCEPTED</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

