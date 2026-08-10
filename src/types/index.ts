export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  badgeImage?: string;
  /** Small disclosure caption shown under the badge, e.g. for an AI-generated logo. */
  note?: string;
  /** 0-100. When set, the badge renders blurred with a circular progress overlay (not yet earned). */
  progress?: number;
}

export interface AgentblazerBadge {
  name: string;
  description: string;
  badgeImage: string;
  /** 0-100. When set, the badge renders blurred with a circular progress overlay (not yet earned). */
  progress?: number;
}

export interface Project {
  slug: string;
  title: string;
  /** BCP-47 tag when the title isn't English, e.g. "bn". Used for screen readers. */
  titleLang?: string;
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
