import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { AccessibilityBar } from './components/AccessibilityBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PersonalizedLearning } from './components/PersonalizedLearning';
import { AiTutor } from './components/AiTutor';
import { InteractiveIndiaMap } from './components/InteractiveIndiaMap';
import { MultilingualSection } from './components/MultilingualSection';
import { FutureSkills } from './components/FutureSkills';
import { ProjectMarketplace } from './components/ProjectMarketplace';
import { CareerDiscovery } from './components/CareerDiscovery';
import { CommunitySection } from './components/CommunitySection';
import { GamificationSection } from './components/GamificationSection';
import { StudentDashboard } from './components/StudentDashboard';
import { TeacherDashboard, ParentPortal, AdminDashboard } from './components/RoleDashboards';
import { CertificateVerifier } from './components/CertificateVerifier';
import { QuizModal } from './components/QuizModal';
import { SearchDialog } from './components/SearchDialog';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';
import { CheckCircle2, Sparkles, X, Info } from 'lucide-react';

const MainContent: React.FC = () => {
  const { activeTab, toastMessage, hideToast, theme, highContrast } = useApp();

  return (
    <div
      className={`min-h-screen flex flex-col font-sans overflow-x-hidden w-full transition-colors duration-200 ${
        highContrast
          ? 'bg-black text-white'
          : theme === 'light'
          ? 'bg-slate-50 text-slate-900 selection:bg-amber-300 selection:text-slate-950'
          : 'bg-slate-950 text-slate-100 selection:bg-amber-400 selection:text-slate-950'
      }`}
    >
      {/* Top Accessibility & Judge Role Bar */}
      <AccessibilityBar />

      {/* Primary Sticky Header */}
      <Navbar />

      {/* Toast Notification Alert */}
      {toastMessage && (
        <div
          id="toast-notification-banner"
          className={`fixed bottom-4 left-4 right-4 sm:left-auto sm:right-5 sm:max-w-md z-50 p-4 rounded-2xl shadow-2xl flex items-center gap-3 border transition-all animate-in slide-in-from-bottom-5 duration-200 ${
            toastMessage.type === 'celebrate'
              ? 'bg-gradient-to-r from-amber-500/20 to-emerald-500/20 border-amber-400/60 text-amber-200 backdrop-blur-xl'
              : toastMessage.type === 'error'
              ? 'bg-rose-950/90 border-rose-500/60 text-rose-200 backdrop-blur-xl'
              : 'bg-slate-900/95 border-sky-500/40 text-sky-200 backdrop-blur-xl'
          }`}
        >
          {toastMessage.type === 'celebrate' ? (
            <Sparkles className="w-5 h-5 text-amber-400 animate-spin shrink-0" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          )}
          <span className="text-xs sm:text-sm font-semibold flex-1 leading-snug">{toastMessage.message}</span>
          <button
            onClick={hideToast}
            className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main View Router */}
      <main className="flex-1 w-full overflow-x-hidden">
        {activeTab === 'home' && (
          <>
            <HeroSection />
            <PersonalizedLearning />
            <AiTutor />
            <InteractiveIndiaMap />
            <MultilingualSection />
            <FutureSkills />
            <ProjectMarketplace />
            <CareerDiscovery />
            <CommunitySection />
            <GamificationSection />
          </>
        )}

        {activeTab === 'explore' && (
          <div className="w-full space-y-4">
            <InteractiveIndiaMap />
            <FutureSkills />
          </div>
        )}

        {activeTab === 'ai-tutor' && <AiTutor />}

        {activeTab === 'skills' && <FutureSkills />}

        {activeTab === 'careers' && <CareerDiscovery />}

        {activeTab === 'projects' && <ProjectMarketplace />}

        {activeTab === 'community' && <CommunitySection />}

        {activeTab === 'dashboard' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
            <StudentDashboard />
          </div>
        )}

        {activeTab === 'teacher' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
            <TeacherDashboard />
          </div>
        )}

        {activeTab === 'parent' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
            <ParentPortal />
          </div>
        )}

        {activeTab === 'admin' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
            <AdminDashboard />
          </div>
        )}

        {activeTab === 'verify' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
            <CertificateVerifier />
          </div>
        )}
      </main>

      {/* Global Interactive Modals */}
      <QuizModal />
      <SearchDialog />
      <AuthModal />

      {/* Platform Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
