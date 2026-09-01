import React, { useEffect } from 'react';
import { FacilityGalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: FacilityGalleryItem[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onSelectIndex
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectIndex((currentIndex + 1) % items.length);
      if (e.key === 'ArrowLeft') onSelectIndex((currentIndex - 1 + items.length) % items.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onSelectIndex]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex + 1) % items.length);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
    >
      {/* Top Controls */}
      <div className="flex items-center justify-between text-white z-10">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-[#8DC63F] text-[#1A1A2E] rounded-full text-xs font-bold uppercase tracking-wider">
            {currentItem.category}
          </span>
          <span className="text-xs text-gray-300">
            {currentIndex + 1} of {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          title="Close Lightbox (Esc)"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container & Navigation Arrows */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-[#8DC63F] text-white flex items-center justify-center transition-all duration-200"
          title="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          src={currentItem.image}
          alt={currentItem.title}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[75vh] max-w-[90vw] object-contain rounded-xl shadow-2xl transition-transform duration-300"
        />

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-[#8DC63F] text-white flex items-center justify-center transition-all duration-200"
          title="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-2xl mx-auto text-center text-white space-y-1 bg-black/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10"
      >
        <h3 className="font-serif text-lg sm:text-xl font-bold">{currentItem.title}</h3>
        <p className="text-xs text-gray-300">{currentItem.description}</p>
      </div>
    </div>
  );
};
