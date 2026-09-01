import React from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { HOSPITAL_INFO } from '../data/mockData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
  ShieldCheck,
  Heart,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: () => void;
  onOpenEmergencyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenAppointmentModal,
  onOpenEmergencyModal
}) => {
  const quickLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'departments', label: 'Departments & Services' },
    { id: 'doctors', label: 'Our Specialist Doctors' },
    { id: 'facilities', label: 'Hospital Facilities' },
    { id: 'blog', label: 'Health Tips & Blog' },
    { id: 'contact', label: 'Contact Us & Location' }
  ];

  const departmentLinks = [
    'Medical Specialties',
    'Dental Specialties',
    'Facial Aesthetics',
    'GYN & OBS (Maternity)',
    'Diabetology & Hormones',
    'Pulmonology & Chest',
    'Pediatrics & Child Health',
    'Radiology & Diagnostics',
    'Urology & Kidney Stones',
    'ENT (Ear, Nose, Throat)',
    'Oncology & Cancer Care',
    'Anesthesiology & ICU'
  ];

  return (
    <footer className="bg-[#1A1A2E] text-[#A0AEC0] pt-16 pb-8 border-t-4 border-[#8DC63F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 — Brand Information */}
          <div className="space-y-4">
            <Logo size="md" textColor="white" />
            <p className="text-sm italic text-[#8DC63F] font-medium pt-1">
              "{HOSPITAL_INFO.tagline}"
            </p>
            <p className="text-sm leading-relaxed text-gray-300">
              Located in Mustafa Town, Lahore, Dar Al Dawa Medical Center is a state-of-the-art multi-specialty hospital dedicated to delivering compassionate, evidence-based clinical care 7 days a week.
            </p>

            {/* Social Links */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-2.5">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={HOSPITAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#8DC63F] text-white hover:text-[#1A1A2E] flex items-center justify-center transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={HOSPITAL_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#8DC63F] text-white hover:text-[#1A1A2E] flex items-center justify-center transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={HOSPITAL_INFO.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#8DC63F] text-white hover:text-[#1A1A2E] flex items-center justify-center transition-all duration-200"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={HOSPITAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#8DC63F] text-white hover:text-[#1A1A2E] flex items-center justify-center transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8DC63F]"></span>
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#8DC63F] transition-colors flex items-center gap-1.5 group text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#8DC63F] opacity-70 group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={onOpenAppointmentModal}
                className="w-full bg-[#8DC63F] hover:bg-[#7cb32e] text-white text-xs font-semibold py-2.5 px-4 rounded-full text-center transition-all shadow-sm flex items-center justify-center gap-1.5"
              >
                Schedule Appointment
              </button>
            </div>
          </div>

          {/* Col 3 — Departments */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8DC63F]"></span>
              Specialty Care
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              {departmentLinks.map((dept, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      onNavigate('departments');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#8DC63F] transition-colors flex items-center gap-1.5 group text-left text-xs sm:text-sm text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8DC63F]/50 group-hover:bg-[#8DC63F]"></span>
                    <span>{dept}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact & Hours */}
          <div className="space-y-4">
            <h3 className="text-white font-serif text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8DC63F]"></span>
              Hospital Location & Hours
            </h3>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8DC63F] flex-shrink-0 mt-1" />
                <p className="leading-snug">
                  {HOSPITAL_INFO.address}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#8DC63F] flex-shrink-0" />
                <div>
                  <a
                    href={`tel:${HOSPITAL_INFO.primaryPhone.replace(/\s+/g, '')}`}
                    className="hover:text-[#8DC63F] font-medium transition-colors"
                  >
                    {HOSPITAL_INFO.primaryPhone}
                  </a>
                  <span className="mx-1.5 text-gray-500">|</span>
                  <a
                    href={`tel:${HOSPITAL_INFO.mobilePhone.replace(/\s+/g, '')}`}
                    className="hover:text-[#8DC63F] font-medium transition-colors"
                  >
                    {HOSPITAL_INFO.mobilePhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#8DC63F] flex-shrink-0" />
                <a
                  href={`mailto:${HOSPITAL_INFO.emails[0]}`}
                  className="hover:text-[#8DC63F] transition-colors"
                >
                  {HOSPITAL_INFO.emails[0]}
                </a>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Clock className="w-4 h-4 text-[#8DC63F] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white text-xs">Regular OPD & Clinics:</p>
                  <p className="text-xs text-gray-400">Mon–Sun: 08:00 AM – 12:00 AM</p>
                </div>
              </div>
            </div>

            {/* Emergency Hotline Box */}
            <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-800/60 mt-2">
              <div className="flex items-center gap-2 text-white font-semibold text-xs mb-1">
                <AlertCircle className="w-4 h-4 text-[#E31B23] animate-pulse" />
                <span>24/7 Emergency Casualty Unit</span>
              </div>
              <p className="text-xs text-red-200 mb-2">
                Always open for critical care, trauma & surgical admissions.
              </p>
              <button
                onClick={onOpenEmergencyModal}
                className="w-full py-1.5 rounded-md bg-[#E31B23] hover:bg-red-700 text-white text-xs font-bold transition-colors"
              >
                Call Emergency Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2025 Dar Al Dawa Medical Center. All Rights Reserved. Lahore, Pakistan.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">PMDC Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
