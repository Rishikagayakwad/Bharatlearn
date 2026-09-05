import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PROJECT_CHALLENGES } from '../data/mockData';
import { ProjectChallenge } from '../types';
import {
  Rocket,
  Clock,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  UploadCloud,
  FileText,
  Send,
  X,
  Trophy,
  Filter
} from 'lucide-react';

export const ProjectMarketplace: React.FC = () => {
  const {
    enrolledProjectIds,
    enrollInProject,
    selectedProject,
    setSelectedProject,
    addXP,
    showToast
  } = useApp();

  const [activeTabFilter, setActiveTabFilter] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');
  const [submissionModalProject, setSubmissionModalProject] = useState<ProjectChallenge | null>(null);
  const [submissionData, setSubmissionData] = useState({
    title: '',
    githubUrl: '',
    demoUrl: '',
    summary: '',
    teamMembers: 'Aarav Sharma'
  });
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const filteredProjects =
    activeTabFilter === 'All'
      ? PROJECT_CHALLENGES
      : PROJECT_CHALLENGES.filter((p) => p.difficulty === activeTabFilter);

  const handleOpenSubmission = (project: ProjectChallenge) => {
    setSubmissionModalProject(project);
    setSubmissionData({
      title: `${project.title} - Solution Prototype`,
      githubUrl: 'https://github.com/aarav-sharma/bharat-clean-water',
      demoUrl: 'https://bharatlearn-iot-demo.web.app',
      summary: 'Our team built a low-cost IoT sensor that monitors well depth and water purity in real time using solar power and LoRa telemetry.',
      teamMembers: 'Aarav Sharma (Class 10), Priyanshu Verma (Class 10)'
    });
    setSubmittedSuccess(false);
  };

  const handleSubmitSolution = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedSuccess(true);
    addXP(150, 'Submitted National Innovation Challenge');
    showToast('Your solution has been submitted to the National Evaluation Jury!', 'celebrate');
    setTimeout(() => {
      setSubmissionModalProject(null);
      setSubmittedSuccess(false);
    }, 2500);
  };

  return (
    <section id="project-marketplace-section" className="py-16 sm:py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Rocket className="w-3.5 h-3.5" />
            National Innovation Marketplace
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            Don’t Just Learn. Build.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Real problems need real engineering. Tackle authentic grassroots challenges, build functional prototypes, and submit to the national showcase.
          </p>
        </div>

        {/* 5-Stage National Challenge Pipeline */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 max-w-4xl mx-auto">
          <span className="text-[11px] uppercase font-bold text-amber-400 tracking-wider block text-center mb-3">
            National Innovation Lifecycle: Problem → Learn → Build → Submit → Showcase
          </span>
          <div className="grid grid-cols-5 gap-1 sm:gap-2 text-center text-xs">
            {[
              { stage: '1. Problem', desc: 'Real Indian bottleneck' },
              { stage: '2. Learn', desc: 'Acquire domain skills' },
              { stage: '3. Build', desc: 'Construct prototype' },
              { stage: '4. Submit', desc: 'National review jury' },
              { stage: '5. Showcase', desc: 'Grants & incubation' }
            ].map((st, i) => (
              <div key={st.stage} className="p-2 sm:p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                <strong className="text-slate-200 block text-[11px] sm:text-xs">{st.stage}</strong>
                <span className="text-[10px] text-slate-500 hidden sm:block mt-0.5">{st.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Difficulty:
            </span>
            {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setActiveTabFilter(lvl)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTabFilter === lvl
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-400">
            Showing <strong className="text-slate-200">{filteredProjects.length}</strong> National Challenges
          </span>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => {
            const isEnrolled = enrolledProjectIds.includes(proj.id);
            return (
              <div
                key={proj.id}
                className="rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between transition-all shadow-xl hover:shadow-2xl hover:shadow-sky-950/30"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        proj.difficulty === 'Beginner'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : proj.difficulty === 'Intermediate'
                          ? 'bg-sky-500/10 text-sky-400 border border-sky-500/30'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      }`}
                    >
                      {proj.difficulty}
                    </span>

                    <span className="flex items-center gap-1 text-[11px] text-slate-400">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {proj.estimatedTime}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    {proj.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-amber-300 font-medium mt-1">
                    “{proj.tagline}”
                  </p>

                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Problem & Impact */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-950/90 border border-slate-800/80 space-y-1.5 text-xs">
                    <p className="text-slate-300">
                      <strong className="text-rose-400">Bottleneck:</strong> {proj.problemStatement}
                    </p>
                    <p className="text-slate-300">
                      <strong className="text-emerald-400">Impact Goal:</strong> {proj.impactGoal}
                    </p>
                  </div>

                  {/* Required Skills */}
                  <div className="mt-4">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1.5">
                      Required Skills
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {proj.requiredSkills.map((sk) => (
                        <span key={sk} className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 text-[10px] border border-slate-800">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Milestones Preview */}
                  <div className="mt-4 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">
                      Key Milestones ({isEnrolled ? '2 of 4 Complete' : '4 Milestones'})
                    </span>
                    <div className="space-y-1 text-xs">
                      {proj.milestones.slice(0, 2).map((m, idx) => (
                        <div key={m} className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${isEnrolled && idx === 0 ? 'text-emerald-400' : 'text-slate-600'}`} />
                          <span className="truncate">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2">
                  <button
                    onClick={() => enrollInProject(proj.id)}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      isEnrolled
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
                        : 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md'
                    }`}
                  >
                    {isEnrolled ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" /> Enrolled (In Progress)
                      </>
                    ) : (
                      <>
                        <Rocket className="w-3.5 h-3.5" /> Start Project
                      </>
                    )}
                  </button>

                  {isEnrolled && (
                    <button
                      onClick={() => handleOpenSubmission(proj)}
                      className="px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                      title="Submit solution for review"
                    >
                      <UploadCloud className="w-3.5 h-3.5 text-sky-400" />
                      <span>Submit</span>
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Project Solution Submission Modal */}
        {submissionModalProject && (
          <div
            id="project-submission-modal"
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-150"
            onClick={() => setSubmissionModalProject(null)}
          >
            <div
              className="w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl space-y-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between pb-3 border-b border-slate-800">
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-400">
                    National Challenge Submission
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {submissionModalProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSubmissionModalProject(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submittedSuccess ? (
                <div className="py-8 text-center space-y-3 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-display">
                    Submission Received!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Your solution has been transmitted to the Bharat Innovation Council jury. You have been awarded <strong>+150 XP</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitSolution} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Project Solution Name</label>
                    <input
                      type="text"
                      required
                      value={submissionData.title}
                      onChange={(e) => setSubmissionData({ ...submissionData, title: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Team Member(s) & School</label>
                    <input
                      type="text"
                      required
                      value={submissionData.teamMembers}
                      onChange={(e) => setSubmissionData({ ...submissionData, teamMembers: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Code Repository (GitHub / Git)</label>
                      <input
                        type="url"
                        value={submissionData.githubUrl}
                        onChange={(e) => setSubmissionData({ ...submissionData, githubUrl: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Live Demo / Video Link</label>
                      <input
                        type="url"
                        value={submissionData.demoUrl}
                        onChange={(e) => setSubmissionData({ ...submissionData, demoUrl: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Technical Brief & Field Impact</label>
                    <textarea
                      rows={3}
                      required
                      value={submissionData.summary}
                      onChange={(e) => setSubmissionData({ ...submissionData, summary: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setSubmissionModalProject(null)}
                      className="px-4 py-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-emerald-400 text-slate-950 font-bold flex items-center gap-1.5 shadow-lg cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" /> Submit to National Jury (+150 XP)
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
