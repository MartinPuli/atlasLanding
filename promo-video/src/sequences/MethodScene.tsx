import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

const steps = [
  { number: "01", title: "Auditoría", description: "Diagnóstico profundo", icon: "🔍" },
  { number: "02", title: "Arquitectura", description: "Diseño escalable", icon: "📐" },
  { number: "03", title: "Implementación", description: "Desarrollo ágil", icon: "⚡" },
  { number: "04", title: "Escalado", description: "Soporte continuo", icon: "🚀" },
];

export const MethodScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Línea de conexión que crece
  const lineWidth = interpolate(frame, [40, 120], [0, 100], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #030B12 0%, #061220 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 80,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Título */}
      <div
        style={{
          opacity: titleOpacity,
          marginBottom: 80,
        }}
      >
        <h2
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            textAlign: "center",
          }}
        >
          Nuestra <span style={{ color: "#00D4FF" }}>Metodología</span>
        </h2>
        <p
          style={{
            fontSize: 24,
            color: "rgba(255, 255, 255, 0.6)",
            marginTop: 16,
            textAlign: "center",
          }}
        >
          Ingeniería sobre improvisación
        </p>
      </div>

      {/* Timeline */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          position: "relative",
        }}
      >
        {/* Línea de conexión */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 100,
            right: 100,
            height: 2,
            background: "rgba(0, 212, 255, 0.2)",
            transform: "translateY(-50%)",
          }}
        >
          <div
            style={{
              width: lineWidth + "%",
              height: "100%",
              background: "linear-gradient(90deg, #00D4FF, #00FF94)",
              boxShadow: "0 0 20px #00D4FF",
            }}
          />
        </div>

        {/* Steps */}
        {steps.map((step, index) => {
          const delay = 30 + index * 20;
          const stepOpacity = interpolate(frame, [delay, delay + 15], [0, 1], {
            extrapolateRight: "clamp",
          });
          const stepScale = spring({
            frame: frame - delay,
            fps,
            config: { damping: 12, stiffness: 100 },
          });

          return (
            <div
              key={index}
              style={{
                opacity: stepOpacity,
                transform: `scale(${Math.max(0, stepScale)})`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 280,
                zIndex: 1,
              }}
            >
              {/* Círculo con icono */}
              <div
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #00D4FF20, #00FF9420)",
                  border: "2px solid #00D4FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                  boxShadow: "0 0 30px rgba(0, 212, 255, 0.3)",
                }}
              >
                <span style={{ fontSize: 50 }}>{step.icon}</span>
              </div>

              {/* Número */}
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#00D4FF",
                  letterSpacing: "0.2em",
                  marginBottom: 8,
                }}
              >
                {step.number}
              </span>

              {/* Título */}
              <h3
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: 0,
                  marginBottom: 8,
                }}
              >
                {step.title}
              </h3>

              {/* Descripción */}
              <p
                style={{
                  fontSize: 18,
                  color: "rgba(255, 255, 255, 0.6)",
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
