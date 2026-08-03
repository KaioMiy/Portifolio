import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Tecnologias from "../components/Tecnologias";
import Projetos from "../components/Projetos";

export default function Home() {
  return (
    <main className="bg-[#0F0F0F] min-h-screen">
      {/* Navbar fixada no topo */}
      <Navbar />
      
      {/* Seção 1: Apresentação (Fundo Escuro) */}
      <Hero />
      
      {/* Seção 2: Habilidades e Ferramentas (Fundo Claro) */}
      <Tecnologias />

      {/* Seção 3: Projetos em Destaque (Fundo Escuro) */}
      <Projetos />
      
    </main>
  );
}