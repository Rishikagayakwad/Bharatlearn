import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  LanguageCode,
  UserProfile,
  UserRole,
  StateData,
  SkillTrack,
  ProjectChallenge,
  Quiz,
  DigitalCertificate
} from '../types';
import { CURRENT_STUDENT, DEMO_CERTIFICATES } from '../data/mockData';
import { TRANSLATIONS, TranslationDictionary } from '../data/translations';

export type ActiveNavTab =
  | 'home'
  | 'explore'
  | 'ai-tutor'
  | 'skills'
  | 'careers'
  | 'projects'
  | 'challenges'
  | 'community'
  | 'dashboard'
  | 'teacher'
  | 'parent'
  | 'admin'
  | 'certificates';

export interface AssessmentData {
  studentName: string;
  classGrade: string;
  favoriteSubjects: string[];
  interests: string[];
  aspirations: string;
  preferredLanguage: LanguageCode;
  learningPace: 'steady' | 'accelerated' | 'hands-on';
}

interface AppContextType {
  activeTab: ActiveNavTab;
  setActiveTab: (tab: ActiveNavTab) => void;
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationDictionary;
  currentUser: UserProfile;
  switchRole: (role: UserRole) => void;
  lowDataMode: boolean;
  setLowDataMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  highContrast: boolean;
  setHighContrast: (val: boolean | ((prev: boolean) => boolean)) => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  setFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
  
  // Modals
  selectedState: StateData | null;
  setSelectedState: (state: StateData | null) => void;
  selectedSkill: SkillTrack | null;
  setSelectedSkill: (skill: SkillTrack | null) => void;
  selectedProject: ProjectChallenge | null;
  setSelectedProject: (project: ProjectChallenge | null) => void;
  activeQuiz: Quiz | null;
  setActiveQuiz: (quiz: Quiz | null) => void;
  activeCertificate: DigitalCertificate | null;
  setActiveCertificate: (cert: DigitalCertificate | null) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  authOpen: boolean;
  setAuthOpen: (open: boolean) => void;
  
  // Interactive progress
  enrolledProjectIds: string[];
  enrollInProject: (id: string) => void;
  xp: number;
  addXP: (amount: number, reason?: string) => void;
  streak: number;
  assessmentData: AssessmentData | null;
  setAssessmentData: (data: AssessmentData | null) => void;
  
  // Toast notifications
  toast: { message: string; type?: 'info' | 'success' | 'celebrate' } | null;
  showToast: (message: string, type?: 'info' | 'success' | 'celebrate') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<ActiveNavTab>('home');
  const [language, setLanguage] = useState<LanguageCode>('en');
  const [currentUser, setCurrentUser] = useState<UserProfile>(CURRENT_STUDENT);
  const [lowDataMode, setLowDataMode] = useState<boolean>(false);
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  // Modals state
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<SkillTrack | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectChallenge | null>(null);
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [activeCertificate, setActiveCertificate] = useState<DigitalCertificate | null>(null);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [authOpen, setAuthOpen] = useState<boolean>(false);

  // Engagement state
  const [enrolledProjectIds, setEnrolledProjectIds] = useState<string[]>(['water-tomorrow']);
  const [xp, setXp] = useState<number>(CURRENT_STUDENT.xp);
  const [streak, setStreak] = useState<number>(CURRENT_STUDENT.streakDays);
  const [toast, setToast] = useState<{ message: string; type?: 'info' | 'success' | 'celebrate' } | null>(null);

