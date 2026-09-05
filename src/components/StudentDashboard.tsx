import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ALL_BADGES } from '../data/mockData';
import {
  Flame,
  Award,
  Trophy,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  BookOpen,
  Zap,
  Target,
  FileCheck,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';

export const StudentDashboard: React.FC = () => {
  const {
    currentUser,
    streak,
    xp,
    setActiveTab,
    openQuizModal,
    addXP,
    showToast
  } = useApp();

  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'courses' | 'badges' | 'certificates'>('overview');

  const upcomingLessons = [
    { id: '1', title: 'Neural Networks & Machine Vision', track: 'AI & Data Science', duration: '25 min', progress: 75 },
    { id: '2', title: 'Solar Tracking Circuits with Arduino', track: 'Robotics & Clean Energy', duration: '40 min', progress: 40 },
    { id: '3', title: 'Quadratic Systems in Aerospace Modeling', track: 'Applied Mathematics', duration: '30 min', progress: 90 }
  ];

  return (
    <div id="student-dashboard-view" className="py-8 space-y-8 animate-in fade-in duration-200">
      
      {/* Top Welcome Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-16 h-16 rounded-2xl object-cover ring-2 ring-amber-500/50 shadow-lg"
            />
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  Student Portal • Class {currentUser.grade || 10}
                </span>
                <span className="text-xs text-slate-400">{currentUser.school}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
                Namaste, {currentUser.name}! 🙏
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                You are on track to master <strong className="text-sky-400">Deep Learning & Robotics</strong>. Keep the momentum going!
              </p>
            </div>
          </div>

          {/* Quick Stats Pill Ribbon */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="p-3 rounded-2xl bg-slate-950/90 border border-slate-800 text-center min-w-[90px]">
              <div className="flex items-center justify-center gap-1 text-amber-400 font-black text-lg font-display">
                <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                {streak}
              </div>
              <span className="text-[10px] text-slate-400 font-semibold">Day Streak</span>
            </div>

            <div className="p-3 rounded-2xl bg-slate-950/90 border border-slate-800 text-center min-w-[90px]">
              <div className="flex items-center justify-center gap-1 text-sky-400 font-black text-lg font-display">
                <Award className="w-4 h-4" />
                {xp}
              </div>
              <span className="text-[10px] text-slate-400 font-semibold">Knowledge XP</span>
            </div>

            <div className="p-3 rounded-2xl bg-slate-950/90 border border-slate-800 text-center min-w-[90px]">
              <div className="text-emerald-400 font-black text-lg font-display">
                #14
              </div>
              <span className="text-[10px] text-slate-400 font-semibold">{currentUser.state} Rank</span>
            </div>

            <div className="p-3 rounded-2xl bg-slate-950/90 border border-slate-800 text-center min-w-[90px]">
              <div className="text-purple-400 font-black text-lg font-display">
                #342
              </div>
              <span className="text-[10px] text-slate-400 font-semibold">Bharat Rank</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-navigation tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
        {(['overview', 'courses', 'badges', 'certificates'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all ${
              activeSubTab === tab
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Overview Sub-view */}
      {activeSubTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main 8-col Left Area */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Daily AI Recommended Lesson & Next Milestone */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Next Learning Milestone
                  </h3>
                </div>
                <span className="text-[11px] text-slate-400">Estimated: 35 mins remaining</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase">Module 4 of 6</span>
                  <h4 className="text-base font-bold text-white">Convolutional Kernels for Smart Crop Diagnostics</h4>
                  <p className="text-xs text-slate-400">Understanding image matrix convolution using edge detection on neem leaves.</p>
                </div>

                <button
                  onClick={() => {
                    addXP(30, 'Completed Lesson Milestone');
                    showToast('Lesson opened in active classroom!', 'success');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shrink-0 cursor-pointer shadow-md"
                >
                  Resume Lesson <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Overall Track Progress (AI & Robotics)</span>
                  <strong className="text-slate-200">72%</strong>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="w-[72%] h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full" />
                </div>
              </div>
            </div>

            {/* Active Enrolled Courses */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-sky-400" />
                  Continue Active Courses
                </h3>
                <button
                  onClick={() => setActiveTab('skills')}
                  className="text-xs text-sky-400 hover:underline"
                >
                  Explore All 12 Tracks →
                </button>
              </div>

              <div className="space-y-3">
                {upcomingLessons.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-slate-700 transition-all"
                  >
                    <div>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase">{item.track}</span>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <span className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3" /> {item.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-24 text-right">
                        <span className="text-xs font-bold text-slate-200">{item.progress}%</span>
                        <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden mt-1">
                          <div className="h-full bg-sky-400" style={{ width: `${item.progress}%` }} />
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          showToast(`Opened ${item.title}`, 'info');
                        }}
                        className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right 4-col Sidebar: Daily Challenge & Badges */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Today's National Challenge */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-500/30 space-y-4 shadow-xl">
              <div className="flex items-center justify-between text-xs">
                <span className="text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1">
                  <Target className="w-3.5 h-3.5" /> Daily Concept Sprint
                </span>
                <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                  +50 XP
                </span>
              </div>

              <div>
                <h4 className="text-base font-bold text-white">
                  The Chandrayaan Orbital Math Quiz
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Solve 5 orbital velocity and gravitational sling-shot questions designed by ISRO educators.
                </p>
              </div>

              <button
                onClick={() => openQuizModal('quiz-chandrayaan')}
                className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <Zap className="w-3.5 h-3.5" /> Start Daily Challenge
              </button>
            </div>

            {/* AI Learning Assistant Suggestions */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-xl">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" /> AI Diagnostic Recommendation
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                “Aarav, your physics quiz scores were in the 95th percentile, but you skipped the electromagnetic induction proof. Would you like a 3-minute visual walkthrough?”
              </p>
              <button
                onClick={() => setActiveTab('ai-tutor')}
                className="w-full py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-sky-400 border border-slate-800 text-xs font-semibold flex items-center justify-center gap-1"
              >
                Ask AI Companion →
              </button>
            </div>

            {/* Badges Earned Ribbon */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Earned Badges ({ALL_BADGES.length})
                </h4>
                <button
                  onClick={() => setActiveSubTab('badges')}
                  className="text-xs text-amber-400 hover:underline"
                >
                  View All
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {ALL_BADGES.slice(0, 4).map((badge) => (
                  <div
                    key={badge.id}
                    className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-center space-y-1"
                  >
                    <span className="text-2xl block">{badge.icon}</span>
                    <p className="text-[11px] font-bold text-white truncate">{badge.title}</p>
                    <span className="text-[9px] text-amber-400 font-semibold">+{badge.xpAward} XP</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      )}

      {/* Courses Tab */}
      {activeSubTab === 'courses' && (
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white">All Enrolled Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingLessons.map((course) => (
              <div key={course.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <span className="text-[10px] text-amber-400 uppercase font-bold">{course.track}</span>
                <h4 className="text-sm font-bold text-white">{course.title}</h4>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-emerald-400" style={{ width: `${course.progress}%` }} />
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <span>{course.progress}% Complete</span>
                  <button className="text-sky-400 font-bold hover:underline">Resume Module</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Badges Tab */}
      {activeSubTab === 'badges' && (
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white">Your National Achievement Badges</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {ALL_BADGES.map((badge) => (
              <div key={badge.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-1.5">
                <span className="text-3xl block">{badge.icon}</span>
                <h4 className="text-xs font-bold text-white">{badge.title}</h4>
                <p className="text-[10px] text-slate-400">{badge.description}</p>
                <span className="inline-block text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                  +{badge.xpAward} XP
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certificates Tab */}
      {activeSubTab === 'certificates' && (
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white">Verified Digital Credentials</h3>
            <button
              onClick={() => setActiveTab('verify')}
              className="text-xs text-amber-400 hover:underline"
            >
              Verify Any Credential Online →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/30">
                  Issued by BharatLearn
                </span>
                <span className="text-slate-400">ID: BL-2026-IND-8942</span>
              </div>
              <h4 className="text-base font-bold text-white">Frontier Artificial Intelligence Mastery</h4>
              <p className="text-xs text-slate-400">Issued to Aarav Sharma • Class 10 • Score: 94%</p>
              <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                <span className="text-slate-500">Cryptographically Signed</span>
                <button
                  onClick={() => setActiveTab('verify')}
                  className="text-sky-400 font-semibold hover:underline"
                >
                  View Verified QR & Certificate →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
