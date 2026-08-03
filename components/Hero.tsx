import { ArrowDown } from "lucide-react";

// SVGs das Redes Sociais
function GithubIcon() {
  return (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
  );
}

export default function Hero() {
  return (
    <section 
      id="sobre" 
      className="relative h-screen pt-20 px-6 md:px-12 flex items-center justify-center w-full overflow-hidden bg-[#0F0F0F]"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,transparent_65%,black_100%)]"></div>
      </div>

      {/* 
        Grid de 12 colunas estabelecido aqui: grid-cols-1 lg:grid-cols-12
        Isso trava o alinhamento de forma milimétrica para o resto da página.
      */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 scale-[1.05] lg:scale-[1.10] origin-center transition-transform">
        
        {/* Coluna Esquerda - Ocupa 7 das 12 colunas (lg:col-span-7) */}
        <div className="space-y-5 lg:col-span-7">
          <p className="text-gray-400 font-medium tracking-wider uppercase text-xs md:text-sm">
            Bem-vindo ao meu portfólio
          </p>
          
          <h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 leading-tight">
            Olá, eu sou <br />
            <span className="text-blue-600">
              Kaio Miyasato
            </span><br />
            Desenvolvedor Full Stack
          </h1>
          
          <p className="text-gray-400 text-base md:text-lg max-w-xl pb-2 md:pb-4">
            Focado em construir experiências digitais incríveis, 
            performáticas e escaláveis para o usuário final.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center pt-2">
            
            <a 
              href="#projetos" 
              className="px-6 py-3.5 w-full sm:w-auto rounded-lg bg-blue-600 text-white font-semibold flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Ver meus projetos
              <ArrowDown size={18} />
            </a>

            <a 
              href="#contato" 
              className="px-6 py-3.5 w-full sm:w-auto rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors text-center text-sm md:text-base"
            >
              Contato
            </a>
            
            <div className="flex items-center gap-3 pt-2 sm:pt-0">
              <a href="#" className="p-3 bg-white rounded-lg text-black hover:bg-gray-200 transition-colors">
                <LinkedinIcon />
              </a>
              <a href="#" className="p-3 bg-white rounded-lg text-black hover:bg-gray-200 transition-colors">
                <GithubIcon />
              </a>
            </div>

          </div>
        </div>

        {/* Coluna Direita - Ocupa 5 das 12 colunas (lg:col-span-5) */}
        <div className="relative flex justify-center lg:justify-end w-full lg:col-span-5">
          <div className="w-full max-w-md p-6 sm:p-8 space-y-6 rounded-2xl bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/5 shadow-[0_0_50px_10px_rgba(0,0,0,0.5)] relative z-10">
            
            {/* 
              Foto Expandida: 
              Passou de w-32/w-40 para w-48 e lg:w-56. O círculo agora é bem maior.
            */}
            <div className="relative w-40 sm:w-48 lg:w-56 mx-auto aspect-square overflow-hidden rounded-full border-4 border-[#2a2a2a] bg-[#0F0F0F]">
              <img 
                src="/perfil.png" 
                alt="Kaio Miyasato"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="font-title text-xl font-bold text-gray-100 text-center">
                Sobre mim
              </h3>
              <p className="text-gray-400 leading-relaxed text-xs sm:text-sm text-justify">
                Desenvolvedor Full Stack focado em criar aplicações web escaláveis. 
                Trago um olhar diferenciado para o design de interfaces, proporção 
                e usabilidade. Atuo criando soluções corporativas e liderando projetos 
                freelancer, utilizando ferramentas modernas de Front-end e Back-end.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}