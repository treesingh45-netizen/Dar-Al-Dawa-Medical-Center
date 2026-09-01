import React, { useState } from 'react';
import { PageId } from '../types';
import { HOSPITAL_INFO, DEPARTMENTS, FAQS } from '../data/mockData';
import confetti from 'canvas-confetti';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ChevronDown,
  ChevronUp,
  Navigation,
  MessageCircle,
  AlertCircle
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEmergencyModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenEmergencyModal
}) => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    department: '',
    preferredDate: '',
    preferredTime: '11:00 AM',
    message: '',
    agreeConsent: true
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSuccess, setIsSuccess] = useState(false);

  // FAQ Accordion State
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.department) newErrors.department = 'Please select a department';
    if (!formData.agreeConsent) newErrors.agreeConsent = 'Please agree to contact policy';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSuccess(true);
    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } catch {
      // ignore
    }
  };

  return (
    <div className="w-full">
      {/* ═══════════════════════════════════════════════
          SECTION 7.1 — CONTACT HERO
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
              <span className="text-[#8DC63F] font-semibold">Contact Us</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Get in Touch with Our Team
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              We are here to answer your questions, confirm appointments, and guide you to the right specialist — seven days a week in Mustafa Town, Lahore.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 7.2 — CONTACT INFO CARDS (4 Columns)
          ═══════════════════════════════════════════════ */}
      <section className="py-12 bg-white -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Visit Us */}
            <div className="bg-[#F5FAF3] p-6 rounded-3xl border-t-4 border-[#8DC63F] shadow-sm text-center space-y-3 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm text-[#5C8A1E] flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6 text-[#8DC63F]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A1A2E]">Visit Us</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                34 Hadayat Ullah, Block Mustafa Town, Lahore, Punjab, Pakistan
              </p>
              <a
                href="https://maps.google.com/?q=Dar+Al+Dawa+Medical+Center+Mustafa+Town+Lahore"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#5C8A1E] hover:underline pt-1"
              >
                <span>Directions on Maps</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>

            {/* Card 2: Call Us */}
            <div className="bg-[#F5FAF3] p-6 rounded-3xl border-t-4 border-[#8DC63F] shadow-sm text-center space-y-3 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm text-[#5C8A1E] flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6 text-[#8DC63F]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A1A2E]">Call Us</h3>
              <div className="text-xs text-gray-700 space-y-1 font-medium">
                <p>
                  <a href={`tel:${HOSPITAL_INFO.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-[#8DC63F]">
                    {HOSPITAL_INFO.primaryPhone}
                  </a>
                </p>
                <p>
                  <a href={`tel:${HOSPITAL_INFO.mobilePhone.replace(/\s+/g, '')}`} className="hover:text-[#8DC63F]">
                    {HOSPITAL_INFO.mobilePhone}
                  </a>
                </p>
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-red-100 text-[#E31B23] text-[10px] font-bold">
                🚨 24/7 Emergency Line
              </span>
            </div>

            {/* Card 3: Email Us */}
            <div className="bg-[#F5FAF3] p-6 rounded-3xl border-t-4 border-[#8DC63F] shadow-sm text-center space-y-3 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm text-[#5C8A1E] flex items-center justify-center mx-auto">
                <Mail className="w-6 h-6 text-[#8DC63F]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A1A2E]">Email Us</h3>
              <div className="text-xs text-gray-700 space-y-1">
                <p>
                  <a href={`mailto:${HOSPITAL_INFO.emails[0]}`} className="hover:text-[#8DC63F]">
                    {HOSPITAL_INFO.emails[0]}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${HOSPITAL_INFO.emails[1]}`} className="hover:text-[#8DC63F]">
                    {HOSPITAL_INFO.emails[1]}
                  </a>
                </p>
              </div>
              <p className="text-[11px] text-gray-500">We reply within 24 hours</p>
            </div>

            {/* Card 4: Hours */}
            <div className="bg-[#F5FAF3] p-6 rounded-3xl border-t-4 border-[#8DC63F] shadow-sm text-center space-y-3 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm text-[#5C8A1E] flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6 text-[#8DC63F]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A1A2E]">Opening Hours</h3>
              <div className="text-xs text-gray-700 space-y-0.5">
                <p>Mon–Sun: 08:00 AM – 12:00 AM</p>
                <p className="font-bold text-[#2E5010]">Emergency: 24 Hours / 7 Days</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-green-700">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                Open Now
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 7.3 — CONTACT FORM + MAP (2 Columns)
          ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#F5FAF3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Contact Form (55% / 7 cols) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-[#D1E8B0] space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#F0FAE3] text-[#5C8A1E] text-xs font-bold mb-2">
                  Direct Inquiries & Booking
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A2E]">
                  Send a Message or Book an Appointment
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Fill in the details below and our clinical reception team will reach out within 2 hours.
                </p>
              </div>

              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none ${
                          errors.fullName
                            ? 'border-red-400 bg-red-50/50'
                            : 'border-[#D1E8B0] focus:border-[#8DC63F] bg-[#F5FAF3]/30'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="0311 9944897"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none ${
                          errors.phone
                            ? 'border-red-400 bg-red-50/50'
                            : 'border-[#D1E8B0] focus:border-[#8DC63F] bg-[#F5FAF3]/30'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D1E8B0] focus:border-[#8DC63F] text-sm bg-[#F5FAF3]/30 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Select Department <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none bg-white ${
                          errors.department ? 'border-red-400' : 'border-[#D1E8B0] focus:border-[#8DC63F]'
                        }`}
                      >
                        <option value="">-- Choose Specialty --</option>
                        {DEPARTMENTS.map((d) => (
                          <option key={d.id} value={d.name}>
                            {d.name}
                          </option>
                        ))}
                      </select>
                      {errors.department && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.department}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D1E8B0] focus:border-[#8DC63F] text-sm focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D1E8B0] focus:border-[#8DC63F] text-sm focus:outline-none bg-white"
                      >
                        <option value="Morning (9 AM - 1 PM)">Morning (9 AM – 1 PM)</option>
                        <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM – 5 PM)</option>
                        <option value="Evening (5 PM - 9 PM)">Evening (5 PM – 9 PM)</option>
                        <option value="Late Night (9 PM - 12 AM)">Late Night (9 PM – 12 AM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Message / Reason for Visit
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your symptoms or medical inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-[#D1E8B0] focus:border-[#8DC63F] text-sm bg-[#F5FAF3]/30 focus:outline-none"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="contact-consent"
                      checked={formData.agreeConsent}
                      onChange={(e) => setFormData({ ...formData, agreeConsent: e.target.checked })}
                      className="mt-0.5 w-4 h-4 rounded text-[#8DC63F] focus:ring-[#8DC63F] border-gray-300"
                    />
                    <label htmlFor="contact-consent" className="text-xs text-gray-600 leading-snug">
                      I agree to be contacted by Dar Al Dawa Medical Center staff regarding my medical inquiry or appointment.
                    </label>
                  </div>
                  {errors.agreeConsent && (
                    <p className="text-[11px] text-red-500">{errors.agreeConsent}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-[#8DC63F] hover:bg-[#7cb32e] text-white font-bold text-sm py-4 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Message & Book</span>
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#F0FAE3] text-[#5C8A1E] flex items-center justify-center mx-auto border-2 border-[#8DC63F]">
                    <CheckCircle2 className="w-8 h-8 text-[#8DC63F]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1A1A2E]">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    Your inquiry has been logged. Our reception staff will contact you at{' '}
                    <strong>{formData.phone}</strong> within 2 hours to confirm your slot.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        department: '',
                        preferredDate: '',
                        preferredTime: '11:00 AM',
                        message: '',
                        agreeConsent: true
                      });
                    }}
                    className="px-6 py-2.5 bg-[#2E5010] text-white text-xs font-semibold rounded-full hover:bg-[#1f370b]"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* Right Map (45% / 5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-md border-4 border-white bg-white h-[480px]">
                <iframe
                  title="Dar Al Dawa Medical Center Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.585523825838!2d74.2798993!3d31.4795324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903e670d8a557%3A0x28ec968f9a21b348!2sMustafa%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#D1E8B0] flex items-center justify-between text-xs">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#8DC63F] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1A1A2E]">34 Hadayat Ullah, Block Mustafa Town</strong>
                    <span className="text-gray-500">Lahore, Punjab, Pakistan</span>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Dar+Al+Dawa+Medical+Center+Mustafa+Town+Lahore"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 bg-[#8DC63F] text-white font-bold rounded-full hover:bg-[#7cb32e] transition-colors"
                >
                  Open Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 7.4 — SOCIAL MEDIA CHANNELS (4 Cards)
          ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-[#F0FAE3] text-[#5C8A1E] text-xs font-bold">
              Stay Connected
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
              Connect With Us Online
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Follow our social channels for daily health tips, doctor schedules, and announcements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Instagram */}
            <a
              href={HOSPITAL_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-3xl bg-[#F5FAF3] border border-gray-200 hover:border-[#E1306C] hover:shadow-xl transition-all duration-300 text-center space-y-3 group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FD1D1D] to-[#833AB4] text-white flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#1A1A2E] text-base">Instagram</h3>
                <p className="text-xs text-gray-500">{HOSPITAL_INFO.socials.instagramHandle}</p>
              </div>
              <span className="inline-block px-4 py-1.5 bg-white text-xs font-bold text-gray-800 rounded-full border border-gray-200 group-hover:bg-[#E1306C] group-hover:text-white group-hover:border-transparent transition-colors">
                Follow Us →
              </span>
            </a>

            {/* Facebook */}
            <a
              href={HOSPITAL_INFO.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-3xl bg-[#F5FAF3] border border-gray-200 hover:border-[#1877F2] hover:shadow-xl transition-all duration-300 text-center space-y-3 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#1877F2] text-white flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform">
                <Facebook className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#1A1A2E] text-base">Facebook</h3>
                <p className="text-xs text-gray-500">Official Page</p>
              </div>
              <span className="inline-block px-4 py-1.5 bg-white text-xs font-bold text-gray-800 rounded-full border border-gray-200 group-hover:bg-[#1877F2] group-hover:text-white group-hover:border-transparent transition-colors">
                Like Page →
              </span>
            </a>

            {/* YouTube */}
            <a
              href={HOSPITAL_INFO.socials.youtube}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-3xl bg-[#F5FAF3] border border-gray-200 hover:border-[#FF0000] hover:shadow-xl transition-all duration-300 text-center space-y-3 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#FF0000] text-white flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform">
                <Youtube className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#1A1A2E] text-base">YouTube</h3>
                <p className="text-xs text-gray-500">{HOSPITAL_INFO.socials.youtubeHandle}</p>
              </div>
              <span className="inline-block px-4 py-1.5 bg-white text-xs font-bold text-gray-800 rounded-full border border-gray-200 group-hover:bg-[#FF0000] group-hover:text-white group-hover:border-transparent transition-colors">
                Subscribe →
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href={HOSPITAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-3xl bg-[#F5FAF3] border border-gray-200 hover:border-[#0A66C2] hover:shadow-xl transition-all duration-300 text-center space-y-3 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#0A66C2] text-white flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#1A1A2E] text-base">LinkedIn</h3>
                <p className="text-xs text-gray-500">Corporate & Careers</p>
              </div>
              <span className="inline-block px-4 py-1.5 bg-white text-xs font-bold text-gray-800 rounded-full border border-gray-200 group-hover:bg-[#0A66C2] group-hover:text-white group-hover:border-transparent transition-colors">
                Connect →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 7.5 — FAQ ACCORDION
          ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#F5FAF3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-white text-[#5C8A1E] text-xs font-bold border border-[#D1E8B0]">
              Got Questions?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Clear answers to the most common questions regarding our Lahore clinic.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl overflow-hidden border transition-all duration-200 shadow-sm ${
                    isOpen ? 'border-[#8DC63F] shadow-md' : 'border-gray-200'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#1A1A2E] hover:text-[#5C8A1E] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#8DC63F] flex-shrink-0"></span>
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#8DC63F] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-[#F5FAF3]/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
