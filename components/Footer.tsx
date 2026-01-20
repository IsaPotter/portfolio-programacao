import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-6">
      <div className="container mx-auto px-6 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} Isabela Paiva Novais. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;