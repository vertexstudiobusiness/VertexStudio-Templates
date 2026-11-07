import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Trash2, 
  ArrowRight, 
  Truck, 
  Tag, 
  Check, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    cartCount,
    cartSubtotal,
    cartDiscount,
    cartShipping,
    cartTotal,
    freeShippingThreshold,
    updateCartQuantity,
    removeFromCart,
    applyCoupon,
    removeCoupon,
    appliedCoupon,
    couponError,
    formatPrice,
    setIsCheckoutOpen,
    setActiveCategory,
    setActiveView
  } = useShop();

  const [couponInput, setCouponInput] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const success = applyCoupon(couponInput);
    if (success) {
      setCouponInput('');
    }
  };

  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const shippingProgress = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleContinueShopping = () => {
    setIsCartOpen(false);
    setActiveCategory('all');
    setActiveView('catalog');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-[#FAF8F5] text-[#261B14] h-full shadow-2xl flex flex-col z-10 overflow-hidden animate-in slide-in-from-right duration-300 border-l border-[#D8CFBE]/60">
        {/* Header */}
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-[#D8CFBE]/60 bg-[#F6F3EE]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#3D2B1F]" />
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#261B14]">
              Shopping Bag ({cartCount})
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-[#5A4232] hover:text-[#261B14] hover:bg-[#EFE9E0] rounded-full transition-colors"
            aria-label="Close bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-5 py-3 bg-[#FAF8F5] border-b border-[#D8CFBE]/50">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="flex items-center gap-1.5 font-medium text-[#3D2B1F]">
              <Truck className="w-3.5 h-3.5 text-[#B77B6E]" />
              {amountNeededForFreeShipping > 0 ? (
                <span>
                  Add <strong className="text-[#B77B6E] font-mono">{formatPrice(amountNeededForFreeShipping)}</strong> more for Complimentary Shipping
                </span>
              ) : (
                <span className="text-[#1E8E42] font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Congratulations! You unlocked Free Shipping
                </span>
              )}
            </span>
            <span className="text-[10px] text-[#5A4232]">{shippingProgress}%</span>
          </div>

          <div className="w-full bg-[#EFE9E0] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#B77B6E] h-full transition-all duration-500 rounded-full"
              style={{ width: `${shippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 divide-y divide-[#D8CFBE]/40">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="pt-4 first:pt-0 flex gap-3.5">
                {/* Item Thumbnail */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-26 rounded-xl object-cover object-top bg-[#EFE9E0] shrink-0 border border-[#D8CFBE]/50"
                />

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-serif text-sm font-medium text-[#261B14] truncate">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#5A4232] hover:text-[#B77B6E] p-1 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[11px] text-[#5A4232] flex items-center gap-3 mt-1">
                      <span>Size: <strong className="text-[#261B14]">{item.size}</strong></span>
                      <span>Color: <strong className="text-[#261B14]">{item.color}</strong></span>
                    </div>

                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-xs font-semibold text-[#261B14] font-mono">
                        {formatPrice(item.price)}
                      </span>
                      {item.originalPrice && (
                        <span className="text-[10px] text-[#5A4232]/50 line-through font-mono">
                          {formatPrice(item.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity Stepper & Subtotal */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-[#D8CFBE] rounded-lg bg-[#F6F3EE]">
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        className="p-1 px-2 text-[#5A4232] hover:text-[#261B14] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-semibold text-[#261B14]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        className="p-1 px-2 text-[#5A4232] hover:text-[#261B14] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-xs font-semibold text-[#261B14] font-mono">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-[#F7EBE8] text-[#B77B6E] flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-lg text-[#261B14] mb-1">Your Bag is Empty</h4>
              <p className="text-xs text-[#5A4232] max-w-xs mx-auto mb-6">
                Discover our newest autumn silhouettes or explore our handcrafted festive edit.
              </p>
              <button
                onClick={handleContinueShopping}
                className="bg-[#3D2B1F] text-[#FAF8F5] px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider hover:bg-[#5A4232] transition-colors"
              >
                Shop New In
              </button>
            </div>
          )}
        </div>

        {/* Footer with Coupon & Checkout (Only if cart not empty) */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-[#D8CFBE]/70 bg-[#F6F3EE] space-y-3">
            {/* Coupon Code Section */}
            <div>
              {appliedCoupon ? (
                <div className="flex items-center justify-between bg-[#E8F8EE] border border-[#C2EACF] px-3 py-2 rounded-xl text-xs text-[#1E8E42]">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Tag className="w-3.5 h-3.5" />
                    <span>Coupon <strong>{appliedCoupon.code}</strong> applied (-{formatPrice(cartDiscount)})</span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-xs text-[#5A4232] hover:text-[#261B14] underline"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="Coupon Code (e.g. LUNA10, FESTIVE500)"
                      className="w-full bg-white border border-[#D8CFBE] rounded-xl px-3.5 py-2 text-xs text-[#261B14] uppercase placeholder-[#5A4232]/50 focus:outline-none focus:border-[#3D2B1F]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#3D2B1F] hover:bg-[#5A4232] text-[#FAF8F5] px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-colors"
                  >
                    Apply
                  </button>
                </form>
              )}

              {couponError && (
                <p className="text-[11px] text-[#B77B6E] mt-1.5 font-medium">{couponError}</p>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-[#5A4232] pt-2 border-t border-[#D8CFBE]/40">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono text-[#261B14]">{formatPrice(cartSubtotal)}</span>
              </div>

              {cartDiscount > 0 && (
                <div className="flex justify-between text-[#1E8E42]">
                  <span>Privilege Savings</span>
                  <span className="font-mono">-{formatPrice(cartDiscount)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Domestic Delivery</span>
                <span className="font-mono">
                  {cartShipping === 0 ? (
                    <span className="text-[#1E8E42] font-semibold">FREE</span>
                  ) : (
                    formatPrice(cartShipping)
                  )}
                </span>
              </div>

              <div className="flex justify-between text-sm sm:text-base font-semibold text-[#261B14] pt-2 border-t border-[#D8CFBE]/60">
                <span>Estimated Total</span>
                <span className="font-mono">{formatPrice(cartTotal)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleProceedToCheckout}
              className="w-full bg-[#3D2B1F] hover:bg-[#5A4232] text-[#FAF8F5] py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-98"
            >
              <span>Proceed to Checkout · {formatPrice(cartTotal)}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#5A4232]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B77B6E]" />
              <span>Complimentary 7-day doorstep size exchange across India</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
