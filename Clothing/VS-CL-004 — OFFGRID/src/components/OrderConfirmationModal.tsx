import React from 'react';
import { useShop } from '../context/ShopContext';
import { 
  CheckCircle2, 
  X, 
  Printer, 
  MessageSquare, 
  Package, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const OrderConfirmationModal: React.FC = () => {
  const { lastOrder, setLastOrder, navigateTo } = useShop();

  if (!lastOrder) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleClose = () => {
    setLastOrder(null);
    navigateTo('home');
  };

  const openWhatsAppTracking = () => {
    const msg = encodeURIComponent(
      `Hello OFFGRID Support! I want to track my order #${lastOrder.orderId} for ${lastOrder.shippingAddress.fullName}. Please send live shipment status.`
    );
    window.open(`https://wa.me/919820063347?text=${msg}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-2xl bg-neutral-950 border-2 border-brand-orange z-10 max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6"
        >
          {/* Close */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-brand-concrete hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Celebration Header */}
          <div className="text-center space-y-3 pb-6 border-b border-brand-border">
            <div className="w-16 h-16 bg-brand-orange/20 text-brand-orange border border-brand-orange/40 rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[10px] font-mono text-brand-orange uppercase font-bold tracking-widest block mb-1">
                DEMO TRANSACTION VERIFIED
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-offwhite uppercase tracking-tight">
                ORDER CONFIRMED: #{lastOrder.orderId}
              </h2>
              <p className="font-mono text-xs text-brand-concrete mt-1">
                Your garments have entered the packing queue at our Bandra facility.
              </p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-brand-surface border border-brand-border p-4 text-xs font-mono">
            <div>
              <span className="text-brand-concrete text-[10px] block uppercase">ORDER DATE</span>
              <span className="text-white font-bold">{lastOrder.date}</span>
            </div>
            <div>
              <span className="text-brand-concrete text-[10px] block uppercase">TOTAL AMOUNT</span>
              <span className="text-brand-orange font-bold">₹{lastOrder.total.toLocaleString('en-IN')}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-brand-concrete text-[10px] block uppercase">PAYMENT STATUS</span>
              <span className="text-emerald-400 font-bold">{lastOrder.paymentStatus}</span>
            </div>
          </div>

          {/* Items Dossier */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-brand-offwhite">
              RESERVED SILHOUETTES ({lastOrder.items.length})
            </h4>

            <div className="divide-y divide-brand-border/40 border border-brand-border bg-brand-surface">
              {lastOrder.items.map((item) => (
                <div key={item.id} className="p-3 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.product.images[0]}
                      alt=""
                      className="w-10 h-12 object-cover bg-neutral-900 border border-brand-border"
                    />
                    <div>
                      <h5 className="font-bold text-white">{item.product.name}</h5>
                      <span className="text-brand-concrete text-[11px]">
                        Size: {item.selectedSize} • Color: {item.selectedColor} • Qty: {item.quantity}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono font-bold text-brand-orange">
                    ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Address Summary */}
          <div className="bg-brand-surface border border-brand-border p-4 space-y-1 font-mono text-xs text-brand-concrete">
            <div className="flex items-center gap-1.5 text-white font-bold mb-1">
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
              <span>DISPATCH RECIPIENT</span>
            </div>
            <p className="text-brand-offwhite font-bold">{lastOrder.shippingAddress.fullName} (+91 {lastOrder.shippingAddress.phone})</p>
            <p>{lastOrder.shippingAddress.addressLine1}, {lastOrder.shippingAddress.landmark}</p>
            <p>{lastOrder.shippingAddress.city}, {lastOrder.shippingAddress.state} - {lastOrder.shippingAddress.pincode}</p>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-2">
            <button
              onClick={openWhatsAppTracking}
              className="w-full bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-[#25D366] font-mono text-xs font-bold py-3 flex items-center justify-center gap-2 transition-colors uppercase"
            >
              <MessageSquare className="w-4 h-4" />
              <span>TRACK SHIPMENT ON WHATSAPP (+91 98200 OFFGRID)</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handlePrint}
                className="bg-neutral-900 hover:bg-neutral-800 border border-brand-border text-brand-offwhite font-mono text-xs font-bold py-2.5 flex items-center justify-center gap-1.5 transition-colors uppercase"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>PRINT INVOICE</span>
              </button>

              <button
                onClick={handleClose}
                className="bg-brand-orange hover:bg-white text-black font-mono font-bold text-xs font-bold py-2.5 flex items-center justify-center gap-1.5 transition-colors uppercase"
              >
                <span>CONTINUE BROWSING</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

