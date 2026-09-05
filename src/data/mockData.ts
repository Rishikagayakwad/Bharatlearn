import {
  StateData,
  SkillTrack,
  ProjectChallenge,
  CareerPath,
  Quiz,
  LeaderboardUser,
  CommunityDiscussion,
  DigitalCertificate,
  UserProfile
} from '../types';

export const CURRENT_STUDENT: UserProfile = {
  id: 'usr_aarav_01',
  name: 'Aarav Sharma',
  role: 'student',
  avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
  classGrade: 'Class 10',
  state: 'Uttar Pradesh',
  school: 'Kendriya Vidyalaya No. 1, Lucknow',
  xp: 1420,
  streakDays: 12,
  completedCoursesCount: 4,
  badges: ['🏆 Future Builder', '🤖 AI Explorer', '💡 Innovation Champion', '🇮🇳 Bharat Changemaker'],
  enrolledCourseIds: ['ai-foundations', 'python-zero-hero', 'water-tomorrow'],
  preferredLanguage: 'en'
};

export const ALL_STATES: StateData[] = [
  {
    id: 'up',
    name: 'Uttar Pradesh',
    region: 'North',
    learners: '12.4M',
    popularSkills: ['Coding', 'Mathematics', 'English', 'Entrepreneurship'],
    learningCenters: 840,
    primaryLanguage: 'Hindi / Urdu',
    skillsDemand: ['Data Analytics', 'Full-stack Web', 'Digital Agritech'],
    featuredEducator: {
      name: 'Dr. Sunita Verma',
      subject: 'Physics & STEM Innovation',
      studentsReached: '185,000+'
    },
    featuredProject: {
      title: 'Smart Village Water Monitoring System',
      category: 'IoT & Clean Water',
      studentName: 'Aarav & Priyanshu',
      school: 'KV Lucknow',
      description: 'Solar-powered water tank depth and purity sensor delivering SMS alerts to 6 gram panchayats.'
    },
    mapCoords: { x: 44, y: 38 }
  },
  {
    id: 'mh',
    name: 'Maharashtra',
    region: 'West',
    learners: '10.8M',
    popularSkills: ['Artificial Intelligence', 'Cybersecurity', 'Financial Literacy', 'Robotics'],
    learningCenters: 760,
    primaryLanguage: 'Marathi / Hindi',
    skillsDemand: ['Fintech AI', 'Cloud Computing', 'Electric Mobility'],
    featuredEducator: {
      name: 'Prof. Rajesh Kulkarni',
      subject: 'Computer Science & AI',
      studentsReached: '240,000+'
    },
    featuredProject: {
      title: 'KisanKranti Pest Detection App',
      category: 'AI for Agriculture',
      studentName: 'Tanvi Deshmukh',
      school: 'Fergusson Junior College, Pune',
      description: 'Offline mobile model identifying leaf diseases in cotton and sugarcane crops.'
    },
    mapCoords: { x: 33, y: 56 }
  },
  {
    id: 'ka',
    name: 'Karnataka',
    region: 'South',
    learners: '8.9M',
    popularSkills: ['Data Science', 'Python', 'Space Tech', 'Design Thinking'],
    learningCenters: 620,
    primaryLanguage: 'Kannada / English',
    skillsDemand: ['Aerospace Systems', 'Deep Learning', 'Semiconductor VLSI'],
    featuredEducator: {
      name: 'Smt. Roopa Hegde',
      subject: 'Applied Mathematics & Algorithms',
      studentsReached: '142,000+'
    },
    featuredProject: {
      title: 'Autonomous Lake Cleaning Rover',
      category: 'Robotics & Ecology',
      studentName: 'Chetan Gowda & Team',
      school: 'National Public School, Bengaluru',
      description: 'Micro-boat deploying computer vision to collect surface floating plastics in Bellandur Lake.'
    },
    mapCoords: { x: 37, y: 74 }
  },
  {
    id: 'tn',
    name: 'Tamil Nadu',
    region: 'South',
    learners: '9.2M',
    popularSkills: ['Embedded Systems', 'Mathematics', 'Clean Tech', 'Coding'],
    learningCenters: 680,
    primaryLanguage: 'Tamil / English',
    skillsDemand: ['Hardware IoT', 'Automotive Mechatronics', 'Bioinformatics'],
    featuredEducator: {
      name: 'K. Senthil Nathan',
      subject: 'Electronics & Space Sciences',
      studentsReached: '190,000+'
    },
    featuredProject: {
      title: 'Affordable Braille E-Reader',
      category: 'Assistive Tech',
      studentName: 'Kavitha & Meera',
      school: 'Government Girls HSS, Madurai',
      description: 'Tactile refreshable 6-dot solenoid screen powered by Arduino costing under ₹800.'
    },
    mapCoords: { x: 42, y: 84 }
  },
  {
    id: 'as',
    name: 'Assam',
    region: 'North-East',
    learners: '3.6M',
    popularSkills: ['Climate Technology', 'Digital Literacy', 'Biodiversity Tech', 'GIS'],
    learningCenters: 290,
    primaryLanguage: 'Assamese / Bodo',
    skillsDemand: ['Renewable Energy', 'Remote Sensing', 'Handicraft E-Commerce'],
    featuredEducator: {
      name: 'Bhaben Barman',
      subject: 'Environmental Sciences',
      studentsReached: '68,000+'
    },
    featuredProject: {
      title: 'Brahmaputra Flood Early Warning Mesh',
      category: 'Disaster Resilience',
      studentName: 'Jitul & Ananya',
      school: 'Cotton Collegiate School, Guwahati',
      description: 'LoRaWAN ultrasonic water-level telemetry nodes deployed across vulnerable river banks.'
    },
    mapCoords: { x: 78, y: 36 }
  },
  {
    id: 'gj',
    name: 'Gujarat',
    region: 'West',
    learners: '7.4M',
    popularSkills: ['Entrepreneurship', 'Solar Technology', 'Chemical Modeling', 'Coding'],
    learningCenters: 510,
    primaryLanguage: 'Gujarati / Hindi',
    skillsDemand: ['Clean Hydrogen', 'Supply Chain Tech', 'Web3 & FinTech'],
    featuredEducator: {
      name: 'Hitesh Patel',
      subject: 'Applied Sciences & Enterprise',
      studentsReached: '115,000+'
    },
    featuredProject: {
      title: 'Solar Microgrid Energy Trading Simulator',
      category: 'Clean Energy',
      studentName: 'Meet & Jiya',
      school: 'Shree Swaminarayan Gurukul, Surat',
      description: 'Peer-to-peer neighborhood solar energy dispatch dashboard using local Raspberry Pi.'
    },
    mapCoords: { x: 23, y: 46 }
  },
  {
    id: 'wb',
    name: 'West Bengal',
    region: 'East',
    learners: '7.9M',
    popularSkills: ['Literature Computing', 'Mathematics', 'Robotics', 'Web Design'],
    learningCenters: 540,
    primaryLanguage: 'Bengali / English',
    skillsDemand: ['Natural Language Processing', 'Data Engineering', 'Digital Media'],
    featuredEducator: {
      name: 'Debjani Mukherjee',
      subject: 'Computational Linguistics',
      studentsReached: '95,000+'
    },
    featuredProject: {
      title: 'Sundarbans Mangrove Health Drone Tracker',
      category: 'Climate Resilience',
      studentName: 'Subhasish & Ritwik',
      school: 'Ballygunge Govt High School, Kolkata',
      description: 'Multispectral drone imagery model mapping tidal erosion and mangrove density.'
    },
    mapCoords: { x: 67, y: 49 }
  },
  {
    id: 'rj',
    name: 'Rajasthan',
    region: 'North',
    learners: '6.8M',
    popularSkills: ['Solar Engineering', 'Water Management', 'Python', 'Digital Media'],
    learningCenters: 480,
    primaryLanguage: 'Hindi / Rajasthani',
    skillsDemand: ['Desert Agritech', 'Photovoltaics', 'Civil Tech'],
    featuredEducator: {
      name: 'Manish Meena',
      subject: 'Solar Technologies',
      studentsReached: '110,000+'
    },
    featuredProject: {
      title: 'Dew & Condensation Harvester System',
      category: 'Water Conservation',
      studentName: 'Pooja Bishnoi',
      school: 'Govt Model School, Jodhpur',
      description: 'Passive biomimetic mesh capturing overnight Thar desert moisture for village micro-irrigation.'
    },
    mapCoords: { x: 28, y: 35 }
  },
  {
    id: 'kl',
    name: 'Kerala',
    region: 'South',
    learners: '5.2M',
    popularSkills: ['Cybersecurity', 'Critical Thinking', 'Healthcare Informatics', 'Coding'],
    learningCenters: 430,
    primaryLanguage: 'Malayalam / English',
    skillsDemand: ['Digital Health', 'Marine Informatics', 'Public Governance Tech'],
    featuredEducator: {
      name: 'Deepa Joseph',
      subject: 'Digital Citizenship & Cyber Ethics',
      studentsReached: '135,000+'
    },
    featuredProject: {
      title: 'AyurMed Digital Botanical Identifier',
      category: 'Ethnobotany & AI',
      studentName: 'Vishnu Nair',
      school: 'SMV Model HSS, Thiruvananthapuram',
      description: 'Vision neural network indexing 450 endangered Western Ghats medicinal herbs.'
    },
    mapCoords: { x: 38, y: 90 }
  },
  {
    id: 'dl',
    name: 'Delhi NCR',
    region: 'North',
    learners: '4.8M',
    popularSkills: ['AI & Robotics', 'Public Policy Tech', 'Entrepreneurship', 'Design'],
    learningCenters: 390,
    primaryLanguage: 'Hindi / English / Punjabi',
    skillsDemand: ['Air Quality Analytics', 'Urban Mobility', 'GovTech'],
    featuredEducator: {
      name: 'Amitabh Sen',
      subject: 'Robotics & Smart Cities',
      studentsReached: '160,000+'
    },
    featuredProject: {
      title: 'Hyperlocal Clean Air Micro-Purification Node',
      category: 'Smart Cities',
      studentName: 'Aditi & Shaurya',
      school: 'Delhi Public School, R.K. Puram',
      description: 'Algae-bioreactor bus shelter filter reducing PM2.5 by 42% in high-traffic corridors.'
    },
    mapCoords: { x: 37, y: 30 }
  },
  {
    id: 'tg',
    name: 'Telangana',
    region: 'South',
    learners: '6.4M',
    popularSkills: ['AI & Data Science', 'Pharma Tech', 'Game Development', 'Cloud'],
    learningCenters: 460,
    primaryLanguage: 'Telugu / Urdu',
    skillsDemand: ['Biotech Computing', 'Cyber Forensics', 'SaaS Architecture'],
    featuredEducator: {
      name: 'Dr. V. Srinivas',
      subject: 'Genomics & Data Structures',
      studentsReached: '88,000+'
    },
    featuredProject: {
      title: 'TeleHealth Rural Drone Courier',
      category: 'Future Mobility',
      studentName: 'Sanjay Reddy',
      school: 'Telangana Model School, Warangal',
      description: 'GPS-guided payload quadcopter delivering antivenom and emergency kits across remote tribal tracts.'
    },
    mapCoords: { x: 45, y: 64 }
  },
  {
    id: 'pb',
    name: 'Punjab',
    region: 'North',
    learners: '3.9M',
    popularSkills: ['Precision Agriculture', 'Clean Energy', 'Robotics', 'Coding'],
    learningCenters: 310,
    primaryLanguage: 'Punjabi / Hindi',
    skillsDemand: ['Crop Waste Bio-Conversion', 'Drone Piloting', 'Hydrology Tech'],
    featuredEducator: {
      name: 'Harpreet Singh Sandhu',
      subject: 'Agritech & Applied Robotics',
      studentsReached: '72,000+'
    },
    featuredProject: {
      title: 'Stubble Bio-Pelletizing Autonomous Unit',
      category: 'Clean Air & Agri',
      studentName: 'Gurleen Kaur',
      school: 'Khalsa College Public School, Amritsar',
      description: 'Mobile tractor attachment converting paddy straw into zero-emission heating fuel pellets.'
    },
    mapCoords: { x: 32, y: 23 }
  },
  {
    id: 'or',
    name: 'Odisha',
    region: 'East',
    learners: '4.7M',
    popularSkills: ['Disaster Management Tech', 'Marine Science', 'Coding', 'Digital Literacy'],
    learningCenters: 370,
    primaryLanguage: 'Odia / English',
    skillsDemand: ['Cyclone Modeling', 'Mineral Processing Tech', 'Coastal Ecology'],
    featuredEducator: {
      name: 'Pratap Mohanty',
      subject: 'Earth Sciences & Remote Telemetry',
      studentsReached: '64,000+'
    },
    featuredProject: {
      title: 'Cyclone Resilient Salt-Tolerant Micro-Greenhouse',
      category: 'Disaster Resilience',
      studentName: 'Debabrata & Sonali',
      school: 'Ravenshaw Collegiate School, Cuttack',
      description: 'Pneumatic fold-down hydroponic canopy protecting seedlings from tidal surges and gale winds.'
    },
    mapCoords: { x: 58, y: 58 }
  },
  {
    id: 'br',
    name: 'Bihar',
    region: 'East',
    learners: '8.4M',
    popularSkills: ['Mathematics', 'Civil Services Prep', 'Coding', 'Science Innovation'],
    learningCenters: 610,
    primaryLanguage: 'Hindi / Bhojpuri / Maithili',
    skillsDemand: ['Low-bandwidth EdTech', 'Micro-irrigation', 'Solar Pumps'],
    featuredEducator: {
      name: 'Anand Kumar Ji (Mentorship Network)',
      subject: 'Super STEM Problem Solving',
      studentsReached: '320,000+'
    },
    featuredProject: {
      title: 'Solar Mobile Classroom for Flood Displaced Kids',
      category: 'Rural Education',
      studentName: 'Ravi & Pooja',
      school: 'Zila School, Darbhanga',
      description: 'E-rickshaw equipped with projector, battery, and offline digital syllabus for Koshi river villages.'
    },
    mapCoords: { x: 57, y: 40 }
  }
];

