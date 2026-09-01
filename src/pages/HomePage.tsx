import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import {
  HOSPITAL_INFO,
  DEPARTMENTS,
  DOCTORS,
  TESTIMONIALS,
  FACILITIES
} from '../data/mockData';
import {
  Calendar,
  Phone,
  ShieldCheck,
  Award,
  Clock,
  HeartPulse,
  Sparkles,
  ChevronRight,
  Star,
  Users,
  Building,
  Activity,
  CheckCircle2,
  Stethoscope,
  Smile,
  HeartHandshake,
  Wind,
  Baby,
  Radio,
  Microscope,
  Headphones,
  Dna,
  Shield,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (doctorId?: string, departmentId?: string) => void;
  onOpenEmergencyModal: () => void;
  onSelectDoctor: (doctorId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
  onOpenEmergencyModal,
  onSelectDoctor
}) => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Auto rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Quick form state for Section 1.10
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickDept, setQuickDept] = useState('');

  const handleQuickBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenAppointmentModal(undefined, quickDept || undefined);
  };

  // Helper icon renderer for departments
  const renderDepartmentIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-[#5C8A1E]" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-[#5C8A1E]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#5C8A1E]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#5C8A1E]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#5C8A1E]" />;
      case 'Wind':
        return <Wind className="w-6 h-6 text-[#5C8A1E]" />;
      case 'Baby':
        return <Baby className="w-6 h-6 text-[#5C8A1E]" />;
      case 'Radio':
        return <Radio className="w-6 h-6 text-[#5C8A1E]" />;
      case 'Microscope':
        return <Microscope className="w-6 h-6 text-[#5C8A1E]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-[#5C8A1E]" />;
      case 'Dna':
        return <Dna className="w-6 h-6 text-[#5C8A1E]" />;
      default:
        return <HeartPulse className="w-6 h-6 text-[#5C8A1E]" />;
    }
  };

  return (
    <div className="w-full">
      {/* ═══════════════════════════════════════════════
          SECTION 1.1 — HERO SECTION
          ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5FAF3]/60 to-white pt-6 pb-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side (Col 1-7) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FAE3] text-[#5C8A1E] text-xs font-bold border border-[#D1E8B0] shadow-sm">
                <Building className="w-4 h-4 text-[#5C8A1E]" />
                <span>Lahore's Trusted Multi-Specialty Medical Center</span>
              </div>

              {/* Headline H1 */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#1A1A2E] font-extrabold leading-[1.15] tracking-tight">
                Compassionate Care, <br />
                <span className="text-[#2E5010] relative">
                  Clinical Excellence.
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#8DC63F]/40"
                    viewBox="0 0 250 12"
                    fill="none"
                  >
                    <path
                      d="M2 9C60 3 180 3 248 9"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-[#4A5568] max-w-xl leading-relaxed">
                Dar Al Dawa Medical Center brings world-class healthcare to the heart of Lahore — with 24/7 emergency services, 10+ medical specialties, and a team of Pakistan's finest PMDC-certified doctors.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenAppointmentModal()}
                  className="bg-[#8DC63F] hover:bg-[#7cb32e] text-white px-8 py-4 rounded-full font-bold text-base shadow-md hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5 active:scale-95"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book an Appointment</span>
                </button>

                <button
                  onClick={() => onNavigate('departments')}
                  className="border-2 border-[#8DC63F] text-[#2E5010] hover:bg-[#F0FAE3] px-7 py-3.5 rounded-full font-semibold text-base transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Our Services</span>
                  <ChevronRight className="w-4 h-4 text-[#8DC63F]" />
                </button>
              </div>

              {/* Trust Strip */}
              <div className="pt-4 border-t border-gray-200/80 flex flex-wrap items-center gap-4 sm:gap-8 text-xs font-medium text-gray-600">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8DC63F]" />
                  24/7 Emergency Care
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8DC63F]" />
                  10+ Specialties Under One Roof
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8DC63F]" />
                  20+ Senior Consultant Doctors
                </span>
              </div>
            </div>

            {/* Right Side Image Collage (Col 8-12) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Main Hero Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                    alt="Doctor consulting patient at Dar Al Dawa Medical Center"
                    className="w-full h-[420px] sm:h-[480px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                {/* Floating Card 1: Bottom-Left (Open Now 24/7) */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce duration-1000">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-[#E31B23] flex items-center justify-center">
                    <HeartPulse className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                      <span className="text-[11px] uppercase tracking-wider font-extrabold text-green-700">
                        Open Now
                      </span>
                    </div>
                    <p className="text-xs font-bold text-gray-900">24/7 Emergency Casualty</p>
                  </div>
                </div>

                {/* Floating Card 2: Top-Right (Trusted by 10k+) */}
                <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F0FAE3] text-[#5C8A1E] flex items-center justify-center font-bold text-sm">
                    ⭐
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1A1A2E]">Trusted by 10,000+</p>
                    <p className="text-[11px] text-gray-500">Patients across Lahore</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 1.2 — STATS STRIP (#8DC63F)
          ═══════════════════════════════════════════════ */}
      <section className="bg-[#8DC63F] text-white py-10 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/30">
            <div className="pt-4 md:pt-0">
              <span className="font-serif text-4xl sm:text-5xl font-extrabold block">
                {HOSPITAL_INFO.stats.patientsServed}
              </span>
              <span className="text-sm sm:text-base font-medium text-white/90 mt-1 block">
                Patients Served
              </span>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="font-serif text-4xl sm:text-5xl font-extrabold block">
                {HOSPITAL_INFO.stats.specialties}
              </span>
              <span className="text-sm sm:text-base font-medium text-white/90 mt-1 block">
                Medical Specialties
              </span>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="font-serif text-4xl sm:text-5xl font-extrabold block">
                {HOSPITAL_INFO.stats.expertDoctors}
              </span>
              <span className="text-sm sm:text-base font-medium text-white/90 mt-1 block">
                Expert Doctors & Surgeons
              </span>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="font-serif text-4xl sm:text-5xl font-extrabold block">
                {HOSPITAL_INFO.stats.emergencyCare}
              </span>
              <span className="text-sm sm:text-base font-medium text-white/90 mt-1 block">
                Emergency & Casualty Care
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 1.3 — ABOUT INTRO
          ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Stack (45% / 5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                  alt="Hospital Reception"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-60 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20">
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80"
                  alt="Operating Theater"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Green accent box */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#F0FAE3] rounded-2xl -z-0 border border-[#D1E8B0]"></div>
            </div>

            {/* Right Text (55% / 7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-[#F0FAE3] text-[#5C8A1E] text-xs font-bold">
                About Dar Al Dawa
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A2E] leading-tight">
                A Patient-First Approach to Modern Healthcare
              </h2>
              <p className="text-[#4A5568] leading-relaxed text-sm sm:text-base">
                Located at the heart of Lahore in Mustafa Town, Dar Al Dawa Medical Center is a state-of-the-art hospital dedicated to redefining healthcare standards in Pakistan. Our experienced team of physicians, surgeons, and specialists work together to deliver personalized, compassionate care — backed by the latest medical technology.
              </p>

              {/* Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-[#8DC63F] flex-shrink-0" />
                  <span>Round-the-clock emergency services</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-[#8DC63F] flex-shrink-0" />
                  <span>Advanced diagnostic imaging & lab</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-[#8DC63F] flex-shrink-0" />
                  <span>Comfortable inpatient & outpatient wards</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-[#8DC63F] flex-shrink-0" />
                  <span>Skilled, PMDC-certified professionals</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 rounded-full border-2 border-[#8DC63F] text-[#2E5010] font-bold text-sm hover:bg-[#8DC63F] hover:text-white transition-all flex items-center gap-2"
                >
                  <span>Learn More About Our Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 1.4 — DEPARTMENTS OVERVIEW (12 Cards Grid)
          ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#F5FAF3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Title Block */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white text-[#5C8A1E] text-xs font-bold border border-[#D1E8B0]">
              Specialized Healthcare
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
              Expert Care Across Every Specialty
            </h2>
            <p className="text-sm text-[#4A5568]">
              We offer comprehensive medical and dental care across 10+ departments, each staffed by experienced senior consultants.
            </p>
          </div>

          {/* 12 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {DEPARTMENTS.map((dept) => (
              <div
                key={dept.id}
                className="bg-white rounded-2xl p-6 border-t-4 border-[#8DC63F] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F0FAE3] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {renderDepartmentIcon(dept.icon)}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1A1A2E] mb-2">
                    {dept.name}
                  </h3>
                  <p className="text-xs text-[#4A5568] line-clamp-3 leading-relaxed mb-4">
                    {dept.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('departments')}
                    className="text-xs font-bold text-[#5C8A1E] hover:text-[#2E5010] flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onOpenAppointmentModal(undefined, dept.id)}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-[#F0FAE3] text-[#2E5010] font-semibold hover:bg-[#8DC63F] hover:text-white transition-colors"
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('departments')}
              className="bg-[#2E5010] hover:bg-[#223d0c] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Explore All Departments & Treatable Conditions</span>
              <ChevronRight className="w-4 h-4 text-[#8DC63F]" />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 1.5 — WHY CHOOSE US
          ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (60%) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-[#F0FAE3] text-[#5C8A1E] text-xs font-bold">
                Why Choose Dar Al Dawa
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A2E] leading-tight">
                Healthcare You Can Trust, Every Step of the Way
              </h2>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-[#F5FAF3] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#F0FAE3] text-[#5C8A1E] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="w-5 h-5 text-[#5C8A1E]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1A1A2E]">
                      Expert & Certified Doctors
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Our specialists are PMDC-certified with decades of clinical experience across their respective medical fields in top institutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-[#F5FAF3] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#F0FAE3] text-[#5C8A1E] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Microscope className="w-5 h-5 text-[#5C8A1E]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1A1A2E]">
                      Advanced Medical Technology
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      We invest in cutting-edge diagnostic ultrasound, digital X-rays, automated pathology lab equipment, and modern surgical theaters.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-[#F5FAF3] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#F0FAE3] text-[#5C8A1E] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HeartHandshake className="w-5 h-5 text-[#5C8A1E]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1A1A2E]">
                      Patient-Centered Philosophy
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      From consultation to discharge, every clinical decision centers on your comfort, dignity, safety, and rapid recovery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-[#F5FAF3] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#F0FAE3] text-[#5C8A1E] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#5C8A1E]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1A1A2E]">
                      Open Every Day of the Week
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      We operate 7 days a week from 8:00 AM to midnight, with 24/7 emergency access — because illness does not keep office hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual (40%) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#2E5010] to-[#1A1A2E] text-white text-center shadow-2xl max-w-sm w-full border-4 border-[#8DC63F]/30">
                <div className="w-24 h-24 rounded-full bg-[#8DC63F]/20 border-2 border-[#8DC63F] mx-auto flex items-center justify-center mb-6 animate-pulse">
                  <HeartPulse className="w-12 h-12 text-[#8DC63F]" />
                </div>
                <span className="font-serif text-5xl sm:text-6xl font-extrabold text-[#8DC63F] block">
                  {HOSPITAL_INFO.stats.satisfactionRate}
                </span>
                <h3 className="font-serif text-xl font-bold mt-2">Patient Satisfaction</h3>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  Based on post-treatment feedback from over 10,000 patients across Lahore and Punjab.
                </p>

                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 1.6 — DOCTORS TEASER
          ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#F5FAF3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-white text-[#5C8A1E] text-xs font-bold border border-[#D1E8B0]">
                Our Specialists
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
                Meet Our Expert Medical Team
              </h2>
              <p className="text-sm text-[#4A5568] max-w-xl">
                Our doctors bring decades of collective clinical expertise and are among the finest specialists practicing in Lahore.
              </p>
            </div>

            <button
              onClick={() => onNavigate('doctors')}
              className="self-start md:self-auto px-6 py-2.5 rounded-full border-2 border-[#8DC63F] text-[#2E5010] font-bold text-xs hover:bg-[#8DC63F] hover:text-white transition-all flex items-center gap-1.5"
            >
              <span>View All 20+ Doctors</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Doctors Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCTORS.slice(0, 4).map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border-t-4 border-[#8DC63F] flex flex-col justify-between"
              >
                <div className="p-6 text-center space-y-3">
                  <div className="relative w-28 h-28 mx-auto">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full rounded-full object-cover border-4 border-[#F0FAE3] shadow-sm"
                    />
                    <span className="absolute bottom-0 right-1 w-5 h-5 rounded-full bg-[#8DC63F] border-2 border-white flex items-center justify-center text-white text-[10px]">
                      ✓
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-base font-bold text-[#1A1A2E]">
                      {doctor.name}
                    </h3>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-[#F0FAE3] text-[#5C8A1E] text-xs font-semibold">
                      {doctor.specialty}
                    </span>
                    <p className="text-[11px] text-gray-500 mt-1">{doctor.qualification}</p>
                  </div>

                  <div className="pt-2 border-t border-gray-100 text-[11px] text-gray-600 flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3 text-[#8DC63F]" />
                    <span>{doctor.timings}</span>
                  </div>
                </div>

                <div className="p-4 bg-gray-50/70 border-t border-gray-100 flex gap-2">
                  <button
                    onClick={() => onSelectDoctor(doctor.id)}
                    className="flex-1 py-2 px-3 text-xs font-semibold rounded-full border border-gray-300 text-gray-700 hover:bg-white transition-colors text-center"
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => onOpenAppointmentModal(doctor.id, doctor.departmentId)}
                    className="flex-1 py-2 px-3 text-xs font-bold rounded-full bg-[#8DC63F] hover:bg-[#7cb32e] text-white transition-colors shadow-sm text-center"
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 1.7 — FACILITIES HIGHLIGHTS
          ═══════════════════════════════════════════════ */}
      <section className="relative py-20 bg-gradient-to-r from-[#2E5010] to-[#1A1A2E] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#8DC63F_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 rounded-full bg-white/10 text-[#8DC63F] text-xs font-bold uppercase tracking-wider">
              Infrastructure & Tech
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              World-Class Facilities, Human-Centered Care
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Every facility at Dar Al Dawa is designed with patient safety, comfort, and clinical efficiency at its core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#8DC63F] text-white flex items-center justify-center mx-auto">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold">Major Operating Theaters</h3>
              <p className="text-xs text-gray-300">
                Sterile, HEPA-filtered surgical suites equipped for general, laparoscopic, and specialized surgeries.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#8DC63F] text-white flex items-center justify-center mx-auto">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold">Advanced Diagnostic Lab</h3>
              <p className="text-xs text-gray-300">
                Automated biochemistry, digital X-rays, 4D ultrasound, and rapid pathology reporting.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#E31B23] text-white flex items-center justify-center mx-auto">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold">24/7 Emergency Unit</h3>
              <p className="text-xs text-gray-300">
                Immediate casualty triage, crash carts, cardiac monitoring, and on-call specialist doctors.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => onNavigate('facilities')}
              className="bg-white text-[#2E5010] hover:bg-gray-100 px-8 py-3.5 rounded-full font-bold text-sm shadow-lg transition-all inline-flex items-center gap-2"
            >
              <span>Explore Our Full Facilities & Gallery</span>
              <ChevronRight className="w-4 h-4 text-[#8DC63F]" />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 1.8 — TESTIMONIALS (Carousel)
          ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-8">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-[#F0FAE3] text-[#5C8A1E] text-xs font-bold">
              Patient Voices
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
              What Our Patients Say
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className="bg-[#F5FAF3] p-8 sm:p-10 rounded-3xl border-l-8 border-[#8DC63F] shadow-sm relative text-left">
            <div className="text-[#8DC63F] font-serif text-6xl leading-none absolute top-4 left-6 opacity-30 select-none">
              “
            </div>

            <p className="font-serif text-lg sm:text-xl text-gray-800 italic leading-relaxed relative z-10">
              "{TESTIMONIALS[activeTestimonialIdx].quote}"
            </p>

            <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-200">
              <div>
                <h4 className="font-bold text-[#1A1A2E] text-base">
                  {TESTIMONIALS[activeTestimonialIdx].name}
                </h4>
                <p className="text-xs text-gray-500">
                  {TESTIMONIALS[activeTestimonialIdx].location} •{' '}
                  <span className="text-[#5C8A1E] font-medium">
                    {TESTIMONIALS[activeTestimonialIdx].department}
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonialIdx(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeTestimonialIdx === i ? 'w-8 bg-[#8DC63F]' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Testimonial slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 1.9 — EMERGENCY CTA BANNER (#E31B23)
          ═══════════════════════════════════════════════ */}
      <section className="bg-[#E31B23] text-white py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 animate-pulse">
              <AlertCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Medical Emergency? We're Here 24/7
              </h3>
              <p className="text-xs sm:text-sm text-red-100">
                Casualty triage, critical care, oxygen setups & ambulances in Mustafa Town, Lahore.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
              className="bg-white text-[#E31B23] hover:bg-gray-100 font-bold px-6 py-3 rounded-full text-sm shadow-md transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Call +92 42 35413999</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 1.10 — APPOINTMENT BOOKING STRIP
          ═══════════════════════════════════════════════ */}
      <section className="py-12 bg-[#F5FAF3] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-[#D1E8B0] space-y-4">
            <div className="text-center sm:text-left">
              <h3 className="font-serif text-2xl font-bold text-[#1A1A2E]">
                Book Your Appointment Today
              </h3>
              <p className="text-xs text-gray-500">
                Fill in your basic information and our team will confirm your slot within 2 hours.
              </p>
            </div>

            <form
              onSubmit={handleQuickBookSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2"
            >
              <input
                type="text"
                placeholder="Full Name *"
                required
                value={quickName}
                onChange={(e) => setQuickName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#D1E8B0] text-sm focus:outline-none focus:border-[#8DC63F] bg-[#F5FAF3]/30"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                value={quickPhone}
                onChange={(e) => setQuickPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#D1E8B0] text-sm focus:outline-none focus:border-[#8DC63F] bg-[#F5FAF3]/30"
              />
              <select
                value={quickDept}
                onChange={(e) => setQuickDept(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#D1E8B0] text-sm focus:outline-none focus:border-[#8DC63F] bg-white"
              >
                <option value="">-- Select Department --</option>
                {DEPARTMENTS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full bg-[#8DC63F] hover:bg-[#7cb32e] text-white font-bold text-sm py-3 px-6 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
