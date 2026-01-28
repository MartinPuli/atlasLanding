"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

// ============ DATA ============

const pillars = [
  {
    id: "ia",
    name: "Atlas IA",
    title: "Inteligencia Artificial",
    description: "Agentes de IA para ventas, soporte, analisis, operaciones y toma de decisiones integrados a tus sistemas.",
    icon: "ai",
  },
  {
    id: "software",
    name: "Atlas Software",
    title: "Desarrollo a Medida",
    description: "Sistemas internos, plataformas web, dashboards, APIs e integraciones disenadas para tu negocio.",
    icon: "code",
  },
  {
    id: "cybersecurity",
    name: "Atlas Cibersecurity",
    title: "Seguridad Digital",
    description: "Proteccion integral, auditorias de seguridad, monitoreo y respuesta ante amenazas para tu infraestructura.",
    icon: "shield",
  },
  {
    id: "analytics",
    name: "Atlas Analytics",
    title: "Datos e Inteligencia",
    description: "Dashboards, reportes automatizados, visualizacion de datos y Business Intelligence para decisiones informadas.",
    icon: "chart",
  },
];

const services = [
  { title: "Desarrollo de Software a Medida", description: "Sistemas internos, plataformas web, backoffice, dashboards, APIs e integraciones personalizadas.", icon: "code" },
  { title: "Aplicaciones Mobile", description: "Apps iOS y Android modernas, escalables e integradas con pagos, metricas y automatizacion.", icon: "mobile" },
  { title: "CRM y Sistemas de Gestion", description: "CRM comerciales, ERP livianos y sistemas operativos internos hechos a medida.", icon: "database" },
  { title: "Automatizacion de Procesos", description: "Flujos automaticos, integracion entre herramientas y eliminacion de tareas manuales.", icon: "automation" },
  { title: "Agentes de Inteligencia Artificial", description: "Agentes de IA para ventas, soporte, analisis, operaciones y toma de decisiones.", icon: "ai" },
  { title: "Web y Plataformas Digitales", description: "Sitios corporativos, landing pages, dashboards y portales digitales de alto impacto.", icon: "globe" },
];

const processSteps = [
  { number: "01", title: "Analisis del negocio" },
  { number: "02", title: "Diseno de la solucion" },
  { number: "03", title: "Construccion del sistema" },
  { number: "04", title: "Automatizacion e integracion" },
  { number: "05", title: "Evolucion continua" },
];

const differentiators = [
  "Pensamos tecnologia desde el negocio",
  "Soluciones 100% a medida",
  "Escalabilidad desde el primer dia",
  "Automatizacion e IA integradas",
  "Diseno moderno y funcional",
  "Vision de largo plazo",
];

const targetAudience = [
  "Empresas en crecimiento",
  "Startups",
  "PyMEs",
  "Equipos comerciales y operativos",
  "Organizaciones con procesos manuales",
  "Negocios que buscan aplicar IA de forma real",
];

const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/atlasone.arg/", icon: "instagram" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/atlas-one-erp-ar/", icon: "linkedin" },
  { name: "X", url: "https://x.com/atlasonearg", icon: "x" },
];

// ============ HOOKS ============

function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold, rootMargin: "-50px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

function useNavScroll() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY < 100) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { visible, scrolled };
}

// ============ ICONS ============

function Icon({ type, className = "w-7 h-7" }: { type: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    code: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    mobile: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    database: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    automation: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    x: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  };
  return <>{icons[type] || icons.code}</>;
}

// ============ COMPONENTS ============

// ============ COMPONENTS ============