  // Personalized assessment sample state
  const [assessmentData, setAssessmentData] = useState<AssessmentData | null>({
    studentName: 'Aarav Sharma',
    classGrade: '10',
    favoriteSubjects: ['Mathematics', 'Science', 'Computer Science'],
    interests: ['Artificial Intelligence', 'Robotics', 'Clean Tech'],
    aspirations: 'Build AI solutions for Indian Agriculture & Energy',
    preferredLanguage: 'en',
    learningPace: 'hands-on'
  });

  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const showToast = (message: string, type: 'info' | 'success' | 'celebrate' = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const addXP = (amount: number, reason?: string) => {
    setXp((prev) => prev + amount);
    showToast(`+${amount} XP Earned! ${reason ? `• ${reason}` : ''}`, 'celebrate');
  };

  const enrollInProject = (id: string) => {
    if (enrolledProjectIds.includes(id)) {
      setEnrolledProjectIds((prev) => prev.filter((p) => p !== id));
      showToast('Project removed from active tracks', 'info');
    } else {
      setEnrolledProjectIds((prev) => [...prev, id]);
      addXP(50, 'Enrolled in project challenge');
      showToast('Successfully enrolled in project! Milestones unlocked.', 'success');
    }
  };

  const switchRole = (role: UserRole) => {
    if (role === 'student') {
      setCurrentUser(CURRENT_STUDENT);
      setActiveTab('dashboard');
      showToast('Switched to Student Portal (Aarav Sharma - Class 10)', 'info');
    } else if (role === 'teacher') {
      setCurrentUser({
        id: 'usr_teacher_01',
        name: 'Dr. Sunita Verma',
        role: 'teacher',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
        state: 'Uttar Pradesh',
        school: 'Kendriya Vidyalaya No. 1, Lucknow',
        xp: 4500,
        streakDays: 45,
        completedCoursesCount: 18,
        badges: ['🏅 Master Educator', '🔬 STEM Pioneer', '🇮🇳 National Mentor'],
        enrolledCourseIds: [],
        preferredLanguage: language
      });
      setActiveTab('teacher');
      showToast('Switched to Teacher Portal (Dr. Sunita Verma - Class 10A Lead)', 'info');
    } else if (role === 'parent') {
      setCurrentUser({
        id: 'usr_parent_01',
        name: 'Rajesh & Shweta Sharma',
        role: 'parent',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
        state: 'Uttar Pradesh',
        school: 'Parent of Aarav Sharma (Class 10)',
        xp: 800,
        streakDays: 12,
        completedCoursesCount: 2,
        badges: ['🛡️ Guardian Supporter', '📚 Digital Family'],
        enrolledCourseIds: [],
        preferredLanguage: language
      });
      setActiveTab('parent');
      showToast('Switched to Parent Dashboard (Guardian of Aarav Sharma)', 'info');
    } else if (role === 'admin') {
      setCurrentUser({
        id: 'usr_admin_01',
        name: 'Director S. Ramanathan',
        role: 'admin',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
        state: 'National Hub, New Delhi',
        school: 'National Digital Education Council',
        xp: 12000,
        streakDays: 180,
        completedCoursesCount: 50,
        badges: ['🏛️ National Administrator', '🌐 Bharat Architect'],
        enrolledCourseIds: [],
        preferredLanguage: 'en'
      });
      setActiveTab('admin');
      showToast('Switched to National Admin Dashboard (Ministry / Council view)', 'info');
    }
  };

  // Sync high-contrast and low-data modes to HTML classes
  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast-active');
    } else {
      document.documentElement.classList.remove('high-contrast-active');
    }
  }, [highContrast]);

  useEffect(() => {
    if (lowDataMode) {
      document.documentElement.classList.add('low-bandwidth-active');
    } else {
      document.documentElement.classList.remove('low-bandwidth-active');
    }
  }, [lowDataMode]);

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        language,
        setLanguage,
        t,
        currentUser,
        switchRole,
        lowDataMode,
        setLowDataMode,
        highContrast,
        setHighContrast,
        fontSize,
        setFontSize,
        selectedState,
        setSelectedState,
        selectedSkill,
        setSelectedSkill,
        selectedProject,
        setSelectedProject,
        activeQuiz,
        setActiveQuiz,
        activeCertificate,
        setActiveCertificate,
        searchOpen,
        setSearchOpen,
        authOpen,
        setAuthOpen,
        enrolledProjectIds,
        enrollInProject,
        xp,
        addXP,
        streak,
        assessmentData,
        setAssessmentData,
        toast,
        showToast
      }}
    >
      <div
        className={`min-h-screen transition-colors duration-200 ${
          highContrast ? 'bg-black text-white' : 'bg-slate-950 text-slate-100'
        } ${fontSize === 'large' ? 'text-lg' : fontSize === 'xlarge' ? 'text-xl' : 'text-base'}`}
      >
        {children}
      </div>
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
