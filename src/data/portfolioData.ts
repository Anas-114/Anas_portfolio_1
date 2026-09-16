export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  impact: string;
  technologies: string[];
  features: string[];
  architecture: string[];
  metrics?: { label: string; value: string }[];
  colorTheme: {
    accent: string;
    bgGlow: string;
    badge: string;
  };
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  category: "core" | "state" | "backend" | "realtime" | "tools";
  level: "Advanced" | "Proficient" | "Specialized";
  iconName: string;
  description: string;
  usedIn: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
  skillsUsed: string[];
}

export const PERSONAL_INFO = {
  name: "Anas",
  fullName: "Anas",
  age: 20,
  dob: "18/01/2006",
  role: "Flutter Developer",
  tagline: "Building things. Exploring tech.",
  subtext: "Self-taught developer crafting fluid, high-performance cross-platform mobile apps with clean architecture and pixel-perfect design.",
  location: "Calicut, Kerala, India",
  timezone: "Asia/Kolkata",
  status: "Open for Full-time Roles & Contracts",
  motto: "Curious mind. Better tomorrow.",
  quote: "Building things along the way. Let's see where this takes me. 🚀",
  email: "anas.engineer.in@gmail.com",
  socials: {
    github: "https://github.com/Anas-114",
    linkedin: "https://www.linkedin.com/in/anas-mp-b6104a324/",
    email: "mailto:anas.engineer.in@gmail.com",
    whatsapp: "https://wa.me",
  },
  stats: [
    { label: "Years of Building", value: "2+" },
    { label: "Production Apps", value: "5+" },
    { label: "Architecture", value: "Clean & Reactive" },
    { label: "Performance", value: "60 FPS Smooth" },
  ],
  interests: ["Mobile Engineering", "Clean Architecture", "AI + Mobile Interfaces", "Interactive UX"],
  traits: ["Minimal", "Focused", "Curious", "Creative", "Consistent"],
  coreValues: [
    { label: "Clean Code", desc: "Readable, testable, well-structured architecture that scales." },
    { label: "New Ideas", desc: "Always prototyping, exploring modern SDKs, and embracing innovation." },
    { label: "Better Products", desc: "Obsessed with buttery 60fps micro-animations and zero-friction UX." },
    { label: "Meaningful Impact", desc: "Building tools that solve real-world problems for real humans." },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "ametzo-academy",
    title: "Ametzo Academy",
    category: "LMS & Mobile Education",
    tagline: "Comprehensive e-learning mobile platform with interactive lessons and offline video caching.",
    description:
      "A complete learning management application designed for students to stream live sessions, download video courses for offline studying, take timed quizzes, and monitor their learning trajectories with interactive visual analytics.",
    impact:
      "Enabled over 5,000+ students to access courseware seamlessly with sub-second video buffering and 100% offline playback capability.",
    technologies: ["Flutter", "Dart", "Provider", "REST API", "Dio", "Firebase", "Video Player"],
    features: [
      "Offline video caching and encrypted local storage for on-the-go learning",
      "Interactive timed quiz system with instant scoring and detailed answer keys",
      "Course progression tracking with visual completion percentages and milestone badges",
      "Real-time notifications for live webinars, test deadlines, and instructor announcements",
      "Clean dark & light adaptive user interfaces tuned for long study sessions",
    ],
    architecture: [
      "Provider-based reactive state management with strict separation of presentation and business logic",
      "Custom Dio interceptor network client with automatic retry mechanisms and secure token refreshes",
      "Repository pattern decoupling remote API endpoints from local SQLite cache",
    ],
    metrics: [
      { label: "Active Learners", value: "5,000+" },
      { label: "Offline Storage", value: "Encrypted" },
      { label: "Crash-free Rate", value: "99.8%" },
    ],
    colorTheme: {
      accent: "#0D5C63",
      bgGlow: "rgba(13, 92, 99, 0.15)",
      badge: "bg-teal-50 text-teal-800 border-teal-200",
    },
  },
  {
    id: "boliyo",
    title: "Boliyo",
    category: "Real-Time Social Audio & Video",
    tagline: "Ultra low-latency audio/video calling and social voice rooms powered by ZEGOCLOUD.",
    description:
      "A high-concurrency real-time communication platform allowing users to initiate 1-on-1 crystal-clear audio/video calls, host interactive multi-speaker voice channels, and join community chat rooms with dynamic background audio processing.",
    impact:
      "Delivered real-time audio streams with under 200ms latency and resilient call reconnection across fluctuating 4G/5G networks.",
    technologies: ["Flutter", "ZEGOCLOUD SDK", "Riverpod", "WebSockets", "Dart", "Audio Visualizer"],
    features: [
      "Low-latency 1-on-1 and group video/voice calling powered by ZEGOCLOUD WebRTC engine",
      "Interactive multi-speaker voice rooms with host moderation, hand-raising, and mute controls",
      "Live audio spectrum visualizers that animate responsively to active speaker voices",
      "Background call service integration allowing calls to persist during app switching",
      "Custom in-call chat with animated gifts, emojis, and instant reaction floating bubbles",
    ],
    architecture: [
      "Riverpod StateNotifier architecture managing complex peer-to-peer connection states",
      "Event-driven WebSocket listener orchestrating signaling, room participant rosters, and invite handshakes",
      "Optimized battery & GPU usage via hardware-accelerated video rendering pipelines",
    ],
    metrics: [
      { label: "Latency", value: "< 200ms" },
      { label: "Max Room Speakers", value: "16 Live" },
      { label: "Engine", value: "ZEGOCLOUD RTC" },
    ],
    colorTheme: {
      accent: "#16808C",
      bgGlow: "rgba(22, 128, 140, 0.15)",
      badge: "bg-cyan-50 text-cyan-800 border-cyan-200",
    },
  },
  {
    id: "kodlar-crm",
    title: "Kodlar CRM",
    category: "Enterprise Sales & Client Pipeline",
    tagline: "Mobile-first CRM suite for managing leads, deals, meeting agendas, and team sales pipelines.",
    description:
      "A high-efficiency enterprise sales tool empowering mobile sales teams to track leads from initial discovery to deal closure. Built with an offline-first architecture, allowing field reps to log notes, schedule client follow-ups, and update stage kanbans anywhere.",
    impact:
      "Eliminated field data loss by implementing auto-syncing background queues, increasing rep daily activity updates by 40%.",
    technologies: ["Flutter", "Supabase", "Dio", "Clean Architecture", "PostgreSQL", "Sync Engine"],
    features: [
      "Interactive deal pipeline board with fluid drag-and-drop stage progression",
      "Offline-first local SQLite caching with intelligent conflict-resolution sync engine",
      "Lead scoring, activity timelines, and automatic calendar follow-up scheduling",
      "Comprehensive sales performance charts, conversion funnels, and revenue projections",
      "Role-based access control (RBAC) backed by Supabase Row Level Security",
    ],
    architecture: [
      "Strict Clean Architecture (Domain, Data, Presentation layers) for enterprise maintainability",
      "Optimistic UI updates providing instant visual feedback while network sync happens in background",
      "Modular routing and dependency injection for decoupled testing",
    ],
    metrics: [
      { label: "Offline Sync", value: "Instant" },
      { label: "Security", value: "Row-Level RLS" },
      { label: "Architecture", value: "Clean Arch" },
    ],
    colorTheme: {
      accent: "#0D5C63",
      bgGlow: "rgba(13, 92, 99, 0.15)",
      badge: "bg-emerald-50 text-emerald-800 border-emerald-200",
    },
  },
  {
    id: "surprez",
    title: "Surprez",
    category: "Multi-Vendor E-Commerce",
    tagline: "Modern gift and bespoke surprise marketplace with lightning-fast catalog exploration.",
    description:
      "A vibrant mobile e-commerce platform curated for customized gifts and celebration surprises. Customers can browse dynamic multi-vendor product listings, personalize gift packages, select delivery dates, and checkout effortlessly.",
    impact:
      "Achieved sub-100ms UI transitions, seamless cart persistence, and a streamlined 3-step checkout with near-zero cart abandonment.",
    technologies: ["Flutter", "GetX", "REST API", "Dio", "Payment Gateway", "Cached Network Image"],
    features: [
      "Dynamic product catalog with multi-attribute filtering (occasion, price, delivery speed)",
      "Interactive gift bundle builder with personalized message card customization",
      "Real-time cart synchronization and one-touch promo code validation",
      "Integrated secure multi-channel payment gateway (Cards, UPI, Netbanking)",
      "Live order status tracker with visual delivery milestone steps",
    ],
    architecture: [
      "GetX reactive state management for rapid development and lightweight memory overhead",
      "Staggered image loading with disk memory dual caching for silky smooth scroll feeds",
      "Robust payload validation and standardized API exception handling",
    ],
    metrics: [
      { label: "Checkout Steps", value: "3 Fast Taps" },
      { label: "Frame Rate", value: "Solid 60 FPS" },
      { label: "Payment Flow", value: "100% Encrypted" },
    ],
    colorTheme: {
      accent: "#D95D39",
      bgGlow: "rgba(217, 93, 57, 0.15)",
      badge: "bg-amber-50 text-amber-800 border-amber-200",
    },
  },
  {
    id: "de-addiction",
    title: "De-Addiction",
    category: "Habit Breaking & Wellness Tracker",
    tagline: "Empathetic habit tracking, recovery streak milestones, and emergency relapse prevention.",
    description:
      "A compassionate personal wellness application created to support individuals overcoming unwanted habits and addictions. Features milestone celebration counters, daily motivational reflections, craving trigger logging, and an instant SOS support trigger.",
    impact:
      "Provided an empowering, non-judgmental daily tracking companion with privacy-first data handling and encouraging community milestones.",
    technologies: ["Flutter", "Firebase Auth", "Firestore", "Riverpod", "Local Notifications"],
    features: [
      "Precision recovery timer measuring days, hours, and minutes of habit-free streaks",
      "Milestone progression badges celebrating 1 day, 7 days, 30 days, 90 days, and beyond",
      "Emergency SOS button providing guided breathing exercises and instant support contacts",
      "Daily mood check-in and craving diary with localized encrypted note storage",
      "Automated encouraging local push notifications scheduled at personalized high-risk hours",
    ],
    architecture: [
      "Riverpod reactive providers coordinating time calculation streams and streak states",
      "Offline-first Firestore persistence ensuring user journals remain accessible without network",
      "Strict biometric device lock (Fingerprint / Face ID) to protect sensitive wellness data",
    ],
    metrics: [
      { label: "Privacy", value: "Biometric Locked" },
      { label: "Streak Engine", value: "Real-time Stream" },
      { label: "Alerts", value: "Smart Notifications" },
    ],
    colorTheme: {
      accent: "#0D5C63",
      bgGlow: "rgba(13, 92, 99, 0.15)",
      badge: "bg-teal-50 text-teal-800 border-teal-200",
    },
  },
];

