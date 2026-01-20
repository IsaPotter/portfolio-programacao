
import React from 'react';
import type { Project, Skill, Experience } from './types';

// SVG Icons
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="2" />
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
    <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
  </svg>
);

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

export const SKILLS: Skill[] = [
  { name: 'JavaScript', icon: <JSIcon />, color: 'text-yellow-500' },
  { name: 'PHP', icon: <PHPIcon />, color: 'text-indigo-500' },
  { name: 'SQL / PostgreSQL', icon: <SQLIcon />, color: 'text-blue-600' },
  { name: 'Bootstrap', icon: <BootstrapIcon />, color: 'text-purple-600' },
  { name: 'HTML5', icon: <HTMLIcon />, color: 'text-orange-600' },
  { name: 'CSS3', icon: <CSSIcon />, color: 'text-sky-500' },
  { name: 'React', icon: <ReactIcon />, color: 'text-sky-400' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Projeto JES',
    description: 'Site institucional completo para o coletivo Jovens Empreendedores Sustentáveis. Foco em impacto social e sustentabilidade, com arquitetura performática e design responsivo.',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'Tailwind', 'Sustentabilidade'],
    liveUrl: 'https://github.com/IsaPotter/JES',
    repoUrl: 'https://github.com/IsaPotter/JES',
  },
  {
    title: 'Sistema de Gestão PHP',
    description: 'Aplicação robusta desenvolvida em PHP e SQL para controle de inventário e gestão de fluxos internos com autenticação segura.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['PHP', 'SQL', 'Bootstrap', 'JavaScript'],
    liveUrl: '#',
    repoUrl: 'https://github.com/IsaPotter',
  },
  {
    title: 'Landing Page Criativa',
    description: 'Interface moderna focada em conversão, utilizando as melhores práticas de HTML5 semântico e CSS3 avançado (Flexbox/Grid).',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    tags: ['HTML5', 'CSS3', 'UI Design'],
    liveUrl: '#',
    repoUrl: 'https://github.com/IsaPotter',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Desenvolvedora Full Stack Freelance',
    company: 'Projeto JES',
    period: '2023 - Presente',
    description: 'Desenvolvimento de interfaces dinâmicas com JavaScript e integração com bases de dados SQL. Manutenção de sistemas legados em PHP.',
  },
  {
    role: 'Análise e Desenvolvimento de Sistemas',
    company: 'Ensino Superior',
    period: 'Em andamento',
    description: 'Estudo focado em lógica de programação, algoritmos, modelagem de dados SQL e arquitetura de sistemas web.',
  },
];
