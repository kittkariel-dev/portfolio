export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  category: 'backend' | 'frontend' | 'fullstack' | 'mobile';
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  highlights?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
}

export type SkillCategory = 'backend' | 'frontend' | 'database' | 'cloud' | 'tools';

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  skills: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
  image?: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'work' | 'education' | 'certification';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export type Theme = 'dark' | 'light';
