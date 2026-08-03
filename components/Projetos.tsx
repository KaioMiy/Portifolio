"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";

// --- ÍCONES SVG PUROS ---
function GithubIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}

function LockIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

// --- TIPAGEM ---
type Projeto = {
  id: number;
  titulo: string;
  descricao: string;
  tecnologias: string[];
  linkProjeto: string;
  linkGithub: string;
  galeria: string[]; 
};

// --- VARIANTES DE ANIMAÇÃO ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function Projetos() {
  const [projetoAberto, setProjetoAberto] = useState<Projeto | null>(null);
  const [imagemAtual, setImagemAtual] = useState(0);

  // --- LISTA DE PROJETOS ---
  const projetos: Projeto[] = [
    {
      id: 1,
      titulo: "Agrow",
      descricao: "Atuei no desenvolvimento Full Stack desta solução IoT escalável voltada para a gestão e inovação no agronegócio, integrando hardware e software.",
      tecnologias: ["Python", "C++", "Gemini API"],
      linkProjeto: "", 
      linkGithub: "https://github.com/KaioMiy/Agrow",
      galeria: [
        "/agrow/1.png", 
        "/agrow/2.png",
        "/agrow/3.png",
        "/agrow/4.png",
        "/agrow/5.png"
      ]
    },
    {
      id: 2,
      titulo: "Lynqy",
      descricao: "Desenvolvimento de todo o Front-end da plataforma de checkout e pagamentos para a startup Lynqy, com foco total em alta performance, conversão e usabilidade fluida.",
      tecnologias: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind"],
      linkProjeto: "", 
      linkGithub: "", 
      galeria: [
        "/lynqy/1.png",
        "/lynqy/2.png",
        "/lynqy/3.png",
        "/lynqy/4.png"
      ]
    },
    {
      id: 3,
      titulo: "EAuditor",
      descricao: "Desenvolvimento Full Stack de um assistente de auditoria inteligente que analisa dados e documentos antes do envio ao Tribunal de Contas, prevenindo multas através da validação com IA.",
      tecnologias: ["React", "Next.js", "TypeScript", "Tailwind", "Python", "Gemini API", "GPT API"],
      linkProjeto: "",
      linkGithub: "", 
      galeria: [
        "/eauditor/1.png",
        "/eauditor/2.png",
        "/eauditor/3.png",
        "/eauditor/4.png"
      ]
    },
    {
      id: 4,
      titulo: "Monitor de Rotas",
      descricao: "Desenvolvimento Full Stack de um sistema para agentes de saúde mapearem trajetos em campo, contando com um painel administrativo integrado para visualização de dados e geração de relatórios.",
      tecnologias: ["HTML5", "CSS3", "JavaScript", "Python", "Firebase"],
      linkProjeto: "",
      linkGithub: "", 
      galeria: [
        "/rotas/1.png",
        "/rotas/2.png",
        "/rotas/3.png"
      ]
    },
    {
      id: 5,
      titulo: "DocX SaaS",
      descricao: "Desenvolvimento Full Stack de uma plataforma SaaS web integrada com Inteligência Artificial, voltada para a automação e criação ágil de documentos para processos de licitação pública.",
      tecnologias: ["React", "Python", "IA"],
      linkProjeto: "",
      linkGithub: "", 
      galeria: [
        "/docx/1.png",
        "/docx/2.png",
        "/docx/3.png"
      ]
    },
    {
      id: 6,
      titulo: "Museu Digital",
      descricao: "Desenvolvimento Full Stack de um sistema interativo para a prefeitura, focado na digitalização, catalogação e exposição virtual de acervos históricos e culturais.",
      tecnologias: ["Next.js", "PostgreSQL", "Tailwind"],
      linkProjeto: "",
      linkGithub: "", 
      galeria: [] 
    }
  ];

  // --- FUNÇÕES DO MODAL ---
  const abrirModal = (projeto: Projeto) => {
    if (projeto.galeria.length > 0) {
      setProjetoAberto(projeto);
      setImagemAtual(0); 
    }
  };

  const fecharModal = () => {
    setProjetoAberto(null);
  };

  const fotoAnterior = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    if (projetoAberto) {
      setImagemAtual((prev) => (prev === 0 ? projetoAberto.galeria.length - 1 : prev - 1));
    }
  };

  const proximaFoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (projetoAberto) {
      setImagemAtual((prev) => (prev === projetoAberto.galeria.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <>
      <section 
        id="projetos" 
        className="w-full py-24 px-6 md:px-12 bg-[#0F0F0F] relative z-10 overflow-hidden border-t border-white/5"
      >
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          
          {/* Título Animado */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={itemVariants}
            className="mb-16 md:mb-20"
          >
            <p className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">
              Meu Portfólio
            </p>
            <h2 className="font-title text-4xl md:text-5xl font-bold text-gray-100 mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl">
              Uma seleção das melhores soluções corporativas e governamentais que desenvolvi, unindo 
              arquitetura robusta no back-end, inteligência artificial e interfaces de alta performance.
            </p>
          </motion.div>

          {/* Grid Animado (Stagger) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            
            {projetos.map((projeto) => (
              <motion.div 
                key={projeto.id}
                variants={itemVariants}
                className="flex flex-col rounded-2xl bg-[#161616] border border-white/10 overflow-hidden group hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.2)] transition-all duration-300"
              >
                <div 
                  className={`relative w-full aspect-video overflow-hidden bg-[#222] ${projeto.galeria.length > 0 ? 'cursor-pointer' : 'cursor-default'}`}
                  onClick={() => abrirModal(projeto)}
                >
                  {projeto.galeria.length > 0 ? (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a] text-gray-600 font-semibold z-0">
                        {projeto.titulo}
                      </div>
                      <img 
                        src={projeto.galeria[0]} 
                        alt={projeto.titulo}
                        className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => e.currentTarget.style.opacity = '0'} 
                        onLoad={(e) => e.currentTarget.style.opacity = '1'}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                        <span className="bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                          Ver Galeria
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1a1a1a] text-gray-500 font-semibold z-10">
                      <svg className="w-8 h-8 mb-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Em desenvolvimento
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="font-title text-2xl font-bold text-gray-100 mb-3">
                    {projeto.titulo}
                  </h3>
                  
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    {projeto.descricao}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {projeto.tecnologias.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                    {projeto.linkGithub && projeto.linkGithub !== "#" ? (
                      <a 
                        href={projeto.linkGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                      >
                        <GithubIcon />
                        Código
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-sm font-semibold text-gray-600 cursor-not-allowed" title="Repositório privado por questões de confidencialidade">
                        <LockIcon />
                        Código Privado
                      </span>
                    )}
                    
                    {projeto.linkProjeto && projeto.linkProjeto !== "#" && (
                      <a 
                        href={projeto.linkProjeto}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors ml-auto"
                      >
                        Ver Projeto
                        <ExternalLinkIcon />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>

      {/* --- MODAL COM ANIMAÇÃO --- */}
      {projetoAberto && projetoAberto.galeria.length > 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12"
          onClick={fecharModal} 
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-6xl max-h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={fecharModal}
              className="absolute -top-12 right-0 md:-top-10 md:-right-10 text-gray-400 hover:text-white transition-colors"
            >
              <CloseIcon />
            </button>

            <div className="relative w-full aspect-video bg-[#111] rounded-lg overflow-hidden shadow-2xl flex items-center justify-center">
              <img 
                src={projetoAberto.galeria[imagemAtual]} 
                alt={`${projetoAberto.titulo} - Tela ${imagemAtual + 1}`}
                className="max-w-full max-h-full object-contain"
                onError={(e) => e.currentTarget.style.opacity = '0'}
                onLoad={(e) => e.currentTarget.style.opacity = '1'}
              />

              {projetoAberto.galeria.length > 1 && (
                <>
                  <button 
                    onClick={fotoAnterior}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-600 text-white p-2 rounded-full backdrop-blur-md transition-all"
                  >
                    <ChevronLeftIcon />
                  </button>
                  <button 
                    onClick={proximaFoto}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-600 text-white p-2 rounded-full backdrop-blur-md transition-all"
                  >
                    <ChevronRightIcon />
                  </button>
                </>
              )}
            </div>

            {projetoAberto.galeria.length > 1 && (
              <div className="flex gap-2 mt-6">
                {projetoAberto.galeria.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setImagemAtual(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === imagemAtual ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-400'}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}