
import type { ReactNode } from 'react';

export interface Skill {
  name: string;
  icon: ReactNode;
  color?: string;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}
