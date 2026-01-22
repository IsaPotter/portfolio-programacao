import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      // Substitua o código abaixo pelo seu ID do Formspree
      const response = await fetch('https://formspree.io/f/SEU_CODIGO_AQUI', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto bg-green-50 p-8 rounded-3xl border border-green-100">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Mensagem enviada! 🎉</h3>
            <p className="text-green-700">Obrigada pelo contato. Responderei o mais breve possível.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-6 text-green-600 font-bold hover:text-green-800 underline"
            >
              Enviar nova mensagem
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">Vamos conversar?</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tem um projeto em mente ou quer apenas dar um oi? Preencha o formulário abaixo.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-slate-50 p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all bg-white"
                placeholder="Seu nome"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all bg-white"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Mensagem</label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all bg-white resize-none"
                placeholder="Como posso te ajudar?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-slate-900 text-white font-bold py-4 px-8 rounded-xl hover:bg-violet-600 transition-all transform hover:-translate-y-1 shadow-lg shadow-slate-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
            </button>

            {status === 'error' && (
              <p className="text-red-500 text-center text-sm font-bold mt-4">
                Ocorreu um erro ao enviar. Por favor, tente novamente.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;