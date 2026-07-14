import type { NavItem, SocialLink, SkillGroup, Project, Experience, Certificate, TimelineItem } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com', icon: 'FaGithub' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'FaLinkedin' },
  { label: 'Email', href: 'mailto:hello@example.com', icon: 'FaEnvelope' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'backend',
    label: 'Backend',
    skills: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core', 'MediatR', 'Clean Architecture', 'CQRS', 'REST APIs', 'JWT Authentication'],
  },
  {
    category: 'frontend',
    label: 'Frontend',
    skills: ['React', 'React Native', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'database',
    label: 'Database',
    skills: ['PostgreSQL', 'SQL Server', 'MySQL'],
  },
  {
    category: 'cloud',
    label: 'Cloud & DevOps',
    skills: ['Git', 'GitHub', 'Linux', 'Nginx', 'Docker (Learning)'],
  },
  {
    category: 'tools',
    label: 'Tools',
    skills: ['Visual Studio', 'VS Code', 'Postman', 'Figma', 'Penpot'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'baby-tracker',
    title: 'Baby Tracker & Family Care Companion',
    description: 'A modern mobile application that helps families track baby activities including feeding, sleeping, diaper changes, growth milestones, reminders, tasks, chat, and memories.',
    longDescription: 'A comprehensive family care solution built with a robust ASP.NET Core backend and a sleek React Native frontend. Features real-time communication via SignalR, secure JWT authentication, and a clean architecture that ensures maintainability and scalability. The app helps parents track every aspect of their baby\'s daily routine while providing powerful insights through data visualization.',
    image: '',
    technologies: ['ASP.NET Core Web API', 'PostgreSQL', 'React Native', 'Expo', 'TypeScript', 'SignalR', 'JWT Authentication', 'Clean Architecture', 'CQRS', 'MediatR'],
    category: 'mobile',
    featured: true,
    githubUrl: 'https://github.com',
    highlights: [
      'Real-time family sync with SignalR WebSockets',
      'Clean Architecture with CQRS and MediatR patterns',
      'Secure JWT-based authentication and authorization',
      'Cross-platform mobile app with React Native and Expo',
      'Comprehensive tracking for feeding, sleep, diapers, and milestones',
    ],
  },
  {
    id: 'travel-explorer',
    title: 'Travel Explorer',
    description: 'A cross-platform travel application that allows users to explore countries, weather, attractions, and travel information using public APIs.',
    longDescription: 'Travel Explorer is a feature-rich cross-platform application that aggregates data from multiple public APIs to provide travelers with comprehensive destination information. Users can browse countries, check real-time weather, discover popular attractions, and plan their trips with detailed travel guides.',
    image: '',
    technologies: ['React Native', 'Expo', 'TypeScript', 'REST APIs', 'ASP.NET Core'],
    category: 'mobile',
    featured: true,
    githubUrl: 'https://github.com',
    highlights: [
      'Aggregates data from multiple public travel APIs',
      'Real-time weather integration for destinations',
      'Intuitive cross-platform UI with React Native',
      'Comprehensive country and attraction information',
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    company: 'Tech Company',
    role: 'Software Engineer',
    period: '2023 — Present',
    description: 'Building and maintaining scalable backend services and APIs using .NET and cloud technologies.',
    technologies: ['C#', '.NET', 'ASP.NET Core', 'PostgreSQL', 'Docker'],
    highlights: [
      'Designed and implemented RESTful APIs serving 100k+ daily requests',
      'Improved system performance by 40% through query optimization',
      'Led migration from monolithic to microservices architecture',
    ],
  },
  {
    id: 'exp-2',
    company: 'Previous Company',
    role: 'Junior Software Engineer',
    period: '2021 — 2023',
    description: 'Developed full-stack applications and contributed to team projects in an agile environment.',
    technologies: ['React', 'TypeScript', '.NET', 'SQL Server'],
    highlights: [
      'Built responsive web applications using React and TypeScript',
      'Developed backend services with .NET and Entity Framework',
      'Collaborated in an agile team of 6 engineers',
    ],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert-1',
    title: 'ASP.NET Core Advanced Development',
    issuer: 'Microsoft',
    date: '2024',
  },
  {
    id: 'cert-2',
    title: 'React Native Mobile Development',
    issuer: 'Meta',
    date: '2024',
  },
  {
    id: 'cert-3',
    title: 'Clean Architecture & CQRS Patterns',
    issuer: 'Udemy',
    date: '2023',
  },
  {
    id: 'cert-4',
    title: 'PostgreSQL Performance Tuning',
    issuer: 'Coursera',
    date: '2023',
  },
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'tl-1',
    title: 'Software Engineer',
    organization: 'Tech Company',
    period: '2023 — Present',
    description: 'Building scalable backend services and APIs.',
    type: 'work',
  },
  {
    id: 'tl-2',
    title: 'Junior Software Engineer',
    organization: 'Previous Company',
    period: '2021 — 2023',
    description: 'Full-stack development in an agile team.',
    type: 'work',
  },
  {
    id: 'tl-3',
    title: 'Computer Science Degree',
    organization: 'University',
    period: '2018 — 2022',
    description: 'Bachelor\'s degree in Computer Science with focus on software engineering.',
    type: 'education',
  },
];

export const GITHUB_STATS = {
  username: 'software-engineer',
  totalRepos: 32,
  totalStars: 128,
  followers: 85,
  contributions: 847,
  topLanguages: [
    { name: 'C#', percentage: 45, color: '#178600' },
    { name: 'TypeScript', percentage: 30, color: '#3178C6' },
    { name: 'JavaScript', percentage: 12, color: '#F7DF1E' },
    { name: 'SQL', percentage: 8, color: '#E38C00' },
    { name: 'Other', percentage: 5, color: '#8B8B8B' },
  ],
};

export const HERO_CONTENT = {
  name: 'Kitt Kariel Sanchez',
  title: 'Software Engineer',
  description: 'Passionate software engineer specializing in .NET and modern web technologies. I craft robust, performant APIs and scalable systems that power exceptional user experiences.',
};
