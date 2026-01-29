import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://atlasone.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Atlas One | Software, Automatizacion, IA y Ciberseguridad para Empresas",
    template: "%s | Atlas One",
  },
  description:
    "Atlas One desarrolla soluciones tecnologicas integrales: Atlas IA (agentes autonomos e inteligencia artificial), Atlas Software (desarrollo a medida), Atlas Analytics (dashboards e inteligencia de datos) y Atlas Cybersecurity (ciberseguridad empresarial). Transformamos PyMEs con tecnologia de vanguardia en Argentina y Latinoamerica.",
  keywords: [
    // Servicios principales
    "Atlas One",
    "Atlas IA",
    "Atlas Software",
    "Atlas Analytics",
    "Atlas Cybersecurity",
    // Inteligencia Artificial
    "inteligencia artificial para empresas",
    "agentes de IA",
    "chatbots empresariales",
    "automatizacion con IA",
    "machine learning empresarial",
    "IA generativa para negocios",
    // Software
    "desarrollo de software a medida",
    "software empresarial",
    "aplicaciones web",
    "sistemas de gestion",
    "ERP personalizado",
    "CRM a medida",
    // Analytics
    "business intelligence",
    "dashboards interactivos",
    "analisis de datos",
    "visualizacion de datos",
    "KPIs empresariales",
    // Ciberseguridad
    "ciberseguridad empresarial",
    "seguridad informatica",
    "proteccion de datos",
    "auditoria de seguridad",
    // Automatizacion
    "automatizacion de procesos",
    "RPA",
    "workflow automation",
    "integracion de sistemas",
    // Ubicacion
    "Argentina",
    "Buenos Aires",
    "Latinoamerica",
    "LATAM",
    // PyMEs
    "soluciones para PyMEs",
    "tecnologia para empresas",
    "transformacion digital",
    "consultoria tecnologica",
  ],
  authors: [{ name: "Atlas One", url: siteUrl }],
  creator: "Atlas One",
  publisher: "Atlas One",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/logo-atlas.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-atlas.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/logo-atlas.png",
    apple: [
      { url: "/logo-atlas.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "Atlas One",
    title: "Atlas One | Soluciones de Software, IA y Ciberseguridad",
    description:
      "Desarrollamos Atlas IA, Atlas Software, Atlas Analytics y Atlas Cybersecurity. Transformamos empresas con inteligencia artificial, desarrollo a medida, analisis de datos y ciberseguridad. Lideres en tecnologia para PyMEs en Argentina.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Atlas One - Software, IA y Ciberseguridad",
        type: "image/png",
      },
      {
        url: "/logo-atlas.png",
        width: 800,
        height: 800,
        alt: "Atlas One Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@atlasonearg",
    creator: "@atlasonearg",
    title: "Atlas One | Software, IA y Ciberseguridad para Empresas",
    description:
      "Soluciones tecnologicas integrales: Atlas IA, Atlas Software, Atlas Analytics y Atlas Cybersecurity. Transformacion digital para PyMEs.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "es-AR": siteUrl,
      "en-US": `${siteUrl}/en`,
    },
  },
  category: "technology",
  classification: "Business Software, Artificial Intelligence, Cybersecurity",
  referrer: "origin-when-cross-origin",
  other: {
    "google-site-verification": "YOUR_GOOGLE_VERIFICATION_CODE",
    "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Atlas One",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo-atlas.png`,
        width: 512,
        height: 512,
      },
      description:
        "Atlas One es una empresa de tecnologia que desarrolla soluciones de software, inteligencia artificial, analytics y ciberseguridad para empresas en Argentina y Latinoamerica.",
      foundingDate: "2024",
      founders: [
        {
          "@type": "Person",
          name: "Atlas One Team",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "AR",
        addressRegion: "Buenos Aires",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "atlasonecontact@gmail.com",
        availableLanguage: ["Spanish", "English"],
      },
      sameAs: [
        "https://www.instagram.com/atlasone.arg/",
        "https://www.linkedin.com/company/atlas-one-erp-ar/",
        "https://x.com/atlasonearg",
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Software Development",
        "Business Intelligence",
        "Cybersecurity",
        "Data Analytics",
        "Process Automation",
        "Digital Transformation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Atlas One",
      description: "Software, Inteligencia Artificial y Ciberseguridad para Empresas",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: ["es-AR", "en-US"],
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Atlas One | Software, IA y Ciberseguridad",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Desarrollamos soluciones tecnologicas integrales para empresas: Atlas IA, Atlas Software, Atlas Analytics y Atlas Cybersecurity.",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#atlas-ia`,
      name: "Atlas IA",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Agentes autonomos de inteligencia artificial que venden, asisten y analizan 24/7. Chatbots empresariales, automatizacion con IA y machine learning.",
      serviceType: "Artificial Intelligence Solutions",
      areaServed: {
        "@type": "Country",
        name: "Argentina",
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#atlas-software`,
      name: "Atlas Software",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Desarrollo de software a medida, sistemas de gestion, ERP personalizados, CRM y aplicaciones web empresariales.",
      serviceType: "Custom Software Development",
      areaServed: {
        "@type": "Country",
        name: "Argentina",
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#atlas-analytics`,
      name: "Atlas Analytics",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Business intelligence, dashboards interactivos, visualizacion de datos y analisis de KPIs empresariales.",
      serviceType: "Business Intelligence & Analytics",
      areaServed: {
        "@type": "Country",
        name: "Argentina",
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#atlas-cybersecurity`,
      name: "Atlas Cybersecurity",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Ciberseguridad empresarial, proteccion de datos, auditoria de seguridad y defensa automatizada de grado militar.",
      serviceType: "Cybersecurity Services",
      areaServed: {
        "@type": "Country",
        name: "Argentina",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Que es Atlas One?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Atlas One es una empresa de tecnologia argentina que desarrolla soluciones integrales de software, inteligencia artificial, analytics y ciberseguridad para PyMEs y empresas que buscan transformarse digitalmente.",
          },
        },
        {
          "@type": "Question",
          name: "Que servicios ofrece Atlas One?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Atlas One ofrece cuatro servicios principales: Atlas IA (agentes de inteligencia artificial), Atlas Software (desarrollo a medida), Atlas Analytics (business intelligence y dashboards), y Atlas Cybersecurity (ciberseguridad empresarial).",
          },
        },
        {
          "@type": "Question",
          name: "Atlas One trabaja con PyMEs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si, Atlas One se especializa en llevar tecnologia de vanguardia a PyMEs, democratizando el acceso a herramientas que antes solo estaban disponibles para grandes corporaciones.",
          },
        },
        {
          "@type": "Question",
          name: "En que paises opera Atlas One?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Atlas One tiene base en Argentina y opera en toda Latinoamerica, con vision de expansion global.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#00E5FF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Atlas One" />

        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="AR" />
        <meta name="geo.placename" content="Buenos Aires, Argentina" />

        {/* Language alternatives */}
        <link rel="alternate" hrefLang="es" href="https://atlasone.com.ar" />
        <link rel="alternate" hrefLang="en" href="https://atlasone.com.ar/en" />
        <link rel="alternate" hrefLang="x-default" href="https://atlasone.com.ar" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
