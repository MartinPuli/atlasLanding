"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/icons/Icon";
import { Language, content } from "@/lib/content";

interface PillarsSectionProps {
  lang: Language;
}

export function PillarsSection({ lang }: PillarsSectionProps) {
  const t = content[lang].pillars;

  return (
    <Section id="pillars" spacing="xl">
      <Container>
        <SectionHeader 
          title={t.title} 
          subtitle={t.subtitle}
          gradient
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {t.items.map((item, i) => (
            <GlassCard 
              key={i} 
              padding="xl"
              className="group"
            >
              <div className="flex flex-col items-center text-center gap-5 sm:gap-6">
                {/* Icon */}
                <div className="
                  w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24
                  rounded-2xl sm:rounded-3xl
                  bg-gradient-to-br from-accent/20 to-secondary/20
                  flex items-center justify-center
                  icon-glow
                  group-hover:scale-110
                  transition-transform duration-500
                ">
                  <Icon 
                    type={item.icon} 
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-accent" 
                  />
                </div>

                {/* Title */}
                <h3 className="
                  text-xl sm:text-2xl lg:text-3xl
                  font-bold text-white
                ">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="
                  text-base sm:text-lg lg:text-xl
                  text-muted leading-relaxed
                  max-w-md
                ">
                  {item.desc}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
