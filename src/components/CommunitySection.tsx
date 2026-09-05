import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { COMMUNITY_THREADS, ALL_MENTORS } from '../data/mockData';
import { CommunityThread, MentorProfile } from '../types';
import {
  Users2,
  Sparkles,
  MessageSquare,
  ThumbsUp,
  Share2,
  MapPin,
  GraduationCap,
  Calendar,
  Send,
  CheckCircle2,
  ShieldCheck,
  Award
} from 'lucide-react';

interface ThreadReply {
  id: string;
  authorName: string;
  authorState: string;
  text: string;
  timeAgo: string;
}

const INITIAL_REPLIES: Record<string, ThreadReply[]> = {
  'disc-1': [
    {
      id: 'rep-101',
      authorName: 'Pooja Sundaram',
      authorState: 'Tamil Nadu',
      text: 'Amazing work Rohan! We tested the same GGUF model on Snapdragon 680 in Madurai with Whisper Hindi voice models. Quantization saves battery too!',
      timeAgo: '1 hour ago'
    },
    {
      id: 'rep-102',
      authorName: 'Bikramjit Singh',
      authorState: 'Punjab',
      text: 'Could you share the Termux build dependencies for CMake? Looking to deploy this for rural school tablets in Ludhiana.',
      timeAgo: '35 mins ago'
    }
  ],
  'disc-2': [
    {
      id: 'rep-201',
      authorName: 'Arun Kumar',
      authorState: 'Odisha',
      text: 'We validated activated coconut husk filters in our coastal school lab too. Adding a fine silica sand layer before the carbon bed increased flow rate by 30%.',
      timeAgo: '3 hours ago'
    }
  ],
  'disc-3': [
    {
      id: 'rep-301',
      authorName: 'Manish Verma',
      authorState: 'Rajasthan',
      text: 'AIM judges love seeing BOM (Bill of Materials) breakdowns and student testing logs. Make sure to include feedback from 5 local users!',
      timeAgo: '18 hours ago'
    }
  ],
  'disc-4': [
    {
      id: 'rep-401',
      authorName: 'Meera Chawla',
      authorState: 'Haryana',
      text: 'For 2G data streaming, consider using MQTT with payload compression over HTTP. Cuts battery draw on solar cells in half during monsoons.',
      timeAgo: '1 day ago'
    }
  ]
};

