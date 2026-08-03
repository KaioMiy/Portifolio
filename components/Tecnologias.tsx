export default function Tecnologias() {
  const categorias = [
    {
      titulo: "Front-end",
      descricao: "Interfaces modernas, responsividade e componentização",
      tecnologias: [
        { nome: "React", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { nome: "Next.js", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { nome: "TypeScript", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { nome: "JavaScript", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { nome: "Tailwind", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { nome: "HTML5", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { nome: "CSS3", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      ]
    },
    {
      titulo: "Back-end & IA",
      descricao: "APIs, regras de negócio e integração com LLMs (Agentes)",
      tecnologias: [
        { nome: "Python", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { nome: "Node.js", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { nome: "FastAPI", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
        { nome: "Django", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
        { nome: "Flask", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
        { nome: "ChatGPT API", icone: "/gpt.png" },
        { nome: "Gemini API", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" },
      ]
    },
    {
      titulo: "Banco de Dados & BaaS",
      descricao: "Armazenamento, persistência e gestão de dados",
      tecnologias: [
        { nome: "Firebase", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
        { nome: "Supabase", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
        { nome: "PostgreSQL", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { nome: "MongoDB", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      ]
    },
    {
      titulo: "Ferramentas & DevOps",
      descricao: "Versionamento, design, deploy e infraestrutura",
      tecnologias: [
        { nome: "GitHub", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
        { nome: "Git", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { nome: "Figma", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
        { nome: "Vercel", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
        { nome: "Jira", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
        { nome: "VS Code", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      ]
    }
  ];

  return (
    <section 
      id="habilidades" 
      className="w-full py-24 px-6 md:px-12 bg-gray-50 relative z-10 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">
            Meu Arsenal
          </p>
          <h2 className="font-title text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tecnologias e Ferramentas
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            O ecossistema que utilizo para desenvolver soluções completas, 
            desde a infraestrutura e arquitetura de dados até a experiência do usuário final.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {categorias.map((bloco) => (
            <div 
              key={bloco.titulo} 
              className="p-8 md:p-10 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <h3 className="font-title text-3xl font-bold text-gray-900 mb-2">
                {bloco.titulo}
              </h3>
              <p className="text-base text-gray-500 mb-8">
                {bloco.descricao}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {bloco.tecnologias.map((tech) => (
                  <div 
                    key={tech.nome} 
                    className="flex items-center gap-3 px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl hover:border-blue-500 hover:shadow-md hover:bg-white transition-all duration-300 cursor-default"
                  >
                    <img 
                      src={tech.icone} 
                      alt={tech.nome} 
                      className="w-8 h-8 object-contain" 
                      loading="lazy"
                    />
                    <span className="text-base font-semibold text-gray-700">
                      {tech.nome}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}