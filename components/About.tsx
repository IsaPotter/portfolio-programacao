
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
                alt="Workspace"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            {/* Decals */}
            <div className="absolute -bottom-10 -right-10 bg-violet-600 text-white p-8 rounded-3xl shadow-2xl z-20 max-w-[200px] hidden sm:block">
               <p className="text-4xl font-black mb-1">02+</p>
               <p className="text-sm font-bold opacity-80 uppercase tracking-tighter">Anos de Experiência</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-violet-600 font-bold tracking-widest uppercase text-sm mb-4">Minha História</h2>
            <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
              Desenvolvedora apaixonada por <br /> <span className="text-violet-600">tecnologia e inovação.</span>
            </h3>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              Sou Desenvolvedora Full Stack com foco em criar soluções que não apenas funcionam, mas encantam. Atualmente cursando Análise e Desenvolvimento de Sistemas, mergulho diariamente no ecossistema de JavaScript e TypeScript para entregar o melhor do front e backend.
            </p>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              Minha experiência com o **Projeto JES** me permitiu entender a importância de unir performance técnica com propósito social. Reduzi o tempo de carregamento em 40%, provando que eficiência e usabilidade devem andar juntas.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="font-black text-slate-900">Localização</p>
                <p className="text-slate-500 text-sm">Brasil</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="font-black text-slate-900">Educação</p>
                <p className="text-slate-500 text-sm">ADS</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
