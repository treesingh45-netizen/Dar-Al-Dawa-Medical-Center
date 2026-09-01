import React, { useState } from 'react';
import { PageId } from '../types';
import { DEPARTMENTS, HOSPITAL_INFO } from '../data/mockData';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Tag,
  Stethoscope,
  Smile,
  Sparkles,
  HeartHandshake,
  Activity,
  Wind,
  Baby,
  Radio,
  Microscope,
  Headphones,
  Dna,
  ShieldCheck,
  HeartPulse,
  Phone,
  FlaskConical,
  Pill,
  ArrowRight,
  AlertCircle,
  Siren,
  Hospital,
  ShieldAlert
} from 'lucide-react';

interface DepartmentsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (doctorId?: string, departmentId?: string) => void;
  onOpenEmergencyModal: () => void;
}

export const DepartmentsPage: React.FC<DepartmentsPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
  onOpenEmergencyModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Departments' },
    { id: 'medical', label: 'Medical Specialties' },
    { id: 'dental', label: 'Dental' },
    { id: 'aesthetic', label: 'Facial Aesthetics' },
    { id: 'gyn_obs', label: 'GYN & OBS' },
    { id: 'diabetology', label: 'Diabetology' },
    { id: 'pulmonology', label: 'Pulmonology' },
    { id: 'pediatrics', label: 'Pediatrics' },
    { id: 'radiology', label: 'Radiology' },
    { id: 'urology', label: 'Urology' },
    { id: 'ent', label: 'ENT' },
    { id: 'oncology', label: 'Oncology' },
    { id: 'anesthesiology', label: 'Anesthesiology' }
  ];

  const filteredDepartments =
    selectedCategory === 'all'
      ? DEPARTMENTS
      : DEPARTMENTS.filter((dept) => dept.category === selectedCategory);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-7 h-7 text-[#5C8A1E]" />;
      case 'Smile':
        return <Smile className="w-7 h-7 text-[#5C8A1E]" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-[#5C8A1E]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-7 h-7 text-[#5C8A1E]" />;
      case 'Activity':
        return <Activity className="w-7 h-7 text-[#5C8A1E]" />;
      case 'Wind':
        return <Wind className="w-7 h-7 text-[#5C8A1E]" />;
      case 'Baby':
        return <Baby className="w-7 h-7 text-[#5C8A1E]" />;
      case 'Radio':
        return <Radio className="w-7 h-7 text-[#5C8A1E]" />;
      case 'Microscope':
        return <Microscope className="w-7 h-7 text-[#5C8A1E]" />;
      case 'Headphones':
        return <Headphones className="w-7 h-7 text-[#5C8A1E]" />;
      case 'Dna':
        return <Dna className="w-7 h-7 text-[#5C8A1E]" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-[#5C8A1E]" />;
    }
  };

  return (
    <div className="w-full">
      {/* ═══════════════════════════════════════════════
          SECTION 3.1 — DEPARTMENTS HERO
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
              <span className="text-[#8DC63F] font-semibold">Departments & Services</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Our Departments & Services
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              From cardiology to cosmetic dentistry, Dar Al Dawa Medical Center offers expert, specialized care across every medical discipline — all under one roof in Mustafa Town, Lahore.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 3.2 — DEPARTMENT FILTER TABS (Sticky)
          ═══════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-200 sticky top-[72px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#8DC63F] text-white shadow-sm'
                      : 'bg-[#F0FAE3] text-[#5C8A1E] hover:bg-[#e1f4cb]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 3.3 — DEPARTMENT CARDS GRID
          ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#F5FAF3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredDepartments.map((dept) => (
              <div
                key={dept.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border-t-4 border-[#8DC63F] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Department Top Bar */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-14 h-14 rounded-2xl bg-[#F0FAE3] flex items-center justify-center flex-shrink-0">
                        {renderIcon(dept.icon)}
                      </div>
                      <div>
                        <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A2E]">
                          {dept.name}
                        </h2>
                        <p className="text-xs text-[#5C8A1E] font-semibold">
                          Lead: {dept.leadDoctor}
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-[#F0FAE3] text-[#2E5010] text-xs font-bold rounded-full border border-[#D1E8B0] flex-shrink-0">
                      Open Mon–Sat
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 leading-relaxed">{dept.description}</p>

                  {/* Conditions Treated Tags */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-2 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-[#8DC63F]" />
                      Conditions & Procedures:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {dept.conditions.map((cond, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-[#F5FAF3] text-[#2E5010] text-xs font-medium border border-[#D1E8B0]"
                        >
                          {cond}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Timings */}
                  <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                    <Clock className="w-4 h-4 text-[#8DC63F]" />
                    <span>
                      <strong>Clinic Hours:</strong> {dept.hours}
                    </span>
                  </div>
                </div>

                {/* Bottom CTA Buttons */}
                <div className="pt-6 mt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onNavigate('doctors')}
                    className="flex-1 py-2.5 px-4 rounded-full border border-[#8DC63F] text-[#2E5010] font-semibold text-xs hover:bg-[#F0FAE3] transition-colors text-center"
                  >
                    View Specialists
                  </button>
                  <button
                    onClick={() => onOpenAppointmentModal(undefined, dept.id)}
                    className="flex-1 py-2.5 px-4 rounded-full bg-[#8DC63F] hover:bg-[#7cb32e] text-white font-bold text-xs shadow-sm transition-colors text-center flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 3.4 — EMERGENCY SERVICES HIGHLIGHT
          ═══════════════════════════════════════════════ */}
      <section className="bg-[#1A1A2E] text-white py-16 px-4 sm:px-8 border-y-4 border-[#E31B23]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-[#E31B23] text-white text-xs font-bold uppercase tracking-wider">
              24/7 Emergency & Critical Care
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Always Ready When Every Second Counts
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
              Our Casualty and Emergency Unit operates around the clock with experienced triage medical officers, crash carts, oxygen supply, and direct access to major surgical theaters and diagnostic imaging.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
              <span className="flex items-center gap-1.5 text-gray-200">
                <Siren className="w-4 h-4 text-[#E31B23]" /> Immediate Triage
              </span>
              <span className="flex items-center gap-1.5 text-gray-200">
                <HeartPulse className="w-4 h-4 text-[#8DC63F]" /> On-Call Specialists
              </span>
              <span className="flex items-center gap-1.5 text-gray-200">
                <Pill className="w-4 h-4 text-[#8DC63F]" /> 24/7 Pharmacy
              </span>
              <span className="flex items-center gap-1.5 text-gray-200">
                <Hospital className="w-4 h-4 text-[#8DC63F]" /> Direct ICU/OT
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 text-center lg:text-right">
            <button
              onClick={onOpenEmergencyModal}
              className="bg-[#E31B23] hover:bg-red-700 text-white font-extrabold text-base py-4 px-8 rounded-full shadow-2xl transition-all inline-flex items-center gap-2 animate-pulse"
            >
              <Phone className="w-5 h-5" />
              <span>Emergency: +92 42 35413999</span>
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 3.5 — LABORATORY & PHARMACY SPLIT
          ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Laboratory */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F5FAF3] border border-[#D1E8B0] space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#8DC63F] text-white flex items-center justify-center shadow-md">
                <FlaskConical className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1A1A2E]">
                In-House Diagnostic Laboratory
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Our state-of-the-art diagnostic laboratory processes a complete range of blood tests, pathology specimens, and cultures with fast turnaround times and high accuracy.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs pt-2">
                <span className="p-2 bg-white rounded-lg border text-center font-medium">CBC & ESR</span>
                <span className="p-2 bg-white rounded-lg border text-center font-medium">LFTs & RFTs</span>
                <span className="p-2 bg-white rounded-lg border text-center font-medium">HbA1c Sugar</span>
                <span className="p-2 bg-white rounded-lg border text-center font-medium">Lipid Profile</span>
                <span className="p-2 bg-white rounded-lg border text-center font-medium">Thyroid Panel</span>
                <span className="p-2 bg-white rounded-lg border text-center font-medium">Urine / Blood Cultures</span>
              </div>
            </div>

            {/* Pharmacy */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F5FAF3] border border-[#D1E8B0] space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#2E5010] text-white flex items-center justify-center shadow-md">
                <Pill className="w-8 h-8 text-[#8DC63F]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1A1A2E]">
                On-Site Dispensing Pharmacy
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Conveniently located on the ground floor, our pharmacy stocks 100% genuine prescription medicines, surgical items, and OTC wellness products under strict temperature-controlled storage.
              </p>

              <div className="p-4 bg-white rounded-2xl border border-gray-200 text-xs text-gray-700 space-y-2">
                <div className="flex items-center gap-2 text-[#2E5010] font-bold">
                  <Clock className="w-4 h-4 text-[#8DC63F]" />
                  <span>Open 7 Days a Week: 08:00 AM – 12:00 AM Midnight</span>
                </div>
                <p className="text-gray-500">
                  Emergency medications and IV fluids stocked 24 hours daily for casualty admissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
