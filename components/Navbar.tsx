"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
    { label: "Sobre mim", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("#sobre");

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-portfolio-bg/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between w-full">

                {/* Logo / Nome (Esquerda) - AGORA 100% AZUL */}
                <Link href="#sobre" className="font-title text-xl font-bold text-portfolio-primary">
                    Kaio Miyasato.
                </Link>

                {/* Links (Direita) */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href;

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setActiveSection(item.href)}
                                className={`text-sm font-medium transition-colors duration-200 relative group
                  ${isActive
                                        ? "text-portfolio-primary"
                                        : "text-portfolio-muted hover:text-portfolio-text"
                                    }`}
                            >
                                {item.label}

                                {isActive && (
                                    <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-portfolio-primary rounded-full"></span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

            </div>
        </header>
    );
}