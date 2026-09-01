import React from 'react';
import { HOSPITAL_INFO } from '../data/mockData';
import { AlertCircle, MessageCircle, Calendar } from 'lucide-react';

interface FloatingActionsProps {
  onOpenEmergencyModal: () => void;
  onOpenAppointmentModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenEmergencyModal,
  onOpenAppointmentModal
}) => {
  return (
    <>
      {/* 1. Bottom-Right: 24/7 Emergency Sticky Pulsing Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
        <button
          onClick={onOpenEmergencyModal}
          className="group relative flex items-center gap-2 bg-[#E31B23] hover:bg-red-700 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse-ring"
          title="24/7 Emergency Call: +92 42 35413999"
          aria-label="24/7 Emergency Hotline"
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-ping"></span>
            <AlertCircle className="w-6 h-6 text-white animate-bounce" />
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-red-100 leading-none">
              24/7 Hotline
            </span>
            <span className="text-xs font-bold leading-tight">Emergency Help</span>
          </div>
        </button>
      </div>

      {/* 2. Bottom-Left: WhatsApp Reception Button */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-3 select-none">
        <a
          href={HOSPITAL_INFO.socials.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse-ring-green"
          title="Chat with Reception on WhatsApp"
          aria-label="WhatsApp Appointment & Inquiries"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="hidden md:inline text-xs font-bold">WhatsApp Inquiry</span>
        </a>
      </div>
    </>
  );
};
