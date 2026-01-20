
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: 'about', label: 'Sobre' },
    { href: 'skills', label: 'Habilidades' },
    { href: 'experience', label: 'Jornada' },
    { href: 'projects', label: 'Projetos' },
    { href: 'contact', label: 'Contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled 
      ? 'py-4' 
      : 'py-8'
    }`}>
      <div className="container mx-auto px-6">
        <div className={`flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500 ${
          isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border border-white/20' 
          : 'bg-transparent'
        }`}>
          <a href="#" className="text-2xl font-black text-slate-900 group">
            ISABELA<span className="text-violet-500 group-hover:animate-ping inline-block ml-0.5">.</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-slate-600 hover:text-violet-600 transition-all duration-300 font-bold text-sm rounded-full hover:bg-violet-50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a 
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="hidden sm:block bg-violet-600 hover:bg-violet-700 text-white text-xs font-black uppercase tracking-widest px-6 py-3 rounded-full transition-all active:scale-95 shadow-lg shadow-violet-200"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
