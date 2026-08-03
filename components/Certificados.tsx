"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";

// --- ÍCONES ---
function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
    </svg>
  );
}

type Certificado = {
  id: number;
  titulo: string;
  emissor: string;
  ano: string;
  imagem: string;
};

// --- VARIANTES DE ANIMAÇÃO ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Como são muitos certificados, 0.1 deixa a cascata bem fluida
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function Certificados() {
  const [certificadoAberto, setCertificadoAberto] = useState<Certificado | null>(null);

  // --- LISTA DE CERTIFICADOS (1 a 11) ---
  const listaCertificados: Certificado[] = [
    {
      id: 1,
      titulo: "Programming for Everybody (Getting Started with Python)",
      emissor: "University of Michigan",
      ano: "2023",
      imagem: "/certificados/1.png" 
    },
    {
      id: 2,
      titulo: "Foundations of Cybersecurity",
      emissor: "Google",
      ano: "2023",
      imagem: "/certificados/2.png" 
    },
    {
      id: 3,
      titulo: "Apoio Técnico de TI da Google",
      emissor: "Google", 
      ano: "2023",
      imagem: "/certificados/3.png"
    },
    {
      id: 4,
      titulo: "Imersão Inteligência Artificial 2ª Edição",
      emissor: "Alura", 
      ano: "2024",
      imagem: "/certificados/4.png"
    },
    {
      id: 5,
      titulo: "Imersão IA 3ª Edição",
      emissor: "Alura",
      ano: "2025",
      imagem: "/certificados/5.png"
    },
    {
      id: 6,
      titulo: "Princípios Básicos de Apoio Técnico",
      emissor: "Google",
      ano: "2023",
      imagem: "/certificados/6.png"
    },
    {
      id: 7,
      titulo: "Microsoft Power BI para Business Intelligence e Data Science",
      emissor: "Data Science Academy",
      ano: "2024",
      imagem: "/certificados/7.png"
    },
    {
      id: 8,
      titulo: "Python para Análise de Dados e Data Science - Introdutório",
      emissor: "Data Science Academy",
      ano: "2025",
      imagem: "/certificados/8.png"
    },
    {
      id: 9,
      titulo: "Python para Análise de Dados e Data Science - Básico",
      emissor: "Data Science Academy",
      ano: "2025",
      imagem: "/certificados/9.png"
    },
    {
      id: 10,
      titulo: "Python para Análise de Dados e Data Science - Intermediário",
      emissor: "Data Science Academy",
      ano: "2025",
      imagem: "/certificados/10.png"
    },
    {
      id: 11,
      titulo: "Inteligência Artificial e seus Impactos nos Negócios e na Sociedade",
      emissor: "Insper",
      ano: "2025",
      imagem: "/certificados/11.png"
    }
  ];

  const fecharModal = () => setCertificadoAberto(null);

  return (
    <>
      <section 
        id="certificados" 
        className="w-full py-24 px-6 md:px-12 bg-[#1A1A1A] relative z-10 overflow-hidden border-t border-white/5"
      >
        {/* Grid de Fundo com Fade no Centro */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          
          {/* Título Animado */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={itemVariants}
            className="mb-16 md:mb-20 text-center md:text-left"
          >
            <p className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">
              Minha Trajetória
            </p>
            <h2 className="font-title text-4xl md:text-5xl font-bold text-gray-100 mb-4">
              Formação & Certificados
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto md:mx-0">
              Minha base acadêmica e especializações que garantem a entrega de 
              soluções com segurança, escalabilidade e as melhores práticas.
            </p>
          </motion.div>

          {/* Grid Animado (Stagger) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {listaCertificados.map((cert) => (
              <motion.div 
                key={cert.id}
                variants={itemVariants}
                className="flex flex-col bg-[#222222] rounded-xl overflow-hidden border border-white/10 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.2)] transition-all duration-300 group cursor-pointer"
                onClick={() => setCertificadoAberto(cert)}
              >
                <div className="relative w-full aspect-[16/10] bg-[#111] overflow-hidden flex items-center justify-center border-b border-white/5">
                  <img 
                    src={cert.imagem} 
                    alt={`Certificado ${cert.titulo}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => e.currentTarget.style.opacity = '0'}
                    onLoad={(e) => e.currentTarget.style.opacity = '1'}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-blue-600 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ExpandIcon />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-gray-100 text-lg leading-tight mb-2 line-clamp-2">
                    {cert.titulo}
                  </h3>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                    <span className="text-blue-400 font-medium text-sm truncate mr-2">
                      {cert.emissor}
                    </span>
                    <span className="text-gray-500 text-sm font-semibold shrink-0">
                      {cert.ano}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* --- MODAL COM ANIMAÇÃO --- */}
      {certificadoAberto && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-12"
          onClick={fecharModal}
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl max-h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={fecharModal}
              className="absolute -top-12 right-0 md:-top-10 md:-right-10 text-gray-400 hover:text-white transition-colors"
            >
              <CloseIcon />
            </button>

            <img 
              src={certificadoAberto.imagem} 
              alt={certificadoAberto.titulo}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl bg-white/5"
            />
            
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-1">{certificadoAberto.titulo}</h3>
              <p className="text-blue-400">{certificadoAberto.emissor} • {certificadoAberto.ano}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}