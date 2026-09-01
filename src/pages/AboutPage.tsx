import React from 'react';
import { PageId } from '../types';
import {
  HOSPITAL_INFO,
  DEPARTMENTS,
  LEADERSHIP_MEMBERS
} from '../data/mockData';
import {
  Target,
  Eye,
  Heart,
  CheckCircle,
  Award,
  ShieldCheck,
  Building,
  Users,
  Clock,
  ArrowRight,
  Stethoscope
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenAppointmentModal
}) => {
  return (
    <div className="w-full">
      {/* ═══════════════════════════════════════════════
          SECTION 2.1 — ABOUT HERO (PAGE BANNER)
          ═══════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-r from-[#2E5010] to-[#1A1A2E] text-white py-16 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            {/* Breadcrumb */}
            <div className="text-xs text-white/60 flex items-center gap-2">
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-white transition-colors"
              >
                Home
              </button>
              <span>&gt;</span>
              <span className="text-[#8DC63F] font-semibold">About Us</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              About Dar Al Dawa Medical Center
            </h1>

            <p className="text-lg sm:text-xl text-[#8DC63F] italic font-medium">
              "{HOSPITAL_INFO.tagline}"
            </p>

            <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed pt-2">
              Established with an unyielding commitment to clinical integrity and compassionate care, Dar Al Dawa is a trusted healthcare destination for families across Lahore, Punjab.
            </p>
          </div>
        </div>

        {/* Decorative background shape */}
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 bg-white/20 rounded-l-full pointer-events-none"></div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2.2 — OUR STORY
          ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Story Text (55%) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-[#F0FAE3] text-[#5C8A1E] text-xs font-bold">
                Our Heritage & Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
                The Story Behind the "House of Medicine"
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>
                  Dar Al Dawa Medical Center was founded with a singular vision: to bring exceptional, accessible healthcare to the families of Lahore. Situated at <strong>34 Hadayat Ullah, Block Mustafa Town</strong>, our center has grown into a comprehensive multi-specialty hospital trusted by thousands of patients across Punjab.
                </p>
                <p>
                  Guided by the principle of <em>'Dar Al Dawa'</em> — the House of Medicine — we believe that every patient deserves compassionate attention, accurate diagnosis, and effective treatment, regardless of their condition or background.
                </p>
                <p>
                  Today, we operate round the clock, seven days a week, with a team of over 20 specialist doctors across more than 10 departments, backed by certified operating theaters, automated clinical diagnostics, and a 24/7 emergency casualty unit.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenAppointmentModal()}
                  className="bg-[#8DC63F] hover:bg-[#7cb32e] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
                >
                  <span>Book Consultation With Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Image + Badges (45%) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1582719202047-76d3432ee323?auto=format&fit=crop&w=800&q=80"
                  alt="Medical Team Dar Al Dawa"
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F0FAE3] text-[#5C8A1E] flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-bold text-[#1A1A2E] block">10,000+ Patients</span>
                  <span className="text-[11px] text-gray-500">Treated Annually</span>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -top-4 -right-4 bg-white p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#2E5010] text-[#8DC63F] flex items-center justify-center font-bold">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-gray-900 block">20+ Specialists</span>
                  <span className="text-[10px] text-gray-500">On Active Medical Staff</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2.3 — MISSION, VISION & VALUES
          ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#F5FAF3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-white text-[#5C8A1E] text-xs font-bold border border-[#D1E8B0]">
              Our Guiding Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
              Mission, Vision & Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="bg-white p-8 rounded-3xl border-t-4 border-[#8DC63F] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#F0FAE3] text-[#5C8A1E] flex items-center justify-center mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A1A2E] mb-3">Our Mission</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To deliver patient-first, evidence-based healthcare that meets the highest standards of safety, compassion, and clinical excellence — accessible to every resident of Lahore.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 rounded-3xl border-t-4 border-[#5C8A1E] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#F0FAE3] text-[#5C8A1E] flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A1A2E] mb-3">Our Vision</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To be recognized as Lahore's most trusted and comprehensive multi-specialty medical center — pioneering clinical innovation with a human touch and uncompromised ethics.
                </p>
              </div>
            </div>

            {/* Values Card */}
            <div className="bg-white p-8 rounded-3xl border-t-4 border-[#2E5010] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#F0FAE3] text-[#5C8A1E] flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A1A2E] mb-3">Our Values</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8DC63F]"></span>
                    <strong>Compassion:</strong> We treat every patient like family.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8DC63F]"></span>
                    <strong>Integrity:</strong> Honest diagnosis and transparent care.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8DC63F]"></span>
                    <strong>Excellence:</strong> Continuous improvement in standards.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8DC63F]"></span>
                    <strong>Accessibility:</strong> High-grade medicine for all.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2.4 — WHY LAHORE CHOOSES US
          ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl overflow-hidden border border-[#D1E8B0]">
            {/* Left Green Box (40%) */}
            <div className="lg:col-span-5 bg-[#8DC63F] text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <span className="text-7xl font-serif leading-none opacity-40 select-none">“</span>
                <blockquote className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                  Medicine is not only a science; it is also an art.
                </blockquote>
                <p className="text-sm font-medium text-white/90">— Paracelsus</p>
              </div>

              <div className="pt-8 border-t border-white/20 relative z-10 text-xs text-white/90">
                <p className="font-bold">Dar Al Dawa Medical Center</p>
                <p>Mustafa Town, Lahore</p>
              </div>
            </div>

            {/* Right List (60%) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A2E]">
                Why Lahore Trusts Dar Al Dawa
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8DC63F] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">PMDC-Certified Specialists</h4>
                    <p className="text-xs text-gray-600">All consultants hold active FCPS, FRCS, MRCP qualifications.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8DC63F] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">24/7 Emergency Response</h4>
                    <p className="text-xs text-gray-600">Immediate triage, oxygen lines, and critical trauma stabilization.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8DC63F] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Diagnostic Imaging Center</h4>
                    <p className="text-xs text-gray-600">Digital X-Ray, 4D Doppler Ultrasound, CT & ECG facilities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8DC63F] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">WHO-Standard Theaters</h4>
                    <p className="text-xs text-gray-600">Sterile airflow surgical suites with laminar flow filtration.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8DC63F] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">In-House Pharmacy & Lab</h4>
                    <p className="text-xs text-gray-600">Genuine medications and automated diagnostic blood tests.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8DC63F] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Compassionate Nursing</h4>
                    <p className="text-xs text-gray-600">Patient-centered care ensuring dignity and comfort 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2.5 — MEDICAL LEADERSHIP
          ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#F5FAF3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-white text-[#5C8A1E] text-xs font-bold border border-[#D1E8B0]">
              Clinical Governance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
              Our Medical Leadership
            </h2>
            <p className="text-sm text-gray-600">
              Senior faculty steering clinical standards, medical ethics, and modern patient-centric policies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP_MEMBERS.map((leader, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 text-center space-y-4 hover:shadow-xl transition-all"
              >
                <div className="relative w-28 h-28 mx-auto">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=800';
                    }}
                    className="w-28 h-28 rounded-full object-cover border-4 border-[#F0FAE3] shadow-md"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1A1A2E]">{leader.name}</h3>
                  <span className="text-xs font-semibold text-[#5C8A1E] block mt-0.5">
                    {leader.title}
                  </span>
                  <p className="text-[11px] text-gray-400 font-medium">{leader.qualification}</p>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2.6 — SOCIAL PROOF ROW
          ═══════════════════════════════════════════════ */}
      <section className="bg-[#1A1A2E] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div>
              <span className="font-serif text-4xl sm:text-5xl font-extrabold text-[#8DC63F] block">
                {HOSPITAL_INFO.stats.patientsServed}
              </span>
              <span className="text-xs sm:text-sm text-gray-300 mt-1 block">Happy Patients Treated</span>
            </div>
            <div>
              <span className="font-serif text-4xl sm:text-5xl font-extrabold text-[#8DC63F] block">
                {HOSPITAL_INFO.stats.expertDoctors}
              </span>
              <span className="text-xs sm:text-sm text-gray-300 mt-1 block">Specialist Doctors & Faculty</span>
            </div>
            <div>
              <span className="font-serif text-4xl sm:text-5xl font-extrabold text-[#8DC63F] block">
                {HOSPITAL_INFO.stats.specialties}
              </span>
              <span className="text-xs sm:text-sm text-gray-300 mt-1 block">Medical Departments</span>
            </div>
            <div>
              <span className="font-serif text-4xl sm:text-5xl font-extrabold text-[#8DC63F] block">
                {HOSPITAL_INFO.stats.yearsOfService}
              </span>
              <span className="text-xs sm:text-sm text-gray-300 mt-1 block">Years of Dedicated Service</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
