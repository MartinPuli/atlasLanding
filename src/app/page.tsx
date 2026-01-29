"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ============ CONTENT DICTIONARY (ENGAGING COPY) ============

const content = {
  en: {
    nav: {
      home: "Home",
      solutions: "Solutions",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Innovating Data & Technology",
      subtitle: "Decisions. Real-Time. Real Impact.",
      description: "Stop guessing. Start building. We architect the data infrastructure that powers your next big leap.",
      cta: "Start Building",
    },
    pillars: {
      title: "Our Core Power",
      subtitle: "The engine behind your business transformation.",
      items: [
        { title: "Artificial Intelligence", desc: "Not just a buzzword. We deploy autonomous agents that sell, support, and analyze for you 24/7." },
        { title: "Custom Software", desc: "Forget cookie-cutter apps. We forge internal systems and platforms that fit your operation like a glove." },
        { title: "Digital Security", desc: "Your fortress. We implement military-grade automated defense to protect your most valuable asset: data." },
        { title: "Data & Intelligence", desc: "Turn noise into signal. Interactive dashboards that reveal the hidden opportunities in your numbers." }
      ]
    },
    problems: {
      title: "Why Do Most Systems Fail?",
      items: [
        "Manual spreadsheets that break",
        "Tools that don't talk to each other",
        "Expensive CRMs that nobody uses",
        "Key knowledge trapped in heads",
        "Data that looks nice but says nothing",
        "AI used as a toy, not a tool"
      ],
      insight: "It's not about buying more software.",
      insightBold: "It's about architecture that actually works.",
      cta: "Fix Your Infrastructure"
    },
    architecture: {
      title: "We Don't Just Write Code. We Build Systems.",
      subtitle: "A scalable ecosystem where every component amplifies the others.",
      cta: "See The Blueprint"
    },
    useCases: {
      title: "Real Impact in the Wild",
      subtitle: "Solutions that paid for themselves.",
      items: [
        {
          title: "Unified Command Center",
          desc: "Sales, support, and operations in one heartbeat.",
          bullets: ["Zero friction", "Total visibility", "Instant reaction"]
        },
        {
          title: "Intelligent Autopilot",
          desc: "Routine tasks marked 'Done' before you even wake up.",
          bullets: ["Manual work deleted", "Human error: 0%", "Efficiency: 100%"]
        },
        {
          title: "AI That Actually Works",
          desc: "Agents that handle complex customer flows autonomously.",
          bullets: ["Infinite scale", "Instant answers", "Revenue growth"]
        }
      ],
      cta: "Apply This to My Business"
    },
    timeline: {
      quote: "Software shouldn't rust.",
      quoteSub: "We build living systems designed to evolve with you.",
      stages: [
        { title: "Foundation", desc: "Digital Core" },
        { title: "Automation", desc: "Speed & Flow" },
        { title: "Intelligence", desc: "Cognitive Layer" },
        { title: "Evolution", desc: "Limitless Scale" }
      ]
    },
    philosophy: {
      title: "Technology Should Be Invisible.",
      subtitle: "When it works perfectly, you don't notice it. You just grow.",
      text: "We make the complex simple.",
      cta: "Begin Transformation"
    },
    footer: {
      tagline: "Building the future of your business, line by line.",
      rights: "© 2025 Atlas One. All rights reserved."
    }
  },
  es: {
    nav: {
      home: "Inicio",
      solutions: "Soluciones",
      about: "Nosotros",
      contact: "Contacto",
    },
    hero: {
      title: "Innovando en Datos y Tecnología",
      subtitle: "Decisiones Reales. Impacto Real.",
      description: "Dejá de adivinar. Empezá a construir. Diseñamos la infraestructura de datos que impulsa tu próximo gran salto.",
      cta: "Empezar Ahora",
    },
    pillars: {
      title: "Nuestro Motor",
      subtitle: "La tecnología que impulsa tu transformación.",
      items: [
        { title: "Inteligencia Artificial", desc: "No es solo hype. Desplegamos agentes autónomos que venden, asisten y analizan por vos 24/7." },
        { title: "Software a Medida", desc: "Olvidate de las apps genéricas. Forjamos sistemas y plataformas que le calzan a tu operación como un guante." },
        { title: "Seguridad Digital", desc: "Tu fortaleza. Implementamos defensa automatizada de grado militar para proteger tu activo más valioso: los datos." },
        { title: "Datos e Inteligencia", desc: "Transformamos ruido en señales. Dashboards interactivos que revelan las oportunidades ocultas en tus números." }
      ]
    },
    problems: {
      title: "¿Por Qué Fallan los Sistemas?",
      items: [
        "Planillas manuales que se rompen",
        "Herramientas desconectadas",
        "CRMs caros que nadie usa",
        "Conocimiento atrapado en personas",
        "Datos lindos que no dicen nada",
        "IA usada como juguete, no herramienta"
      ],
      insight: "No se trata de comprar más software.",
      insightBold: "Se trata de una arquitectura que funcione.",
      cta: "Arreglemos tu Infraestructura"
    },
    architecture: {
      title: "No Solo Escribimos Código. Construimos Sistemas.",
      subtitle: "Un ecosistema escalable donde cada componente potencia al otro.",
      cta: "Ver el Diseño"
    },
    useCases: {
      title: "Impacto Real en la Cancha",
      subtitle: "Soluciones que se pagaron solas.",
      items: [
        {
          title: "Centro de Comando Unificado",
          desc: "Ventas, soporte y operaciones en un solo latido.",
          bullets: ["Cero fricción", "Visibilidad total", "Reacción instantánea"]
        },
        {
          title: "Piloto Automático Inteligente",
          desc: "Tareas de rutina marcadas como 'Listo' antes de que te despiertes.",
          bullets: ["Trabajo manual eliminado", "Error humano: 0%", "Eficiencia: 100%"]
        },
        {
          title: "IA Que Realmente Sirve",
          desc: "Agentes que manejan flujos complejos de clientes autónomamente.",
          bullets: ["Escala infinita", "Respuestas al instante", "Crecimiento de ingresos"]
        }
      ],
      cta: "Aplicar esto a mi negocio"
    },
    timeline: {
      quote: "El software no debería oxidarse.",
      quoteSub: "Construimos sistemas vivos diseñados para evolucionar con vos.",
      stages: [
        { title: "Cimientos", desc: "Núcleo Digital" },
        { title: "Automatización", desc: "Velocidad y Flujo" },
        { title: "Inteligencia", desc: "Capa Cognitiva" },
        { title: "Evolución", desc: "Escala Sin Límites" }
      ]
    },
    philosophy: {
      title: "La Tecnología Debería Ser Invisible.",
      subtitle: "Cuando funciona perfecto, no la notás. Solo crecés.",
      text: "Hacemos simple lo complejo.",
      cta: "Iniciar Transformación"
    },
    footer: {
      tagline: "Construyendo el futuro de tu negocio, línea por línea.",
      rights: "© 2025 Atlas One. Todos los derechos reservados."
    }
  }
};

