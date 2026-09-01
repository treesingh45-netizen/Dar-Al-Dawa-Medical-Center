import React, { useState } from 'react';
import { PageId } from '../types';
import {
  FACILITIES,
  FACILITY_GALLERY,
  AMENITIES,
  HOSPITAL_INFO
} from '../data/mockData';
import {
  Hospital,
  Radio,
  FlaskConical,
  HeartHandshake,
  Siren,
  Pill,
  Car,
  Coffee,
  Accessibility,
  Bed,
  Wifi,
  Shield,
  Sparkles,
  Trees,
  CheckCircle2,
  Maximize2,
  Calendar,
  Phone,
  Globe,
  Award,
  Building2,
  ShieldCheck
} from 'lucide-react';

interface FacilitiesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: () => void;
  onOpenLightbox: (index: number) => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
  onOpenLightbox
}) => {
  const renderFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hospital':
        return <Hospital className="w-8 h-8 text-[#5C8A1E]" />;
      case 'Radio':
        return <Radio className="w-8 h-8 text-[#5C8A1E]" />;
      case 'FlaskConical':
        return <FlaskConical className="w-8 h-8 text-[#5C8A1E]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-8 h-8 text-[#5C8A1E]" />;
      case 'Siren':
        return <Siren className="w-8 h-8 text-[#E31B23]" />;
      case 'Pill':
        return <Pill className="w-8 h-8 text-[#5C8A1E]" />;
      default:
        return <Hospital className="w-8 h-8 text-[#5C8A1E]" />;
    }
  };

  const renderAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car':
        return <Car className="w-6 h-6 text-[#5C8A1E]" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-[#5C8A1E]" />;
      case 'Accessibility':
        return <Accessibility className="w-6 h-6 text-[#5C8A1E]" />;
      case 'Bed':
        return <Bed className="w-6 h-6 text-[#5C8A1E]" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-[#5C8A1E]" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-[#5C8A1E]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#5C8A1E]" />;
      case 'Trees':
        return <Trees className="w-6 h-6 text-[#5C8A1E]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#5C8A1E]" />;
    }
  };

  return (
    <div className="w-full">
      {/* ═══════════════════════════════════════════════
          SECTION 5.1 — FACILITIES HERO
          ═══════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-r from-[#2E5010] to-[#1A1A2E] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs text-white/60 flex items-center gap-2">
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-white transition-colors"
              >
                Home
              </button>
              <span>&gt;</span>
              <span className="text-[#8DC63F] font-semibold">Hospital Facilities</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              State-of-the-Art Facilities
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Every corner of Dar Al Dawa Medical Center is designed for your safety, comfort, and swift clinical recovery — equipped with modern surgical towers, diagnostic imaging, and clean in-patient wards.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 5.2 — CORE FACILITIES (2x3 Large Cards)
          ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-[#F0FAE3] text-[#5C8A1E] text-xs font-bold">
              Core Hospital Infrastructure
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
              Clinical Excellence Built on Modern Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FACILITIES.map((facility) => (
              <div
                key={facility.id}
                className="bg-[#F5FAF3] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-[#D1E8B0] flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 shadow-md flex items-center justify-center">
                      {renderFacilityIcon(facility.icon)}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-xl font-bold text-[#1A1A2E]">
                      {facility.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {facility.description}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-[11px] uppercase tracking-wider font-bold text-[#5C8A1E] mb-2">
                        Key Capabilities:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {facility.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white text-[#2E5010] text-[11px] font-medium border border-gray-200"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#5C8A1E] flex-shrink-0" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white/80 border-t border-gray-200 flex justify-between items-center text-xs">
                  <span className="text-gray-500 font-medium">WHO & PMDC Standards</span>
                  <button
                    onClick={() => onOpenAppointmentModal()}
                    className="text-[#5C8A1E] font-bold hover:underline"
                  >
                    Schedule Visit →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 5.3 — FACILITY PHOTO GALLERY (Masonry Grid)
          ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#F5FAF3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-white text-[#5C8A1E] text-xs font-bold border border-[#D1E8B0]">
              Visual Tour
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
              Inside Dar Al Dawa Medical Center
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Click any photo to view in high-resolution full-screen lightbox.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FACILITY_GALLERY.map((item, index) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(index)}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer h-64 bg-gray-900"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />

                {/* Hover Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E5010]/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
                  <span className="text-[10px] uppercase font-extrabold tracking-wider bg-[#8DC63F] text-[#1A1A2E] px-2 py-0.5 rounded w-fit mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-sm font-bold leading-tight">{item.title}</h4>
                  <p className="text-[11px] text-gray-200 mt-1 line-clamp-2">{item.description}</p>
                  <div className="flex items-center gap-1 text-[11px] text-[#8DC63F] mt-2 font-bold">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Fullscreen</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 5.4 — PATIENT AMENITIES (4 Columns)
          ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-[#F0FAE3] text-[#5C8A1E] text-xs font-bold">
              Patient Comfort
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
              Patient Comfort & Amenities
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              We believe healing begins with comfort. Our facilities are thoughtfully planned to support your physical and emotional wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AMENITIES.map((amenity, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F5FAF3] border border-[#D1E8B0] hover:border-[#8DC63F] hover:shadow-md transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                  {renderAmenityIcon(amenity.icon)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1A1A2E]">{amenity.label}</h3>
                  <p className="text-xs text-gray-600 mt-1">{amenity.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 5.5 — ACCREDITATION & STANDARDS
          ═══════════════════════════════════════════════ */}
      <section className="py-16 bg-[#1A1A2E] text-white text-center px-4 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="px-3.5 py-1 rounded-full bg-white/10 text-[#8DC63F] text-xs font-bold uppercase tracking-wider">
            Accreditations & Compliance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Meeting the Highest Standards of Healthcare in Pakistan
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center">
              <Award className="w-8 h-8 text-[#8DC63F] mb-2" />
              <strong className="text-xs block text-white text-center">PMDC Registered</strong>
              <span className="text-[10px] text-gray-400 text-center">Pakistan Medical & Dental Council</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center">
              <Globe className="w-8 h-8 text-[#8DC63F] mb-2" />
              <strong className="text-xs block text-white text-center">WHO Guidelines</strong>
              <span className="text-[10px] text-gray-400 text-center">Infection Control Standards</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center">
              <ShieldCheck className="w-8 h-8 text-[#8DC63F] mb-2" />
              <strong className="text-xs block text-white text-center">ISO Sterilization</strong>
              <span className="text-[10px] text-gray-400 text-center">Autoclave & HEPA OT Protocols</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center">
              <Building2 className="w-8 h-8 text-[#8DC63F] mb-2" />
              <strong className="text-xs block text-white text-center">Punjab Health Certified</strong>
              <span className="text-[10px] text-gray-400 text-center">Department of Healthcare</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