export const ALL_SKILLS: SkillTrack[] = [
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence',
    category: 'Advanced Computing',
    icon: 'Sparkles',
    tagline: 'Teach machines to perceive, learn, and solve grand challenges.',
    demandIndex: 98,
    levels: {
      beginner: {
        title: 'Foundations of Intelligent Systems',
        topics: ['What is Machine Learning?', 'Data & Ethics in India', 'Pattern Recognition', 'Prompt Engineering basics'],
        duration: '4 Weeks'
      },
      intermediate: {
        title: 'Python, Neural Nets & Computer Vision',
        topics: ['PyTorch & TensorFlow basics', 'Convolutional Networks for OCR', 'Language Translation Models', 'Building Indic NLP pipelines'],
        duration: '8 Weeks'
      },
      advanced: {
        title: 'Generative AI & Autonomous Agents',
        topics: ['Fine-tuning Open Source LLMs', 'Edge AI for IoT Devices', 'Multimodal Diagnostics', 'Deployment at National Scale'],
        duration: '12 Weeks'
      }
    },
    capstoneProject: {
      title: 'Build an AI Multilingual Study Assistant',
      description: 'Develop a conversational bot that explains CBSE & State board NCERT science concepts in Hindi, Tamil, and English with interactive visual diagrams.',
      deliverable: 'Web App + Model API deployed'
    },
    careerOutcome: {
      role: 'AI Engineer / Machine Learning Researcher',
      avgGrowth: '+42% YoY National Demand',
      industries: ['Agritech', 'Healthcare', 'Defence & Aerospace', 'FinTech']
    }
  },
  {
    id: 'coding',
    title: 'Coding & Software Engineering',
    category: 'Core Digital',
    icon: 'Code2',
    tagline: 'From your first loop to scalable national digital public infrastructure.',
    demandIndex: 95,
    levels: {
      beginner: {
        title: 'Algorithmic Thinking & Python',
        topics: ['Logic gates and flowcharts', 'Variables, loops & functions', 'Data structures: arrays and dictionaries', 'Debugging fundamentals'],
        duration: '4 Weeks'
      },
      intermediate: {
        title: 'Full-Stack Web & APIs',
        topics: ['Modern JavaScript / TypeScript', 'React & Component Architecture', 'REST APIs & Databases', 'Git collaboration & open source'],
        duration: '8 Weeks'
      },
      advanced: {
        title: 'Distributed Systems & IndiaStack',
        topics: ['UPI & Aadhaar architecture principles', 'Microservices & Docker', 'Offline-first Progressive Web Apps', 'High-concurrency systems'],
        duration: '10 Weeks'
      }
    },
    capstoneProject: {
      title: 'Digital Gram Panchayat Portal',
      description: 'Create a bilingual citizen services tracker that enables rural citizens to request certificates and view public work budgets.',
      deliverable: 'PWA Web Application'
    },
    careerOutcome: {
      role: 'Full-Stack Software Architect',
      avgGrowth: '+36% YoY National Demand',
      industries: ['Enterprise IT', 'GovTech', 'Consumer Tech', 'E-Commerce']
    }
  },
  {
    id: 'robotics',
    title: 'Robotics & Hardware Systems',
    category: 'Engineering & Hardware',
    icon: 'Bot',
    tagline: 'Fuse code with motors, sensors, and mechanical actuators.',
    demandIndex: 92,
    levels: {
      beginner: {
        title: 'Microcontrollers & Circuits',
        topics: ['Ohm’s law and breadboards', 'Arduino & ESP32 programming', 'Sensors (Ultrasonic, IR, Temperature)', 'Servo & Stepper motor control'],
        duration: '5 Weeks'
      },
      intermediate: {
        title: 'Kinematics & Drone Mechanics',
        topics: ['PID control algorithms', 'Quadcopter flight controllers', 'Computer vision with OpenCV on Raspberry Pi', '3D CAD design for robotics'],
        duration: '8 Weeks'
      },
      advanced: {
        title: 'Autonomous Mobile Robots (AMR)',
        topics: ['ROS2 (Robot Operating System)', 'SLAM (Simultaneous Localization & Mapping)', 'LiDAR sensor fusion', 'Industrial automation protocols'],
        duration: '12 Weeks'
      }
    },
    capstoneProject: {
      title: 'Autonomous Agricultural Weed Eliminator',
      description: 'Build a wheeled rover using computer vision to selectively target weeds without spraying excess chemical herbicide on crops.',
      deliverable: 'Physical Prototype + CAD & Firmware repo'
    },
    careerOutcome: {
      role: 'Robotics & Automation Engineer',
      avgGrowth: '+38% YoY National Demand',
      industries: ['Smart Manufacturing', 'Space Tech (ISRO supply)', 'Logistics', 'Agritech']
    }
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Digital Defense',
    category: 'Security & Integrity',
    icon: 'ShieldAlert',
    tagline: 'Guard critical infrastructure, privacy, and digital assets of Bharat.',
    demandIndex: 94,
    levels: {
      beginner: {
        title: 'Cyber Safety & Network Basics',
        topics: ['TCP/IP & OSI stack', 'Password hashing & 2FA', 'Phishing vectors & social engineering', 'Digital hygiene for students'],
        duration: '4 Weeks'
      },
      intermediate: {
        title: 'Ethical Hacking & Web Security',
        topics: ['OWASP Top 10 vulnerabilities', 'SQL injection & XSS defense', 'Wireshark packet analysis', 'Linux server hardening'],
        duration: '8 Weeks'
      },
      advanced: {
        title: 'Cryptography & Critical Infra Defense',
        topics: ['Asymmetric & Quantum-resistant ciphers', 'SCADA / Grid security defense', 'Incident response & forensics', 'Zero-trust architecture'],
        duration: '10 Weeks'
      }
    },
    capstoneProject: {
      title: 'Ransomware Simulation & Defense Lab',
      description: 'Set up an isolated virtual sandbox, analyze simulated malware payloads, and write an automatic encryption detection and recovery daemon.',
      deliverable: 'Defense Blueprint & Audit Report'
    },
    careerOutcome: {
      role: 'Cybersecurity Analyst / Security Architect',
      avgGrowth: '+45% YoY National Demand',
      industries: ['Banking & UPI', 'National Defence', 'Critical Energy Grids', 'Healthcare']
    }
  },
  {
    id: 'data-science',
    title: 'Data Science & Big Data',
    category: 'Advanced Computing',
    icon: 'BarChart3',
    tagline: 'Extract patterns from billions of data points to inform decisions.',
    demandIndex: 93,
    levels: {
      beginner: {
        title: 'Statistics & Data Wrangling',
        topics: ['Descriptive statistics & probability', 'Python Pandas & NumPy', 'Data visualization with Seaborn & D3', 'Data cleansing principles'],
        duration: '5 Weeks'
      },
      intermediate: {
        title: 'Predictive Modeling & SQL',
        topics: ['Relational databases & complex joins', 'Linear & logistic regression', 'Random forests & XGBoost', 'A/B testing methodology'],
        duration: '8 Weeks'
      },
      advanced: {
        title: 'Big Data & Geospatial Analytics',
        topics: ['Apache Spark & distributed computing', 'Satellite remote sensing pipelines', 'Time-series climate forecasting', 'Ethical data governance'],
        duration: '11 Weeks'
      }
    },
    capstoneProject: {
      title: 'Predictive Monsoon Monsoon & Crop Yield Engine',
      description: 'Analyze 30 years of IMD rainfall data combined with district-level agricultural yields to forecast sowing windows for smallholders.',
      deliverable: 'Interactive Analytical Dashboard'
    },
    careerOutcome: {
      role: 'Data Scientist / Quantitative Analyst',
      avgGrowth: '+39% YoY National Demand',
      industries: ['Public Policy', 'Insurance & Finance', 'Agritech', 'Retail Logistics']
    }
  },
  {
    id: 'design',
    title: 'UI/UX & Product Design',
    category: 'Design & Human Experience',
    icon: 'Palette',
    tagline: 'Craft inclusive, intuitive digital experiences for the next billion users.',
    demandIndex: 89,
    levels: {
      beginner: {
        title: 'Design Principles & Visual Hierarchy',
        topics: ['Color theory & typography', 'Layout math & spacing rhythms', 'Figma basics & wireframing', 'Gestalt principles of perception'],
        duration: '4 Weeks'
      },
      intermediate: {
        title: 'User Research & Inclusive Design',
        topics: ['Designing for low-literacy users', 'Voice UI & multimodal interfaces', 'Micro-interactions & motion design', 'WCAG AAA Accessibility'],
        duration: '7 Weeks'
      },
      advanced: {
        title: 'Design Systems & Product Strategy',
        topics: ['Building token-driven design systems', 'Complex information architecture', 'Usability benchmarking & heatmaps', 'Product design for emerging markets'],
        duration: '10 Weeks'
      }
    },
    capstoneProject: {
      title: 'Multilingual Digital Healthcare Kiosk UI',
      description: 'Design a touch and voice-guided health dispensary interface operable by rural elders without formal English literacy.',
      deliverable: 'Interactive Figma Prototype + Component System'
    },
    careerOutcome: {
      role: 'Senior Product Designer / UX Lead',
      avgGrowth: '+33% YoY National Demand',
      industries: ['FinTech', 'GovTech', 'HealthTech', 'Global SaaS']
    }
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship & Innovation',
    category: 'Business & Leadership',
    icon: 'TrendingUp',
    tagline: 'Transform bold ideas into sustainable, job-creating enterprises.',
    demandIndex: 91,
    levels: {
      beginner: {
        title: 'Ideation & Customer Discovery',
        topics: ['Finding real problems to solve', 'Lean canvas & business models', 'User interviews & validation', 'Basic unit economics'],
        duration: '4 Weeks'
      },
      intermediate: {
        title: 'Go-to-Market & Financial Modeling',
        topics: ['Pricing strategy & margin analysis', 'Pitch decks & storytelling', 'Bootstrapping vs VC funding', 'Legal incorporation & IPR in India'],
        duration: '6 Weeks'
      },
      advanced: {
        title: 'Scaling & Operational Excellence',
        topics: ['Building teams & company culture', 'Supply chain & vendor negotiation', 'Digital marketing & viral growth loops', 'Measuring social impact'],
        duration: '8 Weeks'
      }
    },
    capstoneProject: {
      title: 'Venture Pitch for a Tier-3 City Problem',
      description: 'Develop a full business plan, 3-year P&L projection, prototype demo, and investor pitch deck for a local problem in your region.',
      deliverable: 'Investor Deck & Operational Playbook'
    },
    careerOutcome: {
      role: 'Startup Founder / Innovation Manager',
      avgGrowth: '+35% YoY Ecosystem Expansion',
      industries: ['DeepTech Startups', 'Social Enterprise', 'Venture Capital', 'Incubators']
    }
  },
  {
    id: 'financial-literacy',
    title: 'Financial Literacy & Wealth',
    category: 'Core Life Skills',
    icon: 'Coins',
    tagline: 'Master budgeting, investing, compounding, and digital finance.',
    demandIndex: 88,
    levels: {
      beginner: {
        title: 'Personal Finance & Banking 101',
        topics: ['Savings, inflation & compounding', 'Safe UPI, cards & bank accounts', 'Budgeting the 50-30-20 rule', 'Credit scores and debt traps'],
        duration: '3 Weeks'
      },
      intermediate: {
        title: 'Capital Markets & Mutual Funds',
        topics: ['Equities vs Bonds vs Gold', 'Index funds & SIP mechanics', 'Reading company balance sheets', 'Tax planning under the Indian Tax code'],
        duration: '6 Weeks'
      },
      advanced: {
        title: 'Portfolio Theory & Wealth Strategy',
        topics: ['Asset allocation models', 'Derivatives & risk hedging concepts', 'Venture investing & angel syndicates', 'Estate planning & insurance'],
        duration: '8 Weeks'
      }
    },
    capstoneProject: {
      title: 'Family Financial Freedom Blueprint',
      description: 'Build an algorithmic retirement and education fund calculator accounting for Indian inflation, healthcare contingencies, and tax exemptions.',
      deliverable: 'Financial Model Calculator Tool'
    },
    careerOutcome: {
      role: 'Financial Analyst / Wealth Planner',
      avgGrowth: '+28% YoY National Demand',
      industries: ['Asset Management', 'WealthTech', 'Banking', 'Corporate Finance']
    }
  },
  {
    id: 'communication',
    title: 'Communication & Leadership',
    category: 'Human Centric',
    icon: 'Users2',
    tagline: 'Articulate ideas with conviction, empathy, and national vision.',
    demandIndex: 87,
    levels: {
      beginner: {
        title: 'Clear Expression & Active Listening',
        topics: ['Structure of persuasive speech', 'Body language & voice modulation', 'Overcoming stage fright', 'Clear professional writing'],
        duration: '3 Weeks'
      },
      intermediate: {
        title: 'Public Speaking & Negotiation',
        topics: ['Debate fundamentals & logic fallacies', 'Cross-cultural negotiation', 'Handling conflict & difficult conversations', 'Executive presentation skills'],
        duration: '6 Weeks'
      },
      advanced: {
        title: 'Visionary Leadership & Coalition Building',
        topics: ['Motivating cross-functional teams', 'Crisis communications', 'Storytelling for public mobilization', 'Mentorship & coaching frameworks'],
        duration: '8 Weeks'
      }
    },
    capstoneProject: {
      title: 'National Youth Parliament Speech & Whitepaper',
      description: 'Draft and deliver a recorded 5-minute keynote advocating for student digital equity, accompanied by a 1,500-word policy brief.',
      deliverable: 'Keynote Video + Policy Brief'
    },
    careerOutcome: {
      role: 'Public Affairs Lead / Communications Director',
      avgGrowth: '+25% YoY Demand',
      industries: ['International Diplomacy', 'Policy Think Tanks', 'Corporate Leadership', 'Media']
    }
  },
  {
    id: 'critical-thinking',
    title: 'Critical Thinking & Philosophy',
    category: 'Human Centric',
    icon: 'Brain',
    tagline: 'Question assumptions, deconstruct arguments, and evaluate truth.',
    demandIndex: 90,
    levels: {
      beginner: {
        title: 'Logic, Bias & Truth',
        topics: ['Deductive vs inductive reasoning', 'Cognitive biases (confirmation, sunk cost)', 'Identifying media misinformation & deepfakes', 'The Socratic method'],
        duration: '4 Weeks'
      },
      intermediate: {
        title: 'Decision Theory & Game Theory',
        topics: ['Nash equilibrium & cooperative games', 'Bayesian updating of beliefs', 'First-principles problem breakdown', 'Ethical dilemmas in AI and science'],
        duration: '6 Weeks'
      },
      advanced: {
        title: 'Complex Systems Thinking',
        topics: ['Feedback loops & emergent behavior', 'Second-order and third-order effects', 'Evaluating macro-policy trade-offs', 'Ancient Indian epistemology (Nyaya philosophy)'],
        duration: '8 Weeks'
      }
    },
    capstoneProject: {
      title: 'Misinformation Fact-Checking Dissector',
      description: 'Audit 5 viral science claims circulating on social messaging apps using formal logical analysis and source citation trails.',
      deliverable: 'Critical Investigation Casebook'
    },
    careerOutcome: {
      role: 'Policy Strategist / Systems Architect',
      avgGrowth: '+30% YoY Demand',
      industries: ['Strategy Consulting', 'Judicial Research', 'Scientific Ethics Boards', 'AI Safety']
    }
  },
  {
    id: 'climate-tech',
    title: 'Climate Technology & Clean Energy',
    category: 'Sustainability',
    icon: 'Leaf',
    tagline: 'Engineer solutions for net-zero carbon, circularity, and resilience.',
    demandIndex: 96,
    levels: {
      beginner: {
        title: 'Earth Systems & Energy Transition',
        topics: ['Carbon cycles and climate physics', 'Solar photovoltaics & wind mechanics', 'Energy storage & battery chemistry', 'Circular economy concepts'],
        duration: '4 Weeks'
      },
      intermediate: {
        title: 'Smart Grids & Green Hydrogen',
        topics: ['Microgrid management & inverters', 'Electrolyzer chemistry and green hydrogen', 'Carbon capture & biochar systems', 'Life cycle analysis (LCA) tools'],
        duration: '8 Weeks'
      },
      advanced: {
        title: 'Climate Resilient Infrastructure',
        topics: ['Flood and heatwave modeling', 'Urban forest cooling algorithms', 'Regenerative agriculture tech', 'Global carbon credit markets & verification'],
        duration: '10 Weeks'
      }
    },
    capstoneProject: {
      title: 'Zero-Waste Campus Microgrid Plan',
      description: 'Conduct an energy and waste audit for your school, design a 50kW solar canopy with rainwater integration, and calculate payback period.',
      deliverable: 'Engineering Feasibility Blueprint'
    },
    careerOutcome: {
      role: 'Climate Tech Engineer / Sustainability Director',
      avgGrowth: '+48% YoY National Demand',
      industries: ['Renewable Energy', 'Electric Vehicles', 'Urban Planning', 'Agri-Environment']
    }
  },
  {
    id: 'digital-literacy',
    title: 'Digital Citizenship & Cyber Literacy',
    category: 'Core Life Skills',
    icon: 'Laptop',
    tagline: 'Empower every citizen to navigate, create, and thrive in cyberspace.',
    demandIndex: 86,
    levels: {
      beginner: {
        title: 'Digital Tools & Internet Literacy',
        topics: ['Safe searching & email etiquette', 'Cloud storage & digital lockers (DigiLocker)', 'Government portals (UMANG, PMKVY)', 'Cyberbullying prevention'],
        duration: '3 Weeks'
      },
      intermediate: {
        title: 'Productivity & Collaborative Work',
        topics: ['Spreadsheets & data dashboards', 'Presentations & digital storytelling', 'Online teamwork tools', 'Basic content creation & video editing'],
        duration: '5 Weeks'
      },
      advanced: {
        title: 'Community Digital Transformation',
        topics: ['Teaching digital literacy to elders', 'Setting up village common service centers', 'Voice-assisted e-governance', 'Digital accessibility auditing'],
        duration: '6 Weeks'
      }
    },
    capstoneProject: {
      title: 'Digital Inclusion Drive for 50 Local Families',
      description: 'Host workshops guiding local shopkeepers and elders through secure UPI payments, telemedicine booking, and DigiLocker setup.',
      deliverable: 'Community Impact Report & Photos'
    },
    careerOutcome: {
      role: 'Community Digital Officer / EdTech Coordinator',
      avgGrowth: '+26% YoY Demand',
      industries: ['Digital India Initiatives', 'NGOs', 'Rural Banking', 'Public Schools']
    }
  }
];

