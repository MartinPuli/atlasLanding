"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Language = "en" | "es";

const content = {
  en: {
    nav: { home: "Home", solutions: "Solutions", about: "About", contact: "Contact" },
    hero: {
      title: "Innovating Data & Technology",
      subtitle: "Decisions. Real-Time. Real Impact.",
      description: "Stop guessing. Start building. We architect the data infrastructure that powers your next big leap.",
      cta: "Start Building",
    },
    about: {
      title: "Who We Are",
      description: "We are Atlas One, a team obsessed with transforming chaos into clarity. We don't just build software—we engineer ecosystems that grow with your ambition.",
    },
    ecosystem: {
      title: "Our Ecosystem",
      subtitle: "Four pillars powering your transformation.",
      items: [
        { title: "Artificial Intelligence", desc: "We deploy autonomous agents that sell, support, and analyze for you 24/7.", icon: "ai" },
        { title: "Custom Software", desc: "Internal systems and platforms that fit your operation like a glove.", icon: "code" },
        { title: "Digital Security", desc: "Military-grade automated defense to protect your most valuable asset.", icon: "shield" },
        { title: "Data Intelligence", desc: "Interactive dashboards that reveal hidden opportunities in your data.", icon: "chart" },
      ],
    },
    problems: {
      title: "Why Systems Fail",
      items: ["Manual spreadsheets", "Disconnected tools", "Unused expensive CRMs", "Knowledge silos", "Meaningless data", "AI as toy, not tool"],
      insight: "It's not about buying more software.",
      insightBold: "It's about architecture that works.",
      cta: "Fix Your Infrastructure",
    },
    timeline: {
      quote: "Software shouldn't rust.",
      quoteSub: "We build living systems designed to evolve with you.",
      stages: [
        { title: "Foundation", desc: "Digital Core" },
        { title: "Automation", desc: "Speed & Flow" },
        { title: "Intelligence", desc: "Cognitive Layer" },
        { title: "Evolution", desc: "Limitless Scale" },
      ],
    },
    footer: {
      tagline: "Building the future of your business, line by line.",
      rights: "© 2025 Atlas One. All rights reserved.",
    },
  },
  es: {
    nav: { home: "Inicio", solutions: "Soluciones", about: "Nosotros", contact: "Contacto" },
    hero: {
      title: "Innovando en Datos y Tecnología",
      subtitle: "Decisiones Reales. Impacto Real.",
      description: "Dejá de adivinar. Empezá a construir. Diseñamos la infraestructura de datos que impulsa tu próximo gran salto.",
      cta: "Empezar Ahora",
    },
    about: {
      title: "Quiénes Somos",
      description: "Somos Atlas One, un equipo obsesionado con transformar el caos en claridad. No solo construimos software—diseñamos ecosistemas que crecen con tu ambición.",
    },
    ecosystem: {
      title: "Nuestro Ecosistema",
      subtitle: "Cuatro pilares que impulsan tu transformación.",
      items: [
        { title: "Inteligencia Artificial", desc: "Desplegamos agentes autónomos que venden, asisten y analizan por vos 24/7.", icon: "ai" },
        { title: "Software a Medida", desc: "Sistemas y plataformas que le calzan a tu operación como un guante.", icon: "code" },
        { title: "Seguridad Digital", desc: "Defensa automatizada de grado militar para proteger tu activo más valioso.", icon: "shield" },
        { title: "Inteligencia de Datos", desc: "Dashboards interactivos que revelan oportunidades ocultas en tus datos.", icon: "chart" },
      ],
    },
    problems: {
      title: "Por Qué Fallan los Sistemas",
      items: ["Planillas manuales", "Herramientas desconectadas", "CRMs caros sin uso", "Conocimiento aislado", "Datos sin sentido", "IA como juguete"],
      insight: "No se trata de comprar más software.",
      insightBold: "Se trata de arquitectura que funcione.",
      cta: "Arreglá tu Infraestructura",
    },
    timeline: {
      quote: "El software no debería oxidarse.",
      quoteSub: "Construimos sistemas vivos diseñados para evolucionar con vos.",
      stages: [
        { title: "Cimientos", desc: "Núcleo Digital" },
        { title: "Automatización", desc: "Velocidad y Flujo" },
        { title: "Inteligencia", desc: "Capa Cognitiva" },
        { title: "Evolución", desc: "Escala Sin Límites" },
      ],
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
    <svg viewBox="0 0 60 30" style={{ width: 24, height: 16 }}>
      <rect width="60" height="30" fill="#b22234" />
      <path d="M0,4h60v4h-60M0,12h60v4h-60M0,20h60v4h-60" fill="#fff" />
      <rect width="24" height="15" fill="#3c3b6e" />
    </svg>
  );
}

function FlagAR() {
  return (
    <svg viewBox="0 0 30 20" style={{ width: 24, height: 16 }}>
      <rect width="30" height="20" fill="#fff" />
      <rect width="30" height="6" fill="#74acdf" />
      <rect y="14" width="30" height="6" fill="#74acdf" />
      <circle cx="15" cy="10" r="2" fill="#f6b40e" />
    </svg>
  );
}

// ===== STYLES =====
const styles = {
  // Layout
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

  // Sections
  section: {
    width: "100%",
    padding: "120px 0",
  } as React.CSSProperties,

  sectionDark: {
    width: "100%",
    padding: "120px 0",
    backgroundColor: "#020609",
  } as React.CSSProperties,

  // Text
  heading1: {
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
    fontWeight: 700,
    color: "#ffffff",
    marginBottom: 24,
    lineHeight: 1.1,
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
    fontWeight: 300,
  } as React.CSSProperties,

  bodyText: {
    fontSize: "clamp(1rem, 2vw, 1.25rem)",
    color: "#8BA3B8",
    lineHeight: 1.7,
    maxWidth: 700,
    margin: "0 auto",
  } as React.CSSProperties,

  // Buttons
  btnPrimary: {
    display: "inline-block",
    padding: "18px 48px",
    background: "linear-gradient(135deg, #00E5FF, #00BCD4)",
    color: "#030B12",
    fontWeight: 700,
    fontSize: 18,
    borderRadius: 16,
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 0 40px rgba(0, 229, 255, 0.4)",
  } as React.CSSProperties,

  btnSecondary: {
    display: "inline-block",
    padding: "16px 40px",
    background: "transparent",
    color: "#00E5FF",
    fontWeight: 700,
    fontSize: 16,
    borderRadius: 16,
    textDecoration: "none",
    border: "2px solid #00E5FF",
    cursor: "pointer",
  } as React.CSSProperties,

  // Cards
  card: {
    padding: 32,
    borderRadius: 24,
    background: "rgba(255, 255, 255, 0.03)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    transition: "all 0.3s ease",
  } as React.CSSProperties,

  // Grid
  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 24,
  } as React.CSSProperties,

  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 16,
  } as React.CSSProperties,

  // Flex
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as React.CSSProperties,

  textCenter: {
    textAlign: "center" as const,
  },
};

