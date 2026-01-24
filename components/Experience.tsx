import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Jornada Profissional</h2>
          <div className="w-20 h-1.5 bg-violet-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-slate-200 ml-4 md:ml-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute -left-[11px] top-0 w-5 h-5 bg-violet-500 rounded-full border-4 border-white shadow-sm"></div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-sm font-bold text-violet-500 uppercase tracking-wider">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">{exp.role}</h3>
                <p className="text-slate-600 font-medium">{exp.company}</p>
                <p className="text-slate-500 mt-3 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