export const PROJECT_CHALLENGES: ProjectChallenge[] = [
  {
    id: 'smart-city',
    title: 'Smart City Challenge',
    tagline: 'Design a smarter, cleaner, congestion-free urban center for India.',
    category: 'Urban Innovation',
    difficulty: 'Intermediate',
    estimatedTime: '3-4 Weeks',
    requiredSkills: ['IoT Sensors', 'Python', 'UI Design', 'Urban Planning'],
    description: 'Rapid urbanization in Indian cities demands resilient systems for waste, traffic, and water. Build an integrated telemetry model simulating city bottlenecks.',
    problemStatement: 'How might we optimize traffic light timings dynamically based on emergency vehicle sirens and crowd density?',
    impactGoal: 'Cut commute delays by 25% and reduce idle vehicle emissions.',
    milestones: ['Sensor mockups & traffic data ingestion', 'Traffic light optimization algorithm', 'Citizen mobile alert dashboard', 'Field testing simulation'],
    enrolledCount: 14820,
    isNationalChallenge: true
  },
  {
    id: 'clean-india-tech',
    title: 'Clean India Tech (Swachh Bharat 2.0)',
    tagline: 'Build a technology solution for decentralized waste segregation and recycling.',
    category: 'Sustainability & AI',
    difficulty: 'Intermediate',
    estimatedTime: '2-3 Weeks',
    requiredSkills: ['Computer Vision', 'Embedded Electronics', 'App Development'],
    description: 'Design a smart bin mechanism that uses camera recognition to classify plastic, organic, metal, and electronic e-waste in real-time.',
    problemStatement: 'Mixed dry and wet waste contaminates 70% of recyclable materials in urban municipal collections.',
    impactGoal: 'Achieve 92% segregation accuracy at the point of citizen disposal.',
    milestones: ['Dataset collection of 2,000 Indian packaging images', 'Teachable Machine / YOLO model training', 'Servo actuated flap mechanism', 'QR reward system for citizens'],
    enrolledCount: 19450,
    isNationalChallenge: true
  },
  {
    id: 'water-tomorrow',
    title: 'Water for Tomorrow',
    tagline: 'Create a groundwater monitoring and water conservation solution for dry zones.',
    category: 'Resource Conservation',
    difficulty: 'Advanced',
    estimatedTime: '4 Weeks',
    requiredSkills: ['Hydro-telemetry', 'LoRaWAN / GSM', 'Data Analytics', 'Solar Systems'],
    description: 'Develop low-cost ultrasonic well-depth sensors linked to cloud dashboards to prevent catastrophic over-extraction in agrarian aquifers.',
    problemStatement: 'Over 65% of India’s irrigation relies on fast-depleting groundwater with zero real-time replenishment visibility.',
    impactGoal: 'Provide early water table depletion alerts to 500+ farming families.',
    milestones: ['Hardware casing & waterproof sensor rig', 'Low-power microcontroller firmware', 'SMS alert gateway in local languages', 'Panchayat water budget calculator'],
    enrolledCount: 12600,
    isNationalChallenge: true
  },
  {
    id: 'rural-innovation-lab',
    title: 'Rural Innovation Lab',
    tagline: 'Solve a real-world village problem through frugal engineering.',
    category: 'Social Impact',
    difficulty: 'Beginner',
    estimatedTime: '2 Weeks',
    requiredSkills: ['Design Thinking', 'Basic Electronics', 'Interviewing & Empathy'],
    description: 'Interview rural artisans, farmers, or educators to identify a manual bottleneck and create an affordable mechanical or digital invention.',
    problemStatement: 'Smallholder post-harvest losses reach 20-30% due to lack of cold storage and affordable sorting tools.',
    impactGoal: 'Boost farmer net income by ₹3,500/month per harvest cycle.',
    milestones: ['Field empathy interviews with 5 rural workers', 'Sketched prototypes & material cost under ₹1,500', 'Functional physical / digital build', 'Community feedback review'],
    enrolledCount: 22100,
    isNationalChallenge: true
  },
  {
    id: 'future-mobility',
    title: 'Future Mobility',
    tagline: 'Design India’s green transportation system of tomorrow.',
    category: 'Electric & Autonomous Transit',
    difficulty: 'Advanced',
    estimatedTime: '4-5 Weeks',
    requiredSkills: ['Battery BMS', 'CAD Design', 'Telematics', 'Fleet Optimization'],
    description: 'Create an intelligent battery swap scheduler and route optimization tool for electric auto-rickshaws and delivery 2-wheelers.',
    problemStatement: 'Range anxiety and long charging queues hinder rapid 100% electrification of commercial 3-wheelers.',
    impactGoal: 'Minimize commercial EV downtime from 3 hours to under 4 minutes via swap queues.',
    milestones: ['Battery telemetry state-of-charge estimator', 'Geospatial swap station locator', 'Driver reservation app prototype', 'Hardware CAN-bus simulator'],
    enrolledCount: 9800,
    isNationalChallenge: true
  },
  {
    id: 'ai-for-bharat',
    title: 'AI for Bharat',
    tagline: 'Build an AI solution that solves a grassroots challenge in Indian languages.',
    category: 'Artificial Intelligence',
    difficulty: 'Intermediate',
    estimatedTime: '3 Weeks',
    requiredSkills: ['Speech Recognition', 'Indic NLP', 'FastAPI', 'React'],
    description: 'Build a voice-driven government welfare eligibility assistant that explains schemes like PM Kisan, Ayushman Bharat, or Sukanya Samriddhi in regional dialects.',
    problemStatement: 'Complex official English/Hindi bureaucratic language prevents 40% of eligible rural households from claiming benefits.',
    impactGoal: 'Enable 10,000+ non-literate citizens to verify welfare entitlements in 60 seconds.',
    milestones: ['Scheme knowledge base creation', 'Whisper / Bhashini speech-to-text integration', 'Clear rule-based eligibility calculator', 'Audio playback synthesizer in regional dialect'],
    enrolledCount: 27800,
    isNationalChallenge: true
  }
];

