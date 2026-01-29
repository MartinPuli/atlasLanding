"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Language, content } from "@/lib/content";

interface HeroSectionProps {
  lang: Language;
}

export function HeroSection({ lang }: HeroSectionProps) {
  const t = content[lang].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 
            bg-accent/10 rounded-full blur-3xl animate-drift"
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 sm:w-[30rem] h-80 sm:h-[30rem] 
            bg-secondary/10 rounded-full blur-3xl animate-drift"
          style={{ animationDelay: "-4s" }}
        />
      </div>

      <Container className="relative z-10">
        <div 
          className="text-center max-w-5xl mx-auto"
          style={{ animation: "fade-in-up 1s ease-out forwards" }}
        >
          {/* Main Title */}
          <h1 className="
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
            font-bold leading-[1.1] tracking-tight
            mb-6 sm:mb-8 lg:mb-10
          ">
            <span className="gradient-text">{t.title}</span>
          </h1>

          {/* Subtitle */}
          <p className="
            text-xl sm:text-2xl md:text-3xl lg:text-4xl
            text-muted font-light
            mb-4 sm:mb-6 lg:mb-8
          ">
            {t.subtitle}
          </p>

          {/* Description */}
          <p className="
            text-base sm:text-lg md:text-xl
            text-muted/80 max-w-2xl mx-auto
            mb-10 sm:mb-14 lg:mb-20
            leading-relaxed
          ">
            {t.description}
          </p>

          {/* CTA Button */}
          <Button href="#pillars" variant="primary" size="lg">
            {t.cta}
          </Button>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="
        absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2
        animate-float opacity-50
      ">
        <div className="w-6 h-10 sm:w-7 sm:h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