export const SKILLS: Skill[] = [
  {
    name: "Flutter",
    category: "core",
    level: "Advanced",
    iconName: "Smartphone",
    description: "Cross-platform mobile UI framework, custom widget trees, animations, platform channels.",
    usedIn: ["Ametzo Academy", "Boliyo", "Kodlar CRM", "Surprez", "De-Addiction"],
  },
  {
    name: "Dart",
    category: "core",
    level: "Advanced",
    iconName: "Code2",
    description: "Strongly typed OOP, async programming, streams, isolate workers, functional collections.",
    usedIn: ["All Projects"],
  },
  {
    name: "Firebase",
    category: "backend",
    level: "Proficient",
    iconName: "Flame",
    description: "Authentication, Cloud Firestore, Cloud Storage, FCM Push Notifications, Crashlytics.",
    usedIn: ["Ametzo Academy", "De-Addiction"],
  },
  {
    name: "Supabase",
    category: "backend",
    level: "Proficient",
    iconName: "Database",
    description: "Postgres database, Row Level Security, Realtime websockets, custom SQL triggers.",
    usedIn: ["Kodlar CRM"],
  },
  {
    name: "REST API & Dio",
    category: "backend",
    level: "Advanced",
    iconName: "Globe",
    description: "Robust HTTP client, custom interceptors, auth token refresh, offline retry queuing.",
    usedIn: ["Ametzo Academy", "Kodlar CRM", "Surprez"],
  },
  {
    name: "Provider",
    category: "state",
    level: "Advanced",
    iconName: "Layers",
    description: "Pragmatic state management, ChangeNotifier, Consumer widgets, clean separation.",
    usedIn: ["Ametzo Academy"],
  },
  {
    name: "Riverpod",
    category: "state",
    level: "Advanced",
    iconName: "Cpu",
    description: "Compile-safe, modular state trees, StateNotifier, auto-dispose providers, scalable DI.",
    usedIn: ["Boliyo", "De-Addiction"],
  },
  {
    name: "GetX",
    category: "state",
    level: "Proficient",
    iconName: "Zap",
    description: "Reactive state management, micro-controllers, route bindings, rapid app prototyping.",
    usedIn: ["Surprez"],
  },
  {
    name: "ZEGOCLOUD SDK",
    category: "realtime",
    level: "Specialized",
    iconName: "Radio",
    description: "Real-time voice/video RTC, multi-speaker audio rooms, sub-200ms latency calling.",
    usedIn: ["Boliyo"],
  },
  {
    name: "Git & GitHub",
    category: "tools",
    level: "Advanced",
    iconName: "GitBranch",
    description: "Branching strategies, GitFlow, pull request reviews, version tagging, merge conflict resolution.",
    usedIn: ["All Projects"],
  },
  {
    name: "Figma",
    category: "tools",
    level: "Proficient",
    iconName: "Palette",
    description: "UI/UX handoff inspection, design systems, design token extraction, pixel-perfect translation.",
    usedIn: ["All Projects"],
  },
  {
    name: "CI/CD & Fastlane",
    category: "tools",
    level: "Proficient",
    iconName: "Settings",
    description: "Automated mobile builds, APK signing, GitHub Actions pipelines, release workflows.",
    usedIn: ["Production Apps"],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Ametzo Technologies",
    role: "Flutter Developer",
    period: "Nov 2025 – May 2026",
    startDate: "Nov 2025",
    endDate: "May 2026",
    location: "Kerala, India",
    type: "Full-Time",
    summary:
      "Core Flutter developer responsible for architectural design, REST API integration, state management, and production performance tuning across mobile client apps.",
    highlights: [
      "Engineered cross-platform mobile features using clean architecture, ensuring responsive UI across diverse screen sizes.",
      "Implemented resilient networking layers with Dio interceptors, automated JWT token rotation, and offline data sync.",
      "Optimized rendering frame rates to maintain consistent 60fps performance and decreased cold startup time by 28%.",
      "Collaborated closely with product managers and UI designers to transform complex user flows into intuitive mobile experiences.",
    ],
    skillsUsed: ["Flutter", "Dart", "Provider", "Dio", "REST APIs", "Git", "Figma"],
  },
  {
    company: "Bridgeon Solutions",
    role: "Flutter Developer Trainee",
    period: "Jun 2024 – Oct 2025",
    startDate: "Jun 2024",
    endDate: "Oct 2025",
    location: "Kerala, India",
    type: "Trainee / Apprenticeship",
    summary:
      "Intensive hands-on training and real-world project development focusing on modern Dart, Flutter widget architecture, and Firebase integrations.",
    highlights: [
      "Built production-ready mobile prototypes and client-requested modules following best development practices.",
      "Gained deep expertise in state management paradigms including Provider, Riverpod, and GetX.",
      "Configured Firebase Authentication, Cloud Firestore databases, and device push notification pipelines.",
      "Actively contributed to code reviews, agile daily standups, and collaborative sprint deliveries.",
    ],
    skillsUsed: ["Flutter", "Dart", "Firebase", "State Management", "Git", "Clean Code"],
  },
];
