import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ModalDialogProps {
  isOpen: boolean;
  onClose: () => void;
  titleId?: string;
  title?: React.ReactNode;
  children: React.ReactNode;
  maxWidthClass?: string;
  ariaLabel?: string;
}

export const ModalDialog: React.FC<ModalDialogProps> = ({
  isOpen,
  onClose,
  titleId = 'modal-title',
  title,
  children,
  maxWidthClass = 'max-w-3xl',
  ariaLabel,
}) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  // Synchronize open state with native dialog.showModal()
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        try {
          dialog.showModal();
        } catch {
          // If already open, do nothing
        }
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  // Handle native cancel event (Esc key) and click outside fallback
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };

    const handleClose = () => {
      onClose();
    };

    // Fallback for browsers that do not support closedby="any"
    const handlePointerDown = (event: MouseEvent) => {
      if (!('closedBy' in HTMLDialogElement.prototype)) {
        if (event.target === dialog) {
          const rect = dialog.getBoundingClientRect();
          const isInside =
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width;
          if (!isInside) {
            onClose();
          }
        }
      }
    };

    dialog.addEventListener('cancel', handleCancel);
    dialog.addEventListener('close', handleClose);
    dialog.addEventListener('click', handlePointerDown);

    return () => {
      dialog.removeEventListener('cancel', handleCancel);
      dialog.removeEventListener('close', handleClose);
      dialog.removeEventListener('click', handlePointerDown);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      // @ts-ignore
      closedby="any"
      aria-labelledby={title ? titleId : undefined}
      aria-label={!title ? (ariaLabel || 'Information dialog') : undefined}
      className={`relative w-full ${maxWidthClass} mx-auto my-auto p-0 rounded-2xl bg-[#fcfbf9] text-[#143d34] shadow-2xl border border-[#c5a880]/30 outline-none backdrop:bg-[#05130f]/80 backdrop:backdrop-blur-md transition-all duration-300 max-h-[90vh] overflow-y-auto`}
    >
      <div className="sticky top-0 z-20 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5 border-b border-[#c5a880]/20 bg-[#fcfbf9]/95 backdrop-blur-sm">
        {title ? (
          <h3 id={titleId} className="font-serif text-xl sm:text-2xl text-[#0b251f] font-medium tracking-wide">
            {title}
          </h3>
        ) : <div />}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="p-2 -mr-2 text-[#143d34]/70 hover:text-[#0b251f] hover:bg-[#c5a880]/15 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      <div className="p-5 sm:p-8">
        {children}
      </div>
    </dialog>
  );
};
