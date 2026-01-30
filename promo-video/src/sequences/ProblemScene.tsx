import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

const problems = [
  { icon: "⚠️", text: "Procesos manuales propensos a errores" },
  { icon: "🔌", text: "Sistemas desconectados" },
  { icon: "⏰", text: "Pérdida de oportunidades por lentitud" },
  { icon: "📊", text: "Datos dispersos e inaccesibles" },
  { icon: "👤", text: "Dependencia de personal clave" },
  { icon: "💸", text: "Tecnología costosa sin retorno" },
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
              <span style={{ fontSize: 48 }}>{problem.icon}</span>
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
