import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ALL_STATES } from '../data/mockData';
import { StateData } from '../types';
import {
  MapPin,
  Users,
  GraduationCap,
  Sparkles,
  BookOpen,
  Award,
  Layers,
  ArrowRight,
  TrendingUp,
  Cpu,
  ShieldAlert
} from 'lucide-react';

export const InteractiveIndiaMap: React.FC = () => {
  const { selectedState, setSelectedState, setActiveTab, t } = useApp();
  const [activeState, setActiveState] = useState<StateData>(selectedState || ALL_STATES[0]);
  const [regionFilter, setRegionFilter] = useState<string>('All');

  const regions = ['All', 'North', 'South', 'East', 'West', 'Central', 'North-East'];

  const filteredStates =
    regionFilter === 'All'
      ? ALL_STATES
      : ALL_STATES.filter((s) => s.region === regionFilter);

  const handleSelectState = (state: StateData) => {
    setActiveState(state);
    setSelectedState(state);
  };

  return (
    <section id="india-learning-map-section" className="py-16 sm:py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            Pan-India Digital Education Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            A Classroom Without Borders
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            From Ladakh to Kanyakumari, Gujarat to Arunachal Pradesh — explore how 28 States & 8 Union Territories are decentralizing world-class education.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>28 States & 8 Union Territories Connected</span>
          </div>
        </div>

        {/* Region Filter Bar */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap mb-8">
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setRegionFilter(r)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                regionFilter === r
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100 hover:bg-slate-800'
              }`}
            >
              {r} {r !== 'All' ? 'India' : ''}
            </button>
          ))}
        </div>

        {/* Main Grid: Interactive Map Explorer & State Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: State Selection Directory & Map Mesh */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-400">
                <span className="font-semibold text-slate-200">Select a State to Inspect Ecosystem</span>
                <span>{filteredStates.length} Regions Available</span>
              </div>

              {/* State Grid Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[380px] overflow-y-auto pr-1">
                {filteredStates.map((state) => {
                  const isSelected = state.id === activeState.id;
                  return (
                    <button
                      key={state.id}
                      onClick={() => handleSelectState(state)}
                      className={`p-3 rounded-xl text-left text-xs transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-gradient-to-r from-sky-500/20 to-amber-500/20 border-2 border-sky-400 text-white shadow-lg'
                          : 'bg-slate-950 border border-slate-800/90 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">{state.region}</span>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />}
                        </div>
                        <p className="font-bold text-slate-100 text-xs truncate">{state.name}</p>
                      </div>
                      <p className="text-[11px] text-emerald-400 font-semibold mt-2">
                        {state.learners} Learners
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Pan-India Aggregates */}
              <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-slate-950">
                  <span className="text-xs text-slate-400 block">Digital Centers</span>
                  <strong className="text-sm text-sky-400 font-display">8,420+</strong>
                </div>
                <div className="p-2 rounded-lg bg-slate-950">
                  <span className="text-xs text-slate-400 block">Total Learners</span>
                  <strong className="text-sm text-amber-400 font-display">88.4M+</strong>
                </div>
                <div className="p-2 rounded-lg bg-slate-950">
                  <span className="text-xs text-slate-400 block">Grassroots Projects</span>
                  <strong className="text-sm text-emerald-400 font-display">12,650</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Selected State Comprehensive Dossier Card */}
          <div className="lg:col-span-6 w-full">
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-4 sm:p-7 shadow-2xl space-y-5 sm:space-y-6">
              
              {/* State Header Title */}
              <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                      {activeState.region} India Hub
                    </span>
                    <span className="text-xs text-slate-400">Primary: {activeState.primaryLanguage}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-display mt-1">
                    {activeState.name}
                  </h3>
                </div>

                <div className="text-right sm:text-right">
                  <span className="text-xl sm:text-2xl font-black text-emerald-400 font-display block">
                    {activeState.learners}
                  </span>
                  <p className="text-[11px] sm:text-xs text-slate-400">Active Students</p>
                </div>
              </div>

              {/* Four Key Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[11px] text-slate-400 block mb-1">🏛️ Digital Learning Centers</span>
                  <strong className="text-sm text-slate-100 font-bold">{activeState.learningCenters} Centers</strong>
                  <p className="text-[10px] text-slate-500 mt-0.5">Equipped with BharatNet Fiber</p>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[11px] text-slate-400 block mb-1">🗣️ Regional Curriculum</span>
                  <strong className="text-sm text-slate-100 font-bold">{activeState.primaryLanguage}</strong>
                  <p className="text-[10px] text-slate-500 mt-0.5">Full bilingual syllabus</p>
                </div>
              </div>

              {/* Popular Skills & Industry Demands */}
              <div className="space-y-3">
                <div>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    Popular Skills Among Students
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeState.popularSkills.map((sk) => (
                      <span
                        key={sk}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-sky-500/10 border border-sky-500/30 text-sky-300"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    High-Growth Regional Skills Demand
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeState.skillsDemand.map((sd) => (
                      <span
                        key={sd}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300"
                      >
                        ⚡ {sd}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Featured Educator Spotlight */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Featured State Educator</span>
                    <h4 className="text-sm font-bold text-white">{activeState.featuredEducator.name}</h4>
                    <p className="text-xs text-slate-400">{activeState.featuredEducator.subject}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-400">{activeState.featuredEducator.studentsReached}</span>
              </div>

              {/* Featured Student Project Spotlight */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-sky-500/30 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1 text-amber-400 font-bold">
                    <Sparkles className="w-3.5 h-3.5" /> State Innovation Spotlight
                  </span>
                  <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                    {activeState.featuredProject.category}
                  </span>
                </div>
                <h4 className="text-sm font-black text-white">{activeState.featuredProject.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeState.featuredProject.description}
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80">
                  <span>Student: <strong>{activeState.featuredProject.studentName}</strong></span>
                  <span>{activeState.featuredProject.school}</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setActiveTab('projects')}
                className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 cursor-pointer"
              >
                <span>Explore Innovation Projects in {activeState.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
