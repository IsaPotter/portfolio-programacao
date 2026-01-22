import React from 'react';
import { GitHubIcon, LinkedInIcon } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-lg">Isabela Paiva Novais</p>
          <p className="text-slate-400 text-sm">Desenvolvedora Full Stack</p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/IsaPotter"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 rounded-full hover:bg-violet-600 transition-colors duration-300"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://linkedin.com/in/seu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>

        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
