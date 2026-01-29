"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Language, content } from "@/lib/content";

interface TimelineSectionProps {
  lang: Language;
}

export function TimelineSection({ lang }: TimelineSectionProps) {
  const t = content[lang].timeline;

  return (
    <Section spacing="xl">
      <Container>
        {/* Quote */}
        <div className="text-center mb-20 sm:mb-28 lg:mb-36 max-w-4xl mx-auto">
          <blockquote className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-bold text-white
            mb-6 sm:mb-8
            leading-tight
          ">
            &ldquo;<span className="gradient-text">{t.quote}</span>&rdquo;
          </blockquote>
          <p className="
            text-lg sm:text-xl md:text-2xl
            text-muted
            leading-relaxed
          ">
            {t.quoteSub}
          </p>
        </div>

        {/* Timeline Stages */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="
            hidden lg:block
            absolute top-1/2 left-0 right-0 h-0.5
            bg-gradient-to-r from-transparent via-accent/30 to-transparent
            -translate-y-1/2
          " />

          {/* Stages Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-6">
            {t.stages.map((stage, i) => (
              <div 
                key={i} 
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number Circle */}
                <div className="
                  relative z-10
                  w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28
                  rounded-full
                  bg-gradient-to-br from-background to-background/80
                  border-2 border-accent/30
                  flex items-center justify-center
                  mb-6 sm:mb-8
                  group-hover:border-accent/60
                  group-hover:scale-110
                  transition-all duration-500
                  icon-glow
                ">
                  <span className="
                    text-3xl sm:text-4xl lg:text-5xl
                    font-bold gradient-text
                  ">
                    {i + 1}
                  </span>
                </div>

                {/* Stage Info */}
                <h3 className="
                  text-lg sm:text-xl lg:text-2xl
                  font-bold text-white
                  mb-2 sm:mb-3
                ">
                  {stage.title}
                </h3>
                <p className="
                  text-sm sm:text-base lg:text-lg
                  text-muted
                ">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