export const CAREER_PATHS: CareerPath[] = [
  {
    id: 'car-ux-designer',
    title: 'UX / Product Designer',
    category: 'Design',
    matchedTags: ['Technology', 'Creativity', 'Problem Solving', 'Design'],
    description: 'Design apps, digital kiosks, and national platforms that millions of Indian citizens can use seamlessly regardless of literacy.',
    skillsRequired: ['Figma / Penpot', 'User Research', 'Information Architecture', 'Prototyping', 'Accessibility (WCAG)'],
    subjectsToStudy: ['Computer Science', 'Psychology / Cognitive Science', 'Fine Arts / Design', 'Human-Computer Interaction'],
    beginnerProjects: ['Redesign a railway ticket app for senior citizens', 'Design a voice-first farmer weather app', 'Create an accessible icon kit'],
    roadmap: [
      { phase: 'High School', focus: 'Master visual layout, color psychology, and wireframing in Figma' },
      { phase: 'College / Self-Taught', focus: 'Conduct usability tests, design tokens, and build a 4-case-study portfolio' },
      { phase: 'Junior Designer', focus: 'Collaborate with engineers and product managers in agile tech teams' }
    ],
    futureOpportunities: 'High demand across IndiaStack fintech, healthtech, and global design agencies.'
  },
  {
    id: 'car-ai-engineer',
    title: 'AI & Machine Learning Engineer',
    category: 'Technology',
    matchedTags: ['Technology', 'Problem Solving', 'Science', 'Mathematics'],
    description: 'Train neural models to understand Indian languages, diagnose crops from satellite images, and automate complex tasks.',
    skillsRequired: ['Python', 'PyTorch / TensorFlow', 'Linear Algebra & Calculus', 'Data Pipelines', 'Cloud Deployment'],
    subjectsToStudy: ['Mathematics', 'Physics', 'Computer Science & Engineering', 'Data Structures & Algorithms'],
    beginnerProjects: ['Train an image classifier on Indian crops', 'Build an AI voice tutor for children', 'Create a spam SMS detector'],
    roadmap: [
      { phase: 'High School', focus: 'Excel in high-school mathematics and master Python logic' },
      { phase: 'College / Degree', focus: 'Dive into linear algebra, machine learning algorithms, and Kaggle competitions' },
      { phase: 'AI Practitioner', focus: 'Optimize models for low-cost mobile chips and edge deployment' }
    ],
    futureOpportunities: 'Exponential growth across autonomous systems, robotics, defence research, and enterprise software.'
  },
  {
    id: 'car-software-engineer',
    title: 'Software Architect / Full-Stack Engineer',
    category: 'Technology',
    matchedTags: ['Technology', 'Problem Solving', 'Engineering'],
    description: 'Build robust, highly scalable digital infrastructure that handles billions of transactions with zero downtime.',
    skillsRequired: ['TypeScript / Go / Rust', 'System Architecture', 'Database Optimization', 'Distributed Computing', 'Cybersecurity'],
    subjectsToStudy: ['Computer Science', 'Discrete Mathematics', 'Operating Systems', 'Networking'],
    beginnerProjects: ['Build a real-time collaborative whiteboard', 'Create an offline-first notes sync app', 'Deploy a REST API on container cloud'],
    roadmap: [
      { phase: 'High School', focus: 'Build personal web projects, learn version control (Git), and master algorithms' },
      { phase: 'College / Degree', focus: 'Contribute to open-source software, understand databases and cloud hosting' },
      { phase: 'Senior Engineer', focus: 'Design resilient microservices, mentor junior coders, and lead architectural decisions' }
    ],
    futureOpportunities: 'Core engine of the global technology economy with boundless remote and domestic opportunities.'
  },
  {
    id: 'car-climate-scientist',
    title: 'Climate Technologist & Renewable Energy Engineer',
    category: 'Green Technology',
    matchedTags: ['Science', 'Engineering', 'Green Technology', 'Problem Solving'],
    description: 'Engineer solar plants, green hydrogen systems, and climate adaptation technologies protecting communities.',
    skillsRequired: ['Photovoltaic Engineering', 'Thermodynamics', 'GIS Mapping', 'Data Modeling', 'Life Cycle Assessment'],
    subjectsToStudy: ['Physics', 'Chemistry', 'Environmental Engineering', 'Electrical Engineering'],
    beginnerProjects: ['Build a miniature solar tracker with light sensors', 'Design a school rainwater harvesting audit tool', 'Analyze regional temperature trends in Python'],
    roadmap: [
      { phase: 'High School', focus: 'Strong foundation in physics and chemistry; participate in science exhibitions' },
      { phase: 'College / Degree', focus: 'Degrees in Renewable Energy, Electrical, or Environmental Engineering' },
      { phase: 'Energy Specialist', focus: 'Direct solar/wind mega-parks, battery storage networks, or policy think-tanks' }
    ],
    futureOpportunities: 'Over 30 million green jobs projected in India as the country charges towards net-zero goals.'
  },
  {
    id: 'car-space-scientist',
    title: 'Aerospace & Space Systems Engineer',
    category: 'Science',
    matchedTags: ['Science', 'Engineering', 'Research', 'Defence'],
    description: 'Design satellites, launch vehicles, and lunar landers powering India’s ambitious space exploration missions.',
    skillsRequired: ['Orbital Mechanics', 'Avionics & Telemetry', 'Structural FEA', 'MATLAB / C++', 'Propulsion Thermodynamics'],
    subjectsToStudy: ['Physics', 'Mathematics', 'Aerospace Engineering', 'Mechanical / Electronics Engineering'],
    beginnerProjects: ['Build a CanSat satellite payload with altitude & temp sensors', 'Simulate rocket trajectories in OpenRocket', 'Construct an antenna receiver for NOAA weather satellites'],
    roadmap: [
      { phase: 'High School', focus: 'Master advanced mechanics, gravitation, and calculus; join astronomy clubs' },
      { phase: 'College / Degree', focus: 'B.Tech/BS in Aerospace, Mechanical, or Avionics (IIST, IITs, or equivalent)' },
      { phase: 'Space Mission Engineer', focus: 'Contribute to ISRO, private spacetech startups (Skyroot, Agnikul), or satellite constellations' }
    ],
    futureOpportunities: 'India’s private space sector is expanding rapidly alongside global satellite communications.'
  },
  {
    id: 'car-agritech-innovator',
    title: 'Precision Agritech Specialist',
    category: 'Agriculture',
    matchedTags: ['Agriculture', 'Technology', 'Science', 'Business'],
    description: 'Transform Indian agriculture using IoT soil sensors, drone surveillance, and smart micro-irrigation systems.',
    skillsRequired: ['Agri-IoT Systems', 'Drone Piloting & GIS', 'Crop Pathology basics', 'Supply Chain Tech', 'Mobile App Dev'],
    subjectsToStudy: ['Agricultural Science', 'Electronics / CS Engineering', 'Biotechnology', 'Agribusiness Management'],
    beginnerProjects: ['Build an automated potted-plant watering rig with soil moisture sensors', 'Program a crop price tracker for local mandis', 'Design an organic composting guide app'],
    roadmap: [
      { phase: 'High School', focus: 'Study biology and computer science; understand regional farming challenges' },
      { phase: 'College / Degree', focus: 'Agricultural Engineering, Data Science for Agriculture, or Agronomy' },
      { phase: 'Agritech Leader', focus: 'Deploy smart hardware and AI to empower Farmer Producer Organizations (FPOs)' }
    ],
    futureOpportunities: 'Vital sector backed by national initiatives, modernizing the backbone of India’s rural economy.'
  }
];

