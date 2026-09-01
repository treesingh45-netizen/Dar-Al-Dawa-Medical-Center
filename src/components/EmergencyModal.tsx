import React from 'react';
import { HOSPITAL_INFO } from '../data/mockData';
import {
  AlertTriangle,
  Phone,
  MapPin,
  X,
  Ambulance,
  HeartPulse,
  Clock,
  Navigation
} from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border-2 border-red-500 relative animate-in zoom-in-95 duration-200">
        {/* Red Emergency Header */}
        <div className="bg-[#E31B23] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-black/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white text-[#E31B23] flex items-center justify-center animate-pulse flex-shrink-0">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-extrabold bg-white/20 px-2 py-0.5 rounded">
                24/7 Rapid Response
              </span>
              <h2 className="font-serif text-2xl font-bold mt-1">Medical Emergency</h2>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <p className="text-sm text-gray-700 leading-relaxed">
            If you or a loved one is experiencing a medical emergency, acute chest pain, trauma, breathing difficulty, or require urgent hospital admission, contact our casualty team immediately.
          </p>

          {/* Hotline Call Box */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center space-y-3">
            <span className="text-xs font-bold text-red-700 uppercase tracking-wide">
              Emergency Direct Line
            </span>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a
                href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto bg-[#E31B23] hover:bg-red-700 text-white font-bold text-base py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
              >
                <Phone className="w-5 h-5 animate-bounce" />
                <span>Call {HOSPITAL_INFO.emergencyPhone}</span>
              </a>

              <a
                href={`tel:${HOSPITAL_INFO.mobilePhone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto bg-[#2E5010] hover:bg-[#223d0c] text-white font-semibold text-sm py-3 px-4 rounded-full flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{HOSPITAL_INFO.mobilePhone}</span>
              </a>
            </div>
          </div>

          {/* Hospital Address for Navigation */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-xs text-gray-700 space-y-2">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#8DC63F] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-gray-900">Hospital Emergency Unit Location:</strong>
                {HOSPITAL_INFO.address}
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-gray-600">
              <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>Casualty & Operating Theaters open 24 Hours / 7 Days</span>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Dar+Al+Dawa+Medical+Center+Mustafa+Town+Lahore"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#2E5010] font-semibold hover:underline"
              >
                <Navigation className="w-3.5 h-3.5" />
                Open Live GPS Navigation on Google Maps →
              </a>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 border rounded-full"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
