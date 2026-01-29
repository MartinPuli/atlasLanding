"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Language, content } from "@/lib/content";

interface ProblemsSectionProps {
  lang: Language;
}

export function ProblemsSection({ lang }: ProblemsSectionProps) {
  const t = content[lang].problems;

  return (
    <Section id="problems" dark spacing="xl">
      <Container size="lg">
        <SectionHeader title={t.title} />

        {/* Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20 lg:mb-28">
          {t.items.map((item, i) => (
            <GlassCard 
              key={i} 
              padding="lg"
              className="text-center group"
            >
              <p className="
                text-base sm:text-lg lg:text-xl
                text-muted
                group-hover:text-white
                transition-colors duration-300
              ">
                {item}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Insight */}
        <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <p className="
            text-xl sm:text-2xl md:text-3xl lg:text-4xl
            text-muted leading-relaxed
          ">
            {t.insight}
          </p>
          <p className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-bold gradient-text
            leading-tight
          ">
            {t.insightBold}
          </p>
          
          <div className="pt-8 sm:pt-12">
            <Button href="#footer" variant="secondary" size="lg">
              {t.cta}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
