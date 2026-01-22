import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight">Sobre Mim</h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
            Olá! Sou <span className="text-violet-600 font-bold">Isabela Paiva Novais</span>, uma desenvolvedora apaixonada por transformar problemas complexos em soluções digitais elegantes. 
            Com foco em desenvolvimento Full Stack, combino criatividade e lógica para construir aplicações web modernas e performáticas.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Atualmente, dedico meus estudos e projetos ao ecossistema JavaScript (React, Node.js), sempre buscando as melhores práticas de código e arquitetura. 
            Meu objetivo é criar impacto positivo através da tecnologia, entregando produtos que unem funcionalidade e excelente experiência do usuário.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;