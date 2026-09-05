import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { UserRole, LanguageCode } from '../types';
import { SUPPORTED_LANGUAGES } from '../data/translations';
import { ALL_STATES } from '../data/mockData';
import {
  X,
  User,
  GraduationCap,
  BookOpen,
  Users2,
  Building,
  Shield,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { isAuthOpen, setAuthOpen, switchRole, setLanguage, language, showToast } = useApp();

  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const [name, setName] = useState('Aarav Sharma');
  const [email, setEmail] = useState('aarav.sharma@bharatlearn.edu.in');
  const [stateName, setStateName] = useState('Uttar Pradesh');
  const [school, setSchool] = useState('Kendriya Vidyalaya, Varanasi');

  if (!isAuthOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    switchRole(selectedRole);
    setAuthOpen(false);
    showToast(
      `Welcome to BharatLearn! Logged in as ${selectedRole.toUpperCase()}`,
      'celebrate'
    );
  };

  const roles: { role: UserRole; label: string; desc: string; icon: any }[] = [
    { role: 'student', label: 'Student', desc: 'Personalized courses, AI tutor, quizzes', icon: GraduationCap },
    { role: 'teacher', label: 'Teacher', desc: 'Classroom manager, AI lesson generator', icon: BookOpen },
    { role: 'parent', label: 'Parent', desc: 'Track child milestones and AI digests', icon: Users2 },
    { role: 'admin', label: 'National Admin', desc: 'State telemetry, adoption analytics', icon: Shield }
  ];

  return (
    <div
      id="auth-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-150"
      onClick={() => setAuthOpen(false)}
    >
      <div
        className="w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-3 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-xs font-bold uppercase"><span className="text-bharat font-black">Bharat</span><span className="text-amber-400">Learn</span> Access</span>
            </div>
            <h3 className="text-2xl font-black text-white font-display mt-0.5">
              {mode === 'login' ? 'Welcome Back' : 'Create Your Learning Passport'}
            </h3>
          </div>
          <button
            onClick={() => setAuthOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          
          {/* Select Role */}
          <div>
            <label className="block text-slate-300 font-semibold mb-2">Select Your Role:</label>
            <div className="grid grid-cols-2 gap-2">
              {roles.map((r) => {
                const Icon = r.icon;
                const isSelected = selectedRole === r.role;
                return (
                  <button
                    key={r.role}
                    type="button"
                    onClick={() => setSelectedRole(r.role)}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-amber-500/20 border-amber-400 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                    </div>
                    <div>
                      <p className="font-bold text-slate-200 text-xs">{r.label}</p>
                      <p className="text-[10px] text-slate-500 leading-tight mt-0.5">{r.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Name & Email */}
          <div className="space-y-3">
            <div>
              <label className="block text-slate-300 font-medium mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 focus:border-amber-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">Email / Student ID</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 focus:border-amber-400 focus:outline-none"
              />
            </div>
          </div>

          {/* State and Language */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-medium mb-1">Home State / UT</label>
              <select
                value={stateName}
                onChange={(e) => setStateName(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 focus:border-amber-400 focus:outline-none"
              >
                {ALL_STATES.map((st) => (
                  <option key={st.id} value={st.name}>
                    {st.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">Primary Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as LanguageCode)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 focus:border-amber-400 focus:outline-none"
              >
                {SUPPORTED_LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.nativeName} ({l.name})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:opacity-90 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-amber-950 cursor-pointer"
            >
              <span>Continue to {selectedRole.toUpperCase()} Experience</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mode Switch */}
          <div className="text-center pt-1 text-slate-400">
            {mode === 'login' ? (
              <p>
                Don't have an ID?{' '}
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className="text-amber-400 hover:underline font-semibold"
                >
                  Create Student Passport
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className="text-amber-400 hover:underline font-semibold"
                >
                  Log In
                </button>
              </p>
            )}
          </div>
        </form>

      </div>
    </div>
  );
};
