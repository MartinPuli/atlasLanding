"use client";

import { useState } from "react";
import Image from "next/image";

type Language = "en" | "es";

const content = {
  en: {
    nav: { 
      home: "Home", 
      about: "About Us", 
      solutions: "Solutions", 
      method: "Method",
      contact: "Contact" 
    },
    hero: {
      badge: "Technology & Data Innovation",
      title: "We Build the Future",
      titleHighlight: "of Your Business",
      subtitle: "Real Decisions. Real Impact.",
      description: "Stop guessing. Start building. We architect the data infrastructure and intelligent systems that power your next big leap.",
      cta: "Start Your Transformation",
      ctaSecondary: "Learn More",
    },
    about: {
      title: "Who We Are",
      subtitle: "Your Strategic Technology Partner",
      description: "We are Atlas One, a team of engineers, data scientists, and strategists obsessed with transforming chaos into clarity.",
      paragraphs: [
        "Founded with the mission of democratizing access to enterprise-grade technology, we believe every ambitious business deserves the digital infrastructure that was once reserved for tech giants.",
        "We don't just build software—we engineer living ecosystems that evolve with your ambition. Every line of code we write is designed to scale, every system we deploy is built to last.",
        "Our approach combines cutting-edge technology with deep business understanding. We speak both languages: the language of innovation and the language of results.",
      ],
      stats: [
        { value: "50+", label: "Projects Delivered" },
        { value: "99.9%", label: "System Uptime" },
        { value: "24/7", label: "Support Available" },
        { value: "3x", label: "Average ROI" },
      ],
    },
    ecosystem: {
      title: "Our Ecosystem",
      subtitle: "Four pillars powering your digital transformation.",
      items: [
        { 
          title: "Artificial Intelligence", 
          desc: "We deploy autonomous AI agents that sell, support, and analyze for you around the clock. From intelligent chatbots to predictive analytics—your business never sleeps.", 
          icon: "ai",
          features: ["24/7 AI Agents", "Predictive Analytics", "Natural Language Processing"]
        },
        { 
          title: "Custom Software", 
          desc: "Bespoke internal systems and platforms tailored to your unique operations. No more adapting to generic tools—your software adapts to you.", 
          icon: "code",
          features: ["Tailored Solutions", "Seamless Integration", "Scalable Architecture"]
        },
        { 
          title: "Digital Security", 
          desc: "Military-grade automated defense systems to protect your most valuable digital assets. Prevention, detection, and response—all automated.", 
          icon: "shield",
          features: ["Threat Detection", "Automated Response", "Compliance Ready"]
        },
        { 
          title: "Data Intelligence", 
          desc: "Transform raw data into strategic insights with interactive dashboards that reveal hidden opportunities and drive informed decisions.", 
          icon: "chart",
          features: ["Real-time Dashboards", "Business Intelligence", "Data Visualization"]
        },
      ],
    },
    problems: {
      title: "Why Traditional Systems Fail",
      subtitle: "Sound familiar?",
      items: [
        { text: "Manual spreadsheets everywhere", icon: "❌" },
        { text: "Disconnected tools that don't talk", icon: "🔌" },
        { text: "Expensive CRMs gathering dust", icon: "💸" },
        { text: "Knowledge trapped in silos", icon: "🏢" },
        { text: "Data without meaning", icon: "📊" },
        { text: "AI used as a toy, not a tool", icon: "🤖" },
      ],
      insight: "It's not about buying more software.",
      insightBold: "It's about architecture that actually works.",
    },
    timeline: {
      title: "Our Method",
      quote: "Software shouldn't rust.",
      quoteSub: "We build living systems designed to evolve alongside your business.",
      stages: [
        { title: "Foundation", desc: "Digital Core Architecture", detail: "We analyze your current state and design a solid, scalable foundation." },
        { title: "Automation", desc: "Speed & Workflow Optimization", detail: "We eliminate manual processes and create intelligent workflows." },
        { title: "Intelligence", desc: "Cognitive Layer Integration", detail: "We add AI and analytics to transform data into decisions." },
        { title: "Evolution", desc: "Continuous Growth & Scale", detail: "Your systems grow with you, adapting to new challenges." },
      ],
    },
    cta: {
      title: "Ready to Transform Your Business?",
      subtitle: "Let's build something extraordinary together.",
      description: "Schedule a free consultation and discover how Atlas One can accelerate your digital transformation.",
      button: "Start Your Journey",
    },
    footer: {
      tagline: "Building the future of your business, line by line.",
      rights: "© 2025 Atlas One. All rights reserved.",
    },
  },
  es: {
    nav: { 
      home: "Inicio", 
      about: "Nosotros", 
      solutions: "Soluciones", 
      method: "Método",
      contact: "Contacto" 
    },
    hero: {
      badge: "Innovación en Tecnología y Datos",
      title: "Construimos el Futuro",
      titleHighlight: "de Tu Negocio",
      subtitle: "Decisiones Reales. Impacto Real.",
      description: "Dejá de adivinar. Empezá a construir. Diseñamos la infraestructura de datos y sistemas inteligentes que impulsan tu próximo gran salto.",
      cta: "Comenzá Tu Transformación",
      ctaSecondary: "Conocé Más",
    },
    about: {
      title: "Quiénes Somos",
      subtitle: "Tu Socio Estratégico en Tecnología",
      description: "Somos Atlas One, un equipo de ingenieros, científicos de datos y estrategas obsesionados con transformar el caos en claridad.",
      paragraphs: [
        "Fundados con la misión de democratizar el acceso a tecnología de nivel empresarial, creemos que todo negocio ambicioso merece la infraestructura digital que antes estaba reservada para gigantes tecnológicos.",
        "No solo construimos software—diseñamos ecosistemas vivos que evolucionan con tu ambición. Cada línea de código que escribimos está diseñada para escalar, cada sistema que desplegamos está construido para durar.",
        "Nuestro enfoque combina tecnología de vanguardia con profundo entendimiento de negocios. Hablamos ambos idiomas: el de la innovación y el de los resultados.",
      ],
      stats: [
        { value: "50+", label: "Proyectos Entregados" },
        { value: "99.9%", label: "Tiempo Activo" },
        { value: "24/7", label: "Soporte Disponible" },
        { value: "3x", label: "ROI Promedio" },
      ],
    },
    ecosystem: {
      title: "Nuestro Ecosistema",
      subtitle: "Cuatro pilares que impulsan tu transformación digital.",
      items: [
        { 
          title: "Inteligencia Artificial", 
          desc: "Desplegamos agentes de IA autónomos que venden, asisten y analizan por vos las 24 horas. Desde chatbots inteligentes hasta analítica predictiva—tu negocio nunca duerme.", 
          icon: "ai",
          features: ["Agentes IA 24/7", "Analítica Predictiva", "Procesamiento de Lenguaje"]
        },
        { 
          title: "Software a Medida", 
          desc: "Sistemas internos y plataformas hechas a medida para tus operaciones únicas. No más adaptarte a herramientas genéricas—tu software se adapta a vos.", 
          icon: "code",
          features: ["Soluciones a Medida", "Integración Perfecta", "Arquitectura Escalable"]
        },
        { 
          title: "Seguridad Digital", 
          desc: "Sistemas de defensa automatizados de grado militar para proteger tus activos digitales más valiosos. Prevención, detección y respuesta—todo automatizado.", 
          icon: "shield",
          features: ["Detección de Amenazas", "Respuesta Automática", "Cumplimiento Normativo"]
        },
        { 
          title: "Inteligencia de Datos", 
          desc: "Transformá datos crudos en insights estratégicos con dashboards interactivos que revelan oportunidades ocultas e impulsan decisiones informadas.", 
          icon: "chart",
          features: ["Dashboards en Tiempo Real", "Business Intelligence", "Visualización de Datos"]
        },
      ],
    },
    problems: {
      title: "Por Qué Fallan los Sistemas Tradicionales",
      subtitle: "¿Te suena familiar?",
      items: [
        { text: "Planillas manuales por todos lados", icon: "❌" },
        { text: "Herramientas desconectadas", icon: "🔌" },
        { text: "CRMs caros juntando polvo", icon: "💸" },
        { text: "Conocimiento atrapado en silos", icon: "🏢" },
        { text: "Datos sin significado", icon: "📊" },
        { text: "IA usada como juguete, no herramienta", icon: "🤖" },
      ],
      insight: "No se trata de comprar más software.",
      insightBold: "Se trata de arquitectura que realmente funcione.",
    },
    timeline: {
      title: "Nuestro Método",
      quote: "El software no debería oxidarse.",
      quoteSub: "Construimos sistemas vivos diseñados para evolucionar junto a tu negocio.",
      stages: [
        { title: "Cimientos", desc: "Arquitectura del Núcleo Digital", detail: "Analizamos tu estado actual y diseñamos una base sólida y escalable." },
        { title: "Automatización", desc: "Velocidad y Optimización de Flujos", detail: "Eliminamos procesos manuales y creamos flujos de trabajo inteligentes." },
        { title: "Inteligencia", desc: "Integración de Capa Cognitiva", detail: "Agregamos IA y analítica para transformar datos en decisiones." },
        { title: "Evolución", desc: "Crecimiento y Escala Continua", detail: "Tus sistemas crecen con vos, adaptándose a nuevos desafíos." },
      ],
    },
    cta: {
      title: "¿Listo para Transformar Tu Negocio?",
      subtitle: "Construyamos algo extraordinario juntos.",
      description: "Agendá una consulta gratuita y descubrí cómo Atlas One puede acelerar tu transformación digital.",
      button: "Comenzá Tu Camino",
    },
    footer: {
      tagline: "Construyendo el futuro de tu negocio, línea por línea.",
      rights: "© 2025 Atlas One. Todos los derechos reservados.",
    },
  },
};

