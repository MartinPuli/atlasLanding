"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/icons/Icon";
import { Language, content } from "@/lib/content";

interface AboutSectionProps {
  lang: Language;
}

export function AboutSection({ lang }: AboutSectionProps) {
  const t = content[lang].about;

  return (
    <Section id="about" spacing="xl">
      <Container size="lg">
        {/* Header */}
        <SectionHeader title={t.title} subtitle={t.subtitle} gradient />

        {/* Intro Card - Centrado y destacado */}
        <div className="max-w-3xl mx-auto mb-16 sm:mb-24 lg:mb-32">
          <GlassCard padding="xl" className="glow-md text-center">
            <p className="text-xl sm:text-2xl md:text-3xl text-white font-semibold leading-relaxed mb-6">
              {t.intro}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-[#8BA3B8] leading-relaxed">
              {t.story}
            </p>
          </GlassCard>
        </div>

        {/* Vision & Mission - Grid centrado */}
        <div className="max-w-5xl mx-auto mb-16 sm:mb-24 lg:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Vision */}
            <GlassCard padding="xl" className="group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 icon-glow mb-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {t.vision.title}
                </h3>
                <p className="text-base sm:text-lg text-[#8BA3B8] leading-relaxed">
                  {t.vision.desc}
                </p>
              </div>
            </GlassCard>

            {/* Mission */}
            <GlassCard padding="xl" className="group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 icon-glow mb-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {t.mission.title}
                </h3>
                <p className="text-base sm:text-lg text-[#8BA3B8] leading-relaxed">
                  {t.mission.desc}
                </p>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Values - 3 columnas centradas */}
        <div className="max-w-5xl mx-auto mb-16 sm:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {t.values.map((value, index) => (
              <GlassCard key={index} padding="lg" className="group">
                <div className="flex flex-col items-center text-center h-full">
                  {/* Icon */}
                  <div className="
                    w-16 h-16 sm:w-20 sm:h-20
                    rounded-2xl
                    bg-gradient-to-br from-cyan-400/20 to-blue-500/20
                    flex items-center justify-center
                    icon-glow
                    group-hover:scale-110
                    transition-transform duration-500
                    mb-5 sm:mb-6
                  ">
                    <Icon type={value.icon} className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#8BA3B8] leading-relaxed flex-grow">
                    {value.desc}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* CTA - Centrado */}
        <div className="text-center">
          <Button href="mailto:atlasonecontact@gmail.com" size="lg">
            {t.cta}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
