import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Sequence, Img, staticFile } from "remotion";

// SVG Icons para cada servicio
const AIIcon = ({ color }: { color: string }) => (
  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
    <circle cx="8.5" cy="14.5" r="1.5" fill={color}/>
    <circle cx="15.5" cy="14.5" r="1.5" fill={color}/>
    <path d="M9 18h6"/>
  </svg>
);

const SoftwareIcon = ({ color }: { color: string }) => (
  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8"/>
    <path d="M12 17v4"/>
    <path d="M7 8l3 3-3 3"/>
    <path d="M13 14h4"/>
  </svg>
);

const SecurityIcon = ({ color }: { color: string }) => (
  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
    <path d="M12 2l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V6l9-4z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

const AnalyticsIcon = ({ color }: { color: string }) => (
  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
    <path d="M3 3v18h18"/>
    <path d="M7 16l4-4 4 4 5-6"/>
    <circle cx="20" cy="10" r="2" fill={color}/>
  </svg>
);

const services = [
  {
    name: "Atlas IA",
    description: "Agentes autónomos 24/7 para atención al cliente, calificación de leads y procesamiento de voz",
    Icon: AIIcon,
    color: "#00D4FF",
    features: ["Chatbots inteligentes", "Automatización de respuestas", "Análisis de sentimiento"],
  },
  {
    name: "Atlas Software",
    description: "Plataformas web y móviles escalables, aplicaciones corporativas y APIs a medida",
    Icon: SoftwareIcon,
    color: "#00FF94",
    features: ["Apps multiplataforma", "Arquitectura escalable", "Integración de sistemas"],
  },
  {
    name: "Atlas Cybersecurity",
    description: "Auditoría de seguridad, protección de datos y monitoreo continuo 24/7",
    Icon: SecurityIcon,
    color: "#FFD93D",
    features: ["Pentesting", "Protección de datos", "Monitoreo en tiempo real"],
  },
  {
    name: "Atlas Analytics",
    description: "Tableros ejecutivos en tiempo real, reportes automatizados y unificación de datos",
    Icon: AnalyticsIcon,
    color: "#FF6B9D",
    features: ["Dashboards interactivos", "BI automatizado", "Data warehousing"],
  },
];

const ServiceCard: React.FC<{
  service: typeof services[0];
  index: number;
  localFrame: number;
}> = ({ service, index, localFrame }) => {
  const { fps } = useVideoConfig();

  const cardOpacity = interpolate(localFrame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const cardScale = spring({
    frame: localFrame,
    fps,
    config: { damping: 15, stiffness: 80 },
  });

  const iconBounce = spring({
    frame: localFrame - 10,
    fps,
    config: { damping: 8, stiffness: 150 },
  });

  const featureDelays = [30, 45, 60];

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `radial-gradient(ellipse at center, ${service.color}15 0%, transparent 60%)`,
      }}
    >
      <div
        style={{
          opacity: cardOpacity,
          transform: `scale(${cardScale})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: 900,
        }}
      >
        {/* Icono grande - SVG profesional */}
        <div
          style={{
            marginBottom: 30,
            transform: `scale(${Math.max(0, iconBounce)})`,
            filter: `drop-shadow(0 0 30px ${service.color})`,
          }}
        >
          <service.Icon color={service.color} />
        </div>

        {/* Nombre del servicio */}
        <h2
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: service.color,
            margin: 0,
            marginBottom: 20,
            textShadow: `0 0 40px ${service.color}50`,
            fontFamily: "Inter, sans-serif",
          }}
        >
          {service.name}
        </h2>

        {/* Descripción */}
        <p
          style={{
            fontSize: 32,
            color: "rgba(255, 255, 255, 0.85)",
            margin: 0,
            marginBottom: 50,
            lineHeight: 1.5,
            fontFamily: "Inter, sans-serif",
          }}
        >
          {service.description}
        </p>

        {/* Features */}
        <div
          style={{
            display: "flex",
            gap: 30,
            justifyContent: "center",
          }}
        >
          {service.features.map((feature, i) => {
            const featureOpacity = interpolate(
              localFrame,
              [featureDelays[i], featureDelays[i] + 15],
              [0, 1],
              { extrapolateRight: "clamp" }
            );
            const featureY = interpolate(
              localFrame,
              [featureDelays[i], featureDelays[i] + 15],
              [20, 0],
              { extrapolateRight: "clamp" }
            );

            return (
              <div
                key={i}
                style={{
                  opacity: featureOpacity,
                  transform: `translateY(${featureY}px)`,
                  background: `${service.color}20`,
                  border: `1px solid ${service.color}40`,
                  borderRadius: 12,
                  padding: "16px 28px",
                }}
              >
                <span
                  style={{
                    fontSize: 22,
                    color: "#FFFFFF",
                    fontWeight: 500,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {feature}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Indicador de servicio */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          display: "flex",
          gap: 12,
        }}
      >
        {services.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === index ? 40 : 12,
              height: 12,
              borderRadius: 6,
              background: i === index ? service.color : "rgba(255, 255, 255, 0.3)",
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};

export const ServicesScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Cada servicio dura 75 frames (2.5 segundos)
  const serviceDuration = 75;

  return (
    <AbsoluteFill style={{ backgroundColor: "#030B12" }}>
      {/* Fondo con globo digital */}
      <Img
        src={staticFile("digital-globe.jpg")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.15,
          transform: `rotate(${frame * 0.1}deg) scale(1.2)`,
        }}
      />
      {services.map((service, index) => (
        <Sequence
          key={index}
          from={index * serviceDuration}
          durationInFrames={serviceDuration}
        >
          <ServiceCard
            service={service}
            index={index}
            localFrame={frame - index * serviceDuration}
          />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
