import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { HOSPITAL_INFO } from '../data/mockData';
import {
  MapPin,
  Phone,
  Clock,
  Menu,
  X,
  Calendar,
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
  MessageCircle,
  AlertCircle
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (doctorId?: string, departmentId?: string) => void;
  onOpenEmergencyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenAppointmentModal,
  onOpenEmergencyModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'departments', label: 'Departments' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'blog', label: 'Blog & Tips' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full z-40 sticky top-0 transition-all duration-300">
      {/* 1. TOP BAR (40px height, #2E5010) */}
      <div className="bg-[#2E5010] text-white text-xs py-2 px-4 sm:px-8 transition-all duration-300 border-b border-[#3D6816]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Location & Emergency badge */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-1.5 text-white/90">
              <MapPin className="w-3.5 h-3.5 text-[#8DC63F]" />
              {HOSPITAL_INFO.address}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#E31B23] text-white font-semibold text-[11px] animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              24/7 Emergency
            </span>
          </div>

          {/* Contact Numbers & Socials */}
          <div className="flex items-center gap-4 sm:gap-6 ml-auto">
            <a
              href={`tel:${HOSPITAL_INFO.primaryPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 font-medium hover:text-[#8DC63F] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#8DC63F]" />
              <span className="hidden md:inline">Call:</span> {HOSPITAL_INFO.primaryPhone}
            </a>

            <span className="hidden lg:inline text-white/40">|</span>

            <span className="hidden lg:flex items-center gap-1 text-white/80">
              <Clock className="w-3.5 h-3.5 text-[#8DC63F]" />
              8:00 AM – 12:00 AM Daily
            </span>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 border-l border-white/20 pl-3">
              <a
                href={HOSPITAL_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#8DC63F] transition-colors p-0.5"
                title="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={HOSPITAL_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#8DC63F] transition-colors p-0.5"
                title="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={HOSPITAL_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#8DC63F] transition-colors p-0.5"
                title="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a
                href={HOSPITAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#8DC63F] transition-colors p-0.5"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV (72px, Sticky, White) */}
      <nav
        className={`bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-md py-3' : 'shadow-sm py-4'
        } border-b border-gray-100`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-none focus:ring-2 focus:ring-[#8DC63F] rounded-lg p-1"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-full text-[15px] font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#2E5010] font-semibold bg-[#F0FAE3]'
                      : 'text-[#1A1A2E] hover:text-[#5C8A1E] hover:bg-[#F5FAF3]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#8DC63F] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEmergencyModal}
              className="px-3.5 py-2 text-xs font-semibold text-[#E31B23] hover:bg-red-50 rounded-full border border-red-200 transition-colors flex items-center gap-1.5"
            >
              <AlertCircle className="w-4 h-4 text-[#E31B23]" />
              <span className="hidden xl:inline">Emergency Help</span>
            </button>

            <button
              onClick={() => onOpenAppointmentModal()}
              className="bg-[#8DC63F] hover:bg-[#7cb32e] text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] flex items-center gap-2 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenAppointmentModal()}
              className="sm:hidden bg-[#8DC63F] text-white p-2 rounded-full"
              title="Book Appointment"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-[#2E5010] hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* 3. MOBILE SLIDE-IN MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[110px] z-50 lg:hidden flex flex-col bg-white/95 backdrop-blur-md shadow-2xl border-t border-gray-100 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-6 py-6 flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                    isActive
                      ? 'bg-[#8DC63F] text-white font-semibold shadow-sm'
                      : 'text-[#1A1A2E] hover:bg-[#F0FAE3] hover:text-[#2E5010]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="w-full bg-[#8DC63F] text-white py-3.5 rounded-full font-semibold text-center shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment Now
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEmergencyModal();
                }}
                className="w-full bg-[#E31B23] text-white py-3 rounded-full font-semibold text-center shadow-sm flex items-center justify-center gap-2"
              >
                <AlertCircle className="w-5 h-5" />
                24/7 Emergency Line: +92 42 35413999
              </button>

              <a
                href={HOSPITAL_INFO.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] text-white py-3 rounded-full font-semibold text-center shadow-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with Reception on WhatsApp
              </a>
            </div>

            {/* Address info in mobile nav */}
            <div className="pt-4 text-xs text-gray-500 text-center space-y-1.5 flex flex-col items-center">
              <p className="flex items-center justify-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#5C8A1E]" />
                {HOSPITAL_INFO.address}
              </p>
              <p className="flex items-center justify-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#5C8A1E]" />
                Mon–Sun: 08:00 AM – 12:00 AM | 24/7 Emergency
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
