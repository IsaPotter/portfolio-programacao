import type { Experience, Project, Skill } from './types';

// SVG Icons
const JSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M3 3h18v18H3V3zm16.525 13.84c0-1.213-.733-1.893-1.893-2.387l-.547-.227c-.453-.187-.64-.32-.64-.56 0-.213.173-.373.48-.373.306 0 .506.133.68.373l1.12-.72c-.32-.507-.853-.88-1.706-.88-1.107 0-1.84.707-1.84 1.707 0 1.04.627 1.627 1.547 2.013l.547.227c.546.226.773.413.773.706 0 .32-.294.507-.68.507-.44 0-.76-.24-.987-.6l-1.133.693c.36.653 1.053 1.04 2.12 1.04 1.253 0 1.947-.64 1.947-1.773zM12.44 18l1.133-.693c-.227-.36-.453-.6-.827-.6-.36 0-.546.16-.546.613V18h-1.44v-4.747h1.44v.693c.253-.467.72-.813 1.453-.813 1.253 0 1.747.88 1.747 1.84V18H12.44z" />
  </svg>
);

const PHPIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="12" rx="10" ry="6" />
    <path d="M9 9v6M9 12h3M15 9v6M12 9v3" />
  </svg>
);

const SQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const HTMLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 2l1.5 17L12 22l6.5-3L20 2H4z" />
    <path d="M12 15.5l-3.5-1V12h3V9H8.5L8 6h7.5l-.5 8.5-3 1z" />
  </svg>
);

const CSSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 2l1.5 17L12 22l6.5-3L20 2H4z" />
    <path d="M8.5 8h7l-1 7h-5l.5 2 2 .5 2-.5.5-2" />
  </svg>
);

const BootstrapIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M14 12c1.1 0 2-.9 2-2s-.9-2-2-2h-4v4h4zm0 2h-4v4h4c1.1 0 2-.9 2-2s-.9-2-2-2zm-6-8h6c2.21 0 4 1.79 4 4s-1.79 4-4 4h-2v4h-4V6z" />
  </svg>
);

export const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const SKILLS: Skill[] = [
  { name: 'JavaScript', icon: <JSIcon />, color: 'text-yellow-500' },
  { name: 'PHP', icon: <PHPIcon />, color: 'text-indigo-500' },
  { name: 'SQL / MYSQL', icon: <SQLIcon />, color: 'text-blue-600' },
  { name: 'Bootstrap', icon: <BootstrapIcon />, color: 'text-purple-600' },
  { name: 'HTML5', icon: <HTMLIcon />, color: 'text-orange-600' },
  { name: 'CSS3', icon: <CSSIcon />, color: 'text-sky-500' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Site Pizzaria',
    description:
      'Sistema web completo para pizzaria com cardápio interativo e gestão de pedidos. Interface moderna e responsiva focada na experiência do usuário.',
    imageUrl: '',
    tags: ['PHP', 'JavaScript', 'Bootstrap', 'HTML', 'CSS'],
    liveUrl: 'https://github.com/IsaPotter/site',
    repoUrl: 'https://github.com/IsaPotter/site',
  },
  {
    title: 'Quiz Java',
    description:
      'Aplicação de perguntas e respostas desenvolvida em Java, focada em lógica de programação e conceitos de Orientação a Objetos.',
    imageUrl: '',
    tags: ['Java'],
    liveUrl: 'https://github.com/IsaPotter/QUIZ',
    repoUrl: 'https://github.com/IsaPotter/QUIZ',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Desenvolvedora Full Stack Freelance',
    company: 'Projeto JES',
    period: '2023 - Presente',
    description:
      'Desenvolvimento de interfaces dinâmicas com JavaScript e integração com bases de dados SQL. Manutenção de sistemas legados em PHP.',
  },
  {
    role: 'Análise e Desenvolvimento de Sistemas',
    company: 'Ensino Superior',
    period: 'Em andamento',
    description:
      'Estudo focado em lógica de programação, algoritmos, modelagem de dados SQL e arquitetura de sistemas web.',
  },
];

export const NAV_LINKS = [
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Contato', href: '#contact' },
];
