import React, { useState } from 'react';
import { Doctor } from '../types';
import {
  X,
  Calendar,
  Clock,
  Award,
  GraduationCap,
  Briefcase,
  Phone,
  Mail,
  CheckCircle,
  ChevronRight,
  Shield
} from 'lucide-react';

interface DoctorDetailDrawerProps {
  doctor: Doctor | null;
  isOpen: boolean;
  onClose: () => void;
  onBookAppointment: (doctorId: string, departmentId: string) => void;
}

export const DoctorDetailDrawer: React.FC<DoctorDetailDrawerProps> = ({
  doctor,
  isOpen,
  onClose,
  onBookAppointment
}) => {
  const [activeTab, setActiveTab] = useState<'about' | 'qualifications' | 'timings'>('about');

  if (!isOpen || !doctor) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-2xl bg-white shadow-2xl flex flex-col transform transition-transform duration-300 animate-in slide-in-from-right">
          {/* Top Bar with Close Button */}
          <div className="bg-[#2E5010] text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#8DC63F]" />
              <span className="text-xs uppercase tracking-wider font-semibold">
                PMDC Certified Medical Specialist
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Header Profile */}
          <div className="p-6 bg-[#F5FAF3] border-b border-[#D1E8B0] flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left">
            <img
              src={doctor.image}
              alt={doctor.name}
              referrerPolicy="no-referrer"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-white shadow-md flex-shrink-0"
            />
            <div className="space-y-1.5 flex-1">
              <span className="inline-block px-3 py-1 bg-[#8DC63F] text-white rounded-full text-xs font-semibold">
                {doctor.specialty}
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#1A1A2E]">{doctor.name}</h2>
              <p className="text-xs text-[#5C8A1E] font-medium">{doctor.qualification}</p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-gray-600 pt-1">
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-[#8DC63F]" />
                  {doctor.experience}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#8DC63F]" />
                  {doctor.timings}
                </span>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 px-6 bg-white sticky top-0 z-10">
            <button
              onClick={() => setActiveTab('about')}
              className={`py-3.5 px-4 text-sm font-semibold border-b-2 transition-all ${
                activeTab === 'about'
                  ? 'border-[#8DC63F] text-[#2E5010]'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              About & Expertise
            </button>
            <button
              onClick={() => setActiveTab('qualifications')}
              className={`py-3.5 px-4 text-sm font-semibold border-b-2 transition-all ${
                activeTab === 'qualifications'
                  ? 'border-[#8DC63F] text-[#2E5010]'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Qualifications & Credentials
            </button>
            <button
              onClick={() => setActiveTab('timings')}
              className={`py-3.5 px-4 text-sm font-semibold border-b-2 transition-all ${
                activeTab === 'timings'
                  ? 'border-[#8DC63F] text-[#2E5010]'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              OPD Timings & Schedule
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {activeTab === 'about' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1A1A2E] mb-2">
                    Professional Biography
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{doctor.bio}</p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1A1A2E] mb-3">
                    Areas of Clinical Focus
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {doctor.specializations.map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs bg-[#F5FAF3] p-2.5 rounded-lg border border-[#D1E8B0] text-[#2E5010]"
                      >
                        <CheckCircle className="w-4 h-4 text-[#8DC63F] flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-xs space-y-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#8DC63F]" />
                    <span>Clinic Helpline: {doctor.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#8DC63F]" />
                    <span>Consultation Email: {doctor.email}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'qualifications' && (
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#1A1A2E]">
                  Academic & Professional Degrees
                </h3>
                <div className="space-y-3">
                  {doctor.degrees.map((deg, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-xl border border-gray-200 hover:border-[#8DC63F] bg-white transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#F0FAE3] text-[#5C8A1E] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">{deg.degree}</h4>
                        <p className="text-xs text-gray-600">{deg.institution}</p>
                        <span className="text-[11px] text-gray-400 font-medium">Class of {deg.year}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-[#F0FAE3] border border-[#D1E8B0] text-xs text-[#2E5010]">
                  <strong>Pakistan Medical & Dental Council (PMDC) Verified:</strong> Active registration and good-standing practitioner status.
                </div>
              </div>
            )}

            {activeTab === 'timings' && (
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#1A1A2E]">
                  Weekly Clinic Schedule
                </h3>
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#2E5010] text-white">
                      <tr>
                        <th className="py-2.5 px-3 font-semibold">Day</th>
                        <th className="py-2.5 px-3 font-semibold">Morning Session</th>
                        <th className="py-2.5 px-3 font-semibold">Evening Session</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {doctor.schedule.map((slot, i) => (
                        <tr key={i} className="hover:bg-[#F5FAF3]">
                          <td className="py-2.5 px-3 font-semibold text-gray-900">{slot.day}</td>
                          <td className="py-2.5 px-3 text-gray-600">{slot.morning}</td>
                          <td className="py-2.5 px-3 font-medium text-[#2E5010] bg-[#F0FAE3]/40">
                            {slot.evening}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[11px] text-gray-500 italic">
                  * Note: Timings may vary on public holidays or emergency on-call duties. Prior booking is recommended.
                </p>
              </div>
            )}
          </div>

          {/* Sticky Drawer Footer CTA */}
          <div className="p-4 bg-white border-t border-gray-200 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold text-gray-600 hover:text-gray-900 border rounded-full"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookAppointment(doctor.id, doctor.departmentId);
              }}
              className="flex-1 bg-[#8DC63F] hover:bg-[#7cb32e] text-white py-3 px-6 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment with {doctor.name.split(' ')[0]} {doctor.name.split(' ')[1]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
