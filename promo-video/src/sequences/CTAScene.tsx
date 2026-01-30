import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const mainScale = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 80 },
  });

  const mainOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const buttonOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateRight: "clamp",
  });

  const buttonY = interpolate(frame, [40, 60], [30, 0], {
    extrapolateRight: "clamp",
  });

  const contactOpacity = interpolate(frame, [70, 90], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Pulso del botón
  const pulseScale = 1 + Math.sin(frame * 0.15) * 0.03;

  // Partículas de celebración
  const particles = Array.from({ length: 30 }, (_, i) => ({
    x: Math.sin(i * 0.8 + frame * 0.03) * 600 + 960,
    y: Math.cos(i * 0.6 + frame * 0.025) * 400 + 540,
    size: 3 + Math.sin(i + frame * 0.05) * 2,
    opacity: interpolate(frame, [0, 30], [0, 0.4], { extrapolateRight: "clamp" }),
    color: i % 2 === 0 ? "#00D4FF" : "#00FF94",
  }));

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #030B12 0%, #0A1628 50%, #030B12 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Partículas */}
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.color,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
        />
      ))}

      {/* Fondo con gradiente cyan */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(ellipse at center, rgba(0, 212, 255, 0.15) 0%, transparent 60%)",
        }}
      />

      {/* Contenido principal */}
      <div
        style={{
          opacity: mainOpacity,
          transform: `scale(${mainScale})`,
          textAlign: "center",
          maxWidth: 1200,
          padding: 40,
        }}
      >
        {/* Headline */}
        <h1
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: "#FFFFFF",
            margin: 0,
            marginBottom: 24,
            lineHeight: 1.1,
          }}
        >
          ¿Listo para{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #00D4FF, #00FF94)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            transformar
          </span>
          {" "}tu empresa?
        </h1>

        {/* Subtítulo */}
        <p
          style={{
            fontSize: 32,
            color: "rgba(255, 255, 255, 0.7)",
            margin: 0,
            marginBottom: 60,
          }}
        >
          Más que software, somos tu socio de crecimiento
        </p>

        {/* Botón CTA */}
        <div
          style={{
            opacity: buttonOpacity,
            transform: `translateY(${buttonY}px) scale(${pulseScale})`,
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "linear-gradient(90deg, #00D4FF, #00FF94)",
              borderRadius: 16,
              padding: "24px 64px",
              boxShadow: "0 0 40px rgba(0, 212, 255, 0.5), 0 0 80px rgba(0, 255, 148, 0.3)",
            }}
          >
            <span
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "#030B12",
                letterSpacing: "0.05em",
              }}
            >
              AGENDÁ TU DIAGNÓSTICO
            </span>
          </div>
        </div>

        {/* Información de contacto */}
        <div
          style={{
            opacity: contactOpacity,
            marginTop: 60,
          }}
        >
          <p
            style={{
              fontSize: 24,
              color: "rgba(255, 255, 255, 0.5)",
              margin: 0,
            }}
          >
            atlasone.ar
          </p>
        </div>
      </div>

      {/* Logo final */}
      <div
        style={{
          position: "absolute",
          bottom: 50,
          opacity: contactOpacity,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <svg width="40" height="40" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#00D4FF" strokeWidth="2" />
          <circle cx="50" cy="50" r="6" fill="#00D4FF" />
        </svg>
        <span
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "0.1em",
          }}
        >
          ATLAS ONE
        </span>
      </div>
    </AbsoluteFill>
  );
};