// ===== NAVIGATION =====
function Navigation({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const t = content[lang].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      padding: "16px 0",
      backgroundColor: scrolled ? "rgba(3, 11, 18, 0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0, 229, 255, 0.1)" : "none",
      transition: "all 0.3s ease",
    }}>
      <div style={{ ...styles.container, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <Image src="/logo-atlas.png" alt="Atlas One" width={48} height={48} />
          <span style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>Atlas One</span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#" style={{ color: "#8BA3B8", textDecoration: "none" }}>{t.home}</a>
            <a href="#ecosystem" style={{ color: "#8BA3B8", textDecoration: "none" }}>{t.solutions}</a>
            <a href="#about" style={{ color: "#8BA3B8", textDecoration: "none" }}>{t.about}</a>
            <a href="#footer" style={{ color: "#8BA3B8", textDecoration: "none" }}>{t.contact}</a>
          </div>

          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.05)",
              cursor: "pointer",
            }}
          >
            <span style={{ opacity: lang === "en" ? 1 : 0.4 }}><FlagUS /></span>
            <span style={{ color: "#666" }}>|</span>
            <span style={{ opacity: lang === "es" ? 1 : 0.4 }}><FlagAR /></span>
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
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      backgroundColor: "#010408",
    }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/atlas-bg.jpg" alt="" width={1000} height={1000} style={{ width: "80vh", height: "80vh", objectFit: "contain", opacity: 0.4 }} priority />
      </div>

      {/* Glow */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 400, background: "linear-gradient(to top, rgba(0,229,255,0.15), transparent)" }} />

      {/* Content */}
      <div style={{ ...styles.containerSm, position: "relative", zIndex: 10, textAlign: "center", paddingTop: 100, paddingBottom: 100 }}>
        <div style={{ marginBottom: 48 }}>
          <Image src="/logo-atlas.png" alt="Atlas One" width={200} height={200} style={{ filter: "drop-shadow(0 0 60px rgba(0,229,255,0.6))" }} priority />
        </div>

        <h1 style={styles.heading1}>{t.title}</h1>
        <p style={styles.subtitle}>{t.subtitle}</p>
        <p style={{ ...styles.bodyText, marginBottom: 48 }}>{t.description}</p>

        <a href="mailto:atlasonecontact@gmail.com" style={styles.btnPrimary}>{t.cta}</a>
      </div>
    </section>
  );
}

// ===== ABOUT =====
function AboutSection({ lang }: { lang: Language }) {
  const t = content[lang].about;

  return (
    <section id="about" style={{ ...styles.section, backgroundColor: "#030B12" }}>
      {/* Top line */}
      <div style={{ width: 1, height: 80, background: "linear-gradient(to bottom, transparent, rgba(0,229,255,0.5), transparent)", margin: "0 auto 60px" }} />

      <div style={{ ...styles.containerSm, textAlign: "center" }}>
        <h2 style={styles.heading2}>{t.title}</h2>
        <p style={styles.bodyText}>{t.description}</p>
      </div>

      {/* Bottom line */}
      <div style={{ width: 1, height: 80, background: "linear-gradient(to bottom, transparent, rgba(0,229,255,0.5), transparent)", margin: "60px auto 0" }} />
    </section>
  );
}

