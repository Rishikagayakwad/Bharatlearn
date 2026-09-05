import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ALL_CAREERS } from '../data/mockData';
import { CareerPath } from '../types';
import {
  Compass,
  Rocket,
  TrendingUp,
  Building2,
  BookOpen,
  ArrowRight,
  Sparkles,
  Award,
  Search,
  CheckCircle2,
  X
} from 'lucide-react';

export const CareerDiscovery: React.FC = () => {
  const { setActiveTab, setSelectedSkill, showToast } = useApp();
  const [selectedCareerModal, setSelectedCareerModal] = useState<CareerPath | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const categories = ['All', 'Artificial Intelligence', 'Space & Defense', 'Energy & Climate', 'Agriculture', 'Aviation & Hardware'];

  const filteredCareers = ALL_CAREERS.filter((car) => {
    const skills = car.requiredSkills || car.skillsRequired || [];
    const matchesSearch =
      car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = categoryFilter === 'All' || car.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="careers-tomorrow-section" className="py-16 sm:py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            National Career Horizons
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            Discover What You Can Become
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Connect high-school education directly to high-impact Indian careers. Learn what top engineers, researchers, and climate technologists actually do daily.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search careers, skills, or organizations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-all ${
                  categoryFilter === cat
                    ? 'bg-sky-500 text-slate-950 font-bold'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Career Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map((career) => (
            <div
              key={career.id}
              onClick={() => setSelectedCareerModal(career)}
              className="rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-200 shadow-xl hover:shadow-2xl cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                    {career.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                    <TrendingUp className="w-3 h-3" />
                    {career.futureDemand || career.futureOpportunities || '+35% YoY Growth'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {career.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  {career.description}
                </p>

                {/* What they do bullet preview */}
                <div className="mt-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1 text-xs">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Core Mission</span>
                  <p className="text-slate-300 text-[11px] line-clamp-2">
                    {career.whatTheyDo?.[0] || career.beginnerProjects?.[0] || career.description}
                  </p>
                </div>

                {/* Skills tags */}
                {(() => {
                  const skills = career.requiredSkills || career.skillsRequired || [];
                  return (
                    <div className="mt-4 flex flex-wrap gap-1">
                      {skills.slice(0, 3).map((sk) => (
                        <span key={sk} className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 text-[10px] border border-slate-800">
                          {sk}
                        </span>
                      ))}
                      {skills.length > 3 && (
                        <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-500 text-[10px]">
                          +{skills.length - 3} more
                        </span>
                      )}
                    </div>
                  );
                })()}
              </div>

              {/* Card Footer: Top Employers & Action */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-[10px] text-slate-400 truncate max-w-[170px]">
                  <Building2 className="w-3 h-3 text-slate-500 shrink-0" />
                  <span className="truncate">
                    {(career.exampleCompanies || ['ISRO', 'DRDO', 'Tata', 'Startups']).slice(0, 2).join(', ')}
                  </span>
                </div>

                <span className="font-bold text-amber-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Roadmap <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Career Detail & School Action Roadmap Modal */}
        {selectedCareerModal && (
          <div
            id="career-detail-modal"
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-150"
            onClick={() => setSelectedCareerModal(null)}
          >
            <div
              className="w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-800 gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase text-sky-400 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/30">
                      {selectedCareerModal.category}
                    </span>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> {selectedCareerModal.futureDemand || selectedCareerModal.futureOpportunities || '+35% YoY Growth'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white font-display mt-1">
                    {selectedCareerModal.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedCareerModal(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedCareerModal.description}
              </p>

              {/* What They Do */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  What Professionals In This Role Actually Do:
                </h4>
                <div className="space-y-1.5">
                  {(selectedCareerModal.whatTheyDo || selectedCareerModal.beginnerProjects || [selectedCareerModal.description]).map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* School Action Steps: How to Start in School */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" /> How to Start While You Are in School:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-200">
                  {(
                    selectedCareerModal.howToStartInSchool ||
                    selectedCareerModal.roadmap?.map((r) => `${r.phase}: ${r.focus}`) || [
                      'Master foundational mathematics and scientific principles.',
                      'Build simple, hands-on prototypes and participate in competitions.',
                      'Contribute to open-source or local community problem solving.'
                    ]
                  ).map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-amber-500 text-slate-950 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Top Indian Employers & Organizations */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" /> Leading Indian Employers & Research Hubs:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(selectedCareerModal.exampleCompanies || ['ISRO', 'DRDO', 'Tata Group', 'AgriTech Startups']).map((comp) => (
                    <span
                      key={comp}
                      className="px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-200"
                    >
                      🏛️ {comp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-2">
                <button
                  onClick={() => setSelectedCareerModal(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedCareerModal(null);
                    setActiveTab('skills');
                    showToast(`Viewing curriculum for ${selectedCareerModal.title}`, 'info');
                  }}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 flex items-center gap-1.5"
                >
                  Explore Prerequisite Skills →
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
