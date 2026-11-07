import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ShoppingBag,
  Trash2,
  ArrowRight,
  Sparkles,
  PhoneCall,
  ShieldCheck,
  Tag
} from 'lucide-react';

const FREE_SHIPPING_TARGET = 10000;

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateCartQuantity,
    cartCount,
    cartSubtotal,
    shippingFee,
    discountAmount,
    cartTotal,
    promoCode,
    applyPromoCode,
    removePromoCode,
    setIsCheckoutOpen,
    sendWhatsAppCartCheckout,
    setActiveCategory
  } = useShop();

  const [promoInput, setPromoInput] = useState('');
  const [promoFeedback, setPromoFeedback] = useState<{ error?: string; success?: string } | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  // Lock body scroll
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromoCode(promoInput);
    if (res.success) {
      setPromoFeedback({ success: res.message });
      setPromoInput('');
    } else {
      setPromoFeedback({ error: res.message });
    }
  };

  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_TARGET - cartSubtotal);
  const progressPercent = Math.min(100, (cartSubtotal / FREE_SHIPPING_TARGET) * 100);

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleBrowseCatalog = () => {
    setIsCartOpen(false);
    setActiveCategory('All');
    const el = document.getElementById('catalogue-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div
          id="cart-drawer-overlay"
          className="fixed inset-0 z-[120] flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Atelier Shopping Bag"
        >
          {/* Dimmed Backdrop with light dismiss */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Drawer Sheet */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 240 }}
            className="relative w-full max-w-[460px] h-full bg-[#0d0c0a] text-[#faf7f2] border-l border-[#282521] shadow-2xl flex flex-col z-10 overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#201d19] bg-[#12100e]">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-[#c5a880]" />
                <h2 className="font-serif text-xl tracking-wide uppercase text-[#faf7f2]">
                  Atelier Bag ({cartCount})
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="w-9 h-9 rounded-full border border-[#2a2620] flex items-center justify-center text-[#ded6c9] hover:text-[#c5a880] hover:border-[#c5a880] transition-colors focus:outline-none"
                aria-label="Close shopping bag"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Indicator */}
            <div className="bg-[#141210] px-6 py-3 border-b border-[#201d19]">
              <div className="flex items-center justify-between text-xs mb-1.5">
                {amountNeededForFreeShipping === 0 ? (
                  <span className="text-[#c5a880] font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Complimentary White-Glove Shipping Unlocked!</span>
                  </span>
                ) : (
                  <span className="text-[#ded6c9] text-[11px]">
                    Add{' '}
                    <strong className="text-[#faf7f2]">
                      ₹{amountNeededForFreeShipping.toLocaleString('en-IN')}
                    </strong>{' '}
                    for complimentary express courier
                  </span>
                )}
                <span className="text-[10px] text-[#948b7e] font-mono">
                  {Math.round(progressPercent)}%
                </span>
              </div>
              <div className="w-full h-1 bg-[#24211d] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#9e8159] to-[#c5a880] transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            {cart.length > 0 ? (
              <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#1e1c18]">
                {cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedSize}-${item.selectedColor.hex}`}
                    className="py-4 flex gap-4"
                  >
                    {/* Thumbnail */}
                    <img
                      src={
                        item.selectedColor.imageIndex !== undefined &&
                        item.product.images[item.selectedColor.imageIndex]
                          ? item.product.images[item.selectedColor.imageIndex]
                          : item.product.images[0]
                      }
                      alt={item.product.name}
                      className="w-20 aspect-[3/4] object-cover bg-[#161412] border border-[#24211d] flex-shrink-0"
                    />

                    {/* Item Information */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif text-sm sm:text-base text-[#faf7f2] font-normal leading-snug line-clamp-1">
                            {item.product.name}
                          </h3>
                          <button
                            type="button"
                            onClick={() =>
                              removeFromCart(
                                item.product.id,
                                item.selectedSize,
                                item.selectedColor.hex
                              )
                            }
                            className="text-[#736a5f] hover:text-[#ff8080] p-1 -mr-1 transition-colors"
                            aria-label={`Remove ${item.product.name} from bag`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center gap-2 mt-1 text-[11px] text-[#948b7e]">
                          <span>Size: <strong className="text-[#ded6c9]">{item.selectedSize}</strong></span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <span
                              className="w-2.5 h-2.5 rounded-full inline-block border border-white/20"
                              style={{ backgroundColor: item.selectedColor.hex }}
                            />
                            <span className="text-[#ded6c9]">{item.selectedColor.name}</span>
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-3 pt-2">
                        {/* Stepper */}
                        <div className="flex items-center border border-[#2b2721] bg-[#141210]">
                          <button
                            type="button"
                            onClick={() =>
                              updateCartQuantity(
                                item.product.id,
                                item.selectedSize,
                                item.selectedColor.hex,
                                item.quantity - 1
                              )
                            }
                            className="w-7 h-7 flex items-center justify-center text-xs hover:text-[#c5a880] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="w-7 text-center text-xs font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateCartQuantity(
                                item.product.id,
                                item.selectedSize,
                                item.selectedColor.hex,
                                item.quantity + 1
                              )
                            }
                            className="w-7 h-7 flex items-center justify-center text-xs hover:text-[#c5a880] transition-colors"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        <span className="text-sm font-semibold text-[#faf7f2]">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty Bag State */
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#171512] border border-[#282521] flex items-center justify-center text-[#c5a880] mb-4">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-[#faf7f2] font-normal mb-2">
                  Your Atelier Bag is Empty
                </h3>
                <p className="text-xs text-[#948b7e] max-w-xs mb-6 leading-relaxed">
                  Every ÉLAN garment is crafted in limited numbers. Explore our seasonal capsule to reserve your size.
                </p>
                <button
                  type="button"
                  onClick={handleBrowseCatalog}
                  className="py-3.5 px-7 bg-[#faf7f2] text-[#0c0b0a] hover:bg-[#c5a880] text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  Explore Archival Pieces
                </button>
              </div>
            )}

            {/* Footer with Subtotals, Promo, and Actions */}
            {cart.length > 0 && (
              <div className="p-6 bg-[#12100e] border-t border-[#201d19] space-y-4">
                {/* Promo Code Input */}
                <div className="space-y-1.5">
                  {promoCode ? (
                    <div className="flex items-center justify-between p-2.5 bg-[#1a1714] border border-[#c5a880]/40 text-xs">
                      <div className="flex items-center gap-1.5 text-[#c5a880]">
                        <Tag className="w-3.5 h-3.5" />
                        <span>Code <strong className="font-mono">{promoCode}</strong> applied</span>
                      </div>
                      <button
                        type="button"
                        onClick={removePromoCode}
                        className="text-[11px] text-[#ff9999] hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyPromo} className="flex gap-2">
                      <input
                        type="text"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        placeholder="Privilege Code (try ELAN10)"
                        className="flex-1 py-2 px-3 bg-[#191714] border border-[#2b2721] text-xs text-[#faf7f2] placeholder-[#736a5f] uppercase tracking-wider focus:outline-none focus:border-[#c5a880]"
                      />
                      <button
                        type="submit"
                        className="py-2 px-4 bg-[#26231e] hover:bg-[#c5a880] hover:text-[#0c0b0a] text-[11px] uppercase tracking-wider font-semibold transition-colors"
                      >
                        Apply
                      </button>
                    </form>
                  )}

                  {promoFeedback?.error && (
                    <p className="text-[11px] text-[#ff9999]">{promoFeedback.error}</p>
                  )}
                  {promoFeedback?.success && (
                    <p className="text-[11px] text-[#c5a880]">{promoFeedback.success}</p>
                  )}
                </div>

                {/* Subtotal breakdown */}
                <div className="space-y-1.5 text-xs text-[#ded6c9] pt-2 border-t border-[#1e1c18]">
                  <div className="flex justify-between">
                    <span className="text-[#948b7e]">Subtotal</span>
                    <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-[#c5a880]">
                      <span>Privilege Discount ({promoCode})</span>
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
                    <span>Estimated Total</span>
                    <span className="font-sans text-lg">₹{cartTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="space-y-2 pt-2">
                  <button
                    type="button"
                    onClick={handleProceedToCheckout}
                    className="w-full py-4 bg-[#faf7f2] text-[#0c0b0a] hover:bg-[#c5a880] transition-colors font-semibold text-xs uppercase tracking-[0.24em] flex items-center justify-center gap-2 shadow-xl active:scale-[0.98]"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={sendWhatsAppCartCheckout}
                    className="w-full py-3 bg-[#171512] border border-[#25d366]/40 hover:border-[#25d366] text-[#faf7f2] hover:bg-[#1a251e] text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#25d366]" />
                    <span>Checkout via WhatsApp Concierge</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[10px] text-[#736a5f] pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Secure 256-Bit SSL Atelier Checkout • No Hidden Charges</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
