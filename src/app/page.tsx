"use client";

import { useEffect, useRef, useState } from "react";

// Service data
const services = [
  {
    title: "Desarrollo de Software a Medida",
    description:
      "Sistemas internos, plataformas web, backoffice, dashboards, APIs e integraciones disenadas alrededor de la logica de cada negocio.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Aplicaciones Mobile",
    description:
      "Apps iOS y Android, escalables e integradas con sistemas, pagos, metricas y automatizacion.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "CRM y Sistemas de Gestion",
    description:
      "CRM personalizados, ERP livianos y sistemas operativos internos adaptados a flujos de trabajo reales.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: "Automatizacion de Procesos",
    description:
      "Automatizacion de flujos operativos, integracion de sistemas y eliminacion de tareas manuales repetitivas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m0 0l4.5-7.795" />
      </svg>
    ),
  },
  {
    title: "Agentes de Inteligencia Artificial",
    description:
      "Agentes de IA para ventas, soporte, analisis, operaciones y toma de decisiones, integrados a los sistemas del negocio.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Web y Plataformas Digitales",
    description:
      "Sitios corporativos, landing pages, dashboards y portales digitales enfocados en claridad, conversion y escalabilidad.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

// Process steps
const processSteps = [
  { number: "01", title: "Analisis del negocio" },
  { number: "02", title: "Diseno de la solucion" },
  { number: "03", title: "Construccion del sistema" },
  { number: "04", title: "Automatizacion e integracion" },
  { number: "05", title: "Evolucion continua" },
];

// Differentiators
const differentiators = [
  "Pensamiento orientado al negocio, no solo a la tecnologia",
  "Soluciones 100% personalizadas, sin plantillas genericas",
  "Escalabilidad desde el dia uno",
  "Automatizacion e IA integradas de forma nativa",
  "Diseno moderno y funcional",
  "Vision de largo plazo y evolucion continua",
];

// Target audience
const targetAudience = [
  "Empresas en crecimiento",
  "Startups",
  "PyMEs",
  "Equipos comerciales y operativos",
  "Organizaciones con procesos manuales",
  "Negocios que buscan adoptar IA de forma real",
];

// Animation hook for scroll reveal
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Section component with reveal animation
function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id={id}
      className={`section ${className} ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{
        transition: "opacity 0.8s ease-out",
      }}
    >
      {children}
    </section>
  );
}

// Hero background component
function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div className="grid-pattern" />

      {/* Glow orbs */}
      <div
        className="glow-orb"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
          top: "-200px",
          right: "-100px",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
          bottom: "100px",
          left: "-100px",
          animationDelay: "3s",
        }}
      />

      {/* Data lines */}
      <div className="data-lines">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="data-line"
            style={{
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 1.2}s`,
              height: `${150 + Math.random() * 100}px`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to top, var(--background), transparent)",
        }}
      />
    </div>
  );
}

// Service card component
function ServiceCard({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`gradient-border card-hover p-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-[var(--accent-primary)] mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-[var(--foreground-muted)] leading-relaxed">{description}</p>
    </div>
  );
}

// Process step component
function ProcessStep({
  number,
  title,
  isLast,
  index,
}: {
  number: string;
  title: string;
  isLast: boolean;
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center relative ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-16 h-16 rounded-full border border-[var(--accent-primary)] flex items-center justify-center mb-4 bg-[var(--background)]">
        <span className="text-[var(--accent-primary)] font-bold text-lg">{number}</span>
      </div>
      <p className="text-white font-medium text-sm md:text-base max-w-[140px]">{title}</p>
      {!isLast && (
        <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-[var(--accent-primary)] to-transparent opacity-30" />
      )}
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <HeroBackground />

        <div className="container relative z-10 pt-20">
          <div className="max-w-4xl">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-[1.1] ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
            >
              Construimos software.
              <br />
              Automatizamos procesos.
              <br />
              <span className="gradient-text">Creamos sistemas inteligentes.</span>
            </h1>

            <p
              className={`text-lg md:text-xl text-[var(--foreground-muted)] mb-12 max-w-2xl leading-relaxed ${mounted ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}
            >
              Desarrollamos soluciones digitales a medida: software, aplicaciones, CRM, automatizaciones
              y agentes de inteligencia artificial para empresas que buscan escalar sin friccion.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 ${mounted ? "animate-fade-in-up animate-delay-300" : "opacity-0"}`}
            >
              <a href="#contacto" className="btn-primary">
                Iniciar proyecto
              </a>
              <a href="#servicios" className="btn-secondary">
                Ver soluciones
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[var(--accent-primary)] to-transparent" />
        </div>
      </section>

      {/* What is Atlas One Section */}
      <Section id="nosotros">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                Que es <span className="gradient-text">Atlas One</span>
              </h2>
            </div>
            <div>
              <p className="text-lg text-[var(--foreground-muted)] mb-6 leading-relaxed">
                Somos una firma de tecnologia enfocada en disenar y construir sistemas modernos, escalables
                y alineados con las necesidades reales de cada negocio.
              </p>
              <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
                No vendemos productos genericos. Creamos soluciones a medida que integran software,
                automatizacion e inteligencia artificial para resolver problemas concretos y generar
                impacto tangible.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="servicios" className="bg-[var(--background-secondary)]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Nuestras <span className="gradient-text">soluciones</span>
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Tecnologia disenada para escalar tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* How We Work Section */}
      <Section id="proceso">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Como <span className="gradient-text">trabajamos</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
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
      <Section className="bg-[var(--background-secondary)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
                Por que <span className="gradient-text">Atlas One</span>
              </h2>

              <ul className="space-y-4">
                {differentiators.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] mt-2.5 flex-shrink-0" />
                    <span className="text-lg text-[var(--foreground-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center">
              <div className="gradient-border p-8 md:p-12">
                <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                  &ldquo;Si un sistema no escala, no es una solucion. En Atlas One construimos pensando en el futuro.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Target Audience Section */}
      <Section>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Para quienes <span className="gradient-text">trabajamos</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="gradient-border card-hover p-6 text-center"
              >
                <p className="text-white font-medium">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section id="contacto" className="bg-[var(--background-secondary)]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Que sistema podriamos <span className="gradient-text">construir juntos</span>?
            </h2>
            <p className="text-xl text-[var(--foreground-muted)] mb-12">
              Contanos tu idea, problema o proceso. Nosotros lo convertimos en software.
            </p>
            <a href="#" className="btn-primary text-lg px-10 py-5">
              Iniciar proyecto con Atlas One
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-16 border-t border-[var(--border-color)]">
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
  );
}
