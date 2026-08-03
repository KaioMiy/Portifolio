"use client";

import { useState, useEffect } from "react";

function MenuIcon() {
  return (
    <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ordem invertida: Certificados agora vem antes de Experiência
  const navLinks = [
    { name: "Início", href: "#inicio" }, 
    { name: "Tecnologias", href: "#tecnologias" },
    { name: "Projetos", href: "#projetos" },
    { name: "Certificados", href: "#certificados" },
    { name: "Experiência", href: "#experiencia" },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); 
    
    const element = document.querySelector(href);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80; 
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b ${
        isScrolled 
          ? "bg-[#050505]/85 backdrop-blur-md border-white/10 shadow-lg" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-20" : "h-24"}`}>
        
        {/* Logo */}
        <a 
          href="#inicio" 
          onClick={(e) => handleScrollToSection(e, "#inicio")}
          className="text-xl md:text-2xl font-bold font-title text-white tracking-wide flex items-center gap-2 group"
        >
          <span className="text-blue-500 group-hover:text-blue-400 transition-colors">&lt;</span>
          Kaio<span className="text-gray-400">.Dev</span>
          <span className="text-blue-500 group-hover:text-blue-400 transition-colors">/&gt;</span>
        </a>

        {/* Links Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <a 
            href="#contato"
            onClick={(e) => handleScrollToSection(e, "#contato")}
            className="ml-4 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]"
          >
            Fale Comigo
          </a>
        </nav>

        {/* Botão Menu Mobile */}
        <button 
          className="md:hidden p-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Dropdown Menu Mobile */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#0A0A0A] border-b border-white/10 overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-[350px] py-4" : "max-h-0 py-0 border-transparent"
        }`}
      >
        <div className="flex flex-col px-6 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="text-base font-medium text-gray-400 hover:text-white transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato"
            onClick={(e) => handleScrollToSection(e, "#contato")}
            className="mt-2 w-full text-center px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all duration-300"
          >
            Fale Comigo
          </a>
        </div>
      </div>
    </header>
  );
}