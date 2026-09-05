import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Users,
  BookOpen,
  Sparkles,
  BarChart3,
  Calendar,
  Clock,
  TrendingUp,
  MessageSquare,
  FileCheck,
  Send,
  Download,
  AlertTriangle,
  Globe2,
  Layers,
  Building,
  CheckCircle2,
  Search,
  Brain
} from 'lucide-react';

/* =========================================================
   1. TEACHER DASHBOARD
========================================================= */
export const TeacherDashboard: React.FC = () => {
  const { currentUser, showToast } = useApp();
  const [selectedClass, setSelectedClass] = useState('Class 10-A');
  const [generatedLesson, setGeneratedLesson] = useState<string | null>(null);
  const [lessonPrompt, setLessonPrompt] = useState('Newton\'s Third Law with ISRO Rocket Propulsion');

  const studentsList = [
    { name: 'Aarav Sharma', score: '94%', attendance: '98%', status: 'Advanced', needsHelp: 'Electromagnetism derivations' },
    { name: 'Diya Patel', score: '88%', attendance: '95%', status: 'On Track', needsHelp: 'Quadratic word problems' },
    { name: 'Kavya Nair', score: '76%', attendance: '89%', status: 'Needs Guidance', needsHelp: 'Python nested loops' },
    { name: 'Rohan Mehra', score: '91%', attendance: '96%', status: 'Advanced', needsHelp: 'None (Excelling)' },
    { name: 'Ananya Roy', score: '82%', attendance: '92%', status: 'On Track', needsHelp: 'Chemical equation balancing' }
  ];

  const handleGenerateLesson = () => {
    setGeneratedLesson(
      `📚 AI Lesson Plan: ${lessonPrompt}\n\n1. Learning Objective: Students will explain Newton's 3rd law (Action-Reaction) through Chandrayaan-3 booster thrust telemetry.\n2. 5-Min Warmup: Demonstration with balloon straw propulsion.\n3. Bilingual NCERT Alignment: बल और गति के नियम (Hindi/English terminology).\n4. Interactive Assessment: 3 real-world calculation questions.\n5. Take-Home Build: Construct a baking soda bottle rocket.`
    );
    showToast('Bilingual Lesson Plan Generated with AI!', 'success');
  };

  return (
    <div id="teacher-dashboard-view" className="py-8 space-y-8 animate-in fade-in duration-200">
      
      {/* Top Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
              National Teacher Cockpit
            </span>
            <span className="text-xs text-slate-400">Kendriya Vidyalaya • Delhi NCR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
            Namaste, {currentUser.name}! 👩‍🏫
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Teaching <strong>142 Students</strong> across 3 batches • Average Class Mastery: <strong className="text-emerald-400">86.4%</strong>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs font-bold text-white focus:outline-none"
          >
            <option>Class 10-A (Science & Math)</option>
            <option>Class 9-B (Digital Literacy)</option>
            <option>Class 11-A (Frontier AI)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Student Analytics & Roster */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400" />
                Student Performance & AI Diagnostic Alerts
              </h3>
              <span className="text-xs text-slate-400">{selectedClass}</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="pb-3 font-semibold">Student Name</th>
                    <th className="pb-3 font-semibold">Diagnostic Score</th>
                    <th className="pb-3 font-semibold">Attendance</th>
                    <th className="pb-3 font-semibold">AI Intervention Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {studentsList.map((stu) => (
                    <tr key={stu.name} className="hover:bg-slate-800/40">
                      <td className="py-3 font-bold text-slate-200">{stu.name}</td>
                      <td className="py-3 font-bold text-emerald-400">{stu.score}</td>
                      <td className="py-3 text-slate-300">{stu.attendance}</td>
                      <td className="py-3 text-slate-400">
                        {stu.needsHelp === 'None (Excelling)' ? (
                          <span className="text-emerald-400 font-semibold">✓ Excelling</span>
                        ) : (
                          <span className="text-amber-300 flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3 text-amber-400" /> {stu.needsHelp}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Review Submissions */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-sky-400" />
              Pending Capstone Project Submissions (3 Ready for Grading)
            </h3>
            <div className="space-y-2">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-white">Smart Irrigation IoT Prototype</p>
                  <p className="text-[11px] text-slate-400">Submitted by Aarav Sharma & Diya Patel</p>
                </div>
                <button
                  onClick={() => showToast('Rubric opened for grading', 'info')}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs"
                >
                  Grade Submission
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: AI Bilingual Lesson Generator & Teacher Toolkit */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                AI Bilingual Lesson Plan Creator
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Auto-generate NCERT-compliant, interactive, and bilingual lesson outlines with real-world Indian case studies in 5 seconds.
            </p>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-400 mb-1">Topic or Concept:</label>
                <input
                  type="text"
                  value={lessonPrompt}
                  onChange={(e) => setLessonPrompt(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleGenerateLesson}
                  className="flex-1 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Sparkles className="w-3.5 h-3.5" /> Generate Multilingual Lesson
                </button>
              </div>

              {generatedLesson && (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs whitespace-pre-line leading-relaxed font-mono">
                  {generatedLesson}
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

/* =========================================================
   2. PARENT PORTAL
========================================================= */
export const ParentPortal: React.FC = () => {
  const { showToast } = useApp();
  const [parentNote, setParentNote] = useState('');

  return (
    <div id="parent-portal-view" className="py-8 space-y-8 animate-in fade-in duration-200">
      
      {/* Welcome Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
              Parent Guardian Portal
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-display mt-1">
              Namaste, Rajesh Sharma 🙏
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Monitoring Student: <strong className="text-sky-400">Aarav Sharma</strong> (Class 10 • Roll #14)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/30">
              🟢 On Track for National STEM Honors
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Weekly AI Progress Summary & Time Spent */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* AI Weekly Synthesis Card */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <Brain className="w-4 h-4" />
              <span>Weekly AI Learning Brief for Parents</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-950 p-4 rounded-2xl border border-slate-800">
              “This week, Aarav completed <strong>5.4 hours</strong> of focused learning on BharatLearn. He demonstrated high problem-solving aptitude in <em>Orbital Physics</em> and <em>Python Functions</em>. His daily learning streak reached <strong>7 days</strong>. To support him this weekend, consider asking him to explain how solar panels convert sunlight into battery storage!”
            </p>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs text-slate-400 block">Weekly Study Time</span>
                <strong className="text-lg text-white font-display">5h 24m</strong>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs text-slate-400 block">Quiz Accuracy</span>
                <strong className="text-lg text-emerald-400 font-display">94%</strong>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs text-slate-400 block">Concept Badges</span>
                <strong className="text-lg text-amber-400 font-display">+3 Earned</strong>
              </div>
            </div>
          </div>

          {/* Strengths & Growth Areas */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white">Strengths & Growth Areas</h3>
            
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-2 text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Primary Strength:</strong> Analytical STEM modeling and curiosity about Indian space technology.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-2 text-amber-200">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Recommended Support:</strong> Practice written descriptive proofs in Hindi literature to maintain bilingual mastery.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Direct Teacher Message & Home Tips */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-sky-400" />
              Direct Message to Class Teacher
            </h3>
            <p className="text-xs text-slate-400">
              Teacher: <strong>Dr. Sunita Verma</strong> (Science & Technology Mentor)
            </p>

            <div className="space-y-3 text-xs">
              <textarea
                rows={3}
                value={parentNote}
                onChange={(e) => setParentNote(e.target.value)}
                placeholder="Ask Dr. Sunita about Aarav's upcoming board preparation or project submissions..."
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-amber-400"
              />
              <button
                onClick={() => {
                  if (!parentNote.trim()) return;
                  showToast('Message sent to Dr. Sunita Verma', 'success');
                  setParentNote('');
                }}
                className="w-full py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" /> Send Message
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

/* =========================================================
   3. NATIONAL ADMIN DASHBOARD
========================================================= */
export const AdminDashboard: React.FC = () => {
  return (
    <div id="admin-dashboard-view" className="py-8 space-y-8 animate-in fade-in duration-200">
      
      {/* Welcome Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/30">
            Ministry of Education & Digital India Portal
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-display mt-1">
            National Learning Command Center
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Decentralized telemetry across <strong>28 States & 8 Union Territories</strong> • System Status: <strong className="text-emerald-400">Optimal (99.98% Uptime)</strong>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-300 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800">
            Active Concurrency: <strong className="text-emerald-400">1,842,910</strong>
          </span>
        </div>
      </div>

      {/* 4 National Macro Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-left">
          <span className="text-xs text-slate-400 block">Total Registered Learners</span>
          <strong className="text-2xl sm:text-3xl font-black text-amber-400 font-display">88.4 Million</strong>
          <span className="text-[10px] text-emerald-400 block mt-1">↑ 18.2% Month-over-Month</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-left">
          <span className="text-xs text-slate-400 block">Rural Center Fiber Adoption</span>
          <strong className="text-2xl sm:text-3xl font-black text-sky-400 font-display">64.8%</strong>
          <span className="text-[10px] text-sky-400 block mt-1">BharatNet Phase 3 Deployed</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-left">
          <span className="text-xs text-slate-400 block">Languages Utilized</span>
          <strong className="text-2xl sm:text-3xl font-black text-emerald-400 font-display">12 / 12</strong>
          <span className="text-[10px] text-emerald-400 block mt-1">Indic NLP Pipeline Healthy</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-left">
          <span className="text-xs text-slate-400 block">Verified Capstones</span>
          <strong className="text-2xl sm:text-3xl font-black text-purple-400 font-display">412,890</strong>
          <span className="text-[10px] text-purple-400 block mt-1">Innovation Graded by Jury</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Language Usage & Regional Breakdown */}
        <div className="lg:col-span-6 space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-sky-400" />
              Language Usage Breakdown Across Bharat
            </h3>

            <div className="space-y-2 text-xs">
              {[
                { name: 'हिन्दी (Hindi)', percent: 38, count: '33.6M Students' },
                { name: 'English (Indianized)', percent: 24, count: '21.2M Students' },
                { name: 'বাংলা (Bengali)', percent: 11, count: '9.7M Students' },
                { name: 'मराठी (Marathi)', percent: 9, count: '8.0M Students' },
                { name: 'தமிழ் (Tamil)', percent: 8, count: '7.1M Students' },
                { name: 'తెలుగు (Telugu)', percent: 7, count: '6.2M Students' },
                { name: 'Other Indic Dialects', percent: 3, count: '2.6M Students' }
              ].map((lang) => (
                <div key={lang.name} className="space-y-1">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="font-semibold">{lang.name}</span>
                    <span className="text-slate-400">{lang.count} ({lang.percent}%)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full" style={{ width: `${lang.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Rural vs Urban & Top Performing Districts */}
        <div className="lg:col-span-6 space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              Urban vs Rural Inclusion Metrics
            </h3>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Rural Learners (Gram Panchayats)</span>
                <strong className="text-emerald-400">58.4% (51.6M)</strong>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                <div className="w-[58.4%] h-full bg-emerald-400 rounded-full" />
              </div>
              <p className="text-[11px] text-slate-400">
                Offline syncing and Low Data Mode enabled 8.2 million students in low-bandwidth regions to participate without interruption.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Top Performing Innovation Districts
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block">Varanasi, UP</strong>
                  <span className="text-amber-400 text-[11px]">840 Grassroots Projects</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block">Wayanad, Kerala</strong>
                  <span className="text-emerald-400 text-[11px]">99.2% Digital Literacy</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block">Kamrup, Assam</strong>
                  <span className="text-sky-400 text-[11px]">High IoT Agritech Adoption</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block">Kutch, Gujarat</strong>
                  <span className="text-purple-400 text-[11px]">Solar Innovation Leaders</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
