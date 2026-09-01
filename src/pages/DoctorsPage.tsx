import React, { useState } from 'react';
import { PageId, Doctor } from '../types';
import { DOCTORS, HOSPITAL_INFO } from '../data/mockData';
import {
  Calendar,
  Clock,
  Award,
  Phone,
  Mail,
  User,
  ShieldCheck,
  Briefcase,
  ChevronRight,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface DoctorsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (doctorId?: string, departmentId?: string) => void;
  onSelectDoctor: (doctorId: string) => void;
}

export const DoctorsPage: React.FC<DoctorsPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
  onSelectDoctor
}) => {
  const [selectedDeptFilter, setSelectedDeptFilter] = useState<string>('all');

  const deptFilters = [
    { id: 'all', label: 'All Specialists' },
    { id: 'medical-specialties', label: 'General Surgery & Medicine' },
    { id: 'urology', label: 'Urology' },
    { id: 'pulmonology', label: 'Pulmonology' },
    { id: 'ent', label: 'ENT' },
    { id: 'radiology', label: 'Radiology' },
    { id: 'diabetology', label: 'Diabetology' },
    { id: 'oncology', label: 'Oncology' },
    { id: 'gyn-obs', label: 'GYN & OBS' },
    { id: 'dental-specialties', label: 'Dental' },
    { id: 'facial-aesthetics', label: 'Facial Aesthetics' }
  ];

  const filteredDoctors =
    selectedDeptFilter === 'all'
      ? DOCTORS
      : DOCTORS.filter((doc) => doc.departmentId === selectedDeptFilter);

  return (
    <div className="w-full">
      {/* ═══════════════════════════════════════════════
          SECTION 4.1 — DOCTORS PAGE HERO
          ═══════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-[#2E5010] to-[#1A1A2E] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs text-white/60 flex items-center gap-2">
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-white transition-colors"
              >
                Home
              </button>
              <span>&gt;</span>
              <span className="text-[#8DC63F] font-semibold">Specialist Doctors</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Our Medical Specialists
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Dar Al Dawa's consultant physicians and surgeons are among the best in their fields, bringing decades of clinical excellence, PMDC credentials, and compassionate patient care.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 4.2 — DEPARTMENT FILTER
          ═══════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-200 sticky top-[72px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {deptFilters.map((filter) => {
              const isActive = selectedDeptFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setSelectedDeptFilter(filter.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#8DC63F] text-white shadow-sm'
                      : 'bg-[#F0FAE3] text-[#5C8A1E] hover:bg-[#e1f4cb]'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 4.3 — DOCTOR CARDS GRID
          ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#F5FAF3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border-t-4 border-[#8DC63F] flex flex-col justify-between"
              >
                {/* Doctor Headshot & Details */}
                <div className="p-6 text-center space-y-4">
                  <div className="relative w-32 h-32 mx-auto cursor-pointer" onClick={() => onSelectDoctor(doc.id)}>
                    <img
                      src={doc.image}
                      alt={doc.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full rounded-full object-cover border-4 border-[#F0FAE3] shadow-md hover:scale-105 transition-transform"
                    />
                    <span className="absolute bottom-1 right-2 w-6 h-6 rounded-full bg-[#8DC63F] text-white flex items-center justify-center border-2 border-white shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5 text-white" />
                    </span>
                  </div>

                  <div>
                    <h3
                      onClick={() => onSelectDoctor(doc.id)}
                      className="font-serif text-xl font-bold text-[#1A1A2E] hover:text-[#5C8A1E] cursor-pointer transition-colors"
                    >
                      {doc.name}
                    </h3>
                    <span className="inline-block mt-1 px-3 py-1 bg-[#F0FAE3] text-[#2E5010] text-xs font-bold rounded-full">
                      {doc.specialty}
                    </span>
                    <p className="text-xs text-gray-500 font-medium mt-1">{doc.qualification}</p>
                  </div>

                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {doc.bio}
                  </p>

                  <div className="pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                    <div className="flex items-center justify-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#8DC63F]" />
                      <span>{doc.timings}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5 text-gray-500">
                      <Phone className="w-3.5 h-3.5 text-[#8DC63F]" />
                      <span>{doc.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-4 bg-gray-50 border-t border-gray-100 flex gap-2">
                  <button
                    onClick={() => onSelectDoctor(doc.id)}
                    className="flex-1 py-2.5 px-3 rounded-full border border-gray-300 text-gray-700 font-semibold text-xs hover:bg-white transition-colors"
                  >
                    Full Profile
                  </button>
                  <button
                    onClick={() => onOpenAppointmentModal(doc.id, doc.departmentId)}
                    className="flex-1 py-2.5 px-3 rounded-full bg-[#8DC63F] hover:bg-[#7cb32e] text-white font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-1"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book Slot
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 4.5 — JOIN OUR TEAM STRIP
          ═══════════════════════════════════════════════ */}
      <section className="py-16 bg-[#2E5010] text-white text-center px-4 sm:px-8">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#8DC63F] text-white flex items-center justify-center mx-auto">
            <Briefcase className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Are You a Qualified Medical Professional?
          </h2>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
            Dar Al Dawa Medical Center is always looking for skilled, compassionate doctors, surgeons, nurses, and paramedical healthcare staff to join our expanding clinical faculty in Lahore.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${HOSPITAL_INFO.careersEmail}?subject=Medical%20Career%20Application%20-%20Dar%20Al%20Dawa`}
              className="bg-white text-[#2E5010] hover:bg-gray-100 font-bold px-8 py-3.5 rounded-full text-sm shadow-md transition-all inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#8DC63F]" />
              <span>Send Your CV to {HOSPITAL_INFO.careersEmail}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