export const SAMPLE_QUIZZES: Quiz[] = [
  {
    id: 'quiz-ai-foundations',
    title: 'AI Fundamentals & Machine Learning',
    subject: 'Artificial Intelligence',
    xpReward: 80,
    questions: [
      {
        id: 'q1',
        question: 'What does AI stand for in modern technology?',
        options: ['Automated Internet', 'Artificial Intelligence', 'Advanced Interface', 'Automated Intelligence'],
        correctIndex: 1,
        explanation: 'AI stands for Artificial Intelligence — the science of engineering computer systems capable of performing tasks that typically require human cognition.'
      },
      {
        id: 'q2',
        question: 'Which of the following is an example of Supervised Learning?',
        options: [
          'Clustering customer groups without labels',
          'Predicting house prices using labeled past transaction data',
          'A robot learning to walk by trial and error reward',
          'Compressing an image file size'
        ],
        correctIndex: 1,
        explanation: 'Supervised learning trains on labeled datasets where both inputs and the target ground-truth outputs are provided.'
      },
      {
        id: 'q3',
        question: 'What is a "Neural Network" loosely inspired by?',
        options: ['Planetary orbits in space', 'The biological neurons and synapses of the human brain', 'Telephone switchboard cables', 'Quantum crystal lattices'],
        correctIndex: 1,
        explanation: 'Artificial Neural Networks are computational architectures inspired by the interconnected web of biological neurons found in animal brains.'
      },
      {
        id: 'q4',
        question: 'Why is data quality and diversity critical for AI in India?',
        options: [
          'To prevent model bias and ensure accurate performance across 100+ languages and diverse accents',
          'To make the computer consume less electricity',
          'Because all computers speak only English',
          'It is required only for games'
        ],
        correctIndex: 0,
        explanation: 'Diverse training data ensures AI models understand multiple Indian languages, regional accents, dialects, and varied cultural contexts without prejudice.'
      },
      {
        id: 'q5',
        question: 'What does "Computer Vision" allow machines to do?',
        options: ['Listen to audio recordings', 'Extract meaning, patterns, and decisions from visual inputs like images and video', 'Type faster on a keyboard', 'Store data in a battery'],
        correctIndex: 1,
        explanation: 'Computer Vision enables software to process, analyze, and understand digital images and videos to detect diseases, navigate rovers, or recognize text.'
      }
    ]
  },
  {
    id: 'quiz-space-india',
    title: 'India’s Space Odyssey (ISRO & Beyond)',
    subject: 'Space Science & Engineering',
    xpReward: 100,
    questions: [
      {
        id: 'q1',
        question: 'Which Indian mission made history by soft-landing near the Lunar South Pole in August 2023?',
        options: ['Mangalyaan', 'Chandrayaan-3', 'Aditya-L1', 'Gaganyaan'],
        correctIndex: 1,
        explanation: 'Chandrayaan-3 made India the first nation in human history to achieve a successful soft landing in the Moon’s southern polar region.'
      },
      {
        id: 'q2',
        question: 'What is India’s dedicated solar observatory spacecraft placed at Lagrangian Point 1 (L1)?',
        options: ['AstroSat', 'Aditya-L1', 'XPoSat', 'INSAT-4B'],
        correctIndex: 1,
        explanation: 'Aditya-L1 is ISRO’s pioneering observatory dedicated to studying the Sun’s photosphere, chromosphere, and solar corona from the halo orbit around L1.'
      },
      {
        id: 'q3',
        question: 'What is the primary objective of India’s "Gaganyaan" human spaceflight program?',
        options: ['Building a hotel on Mars', 'Sending Indian astronauts (Gaganauts) into low-Earth orbit and returning them safely to Earth', 'Mining asteroids for gold', 'Capturing space debris with a net'],
        correctIndex: 1,
        explanation: 'Gaganyaan aims to demonstrate indigenous human spaceflight capability by launching a crew of astronauts to a 400 km orbit for a 3-day mission.'
      }
    ]
  }
];

