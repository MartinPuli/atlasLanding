import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlas One | Software, Automatizacion e Inteligencia Artificial",
  description:
    "Desarrollamos soluciones digitales a medida: software, aplicaciones, CRM, automatizaciones y agentes de inteligencia artificial para empresas que buscan escalar sin friccion.",
  keywords: [
    "desarrollo de software",
    "automatizacion",
    "inteligencia artificial",
    "CRM",
    "aplicaciones moviles",
    "consultoria tecnologica",
    "Argentina",
  ],
  authors: [{ name: "Atlas One" }],
  icons: {
    icon: "/logo-atlas.png",
    shortcut: "/logo-atlas.png",
    apple: "/logo-atlas.png",
  },
  openGraph: {
    title: "Atlas One | Software, Automatizacion e Inteligencia Artificial",
    description:
      "Desarrollamos soluciones digitales a medida para empresas que buscan escalar sin friccion.",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/logo-atlas.png",
        width: 800,
        height: 600,
        alt: "Atlas One Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
