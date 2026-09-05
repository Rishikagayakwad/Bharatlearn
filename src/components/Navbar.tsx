import React, { useState } from 'react';
import { useApp, ActiveNavTab } from '../context/AppContext';
import { SUPPORTED_LANGUAGES } from '../data/translations';
import { LanguageCode } from '../types';
import {
  Sparkles,
  Search,
  Globe2,
  Menu,
  X,
  Flame,
  Award,
  ChevronDown,
  User,
  GraduationCap,
  BookOpen,
  Compass,
  Cpu,
  Users2,
  Trophy,
  Layers
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    language,
    setLanguage,
    t,
    currentUser,
    setSearchOpen,
    setAuthOpen,
    xp,
    streak
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const currentLangObj = SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  const handleNavClick = (tab: ActiveNavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <button
              id="navbar-logo-btn"
              onClick={() => handleNavClick('home')}
              className="group flex items-center gap-2.5 text-left focus:outline-none"
            >
              {/* India-inspired tech insignia */}
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-sky-600 to-emerald-600 p-[1.5px] shadow-lg shadow-sky-950/50 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-white to-emerald-400 font-extrabold text-lg tracking-tight font-display">
                    भ
                  </span>
                  <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl md:text-2xl font-bold tracking-tight text-white font-display">
                    Bharat<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-sky-400">Learn</span>
                  </span>
                  <span className="px-1.5 py-0.2 text-[9px] font-semibold tracking-wider uppercase rounded bg-sky-500/10 border border-sky-400/30 text-sky-400">
                    Digital Bharat
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 hidden sm:block tracking-wide">
                  One Nation • One Learning Future
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('home')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'home'
                  ? 'text-white bg-slate-800/80 shadow-sm border border-slate-700/60'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              {t.navHome}
            </button>

            <button
              id="nav-link-explore"
              onClick={() => handleNavClick('explore')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'explore'
                  ? 'text-white bg-slate-800/80 shadow-sm border border-slate-700/60'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              {t.navExplore}
            </button>

            <button
              id="nav-link-ai-tutor"
              onClick={() => handleNavClick('ai-tutor')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-all ${
                activeTab === 'ai-tutor'
                  ? 'text-sky-300 bg-sky-950/60 border border-sky-600/40 shadow-sm'
                  : 'text-sky-400 hover:text-sky-200 hover:bg-sky-950/30'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              {t.navAiTutor}
            </button>

            <button
              id="nav-link-skills"
              onClick={() => handleNavClick('skills')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'skills'
                  ? 'text-white bg-slate-800/80 shadow-sm border border-slate-700/60'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              {t.navSkills}
            </button>

            <button
              id="nav-link-careers"
              onClick={() => handleNavClick('careers')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'careers'
                  ? 'text-white bg-slate-800/80 shadow-sm border border-slate-700/60'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              {t.navCareers}
            </button>

            <button
              id="nav-link-projects"
              onClick={() => handleNavClick('projects')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'projects' || activeTab === 'challenges'
                  ? 'text-white bg-slate-800/80 shadow-sm border border-slate-700/60'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              {t.navProjects}
            </button>

            <button
              id="nav-link-community"
              onClick={() => handleNavClick('community')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'community'
                  ? 'text-white bg-slate-800/80 shadow-sm border border-slate-700/60'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              {t.navCommunity}
            </button>

            <button
              id="nav-link-dashboard"
              onClick={() => handleNavClick('dashboard')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'dashboard'
                  ? 'text-white bg-slate-800/80 shadow-sm border border-slate-700/60'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              {t.navDashboard}
            </button>
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Global Search Button */}
            <button
              id="global-search-trigger-btn"
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/70 transition-colors"
              title="Search courses, skills, careers, projects"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Multilingual Selector (12 Indian Languages) */}
            <div className="relative">
              <button
                id="language-picker-btn"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-xs font-medium text-slate-200 transition-all hover:bg-slate-800/60"
              >
                <Globe2 className="w-3.5 h-3.5 text-sky-400" />
                <span className="font-semibold">{currentLangObj.nativeName}</span>
                <span className="text-[10px] text-slate-400 hidden sm:inline">({currentLangObj.code.toUpperCase()})</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div
                  id="language-dropdown-menu"
                  className="absolute right-0 mt-2 w-64 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-2 py-1.5 border-b border-slate-800 mb-1">
                    <p className="text-[11px] font-semibold text-slate-300">Choose Your Language</p>
                    <p className="text-[10px] text-slate-400">अपनी मातृभाषा में सीखें</p>
                  </div>
                  <div className="max-h-72 overflow-y-auto space-y-0.5">
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as LanguageCode);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors ${
                          language === lang.code
                            ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30'
                            : 'text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{lang.nativeName}</span>
                          <span className="text-[11px] text-slate-400">({lang.name})</span>
                        </div>
                        <span className="text-[10px] text-slate-500">{lang.speakersDemo}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Student Gamification Chips (Streak & XP) */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-800">
              <span className="flex items-center gap-1 text-xs font-semibold text-amber-400" title="Daily Learning Streak">
                <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                {streak}d
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1 text-xs font-semibold text-sky-400" title="Earned Knowledge XP">
                <Award className="w-3.5 h-3.5 text-sky-400" />
                {xp} XP
              </span>
            </div>

            {/* Profile / Role Selector */}
            <div className="relative">
              <button
                id="user-menu-btn"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all text-xs text-slate-200"
              >
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-6 h-6 rounded-full object-cover ring-1 ring-amber-500/50"
                />
                <span className="hidden md:inline font-medium max-w-[100px] truncate">
                  {currentUser?.name?.split(' ')?.[0] || 'User'}
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.2 rounded text-[9px] uppercase font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {currentUser.role}
                </span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {userMenuOpen && (
                <div
                  id="user-dropdown-menu"
                  className="absolute right-0 mt-2 w-56 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl p-2 z-50 text-xs"
                >
                  <div className="px-3 py-2 border-b border-slate-800 mb-1">
                    <p className="font-semibold text-slate-100">{currentUser.name}</p>
                    <p className="text-[11px] text-slate-400 truncate">{currentUser.school || currentUser.state}</p>
                    <span className="inline-block mt-1 px-1.5 py-0.5 rounded text-[10px] uppercase font-bold bg-sky-500/10 text-sky-300 border border-sky-500/30">
                      {currentUser.role} Portal
                    </span>
                  </div>

                  <div className="py-1 space-y-0.5">
                    <button
                      onClick={() => {
                        handleNavClick('dashboard');
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-slate-800 text-slate-300 flex items-center gap-2"
                    >
                      <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                      Student Dashboard
                    </button>
                    <button
                      onClick={() => {
                        handleNavClick('teacher');
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-slate-800 text-slate-300 flex items-center gap-2"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                      Teacher Dashboard
                    </button>
                    <button
                      onClick={() => {
                        handleNavClick('parent');
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-slate-800 text-slate-300 flex items-center gap-2"
                    >
                      <Users2 className="w-3.5 h-3.5 text-amber-400" />
                      Parent Portal
                    </button>
                    <button
                      onClick={() => {
                        handleNavClick('admin');
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-slate-800 text-slate-300 flex items-center gap-2"
                    >
                      <Layers className="w-3.5 h-3.5 text-purple-400" />
                      National Admin Analytics
                    </button>
                  </div>

                  <div className="pt-1 border-t border-slate-800 mt-1">
                    <button
                      onClick={() => {
                        setAuthOpen(true);
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-slate-800 text-amber-400 font-medium flex items-center gap-2"
                    >
                      <User className="w-3.5 h-3.5" />
                      Switch Account / Login
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden border-b border-slate-800 bg-slate-950 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            <button
              onClick={() => handleNavClick('home')}
              className={`p-2.5 rounded-lg text-left text-xs font-medium ${activeTab === 'home' ? 'bg-slate-800 text-white' : 'text-slate-300 bg-slate-900'}`}
            >
              🏠 {t.navHome}
            </button>
            <button
              onClick={() => handleNavClick('explore')}
              className={`p-2.5 rounded-lg text-left text-xs font-medium ${activeTab === 'explore' ? 'bg-slate-800 text-white' : 'text-slate-300 bg-slate-900'}`}
            >
              🗺️ {t.navExplore}
            </button>
            <button
              onClick={() => handleNavClick('ai-tutor')}
              className={`p-2.5 rounded-lg text-left text-xs font-medium flex items-center gap-1.5 ${activeTab === 'ai-tutor' ? 'bg-sky-950 text-sky-300 border border-sky-700' : 'text-sky-400 bg-slate-900'}`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              {t.navAiTutor}
            </button>
            <button
              onClick={() => handleNavClick('skills')}
              className={`p-2.5 rounded-lg text-left text-xs font-medium ${activeTab === 'skills' ? 'bg-slate-800 text-white' : 'text-slate-300 bg-slate-900'}`}
            >
              ⚡ {t.navSkills}
            </button>
            <button
              onClick={() => handleNavClick('careers')}
              className={`p-2.5 rounded-lg text-left text-xs font-medium ${activeTab === 'careers' ? 'bg-slate-800 text-white' : 'text-slate-300 bg-slate-900'}`}
            >
              🎯 {t.navCareers}
            </button>
            <button
              onClick={() => handleNavClick('projects')}
              className={`p-2.5 rounded-lg text-left text-xs font-medium ${activeTab === 'projects' ? 'bg-slate-800 text-white' : 'text-slate-300 bg-slate-900'}`}
            >
              🚀 {t.navProjects}
            </button>
            <button
              onClick={() => handleNavClick('community')}
              className={`p-2.5 rounded-lg text-left text-xs font-medium ${activeTab === 'community' ? 'bg-slate-800 text-white' : 'text-slate-300 bg-slate-900'}`}
            >
              🤝 {t.navCommunity}
            </button>
            <button
              onClick={() => handleNavClick('dashboard')}
              className={`p-2.5 rounded-lg text-left text-xs font-medium ${activeTab === 'dashboard' ? 'bg-slate-800 text-white' : 'text-slate-300 bg-slate-900'}`}
            >
              📊 {t.navDashboard}
            </button>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs">
            <span className="text-slate-400">Current Role: <strong className="text-slate-200 capitalize">{currentUser.role}</strong></span>
            <button
              onClick={() => {
                setAuthOpen(true);
                setMobileMenuOpen(false);
              }}
              className="px-3 py-1 rounded-md bg-amber-500 text-slate-950 font-bold"
            >
              Switch Role / Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
