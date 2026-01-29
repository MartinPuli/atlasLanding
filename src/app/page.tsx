"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Language, content, socialLinks } from "@/lib/content";
import { Icon } from "@/components/icons/Icon";
import { FlagUS, FlagAR } from "@/components/icons/Flags";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { useNavScroll } from "@/hooks/useNavScroll";

// ============ NAVIGATION ============
function Navigation({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) {
  const { visible, scrolled } = useNavScroll();
  const [mounted, setMounted] = useState(false);
  const t = content[lang].nav;

  useEffect(() => { setMounted(true); }, []);

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 
      transition-all duration-500 ease-out
      ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      ${scrolled ? "nav-blur" : ""}
      ${mounted ? "animate-slide-down" : "opacity-0"}
    `}>
      <Container>
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/logo-atlas.png" alt="Atlas One" width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            <Image src="/nombre-atlas-horizontal.png" alt="Atlas One" width={140} height={36} className="h-6 sm:h-8 w-auto object-contain hidden sm:block" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            <a href="#" className="nav-link">{t.home}</a>
            <a href="#pilares" className="nav-link">{t.solutions}</a>
            <a href="#problems" className="nav-link">{t.about}</a>
            <a href="#footer" className="nav-link">{t.contact}</a>
          </div>

          {/* Lang Toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition-all bg-white/5 hover:bg-white/10"
          >
            <FlagUS className={`w-6 h-4 transition-opacity ${lang === "en" ? "opacity-100" : "opacity-40"}`} />
            <div className="w-px h-4 bg-white/20" />
            <FlagAR className={`w-6 h-4 transition-opacity ${lang === "es" ? "opacity-100" : "opacity-40"}`} />
          </button>
        </div>
      </Container>
    </nav>
  );
}

// ============ HERO SECTION ============
function HeroSection({ lang, mounted }: { lang: Language; mounted: boolean }) {
  const t = content[lang].hero;
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      bgRef.current.style.transform = `rotate(${window.scrollY * 0.08}deg)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[#010408] flex items-center justify-center overflow-hidden">
        <Image
          ref={bgRef}
          src="/atlas-bg.jpg"
          alt="Background"
          width={1200}
          height={1200}
          className="w-[120vh] h-[120vh] max-w-none object-contain opacity-50 mix-blend-screen"
          style={{ filter: "contrast(1.2) brightness(1.1)" }}
          priority
        />
      </div>

      {/* Glow Effects */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-cyan-400/20 via-transparent to-transparent opacity-70" />
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[150%] h-[400px] bg-blue-500/30 blur-[150px] rounded-full" />

      <Container className="relative z-10 py-40 sm:py-48 lg:py-56">
        <div className="text-center max-w-6xl mx-auto px-4">
          {/* Logo */}
          <div className={`relative mb-16 sm:mb-24 lg:mb-28 ${mounted ? "animate-scale-in" : "opacity-0"}`}>
            <div className="absolute inset-0 bg-cyan-400/40 blur-[100px] rounded-full animate-pulse-glow" />
            <Image
              src="/logo-atlas.png"
              alt="Atlas One"
              width={360}
              height={360}
              className="relative mx-auto w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-[0_0_80px_rgba(0,229,255,0.7)] hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

          {/* Title */}
          <h1 className={`
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
            font-bold text-white leading-[1.1] tracking-tight
            mb-8 sm:mb-10 lg:mb-12
            ${mounted ? "animate-fade-in-up delay-100 fill-backwards" : "opacity-0"}
          `}>
            {t.title}
          </h1>

          {/* Subtitle */}
          <p className={`
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-light text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400
            mb-10 sm:mb-12 lg:mb-16
            ${mounted ? "animate-fade-in-up delay-200 fill-backwards" : "opacity-0"}
          `}>
            {t.subtitle}
          </p>

          {/* Description */}
          <p className={`
            text-lg sm:text-xl md:text-2xl lg:text-3xl
            text-[#8BA3B8] max-w-4xl mx-auto leading-relaxed
            mb-14 sm:mb-18 lg:mb-24
            ${mounted ? "animate-fade-in-up delay-300 fill-backwards" : "opacity-0"}
          `}>
            {t.description}
          </p>

          {/* CTA */}
          <div className={mounted ? "animate-fade-in-up delay-400 fill-backwards" : "opacity-0"}>
            <Button href="mailto:atlasonecontact@gmail.com" size="lg">
              {t.cta}
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 sm:bottom-14 left-1/2 -translate-x-1/2 animate-float opacity-50">
        <div className="w-7 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

// ============ PILLARS SECTION ============
function PillarsSection({ lang }: { lang: Language }) {
  const t = content[lang].pillars;

  return (
    <Section id="pilares" spacing="xl">
      <Container>
        <SectionHeader title={t.title} subtitle={t.subtitle} gradient />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 max-w-6xl mx-auto">
          {t.items.map((pillar, index) => (
            <GlassCard
              key={index}
              padding="xl"
              className={`group animate-fade-in-up fill-backwards delay-${(index + 1) * 100}`}
            >
              <div className="flex flex-col items-center text-center gap-8 sm:gap-10 py-4 sm:py-6">
                {/* Icon */}
                <div className="
                  w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32
                  rounded-2xl sm:rounded-3xl
                  bg-gradient-to-br from-cyan-400/20 to-blue-500/20
                  flex items-center justify-center
                  icon-glow
                  group-hover:scale-110
                  group-hover:animate-glow-pulse
                  transition-transform duration-500
                ">
                  <Icon type={pillar.icon} className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-cyan-400" />
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-lg sm:text-xl lg:text-2xl text-[#8BA3B8] leading-relaxed max-w-lg">
                  {pillar.desc}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ============ PROBLEMS SECTION ============
function ProblemsSection({ lang }: { lang: Language }) {
  const t = content[lang].problems;

  return (
    <Section id="problems" dark spacing="xl">
      <Container size="lg">
        <SectionHeader title={t.title} />

        {/* Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-24 sm:mb-32 lg:mb-40 max-w-7xl mx-auto">
          {t.items.map((item, i) => (
            <GlassCard
              key={i}
              padding="lg"
              className={`text-center group min-h-[160px] sm:min-h-[180px] lg:min-h-[200px] flex items-center justify-center hover-lift animate-fade-in-up fill-backwards`}
              style={{ animationDelay: `${i * 100}ms` } as React.CSSProperties}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 group-hover:text-white transition-colors duration-300 leading-relaxed px-2">
                {item}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Insight */}
        <div className="text-center max-w-5xl mx-auto px-4">
          <GlassCard padding="xl" className="glow-md animate-scale-in">
            <div className="py-6 sm:py-10 lg:py-12">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-medium leading-relaxed mb-8 sm:mb-10 lg:mb-12">
                {t.insight}
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cyan-400 font-bold mb-10 sm:mb-14 lg:mb-16 animate-glow-pulse">
                {t.insightBold}
              </p>
              <Button href="#footer" variant="secondary" size="lg">
                {t.cta}
              </Button>
            </div>
          </GlassCard>
        </div>
      </Container>
    </Section>
  );
}

// ============ TIMELINE SECTION ============
function TimelineSection({ lang }: { lang: Language }) {
  const t = content[lang].timeline;

  return (
    <Section spacing="xl">
      <Container size="lg">
        {/* Quote */}
        <div className="text-center mb-24 sm:mb-32 lg:mb-40 max-w-5xl mx-auto px-4">
          <blockquote className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-10 lg:mb-12 leading-tight animate-blur-in">
            &ldquo;<span className="gradient-text">{t.quote}</span>&rdquo;
          </blockquote>
          <p className="text-xl sm:text-2xl md:text-3xl text-[#8BA3B8] leading-relaxed">
            {t.quoteSub}
          </p>
        </div>

        {/* Stages */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
            {t.stages.map((stage, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center group animate-fade-in-up fill-backwards"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Number Circle */}
                <div className="
                  relative z-10
                  w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32
                  rounded-full
                  bg-gradient-to-br from-[#010408] to-[#020810]
                  border-2 border-cyan-400/30
                  flex items-center justify-center
                  mb-8 sm:mb-10
                  group-hover:border-cyan-400/60
                  group-hover:scale-110
                  group-hover:animate-glow-pulse
                  transition-all duration-500
                  icon-glow
                ">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text">
                    {i + 1}
                  </span>
                </div>

                {/* Stage Info */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                  {stage.title}
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-[#8BA3B8] leading-relaxed max-w-[200px]">
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

// ============ FOOTER SECTION ============
function FooterSection({ lang }: { lang: Language }) {
  const t = content[lang].footer;

  return (
    <footer id="footer" className="relative py-32 sm:py-40 lg:py-52 bg-[#020609] border-t border-cyan-400/10">
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-cyan-400/5 to-transparent pointer-events-none" />

      <Container size="md">
        <div className="flex flex-col items-center text-center gap-14 sm:gap-18 lg:gap-24">
          {/* Brand */}
          <div className="flex items-center justify-center gap-5 animate-fade-in">
            <Image src="/logo-atlas.png" alt="Atlas One" width={72} height={72} className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_0_20px_rgba(0,229,255,0.4)]" />
            <Image src="/nombre-atlas-horizontal.png" alt="Atlas One" width={200} height={54} className="h-10 sm:h-12 w-auto object-contain" />
          </div>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-[#8BA3B8] max-w-3xl leading-relaxed">
            {t.tagline}
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 sm:gap-8">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20
                  rounded-2xl
                  bg-white/5 hover:bg-cyan-400/10
                  border border-white/10 hover:border-cyan-400/50
                  flex items-center justify-center
                  text-[#8BA3B8] hover:text-cyan-400
                  transition-all duration-300
                  hover:scale-110
                  hover-glow
                  animate-fade-in-up fill-backwards
                "
                style={{ animationDelay: `${i * 100}ms` }}
                aria-label={social.name}
              >
                <Icon type={social.icon} className="w-7 h-7 sm:w-8 sm:h-8" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Copyright */}
          <p className="text-base sm:text-lg text-[#8BA3B8]/60">
            {t.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}

// ============ MAIN PAGE ============
export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<Language>("es");

  useEffect(() => { setMounted(true); }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation lang={lang} setLang={setLang} />
      <HeroSection lang={lang} mounted={mounted} />
      <PillarsSection lang={lang} />
      <ProblemsSection lang={lang} />
      <TimelineSection lang={lang} />
      <FooterSection lang={lang} />
    </main>
  );
}
