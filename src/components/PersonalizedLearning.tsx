import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SUPPORTED_LANGUAGES } from '../data/translations';
import { LanguageCode } from '../types';
import {
  Sparkles,
  Compass,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  BookOpen,
  Award,
  TrendingUp,
  Brain,
  Zap,
  Code2,
  Bot
} from 'lucide-react';

export const PersonalizedLearning: React.FC = () => {
  const { assessmentData, setAssessmentData, setActiveTab, setSelectedSkill, showToast, addXP } = useApp();

  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    studentName: assessmentData?.studentName || 'Aarav Sharma',
    classGrade: assessmentData?.classGrade || '10',
    favoriteSubjects: assessmentData?.favoriteSubjects || ['Mathematics', 'Science'],
    interests: assessmentData?.interests || ['Artificial Intelligence', 'Robotics'],
    aspirations: assessmentData?.aspirations || 'Build AI solutions for Indian Agriculture',
    preferredLanguage: assessmentData?.preferredLanguage || 'en',
    learningPace: assessmentData?.learningPace || 'hands-on'
  });

  const [assessmentGenerated, setAssessmentGenerated] = useState<boolean>(true);

  const subjectOptions = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Computer Science',
    'Social Sciences',
    'Literature & Languages',
    'Economics & Business',
    'Design & Arts'
  ];

  const interestOptions = [
    'Artificial Intelligence',
    'Robotics & Drones',
    'Space & Astronomy (ISRO)',
    'Clean Energy & Climate',
    'Web & App Coding',
    'Cyber Defense',
    'Farming & Agritech',
    'Biotechnology & Health',
    'Entrepreneurship'
  ];

  const flowSteps = [
    { name: 'Discover', desc: 'Identify innate curiosities' },
    { name: 'Assess', desc: 'Diagnose strengths & gaps' },
    { name: 'Personalize', desc: 'AI-tailored curriculum' },
    { name: 'Learn', desc: 'Bilingual interactive lessons' },
    { name: 'Practice', desc: 'Dynamic adaptive quizzes' },
    { name: 'Build', desc: 'Real-world problem projects' },
    { name: 'Grow', desc: 'Certifications & career launch' }
  ];

  const handleSubjectToggle = (subj: string) => {
    setFormData((prev) => ({
      ...prev,
      favoriteSubjects: prev.favoriteSubjects.includes(subj)
        ? prev.favoriteSubjects.filter((s) => s !== subj)
        : [...prev.favoriteSubjects, subj]
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleCompleteAssessment = () => {
    setAssessmentData({
      studentName: formData.studentName || 'Learner',
      classGrade: formData.classGrade,
      favoriteSubjects: formData.favoriteSubjects.length > 0 ? formData.favoriteSubjects : ['Mathematics', 'Science'],
      interests: formData.interests.length > 0 ? formData.interests : ['Artificial Intelligence', 'Coding'],
      aspirations: formData.aspirations || 'Innovate for Bharat',
      preferredLanguage: formData.preferredLanguage as LanguageCode,
      learningPace: formData.learningPace as 'steady' | 'accelerated' | 'hands-on'
    });
    setAssessmentGenerated(true);
    addXP(100, 'Personalized Diagnostic Assessment Completed');
    showToast('Your personalized BharatLearn curriculum has been generated!', 'celebrate');
  };

  return (
    <section id="personalized-learning-section" className="py-16 sm:py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            <Brain className="w-3.5 h-3.5" />
            Adaptive Intelligence Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            Your Learning. Your Journey.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Every student in India learns differently. We dismantle the rigid one-size-fits-all classroom with a continuous adaptive loop tailored to your exact pace, language, and ambitions.
          </p>
        </div>

        {/* 7-Step Interactive Flow Indicator */}
        <div className="mb-14 overflow-x-auto pb-4">
          <div className="flex items-center justify-between min-w-[700px] max-w-5xl mx-auto relative">
            <div className="absolute top-1/2 left-4 right-4 h-0.5 -translate-y-1/2 bg-slate-800 z-0" />
            {flowSteps.map((fStep, index) => (
              <div key={fStep.name} className="relative z-10 flex flex-col items-center text-center px-2 group">
                <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center text-xs font-bold text-amber-400 group-hover:scale-110 transition-transform shadow-md">
                  {index + 1}
                </div>
                <span className="text-xs font-bold text-slate-200 mt-2">{fStep.name}</span>
                <span className="text-[10px] text-slate-400 hidden sm:block max-w-[100px] leading-tight mt-0.5">
                  {fStep.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Card: Assessment Wizard vs Generated Path */}
        {!assessmentGenerated ? (
          /* Interactive Assessment Flow */
          <div className="max-w-3xl mx-auto rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Step {step} of 4: Personalization Questionnaire
                </h3>
                <p className="text-xs text-slate-400">Help the AI engine calibrate your personalized national syllabus</p>
              </div>
              <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                {Math.round((step / 4) * 100)}% Complete
              </span>
            </div>

            {/* Step 1: Grade & Language */}
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">What is your name?</label>
                  <input
                    type="text"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:border-amber-500 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">1. What class are you in?</label>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {['6', '7', '8', '9', '10', '11', '12', 'College'].map((cls) => (
                      <button
                        key={cls}
                        type="button"
                        onClick={() => setFormData({ ...formData, classGrade: cls })}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                          formData.classGrade === cls
                            ? 'bg-amber-500 text-slate-950 shadow-md'
                            : 'bg-slate-950 border border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        Class {cls}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Preferred Mother Tongue / Language:</label>
                  <select
                    value={formData.preferredLanguage}
                    onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value as LanguageCode })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:border-amber-500 focus:outline-none"
                  >
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.nativeName} ({lang.name})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Subjects */}
            {step === 2 && (
              <div className="space-y-4">
                <label className="block text-xs font-medium text-slate-300">
                  2. What subjects do you enjoy most? (Select 2 or more)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {subjectOptions.map((subj) => {
                    const isSelected = formData.favoriteSubjects.includes(subj);
                    return (
                      <button
                        key={subj}
                        type="button"
                        onClick={() => handleSubjectToggle(subj)}
                        className={`p-3 rounded-xl text-left text-xs font-medium transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-sky-500/20 border border-sky-400 text-sky-200'
                            : 'bg-slate-950 border border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <span>{subj}</span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Interests */}
            {step === 3 && (
              <div className="space-y-4">
                <label className="block text-xs font-medium text-slate-300">
                  3. What emerging future technologies excite you? (Select all that apply)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {interestOptions.map((item) => {
                    const isSelected = formData.interests.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleInterestToggle(item)}
                        className={`p-3 rounded-xl text-left text-xs font-medium transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-amber-500/20 border border-amber-400 text-amber-200'
                            : 'bg-slate-950 border border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <span>{item}</span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 4: Aspirations & Learning Style */}
            {step === 4 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    4. What big challenge in India would you love to help solve?
                  </label>
                  <input
                    type="text"
                    value={formData.aspirations}
                    onChange={(e) => setFormData({ ...formData, aspirations: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:border-amber-500 focus:outline-none"
                    placeholder="e.g. Build clean drinking water sensors for villages, design space probes for ISRO..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">How do you prefer to learn?</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'hands-on', label: 'Hands-on Building', desc: 'Projects & experiments' },
                      { id: 'visual', label: 'Visual & Animated', desc: 'Concept diagrams & 3D models' },
                      { id: 'accelerated', label: 'Deep Theory & Math', desc: 'Rigorous derivations' }
                    ].map((style) => (
                      <button
                        key={style.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, learningPace: style.id as any })}
                        className={`p-3 rounded-xl text-left text-xs transition-all ${
                          formData.learningPace === style.id
                            ? 'bg-emerald-500/20 border border-emerald-400 text-emerald-200 font-semibold'
                            : 'bg-slate-950 border border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <p className="font-bold">{style.label}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{style.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-800 mt-6">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-slate-800"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="px-5 py-2 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 flex items-center gap-1.5"
                >
                  Next Step <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleCompleteAssessment}
                  className="px-6 py-2 rounded-lg text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-emerald-400 hover:opacity-90 flex items-center gap-1.5 shadow-lg shadow-emerald-950"
                >
                  Generate My BharatLearn Path →
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Generated Personalized Learning Dashboard (Matches User Prompt Specification) */
          <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  AI Calibrated Path
                </span>
                <h3 className="text-2xl font-black text-white font-display mt-1">
                  Your BharatLearn Path
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-slate-300">
                  <span><strong>Student:</strong> {assessmentData?.studentName || 'Aarav Sharma'}</span>
                  <span className="text-slate-600">•</span>
                  <span><strong>Class:</strong> {assessmentData?.classGrade || '10'}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-sky-300"><strong>Interests:</strong> {assessmentData?.interests.join(' + ') || 'Technology + Science'}</span>
                </div>
              </div>

              <div className="text-right sm:border-l sm:border-slate-800 sm:pl-6">
                <span className="text-3xl font-black text-emerald-400 font-display">72%</span>
                <p className="text-xs text-slate-400 font-medium">Learning Journey Completed</p>
                <div className="w-36 h-2 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                  <div className="w-[72%] h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full" />
                </div>
              </div>
            </div>

            {/* Recommended Learning Paths */}
            <div className="py-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Recommended Integrated Modules (Based on Your Diagnosis)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { title: 'AI & Machine Learning', icon: Brain, progress: 85, badge: 'In Progress', color: 'text-sky-400' },
                  { title: 'Robotics & Hardware', icon: Bot, progress: 70, badge: 'Active', color: 'text-amber-400' },
                  { title: 'Mathematics (Calculus & Vectors)', icon: Zap, progress: 90, badge: 'Mastered', color: 'text-emerald-400' },
                  { title: 'Physics (Electromagnetism)', icon: TrendingUp, progress: 65, badge: 'Active', color: 'text-purple-400' },
                  { title: 'Coding & Algorithms', icon: Code2, progress: 80, badge: 'Mastered', color: 'text-blue-400' },
                  { title: 'Entrepreneurship & Innovation', icon: Award, progress: 40, badge: 'Next Up', color: 'text-rose-400' }
                ].map((mod) => (
                  <div
                    key={mod.title}
                    className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs mb-2">
                        <mod.icon className={`w-4 h-4 ${mod.color}`} />
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-medium">
                          {mod.badge}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-slate-100">{mod.title}</p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-800/60">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                        <span>Curriculum Mastery</span>
                        <span className="font-semibold text-slate-200">{mod.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-sky-400 rounded-full" style={{ width: `${mod.progress}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('ai-tutor')}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" /> Continue with AI Tutor
                </button>
                <button
                  onClick={() => setActiveTab('projects')}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700"
                >
                  View Capstone Projects
                </button>
              </div>

              <button
                onClick={() => setAssessmentGenerated(false)}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 underline"
              >
                <RotateCcw className="w-3 h-3" /> Retake Diagnostic Assessment
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
