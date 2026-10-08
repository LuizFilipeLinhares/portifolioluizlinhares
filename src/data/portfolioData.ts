import { Project, SkillGroup, TimelineEntry, CertificationItem, TccCaseStudy } from '../types/portfolio';
import profilePhoto from '../assets/photo.jpg';
import certPythonImg from '../assets/certPy.png';
import certDockerImg from '../assets/certDocker.png';
import certAiImg from '../assets/certAI.png';

export const PERSONAL_INFO = {
  name: 'Luiz Filipe Linhares',
  shortName: 'Luiz Filipe',
  headline: 'Estudante de Engenharia de Software e desenvolvedor full-stack, com foco em DevOps e automação de testes.',
  shortBio:
    'Desenvolvo aplicações web completas — de interfaces a APIs e infraestrutura de deploy — com atenção especial para qualidade de código, testes automatizados e entregas confiáveis.',
  email: 'linharesluizfilipe@gmail.com',
  github: 'https://github.com/LuizFilipeLinhares',
  linkedin: 'https://www.linkedin.com/in/luiz-filipe-linhares',
  location: 'Criciúma, SC — Brasil',
  degree: 'Engenharia de Software · UniSATC',
  status: 'Aberto a oportunidades em desenvolvimento full-stack e DevOps',
  photoUrl: profilePhoto,
};

