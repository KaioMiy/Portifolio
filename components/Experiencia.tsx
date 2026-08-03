"use client";

import React from "react";

function BriefcaseIcon() {
  return (
    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  );
}

export default function Experiencia() {
  const experiencias = [
    {
      id: 1,
      cargo: "Estagiário de\nSuporte de TI",
      periodo: "2023 - 2024",
      logo: "/xp/prefeitura.png", 
      logoClass: "h-10 lg:h-12 w-auto object-contain",
      descricao: "Suporte técnico de TI para toda a infraestrutura da Prefeitura, garantindo a estabilidade operacional e o atendimento ágil a diversos setores do município.",
      tecnologias: ["Infraestrutura", "Suporte", "Redes", "Hardware"],
      atual: false
    },
    {
      id: 2,
      cargo: "Desenvolvedor\nFront-End",
      periodo: "2025 - 2026",
      logo: "/xp/lynqy.svg",
      logoClass: "h-6 lg:h-8 w-auto object-contain",
      descricao: "Desenvolvimento de todas as telas do software da plataforma. Trabalho focado na componentização da interface, garantindo alta performance e responsividade.",
      tecnologias: ["Next.js", "React", "Node.js", "Tailwind"],
      atual: false
    },
    {
      id: 3,
      cargo: "Profissional de TI\ne Suporte",
      periodo: "2024 - Presente",
      logo: "/xp/prefeitura.png", 
      logoClass: "h-10 lg:h-12 w-auto object-contain",
      descricao: "Atuação prestando suporte de TI e também no desenvolvimento independente de softwares, criando arquiteturas escaláveis e integradas com IA.",
      tecnologias: ["Next.js", "Python", "API Gemini", "Firebase"],
      atual: true
    }
  ];

  return (
    <section 
      id="experiencia" 
      className="w-full py-24 px-6 md:px-12 bg-[#050505] relative z-10 border-t border-white/5 overflow-hidden"
    >
      {/* Estilo injetado para a animação de respirar até 0 de opacidade */}
      <style>{`
        @keyframes breathe-zero {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 0; transform: scale(1.1); }
        }
        .animate-breathe-zero {
          animation: breathe-zero 3s ease-in-out infinite;
        }
      `}</style>

      {/* Grid Invertido: Aparece no centro e some nas bordas */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Cabeçalho Limpo */}
        <div className="mb-16 md:mb-24 text-center">
          <p className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">
            Carreira
          </p>
          <h2 className="font-title text-4xl md:text-5xl font-bold text-gray-100">
            Minha Jornada Profissional
          </h2>
          {/* NOVA FRASE AQUI */}
          <p className="text-gray-400 mt-4 text-base md:text-lg max-w-2xl mx-auto">
            Uma visão geral das minhas experiências, desde o suporte e infraestrutura até o desenvolvimento de soluções escaláveis e interfaces de alta performance.
          </p>
        </div>

        {/* --- LAYOUT MOBILE (Linha Vertical) --- */}
        <div className="md:hidden relative border-l border-blue-500/30 ml-4 space-y-12">
          {experiencias.map((exp) => (
            <div key={exp.id} className="relative pl-8">
              
              {/* Pin Mobile */}
              <div className="absolute -left-[21px] top-1 flex items-center justify-center z-10">
                {/* Anel de respiração (se for atual) */}
                {exp.atual && (
                  <div className="absolute -inset-2 bg-blue-500 rounded-full animate-breathe-zero blur-[2px]"></div>
                )}
                {/* Pin central estático */}
                <div className={`relative h-10 w-10 border-2 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(37,99,235,0.4)] ${exp.atual ? 'bg-blue-600 border-blue-300' : 'bg-[#0A0A0A] border-blue-500'}`}>
                  <BriefcaseIcon />
                </div>
              </div>

              {/* Card Mobile */}
              <div className={`bg-[#111111] p-6 rounded-2xl border transition-colors duration-300 hover:border-blue-500/60 ${exp.atual ? 'border-blue-500/30' : 'border-white/5'}`}>
                
                {/* Logo na ESQUERDA, Texto na DIREITA */}
                <div className="flex items-center gap-4 mb-5">
                  <img src={exp.logo} className={`${exp.logoClass} shrink-0`} onError={(e) => e.currentTarget.style.opacity = '0'} />
                  <div>
                    <h3 className="font-bold text-gray-100 text-lg leading-tight mb-1">
                      {exp.cargo.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}<br/>
                        </React.Fragment>
                      ))}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide border ${exp.atual ? 'bg-blue-500/20 text-blue-400 border-blue-500/40' : 'bg-white/5 text-gray-400 border-white/10'}`}>
                    {exp.periodo}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {exp.descricao}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tecnologias.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- LAYOUT DESKTOP (Timeline Horizontal em Zigue-Zague) --- */}
        <div className="hidden md:grid grid-cols-3 grid-rows-[1fr_1fr] gap-x-6 relative w-full">
          
          {/* Linha Central Horizontal */}
          <div className="absolute top-1/2 -left-12 -right-12 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent -translate-y-1/2 z-0" />

          {experiencias.map((exp, idx) => {
            const isTop = idx % 2 === 0; 
            const colStartClass = idx === 0 ? "col-start-1" : idx === 1 ? "col-start-2" : "col-start-3";
            const rowStartClass = isTop ? "row-start-1 justify-end pb-8" : "row-start-2 justify-start pt-8";

            return (
              <div key={exp.id} className={`relative flex flex-col h-full w-full ${colStartClass} ${rowStartClass}`}>
                
                {/* Conjunto do Pin (Estático + Aura Respirando) */}
                <div className={`absolute ${isTop ? '-bottom-3' : '-top-3'} left-1/2 -translate-x-1/2 flex items-center justify-center z-10`}>
                  
                  {/* Aura (Anel externo de respiração) só aparece no Atual */}
                  {exp.atual && (
                    <div className="absolute -inset-2 bg-blue-500 rounded-full animate-breathe-zero blur-[2px]"></div>
                  )}
                  
                  {/* Pin Central (Fixo) */}
                  <div className={`relative w-6 h-6 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)] ${exp.atual ? 'bg-blue-500 border-2 border-blue-200' : 'bg-[#050505] border-4 border-blue-500'}`}>
                     {/* Pontinho branco central extra para o atual */}
                     {exp.atual && <div className="absolute inset-0 m-auto w-2 h-2 bg-white rounded-full"></div>}
                  </div>

                </div>
                
                {/* Haste */}
                <div className={`absolute ${isTop ? 'bottom-0' : 'top-0'} left-1/2 -translate-x-1/2 w-[2px] h-8 bg-gradient-to-b ${isTop ? 'from-transparent to-blue-500/40' : 'from-blue-500/40 to-transparent'} z-0`} />

                {/* Card de Experiência */}
                <div className={`bg-[#111111] p-6 lg:p-8 rounded-2xl border transition-colors duration-300 hover:border-blue-500/60 w-full relative z-20 shadow-xl ${exp.atual ? 'border-blue-500/30' : 'border-white/5'}`}>
                  
                  {/* Logo na ESQUERDA, Texto na DIREITA */}
                  <div className="flex items-center gap-5 mb-5">
                    <img src={exp.logo} className={`${exp.logoClass} shrink-0`} onError={(e) => e.currentTarget.style.opacity = '0'} />
                    <div>
                      <h3 className="font-bold text-gray-100 text-lg leading-tight mb-1">
                        {exp.cargo.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}<br/>
                          </React.Fragment>
                        ))}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-5">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide border ${exp.atual ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' : 'bg-white/5 text-gray-400 border-white/10'}`}>
                      {exp.periodo}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {exp.descricao}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tecnologias.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-[11px] font-semibold text-gray-400 bg-white/5 rounded-md border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}