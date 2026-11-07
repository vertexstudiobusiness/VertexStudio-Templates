import React, { createContext, useContext, useState, useEffect } from 'react';
import { HOTEL_CONFIG, ROOMS, Room, DiningVenue, Experience } from '../data/hotelConfig';

export interface BookingState {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomCategoryId: string;
}

interface HotelContextType {
  // Currency
  currentCurrency: string;
  setCurrency: (code: string) => void;
  formatPrice: (amountINR: number) => string;
  currencySymbol: string;

  // Booking Query State
  bookingQuery: BookingState;
  setBookingQuery: React.Dispatch<React.SetStateAction<BookingState>>;
  nightsCount: number;

  // Modals
  isBookingModalOpen: boolean;
  openBookingModal: (preselectedRoomId?: string, preselectedPackageId?: string) => void;
  closeBookingModal: () => void;
  selectedBookingRoomId?: string;
  selectedPackageTitle?: string;

  isRoomModalOpen: boolean;
  activeRoom: Room | null;
  openRoomModal: (room: Room) => void;
  closeRoomModal: () => void;

  isTableModalOpen: boolean;
  activeVenue: DiningVenue | null;
  openTableModal: (venue?: DiningVenue) => void;
  closeTableModal: () => void;

  isWeddingModalOpen: boolean;
  openWeddingModal: () => void;
  closeWeddingModal: () => void;

  isExperienceModalOpen: boolean;
  activeExperience: Experience | null;
  openExperienceModal: (exp?: Experience) => void;
  closeExperienceModal: () => void;

  isLightboxOpen: boolean;
  lightboxIndex: number;
  openLightbox: (index: number) => void;
  closeLightbox: () => void;

  isDisclaimerOpen: boolean;
  openDisclaimer: () => void;
  closeDisclaimer: () => void;

  // Ambient Audio
  isAudioPlaying: boolean;
  toggleAudio: () => void;

  // Helper
  sendWhatsAppEnquiry: (customMessage: string) => void;
}

const HotelContext = createContext<HotelContextType | undefined>(undefined);

