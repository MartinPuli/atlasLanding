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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const hasToggledMenuRef = useRef(false);
  const t = content[lang].nav;
  const mobileMenuId = "mobile-navigation";

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    if (!hasToggledMenuRef.current) {
      hasToggledMenuRef.current = true;
      return;
    }
    if (menuOpen) {
      firstLinkRef.current?.focus();
    } else {
      menuButtonRef.current?.focus();
    }
  }, [menuOpen]);

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

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2 lg:gap-4">
              <a href="#" className="nav-link">{t.home}</a>
              <a href="#ecosystem" className="nav-link">{t.solutions}</a>
              <a href="#about" className="nav-link">{t.about}</a>
              <a href="#footer" className="nav-link">{t.contact}</a>
            </div>

            {/* Mobile Nav Toggle */}
            <button
              ref={menuButtonRef}
              type="button"
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border border-white/10 hover:border-white/30 transition-all bg-white/5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
              aria-expanded={menuOpen}
              aria-controls={mobileMenuId}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">{menuOpen ? "Cerrar menú" : "Abrir menú"}</span>
              <span className="relative w-5 h-5">
                <span className={`absolute left-0 top-1 w-5 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`absolute left-0 top-2.5 w-5 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute left-0 top-4 w-5 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </span>
            </button>

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
        </div>

        {/* Mobile Nav Panel */}
        <div
          id={mobileMenuId}
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
          aria-hidden={!menuOpen}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              setMenuOpen(false);
            }
          }}
        >
          <div className="mt-2 rounded-2xl border border-white/10 bg-[#0B0F1A]/95 backdrop-blur-lg px-4 py-4 flex flex-col gap-2 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
            <a
              ref={firstLinkRef}
              href="#"
              className="nav-link"
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
            >
              {t.home}
            </a>
            <a
              href="#ecosystem"
              className="nav-link"
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
            >
              {t.solutions}
            </a>
            <a
              href="#about"
              className="nav-link"
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
            >
              {t.about}
            </a>
            <a
              href="#footer"
              className="nav-link"
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
            >
              {t.contact}
            </a>
          </div>
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

      <Container className="relative z-10 py-32 sm:py-40 lg:py-48">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo */}
          <div className={`relative mb-14 sm:mb-20 ${mounted ? "animate-fade-in" : "opacity-0"}`}>
            <div className="absolute inset-0 bg-cyan-400/40 blur-[80px] rounded-full animate-pulse-glow" />
            <Image
              src="/logo-atlas.png"
              alt="Atlas One"
              width={320}
              height={320}
              className="relative mx-auto w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_0_60px_rgba(0,229,255,0.7)] hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

          {/* Title */}
          <h1 className={`
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
            font-bold text-white leading-[1.1] tracking-tight
            mb-6 sm:mb-8 lg:mb-10
            ${mounted ? "animate-fade-in-up delay-100 fill-backwards" : "opacity-0"}
          `}>
            {t.title}
          </h1>

          {/* Subtitle */}
          <p className={`
            text-xl sm:text-2xl md:text-3xl lg:text-4xl 
            font-light text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400 
            mb-8 sm:mb-10 lg:mb-12
            ${mounted ? "animate-fade-in-up delay-200 fill-backwards" : "opacity-0"}
          `}>
            {t.subtitle}
          </p>

          {/* Description */}
          <p className={`
            text-base sm:text-lg md:text-xl lg:text-2xl 
            text-[#8BA3B8] max-w-3xl mx-auto leading-relaxed
            mb-12 sm:mb-16 lg:mb-20
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

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/40 rounded-full animate-particle-float delay-100" />
        <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-blue-500/30 rounded-full animate-particle-float delay-300" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-300/30 rounded-full animate-particle-float delay-500" />
        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-teal-400/20 rounded-full animate-particle-float delay-700" />
      </div>
    </section>
  );
}

// ============ ABOUT SECTION ============
function AboutSection({ lang }: { lang: Language }) {
  const t = content[lang].about;

  return (
    <Section id="about" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-600/10 to-transparent blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <Container size="md">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-10 leading-tight">
            <span className="text-shimmer">{t.title}</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#8BA3B8] leading-relaxed">
            {t.description}
          </p>
        </div>
      </Container>
    </Section>
  );
}

// ============ ECOSYSTEM SECTION ============
function EcosystemSection({ lang }: { lang: Language }) {
  const t = content[lang].ecosystem;

  return (
    <Section id="ecosystem" spacing="xl" className="gradient-border-bottom">
      <Container>
        <SectionHeader title={t.title} subtitle={t.subtitle} gradient />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, index) => (
            <GlassCard key={index} className="group relative overflow-hidden flex flex-col items-start h-full">
              {/* Hover Grad */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-start h-full w-full">
                <div className="mb-6 p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-cyan-400/30 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                  <Icon type={item.icon} className="w-8 h-8 text-cyan-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#8BA3B8] leading-relaxed">
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



// ============ PROBLEMS SECTION ============
function ProblemsSection({ lang }: { lang: Language }) {
  const t = content[lang].problems;

  return (
    <Section id="problems" dark spacing="xl">
      <Container size="lg">
        <SectionHeader title={t.title} />

        {/* Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-20 sm:mb-28 lg:mb-36">
          {t.items.map((item, i) => (
            <GlassCard key={i} padding="lg" className="text-center group min-h-[140px] sm:min-h-[160px] flex items-center justify-center">
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 group-hover:text-white transition-colors duration-300 leading-relaxed">
                {item}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Insight */}
        <div className="text-center max-w-4xl mx-auto">
          <GlassCard padding="xl" className="glow-md">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-medium leading-relaxed mb-6 sm:mb-8">
              {t.insight}
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cyan-400 font-bold mb-8 sm:mb-12">
              {t.insightBold}
            </p>
            <Button href="#footer" variant="secondary" size="lg">
              {t.cta}
            </Button>
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
        <div className="text-center mb-20 sm:mb-28 lg:mb-36 max-w-4xl mx-auto">
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            &ldquo;<span className="gradient-text">{t.quote}</span>&rdquo;
          </blockquote>
          <p className="text-lg sm:text-xl md:text-2xl text-[#8BA3B8] leading-relaxed">
            {t.quoteSub}
          </p>
        </div>

        {/* Stages */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
            {t.stages.map((stage, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group">
                {/* Number Circle */}
                <div className="
                  relative z-10
                  w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28
                  rounded-full
                  bg-gradient-to-br from-[#010408] to-[#020810]
                  border-2 border-cyan-400/30
                  flex items-center justify-center
                  mb-6 sm:mb-8
                  group-hover:border-cyan-400/60
                  group-hover:scale-110
                  transition-all duration-500
                  icon-glow
                ">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">
                    {i + 1}
                  </span>
                </div>

                {/* Stage Info */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                  {stage.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-[#8BA3B8]">
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
    <footer id="footer" className="relative py-24 sm:py-32 lg:py-40 bg-[#020609] border-t border-cyan-400/10">
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cyan-400/5 to-transparent pointer-events-none" />

      <Container size="md">
        <div className="flex flex-col items-center text-center gap-12 sm:gap-16 lg:gap-20">
          {/* Brand */}
          <div className="flex items-center justify-center gap-4">
            <Image src="/logo-atlas.png" alt="Atlas One" width={60} height={60} className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]" />
            <Image src="/nombre-atlas-horizontal.png" alt="Atlas One" width={180} height={48} className="h-8 sm:h-10 w-auto object-contain" />
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#8BA3B8] max-w-2xl leading-relaxed">
            {t.tagline}
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-5 sm:gap-6">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-14 h-14 sm:w-16 sm:h-16
                  rounded-2xl
                  bg-white/5 hover:bg-cyan-400/10
                  border border-white/10 hover:border-cyan-400/50
                  flex items-center justify-center
                  text-[#8BA3B8] hover:text-cyan-400
                  transition-all duration-300
                  hover:scale-110
                "
                aria-label={social.name}
              >
                <Icon type={social.icon} className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Copyright */}
          <p className="text-sm sm:text-base text-[#8BA3B8]/60">
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
      <AboutSection lang={lang} />
      <EcosystemSection lang={lang} />
      <ProblemsSection lang={lang} />
      <TimelineSection lang={lang} />
      <FooterSection lang={lang} />
    </main>
  );
}