export const CommunitySection: React.FC = () => {
  const { addXP, showToast, currentUser } = useApp();
  const [threads, setThreads] = useState<CommunityThread[]>(COMMUNITY_THREADS);
  const [repliesMap, setRepliesMap] = useState<Record<string, ThreadReply[]>>(INITIAL_REPLIES);
  const [newCommentText, setNewCommentText] = useState<{ [key: string]: string }>({});
  const [selectedMentor, setSelectedMentor] = useState<MentorProfile | null>(null);
  const [bookedSuccess, setBookedSuccess] = useState(false);

  const handleLike = (threadId: string) => {
    setThreads((prev) =>
      prev.map((t) => (t.id === threadId ? { ...t, likes: t.likes + 1 } : t))
    );
    addXP(5, 'Liked community contribution');
  };

  const handleAddComment = (threadId: string) => {
    const text = newCommentText[threadId]?.trim();
    if (!text) return;

    const newReply: ThreadReply = {
      id: `rep-${Date.now()}`,
      authorName: currentUser?.name || 'Aarav Sharma',
      authorState: currentUser?.state || 'Uttar Pradesh',
      text: text,
      timeAgo: 'Just now'
    };

    setRepliesMap((prev) => ({
      ...prev,
      [threadId]: [...(prev[threadId] || []), newReply]
    }));

    setThreads((prev) =>
      prev.map((th) => (th.id === threadId ? { ...th, replies: (typeof th.replies === 'number' ? th.replies + 1 : 1) } : th))
    );

    setNewCommentText((prev) => ({ ...prev, [threadId]: '' }));
    addXP(20, 'Posted constructive peer discussion reply');
    showToast('Your contribution was added to the national discussion thread!', 'celebrate');
  };

  return (
    <section id="community-collaboration-section" className="py-16 sm:py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <Users2 className="w-3.5 h-3.5" />
            Pan-India Peer Innovation Network
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            Learning Together Across India
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A high-school student in Kerala collaborating with a classmate in Assam on solar irrigation telemetry. Knowledge compounds when shared across states.
          </p>
        </div>

        {/* 4 Pillars of Community Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {[
            { title: 'Study Groups', desc: 'Cross-state cohorts for board & olympiad prep', count: '1,420 Active' },
            { title: 'Verified Mentorship', desc: 'Direct access to ISRO, IIT & industry guides', count: '380+ Mentors' },
            { title: 'Peer Project Reviews', desc: 'Get constructive feedback on code & circuits', count: '24k Reviews' },
            { title: 'National Hackathons', desc: 'Compete for grants and student incubators', count: 'Bi-Monthly' }
          ].map((pillar) => (
            <div key={pillar.title} className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-left">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                {pillar.count}
              </span>
              <h3 className="text-sm font-bold text-white mt-1">{pillar.title}</h3>
              <p className="text-xs text-slate-400 mt-1">{pillar.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Live Cross-State Collaboration Discussions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-sky-400" />
                Live Cross-State Project Threads
              </h3>
              <span className="text-xs text-slate-400">Moderated Safe Environment</span>
            </div>

            {threads.map((thread) => {
              const authorName = thread.author?.name || thread.authorName || 'Student Learner';
              const authorInitial = authorName.charAt(0) || 'L';
              const authorState = thread.author?.state || thread.authorState || 'India';
              const authorRole = thread.author?.role || thread.school || 'Student Innovator';
              const authorAvatar = thread.author?.avatar;
              const repliesList = repliesMap[thread.id] || [];
              const totalRepliesCount = (typeof thread.replies === 'number' ? thread.replies : 0) + (repliesList.length > 2 ? repliesList.length - 2 : 0);

              return (
                <div
                  key={thread.id}
                  className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl"
                >
                  {/* Thread Author info */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      {authorAvatar ? (
                        <img
                          src={authorAvatar}
                          alt={authorName}
                          className="w-8 h-8 rounded-full object-cover ring-1 ring-amber-500/40 shrink-0"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-slate-800 border border-amber-500/40 flex items-center justify-center font-bold text-amber-400">
                          {authorInitial}
                        </div>
                      )}
                      <div>
                        <p className="font-bold text-white">{authorName}</p>
                        <p className="text-[11px] text-slate-400 flex items-center gap-1">
                          <MapPin className="w-2.5 h-2.5 text-slate-500" />
                          {authorState} • {authorRole}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-500">{thread.timestamp}</span>
                  </div>

                  {/* Thread Body */}
                  <div>
                    <h4 className="text-base font-bold text-slate-100">{thread.title}</h4>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">{thread.content}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {thread.tags.map((tg) => (
                      <span key={tg} className="px-2 py-0.5 rounded-full bg-slate-950 text-slate-400 border border-slate-800 text-[10px]">
                        #{tg}
                      </span>
                    ))}
                  </div>

                  {/* Like & Reply Counter Bar */}
                  <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                    <button
                      onClick={() => handleLike(thread.id)}
                      className="flex items-center gap-1.5 hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{thread.likes} Endorsements</span>
                    </button>

                    <span className="flex items-center gap-1.5 text-slate-300">
                      <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
                      <span>{totalRepliesCount} Collaborations</span>
                    </span>
                  </div>

                  {/* Reply Feed */}
                  {repliesList.length > 0 && (
                    <div className="space-y-2 pt-2">
                      {repliesList.map((rep) => (
                        <div key={rep.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs space-y-1">
                          <div className="flex items-center justify-between text-[11px] text-slate-400">
                            <strong className="text-sky-300">{rep.authorName} ({rep.authorState})</strong>
                            <span>{rep.timeAgo}</span>
                          </div>
                          <p className="text-slate-300 text-xs leading-relaxed">{rep.text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                {/* Add Reply Input */}
                <div className="pt-2 flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Contribute ideas, code snippets or datasets..."
                    value={newCommentText[thread.id] || ''}
                    onChange={(e) =>
                      setNewCommentText({ ...newCommentText, [thread.id]: e.target.value })
                    }
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleAddComment(thread.id);
                    }}
                    className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <button
                    onClick={() => handleAddComment(thread.id)}
                    className="p-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" /> Reply
                  </button>
                </div>
              </div>
            );
          })}
          </div>

          {/* Right Column: Featured Mentors & Book 1-on-1 Guidance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Verified National Mentors
                  </h3>
                  <p className="text-xs text-slate-400">Free 1-on-1 guidance from India’s top institutions</p>
                </div>
              </div>

              <div className="space-y-3">
                {ALL_MENTORS.map((mentor) => (
                  <div
                    key={mentor.id}
                    className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={mentor.avatar}
                        alt={mentor.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-500/40 shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-sm font-bold text-white">{mentor.name}</h4>
                          <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 rounded">
                            Verified
                          </span>
                        </div>
                        <p className="text-xs text-amber-300">{mentor.role}</p>
                        <p className="text-[11px] text-slate-400">{mentor.organization} • {mentor.city}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {mentor.expertise.map((exp) => (
                        <span key={exp} className="px-2 py-0.5 rounded bg-slate-900 text-[10px] text-slate-300 border border-slate-800">
                          {exp}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-emerald-400 font-medium">
                        🟢 {mentor.availableSlots}
                      </span>
                      <button
                        onClick={() => {
                          setSelectedMentor(mentor);
                          setBookedSuccess(false);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs cursor-pointer"
                      >
                        Request 1-on-1 Session
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mentor Booking Modal */}
            {selectedMentor && (
              <div
                id="mentor-booking-modal"
                className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
                onClick={() => setSelectedMentor(null)}
              >
                <div
                  className="w-full max-w-md rounded-3xl bg-slate-900 border border-slate-700 p-6 shadow-2xl space-y-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h4 className="text-lg font-bold text-white">Book Mentorship Session</h4>
                  <p className="text-xs text-slate-300">
                    Connect with <strong>{selectedMentor.name}</strong> ({selectedMentor.organization})
                  </p>

                  {bookedSuccess ? (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                      <p className="text-sm font-bold text-white">Session Confirmed!</p>
                      <p className="text-xs text-slate-300">
                        A video link has been dispatched to your student dashboard.
                      </p>
                      <button
                        onClick={() => setSelectedMentor(null)}
                        className="mt-2 px-4 py-1.5 rounded-lg bg-slate-800 text-xs text-white"
                      >
                        Done
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block text-slate-400 mb-1">What question or project would you like to discuss?</label>
                        <textarea
                          rows={3}
                          placeholder="e.g. Seeking guidance on optimizing our solar tracking code for farmers in our district..."
                          className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div className="flex items-center justify-end gap-2 pt-2">
                        <button
                          onClick={() => setSelectedMentor(null)}
                          className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => {
                            setBookedSuccess(true);
                            addXP(30, 'Scheduled session with national mentor');
                            showToast('Mentorship session requested!', 'success');
                          }}
                          className="px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs"
                        >
                          Confirm Free Booking
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
