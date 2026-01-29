"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ========== TYPES & CONTENT ========== */
type Language = "en" | "es";

const content = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      solutions: "Ecosystem",
      method: "Method",
      contact: "Contact",
    },
    hero: {
      title: "We Build the Future",
      titleHighlight: "of Your Business",
      subtitle: "Real Decisions. Real Impact.",
      description:
        "Stop guessing. Start building. We architect the data infrastructure and intelligent systems that power your next big leap.",
      cta: "Start Your Transformation",
      ctaSecondary: "Learn More",
    },
    about: {
      title: "Who We Are",
      subtitle: "Driven by AI & Robotics Passion",
      paragraphs: [
        "We're obsessed with Artificial Intelligence and Robotics. Every tool we offer was born from our own need to innovate faster, work smarter, and eliminate friction.",
        "What we build for you is battle-tested on ourselves first. Our AI agents manage our projects, our analytics dashboards guide our decisions, and our automations keep us running 24/7.",
        "When you work with us, you're not getting untested theory—you're getting solutions that have already proven their worth in the real world, starting with our own.",
      ],
    },
    ecosystem: {
      title: "The Atlas Ecosystem",
      subtitle: "Four pillars powering your digital transformation.",
      items: [
        {
          title: "Atlas AI",
          desc: "We deploy autonomous AI agents that sell, support, and analyze for you around the clock. From intelligent chatbots to predictive analytics—your business never sleeps.",
          icon: "ai",
          features: ["24/7 AI Agents", "Predictive Analytics", "Natural Language Processing"],
        },
        {
          title: "Atlas Software",
          desc: "Bespoke internal systems and platforms tailored to your unique operations. No more adapting to generic tools—your software adapts to you.",
          icon: "code",
          features: ["Tailored Solutions", "Seamless Integration", "Scalable Architecture"],
        },
        {
          title: "Atlas Cybersecurity",
          desc: "Military-grade automated defense systems to protect your most valuable digital assets. Prevention, detection, and response—all automated.",
          icon: "shield",
          features: ["Threat Detection", "Automated Response", "Compliance Ready"],
        },
        {
          title: "Atlas Analytics",
          desc: "Transform raw data into strategic insights with interactive dashboards that reveal hidden opportunities and drive informed decisions.",
          icon: "chart",
          features: ["Real-time Dashboards", "Business Intelligence", "Data Visualization"],
        },
      ],
    },
    problems: {
      title: "Why Traditional Systems Fail",
      subtitle: "Sound familiar?",
      items: [
        { text: "Manual spreadsheets everywhere", icon: "file" },
        { text: "Disconnected tools that don't talk", icon: "disconnect" },
        { text: "Expensive CRMs gathering dust", icon: "money" },
        { text: "Knowledge trapped in silos", icon: "lock" },
        { text: "Data without meaning", icon: "chartDown" },
        { text: "AI used as a toy, not a tool", icon: "robot" },
      ],
      insight: "It's not about buying more software.",
      insightBold: "It's about architecture that actually works.",
    },
    timeline: {
      title: "Our Method",
      quote: "Software shouldn't rust.",
      quoteSub: "We build living systems designed to evolve alongside your business.",
      stages: [
        {
          title: "Foundation",
          desc: "Digital Core Architecture",
          detail: "We analyze your current state and design a solid, scalable foundation.",
        },
        {
          title: "Automation",
          desc: "Speed & Workflow Optimization",
          detail: "We eliminate manual processes and create intelligent workflows.",
        },
        {
          title: "Intelligence",
          desc: "Cognitive Layer Integration",
          detail: "We add AI and analytics to transform data into decisions.",
        },
        {
          title: "Evolution",
          desc: "Continuous Growth & Scale",
          detail: "Your systems grow with you, adapting to new challenges.",
        },
      ],
    },
    cta: {
      title: "Ready to Transform Your Business?",
      subtitle: "Let's build something extraordinary together.",
      description:
        "Schedule a free consultation and discover how Atlas One can accelerate your digital transformation.",
      button: "Start Your Journey",
    },
    footer: {
      tagline: "Building the future of your business, line by line.",
      rights: "© 2026 Atlas One. All rights reserved.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      solutions: "Ecosistema",
      method: "Método",
      contact: "Contacto",
    },
    hero: {
      title: "Construimos el Futuro",
      titleHighlight: "de Tu Negocio",
      subtitle: "Decisiones Reales. Impacto Real.",
      description:
        "Dejá de adivinar. Empezá a construir. Diseñamos la infraestructura de datos y sistemas inteligentes que impulsan tu próximo gran salto.",
      cta: "Comenzá Tu Transformación",
      ctaSecondary: "Conocé Más",
    },
    about: {
      title: "Quiénes Somos",
      subtitle: "Apasionados por la IA y la Robótica",
      paragraphs: [
        "Estamos obsesionados con la Inteligencia Artificial y la Robótica. Cada herramienta que ofrecemos nació de nuestra propia necesidad de innovar más rápido, trabajar más inteligentemente y eliminar fricciones.",
        "Lo que construimos para vos lo probamos primero en nosotros mismos. Nuestros agentes de IA gestionan nuestros proyectos, nuestros dashboards de analítica guían nuestras decisiones, y nuestras automatizaciones nos mantienen operando 24/7.",
        "Cuando trabajás con nosotros, no estás recibiendo teoría sin probar—estás obteniendo soluciones que ya demostraron su valor en el mundo real, empezando por el nuestro.",
      ],
    },
    ecosystem: {
      title: "Nuestro Ecosistema",
      subtitle: "Cuatro pilares que impulsan tu transformación digital.",
      items: [
        {
          title: "Atlas IA",
          desc: "Desplegamos agentes de IA autónomos que venden, asisten y analizan por vos las 24 horas. Desde chatbots inteligentes hasta analítica predictiva—tu negocio nunca duerme.",
          icon: "ai",
          features: ["Agentes IA 24/7", "Analítica Predictiva", "Procesamiento de Lenguaje"],
        },
        {
          title: "Atlas Software",
          desc: "Sistemas internos y plataformas hechas a medida para tus operaciones únicas. No más adaptarte a herramientas genéricas—tu software se adapta a vos.",
          icon: "code",
          features: ["Soluciones a Medida", "Integración Perfecta", "Arquitectura Escalable"],
        },
        {
          title: "Atlas Cybersecurity",
          desc: "Sistemas de defensa automatizados de grado militar para proteger tus activos digitales más valiosos. Prevención, detección y respuesta—todo automatizado.",
          icon: "shield",
          features: ["Detección de Amenazas", "Respuesta Automática", "Cumplimiento Normativo"],
        },
        {
          title: "Atlas Analytics",
          desc: "Transformá datos crudos en insights estratégicos con dashboards interactivos que revelan oportunidades ocultas e impulsan decisiones informadas.",
          icon: "chart",
          features: ["Dashboards en Tiempo Real", "Business Intelligence", "Visualización de Datos"],
        },
      ],
    },
    problems: {
      title: "Por Qué Fallan los Sistemas Tradicionales",
      subtitle: "¿Te suena familiar?",
      items: [
        { text: "Planillas manuales por todos lados", icon: "file" },
        { text: "Herramientas desconectadas", icon: "disconnect" },
        { text: "CRMs caros juntando polvo", icon: "money" },
        { text: "Conocimiento atrapado en silos", icon: "lock" },
        { text: "Datos sin significado", icon: "chartDown" },
        { text: "IA usada como juguete, no herramienta", icon: "robot" },
      ],
      insight: "No se trata de comprar más software.",
      insightBold: "Se trata de arquitectura que realmente funcione.",
    },
    timeline: {
      title: "Nuestro Método",
      quote: "El software no debería oxidarse.",
      quoteSub: "Construimos sistemas vivos diseñados para evolucionar junto a tu negocio.",
      stages: [
        {
          title: "Cimientos",
          desc: "Arquitectura del Núcleo Digital",
          detail: "Analizamos tu estado actual y diseñamos una base sólida y escalable.",
        },
        {
          title: "Automatización",
          desc: "Velocidad y Optimización de Flujos",
          detail: "Eliminamos procesos manuales y creamos flujos de trabajo inteligentes.",
        },
        {
          title: "Inteligencia",
          desc: "Integración de Capa Cognitiva",
          detail: "Agregamos IA y analítica para transformar datos en decisiones.",
        },
        {
          title: "Evolución",
          desc: "Crecimiento y Escala Continua",
          detail: "Tus sistemas crecen con vos, adaptándose a nuevos desafíos.",
        },
      ],
    },
    cta: {
      title: "¿Listo para Transformar Tu Negocio?",
      subtitle: "Construyamos algo extraordinario juntos.",
      description:
        "Agendá una consulta gratuita y descubrí cómo Atlas One puede acelerar tu transformación digital.",
      button: "Comenzá Tu Camino",
    },
    footer: {
      tagline: "Construyendo el futuro de tu negocio, línea por línea.",
      rights: "© 2026 Atlas One. Todos los derechos reservados.",
    },
  },
};