function Navigation() {
  const { visible, scrolled } = useNavScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className={`nav ${visible ? "nav-visible" : "nav-hidden"} ${scrolled ? "nav-blur" : ""} ${mounted ? "animate-slide-down" : "opacity-0"}`}>
      <div className="container flex items-center justify-between h-20 md:h-24 relative">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image src="/logo-atlas.png" alt="Atlas One" width={40} height={40} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          <Image
            src="/nombre-atlas-horizontal.png"
            alt="Atlas One"
            width={140}
            height={40}
            className="h-6 md:h-8 w-auto object-contain hidden sm:block"
          />
        </a>

        {/* Centered Links */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <a href="#" className="nav-link">Home</a>
          <a href="#pilares" className="nav-link">Solutions</a>
          <a href="#nosotros" className="nav-link">About</a>
          <a href="#contacto" className="nav-link">Contact</a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <button className="text-[var(--foreground-muted)] hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

function HeroBackground() {
  return (
    <div className="hero-bg">
      {/* Deep Space Background */}
      <div className="absolute inset-0 bg-[#020609]" />

      {/* Glowing Orbs */}
      <div className="glow-orb glow-orb-1 opacity-40" />
      <div className="glow-orb glow-orb-2 opacity-30" />

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-[#00E5FF]/20 via-transparent to-transparent opacity-60 mix-blend-screen" />
      <div className="wave-line wave-1" />
      <div className="wave-line wave-2" />
      <div className="wave-line wave-3" />
    </div>
  );
}

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`pillar-card p-8 md:p-10 lg:p-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="icon-glow mb-8">
        <Icon type={pillar.icon} className="w-12 h-12" />
      </div>
      <p className="text-[var(--accent-primary)] text-sm font-semibold mb-3 tracking-wide uppercase">{pillar.name}</p>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">{pillar.title}</h3>
      <p className="text-[var(--foreground-muted)] leading-relaxed text-lg">{pillar.description}</p>
    </div>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`glass-card p-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="icon-glow mb-4">
        <Icon type={service.icon} />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
      <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">{service.description}</p>
    </div>
  );
}

function ProcessStep({ step, isLast, index }: { step: typeof processSteps[0]; isLast: boolean; index: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`timeline-step ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="timeline-number">{step.number}</div>
      <p className="text-white font-medium text-sm mt-4 max-w-[120px]">{step.title}</p>
      {!isLast && <div className="timeline-line hidden lg:block" />}
    </div>
  );
}

function Section({ children, className = "", id, dark = false }: { children: React.ReactNode; className?: string; id?: string; dark?: boolean }) {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section
      ref={ref}
      id={id}
      className={`section ${dark ? "bg-[var(--background-secondary)]" : ""} ${className} relative z-10`}
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)" }}
    >
      {children}
    </section>
  );
}

// ============ MAIN PAGE ============

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (!bgRef.current) return;
      const rotateValue = window.scrollY * 0.2; // Adjust speed as needed
      // Apply rotation. Preserve the scale and centering translate.
      bgRef.current.style.transform = `translate(-50%, -50%) scale(1.1) rotate(${rotateValue}deg)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navigation />

      <main className="min-h-screen">
        {/* Global Background Texture (Fixed for all non-hero sections) */}
        <div className="globe-bg-wrapper pointer-events-none">
          <Image
            ref={bgRef}
            src="/atlas-bg.jpg"
            alt="Background Texture"
            fill
            className="globe-image"
            priority
            style={{ animation: 'none' }} // Disable CSS animation to allow scroll control
          />
        </div>

        {/* Hero Section (Remains unchanged) */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20 z-10">
          <HeroBackground />
          <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
            <div className={`relative mb-12 ${mounted ? "animate-fade-in" : "opacity-0"}`}>
              <div className="absolute inset-0 bg-[#00E5FF] blur-[100px] opacity-20 rounded-full scale-150" />
              <Image
                src="/logo-atlas.png"
                alt="Atlas One Hero Logo"
                width={300}
                height={300}
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_0_50px_rgba(0,229,255,0.5)]"
                priority
              />
            </div>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight ${mounted ? "animate-fade-in-up delay-1" : "opacity-0"}`}>
              Innovating Data & Technology
              <br />
              <span className="font-light text-[var(--foreground-muted)] block mt-4 md:mt-6">For Real-World Decisions</span>
            </h1>
            <p className={`text-lg md:text-xl text-[var(--foreground-muted)] mb-12 max-w-2xl mx-auto leading-relaxed ${mounted ? "animate-fade-in-up delay-2" : "opacity-0"}`}>
              Build, analyze and scale with a data-first infrastructure.
            </p>
            <div className={`${mounted ? "animate-fade-in-up delay-3" : "opacity-0"}`}>
              <a href="mailto:atlasonecontact@gmail.com?subject=Iniciar%20proyecto%20-%20Atlas%20One" className="btn-primary text-lg md:text-xl px-14 py-5 shadow-[0_0_40px_rgba(0,229,255,0.3)] hover:shadow-[0_0_60px_rgba(0,229,255,0.5)]">
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <Section id="pilares" className="py-28 md:py-36">
          <div className="container relative z-10 flex flex-col items-center">
            <div className="text-center mb-24 max-w-4xl">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Nuestros <span className="gradient-text">4 Pilares</span>
              </h2>
              <p className="text-xl md:text-2xl text-[var(--foreground-muted)]">
                La base de nuestra tecnología para transformar tu negocio.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 w-full max-w-7xl mx-auto">
              {pillars.map((pillar, index) => (
                <PillarCard key={pillar.id} pillar={pillar} index={index} />
              ))}
            </div>
          </div>
        </Section>

        {/* SECTION 1: PROBLEMS WE SOLVE - CENTERED & SPACIOUS */}
        <Section id="problems" dark className="py-28 md:py-36">
          <div className="container relative z-10 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-20 leading-tight max-w-4xl">
              Donde la mayoría de los <span className="gradient-text">sistemas fallan</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-28 max-w-6xl mx-auto w-full">
              {[
                "Procesos manuales que no escalan",
                "Herramientas desconectadas entre sí",
                "CRM genéricos que nadie adopta",
                "Operaciones que dependen de personas clave",
                "Datos que no generan decisiones",
                "IA usada solo como marketing"
              ].map((item, i) => (
                <div
                  key={i}
                  className="glass-card p-10 md:p-12 flex items-center justify-center min-h-[180px] hover:scale-105 hover:border-[var(--accent-primary)]/40 transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <p className="text-xl md:text-2xl text-[var(--foreground-muted)] font-medium text-center leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="p-12 md:p-16 border border-[var(--accent-primary)]/20 bg-[var(--accent-primary)]/5 rounded-3xl max-w-4xl mx-auto backdrop-blur-md shadow-[0_0_40px_rgba(0,229,255,0.15)] animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
                El problema no es la falta de tecnología.<br />
                <span className="text-[var(--accent-primary)] mt-4 block font-bold">El problema es tener tecnología que no trabaja para vos.</span>
              </p>
              <a href="#contacto" className="btn-secondary inline-flex items-center gap-2 group">
                Hablemos de tu negocio
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </Section>

        {/* SECTION 2: SYSTEM ARCHITECTURE - CENTERED */}
        <Section id="architecture" className="py-28 md:py-36">
          <div className="container relative z-10 text-center flex flex-col items-center">
            <div className="mb-24 max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Pensamos en sistemas, <span className="gradient-text">no en funcionalidades</span>
              </h2>
              <p className="text-xl text-[var(--foreground-muted)] max-w-2xl mx-auto">Diseñamos arquitecturas que crecen con el negocio.</p>
            </div>

            <div className="arch-stack max-w-3xl mx-auto space-y-6 w-full">
              {[
                { name: "Integraciones", sub: "APIs & External Systems" },
                { name: "Inteligencia Artificial", sub: "Agents & Models" },
                { name: "Automatización", sub: "Workflows & Triggers" },
                { name: "Datos", sub: "Warehouse & Analytics" },
                { name: "Backend", sub: "Logic & Security" },
                { name: "Frontend", sub: "UI/UX Interface" }
              ].map((layer, i) => (
                <div
                  key={i}
                  className="arch-layer group cursor-default p-8 md:p-10 animate-fade-in-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <h3 className="text-2xl md:text-3xl text-white font-bold group-hover:text-[var(--accent-primary)] transition-colors">{layer.name}</h3>
                  <p className="text-base md:text-lg text-[var(--foreground-muted)] uppercase tracking-widest mt-3 opacity-70">{layer.sub}</p>
                </div>
              ))}
            </div>

            <a href="#contacto" className="btn-primary mt-20 inline-flex items-center gap-3 text-lg animate-fade-in-up" style={{ animationDelay: '700ms' }}>
              Diseñemos tu arquitectura
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Section>

        {/* SECTION 3: USE CASES - CENTERED */}
        <Section id="use-cases" dark className="py-28 md:py-36">
          <div className="container relative z-10 text-center flex flex-col items-center">
            <div className="mb-24 max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Casos de <span className="gradient-text">Uso Real</span>
              </h2>
              <p className="text-xl text-[var(--foreground-muted)]">Soluciones concretas para problemas reales.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 w-full max-w-7xl">
              {[
                {
                  title: "Unificar ventas, soporte y operaciones",
                  desc: "Centralizamos la información clave en un solo ecosistema conectado.",
                  bullets: ["Menos fricción", "Más control", "Información en tiempo real"]
                },
                {
                  title: "Automatizar procesos críticos",
                  desc: "Reemplazamos tareas manuales repetitivas con flujos de trabajo inteligentes.",
                  bullets: ["Menos tareas manuales", "Menos errores", "Más eficiencia"]
                },
                {
                  title: "Integrar IA al negocio real",
                  desc: "Implementamos agentes que asisten, analizan y ejecutan acciones concretas.",
                  bullets: ["Decisiones más rápidas", "Escalabilidad", "Inteligencia aplicada"]
                }
              ].map((card, i) => (
                <div
                  key={i}
                  className="usp-card text-center flex flex-col items-center p-10 md:p-12 rounded-2xl animate-fade-in-up hover:scale-[1.02] transition-transform duration-500"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug">{card.title}</h3>
                  <p className="text-[var(--foreground-muted)] mb-10 text-lg leading-relaxed">{card.desc}</p>
                  <ul className="space-y-4 w-full text-left bg-white/5 p-8 rounded-xl">
                    {card.bullets.map((b, j) => (
                      <li key={j} className="flex items-center gap-4 text-lg font-medium text-[var(--accent-secondary)]">
                        <span className="w-3 h-3 rounded-full bg-[var(--accent-secondary)] shrink-0 shadow-[0_0_10px_var(--accent-secondary)]" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <a href="#contacto" className="btn-primary mt-20 inline-flex items-center gap-3 text-lg animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              Ver cómo aplicarlo a mi negocio
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Section>

        {/* SECTION 4: SCALABILITY JOURNEY - CENTERED */}
        <Section id="timeline" className="py-28 md:py-36">
          <div className="container relative z-10 text-center flex flex-col items-center">
            <div className="mb-28 max-w-4xl">
              <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed">
                "El sistema que construimos hoy no es el que vas a usar mañana.
                <span className="block text-[var(--foreground-muted)] mt-4">Y eso está bien. Lo diseñamos para evolucionar."</span>
              </p>
            </div>

            <div className="timeline-track grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 w-full max-w-6xl">
              {[
                { title: "Sistema Base", desc: "Digitalización core", num: "01" },
                { title: "Automatización", desc: "Eficiencia operativa", num: "02" },
                { title: "Inteligencia Artificial", desc: "Capacidades cognitivas", num: "03" },
                { title: "Optimización Continua", desc: "Escala infinita", num: "04" }
              ].map((stage, i) => (
                <div
                  key={i}
                  className="timeline-node flex flex-col items-center px-6 py-10 glass-card rounded-2xl animate-fade-in-up hover:scale-105 transition-transform duration-500"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <span className="text-[var(--accent-primary)] text-5xl font-bold mb-4 opacity-30">{stage.num}</span>
                  <h4 className="text-white font-bold text-2xl md:text-3xl mb-4">{stage.title}</h4>
                  <p className="text-[var(--foreground-muted)] text-lg">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* SECTION 5: PHILOSOPHY */}
        <Section id="philosophy" dark className="py-40 md:py-56">
          <div className="container relative z-10 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-16 leading-tight max-w-5xl animate-fade-in-up">
              La tecnología no debería complicar.<br />
              <span className="opacity-40 block mt-6">Debería desaparecer y dejar que el negocio fluye.</span>
            </h2>
            <p className="text-2xl md:text-3xl text-[var(--accent-primary)] font-medium mb-16 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              En Atlas One, la tecnología es un medio, no un fin.
            </p>
            <a href="#contacto" className="btn-primary text-xl px-14 py-6 animate-fade-in-up group" style={{ animationDelay: '400ms' }}>
              Empezá tu transformación
              <svg className="w-6 h-6 ml-3 inline-block group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Section>

        {/* FINAL CTA SECTION */}
        <Section id="contacto" className="py-36 md:py-48">
          <div className="container relative z-10 flex flex-col items-center">
            <div className="text-center max-w-5xl p-12 md:p-20 rounded-3xl border border-[var(--accent-primary)]/20 bg-gradient-to-b from-[var(--accent-primary)]/5 to-transparent backdrop-blur-lg">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-12 animate-fade-in-up">
                ¿Qué sistema podríamos <span className="gradient-text">construir juntos</span>?
              </h2>
              <p className="text-xl md:text-2xl text-[var(--foreground-muted)] mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Contanos tu idea, problema o proceso.
              </p>
              <p className="text-xl md:text-2xl text-white font-medium mb-16 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Nosotros lo convertimos en software.
              </p>
              <a
                href="mailto:atlasonecontact@gmail.com?subject=Iniciar%20proyecto%20-%20Atlas%20One"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xl md:text-2xl px-16 py-6 shadow-[0_0_60px_rgba(0,229,255,0.4)] hover:shadow-[0_0_80px_rgba(0,229,255,0.6)] hover:scale-105 transition-all duration-500 inline-flex items-center gap-4 animate-fade-in-up group"
                style={{ animationDelay: '300ms' }}
              >
                Iniciar proyecto con Atlas One
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="py-12 md:py-16 border-t border-[var(--border-color)]">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <Image src="/atlas-logo.svg" alt="Atlas One" width={32} height={32} />
                <span className="text-white font-semibold text-lg">Atlas One</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 mb-6">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={link.name}>
                    <Icon type={link.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Text */}
              <p className="text-[var(--foreground-muted)] mb-2">
                Atlas One · Software · Automatizacion · Inteligencia Artificial
              </p>
              <p className="text-white font-medium">
                Construimos sistemas que escalan.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
