import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ALL_BADGES, NATIONAL_LEADERBOARD } from '../data/mockData';
import { Flame, Award, Trophy, Medal, Star, MapPin, Sparkles, Filter } from 'lucide-react';

export const GamificationSection: React.FC = () => {
  const { xp, streak, openQuizModal } = useApp();
  const [leaderboardScope, setLeaderboardScope] = useState<'School' | 'District' | 'State' | 'National'>('National');

  return (
    <section id="gamification-leaderboard-section" className="py-16 sm:py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Trophy className="w-3.5 h-3.5" />
            Healthy National Gamification & Recognition
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            Celebrate Effort. Recognize Innovation.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Gamification in BharatLearn honors mastery, consistency, and community problem solving — not rote memorization.
          </p>
        </div>

        {/* 4 Gamification Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 mx-auto flex items-center justify-center">
              <Flame className="w-6 h-6 fill-amber-500" />
            </div>
            <h3 className="text-base font-bold text-white">Daily Streak</h3>
            <p className="text-xs text-slate-400">Consistency in daily learning habits. Build uninterrupted problem-solving discipline.</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-500/40 text-sky-400 mx-auto flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Knowledge XP</h3>
            <p className="text-xs text-slate-400">Awarded for solving STEM derivations, coding modules, and peer collaboration.</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <Medal className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Concept Badges</h3>
            <p className="text-xs text-slate-400">Cryptographically verifiable badges for mastery in ISRO astronomy, AI, and robotics.</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-purple-400 mx-auto flex items-center justify-center">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Bharat Innovator</h3>
            <p className="text-xs text-slate-400">Awarded by national juries to students who build working field prototypes.</p>
          </div>
        </div>

        {/* National Leaderboard & Badges Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Scopeable Leaderboard */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-400" />
                  <h3 className="text-base font-bold text-white">
                    National Innovation Leaderboard
                  </h3>
                </div>

                {/* Scope Filters */}
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                  {(['School', 'District', 'State', 'National'] as const).map((sc) => (
                    <button
                      key={sc}
                      onClick={() => setLeaderboardScope(sc)}
                      className={`px-3 py-1 rounded-lg font-bold transition-all ${
                        leaderboardScope === sc
                          ? 'bg-amber-400 text-slate-950'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {sc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Leaderboard Table / Feed */}
              <div className="space-y-2.5">
                {NATIONAL_LEADERBOARD.map((lead) => (
                  <div
                    key={lead.rank}
                    className={`p-3.5 rounded-2xl border flex items-center justify-between transition-all ${
                      lead.name === 'Aarav Sharma'
                        ? 'bg-amber-500/10 border-amber-500/40 shadow-md'
                        : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs font-display ${
                          lead.rank === 1
                            ? 'bg-amber-400 text-slate-950'
                            : lead.rank === 2
                            ? 'bg-slate-300 text-slate-950'
                            : lead.rank === 3
                            ? 'bg-amber-700 text-white'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        #{lead.rank}
                      </div>

                      <img
                        src={lead.avatar}
                        alt={lead.name}
                        className="w-10 h-10 rounded-full object-cover ring-1 ring-slate-700"
                      />

                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-white text-xs sm:text-sm">{lead.name}</p>
                          {lead.name === 'Aarav Sharma' && (
                            <span className="text-[10px] uppercase font-bold text-amber-300 bg-amber-500/20 px-1.5 rounded">
                              You
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400">
                          {lead.school}, {lead.state}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-sm font-black text-amber-400 font-display block">
                        {lead.xp} XP
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {lead.badgesCount} Badges • 🔥 {lead.streak}d
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge Trigger */}
              <div className="pt-2 text-center">
                <button
                  onClick={() => openQuizModal('quiz-chandrayaan')}
                  className="w-full py-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-sky-400 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Take Daily Quiz to Climb the Leaderboard (+50 XP)
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 6 National Badges Collection */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                Featured National Competency Badges
              </h3>

              <div className="space-y-3">
                {ALL_BADGES.map((b) => (
                  <div
                    key={b.id}
                    className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-3.5"
                  >
                    <span className="text-3xl shrink-0 p-1.5 rounded-xl bg-slate-900 border border-slate-800">
                      {b.icon}
                    </span>
                    <div className="flex-1 space-y-0.5">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-white">{b.title}</h4>
                        <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-1.5 rounded">
                          +{b.xpAward} XP
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
