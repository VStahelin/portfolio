export interface DataContextType {
  portfolio: Portfolio | null;
  loading: boolean;
  error: Error | null;
}

export interface Portfolio {
  about_me: AboutMe;
  professional_experience: ProfessionalExperience[];
  projects: Project[];
  stacks: Stack[];
}

export interface AboutMe {
  name: string;
  title: string;
  profile_photo_url: string;
  summary: string;
  short_summary: string;
  contact: Contact;
  certifications: Certification[];
  education: Education[];
  soft_skills: string[];
  stack_proficiency: StackProficiency[];
}

export interface StackProficiency {
  name: string;
  level: string;
  years: number;
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface Certification {
  name: string;
  key_words: string[];
  link: string;
  date: string;
}

export interface Education {
  degree: string;
  institution: string;
  status?: string;
  graduation_date: string;
}

export interface ProfessionalExperience {
  title: string;
  company: string;
  location: string;
  dates: string;
  responsibilities: string[];
  tags: string[];
  profile_photo_url: string;
}

export interface Project {
  order_id: number;
  name: string;
  dates: string;
  description: string;
  responsibilities?: string[];
  technologies?: string[];
  instagram?: string | null;
  github?: string | null;
  tags?: string[];
  project_url?: string | null;
  thumbnail: string;
}

export interface ProjectSectionProps {
  id: number;
  title: string;
  tags: string[];
  description: string;
  thumbnail: string;
  project_url: string;
  order_id: number;
}

export interface Stack {
  name: string;
  years: number;
  level: string;
}