export const LEADERBOARD_USERS: LeaderboardUser[] = [
  {
    rank: 1,
    name: 'Priyanshu Verma',
    school: 'Kendriya Vidyalaya, IIT Kanpur',
    state: 'Uttar Pradesh',
    district: 'Kanpur',
    xp: 3840,
    streak: 34,
    badgesCount: 9,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80'
  },
  {
    rank: 2,
    name: 'Ananya Sengupta',
    school: 'South Point High School, Kolkata',
    state: 'West Bengal',
    district: 'Kolkata',
    xp: 3620,
    streak: 28,
    badgesCount: 8,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80'
  },
  {
    rank: 3,
    name: 'Siddharth Rao',
    school: 'National Public School, Indiranagar',
    state: 'Karnataka',
    district: 'Bengaluru Urban',
    xp: 3490,
    streak: 26,
    badgesCount: 8,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80'
  },
  {
    rank: 4,
    name: 'Meenakshi Sundaram',
    school: 'DAV Boys Senior Secondary School, Chennai',
    state: 'Tamil Nadu',
    district: 'Chennai',
    xp: 3120,
    streak: 21,
    badgesCount: 7,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
  },
  {
    rank: 5,
    name: 'Aarav Sharma (You)',
    school: 'Kendriya Vidyalaya No. 1, Lucknow',
    state: 'Uttar Pradesh',
    district: 'Lucknow',
    xp: 1420,
    streak: 12,
    badgesCount: 4,
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80',
    isCurrentUser: true
  },
  {
    rank: 6,
    name: 'Kavita Patel',
    school: 'DPS Bopal, Ahmedabad',
    state: 'Gujarat',
    district: 'Ahmedabad',
    xp: 1390,
    streak: 11,
    badgesCount: 4,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80'
  },
  {
    rank: 7,
    name: 'Jitendra Borgohain',
    school: 'Don Bosco School, Guwahati',
    state: 'Assam',
    district: 'Kamrup Metro',
    xp: 1250,
    streak: 9,
    badgesCount: 3,
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80'
  }
];

