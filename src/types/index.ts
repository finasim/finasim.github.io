export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: "product" | "case-study";
  typeLabels?: string[];
  version?: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
  stack: string[];
  featured?: boolean;
  liveUrl?: string;
  liveLabel?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  yearsExperience: number;
  summary: string;
  resumeUrl: string;
}