const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/atlasone.arg/", icon: "instagram" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/atlas-one-erp-ar/", icon: "linkedin" },
  { name: "X", url: "https://x.com/atlasonearg", icon: "x" },
];

function Icon({ type, size = 32 }: { type: string; size?: number }) {
  const style = { width: size, height: size };
  const icons: Record<string, React.ReactNode> = {
    ai: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={style}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" /></svg>,
    code: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={style}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>,
    shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={style}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
    chart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={style}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
    instagram: <svg viewBox="0 0 24 24" fill="currentColor" style={style}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>,
    linkedin: <svg viewBox="0 0 24 24" fill="currentColor" style={style}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
    x: <svg viewBox="0 0 24 24" fill="currentColor" style={style}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  };
  return <>{icons[type] || null}</>;
}

function FlagUS() {
  return (
    <svg viewBox="0 0 60 30" style={{ width: 24, height: 16, borderRadius: 2 }}>
      <rect width="60" height="30" fill="#b22234" />
      <path d="M0,3.5h60M0,8.5h60M0,13.5h60M0,18.5h60M0,23.5h60M0,28.5h60" stroke="#fff" strokeWidth="2.3" />
      <rect width="24" height="16" fill="#3c3b6e" />
    </svg>
  );
}

function FlagAR() {
  return (
    <svg viewBox="0 0 30 20" style={{ width: 24, height: 16, borderRadius: 2 }}>
      <rect width="30" height="20" fill="#fff" />
      <rect width="30" height="6.67" fill="#74acdf" />
      <rect y="13.33" width="30" height="6.67" fill="#74acdf" />
      <circle cx="15" cy="10" r="2.5" fill="#f6b40e" />
    </svg>
  );
}

