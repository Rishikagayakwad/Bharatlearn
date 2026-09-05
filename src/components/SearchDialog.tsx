import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ALL_SKILLS, ALL_CAREERS, PROJECT_CHALLENGES, ALL_STATES } from '../data/mockData';
import {
  Search,
  X,
  Sparkles,
  ArrowRight,
  BookOpen,
  Compass,
  Rocket,
  MapPin
} from 'lucide-react';

export const SearchDialog: React.FC = () => {
  const { isSearchOpen, setSearchOpen, setActiveTab, setSelectedSkill, setSelectedState } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSearchOpen(false);
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSearchOpen]);

  if (!isSearchOpen) return null;

  const query = searchTerm.toLowerCase().trim();

  const matchedSkills = query
    ? ALL_SKILLS.filter(
        (s) =>
          s.title.toLowerCase().includes(query) ||
          s.category.toLowerCase().includes(query) ||
          s.tagline.toLowerCase().includes(query)
      )
    : ALL_SKILLS.slice(0, 3);

  const matchedCareers = query
    ? ALL_CAREERS.filter(
        (c) =>
          c.title.toLowerCase().includes(query) ||
          c.category.toLowerCase().includes(query) ||
          c.description.toLowerCase().includes(query)
      )
    : ALL_CAREERS.slice(0, 2);

  const matchedProjects = query
    ? PROJECT_CHALLENGES.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      )
    : PROJECT_CHALLENGES.slice(0, 2);

  const matchedStates = query
    ? ALL_STATES.filter(
        (st) =>
          st.name.toLowerCase().includes(query) ||
          st.popularSkills.some((sk) => sk.toLowerCase().includes(query))
      )
    : [];

  return (
    <div
      id="search-dialog-backdrop"
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-start justify-center p-4 pt-16 sm:pt-24 overflow-y-auto animate-in fade-in duration-150"
      onClick={() => setSearchOpen(false)}
    >
      <div
        className="w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3 bg-slate-950">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search skills, careers, national projects, states (e.g. AI, Space, Water, Kerala)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={() => setSearchOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results Content */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 text-xs">
          
          {/* Skills matches */}
          {matchedSkills.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                Skills & Curricula ({matchedSkills.length})
              </span>
              <div className="space-y-1.5">
                {matchedSkills.map((sk) => (
                  <button
                    key={sk.id}
                    onClick={() => {
                      setSelectedSkill(sk);
                      setActiveTab('skills');
                      setSearchOpen(false);
                    }}
                    className="w-full p-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800/80 flex items-center justify-between text-left transition-colors"
                  >
                    <div>
                      <p className="font-bold text-white text-xs">{sk.title}</p>
                      <p className="text-[11px] text-slate-400">{sk.tagline}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Careers matches */}
          {matchedCareers.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                Careers of Tomorrow ({matchedCareers.length})
              </span>
              <div className="space-y-1.5">
                {matchedCareers.map((car) => (
                  <button
                    key={car.id}
                    onClick={() => {
                      setActiveTab('careers');
                      setSearchOpen(false);
                    }}
                    className="w-full p-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800/80 flex items-center justify-between text-left transition-colors"
                  >
                    <div>
                      <p className="font-bold text-white text-xs">{car.title}</p>
                      <p className="text-[11px] text-slate-400">{car.description}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects matches */}
          {matchedProjects.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Rocket className="w-3.5 h-3.5 text-emerald-400" />
                National Challenges ({matchedProjects.length})
              </span>
              <div className="space-y-1.5">
                {matchedProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => {
                      setActiveTab('projects');
                      setSearchOpen(false);
                    }}
                    className="w-full p-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800/80 flex items-center justify-between text-left transition-colors"
                  >
                    <div>
                      <p className="font-bold text-white text-xs">{proj.title}</p>
                      <p className="text-[11px] text-slate-400">{proj.tagline}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* State matches */}
          {matchedStates.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                States & Union Territories
              </span>
              <div className="space-y-1.5">
                {matchedStates.map((st) => (
                  <button
                    key={st.id}
                    onClick={() => {
                      setSelectedState(st);
                      setActiveTab('explore');
                      setSearchOpen(false);
                    }}
                    className="w-full p-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800/80 flex items-center justify-between text-left transition-colors"
                  >
                    <div>
                      <p className="font-bold text-white text-xs">{st.name}</p>
                      <p className="text-[11px] text-slate-400">{st.learners} Learners • {st.primaryLanguage}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Tip: Press ESC or click outside to close</span>
          <span>Indexed across 28 Indian States</span>
        </div>
      </div>
    </div>
  );
};
