"use client";

import { useEffect, useRef, useState } from "react";

// ============ DATA ============

const services = [
  {
    title: "Desarrollo de Software a Medida",
    description: "Sistemas internos, plataformas web, backoffice, dashboards, APIs e integraciones personalizadas.",
    icon: "code",
  },
  {
    title: "Aplicaciones Mobile",
    description: "Apps iOS y Android modernas, escalables e integradas con pagos, metricas y automatizacion.",
    icon: "mobile",
  },
  {
    title: "CRM y Sistemas de Gestion",
    description: "CRM comerciales, ERP livianos y sistemas operativos internos hechos a medida.",
    icon: "database",
  },
  {
    title: "Automatizacion de Procesos",
    description: "Flujos automaticos, integracion entre herramientas y eliminacion de tareas manuales.",
    icon: "automation",
  },
  {
    title: "Agentes de Inteligencia Artificial",
    description: "Agentes de IA para ventas, soporte, analisis, operaciones y toma de decisiones.",
    icon: "ai",
  },
  {
    title: "Web y Plataformas Digitales",
    description: "Sitios corporativos, landing pages, dashboards y portales digitales de alto impacto.",
    icon: "globe",
  },
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

// ============ ICONS ============

function ServiceIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    code: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    mobile: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    database: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    automation: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  };
  return icons[type] || icons.code;
}

// ============ COMPONENTS ============

function AtlasLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <polygon
        points="50,10 90,85 10,85"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        filter="url(#glow)"
      />
      <polygon
        points="50,25 75,70 25,70"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <circle cx="50" cy="55" r="8" fill="url(#logoGradient)" opacity="0.8" />
    </svg>
  );
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-blur" : ""}`}>
      <div className="container flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-3">
          <AtlasLogo className="w-10 h-10" />
          <span className="text-white font-semibold text-lg tracking-tight">Atlas One</span>
        </a>
        <div className="hidden md:flex items-center gap-2">
          <a href="#" className="nav-link">Inicio</a>
          <a href="#servicios" className="nav-link">Soluciones</a>
          <a href="#nosotros" className="nav-link">Nosotros</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </div>
        <a href="#contacto" className="btn-primary text-sm py-3 px-6 hidden sm:flex">
          Iniciar proyecto
        </a>
      </div>
    </nav>
  );
}

function HeroBackground() {
  return (
    <div className="hero-bg">
      {/* Waves */}
      <div className="wave-container">
        <div className="wave wave-1" />
        <div className="wave wave-2" />
        <div className="wave wave-3" />
      </div>

      {/* Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Glow orbs */}
      <div
        className="glow-orb"
        style={{
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 60%)",
          top: "-300px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 60%)",
          bottom: "-200px",
          right: "-200px",
          animationDelay: "4s",
        }}
      />
    </div>
  );
}

function ServiceCard({ title, description, icon, index }: { title: string; description: string; icon: string; index: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`glass-card p-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="icon-glow mb-6">
        <ServiceIcon type={icon} />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-[var(--foreground-muted)] leading-relaxed">{description}</p>
    </div>
  );
}

function ProcessStep({ number, title, isLast, index }: { number: string; title: string; isLast: boolean; index: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`timeline-step ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="timeline-number">{number}</div>
      <p className="text-white font-medium text-sm md:text-base mt-4 max-w-[140px]">{title}</p>
      {!isLast && <div className="timeline-connector hidden lg:block" />}
    </div>
  );
}

function Section({ children, className = "", id, dark = false }: { children: React.ReactNode; className?: string; id?: string; dark?: boolean }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id={id}
      className={`section ${dark ? "bg-[var(--background-secondary)]" : ""} ${className}`}
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.8s ease-out" }}
    >
      {children}
    </section>
  );
}

