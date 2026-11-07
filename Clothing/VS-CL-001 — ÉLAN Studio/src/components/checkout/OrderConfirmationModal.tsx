import React, { useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, Calendar, PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const OrderConfirmationModal: React.FC = () => {
  const {
    isOrderSuccessOpen,
    setIsOrderSuccessOpen,
    lastOrder,
    setActiveCategory
  } = useShop();

  // Launch confetti celebration when order completes
  useEffect(() => {
    if (isOrderSuccessOpen) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c5a880', '#faf7f2', '#dfcca6', '#9e8159']
      });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOrderSuccessOpen]);

  if (!isOrderSuccessOpen || !lastOrder) return null;

  const handleWhatsAppStatus = () => {
    const phone = '919876543210';
    const message = encodeURIComponent(
      `Hello ÉLAN Studio Concierge,\n\nI have placed order ${lastOrder.orderId}.\n• Client: ${lastOrder.shipping.fullName}\n• Total Amount: ₹${lastOrder.total.toLocaleString('en-IN')}\n• Delivery City: ${lastOrder.shipping.city}\n\nPlease share dispatch updates and white-glove delivery schedule.\n\nThank you.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleContinueShopping = () => {
    setIsOrderSuccessOpen(false);
    setActiveCategory('All');
    const el = document.getElementById('catalogue-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[150] flex items-center justify-center p-4 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Order Confirmation"
      >
        {/* Dimmed backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOrderSuccessOpen(false)}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          className="relative w-full max-w-xl bg-[#0e0d0b] text-[#faf7f2] border border-[#c5a880]/40 shadow-2xl p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsOrderSuccessOpen(false)}
              className="text-[#948b7e] hover:text-[#c5a880] p-1"
              aria-label="Close confirmation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center space-y-3 pb-6 border-b border-[#24211d]">
            <div className="w-16 h-16 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880] mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-semibold block">
              ACQUISITION CONFIRMED • ATELIER RECEIPT
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#faf7f2] font-normal">
              Thank You for Your Patronage
            </h2>

            <p className="text-xs sm:text-sm text-[#ded6c9] font-light max-w-md mx-auto leading-relaxed">
              Your garments have been entered into our atelier cutting schedule.
              A confirmation dispatch dossier has been transmitted to <strong className="text-[#faf7f2]">{lastOrder.shipping.email}</strong>.
            </p>
          </div>

          {/* Order Details Badge */}
          <div className="py-5 space-y-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 bg-[#141210] border border-[#26231e] gap-2 text-xs">
              <div>
                <span className="text-[#948b7e] block text-[10px] uppercase tracking-wider">
                  ATELIER REFERENCE ID
                </span>
                <span className="font-mono text-sm font-bold text-[#c5a880]">
                  {lastOrder.orderId}
                </span>
              </div>

              <div>
                <span className="text-[#948b7e] block text-[10px] uppercase tracking-wider">
                  ESTIMATED DELIVERY
                </span>
                <span className="text-xs font-semibold text-[#faf7f2] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>{lastOrder.estimatedDelivery}</span>
                </span>
              </div>
            </div>

            {/* Garments Summary */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#948b7e] font-semibold block">
                COMMISSIONED GARMENTS ({lastOrder.items.length})
              </span>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {lastOrder.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 bg-[#141210] border border-[#201d19] text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-10 h-12 object-cover border border-[#282521]"
                      />
                      <div>
                        <p className="font-serif text-[#faf7f2] font-medium">{item.product.name}</p>
                        <p className="text-[11px] text-[#948b7e]">
                          {item.selectedSize} • {item.selectedColor.name} • Qty {item.quantity}
                        </p>
                      </div>
                    </div>
                    <span className="font-semibold text-[#faf7f2]">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Paid Summary */}
            <div className="p-3 bg-[#171512] border border-[#2b2721] text-xs space-y-1 text-[#ded6c9]">
              <div className="flex justify-between">
                <span className="text-[#948b7e]">Subtotal</span>
                <span>₹{lastOrder.subtotal.toLocaleString('en-IN')}</span>
              </div>
              {lastOrder.discount > 0 && (
                <div className="flex justify-between text-[#c5a880]">
                  <span>Privilege Courtesy</span>
                  <span>-₹{lastOrder.discount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-[#948b7e]">White-Glove Shipping</span>
                <span className="text-emerald-400">Complimentary</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-[#faf7f2] pt-1.5 border-t border-[#26231e]">
                <span>Total Amount</span>
                <span className="font-sans">₹{lastOrder.total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Shipping Address Summary */}
            <div className="text-xs text-[#948b7e] leading-relaxed pt-1">
              <span className="text-[#ded6c9] font-medium block">
                Deliver to: {lastOrder.shipping.fullName} ({lastOrder.shipping.phone})
              </span>
              <p>
                {lastOrder.shipping.addressLine1}, {lastOrder.shipping.city}, {lastOrder.shipping.state} – {lastOrder.shipping.postalCode}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 space-y-2.5">
            <button
              type="button"
              onClick={handleWhatsAppStatus}
              className="w-full py-3.5 px-4 bg-[#141210] border border-[#25d366]/50 text-[#faf7f2] hover:bg-[#19241c] text-xs uppercase font-semibold tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#25d366]" />
              <span>Track Dispatch on WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleContinueShopping}
              className="w-full py-3.5 px-4 bg-[#faf7f2] text-[#0c0b0a] hover:bg-[#c5a880] text-xs uppercase font-semibold tracking-[0.2em] flex items-center justify-center gap-2 transition-colors"
            >
              <span>Return to Archive</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[10px] text-[#736a5f] mt-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>ÉLAN Lifetime Certificate of Authenticity Enclosed with Packaging</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
