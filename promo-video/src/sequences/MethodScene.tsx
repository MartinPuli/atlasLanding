import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Img, staticFile } from "remotion";

// SVG Icons para metodología
const SearchIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
);

const ArchitectureIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2">
    <path d="M2 20h20"/>
    <path d="M5 20V8l7-5 7 5v12"/>
    <path d="M9 20v-6h6v6"/>
  </svg>
);

const CodeIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2">
    <path d="m8 6-6 6 6 6"/>
    <path d="m16 6 6 6-6 6"/>
  </svg>
);

const RocketIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

const steps = [
  { number: "01", title: "Auditoría", description: "Diagnóstico profundo", Icon: SearchIcon },
  { number: "02", title: "Arquitectura", description: "Diseño escalable", Icon: ArchitectureIcon },
  { number: "03", title: "Implementación", description: "Desarrollo ágil", Icon: CodeIcon },
  { number: "04", title: "Escalado", description: "Soporte continuo", Icon: RocketIcon },
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
              {/* Círculo con icono SVG */}
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
                <step.Icon />
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