// ============ MAIN PAGE ============

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-[var(--background)]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
          <HeroBackground />

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            {/* Logo */}
            <div
              className={`logo-container mb-12 ${mounted ? "animate-fade-in" : "opacity-0"}`}
            >
              <div className="logo-glow" />
              <AtlasLogo className="logo-svg w-32 h-32 md:w-40 md:h-40" />
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-[1.1] ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
            >
              Construimos software.
              <br />
              Automatizamos procesos.
              <br />
              <span className="gradient-text">Creamos sistemas inteligentes.</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg md:text-xl text-[var(--foreground-muted)] mb-12 max-w-3xl mx-auto leading-relaxed ${mounted ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}
            >
              Desarrollamos soluciones digitales a medida: software, aplicaciones, CRM,
              automatizaciones y agentes de inteligencia artificial para empresas que buscan escalar sin friccion.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center ${mounted ? "animate-fade-in-up animate-delay-300" : "opacity-0"}`}
            >
              <a href="#contacto" className="btn-primary">
                Iniciar proyecto
              </a>
              <a href="#servicios" className="btn-secondary">
                Ver soluciones
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[var(--accent-primary)] to-transparent opacity-50" />
          </div>
        </section>

        {/* About Section */}
        <Section id="nosotros" dark>
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                  Que es <span className="gradient-text">Atlas One</span>
                </h2>
              </div>
              <div>
                <p className="text-lg text-[var(--foreground-muted)] mb-6 leading-relaxed">
                  Atlas One es una firma de desarrollo tecnologico enfocada en disenar y construir
                  sistemas digitales modernos, escalables y alineados al negocio real.
                </p>
                <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
                  No vendemos productos genericos ni software cerrado. Creamos soluciones a medida
                  que integran software, automatizacion e inteligencia artificial.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Services Section */}
        <Section id="servicios">
          <div className="container">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Nuestras <span className="gradient-text">soluciones</span>
              </h2>
              <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
                Tecnologia disenada para escalar tu negocio
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={service.title} {...service} index={index} />
              ))}
            </div>
          </div>
        </Section>

        {/* Process Section */}
        <Section id="proceso" dark>
          <div className="container">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Como <span className="gradient-text">trabajamos</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20">
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={step.number}
                  {...step}
                  isLast={index === processSteps.length - 1}
                  index={index}
                />
              ))}
            </div>

            <div className="text-center">
              <p className="text-xl md:text-2xl text-[var(--foreground-muted)] font-medium italic max-w-3xl mx-auto">
                &ldquo;No desarrollamos por desarrollar. Construimos sistemas que funcionan en el mundo real.&rdquo;
              </p>
            </div>
          </div>
        </Section>

        {/* Why Atlas One Section */}
        <Section>
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
                  Por que <span className="gradient-text">Atlas One</span>
                </h2>

                <ul className="space-y-5">
                  {differentiators.map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] flex-shrink-0 shadow-[0_0_10px_var(--accent-primary)]" />
                      <span className="text-lg text-[var(--foreground-muted)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="quote-block">
                <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                  &ldquo;Si un sistema no escala, no es una solucion. En Atlas One construimos pensando en el futuro.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </Section>

        {/* Target Audience Section */}
        <Section dark>
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Para quienes <span className="gradient-text">trabajamos</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {targetAudience.map((audience, index) => (
                <div key={index} className="glass-card p-6 text-center">
                  <p className="text-white font-medium">{audience}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Final CTA Section */}
        <Section id="contacto" className="relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="wave-container">
              <div className="wave wave-1" style={{ opacity: 0.3 }} />
              <div className="wave wave-2" style={{ opacity: 0.2 }} />
            </div>
          </div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Que sistema podriamos <span className="gradient-text">construir juntos</span>?
              </h2>
              <p className="text-xl text-[var(--foreground-muted)] mb-4">
                Contanos tu idea, problema o proceso.
              </p>
              <p className="text-xl text-[var(--foreground-muted)] mb-12">
                Nosotros lo convertimos en software.
              </p>
              <a href="#" className="btn-primary text-lg px-12 py-5">
                Iniciar proyecto con Atlas One
              </a>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="py-16 border-t border-[rgba(56,189,248,0.1)]">
          <div className="container">
            <div className="text-center">
              <p className="text-[var(--foreground-muted)] mb-4">
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
