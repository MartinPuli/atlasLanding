import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Sequence } from "remotion";

const services = [
  {
    name: "Atlas IA",
    description: "Agentes autónomos 24/7 para atención al cliente, calificación de leads y procesamiento de voz",
    icon: "🤖",
    color: "#00D4FF",
    features: ["Chatbots inteligentes", "Automatización de respuestas", "Análisis de sentimiento"],
  },
  {
    name: "Atlas Software",
    description: "Plataformas web y móviles escalables, aplicaciones corporativas y APIs a medida",
    icon: "💻",
    color: "#00FF94",
    features: ["Apps multiplataforma", "Arquitectura escalable", "Integración de sistemas"],
  },
  {
    name: "Atlas Cybersecurity",
    description: "Auditoría de seguridad, protección de datos y monitoreo continuo 24/7",
    icon: "🛡️",
    color: "#FFD93D",
    features: ["Pentesting", "Protección de datos", "Monitoreo en tiempo real"],
  },
  {
    name: "Atlas Analytics",
    description: "Tableros ejecutivos en tiempo real, reportes automatizados y unificación de datos",
    icon: "📈",
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
        {/* Icono grande */}
        <div
          style={{
            fontSize: 140,
            marginBottom: 30,
            transform: `scale(${Math.max(0, iconBounce)})`,
            filter: `drop-shadow(0 0 30px ${service.color})`,
          }}
        >
          {service.icon}
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
