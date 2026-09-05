import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  ArrowRight,
  Globe2,
  Compass,
  Cpu,
  Users,
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Share2,
  Zap
} from 'lucide-react';

interface NodePoint {
  id: string;
  name: string;
  x: number;
  y: number;
  type: 'hub' | 'city';
  learners: string;
  specialty: string;
}

export const HeroSection: React.FC = () => {
  const { setActiveTab, t, setSelectedState } = useApp();
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);

  const learningHubs: NodePoint[] = [
    { id: 'delhi', name: 'Delhi NCR Hub', x: 190, y: 140, type: 'hub', learners: '4.8M Learners', specialty: 'AI & Policy' },
    { id: 'lucknow', name: 'Lucknow Center', x: 230, y: 175, type: 'city', learners: '12.4M State Total', specialty: 'STEM & Robotics' },
    { id: 'kolkata', name: 'Kolkata Hub', x: 330, y: 220, type: 'hub', learners: '7.9M Learners', specialty: 'Data Science & Lang' },
    { id: 'guwahati', name: 'Guwahati Hub', x: 390, y: 165, type: 'hub', learners: '3.6M Learners', specialty: 'Eco & BioTech' },
    { id: 'ahmedabad', name: 'Ahmedabad Node', x: 130, y: 225, type: 'city', learners: '7.4M Learners', specialty: 'Solar & Enterprise' },
    { id: 'mumbai', name: 'Mumbai Western Hub', x: 160, y: 275, type: 'hub', learners: '10.8M Learners', specialty: 'Cyber & Fintech' },
    { id: 'hyderabad', name: 'Hyderabad Node', x: 220, y: 295, type: 'city', learners: '6.4M Learners', specialty: 'Cloud & Biotech' },
    { id: 'bengaluru', name: 'Bengaluru Tech Hub', x: 200, y: 350, type: 'hub', learners: '8.9M Learners', specialty: 'DeepTech & Space' },
    { id: 'chennai', name: 'Chennai Southern Hub', x: 235, y: 380, type: 'hub', learners: '9.2M Learners', specialty: 'Hardware & IoT' }
  ];

  // Rotate featured active nodes
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % learningHubs.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [learningHubs.length]);

  const activeHub = learningHubs[activeNodeIndex];

  return (
    <section id="hero-section" className="relative overflow-hidden pt-8 pb-16 lg:py-20">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-sky-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Vision & Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* National Theme Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-xs font-semibold tracking-wide text-amber-400 uppercase">
                National Digital Mission
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-xs font-medium text-slate-300">
                One Nation • One Learning Future
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white font-display leading-[1.15]">
              {t.heroHeadline}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.heroSubheadline}
            </p>

            {/* Supporting National Messages */}
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-left space-y-1.5">
              <p className="text-xs sm:text-sm font-semibold text-amber-300 flex items-center gap-2">
                <span className="text-base">🇮🇳</span> “{t.tagline}”
              </p>
              <p className="text-xs text-slate-400 italic">
                “{t.supportingMessage}”
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                id="hero-primary-cta-btn"
                onClick={() => {
                  const elem = document.getElementById('personalized-learning-section');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                  else setActiveTab('explore');
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{t.heroCtaPrimary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-secondary-cta-btn"
                onClick={() => setActiveTab('explore')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4 text-sky-400" />
                <span>{t.heroCtaSecondary}</span>
              </button>
            </div>

            {/* Four National Stats Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-4 border-t border-slate-800/80">
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-left">
                <span className="text-xl sm:text-2xl font-black text-amber-400 font-display">28</span>
                <p className="text-xs font-semibold text-slate-200">States</p>
                <p className="text-[10px] text-slate-500">Connected Hubs</p>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-left">
                <span className="text-xl sm:text-2xl font-black text-sky-400 font-display">8</span>
                <p className="text-xs font-semibold text-slate-200">Union Territories</p>
                <p className="text-[10px] text-slate-500">Universal Access</p>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-left">
                <span className="text-xl sm:text-2xl font-black text-emerald-400 font-display">100+</span>
                <p className="text-xs font-semibold text-slate-200">Learning Paths</p>
                <p className="text-[10px] text-slate-500">Future Ready Skills</p>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-left">
                <span className="text-xl sm:text-2xl font-black text-purple-400 font-display">12+</span>
                <p className="text-xs font-semibold text-slate-200">Indian Languages</p>
                <p className="text-[10px] text-slate-500">Zero Language Barrier</p>
              </div>
            </div>
          </div>

          {/* Right Column: Futuristic Interactive India Network Visualization */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto w-full max-w-md rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-slate-900/90 via-slate-950/90 to-slate-900/90 border border-slate-800 shadow-2xl shadow-sky-950/60 overflow-hidden">
              
              {/* Header inside visualization */}
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/80 text-xs">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-semibold text-slate-200">Live <span className="text-bharat font-bold">Bharat</span> Learning Grid</span>
                </div>
                <span className="text-[10px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-full">
                  Real-time Node Mesh
                </span>
              </div>

              {/* Interactive Vector India Grid */}
              <div className="relative w-full h-[260px] sm:h-[310px] flex items-center justify-center my-2">
                <svg
                  viewBox="0 0 500 480"
                  className="w-full h-full filter drop-shadow-[0_0_15px_rgba(56,189,248,0.15)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Subtle decorative grid */}
                  <defs>
                    <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>

                  {/* Geometric outline representation of Indian sub-continent */}
                  <path
                    d="M 200 45 L 230 70 L 250 110 L 330 140 L 410 145 L 430 180 L 380 210 L 340 215 L 320 280 L 260 380 L 240 440 L 220 440 L 190 380 L 150 310 L 140 260 L 95 240 L 120 180 L 180 140 Z"
                    fill="#0f172a"
                    fillOpacity="0.6"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />

                  {/* Glowing Connection Mesh between Hubs */}
                  <g stroke="url(#lineGrad)" strokeWidth="1.2" strokeOpacity="0.55">
                    {/* Northern trunk */}
                    <line x1="190" y1="140" x2="230" y2="175" />
                    <line x1="190" y1="140" x2="130" y2="225" />
                    <line x1="230" y1="175" x2="330" y2="220" />
                    {/* East to Northeast */}
                    <line x1="330" y1="220" x2="390" y2="165" />
                    {/* Central & West connections */}
                    <line x1="130" y1="225" x2="160" y2="275" />
                    <line x1="230" y1="175" x2="220" y2="295" />
                    <line x1="160" y1="275" x2="220" y2="295" />
                    {/* Southern spine */}
                    <line x1="220" y1="295" x2="200" y2="350" />
                    <line x1="220" y1="295" x2="235" y2="380" />
                    <line x1="160" y1="275" x2="200" y2="350" />
                    <line x1="200" y1="350" x2="235" y2="380" />
                    <line x1="330" y1="220" x2="235" y2="380" strokeDasharray="4 4" strokeOpacity="0.3" />
                  </g>

                  {/* Dynamic Nodes */}
                  {learningHubs.map((hub, idx) => {
                    const isSelected = idx === activeNodeIndex;
                    return (
                      <g
                        key={hub.id}
                        className="cursor-pointer transition-all duration-300"
                        onClick={() => setActiveNodeIndex(idx)}
                      >
                        {/* Outer pulsing ring for active node */}
                        {isSelected && (
                          <circle
                            cx={hub.x}
                            cy={hub.y}
                            r="16"
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="1.5"
                            className="animate-ping"
                          />
                        )}

                        {/* Node glow circle */}
                        <circle
                          cx={hub.x}
                          cy={hub.y}
                          r={isSelected ? 10 : 6}
                          fill={hub.type === 'hub' ? '#38bdf8' : '#f59e0b'}
                          fillOpacity={isSelected ? 0.9 : 0.6}
                          stroke="#ffffff"
                          strokeWidth={isSelected ? 2 : 1}
                        />

                        {/* Node label */}
                        <text
                          x={hub.x + 9}
                          y={hub.y + 4}
                          fill={isSelected ? '#ffffff' : '#94a3b8'}
                          fontSize={isSelected ? '11' : '9'}
                          fontWeight={isSelected ? 'bold' : 'normal'}
                          fontFamily="Plus Jakarta Sans, sans-serif"
                        >
                          {hub.name?.split(' ')?.[0] || hub.name || ''}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Floating Indicators on visualization */}
                <div className="absolute top-2 left-2 bg-slate-900/90 border border-slate-800 rounded-lg p-2 text-[10px] shadow-lg flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-sky-400" />
                  <span><strong>AI Knowledge Mesh:</strong> Active</span>
                </div>

                <div className="absolute bottom-2 right-2 bg-slate-900/90 border border-slate-800 rounded-lg p-2 text-[10px] shadow-lg flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span><strong>12+</strong> Indic Dialects Synced</span>
                </div>
              </div>

              {/* Bottom Interactive Detail Card */}
              <div className="mt-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800/90 flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    <strong className="text-slate-100">{activeHub.name}</strong>
                    <span className="text-[10px] text-slate-500">({activeHub.type.toUpperCase()})</span>
                  </div>
                  <p className="text-[11px] text-amber-300 mt-0.5">{activeHub.specialty}</p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-bold text-emerald-400">{activeHub.learners}</span>
                  <button
                    onClick={() => setActiveTab('explore')}
                    className="block text-[10px] text-sky-400 hover:underline mt-0.5"
                  >
                    View Map Details →
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
