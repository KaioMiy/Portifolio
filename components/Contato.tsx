"use client";

import { motion, Variants } from "framer-motion";

function MailIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.031 21.122l-1.455-1.455a9.034 9.034 0 1 1 5.41-15.42 9.034 9.034 0 0 1-3.955 16.875zM11.953 2.052a9.92 9.92 0 0 0-8.526 15.015l-1.4 4.125 4.227-1.397a9.922 9.922 0 1 0 5.7-17.743zm4.55 13.067c-.247-.124-1.465-.724-1.692-.808-.228-.083-.393-.124-.559.124-.165.248-.64 .808-.784.974-.145.165-.29.186-.537.062-.247-.124-1.045-.385-1.99-1.23-.736-.656-1.233-1.467-1.378-1.715-.145-.248-.015-.382.109-.506.11-.11.247-.29.37-.435.124-.145.165-.248.248-.414.083-.165.041-.31-.021-.434-.062-.124-.559-1.345-.765-1.84-.201-.48-.406-.415-.559-.423-.145-.008-.31-.008-.475-.008a.91.91 0 0 0-.66.31c-.228.248-.868.847-.868 2.067s.888 2.398 1.012 2.564c.124.165 1.748 2.668 4.237 3.744.59.255 1.05.408 1.41.523.593.187 1.133.16 1.558.097.476-.07 1.465-.599 1.672-1.178.206-.579.206-1.075.145-1.178-.062-.104-.228-.166-.475-.29z"></path>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function Contato() {
  return (
    <section id="contato" className="w-full py-24 px-6 md:px-12 bg-[#050505] relative z-10 border-t border-white/5 overflow-hidden">
      
      {/* Luzes de Fundo (Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center text-center"
      >
        
        <motion.h2 variants={itemVariants} className="font-title text-4xl md:text-6xl font-bold text-gray-100 mb-6">
          Vamos construir algo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">incrível?</span>
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl">
          Estou sempre aberto a novos projetos, parcerias ou apenas um bom bate-papo sobre tecnologia, desenvolvimento e arquitetura de software. 
        </motion.p>

        {/* Grid de Botões (Os links herdam o staggerChildren do motion.div pai) */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mb-24">
          
          <motion.a 
             variants={itemVariants}
             href="https://wa.me/+5515997816088" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="flex items-center justify-center gap-3 bg-[#111111] border border-white/5 hover:border-[#25D366] hover:bg-[#25D366]/10 text-gray-300 hover:text-[#25D366] px-6 py-4 rounded-xl transition-all duration-300 group"
          >
            <WhatsAppIcon />
            <span className="font-medium text-lg">WhatsApp</span>
          </motion.a>

          <motion.a 
             variants={itemVariants}
             href="mailto:kaio@outlook.com" 
             className="flex items-center justify-center gap-3 bg-[#111111] border border-white/5 hover:border-blue-500 hover:bg-blue-500/10 text-gray-300 hover:text-blue-500 px-6 py-4 rounded-xl transition-all duration-300 group"
          >
            <MailIcon />
            <span className="font-medium text-lg">E-mail</span>
          </motion.a>

          <motion.a 
             variants={itemVariants}
             href="https://linkedin.com/in/kaiomiyasato" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="flex items-center justify-center gap-3 bg-[#111111] border border-white/5 hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 text-gray-300 hover:text-[#0A66C2] px-6 py-4 rounded-xl transition-all duration-300 group"
          >
            <LinkedInIcon />
            <span className="font-medium text-lg">LinkedIn</span>
          </motion.a>

          <motion.a 
             variants={itemVariants}
             href="https://github.com/KaioMiy" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="flex items-center justify-center gap-3 bg-[#111111] border border-white/5 hover:border-white/30 hover:bg-white/5 text-gray-300 hover:text-white px-6 py-4 rounded-xl transition-all duration-300 group"
          >
            <GitHubIcon />
            <span className="font-medium text-lg">GitHub</span>
          </motion.a>

        </motion.div>
      </motion.div>

      {/* Footer com Fade-in sutil */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-6xl mx-auto w-full border-t border-white/5 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm"
      >
        <p>© 2026 Kaio Miyasato. Todos os direitos reservados.</p>
        <p className="mt-2 md:mt-0">Desenvolvido com Next.js & Tailwind</p>
      </motion.div>
      
    </section>
  );
}