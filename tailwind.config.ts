import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores declaradas de forma direta, impossível do Tailwind ignorar
        "portfolio-bg": "#0F0F0F",
        "portfolio-surface": "#1E1E24",
        "portfolio-primary": "#1E40AF", 
        "portfolio-primaryHover": "#1E3A8A",
        "portfolio-text": "#F9FAFB", 
        "portfolio-muted": "#9CA3AF", 
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        title: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
};
export default config;