const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/atlasone.arg/", icon: "instagram" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/atlas-one-erp-ar/", icon: "linkedin" },
  { name: "X", url: "https://x.com/atlasonearg", icon: "x" },
];

/* ========== ICONS ========== */
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
    file: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={style}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
    disconnect: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={style}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M12 12l-.75.75M9.75 9.75l-3 3m10.5-3l1.5-1.5a2.25 2.25 0 00-3.182-3.182L13.5 7.5m-3 3l-1.5 1.5a2.25 2.25 0 003.182 3.182l1.5-1.5" /></svg>,
    money: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={style}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    lock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={style}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>,
    chartDown: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={style}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
    robot: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={style}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.854 1.59-2.068C19.444 15.112 21.75 12.091 21.75 9c0-3.21-2.42-5.748-5.717-5.968C14.773 2.855 12.912 2.25 12 2.25c-.912 0-2.773.605-4.033.782C4.67 3.252 2.25 5.79 2.25 9c0 3.091 2.306 6.112 5.91 6.74.932.214 1.59 1.085 1.59 2.068V18" /></svg>,
    mail: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={style}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
    menu: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>,
    close: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
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

/* ========== COMPONENTS ========== */

// Animation Wrapper
function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function Navigation({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[lang].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: t.home },
    { href: "#about", label: t.about },
    { href: "#ecosystem", label: t.solutions },
    { href: "#method", label: t.method },
    { href: "#contact", label: t.contact },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2 bg-[#030B12]/95 backdrop-blur-md border-b border-white/10" : "py-4 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo - Icon + Horizontal Name (hidden on mobile) */}
          <a href="#hero" className="flex items-center gap-3">
            <Image src="/logo-atlas.png" alt="Atlas One" width={40} height={40} className="drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]" />
            {/* Horizontal name - hidden on mobile */}
            <Image
              src="/nombre-atlas-horizontal.png"
              alt="Atlas One"
              width={140}
              height={35}
              style={{ width: 'auto', height: 'auto' }}
              className="hidden md:block object-contain drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#8BA3B8] hover:text-[#00E5FF] font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ml-4"
            >
              <span className={lang === "en" ? "opacity-100" : "opacity-40"}><FlagUS /></span>
              <span className="text-white/20 text-xs">|</span>
              <span className={lang === "es" ? "opacity-100" : "opacity-40"}><FlagAR /></span>
            </button>
          </div>

          {/* Mobile: Language + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="flex items-center gap-1 px-2 py-1 rounded-full border border-white/10 bg-white/5"
            >
              <span className={lang === "en" ? "opacity-100" : "opacity-40"}><FlagUS /></span>
              <span className={lang === "es" ? "opacity-100" : "opacity-40"}><FlagAR /></span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white"
              aria-label="Toggle menu"
            >
              <Icon type={mobileMenuOpen ? "close" : "menu"} size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Branded */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-gradient-to-b from-[#030B12] via-[#020810] to-[#010408] backdrop-blur-xl md:hidden pt-24">
          {/* Decorative glow */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#00E5FF]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative flex flex-col items-center gap-8 p-8">
            {/* Logo in mobile menu */}
            <Image src="/logo-atlas.png" alt="Atlas One" width={60} height={60} className="mb-4 drop-shadow-[0_0_30px_rgba(0,229,255,0.6)]" />
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl text-white hover:text-[#00E5FF] font-semibold transition-all hover:scale-105"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {link.label}
              </a>
            ))}
            {/* CTA in mobile menu */}
            <a
              href="mailto:atlasonecontact@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-8 py-3 bg-gradient-to-r from-[#00E5FF] to-[#00BCD4] text-[#030B12] font-bold rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.4)]"
            >
              Contactar →
            </a>
          </div>
        </div>
      )}
    </>
  );
}