export const COMMUNITY_DISCUSSIONS: CommunityDiscussion[] = [
  {
    id: 'disc-1',
    community: 'AI & Coding India',
    title: 'How can we fine-tune open Indic LLMs to run smoothly on ₹10,000 Android phones?',
    author: {
      name: 'Rohan Deshmukh',
      role: 'Student Builder',
      state: 'Maharashtra',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop&q=80'
    },
    content: 'I have quantized the Llama 3 8B model down to 4-bit GGUF format and got 6 tokens/second running locally in Termux on a MediaTek Helio G85 device! Here is the step-by-step setup script for anyone building offline study aids.',
    likes: 142,
    replies: 28,
    tags: ['EdgeAI', 'OpenSource', 'IndicNLP', 'Termux'],
    timestamp: '2 hours ago'
  },
  {
    id: 'disc-2',
    community: 'Young Scientists',
    title: 'Designing low-cost water filtration using activated charcoal from coconut husks',
    author: {
      name: 'Divya Nair',
      role: 'High School Researcher',
      state: 'Kerala',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80'
    },
    content: 'We tested 5 porosity variations of pyrolyzed coconut shells against standard river turbidity samples from the Periyar river. We achieved 88% suspended solids reduction under ₹15 production cost per filter unit.',
    likes: 98,
    replies: 16,
    tags: ['CleanWater', 'Biomaterials', 'FrugalScience'],
    timestamp: '5 hours ago'
  },
  {
    id: 'disc-3',
    community: 'Future Entrepreneurs',
    title: 'How to pitch our school robotics project to the Atal Innovation Mission (AIM)?',
    author: {
      name: 'Kabir Thapar',
      role: 'ATL Student Lead',
      state: 'Delhi NCR',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80'
    },
    content: 'Our Atal Tinkering Lab team developed a smart cane for visually impaired citizens with haptic vibration alerts. Does anyone have feedback on creating a convincing financial viability section for the grant application?',
    likes: 83,
    replies: 21,
    tags: ['AtalTinkeringLab', 'Grants', 'AssistiveTech', 'AIM'],
    timestamp: 'Yesterday'
  },
  {
    id: 'disc-4',
    community: 'Climate Innovators',
    title: 'Building a micro-weather telemetry station for under ₹600 using ESP8266 and DHT22',
    author: {
      name: 'Sneha Patel',
      role: 'Student Maker',
      state: 'Gujarat',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&auto=format&fit=crop&q=80'
    },
    content: 'We have deployed 4 stations across our agricultural village. Data is streamed every 15 minutes to an open dashboard via a 2G SIM module so farmers can check soil humidity and wind speed before spraying crops.',
    likes: 129,
    replies: 34,
    tags: ['MicroClimate', 'IoT', 'Agritech', 'FrugalEngineering'],
    timestamp: '2 days ago'
  }
];

export const DEMO_CERTIFICATES: DigitalCertificate[] = [
  {
    id: 'BL-2026-IND-88492',
    studentName: 'Aarav Sharma',
    courseTitle: 'Foundations of Artificial Intelligence & Machine Learning',
    completionDate: '18 February 2026',
    skillsAcquired: ['Python Data Science', 'Neural Network Architectures', 'Computer Vision Basics', 'Responsible AI Ethics'],
    grade: 'Distinction (94%)',
    issuingAuthority: 'National Digital Education Council of Bharat',
    verificationHash: '0x8f4d92a1c7b03e5e492fbc91039de489a241e3',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://bharatlearn.gov.in/verify/BL-2026-IND-88492'
  },
  {
    id: 'BL-2026-IND-11029',
    studentName: 'Priyanshu Verma',
    courseTitle: 'Full-Stack Software Architecture for Public Infrastructure',
    completionDate: '02 January 2026',
    skillsAcquired: ['TypeScript', 'Distributed Databases', 'API Security', 'IndiaStack Architecture'],
    grade: 'Exemplary (98%)',
    issuingAuthority: 'National Digital Education Council of Bharat',
    verificationHash: '0x43bc91f2801a2e7c4199da20188ef77412ca87',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://bharatlearn.gov.in/verify/BL-2026-IND-11029'
  }
];

export const ALL_CAREERS = CAREER_PATHS;
export const NATIONAL_LEADERBOARD = LEADERBOARD_USERS;
export const COMMUNITY_THREADS = COMMUNITY_DISCUSSIONS;

