import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// Fonte para textos em geral
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

// Fonte para Títulos / Logo
const poppins = Poppins({ 
  weight: ["500", "600", "700"], 
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-portfolio-bg text-portfolio-text antialiased`}>
        {children}
      </body>
    </html>
  );
}