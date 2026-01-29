"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { FlagUS, FlagAR } from "@/components/icons/Flags";
import { useNavScroll } from "@/hooks/useNavScroll";
import { Language, content } from "@/lib/content";

interface NavigationProps {
  lang: Language;
  onLangChange: (lang: Language) => void;
}

export function Navigation({ lang, onLangChange }: NavigationProps) {
  const { visible, scrolled } = useNavScroll();
  const t = content[lang].nav;

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50
      transition-all duration-500 ease-out
      ${visible ? "translate-y-0" : "-translate-y-full"}
      ${scrolled ? "nav-blur" : "bg-transparent"}
    `}>
      <Container>
        <div className="flex items-center justify-between py-5 sm:py-6">
          {/* Logo */}
          <a 
            href="#" 
            className="text-xl sm:text-2xl font-bold tracking-tight gradient-text"
          >
            Atlas One
          </a>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <a href="#" className="nav-link">{t.home}</a>
            <a href="#pillars" className="nav-link">{t.solutions}</a>
            <a href="#problems" className="nav-link">{t.about}</a>
            <a href="#footer" className="nav-link">{t.contact}</a>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onLangChange("en")}
              className={`
                p-2 rounded-lg transition-all duration-300
                ${lang === "en" 
                  ? "bg-white/20 ring-2 ring-accent/50" 
                  : "hover:bg-white/10 opacity-50 hover:opacity-100"}
              `}
              aria-label="Switch to English"
            >
              <FlagUS className="w-6 h-4 sm:w-7 sm:h-5" />
            </button>
            <button
              onClick={() => onLangChange("es")}
              className={`
                p-2 rounded-lg transition-all duration-300
                ${lang === "es" 
                  ? "bg-white/20 ring-2 ring-accent/50" 
                  : "hover:bg-white/10 opacity-50 hover:opacity-100"}
              `}
              aria-label="Cambiar a Español"
            >
              <FlagAR className="w-6 h-4 sm:w-7 sm:h-5" />
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
