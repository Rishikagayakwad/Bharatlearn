import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Globe2, Shield, Award, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveTab, setAuthOpen, t } = useApp();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Col 1 & 2: Brand & National Mission Statement */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 via-blue-900 to-emerald-600 p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-[9px] flex items-center justify-center font-black text-bharat font-display">
                  भ
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight font-display">
                <span className="text-bharat">Bharat</span><span className="text-amber-400">Learn</span>
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1.5">
              <p className="font-bold text-white text-xs sm:text-sm">
                “One Nation. One Learning Future.”
              </p>
              <p className="text-[11px] text-slate-300 leading-relaxed italic">
                “Learn anywhere. Learn in your language. Build the future of <span className="text-bharat font-semibold">Bharat</span>.”
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An open digital education architecture engineered to bridge educational disparities across all 28 States and 8 Union Territories through adaptive AI, vernacular curriculum, and project-based mastery.
            </p>

            <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>National Digital Learning Initiative</span>
            </div>
          </div>

          {/* Col 3: Learning Paths */}
          <div className="space-y-3">
            <p className="font-bold uppercase tracking-wider text-slate-200 text-xs">
              Learning Ecosystem
            </p>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab('explore')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Bharat Learning Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('ai-tutor')}
                  className="hover:text-amber-400 transition-colors"
                >
                  AI Multilingual Companion
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('skills')}
                  className="hover:text-amber-400 transition-colors"
                >
                  12 Future Skill Tracks
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('careers')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Careers of Tomorrow
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('projects')}
                  className="hover:text-amber-400 transition-colors"
                >
                  National Challenge Hub
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Portals & Stakeholders */}
          <div className="space-y-3">
            <p className="font-bold uppercase tracking-wider text-slate-200 text-xs">
              National Portals
            </p>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Student Learning Passport
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('teacher')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Teacher Lesson Generator
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('parent')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Parent Growth Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('admin')}
                  className="hover:text-amber-400 transition-colors"
                >
                  National Telemetry & Admin
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('verify')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Verify Digital Credentials
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Digital Inclusivity & Support */}
          <div className="space-y-3">
            <p className="font-bold uppercase tracking-wider text-slate-200 text-xs">
              Inclusion & Technology
            </p>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-1.5">
                <Globe2 className="w-3 h-3 text-sky-400" />
                <span>12 Official Indian Languages</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-emerald-400" />
                <span>Low Bandwidth (2G/3G) Mode</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Award className="w-3 h-3 text-amber-400" />
                <span>WCAG 2.1 High Contrast</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-purple-400" />
                <span>BharatNet Fiber Integrated</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => setAuthOpen(true)}
                className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold"
              >
                Switch User / Role
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 BharatLearn. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <button onClick={() => setActiveTab('explore')} className="hover:text-amber-400 transition-colors">
              National Learning Grid
            </button>
            <span>•</span>
            <button onClick={() => setActiveTab('verify')} className="hover:text-amber-400 transition-colors">
              Verify Credentials
            </button>
            <span>•</span>
            <span>NCERT Aligned</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