// ===== STYLES =====
const styles = {
  container: {
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px",
  } as React.CSSProperties,
  
  containerSm: {
    width: "100%",
    maxWidth: 900,
    margin: "0 auto",
    padding: "0 24px",
  } as React.CSSProperties,

  section: {
    width: "100%",
    padding: "140px 0",
    position: "relative" as const,
    zIndex: 1,
  } as React.CSSProperties,

  sectionTransparent: {
    width: "100%",
    padding: "140px 0",
    position: "relative" as const,
    zIndex: 1,
    backgroundColor: "rgba(3, 11, 18, 0.85)",
    backdropFilter: "blur(10px)",
  } as React.CSSProperties,

  heading1: {
    fontSize: "clamp(2.5rem, 6vw, 5rem)",
    fontWeight: 800,
    color: "#ffffff",
    marginBottom: 24,
    lineHeight: 1.05,
    letterSpacing: "-0.02em",
  } as React.CSSProperties,

  heading2: {
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    fontWeight: 700,
    color: "#ffffff",
    marginBottom: 16,
    lineHeight: 1.1,
  } as React.CSSProperties,

  subtitle: {
    fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
    color: "#00E5FF",
    marginBottom: 24,
    fontWeight: 400,
  } as React.CSSProperties,

  bodyText: {
    fontSize: "clamp(1rem, 2vw, 1.25rem)",
    color: "#8BA3B8",
    lineHeight: 1.8,
    maxWidth: 700,
    margin: "0 auto",
  } as React.CSSProperties,

  btnPrimary: {
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    padding: "20px 48px",
    background: "linear-gradient(135deg, #00E5FF 0%, #00BCD4 100%)",
    color: "#030B12",
    fontWeight: 700,
    fontSize: 18,
    borderRadius: 16,
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 0 50px rgba(0, 229, 255, 0.5), 0 20px 40px rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s ease",
  } as React.CSSProperties,

  btnSecondary: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "18px 40px",
    background: "transparent",
    color: "#00E5FF",
    fontWeight: 600,
    fontSize: 16,
    borderRadius: 16,
    textDecoration: "none",
    border: "2px solid rgba(0, 229, 255, 0.5)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  } as React.CSSProperties,

  card: {
    padding: 32,
    borderRadius: 24,
    background: "rgba(255, 255, 255, 0.03)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(10px)",
    transition: "all 0.4s ease",
  } as React.CSSProperties,

  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 24,
  } as React.CSSProperties,

  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 16,
  } as React.CSSProperties,
};