// ============ ICONS & FLAGS ============

function Icon({ type, className = "w-7 h-7" }: { type: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    code: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>,
    mobile: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
    database: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>,
    automation: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>,
    ai: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>,
    globe: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
    shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
    chart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
    instagram: <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>,
    linkedin: <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
    x: <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  };
  return <>{icons[type] || icons.code}</>;
}

function FlagUS({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="30" fill="#b22234" />
      <path d="M0,4h60v4h-60M0,12h60v4h-60M0,20h60v4h-60" fill="#fff" />
      <rect width="24" height="15" fill="#3c3b6e" />
      <path d="M2 2h2v2h-2zM6 2h2v2h-2zM10 2h2v2h-2zM14 2h2v2h-2zM18 2h2v2h-2zM22 2h2v2h-2zM4 6h2v2h-2zM8 6h2v2h-2zM12 6h2v2h-2zM16 6h2v2h-2zM20 6h2v2h-2zM2 10h2v2h-2zM6 10h2v2h-2zM10 10h2v2h-2zM14 10h2v2h-2zM18 10h2v2h-2zM22 10h2v2h-2z" fill="#fff" />
    </svg>
  );
}

function FlagAR({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="20" fill="#fff" />
      <rect width="30" height="6" fill="#74acdf" />
      <rect y="14" width="30" height="6" fill="#74acdf" />
      <circle cx="15" cy="10" r="2" fill="#f6b40e" />
    </svg>
  );
}

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

// ============ COMPONENTS ============