export const ALL_BADGES = [
  {
    id: 'badge-1',
    title: 'ISRO Space Innovator',
    icon: '🚀',
    category: 'Science & Aerospace',
    description: 'Mastered orbital gravity calculations and Chandrayaan-3 lunar trajectory telemetry.',
    xpAward: 150
  },
  {
    id: 'badge-2',
    title: 'AI Vernacular Pioneer',
    icon: '🤖',
    category: 'Computer Science',
    description: 'Trained and validated an Indic language natural language processing pipeline.',
    xpAward: 200
  },
  {
    id: 'badge-3',
    title: 'Clean Bharat Technologist',
    icon: '🌱',
    category: 'Sustainability',
    description: 'Engineered an automated IoT smart waste segregation model for rural gram panchayats.',
    xpAward: 180
  },
  {
    id: 'badge-4',
    title: 'Frugal Agritech Builder',
    icon: '🌾',
    category: 'Social Impact',
    description: 'Constructed an open-hardware soil telemetry module for local farmers under ₹1,500.',
    xpAward: 175
  },
  {
    id: 'badge-5',
    title: 'IndiaStack Architect',
    icon: '🇮🇳',
    category: 'Systems & Infrastructure',
    description: 'Built an open-source citizen welfare tracker aligned with national digital public infrastructure.',
    xpAward: 220
  },
  {
    id: 'badge-6',
    title: 'Community Mentor',
    icon: '🤝',
    category: 'Leadership',
    description: 'Guided 15+ peer students across different states through STEM troubleshooting threads.',
    xpAward: 120
  }
];

export const ALL_MENTORS = [
  {
    id: 'mentor-1',
    name: 'Dr. Sunita Verma',
    role: 'Principal Scientist & Educator',
    organization: 'ISRO Space Application Centre',
    state: 'Gujarat / UP',
    city: 'Ahmedabad',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
    specialization: 'Astrophysics, Satellite Telemetry & Remote Sensing',
    expertise: ['Space Tech', 'Orbital Physics', 'Satellite Telemetry'],
    availableSessions: 4,
    availableSlots: '4 slots available this week',
    languages: ['Hindi', 'English', 'Gujarati'],
    rating: 4.9
  },
  {
    id: 'mentor-2',
    name: 'Prof. Rajesh Kulkarni',
    role: 'Distinguished Professor of AI',
    organization: 'IIT Bombay & AICTE',
    state: 'Maharashtra',
    city: 'Mumbai',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    specialization: 'Indic NLP, Deep Learning & Autonomous Edge Systems',
    expertise: ['Indic NLP', 'Edge AI', 'Python Algorithms'],
    availableSessions: 6,
    availableSlots: '6 slots available this week',
    languages: ['Marathi', 'Hindi', 'English'],
    rating: 5.0
  },
  {
    id: 'mentor-3',
    name: 'Ananya Roy',
    role: 'Lead Renewable Microgrid Engineer',
    organization: 'National Clean Energy Mission',
    state: 'Karnataka',
    city: 'Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80',
    specialization: 'Solar Microgrids, Battery Storage & Agritech IoT',
    expertise: ['Solar Microgrids', 'Clean Energy', 'Agritech IoT'],
    availableSessions: 3,
    availableSlots: '3 slots available this week',
    languages: ['Bengali', 'English', 'Hindi', 'Kannada'],
    rating: 4.8
  }
];

export const ALL_CERTIFICATES = [
  {
    certificateId: 'BL-2026-IND-8942',
    studentName: 'Aarav Sharma',
    courseTitle: 'Foundations of Artificial Intelligence & Machine Learning',
    gradeScore: 'Distinction (94%)',
    dateIssued: '18 February 2026',
    issuerAuthority: 'National Digital Education Council of Bharat',
    skillsVerified: [
      'Indic NLP Modeling',
      'Neural Networks',
      'Computer Vision Diagnostics',
      'Responsible AI & Ethics'
    ],
    verificationHash: '0x8f4d92a1c7b03e5e492fbc91039de489a241e3'
  },
  {
    certificateId: 'BL-2026-IND-5521',
    studentName: 'Diya Patel',
    courseTitle: 'Climate Technology & Solar Energy Systems',
    gradeScore: 'Exemplary (97%)',
    dateIssued: '22 January 2026',
    issuerAuthority: 'National Digital Education Council of Bharat',
    skillsVerified: [
      'Solar Photovoltaic Design',
      'Microgrid Engineering',
      'IoT Well Telemetry',
      'Clean Energy Economics'
    ],
    verificationHash: '0x32ab98cf112a9e8841029cba87612ef94123dc'
  },
  {
    certificateId: 'BL-2026-IND-11029',
    studentName: 'Priyanshu Verma',
    courseTitle: 'Full-Stack Software Architecture for Public Infrastructure',
    gradeScore: 'Exemplary (98%)',
    dateIssued: '02 January 2026',
    issuerAuthority: 'National Digital Education Council of Bharat',
    skillsVerified: [
      'TypeScript Distributed Systems',
      'IndiaStack API Security',
      'Progressive Web Apps',
      'Decentralized Cloud'
    ],
    verificationHash: '0x43bc91f2801a2e7c4199da20188ef77412ca87'
  }
];

export const ALL_QUIZZES = [
  {
    id: 'quiz-chandrayaan',
    title: 'Chandrayaan-3 Orbital & Gravity Physics',
    subject: 'Space Science',
    xpReward: 60,
    questions: [
      {
        id: 'q1',
        question: 'What orbital maneuver enabled Chandrayaan-3 to efficiently raise its orbit around Earth without excessive fuel burn?',
        options: [
          'Direct straight-line burn',
          'Earth-bound maneuvers using gravitational slingshot / perigee burns',
          'Solar sail inflation',
          'Atmospheric friction braking'
        ],
        correctAnswer: 1,
        correctIndex: 1,
        explanation: 'ISRO utilized Oberth effect perigee burns to systematically elevate apogee, harnessing Earth gravity to conserve vital rocket propellant.'
      },
      {
        id: 'q2',
        question: 'Which lunar region was chosen for the historic soft landing of Chandrayaan-3’s Vikram Lander?',
        options: [
          'Lunar Equator',
          'Sea of Tranquility',
          'Lunar South Polar Region (~69° S)',
          'Far side North Pole'
        ],
        correctAnswer: 2,
        correctIndex: 2,
        explanation: 'India landed near 69.37° S, 32.35° E — the pioneering landing near the Lunar South Pole where permanently shadowed craters harbor water ice.'
      },
      {
        id: 'q3',
        question: 'Which instrument on the Pragyan Rover performed elemental composition analysis of lunar soil?',
        options: [
          'LIBS (Laser Induced Breakdown Spectroscope)',
          'Hubble Spectrometer',
          'Barometer',
          'Seismograph only'
        ],
        correctAnswer: 0,
        correctIndex: 0,
        explanation: 'Pragyan utilized LIBS (Laser Induced Breakdown Spectroscopy) and APXS to unequivocally confirm the presence of Sulfur (S), Iron, and Calcium on the moon surface.'
      }
    ]
  },
  {
    id: 'quiz-ai-foundations',
    title: 'AI Fundamentals & Indic NLP',
    subject: 'Artificial Intelligence',
    xpReward: 80,
    questions: [
      {
        id: 'q1',
        question: 'What does Machine Learning primarily rely upon to detect patterns and make predictions?',
        options: [
          'Hardcoded nested if-else statements only',
          'High-quality statistical data and model training algorithms',
          'Screen brightness settings',
          'Mechanical gear ratio adjustments'
        ],
        correctAnswer: 1,
        correctIndex: 1,
        explanation: 'Machine learning algorithms discover statistical weights and patterns from historical training datasets rather than relying solely on manually written rule sets.'
      },
      {
        id: 'q2',
        question: 'Why is multimodal speech recognition crucial for digital education in India?',
        options: [
          'It is only useful for music games',
          'It empowers students across 22+ scheduled languages to query science concepts in their mother tongue',
          'It decreases computer storage',
          'It replaces the need for schools entirely'
        ],
        correctAnswer: 1,
        correctIndex: 1,
        explanation: 'Speech and vernacular AI remove literacy barriers, democratizing high-level STEM learning in students’ native mother tongues.'
      }
    ]
  }
];

