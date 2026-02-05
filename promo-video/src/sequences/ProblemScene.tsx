import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Img, staticFile } from "remotion";

// SVG Icons para problemas
const WarningIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="2">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
    <path d="M12 9v4"/>
    <path d="M12 17h.01"/>
  </svg>
);

const PlugIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="2">
    <path d="M12 22v-5"/>
    <path d="M9 8V2"/>
    <path d="M15 8V2"/>
    <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

const ChartIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="2">
    <path d="M3 3v18h18"/>
    <path d="m19 9-5 5-4-4-3 3"/>
  </svg>
);

const UserIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="2">
    <circle cx="12" cy="8" r="5"/>
    <path d="M20 21a8 8 0 1 0-16 0"/>
  </svg>
);

const MoneyIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="2">
    <path d="M12 2v20"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const problems = [
  { Icon: WarningIcon, text: "Procesos manuales propensos a errores" },
  { Icon: PlugIcon, text: "Sistemas desconectados" },
  { Icon: ClockIcon, text: "Pérdida de oportunidades por lentitud" },
  { Icon: ChartIcon, text: "Datos dispersos e inaccesibles" },
  { Icon: UserIcon, text: "Dependencia de personal clave" },
  { Icon: MoneyIcon, text: "Tecnología costosa sin retorno" },
];

export const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleY = interpolate(frame, [0, 20], [-30, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #030B12 0%, #0D0A1A 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 80,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Fondo con gradiente rojo sutil para transmitir "problema" */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(ellipse at center, rgba(255, 50, 50, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Título */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          marginBottom: 60,
        }}
      >
        <h2
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            textAlign: "center",
          }}
        >
          ¿Tu empresa enfrenta estos{" "}
          <span style={{ color: "#FF6B6B" }}>desafíos</span>?
        </h2>
      </div>

      {/* Grid de problemas */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 30,
          maxWidth: 1400,
        }}
      >
        {problems.map((problem, index) => {
          const delay = 20 + index * 15;
          const cardOpacity = interpolate(frame, [delay, delay + 20], [0, 1], {
            extrapolateRight: "clamp",
          });
          const cardScale = spring({
            frame: frame - delay,
            fps,
            config: { damping: 12, stiffness: 100 },
          });
          const cardY = interpolate(frame, [delay, delay + 20], [30, 0], {
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={index}
              style={{
                opacity: cardOpacity,
                transform: `translateY(${cardY}px) scale(${Math.max(0, cardScale)})`,
                background: "rgba(255, 107, 107, 0.08)",
                border: "1px solid rgba(255, 107, 107, 0.2)",
                borderRadius: 16,
                padding: 30,
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <problem.Icon />
              <p
                style={{
                  fontSize: 22,
                  color: "rgba(255, 255, 255, 0.9)",
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                {problem.text}
              </p>
            </div>
          );
        })}
      </div>

      {/* Transición: línea que barre */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: interpolate(frame, [130, 150], [0, 100], { extrapolateRight: "clamp" }) + "%",
          height: 4,
          background: "linear-gradient(90deg, #00D4FF, #00FF94)",
        }}
      />
    </AbsoluteFill>
  );
};