function HeroSection({ lang }: { lang: Language }) {
  const t = content[lang].hero;
  const planetRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const rotationRef = useRef(0);

  useEffect(() => {
    let animationId: number;

    const animate = () => {
      if (!planetRef.current) return;

      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      // Continuous slow rotation + scroll-based rotation
      // Scroll down = rotate right (positive), scroll up = rotate left (negative)
      rotationRef.current += 0.05 + (scrollDelta * 0.1);

      planetRef.current.style.transform = `translate(-50%, -50%) rotate(${rotationRef.current}deg)`;
      lastScrollY.current = currentScrollY;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-screen flex flex-col items-center justify-center overflow-hidden pb-20 sm:pb-28">
      {/* Planet - FIXED GLOBAL with continuous + scroll-based rotation */}
      <div
        ref={planetRef}
        className="fixed top-1/2 left-1/2 w-[65vw] h-[65vw] sm:w-[80vh] sm:h-[80vh] md:w-[85vh] md:h-[85vh] lg:w-[90vh] lg:h-[90vh] max-w-[1000px] max-h-[1000px] z-0 opacity-60 pointer-events-none will-change-transform rounded-full overflow-hidden"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <Image
          src="/digital-globe.jpg"
          alt=""
          fill
          className="object-cover scale-110"
          priority
        />
        {/* Radial fade to soften edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,#030B12_75%)]" />
      </div>

      {/* Hero dark overlay to dim planet in this section */}
      <div className="absolute inset-0 bg-[#030B12]/50 z-[1]" />

      {/* Subtle gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030B12]/30 z-[1]" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-24 sm:pt-20">

        {/* LOGO - No Background, Screen Blend */}
        <div className="flex justify-center mb-4 sm:mb-6 animate-float">
          <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px]">
            <Image
              src="/logo-atlas.png"
              alt="Atlas One"
              fill
              className="object-contain mix-blend-screen drop-shadow-[0_0_80px_rgba(0,229,255,0.8)]"
              priority
            />
          </div>
        </div>

        <FadeIn>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 sm:mb-8 leading-[1.05] tracking-tight drop-shadow-2xl">
            {t.title}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-white to-[#00E5FF] animate-pulse">
              {t.titleHighlight}
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg sm:text-xl md:text-3xl text-[#00E5FF] mb-6 sm:mb-8 font-light tracking-wide">{t.subtitle}</p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-base sm:text-lg md:text-xl text-[#8BA3B8] max-w-3xl mx-auto mb-10 sm:mb-14 leading-relaxed">{t.description}</p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a href="mailto:atlasonecontact@gmail.com" className="px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#00E5FF] to-[#00BCD4] text-[#030B12] font-bold text-lg sm:text-xl rounded-2xl shadow-[0_0_50px_rgba(0,229,255,0.4)] hover:shadow-[0_0_80px_rgba(0,229,255,0.6)] hover:-translate-y-1 transition-all">
              {t.cta} →
            </a>
            <a href="#about" className="px-8 sm:px-10 py-4 sm:py-5 bg-transparent text-[#00E5FF] font-bold text-lg sm:text-xl border border-[#00E5FF]/50 rounded-2xl hover:bg-[#00E5FF]/10 transition-all">
              {t.ctaSecondary}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function AboutSection({ lang }: { lang: Language }) {
  const t = content[lang].about;

  return (
    <section id="about" className="relative z-10 py-20 sm:py-32 bg-gradient-to-b from-[#041820]/60 to-[#030B11]/60 backdrop-blur-sm border-t border-[#00E5FF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
            <p className="text-lg sm:text-xl text-[#00E5FF]">{t.subtitle}</p>
          </FadeIn>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6 sm:gap-8">
          {t.paragraphs.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex gap-4 sm:gap-6 items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center shrink-0 text-[#00E5FF] font-bold text-lg sm:text-xl">
                  {i + 1}
                </div>
                <p className="text-base sm:text-lg text-[#B8C9D9] leading-relaxed pt-1 sm:pt-2">{p}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcosystemSection({ lang }: { lang: Language }) {
  const t = content[lang].ecosystem;

  // Color scheme per card: AI=purple, Software=blue, Cybersec=emerald, Analytics=red
  const cardColors = [
    { primary: "#A855F7", glow: "rgba(168,85,247,0.4)", border: "rgba(168,85,247,0.5)", bg: "rgba(168,85,247,0.15)" }, // AI - Purple
    { primary: "#3B82F6", glow: "rgba(59,130,246,0.4)", border: "rgba(59,130,246,0.5)", bg: "rgba(59,130,246,0.15)" }, // Software - Blue
    { primary: "#10B981", glow: "rgba(16,185,129,0.4)", border: "rgba(16,185,129,0.5)", bg: "rgba(16,185,129,0.15)" }, // Cybersec - Emerald
    { primary: "#EF4444", glow: "rgba(239,68,68,0.4)", border: "rgba(239,68,68,0.5)", bg: "rgba(239,68,68,0.15)" }, // Analytics - Red
  ];

  return (
    <section id="ecosystem" className="relative z-10 py-20 sm:py-32 bg-gradient-to-b from-[#0A0F18]/60 to-[#050810]/60 backdrop-blur-md border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00BCD4] mb-4">
              {t.title}
            </h2>
            <p className="text-lg sm:text-xl text-[#8BA3B8]">{t.subtitle}</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.items.map((item, i) => {
            const color = cardColors[i];
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className="group h-full p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.06] to-transparent border transition-all duration-500 flex flex-col items-start gap-4 sm:gap-5 hover:scale-[1.02]"
                  style={{
                    borderColor: `rgba(255,255,255,0.1)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = color.border;
                    e.currentTarget.style.boxShadow = `0 0 40px ${color.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Colored Icon Container */}
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${color.bg}, transparent)`,
                      color: color.primary,
                      boxShadow: `0 0 20px ${color.glow}`
                    }}
                  >
                    <Icon type={item.icon} size={36} />
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-white transition-colors duration-300"
                    style={{}}
                    onMouseEnter={(e) => e.currentTarget.style.color = color.primary}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#8BA3B8] leading-relaxed text-sm flex-grow">{item.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5 w-full">
                    {item.features.map((f, j) => (
                      <span
                        key={j}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold"
                        style={{
                          background: color.bg,
                          color: color.primary,
                          border: `1px solid ${color.border}`
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProblemsSection({ lang }: { lang: Language }) {
  const t = content[lang].problems;

  return (
    <section id="problem" className="relative z-10 py-20 sm:py-32 bg-gradient-to-b from-[#18120A]/60 to-[#100D08]/60 backdrop-blur-sm border-t border-[#F59E0B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
            <p className="text-base sm:text-lg text-[#8BA3B8]">{t.subtitle}</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12 sm:mb-20">
          {t.items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group h-full min-h-[100px] sm:min-h-[120px] p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1] flex items-center gap-4 sm:gap-5 hover:bg-white/[0.1] hover:border-[#00E5FF]/40 hover:shadow-[0_0_25px_rgba(0,229,255,0.15)] transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shrink-0 group-hover:scale-110 group-hover:bg-[#00E5FF]/20 transition-all duration-300">
                  <Icon type={item.icon} size={24} />
                </div>
                <p className="text-gray-200 font-medium text-sm sm:text-base">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-[2rem] bg-gradient-to-br from-[#00E5FF]/10 to-transparent border border-[#00E5FF]/20 text-center">
            <p className="text-xl sm:text-2xl text-white mb-4">{t.insight}</p>
            <p className="text-2xl sm:text-3xl font-bold text-[#00E5FF]">{t.insightBold}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function TimelineSection({ lang }: { lang: Language }) {
  const t = content[lang].timeline;

  return (
    <section id="method" className="relative z-10 py-20 sm:py-32 bg-gradient-to-b from-[#0D0818]/60 to-[#080510]/60 backdrop-blur-sm border-t border-[#A855F7]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">{t.title}</h2>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              &ldquo;<span className="text-[#00E5FF]">{t.quote}</span>&rdquo;
            </blockquote>
            <p className="text-lg sm:text-xl text-[#8BA3B8]">{t.quoteSub}</p>
          </FadeIn>
        </div>

        {/* Timeline with connecting line */}
        <div className="relative">
          {/* Connecting line - hidden on mobile, visible on lg */}
          <div className="hidden lg:block absolute top-12 left-[calc(12.5%+48px)] right-[calc(12.5%+48px)] h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
            {t.stages.map((stage, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="relative text-center group">
                  {/* Circle with number */}
                  <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#00E5FF]/30 bg-[#030B12] flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:border-[#00E5FF] group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(0,229,255,0.15)]">
                    <span className="text-2xl sm:text-3xl font-bold text-[#00E5FF]">{i + 1}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{stage.title}</h3>
                  <p className="text-[#00E5FF] font-medium mb-2 sm:mb-3 text-sm sm:text-base">{stage.desc}</p>
                  <p className="text-[#8BA3B8] text-xs sm:text-sm leading-relaxed">{stage.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection({ lang }: { lang: Language }) {
  const t = content[lang].cta;

  return (
    <section id="contact" className="relative z-10 py-24 sm:py-40 bg-gradient-to-b from-[#040812]/70 to-[#020408]/70 backdrop-blur-sm border-t border-[#3B82F6]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">{t.title}</h2>
          <p className="text-xl sm:text-2xl text-[#00E5FF] mb-4 sm:mb-6">{t.subtitle}</p>
          <p className="text-lg sm:text-xl text-[#8BA3B8] mb-8 sm:mb-12">{t.description}</p>

          <a
            href="mailto:atlasonecontact@gmail.com"
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#00E5FF] to-[#00BCD4] text-[#030B12] font-bold text-lg sm:text-xl rounded-2xl shadow-[0_0_50px_rgba(0,229,255,0.4)] hover:shadow-[0_0_80px_rgba(0,229,255,0.6)] hover:-translate-y-1 transition-all"
          >
            {t.button} →
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

function FooterSection({ lang }: { lang: Language }) {
  const t = content[lang].footer;

  return (
    <footer className="relative z-20 py-12 sm:py-16 bg-[#030B12] border-t border-[#00E5FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-8 sm:gap-10">

        {/* Logo & Horizontal Name */}
        <div className="flex flex-col items-center gap-5">
          <Image src="/logo-atlas.png" alt="Atlas One" width={80} height={80} className="drop-shadow-[0_0_40px_rgba(0,229,255,0.6)]" />
          <Image
            src="/nombre-atlas-horizontal.png"
            alt="Atlas One"
            width={180}
            height={45}
            style={{ width: 'auto', height: 'auto' }}
            className="drop-shadow-[0_0_20px_rgba(0,229,255,0.4)]"
          />
          <p className="text-base sm:text-lg text-[#8BA3B8] text-center max-w-md mt-2">{t.tagline}</p>
        </div>

        {/* Email Link - Same style as social icons */}
        <a
          href="mailto:atlasonecontact@gmail.com"
          className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-[#8BA3B8] hover:text-[#00E5FF] hover:border-[#00E5FF]/50 hover:bg-[#00E5FF]/10 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all text-sm sm:text-base"
        >
          <Icon type="mail" size={22} />
          <span className="font-medium">atlasonecontact@gmail.com</span>
        </a>

        {/* Social Icons */}
        <div className="flex gap-4 sm:gap-5">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#8BA3B8] hover:text-[#00E5FF] hover:border-[#00E5FF]/50 hover:bg-[#00E5FF]/10 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all hover:scale-110"
              aria-label={social.name}
            >
              <Icon type={social.icon} size={24} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-[#5A7A90] pt-6 border-t border-white/5 w-full text-center">{t.rights}</p>
      </div>
    </footer>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Language>("es");

  return (
    <main className="min-h-screen bg-[#030B12] text-white selection:bg-[#00E5FF]/30">
      <Navigation lang={lang} setLang={setLang} />
      <HeroSection lang={lang} />

      <div className="relative z-10 space-y-0">
        <AboutSection lang={lang} />
        <EcosystemSection lang={lang} />
        <ProblemsSection lang={lang} />
        <TimelineSection lang={lang} />
        <CTASection lang={lang} />
      </div>

      <FooterSection lang={lang} />
    </main>
  );
}