function Navigation({ lang, setLang }: { lang: 'en' | 'es', setLang: (l: 'en' | 'es') => void }) {
  const { visible, scrolled } = useNavScroll();
  const [mounted, setMounted] = useState(false);
  const t = content[lang].nav;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className={`nav ${visible ? "nav-visible" : "nav-hidden"} ${scrolled ? "nav-blur" : ""} ${mounted ? "animate-slide-down" : "opacity-0"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between h-20 md:h-24 relative">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 active:scale-95 transition-transform">
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
          <a href="#" className="nav-link">{t.home}</a>
          <a href="#pilares" className="nav-link">{t.solutions}</a>
          <a href="#nosotros" className="nav-link">{t.about}</a>
          <a href="#contacto" className="nav-link">{t.contact}</a>
        </div>

        {/* Right Actions: Lang Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition-all bg-white/5 backdrop-blur-sm group hover:bg-white/10"
            title="Switch Language"
          >
            <div className={`transition-opacity duration-300 ${lang === 'en' ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'}`}>
              <FlagUS className="w-6 h-4 shadow-sm" />
            </div>
            <div className="w-[1px] h-4 bg-white/20"></div>
            <div className={`transition-opacity duration-300 ${lang === 'es' ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'}`}>
              <FlagAR className="w-6 h-4 shadow-sm" />
            </div>
          </button>
        </div>
      </div>
    </nav>
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
  const [lang, setLang] = useState<'en' | 'es'>('en'); // Default to English
  const bgRef = useRef<HTMLImageElement>(null);
  const t = content[lang];

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (!bgRef.current) return;
      const rotateValue = window.scrollY * 0.1;
      bgRef.current.style.transform = `rotate(${rotateValue}deg)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navigation lang={lang} setLang={setLang} />

      <main className="min-h-screen">
        {/* Global Background Texture (Fixed for all non-hero sections) */}
        <div className="globe-bg-wrapper">
          <Image
            ref={bgRef}
            src="/atlas-bg.jpg"
            alt="Background Texture"
            width={1200}
            height={1200}
            className="globe-image"
            priority
            style={{ animation: 'none' }}
          />
        </div>

        {/* HERO SECTION - REDESIGNED */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20 z-10">
          {/* Background Gradient simulating deep space */}
          <div className="absolute inset-0 bg-black z-[-1]" />

          {/* Blue Energy Waves Effect (CSS) */}
          <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-[#00E5FF]/30 via-transparent to-transparent opacity-80 z-[-1]" />
          <div className="absolute bottom-[-100px] left-[-20%] right-[-20%] h-[400px] bg-[#0066FF] blur-[150px] opacity-40 rounded-full z-[-1]" />

          <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
            {/* Glowing Triangle Logo Centerpiece */}
            <div className={`relative mb-16 ${mounted ? "animate-fade-in" : "opacity-0"}`}>
              <div className="absolute inset-0 bg-[#00E5FF] blur-[80px] opacity-40 rounded-full scale-125 animate-pulse-slow" />
              <Image
                src="/logo-atlas.png"
                alt="Atlas One Hero Logo"
                width={300}
                height={300}
                className="relative w-56 h-56 md:w-80 md:h-80 object-contain drop-shadow-[0_0_80px_rgba(0,229,255,0.8)] hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            <h1 className={`text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight text-shadow-glow ${mounted ? "animate-fade-in-up delay-1" : "opacity-0"}`}>
              {t.hero.title}
              <br />
              <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--accent-primary)] block mt-4">{t.hero.subtitle}</span>
            </h1>

            <p className={`text-xl md:text-2xl text-[var(--foreground-muted)] mb-14 max-w-2xl mx-auto leading-relaxed ${mounted ? "animate-fade-in-up delay-2" : "opacity-0"}`}>
              {t.hero.description}
            </p>

            <div className={`${mounted ? "animate-fade-in-up delay-3" : "opacity-0"}`}>
              <a href="mailto:atlasonecontact@gmail.com" className="btn-primary text-xl px-16 py-6 shadow-[0_0_50px_rgba(0,100,255,0.4)] hover:shadow-[0_0_80px_rgba(0,229,255,0.6)] border border-[#00E5FF]/50 bg-gradient-to-r from-[#0066FF] to-[#00E5FF]">
                {t.hero.cta}
              </a>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <Section id="pilares" className="py-28 md:py-36">
          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
            <div className="text-center mb-32 max-w-4xl">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                <span className="gradient-text">{t.pillars.title}</span>
              </h2>
              <p className="text-xl md:text-2xl text-[var(--foreground-muted)]">
                {t.pillars.subtitle}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 w-full max-w-[1400px] mx-auto">
              {t.pillars.items.map((pillar, index) => (
                <div key={index} className="pillar-card p-8 md:p-10 lg:p-12 hover:translate-y-[-10px] transition-transform duration-300">
                  <div className="icon-glow mb-8 text-[var(--accent-primary)]">
                    <Icon type={['ai', 'code', 'shield', 'chart'][index]} className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">{pillar.title}</h3>
                  <p className="text-[var(--foreground-muted)] leading-relaxed text-lg">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* SECTION 1: PROBLEMS WE SOLVE */}
        <Section id="problems" dark className="py-28 md:py-36">
          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-24 leading-tight max-w-4xl">
              {t.problems.title}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-32 max-w-7xl mx-auto w-full">
              {t.problems.items.map((item, i) => (
                <div
                  key={i}
                  className="glass-card p-10 md:p-12 flex items-center justify-center min-h-[200px] hover:scale-105 hover:border-[var(--accent-primary)]/40 transition-all duration-500"
                >
                  <p className="text-xl md:text-2xl text-gray-200 font-medium text-center leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="p-12 md:p-16 border border-[var(--accent-primary)]/20 bg-[var(--accent-primary)]/5 rounded-3xl max-w-4xl mx-auto backdrop-blur-md shadow-[0_0_40px_rgba(0,229,255,0.15)]">
              <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
                {t.problems.insight}<br />
                <span className="text-[var(--accent-primary)] mt-4 block font-bold">{t.problems.insightBold}</span>
              </p>
              <a href="#contacto" className="btn-secondary inline-flex items-center gap-2 group">
                {t.problems.cta}
              </a>
            </div>
          </div>
        </Section>

        {/* SECTION 4: SCALABILITY JOURNEY */}
        <Section id="timeline" className="py-28 md:py-36">
          <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
            <div className="mb-28 max-w-4xl">
              <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed">
                "{t.timeline.quote}
                <span className="block text-[var(--foreground-muted)] mt-4">{t.timeline.quoteSub}"</span>
              </p>
            </div>

            <div className="timeline-track grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 w-full max-w-6xl">
              {t.timeline.stages.map((stage, i) => (
                <div
                  key={i}
                  className="timeline-node flex flex-col items-center px-6 py-10 glass-card rounded-2xl hover:scale-105 transition-transform duration-500"
                >
                  <span className="text-[var(--accent-primary)] text-5xl font-bold mb-4 opacity-30">0{i + 1}</span>
                  <h4 className="text-white font-bold text-2xl md:text-3xl mb-4">{stage.title}</h4>
                  <p className="text-[var(--foreground-muted)] text-lg">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* NEW SOCIAL FOOTER */}
        <footer className="py-20 md:py-24 border-t border-[var(--border-color)] bg-[#020609] relative overflow-hidden">
          {/* Subtle Glow at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#00E5FF]/5 to-transparent pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center">
              {/* BRANDING */}
              <div className="mb-10 group cursor-default">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Image src="/logo-atlas.png" alt="Atlas One" width={60} height={60} className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]" />
                  <Image src="/nombre-atlas-horizontal.png" alt="Atlas One" width={200} height={50} className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-[var(--foreground-muted)] max-w-md mx-auto text-lg leading-relaxed">
                  {t.footer.tagline}
                </p>
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-8 mb-12">
                {[
                  { name: "Instagram", url: "https://www.instagram.com/atlasone.arg/", icon: "instagram" },
                  { name: "LinkedIn", url: "https://www.linkedin.com/company/atlas-one-erp-ar/", icon: "linkedin" },
                  { name: "X", url: "https://x.com/atlasonearg", icon: "x" }
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 hover:text-[var(--accent-primary)] transition-all duration-300 group"
                    aria-label={link.name}
                  >
                    <Icon type={link.icon} className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>

              {/* COPYRIGHT */}
              <div className="text-[var(--foreground-muted)] text-sm font-medium opacity-60">
                {t.footer.rights}
              </div>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}
