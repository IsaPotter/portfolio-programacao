
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const handleCTAClick = (targetId: string) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-white pt-20">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-violet-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-violet-600 font-bold tracking-widest uppercase text-sm mb-4">Desenvolvedora Full Stack</h2>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6">
              Isabela <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">Novais</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              Transformando ideias em soluções digitais elegantes e eficientes. Especialista em construir experiências web modernas com foco em performance e escalabilidade.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => handleCTAClick('projects')}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-2xl shadow-xl shadow-slate-200 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
              >
                Ver Projetos
              </button>
              <button
                onClick={() => handleCTAClick('contact')} 
                className="bg-white border-2 border-slate-200 hover:border-violet-500 hover:text-violet-600 text-slate-700 font-bold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
              >
                Vamos Conversar
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 bg-violet-50 border-8 border-white">
               <img 
                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                 alt="Portrait" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
            {/* Abstract decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-violet-200 rounded-2xl -rotate-12 z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border-4 border-slate-100 rounded-full z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