export const ABOUT_DETAILS = {
  text: 'Sou estudante de Engenharia de Software na UniSATC (Criciúma/SC) e desenvolvedor full-stack, com experiência construindo aplicações web completas — de interfaces em React/Next.js a APIs, bancos de dados e infraestrutura de deploy. Gosto de pensar no ciclo inteiro de um produto: da primeira tela até o que garante que ele continue funcionando depois — testes automatizados, pipelines de CI/CD e boas práticas de qualidade de código. Também colaboro em projetos de grupo, de refatoração de sistemas legados a gestão de projetos de software do início ao fim.',
  highlights: [
    { label: 'Local', value: 'Criciúma, SC — Brasil' },
    { label: 'Formação', value: 'Engenharia de Software · UniSATC' },
    { label: 'Foco', value: 'Full-stack, DevOps & Testes Automatizados' },
  ],
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend',
    category: 'Frontend',
    subtitle: '',
    skills: [
      { name: 'React', level: 'Prática em Projetos', highlight: true },
      { name: 'Next.js', level: 'Prática em Projetos', highlight: true },
      { name: 'TypeScript', level: 'Prática em Projetos' },
      { name: 'Tailwind CSS', level: 'Prática em Projetos' },
      { name: 'HTML5 / CSS3 / JavaScript', level: 'Base Sólida' },
    ],
  },
  {
    id: 'backend',
    category: 'Backend',
    subtitle: '',
    skills: [
      { name: 'NestJS', level: 'Prática em Projetos', highlight: true },
      { name: 'Node.js', level: 'Prática em Projetos' },
      { name: 'Prisma ORM', level: 'Prática em Projetos' },
      { name: 'PostgreSQL', level: 'Prática em Projetos', highlight: true },
    ],
  },
  {
    id: 'devops',
    category: 'DevOps',
    subtitle: '',
    skills: [
      { name: 'Docker', level: 'Prática em Projetos', highlight: true },
      { name: 'GitHub Actions (CI/CD)', level: 'Prática em Projetos', highlight: true },
      { name: 'Trivy', level: 'Conhecimento Aplicado' },
      { name: 'SonarCloud / SonarQube', level: 'Conhecimento Aplicado' },
    ],
  },
  {
    id: 'quality',
    category: 'Qualidade & Testes',
    subtitle: '',
    skills: [
      { name: 'Selenium WebDriver', level: 'Prática em Projetos', highlight: true },
      { name: 'Jest', level: 'Prática em Projetos' },
      { name: 'Playwright', level: 'Conhecimento Aplicado' },
      { name: 'Git & GitHub', level: 'Prática em Projetos', highlight: true },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'tcc-devops-testes',
    title: 'TCC — DevOps e Eficiência de Testes Automatizados',
    category: 'qa',
    categoryLabel: 'QA & DevOps',
    featured: true,
    shortDescription:
      'Pipeline de CI/CD no GitHub Actions integrando build de imagem Docker, varredura de vulnerabilidades com Trivy, quality gates no SonarCloud e testes funcionais com Selenium em modo headless.',
    problemSolved:
      'Redução de ciclos manuais de homologação e maior confiabilidade dos ambientes de teste através de automação de ponta a ponta.',
    technologies: ['Docker', 'GitHub Actions', 'Trivy', 'SonarCloud', 'Selenium'],
    // TODO: confirme a URL exata do repositório do TCC
    githubUrl: 'https://github.com/LuizFilipeLinhares/tcc-devops-testes',
    liveUrl: '#tcc',
    statusBadge: 'TCC',
    previewGraphic: 'qa_automation',
    fullArchitectureSummary:
      'Esteira de CI/CD disparada a cada push: build da imagem Docker, varredura de vulnerabilidades com Trivy (gate por threshold), testes funcionais automatizados com Selenium e análise de qualidade no SonarCloud.',
    highlights: ['12 testes funcionais passando', '~8s de execução da suíte', '~1min35s de pipeline completo'],
  },
  {
    id: 'pizzaria-bei-giovanni-refactor',
    title: 'Refatoração — Sistema Pizzaria Bei Giovanni',
    category: 'desenvolvimento',
    categoryLabel: 'Desenvolvimento',
    featured: false,
    shortDescription:
      'Refatoração de um sistema full-stack de backoffice para pizzaria, com relatório de análise de code smells e apresentação cobrindo segurança, duplicação de código e problemas de arquitetura.',
    problemSolved:
      'Identificação e priorização de dívidas técnicas (cobertura de testes zerada, tratamento de nulos, duplicação) para orientar o plano de refatoração.',
    technologies: ['React', 'NestJS', 'Prisma', 'Socket.io'],
    // TODO: substitua pela URL real do repositório
    githubUrl: '#',
    statusBadge: 'Projeto em grupo',
    previewGraphic: 'api_backend',
  },
  {
    id: 'sistema-gestao-insumos-agricolas',
    title: 'Sistema de Gestão de Insumos Agrícolas',
    category: 'desenvolvimento',
    categoryLabel: 'Desenvolvimento',
    featured: false,
    shortDescription:
      'Sistema full-stack de 9 meses para produtores rurais, com alertas de estoque, integração com API de clima e gestão de fornecedores — além de artefatos completos de gerenciamento de projeto.',
    problemSolved:
      'Centralização do controle de insumos agrícolas e antecipação de reposição de estoque a partir de alertas automatizados.',
    technologies: ['NestJS', 'Next.js 15', 'Prisma', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Jest', 'Playwright'],
    // TODO: substitua pela URL real do repositório
    githubUrl: '#',
    statusBadge: 'Projeto acadêmico',
    previewGraphic: 'infra_terraform',
  },
];

export const TIMELINE: TimelineEntry[] = [
  {
    id: 'acad-graduacao',
    type: 'academico',
    typeLabel: 'Formação Acadêmica',
    title: 'Engenharia de Software',
    institution: 'UniSATC — Criciúma, SC',
    period: 'Em andamento',
    description:
      'Formação com foco em desenvolvimento full-stack, práticas de DevOps, automação de testes e qualidade de software, aplicadas em projetos práticos ao longo do curso.',
    responsibilities: [
      'Projetos práticos integrando frontend, backend, banco de dados e testes automatizados.',
      'Desenvolvimento do TCC sobre o impacto de práticas DevOps na eficiência da automação de testes.',
      'Colaboração em projetos de grupo, da refatoração de sistemas legados à gestão de projetos.',
    ],
    techStack: ['Full-stack', 'DevOps', 'Testes Automatizados', 'Banco de Dados'],
  },
  {
    id: 'tcc-devops',
    type: 'projeto',
    typeLabel: 'TCC / Pesquisa',
    title: 'O Impacto de Práticas DevOps na Eficiência da Automação de Testes',
    institution: 'UniSATC · orientação do Prof. Dieizon Lemes · coautoria de Mateus Zanin Fernandes',
    period: 'Em andamento',
    description:
      'Pipeline de CI/CD no GitHub Actions combinando build de imagem Docker, varredura de vulnerabilidades com Trivy, quality gates no SonarCloud e testes funcionais com Selenium WebDriver em modo headless.',
    responsibilities: [
      '12 casos de teste funcionais passando a cada execução da esteira.',
      'Pipeline completo em aproximadamente 1 minuto e 35 segundos.',
      'Documentação formatada em template institucional ABNT para a defesa.',
    ],
    techStack: ['Docker', 'GitHub Actions', 'Trivy', 'SonarCloud', 'Selenium'],
  },
  {
    id: 'insumos-agricolas',
    type: 'projeto',
    typeLabel: 'Projeto Acadêmico',
    title: 'Sistema de Gestão de Insumos Agrícolas',
    institution: 'Projeto acadêmico em grupo',
    period: '9 meses',
    description:
      'Sistema full-stack para produtores rurais com alertas de estoque, integração de API de clima e gestão de fornecedores, incluindo tabela PERT, PM Canvas e documentação de projeto completa.',
    responsibilities: [
      'Modelagem de dados e desenvolvimento full-stack com NestJS, Next.js e Prisma.',
      'Esteira de CI/CD com GitHub Actions, testes com Jest e Playwright.',
      'Elaboração de artefatos de gestão de projeto (PERT, PM Canvas).',
    ],
    techStack: ['NestJS', 'Next.js', 'Prisma', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'pizzaria-refactor',
    type: 'projeto',
    typeLabel: 'Projeto Acadêmico',
    title: 'Refatoração — Sistema Pizzaria Bei Giovanni',
    institution: 'Projeto acadêmico em grupo',
    period: '',
    description:
      'Análise e refatoração de um sistema full-stack de backoffice, com relatório de code smells e apresentação cobrindo segurança, qualidade e arquitetura.',
    responsibilities: [
      'Relatório de análise de code smells e mapa mental das dívidas técnicas.',
      'Apresentação cobrindo segurança, tratamento de nulos, duplicação de código e cobertura de testes.',
    ],
    techStack: ['React', 'NestJS', 'Prisma', 'Socket.io'],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-python-cisco',
    title: 'Python Essentials',
    issuer: 'Cisco Networking Academy',
    date: '02/2026',
    area: 'Desenvolvimento',
    description:
      'Design, desenvolvimento, depuração, execução e refatoração de programas simples em Python 3.',
    imageUrl: certPythonImg,
  },
  {
    id: 'cert-docker-udemy',
    title: 'Docker do Zero ao Avançado',
    issuer: 'Udemy',
    date: '02/2025',
    area: 'DevOps & Cloud',
    description:
      'Criação e otimização de containers, do zero ao avançado, incluindo boas práticas com Linux Alpine.',
    certificateCode: 'UC-5ebdb045-85ec-43bf-ab33-1cde62e48ec5',
    verificationUrl: 'https://ude.my/UC-5ebdb045-85ec-43bf-ab33-1cde62e48ec5',
    imageUrl: certDockerImg,
  },
  {
    id: 'cert-ai-ibm',
    title: 'AI Fundamentals: Language and Vision in AI',
    issuer: 'IBM SkillsBuild',
    date: '09/2026',
    area: 'Inteligência Artificial',
    description:
      'Fundamentos de Inteligência Artificial aplicados a processamento de linguagem natural (NLP) e visão computacional.',
    verificationUrl: 'https://www.credly.com/go/7ir7r0QT',
    imageUrl: certAiImg,
  },
];

export const TCC_CASE_STUDY: TccCaseStudy = {
  title: 'O Impacto de Práticas DevOps na Eficiência da Automação de Testes',
  subtitle: 'Trabalho de Conclusão de Curso em Engenharia de Software · UniSATC',
  status: 'Em desenvolvimento — fase de redação e defesa',
  problem:
    'Ciclos de teste manuais e ambientes inconsistentes aumentam o tempo de homologação e a chance de falhas passarem despercebidas até a produção.',
  approach:
    'Construção de uma esteira de CI/CD no GitHub Actions que integra build de imagem Docker, varredura de vulnerabilidades com Trivy, análise estática de qualidade com SonarCloud e testes funcionais automatizados com Selenium WebDriver em modo headless — disparada a cada push.',
  technologies: [
    { name: 'Docker', role: 'Containerização da aplicação e do ambiente de testes' },
    { name: 'GitHub Actions', role: 'Orquestração da esteira de CI/CD' },
    { name: 'Trivy', role: 'Varredura de vulnerabilidades com gate por threshold' },
    { name: 'SonarCloud', role: 'Análise estática de código e quality gates' },
    { name: 'Selenium WebDriver', role: 'Testes funcionais automatizados em modo headless' },
  ],
  architectureSteps: [
    { number: '01', title: 'Build', description: 'Build da imagem Docker da aplicação a cada push.', tech: 'Docker' },
    { number: '02', title: 'Scan', description: 'Varredura de vulnerabilidades com Trivy, com gate por threshold.', tech: 'Trivy' },
    { number: '03', title: 'Test', description: 'Execução da suíte de testes funcionais com Selenium em modo headless.', tech: 'Selenium' },
    { number: '04', title: 'Quality Gate', description: 'Análise estática de código e cobertura via SonarCloud.', tech: 'SonarCloud' },
  ],
  keyIndicators: [
    { metric: '12', label: 'testes passando', explanation: 'Casos de teste funcionais executados automaticamente a cada push.' },
    { metric: '~8s', label: 'execução dos testes', explanation: 'Tempo de execução da suíte completa de testes com Selenium.' },
    { metric: '~1min35s', label: 'pipeline completo', explanation: 'Tempo total do pipeline, do build ao relatório de qualidade.' },
  ],
  conclusionNote: 'Coautoria com Mateus Zanin Fernandes, sob orientação do Prof. Dieizon Lemes.',
};