export const HotelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Currency state
  const [currentCurrency, setCurrency] = useState('INR');

  // Dates: default to tomorrow and 3 days later
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const threeDaysLater = new Date(today);
  threeDaysLater.setDate(threeDaysLater.getDate() + 4);

  const formatDateStr = (d: Date) => d.toISOString().split('T')[0];

  const [bookingQuery, setBookingQuery] = useState<BookingState>({
    checkIn: formatDateStr(tomorrow),
    checkOut: formatDateStr(threeDaysLater),
    adults: 2,
    children: 0,
    roomCategoryId: 'all',
  });

  // Calculate nights
  const calculateNights = (inDate: string, outDate: string) => {
    const start = new Date(inDate);
    const end = new Date(outDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return isNaN(diffDays) || diffDays < 1 ? 1 : diffDays;
  };

  const nightsCount = calculateNights(bookingQuery.checkIn, bookingQuery.checkOut);

  // Modals state
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedBookingRoomId, setSelectedBookingRoomId] = useState<string | undefined>(undefined);
  const [selectedPackageTitle, setSelectedPackageTitle] = useState<string | undefined>(undefined);

  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [activeRoom, setActiveRoom] = useState<Room | null>(null);

  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [activeVenue, setActiveVenue] = useState<DiningVenue | null>(null);

  const [isWeddingModalOpen, setIsWeddingModalOpen] = useState(false);

  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [activeExperience, setActiveExperience] = useState<Experience | null>(null);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  // Audio Ambient State
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);
  const [gainNode, setGainNode] = useState<GainNode | null>(null);

  const openBookingModal = (preselectedRoomId?: string, preselectedPackageId?: string) => {
    setSelectedBookingRoomId(preselectedRoomId);
    setSelectedPackageTitle(preselectedPackageId);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  const openRoomModal = (room: Room) => {
    setActiveRoom(room);
    setIsRoomModalOpen(true);
  };

  const closeRoomModal = () => {
    setIsRoomModalOpen(false);
  };

  const openTableModal = (venue?: DiningVenue) => {
    setActiveVenue(venue || null);
    setIsTableModalOpen(true);
  };

  const closeTableModal = () => {
    setIsTableModalOpen(false);
  };

  const openWeddingModal = () => setIsWeddingModalOpen(true);
  const closeWeddingModal = () => setIsWeddingModalOpen(false);

  const openExperienceModal = (exp?: Experience) => {
    setActiveExperience(exp || null);
    setIsExperienceModalOpen(true);
  };
  const closeExperienceModal = () => setIsExperienceModalOpen(false);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };
  const closeLightbox = () => setIsLightboxOpen(false);

  const openDisclaimer = () => setIsDisclaimerOpen(true);
  const closeDisclaimer = () => setIsDisclaimerOpen(false);

  // Price formatting
  const activeCurrObj =
    HOTEL_CONFIG.currencies.find((c) => c.code === currentCurrency) || HOTEL_CONFIG.currencies[0];
  const currencySymbol = activeCurrObj.symbol;

  const formatPrice = (amountINR: number) => {
    const converted = amountINR * activeCurrObj.rate;
    if (activeCurrObj.code === 'INR') {
      return `₹${Math.round(converted).toLocaleString('en-IN')}`;
    }
    return `${activeCurrObj.symbol}${Math.round(converted).toLocaleString('en-US')}`;
  };

  // WhatsApp Enquiry Generator
  const sendWhatsAppEnquiry = (customMessage: string) => {
    const encoded = encodeURIComponent(customMessage);
    const url = `https://wa.me/${HOTEL_CONFIG.contact.whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Ambient sound generator (Authentic soothing sitar/tanpura frequency synthesis)
  const toggleAudio = () => {
    try {
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
        masterGain.connect(ctx.destination);

        // Tanpura Sa & Pa drone frequencies (D3 = 146.83Hz, A3 = 220Hz, D4 = 293.66Hz)
        const freqs = [146.83, 220.0, 293.66, 440.0];
        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const oscGain = ctx.createGain();
          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Subtle harmonic pulsation
          const lfo = ctx.createOscillator();
          const lfoGain = ctx.createGain();
          lfo.frequency.setValueAtTime(0.2 + idx * 0.1, ctx.currentTime);
          lfoGain.gain.setValueAtTime(0.015, ctx.currentTime);
          lfo.connect(oscGain.gain);
          lfo.start();

          oscGain.gain.setValueAtTime(0.03 / (idx + 1), ctx.currentTime);
          osc.connect(oscGain);
          oscGain.connect(masterGain);
          osc.start();
        });

        setAudioCtx(ctx);
        setGainNode(masterGain);
        setIsAudioPlaying(true);
      } else {
        if (isAudioPlaying) {
          gainNode?.gain.setTargetAtTime(0, audioCtx.currentTime, 0.3);
          setTimeout(() => {
            audioCtx.suspend();
            setIsAudioPlaying(false);
          }, 400);
        } else {
          audioCtx.resume();
          gainNode?.gain.setTargetAtTime(0.08, audioCtx.currentTime, 0.3);
          setIsAudioPlaying(true);
        }
      }
    } catch {
      setIsAudioPlaying(false);
    }
  };

  return (
    <HotelContext.Provider
      value={{
        currentCurrency,
        setCurrency,
        formatPrice,
        currencySymbol,
        bookingQuery,
        setBookingQuery,
        nightsCount,
        isBookingModalOpen,
        openBookingModal,
        closeBookingModal,
        selectedBookingRoomId,
        selectedPackageTitle,
        isRoomModalOpen,
        activeRoom,
        openRoomModal,
        closeRoomModal,
        isTableModalOpen,
        activeVenue,
        openTableModal,
        closeTableModal,
        isWeddingModalOpen,
        openWeddingModal,
        closeWeddingModal,
        isExperienceModalOpen,
        activeExperience,
        openExperienceModal,
        closeExperienceModal,
        isLightboxOpen,
        lightboxIndex,
        openLightbox,
        closeLightbox,
        isDisclaimerOpen,
        openDisclaimer,
        closeDisclaimer,
        isAudioPlaying,
        toggleAudio,
        sendWhatsAppEnquiry,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export const useHotel = () => {
  const context = useContext(HotelContext);
  if (!context) {
    throw new Error('useHotel must be used within a HotelProvider');
  }
  return context;
};
