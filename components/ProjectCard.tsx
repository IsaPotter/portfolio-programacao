
import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, imageUrl, tags, liveUrl, repoUrl } = project;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-violet-200/50 transition-all duration-500 flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
           <div className="flex gap-3">
             {liveUrl && (
               <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full text-slate-900 hover:bg-violet-500 hover:text-white transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
               </a>
             )}
             {repoUrl && (
               <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full text-slate-900 hover:bg-violet-500 hover:text-white transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
               </a>
             )}
           </div>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-violet-50 text-violet-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-violet-100">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-violet-600 transition-colors">{title}</h3>
        <p className="text-slate-500 leading-relaxed mb-6 flex-grow">{description}</p>
        
        <div className="pt-6 border-t border-slate-50 mt-auto">
          <a href={liveUrl} className="inline-flex items-center text-slate-900 font-black text-sm uppercase tracking-wider group/link">
            Ver detalhes 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover/link:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