// ===== ECOSYSTEM =====
function EcosystemSection({ lang }: { lang: Language }) {
  const t = content[lang].ecosystem;

  return (
    <section id="ecosystem" style={styles.sectionDark}>
      <div style={styles.container}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <h2 style={{ ...styles.heading2, background: "linear-gradient(135deg, #00E5FF, #00BCD4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {t.title}
          </h2>
          <p style={{ fontSize: 20, color: "#8BA3B8" }}>{t.subtitle}</p>
        </div>

        {/* Cards */}
        <div style={styles.grid4}>
          {t.items.map((item, i) => (
            <div key={i} style={{ ...styles.card, textAlign: "center" }}>
              <div style={{ width: 72, height: 72, borderRadius: 20, background: "rgba(0,229,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", color: "#00E5FF" }}>
                <Icon type={item.icon} size={36} />
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 12 }}>{item.title}</h3>
              <p style={{ fontSize: 15, color: "#8BA3B8", lineHeight: 1.6 }}>{item.desc}</p>
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
    <section id="problems" style={{ ...styles.section, backgroundColor: "#030B12" }}>
      <div style={styles.container}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={styles.heading2}>{t.title}</h2>
        </div>

        {/* Problems Grid */}
        <div style={{ ...styles.grid3, marginBottom: 80 }}>
          {t.items.map((item, i) => (
            <div key={i} style={{ ...styles.card, textAlign: "center", padding: 24 }}>
              <p style={{ fontSize: 16, color: "#ccc" }}>{item}</p>
            </div>
          ))}
        </div>

        {/* Insight Box */}
        <div style={{ maxWidth: 700, margin: "0 auto", padding: 48, borderRadius: 32, background: "linear-gradient(to bottom, rgba(0,229,255,0.1), transparent)", border: "1px solid rgba(0,229,255,0.2)", textAlign: "center" }}>
          <p style={{ fontSize: 22, color: "#fff", marginBottom: 16 }}>{t.insight}</p>
          <p style={{ fontSize: 28, fontWeight: 700, color: "#00E5FF", marginBottom: 32 }}>{t.insightBold}</p>
          <a href="#footer" style={styles.btnSecondary}>{t.cta}</a>
        </div>
      </div>
    </section>
  );
}

// ===== TIMELINE =====
function TimelineSection({ lang }: { lang: Language }) {
  const t = content[lang].timeline;

  return (
    <section style={styles.sectionDark}>
      <div style={styles.container}>
        {/* Quote */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <blockquote style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>
            &ldquo;<span style={{ color: "#00E5FF" }}>{t.quote}</span>&rdquo;
          </blockquote>
          <p style={{ fontSize: 18, color: "#8BA3B8" }}>{t.quoteSub}</p>
        </div>

        {/* Stages */}
        <div style={styles.grid4}>
          {t.stages.map((stage, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", border: "2px solid rgba(0,229,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", background: "#030B12" }}>
                <span style={{ fontSize: 32, fontWeight: 700, color: "#00E5FF" }}>{i + 1}</span>
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{stage.title}</h3>
              <p style={{ fontSize: 15, color: "#8BA3B8" }}>{stage.desc}</p>
            </div>
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
    <footer id="footer" style={{ padding: "100px 0", backgroundColor: "#010408", borderTop: "1px solid rgba(0,229,255,0.1)" }}>
      <div style={{ ...styles.containerSm, textAlign: "center" }}>
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 24 }}>
          <Image src="/logo-atlas.png" alt="Atlas One" width={56} height={56} />
          <span style={{ fontSize: 24, fontWeight: 700, color: "#fff" }}>Atlas One</span>
        </div>

        {/* Tagline */}
        <p style={{ fontSize: 18, color: "#8BA3B8", marginBottom: 40, maxWidth: 500, margin: "0 auto 40px" }}>{t.tagline}</p>

        {/* Social */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 40 }}>
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#8BA3B8", textDecoration: "none" }}
              aria-label={social.name}
            >
              <Icon type={social.icon} size={24} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: 200, height: 1, background: "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)", margin: "0 auto 24px" }} />

        {/* Copyright */}
        <p style={{ fontSize: 14, color: "#666" }}>{t.rights}</p>
      </div>
    </footer>
  );
}

// ===== MAIN =====
export default function Home() {
  const [lang, setLang] = useState<Language>("es");

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#030B12", color: "#fff" }}>
      <Navigation lang={lang} setLang={setLang} />
      <HeroSection lang={lang} />
      <AboutSection lang={lang} />
      <EcosystemSection lang={lang} />
      <ProblemsSection lang={lang} />
      <TimelineSection lang={lang} />
      <FooterSection lang={lang} />
    </main>
  );
}