// ===== ROTATING PLANET BACKGROUND =====
function RotatingPlanet() {
  return (
    <div className="rotating-planet">
      <Image 
        src="/atlas-bg.jpg" 
        alt="" 
        width={900} 
        height={900} 
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "contain",
        }} 
        priority 
      />
    </div>
  );
}

// ===== NAVIGATION =====
function Navigation({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const t = content[lang].nav;

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 50), { passive: true });
  }

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: scrolled ? "12px 0" : "20px 0",
      backgroundColor: scrolled ? "rgba(3, 11, 18, 0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0, 229, 255, 0.1)" : "none",
      transition: "all 0.3s ease",
    }}>
      <div style={{ ...styles.container, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#hero" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <Image src="/logo-atlas.png" alt="Atlas One" width={44} height={44} style={{ filter: "drop-shadow(0 0 20px rgba(0,229,255,0.5))" }} />
          <span style={{ fontSize: 20, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>Atlas One</span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          <div style={{ display: "flex", gap: 32 }}>
            {[
              { href: "#hero", label: t.home },
              { href: "#about", label: t.about },
              { href: "#ecosystem", label: t.solutions },
              { href: "#method", label: t.method },
              { href: "#contact", label: t.contact },
            ].map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                style={{ 
                  color: "#8BA3B8", 
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 500,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#00E5FF"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#8BA3B8"}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.05)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <span style={{ opacity: lang === "en" ? 1 : 0.4, transition: "opacity 0.2s" }}><FlagUS /></span>
            <span style={{ color: "#444", fontSize: 12 }}>|</span>
            <span style={{ opacity: lang === "es" ? 1 : 0.4, transition: "opacity 0.2s" }}><FlagAR /></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

// ===== HERO =====
function HeroSection({ lang }: { lang: Language }) {
  const t = content[lang].hero;

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      backgroundColor: "transparent",
    }}>
      {/* Radial glow from center */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "120%",
        height: "120%",
        background: "radial-gradient(ellipse at center, rgba(0,229,255,0.08) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{ ...styles.containerSm, position: "relative", zIndex: 10, textAlign: "center", paddingTop: 120, paddingBottom: 120 }}>
        {/* Badge */}
        <div style={{
          display: "inline-block",
          padding: "10px 24px",
          borderRadius: 999,
          background: "rgba(0, 229, 255, 0.1)",
          border: "1px solid rgba(0, 229, 255, 0.3)",
          marginBottom: 40,
        }}>
          <span style={{ color: "#00E5FF", fontSize: 14, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            {t.badge}
          </span>
        </div>

        {/* Logo - CENTERED */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          marginBottom: 48 
        }} className="floating">
          <Image 
            src="/logo-atlas.png" 
            alt="Atlas One" 
            width={180} 
            height={180} 
            style={{ filter: "drop-shadow(0 0 80px rgba(0,229,255,0.6))" }} 
            className="glowing"
            priority 
          />
        </div>

        {/* Title */}
        <h1 style={styles.heading1}>
          {t.title}<br/>
          <span className="shimmer-text">{t.titleHighlight}</span>
        </h1>
        
        <p style={{ ...styles.subtitle, marginBottom: 24 }}>{t.subtitle}</p>
        <p style={{ ...styles.bodyText, marginBottom: 48, maxWidth: 600 }}>{t.description}</p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contact" style={styles.btnPrimary}>
            {t.cta}
            <span style={{ fontSize: 20 }}>→</span>
          </a>
          <a href="#about" style={styles.btnSecondary}>{t.ctaSecondary}</a>
        </div>
      </div>

      {/* Bottom gradient */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 200,
        background: "linear-gradient(to top, rgba(3,11,18,0.9), transparent)",
        pointerEvents: "none",
      }} />
    </section>
  );
}

// ===== ABOUT (EXPANDED) =====
function AboutSection({ lang }: { lang: Language }) {
  const t = content[lang].about;

  return (
    <section id="about" style={styles.sectionTransparent}>
      <div style={styles.container}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={styles.heading2}>{t.title}</h2>
          <p style={{ fontSize: 22, color: "#00E5FF", marginBottom: 24 }}>{t.subtitle}</p>
          <p style={{ ...styles.bodyText, maxWidth: 800 }}>{t.description}</p>
        </div>

        {/* Paragraphs */}
        <div style={{ maxWidth: 900, margin: "0 auto 80px", display: "grid", gap: 32 }}>
          {t.paragraphs.map((p, i) => (
            <div key={i} style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "rgba(0, 229, 255, 0.1)",
                border: "1px solid rgba(0, 229, 255, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <span style={{ color: "#00E5FF", fontSize: 20, fontWeight: 700 }}>{i + 1}</span>
              </div>
              <p style={{ fontSize: 17, color: "#B8C9D9", lineHeight: 1.8, margin: 0 }}>{p}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 24,
          maxWidth: 1000,
          margin: "0 auto",
        }}>
          {t.stats.map((stat, i) => (
            <div key={i} style={{
              padding: 32,
              borderRadius: 20,
              background: "rgba(0, 229, 255, 0.05)",
              border: "1px solid rgba(0, 229, 255, 0.15)",
              textAlign: "center",
            }}>
              <div style={{ fontSize: 48, fontWeight: 800, color: "#00E5FF", marginBottom: 8 }}>{stat.value}</div>
              <div style={{ fontSize: 15, color: "#8BA3B8", fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== ECOSYSTEM =====
function EcosystemSection({ lang }: { lang: Language }) {
  const t = content[lang].ecosystem;

  return (
    <section id="ecosystem" style={styles.sectionTransparent}>
      <div style={styles.container}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <h2 style={{ ...styles.heading2, background: "linear-gradient(135deg, #00E5FF, #00BCD4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {t.title}
          </h2>
          <p style={{ fontSize: 20, color: "#8BA3B8" }}>{t.subtitle}</p>
        </div>

        <div style={styles.grid4}>
          {t.items.map((item, i) => (
            <div key={i} style={{ 
              ...styles.card, 
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}>
              <div style={{ 
                width: 64, 
                height: 64, 
                borderRadius: 16, 
                background: "linear-gradient(135deg, rgba(0,229,255,0.15), rgba(0,229,255,0.05))", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                color: "#00E5FF" 
              }}>
                <Icon type={item.icon} size={32} />
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: "#fff", margin: 0 }}>{item.title}</h3>
              <p style={{ fontSize: 15, color: "#8BA3B8", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto" }}>
                {item.features.map((f, j) => (
                  <span key={j} style={{
                    padding: "6px 12px",
                    borderRadius: 8,
                    background: "rgba(0, 229, 255, 0.08)",
                    color: "#00E5FF",
                    fontSize: 12,
                    fontWeight: 500,
                  }}>{f}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== PROBLEMS =====
function ProblemsSection({ lang }: { lang: Language }) {
  const t = content[lang].problems;

  return (
    <section id="problems" style={styles.sectionTransparent}>
      <div style={styles.container}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={styles.heading2}>{t.title}</h2>
          <p style={{ fontSize: 18, color: "#8BA3B8" }}>{t.subtitle}</p>
        </div>

        <div style={{ ...styles.grid3, marginBottom: 80, maxWidth: 900, margin: "0 auto 80px" }}>
          {t.items.map((item, i) => (
            <div key={i} style={{ 
              ...styles.card, 
              padding: 24,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}>
              <span style={{ fontSize: 24 }}>{item.icon}</span>
              <p style={{ fontSize: 15, color: "#ccc", margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>

        <div style={{ 
          maxWidth: 700, 
          margin: "0 auto", 
          padding: 56, 
          borderRadius: 32, 
          background: "linear-gradient(135deg, rgba(0,229,255,0.1), rgba(0,229,255,0.02))", 
          border: "1px solid rgba(0,229,255,0.2)", 
          textAlign: "center" 
        }}>
          <p style={{ fontSize: 22, color: "#fff", marginBottom: 16 }}>{t.insight}</p>
          <p style={{ fontSize: 32, fontWeight: 700, color: "#00E5FF", margin: 0 }}>{t.insightBold}</p>
        </div>
      </div>
    </section>
  );
}

// ===== TIMELINE/METHOD =====
function TimelineSection({ lang }: { lang: Language }) {
  const t = content[lang].timeline;

  return (
    <section id="method" style={styles.sectionTransparent}>
      <div style={styles.container}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <h2 style={styles.heading2}>{t.title}</h2>
          <blockquote style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>
            &ldquo;<span style={{ color: "#00E5FF" }}>{t.quote}</span>&rdquo;
          </blockquote>
          <p style={{ fontSize: 18, color: "#8BA3B8" }}>{t.quoteSub}</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
          {t.stages.map((stage, i) => (
            <div key={i} style={{ position: "relative" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ 
                  width: 80, 
                  height: 80, 
                  borderRadius: "50%", 
                  border: "2px solid rgba(0,229,255,0.4)",
                  background: "rgba(3,11,18,0.8)",
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  margin: "0 auto 24px",
                  boxShadow: "0 0 30px rgba(0,229,255,0.2)",
                }}>
                  <span style={{ fontSize: 32, fontWeight: 800, color: "#00E5FF" }}>{i + 1}</span>
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{stage.title}</h3>
                <p style={{ fontSize: 14, color: "#00E5FF", marginBottom: 12, fontWeight: 500 }}>{stage.desc}</p>
                <p style={{ fontSize: 14, color: "#8BA3B8", lineHeight: 1.6 }}>{stage.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== FINAL CTA =====
function CTASection({ lang }: { lang: Language }) {
  const t = content[lang].cta;

  return (
    <section id="contact" style={{
      ...styles.sectionTransparent,
      padding: "160px 0",
    }}>
      <div style={{ ...styles.containerSm, textAlign: "center" }}>
        <h2 style={{ ...styles.heading2, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: 16 }}>{t.title}</h2>
        <p style={{ fontSize: 24, color: "#00E5FF", marginBottom: 24 }}>{t.subtitle}</p>
        <p style={{ ...styles.bodyText, marginBottom: 48, maxWidth: 600 }}>{t.description}</p>

        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
          <a 
            href="mailto:atlasonecontact@gmail.com" 
            style={{
              ...styles.btnPrimary,
              padding: "24px 56px",
              fontSize: 20,
            }}
          >
            {t.button}
            <span style={{ fontSize: 24 }}>→</span>
          </a>
        </div>

        {/* Social */}
        <div style={{ marginTop: 80, display: "flex", alignItems: "center", justifyContent: "center", gap: 24 }}>
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                width: 56, 
                height: 56, 
                borderRadius: 16, 
                background: "rgba(255,255,255,0.05)", 
                border: "1px solid rgba(255,255,255,0.1)", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                color: "#8BA3B8", 
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,229,255,0.5)";
                e.currentTarget.style.color = "#00E5FF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "#8BA3B8";
              }}
              aria-label={social.name}
            >
              <Icon type={social.icon} size={24} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== FOOTER =====
function FooterSection({ lang }: { lang: Language }) {
  const t = content[lang].footer;

  return (
    <footer style={{ 
      padding: "60px 0", 
      backgroundColor: "rgba(1, 4, 8, 0.95)", 
      borderTop: "1px solid rgba(0,229,255,0.1)",
      position: "relative",
      zIndex: 1,
    }}>
      <div style={{ ...styles.container, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Image src="/logo-atlas.png" alt="Atlas One" width={40} height={40} />
          <div>
            <span style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>Atlas One</span>
            <p style={{ fontSize: 13, color: "#666", margin: 0 }}>{t.tagline}</p>
          </div>
        </div>

        <p style={{ fontSize: 13, color: "#555" }}>{t.rights}</p>
      </div>
    </footer>
  );
}

// ===== MAIN =====
export default function Home() {
  const [lang, setLang] = useState<Language>("es");

  return (
    <main style={{ 
      minHeight: "100vh", 
      backgroundColor: "#030B12", 
      color: "#fff",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Rotating Planet Background - FIXED */}
      <RotatingPlanet />
      
      {/* Content */}
      <Navigation lang={lang} setLang={setLang} />
      <HeroSection lang={lang} />
      <AboutSection lang={lang} />
      <EcosystemSection lang={lang} />
      <ProblemsSection lang={lang} />
      <TimelineSection lang={lang} />
      <CTASection lang={lang} />
      <FooterSection lang={lang} />
    </main>
  );
}
