export interface DataContextType {
  portifolio: Portifolio | null;
  loading: boolean;
  error: Error | null;
}

export interface Portifolio {
  about_me: AboutMe;
  professional_experience: ProfessionalExperience[];
  projects: Project[];
  stacks: Stack[];
}

export interface AboutMe {
  name: string;
  title: string;
  summary: string;
  contact: Contact;
  certifications: Certification[];
  education: Education[];
  soft_skills: string[];
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
  key_words: string[];
}

export interface Project {
  name: string;
  dates: string;
  description: string;
  responsibilities?: string[];
  technologies?: string[];
  instagram?: string | null;
  github?: string | null;
  key_words?: string[] | null;
}

export interface Stack {
  name: string;
  years: number;
  level: string;
}
