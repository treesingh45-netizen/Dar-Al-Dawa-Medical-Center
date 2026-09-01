import React from 'react';
import { BlogArticle } from '../types';
import {
  X,
  Calendar,
  Clock,
  User,
  Share2,
  Tag,
  Stethoscope,
  ChevronRight,
  BookOpen,
  Phone,
  AlertCircle,
  Siren
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/mockData';

interface ArticleReaderModalProps {
  article: BlogArticle | null;
  isOpen: boolean;
  onClose: () => void;
  onBookAppointment: (doctorName?: string) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  isOpen,
  onClose,
  onBookAppointment
}) => {
  if (!isOpen || !article) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm p-4 sm:p-6 md:p-10 flex items-center justify-center animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 relative max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="bg-[#2E5010] text-white px-6 py-4 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#8DC63F]" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Health Insights & Medical Education
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              title="Share Article"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Article Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-[#F0FAE3] text-[#5C8A1E] text-xs font-bold rounded-full border border-[#D1E8B0]">
                {article.category}
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#8DC63F]" />
                {article.readTime}
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#8DC63F]" />
                {article.date}
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A2E] leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-600 italic border-l-4 border-[#8DC63F] pl-4 py-1">
              "{article.excerpt}"
            </p>
          </div>

          {/* Cover Image */}
          <div className="rounded-2xl overflow-hidden shadow-md max-h-[400px] w-full bg-gray-100">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Grid Layout: Left Content (70%) & Right Author Sidebar (30%) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Text Content */}
            <div className="lg:col-span-2 space-y-5 text-gray-800 text-sm sm:text-base leading-relaxed">
              {article.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-2 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-[#8DC63F]" />
                  Article Tags:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-[#F5FAF3] text-[#2E5010] text-xs font-medium border border-[#D1E8B0]"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar with Author & Booking CTA */}
            <div className="space-y-6">
              {/* Author Card */}
              <div className="p-5 rounded-2xl bg-[#F5FAF3] border border-[#D1E8B0] text-center space-y-3">
                <img
                  src={article.author.image}
                  alt={article.author.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-[#8DC63F] shadow-sm"
                />
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#5C8A1E] block">
                    Reviewed By Specialist
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#1A1A2E]">
                    {article.author.name}
                  </h3>
                  <p className="text-xs text-gray-600">{article.author.specialty}</p>
                </div>
                <p className="text-xs text-gray-500 leading-snug">{article.author.bio}</p>

                <button
                  onClick={() => {
                    onClose();
                    onBookAppointment(article.author.name);
                  }}
                  className="w-full py-2.5 px-4 bg-[#8DC63F] hover:bg-[#7cb32e] text-white rounded-full text-xs font-bold transition-colors shadow-sm flex items-center justify-center gap-1.5"
                >
                  <Stethoscope className="w-3.5 h-3.5" />
                  Consult This Doctor
                </button>
              </div>

              {/* Emergency Helpline Box */}
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-center space-y-2">
                <span className="text-xs font-bold text-red-700 flex items-center justify-center gap-1.5">
                  <Siren className="w-3.5 h-3.5 text-[#E31B23]" />
                  Have Immediate Concerns?
                </span>
                <p className="text-xs text-gray-600">
                  Our emergency doctors are on call 24 hours a day.
                </p>
                <a
                  href={`tel:${HOSPITAL_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E31B23] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call: {HOSPITAL_INFO.primaryPhone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
