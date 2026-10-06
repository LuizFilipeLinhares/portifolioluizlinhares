export type ProjectCategory = 'todos' | 'desenvolvimento' | 'dados' | 'qa' | 'devops';

export interface Project {
  id: string;
  title: string;
  category: 'desenvolvimento' | 'dados' | 'qa' | 'devops';
  categoryLabel: string;
  shortDescription: string;
  problemSolved: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  statusBadge?: string;
  previewGraphic: 'ci_cd_pipeline' | 'api_backend' | 'data_pipeline' | 'qa_automation' | 'infra_terraform';
  fullArchitectureSummary?: string;
  highlights?: string[];
}

export type SkillLevel = 'Prática em Projetos' | 'Base Sólida' | 'Conhecimento Aplicado' | 'Em Aprofundamento';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  highlight?: boolean;
}

export interface SkillGroup {
  id: string;
  category: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface TimelineEntry {
  id: string;
  type: 'experiencia' | 'academico' | 'projeto' | 'curso';
  typeLabel: string;
  title: string;
  institution: string;
  period: string;
  status?: string;
  description: string;
  responsibilities: string[];
  techStack?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  area: 'Desenvolvimento' | 'DevOps & Cloud' | 'Dados' | 'Qualidade de Software' | 'Fundamentos TI';
  verificationUrl?: string;
  certificateCode?: string;
  description?: string;
}

export interface TccCaseStudy {
  title: string;
  subtitle: string;
  status: string;
  problem: string;
  approach: string;
  technologies: {
    name: string;
    role: string;
  }[];
  architectureSteps: {
    number: string;
    title: string;
    description: string;
    tech: string;
  }[];
  keyIndicators: {
    metric: string;
    label: string;
    explanation: string;
  }[];
  conclusionNote: string;
}
