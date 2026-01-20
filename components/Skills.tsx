
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import type { Skill } from '../types';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <motion.div 
    whileHover={{ y: -8, scale: 1.02 }}
    className="group bg-white p-8 rounded-3xl border border-slate-100 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:border-violet-100"
  >
    <div className={`p-4 rounded-2xl bg-slate-50 group-hover:bg-white transition-colors duration-300 ${skill.color}`}>
      {skill.icon}
    </div>
    <h3 className="mt-4 text-sm font-bold text-slate-700 tracking-tight uppercase">{skill.name}</h3>
  </motion.div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Stack Tecnológica</h2>
          <div className="w-20 h-1.5 bg-violet-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-500 mt-6 text-lg max-w-2xl mx-auto">
            Ferramentas e tecnologias que utilizo para dar vida a projetos desafiadores.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
