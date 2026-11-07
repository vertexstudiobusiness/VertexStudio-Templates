import React from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useShop();

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-[100] flex flex-col gap-2 max-w-[90vw] sm:max-w-md pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className={`pointer-events-auto flex items-start gap-3 p-4 border shadow-2xl ${
              toast.type === 'error'
                ? 'bg-neutral-950 border-red-600/70 text-white shadow-red-950/40'
                : toast.type === 'info'
                ? 'bg-neutral-950 border-brand-border text-brand-offwhite'
                : 'bg-neutral-950 border-brand-orange text-brand-offwhite shadow-brand-orange/20'
            }`}
          >
            <div className="mt-0.5 shrink-0">
              {toast.type === 'error' ? (
                <AlertCircle className="w-5 h-5 text-red-500" />
              ) : toast.type === 'info' ? (
                <Info className="w-5 h-5 text-brand-concrete" />
              ) : (
                <CheckCircle2 className="w-5 h-5 text-brand-orange" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-brand-offwhite">
                {toast.title}
              </p>
              {toast.message && (
                <p className="text-xs text-brand-concrete mt-0.5 truncate">
                  {toast.message}
                </p>
              )}
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-brand-concrete hover:text-white p-1 -mr-1"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

