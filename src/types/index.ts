export type LanguageCode =
  | 'en' // English
  | 'hi' // हिन्दी
  | 'bn' // বাংলা
  | 'te' // తెలుగు
  | 'mr' // मराठी
  | 'ta' // தமிழ்
  | 'gu' // ગુજરાતી
  | 'kn' // ಕನ್ನಡ
  | 'ml' // മലയാളം
  | 'pa' // ਪੰਜਾਬੀ
  | 'or' // ଓଡ଼ିଆ
  | 'as'; // অসমীয়া

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
  script: string;
  speakersDemo: string;
}

export type UserRole = 'student' | 'teacher' | 'parent' | 'admin';

export interface UserProfile {
  id: string;
  name: string;
  role: UserRole;
  avatar: string;
  classGrade?: string;
  state: string;
  school?: string;
  xp: number;
  streakDays: number;
  completedCoursesCount: number;
  badges: string[];
  enrolledCourseIds: string[];
  preferredLanguage: LanguageCode;
}

export interface StateData {
  id: string;
  name: string;
  region: 'North' | 'South' | 'East' | 'West' | 'Central' | 'North-East';
  learners: string;
  popularSkills: string[];
  learningCenters: number;
  primaryLanguage: string;
  skillsDemand: string[];
  featuredEducator: {
    name: string;
    subject: string;
    studentsReached: string;
  };
  featuredProject: {
    title: string;
    category: string;
    studentName: string;
    school: string;
    description: string;
  };
  mapCoords?: { x: number; y: number };
}

export interface SkillTrack {
  id: string;
  title: string;
  category: string;
  icon: string;
  tagline: string;
  demandIndex: number; // e.g. 96/100
  levels: {
    beginner: { title: string; topics: string[]; duration: string };
    intermediate: { title: string; topics: string[]; duration: string };
    advanced: { title: string; topics: string[]; duration: string };
  };
  capstoneProject: {
    title: string;
    description: string;
    deliverable: string;
  };
  careerOutcome: {
    role: string;
    avgGrowth: string;
    industries: string[];
  };
}

export interface ProjectChallenge {
  id: string;
  title: string;
  tagline: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  requiredSkills: string[];
  description: string;
  problemStatement: string;
  impactGoal: string;
  milestones: string[];
  enrolledCount: number;
  isNationalChallenge?: boolean;
}

export interface CareerPath {
  id: string;
  title: string;
  category: string;
  matchedTags: string[];
  description: string;
  skillsRequired: string[];
  requiredSkills?: string[];
  subjectsToStudy: string[];
  beginnerProjects: string[];
  whatTheyDo?: string[];
  howToStartInSchool?: string[];
  roadmap: { phase: string; focus: string }[];
  futureOpportunities: string;
  futureDemand?: string;
  exampleCompanies?: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  subject: string;
  xpReward: number;
  questions: QuizQuestion[];
}

export interface DigitalCertificate {
  id: string;
  studentName: string;
  courseTitle: string;
  completionDate: string;
  skillsAcquired: string[];
  grade: string;
  issuingAuthority: string;
  verificationHash: string;
  qrCodeUrl?: string;
  certificateId?: string;
  gradeScore?: string;
  skillsVerified?: string[];
  dateIssued?: string;
  issuerAuthority?: string;
}

export interface CertificateRecord {
  certificateId: string;
  studentName: string;
  courseTitle: string;
  gradeScore: string;
  dateIssued: string;
  issuerAuthority: string;
  skillsVerified: string[];
  verificationHash: string;
}

export interface CommunityDiscussion {
  id: string;
  community: string;
  title: string;
  author: {
    name: string;
    role: string;
    state: string;
    avatar: string;
  };
  content: string;
  likes: number;
  replies: number;
  tags: string[];
  timestamp: string;
}

export type CommunityThread = CommunityDiscussion;

export interface MentorProfile {
  id: string;
  name: string;
  role: string;
  organization: string;
  state: string;
  city?: string;
  avatar: string;
  specialization: string;
  expertise: string[];
  availableSessions: number;
  availableSlots?: string;
  languages: string[];
  rating: number;
}

export interface ConceptBadge {
  id: string;
  title: string;
  icon: string;
  description: string;
  xpAward: number;
  category: string;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  school: string;
  state: string;
  district: string;
  xp: number;
  streak: number;
  badgesCount: number;
  avatar: string;
  isCurrentUser?: boolean;
}
