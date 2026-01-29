export type Language = "en" | "es";

export const content = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      solutions: "Ecosystem",
      method: "Method",
      contact: "Contact",
    },
    hero: {
      badge: "Technology & Data Innovation",
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
      subtitle: "Your Strategic Technology Partner",
      description:
        "We are Atlas One, a team of engineers, data scientists, and strategists obsessed with transforming chaos into clarity.",
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
          features: ["24/7 AI Agents", "Predictive Analytics", "Natural Language Processing"],
        },
        {
          title: "Custom Software",
          desc: "Bespoke internal systems and platforms tailored to your unique operations. No more adapting to generic tools—your software adapts to you.",
          icon: "code",
          features: ["Tailored Solutions", "Seamless Integration", "Scalable Architecture"],
        },
        {
          title: "Digital Security",
          desc: "Military-grade automated defense systems to protect your most valuable digital assets. Prevention, detection, and response—all automated.",
          icon: "shield",
          features: ["Threat Detection", "Automated Response", "Compliance Ready"],
        },
        {
          title: "Data Intelligence",
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
        { text: "Manual spreadsheets everywhere", icon: "❌" },
        { text: "Disconnected tools that don't talk", icon: "🔌" },
        { text: "Expensive CRMs gathering dust", icon: "💸" },
        { text: "Knowledge trapped in silos", icon: "🏢" },
        { text: "Data without meaning", icon: "📊" },
        { text: "AI used as a toy, not a tool", icon: "🤖" },
      ],
      insight: "It's not about buying more software.",
      insightBold: "It's about architecture that actually works.",
      cta: "Fix Your Infrastructure",
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
      rights: "© 2025 Atlas One. All rights reserved.",
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
      badge: "Innovación en Tecnología y Datos",
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
      subtitle: "Tu Socio Estratégico en Tecnología",
      description:
        "Somos Atlas One, un equipo de ingenieros, científicos de datos y estrategas obsesionados con transformar el caos en claridad.",
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
          features: ["Agentes IA 24/7", "Analítica Predictiva", "Procesamiento de Lenguaje"],
        },
        {
          title: "Software a Medida",
          desc: "Sistemas internos y plataformas hechas a medida para tus operaciones únicas. No más adaptarte a herramientas genéricas—tu software se adapta a vos.",
          icon: "code",
          features: ["Soluciones a Medida", "Integración Perfecta", "Arquitectura Escalable"],
        },
        {
          title: "Seguridad Digital",
          desc: "Sistemas de defensa automatizados de grado militar para proteger tus activos digitales más valiosos. Prevención, detección y respuesta—todo automatizado.",
          icon: "shield",
          features: ["Detección de Amenazas", "Respuesta Automática", "Cumplimiento Normativo"],
        },
        {
          title: "Inteligencia de Datos",
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
        { text: "Planillas manuales por todos lados", icon: "❌" },
        { text: "Herramientas desconectadas", icon: "🔌" },
        { text: "CRMs caros juntando polvo", icon: "💸" },
        { text: "Conocimiento atrapado en silos", icon: "🏢" },
        { text: "Datos sin significado", icon: "📊" },
        { text: "IA usada como juguete, no herramienta", icon: "🤖" },
      ],
      insight: "No se trata de comprar más software.",
      insightBold: "Se trata de arquitectura que realmente funcione.",
      cta: "Arreglemos tu Infraestructura",
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
      rights: "© 2025 Atlas One. Todos los derechos reservados.",
    },
  },
};

export const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/atlasone.arg/", icon: "instagram" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/atlas-one-erp-ar/", icon: "linkedin" },
  { name: "X", url: "https://x.com/atlasonearg", icon: "x" },
];
