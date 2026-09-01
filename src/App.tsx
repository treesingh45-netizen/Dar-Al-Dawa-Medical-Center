import React, { useState, useEffect } from 'react';
import { PageId, Doctor, BlogArticle } from './types';
import { DOCTORS, FACILITY_GALLERY, BLOG_ARTICLES } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { AppointmentModal } from './components/AppointmentModal';
import { EmergencyModal } from './components/EmergencyModal';
import { DoctorDetailDrawer } from './components/DoctorDetailDrawer';
import { LightboxModal } from './components/LightboxModal';
import { ArticleReaderModal } from './components/ArticleReaderModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DepartmentsPage } from './pages/DepartmentsPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Navigation State
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Modals & Overlays State
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedDoctorIdForBooking, setSelectedDoctorIdForBooking] = useState<string | undefined>();
  const [selectedDeptIdForBooking, setSelectedDeptIdForBooking] = useState<string | undefined>();

  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);

  const [selectedDoctorForDrawer, setSelectedDoctorForDrawer] = useState<Doctor | null>(null);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const [selectedArticleForModal, setSelectedArticleForModal] = useState<BlogArticle | null>(null);

  // Scroll to top when changing pages
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAppointmentModal = (doctorId?: string, departmentId?: string) => {
    setSelectedDoctorIdForBooking(doctorId);
    setSelectedDeptIdForBooking(departmentId);
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
    setSelectedDoctorIdForBooking(undefined);
    setSelectedDeptIdForBooking(undefined);
  };

  const handleSelectDoctor = (doctorId: string) => {
    const doc = DOCTORS.find((d) => d.id === doctorId) || null;
    setSelectedDoctorForDrawer(doc);
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleSelectArticle = (article: BlogArticle) => {
    setSelectedArticleForModal(article);
  };

  // Render current active page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
            onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
            onSelectDoctor={handleSelectDoctor}
          />
        );
      case 'about':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={() => handleOpenAppointmentModal()}
          />
        );
      case 'departments':
        return (
          <DepartmentsPage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
            onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
          />
        );
      case 'doctors':
        return (
          <DoctorsPage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
            onSelectDoctor={handleSelectDoctor}
          />
        );
      case 'facilities':
        return (
          <FacilitiesPage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={() => handleOpenAppointmentModal()}
            onOpenLightbox={handleOpenLightbox}
          />
        );
      case 'blog':
        return (
          <BlogPage
            onNavigate={handleNavigate}
            onSelectArticle={handleSelectArticle}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
            onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
            onSelectDoctor={handleSelectDoctor}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1A2E] font-sans antialiased selection:bg-[#8DC63F] selection:text-white">
      {/* 1. Header & Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAppointmentModal={() => handleOpenAppointmentModal()}
        onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
      />

      {/* 2. Main Page Content View */}
      <main className="flex-1 w-full">
        {renderCurrentPage()}
      </main>

      {/* 3. Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAppointmentModal={() => handleOpenAppointmentModal()}
        onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
      />

      {/* 4. Floating Action Buttons (24/7 Emergency & WhatsApp Inquiries) */}
      <FloatingActions
        onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
        onOpenAppointmentModal={() => handleOpenAppointmentModal()}
      />

      {/* 5. Modals & Drawers */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleCloseAppointmentModal}
        preselectedDoctorId={selectedDoctorIdForBooking}
        preselectedDepartmentId={selectedDeptIdForBooking}
      />

      <EmergencyModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
      />

      <DoctorDetailDrawer
        doctor={selectedDoctorForDrawer}
        isOpen={selectedDoctorForDrawer !== null}
        onClose={() => setSelectedDoctorForDrawer(null)}
        onBookAppointment={(doctorId, departmentId) => {
          setSelectedDoctorForDrawer(null);
          handleOpenAppointmentModal(doctorId, departmentId);
        }}
      />

      {lightboxIndex !== null && (
        <LightboxModal
          isOpen={lightboxIndex !== null}
          images={FACILITY_GALLERY}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onIndexChange={(newIndex) => setLightboxIndex(newIndex)}
        />
      )}

      {selectedArticleForModal && (
        <ArticleReaderModal
          article={selectedArticleForModal}
          isOpen={selectedArticleForModal !== null}
          onClose={() => setSelectedArticleForModal(null)}
          onSelectRelatedArticle={(article) => setSelectedArticleForModal(article)}
        />
      )}
    </div>
  );
}
