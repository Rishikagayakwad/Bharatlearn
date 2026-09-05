import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ALL_SKILLS } from '../data/mockData';
import { SkillTrack } from '../types';
import {
  Sparkles,
  Code2,
  Bot,
  ShieldAlert,
  BarChart3,
  Palette,
  TrendingUp,
  Coins,
  Users2,
  Brain,
  Leaf,
  Laptop,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Briefcase,
  X
} from 'lucide-react';

export const FutureSkills: React.FC = () => {
  const { selectedSkill, setSelectedSkill, setActiveTab, showToast, addXP } = useApp();
  const [activeModalSkill, setActiveModalSkill] = useState<SkillTrack | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-sky-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-emerald-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-rose-400" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-purple-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-pink-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-amber-400" />;
      case 'Coins': return <Coins className="w-5 h-5 text-yellow-400" />;
      case 'Users2': return <Users2 className="w-5 h-5 text-teal-400" />;
      case 'Brain': return <Brain className="w-5 h-5 text-indigo-400" />;
      case 'Leaf': return <Leaf className="w-5 h-5 text-emerald-400" />;
      default: return <Laptop className="w-5 h-5 text-blue-400" />;
    }
  };

  const handleOpenSkill = (skill: SkillTrack) => {
    setActiveModalSkill(skill);
    setSelectedSkill(skill);
  };

  return (
    <section id="future-skills-section" className="py-16 sm:py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Viksit Bharat 2047 Competency Framework
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            Skills India Will Need Tomorrow
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Education connected directly to future national needs. Explore 12 modular tracks engineered from beginner curiosity to frontier industry mastery.
          </p>
        </div>

        {/* 12 Interactive Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {ALL_SKILLS.map((skill) => (
            <div
              key={skill.id}
              onClick={() => handleOpenSkill(skill)}
              className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 transition-all duration-200 flex flex-col justify-between group cursor-pointer shadow-lg hover:shadow-sky-950/40"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-105 transition-transform">
                    {getIcon(skill.icon)}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    Demand: {skill.demandIndex}%
                  </span>
                </div>

                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  {skill.category}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors mt-0.5">
                  {skill.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 line-clamp-2 leading-relaxed">
                  {skill.tagline}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-sky-400 font-semibold">
                <span>View Learning Path</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Learning Path Modal */}
        {activeModalSkill && (
          <div
            id="skill-detail-modal"
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-150"
            onClick={() => setActiveModalSkill(null)}
          >
            <div
              className="w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-800 gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-700">
                    {getIcon(activeModalSkill.icon)}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-amber-400">
                      {activeModalSkill.category}
                    </span>
                    <h3 className="text-2xl font-black text-white font-display">
                      {activeModalSkill.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModalSkill(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tagline */}
              <p className="text-sm text-slate-300 italic">
                “{activeModalSkill.tagline}”
              </p>

              {/* 3 Tier Progressive Path: Beginner -> Intermediate -> Advanced */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Curriculum Milestones
                </h4>

                {/* Beginner */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      Level 1: Beginner
                    </span>
                    <span className="text-slate-400">{activeModalSkill.levels.beginner.duration}</span>
                  </div>
                  <h5 className="text-sm font-bold text-white">
                    {activeModalSkill.levels.beginner.title}
                  </h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                    {activeModalSkill.levels.beginner.topics.map((t) => (
                      <li key={t} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Intermediate */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 text-sky-300 border border-sky-500/30">
                      Level 2: Intermediate
                    </span>
                    <span className="text-slate-400">{activeModalSkill.levels.intermediate.duration}</span>
                  </div>
                  <h5 className="text-sm font-bold text-white">
                    {activeModalSkill.levels.intermediate.title}
                  </h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                    {activeModalSkill.levels.intermediate.topics.map((t) => (
                      <li key={t} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Advanced */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/10 text-purple-300 border border-purple-500/30">
                      Level 3: Advanced
                    </span>
                    <span className="text-slate-400">{activeModalSkill.levels.advanced.duration}</span>
                  </div>
                  <h5 className="text-sm font-bold text-white">
                    {activeModalSkill.levels.advanced.title}
                  </h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                    {activeModalSkill.levels.advanced.topics.map((t) => (
                      <li key={t} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Capstone Project Showcase */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1.5">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                  🛠️ Required Capstone Project
                </span>
                <h5 className="text-sm font-bold text-white">
                  {activeModalSkill.capstoneProject.title}
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeModalSkill.capstoneProject.description}
                </p>
                <div className="pt-2 text-[11px] text-amber-300 font-semibold">
                  Deliverable: {activeModalSkill.capstoneProject.deliverable}
                </div>
              </div>

              {/* Career Outcome */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">National Career Opportunity</span>
                  <p className="text-sm font-bold text-white">{activeModalSkill.careerOutcome.role}</p>
                  <span className="text-emerald-400 font-semibold">{activeModalSkill.careerOutcome.avgGrowth}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {activeModalSkill.careerOutcome.industries.map((ind) => (
                    <span key={ind} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  onClick={() => setActiveModalSkill(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    addXP(40, `Enrolled in ${activeModalSkill.title} Track`);
                    showToast(`Successfully enrolled in ${activeModalSkill.title}!`, 'celebrate');
                    setActiveModalSkill(null);
                  }}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300"
                >
                  Start Learning Track →
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
