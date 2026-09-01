import React, { useState, useEffect } from 'react';
import { DEPARTMENTS, DOCTORS, HOSPITAL_INFO } from '../data/mockData';
import { AppointmentData } from '../types';
import confetti from 'canvas-confetti';
import {
  X,
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle2,
  FileText,
  Building2,
  Stethoscope,
  Printer,
  Sparkles,
  AlertCircle,
  MapPin
} from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctorId?: string;
  initialDepartmentId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialDoctorId,
  initialDepartmentId
}) => {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    department: initialDepartmentId || '',
    doctor: initialDoctorId || '',
    preferredDate: '',
    preferredTime: '11:00 AM',
    message: '',
    termsAccepted: true
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<AppointmentData | null>(null);

  useEffect(() => {
    if (initialDepartmentId) {
      setFormData((prev) => ({ ...prev, department: initialDepartmentId }));
    }
    if (initialDoctorId) {
      const selectedDoc = DOCTORS.find((d) => d.id === initialDoctorId);
      if (selectedDoc) {
        setFormData((prev) => ({
          ...prev,
          doctor: initialDoctorId,
          department: selectedDoc.departmentId
        }));
      }
    }
  }, [initialDoctorId, initialDepartmentId]);

  if (!isOpen) return null;

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
    '08:00 PM',
    '09:00 PM'
  ];

  // Filter doctors based on department
  const filteredDoctors = formData.department
    ? DOCTORS.filter((doc) => doc.departmentId === formData.department)
    : DOCTORS;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Please enter your full name';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.department) {
      newErrors.department = 'Please select a medical department';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please choose a preferred appointment date';
    }
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'Please accept the privacy and booking consent';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newBooking: AppointmentData = {
      id: `DAD-${Math.floor(100000 + Math.random() * 900000)}`,
      patientName: formData.patientName,
      phone: formData.phone,
      email: formData.email,
      department: DEPARTMENTS.find((d) => d.id === formData.department)?.name || formData.department,
      doctor: DOCTORS.find((d) => d.id === formData.doctor)?.name || 'Consultant on Duty',
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      message: formData.message,
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      status: 'Confirmed'
    };

    setConfirmedBooking(newBooking);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setConfirmedBooking(null);
    setFormData({
      patientName: '',
      phone: '',
      email: '',
      department: '',
      doctor: '',
      preferredDate: '',
      preferredTime: '11:00 AM',
      message: '',
      termsAccepted: true
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border border-gray-100">
        {/* Header */}
        <div className="sticky top-0 bg-[#2E5010] text-white px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#8DC63F] flex items-center justify-center text-white">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold">Book an Appointment</h2>
              <p className="text-xs text-white/80">Dar Al Dawa Medical Center, Lahore</p>
            </div>
          </div>
          <button
            onClick={resetForm}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-[#F0FAE3] p-3 rounded-xl border border-[#D1E8B0] flex items-center gap-2.5 text-xs text-[#2E5010]">
                <Clock className="w-4 h-4 text-[#5C8A1E] flex-shrink-0" />
                <span>Our clinic reception will confirm your slot within 2 hours. Open 7 days a week!</span>
              </div>

              {/* Patient Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Patient Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Usman Malik"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${
                        errors.patientName
                          ? 'border-red-400 focus:border-red-500 bg-red-50/50'
                          : 'border-[#D1E8B0] focus:border-[#8DC63F] bg-[#F5FAF3]/40'
                      }`}
                    />
                  </div>
                  {errors.patientName && (
                    <p className="text-xs text-red-500 mt-1">{errors.patientName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="e.g. 0311 9944897"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${
                        errors.phone
                          ? 'border-red-400 focus:border-red-500 bg-red-50/50'
                          : 'border-[#D1E8B0] focus:border-[#8DC63F] bg-[#F5FAF3]/40'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email Address (Optional)
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    placeholder="e.g. patient@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#D1E8B0] focus:border-[#8DC63F] text-sm bg-[#F5FAF3]/40 focus:outline-none"
                  />
                </div>
              </div>

              {/* Department & Doctor Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Department <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <select
                      value={formData.department}
                      onChange={(e) =>
                        setFormData({ ...formData, department: e.target.value, doctor: '' })
                      }
                      className={`w-full pl-9 pr-3 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors appearance-none bg-white ${
                        errors.department ? 'border-red-400' : 'border-[#D1E8B0] focus:border-[#8DC63F]'
                      }`}
                    >
                      <option value="">-- Select Department --</option>
                      {DEPARTMENTS.map((dept) => (
                        <option key={dept.id} value={dept.id}>
                          {dept.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.department && (
                    <p className="text-xs text-red-500 mt-1">{errors.department}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Preferred Doctor (Optional)
                  </label>
                  <div className="relative">
                    <Stethoscope className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <select
                      value={formData.doctor}
                      onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#D1E8B0] focus:border-[#8DC63F] text-sm focus:outline-none appearance-none bg-white"
                    >
                      <option value="">Any Available Specialist</option>
                      {filteredDoctors.map((doc) => (
                        <option key={doc.id} value={doc.id}>
                          {doc.name} — {doc.specialty}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className={`w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none ${
                      errors.preferredDate
                        ? 'border-red-400'
                        : 'border-[#D1E8B0] focus:border-[#8DC63F]'
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="text-xs text-red-500 mt-1">{errors.preferredDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-[#D1E8B0] focus:border-[#8DC63F] text-sm focus:outline-none bg-white"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message / Symptoms */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Symptoms or Consultation Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Briefly describe your symptoms or reason for visit..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-lg border border-[#D1E8B0] focus:border-[#8DC63F] text-sm focus:outline-none bg-[#F5FAF3]/30"
                ></textarea>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="modal-terms"
                  checked={formData.termsAccepted}
                  onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                  className="mt-0.5 w-4 h-4 rounded text-[#8DC63F] focus:ring-[#8DC63F] border-gray-300"
                />
                <label htmlFor="modal-terms" className="text-xs text-gray-600 leading-snug">
                  I agree to be contacted by Dar Al Dawa Medical Center staff via call or WhatsApp regarding my appointment confirmation.
                </label>
              </div>
              {errors.termsAccepted && (
                <p className="text-xs text-red-500">{errors.termsAccepted}</p>
              )}

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#8DC63F] hover:bg-[#7cb32e] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  <Sparkles className="w-4 h-4" />
                  Confirm & Request Appointment
                </button>
              </div>
            </form>
          ) : (
            /* Confirmation Receipt View */
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#F0FAE3] text-[#5C8A1E] flex items-center justify-center mx-auto border-2 border-[#8DC63F]">
                <CheckCircle2 className="w-9 h-9 text-[#8DC63F]" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1A1A2E]">
                  Appointment Request Received!
                </h3>
                <p className="text-sm text-[#4A5568] max-w-md mx-auto mt-1">
                  Thank you, <span className="font-semibold">{confirmedBooking?.patientName}</span>. Your appointment request has been scheduled.
                </p>
              </div>

              {/* Printable Appointment Card */}
              <div className="bg-[#F5FAF3] p-5 rounded-2xl border-2 border-dashed border-[#8DC63F] text-left max-w-lg mx-auto space-y-3 shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                      Booking Reference ID
                    </span>
                    <p className="text-base font-bold text-[#2E5010]">{confirmedBooking?.id}</p>
                  </div>
                  <span className="px-3 py-1 bg-[#8DC63F] text-white rounded-full text-xs font-bold">
                    Pending Confirmation
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-gray-500 block">Department:</span>
                    <span className="font-semibold text-gray-800">{confirmedBooking?.department}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Doctor:</span>
                    <span className="font-semibold text-gray-800">{confirmedBooking?.doctor}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Date:</span>
                    <span className="font-semibold text-gray-800">{confirmedBooking?.preferredDate}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Time:</span>
                    <span className="font-semibold text-gray-800">{confirmedBooking?.preferredTime}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Contact:</span>
                    <span className="font-semibold text-gray-800">{confirmedBooking?.phone}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Location:</span>
                    <span className="font-semibold text-gray-800">Mustafa Town, Lahore</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-200 text-[11px] text-gray-500 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#8DC63F]" />
                    34 Hadayat Ullah, Block Mustafa Town, Lahore
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#8DC63F]" />
                    +92 42 35413999
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handlePrint}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 text-xs font-semibold hover:bg-gray-50 flex items-center justify-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  Print Receipt
                </button>
                <a
                  href={`https://wa.me/924235413999?text=Hello%20Dar%20Al%20Dawa%20Reception%2C%20I%20have%20submitted%20appointment%20request%20${confirmedBooking?.id}%20for%20${confirmedBooking?.patientName}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1eb956] flex items-center justify-center gap-2"
                >
                  Follow up on WhatsApp
                </a>
                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#2E5010] text-white text-xs font-semibold hover:bg-[#223d0c]"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
