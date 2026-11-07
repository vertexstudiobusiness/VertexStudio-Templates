import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  customMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  customMessage = 'Hi LUNA Collective, I would love some styling and sizing advice!'
}) => {
  const phoneNumber = '+919876543210';
  const encodedMsg = encodeURIComponent(customMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 bg-[#25D366] text-white px-3.5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group"
      aria-label="Chat with our stylist on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-white text-white" />
      <span className="text-xs font-medium tracking-wide pr-1 hidden sm:inline-block">
        WhatsApp Styling
      </span>
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
      </span>
    </a>
  );
};
