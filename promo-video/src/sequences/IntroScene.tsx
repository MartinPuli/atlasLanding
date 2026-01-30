import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animaciones
  const logoScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const logoOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const textOpacity = interpolate(frame, [30, 60], [0, 1], {
    extrapolateRight: "clamp",
  });

  const textY = interpolate(frame, [30, 60], [50, 0], {
    extrapolateRight: "clamp",
  });

  const taglineOpacity = interpolate(frame, [60, 90], [0, 1], {
    extrapolateRight: "clamp",
  });

  const glowIntensity = interpolate(frame, [0, 90], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Partículas animadas
  const particles = Array.from({ length: 20 }, (_, i) => ({
    x: Math.sin(i * 0.5 + frame * 0.02) * 400 + 960,
    y: Math.cos(i * 0.7 + frame * 0.015) * 300 + 540,
    size: 2 + Math.sin(i + frame * 0.05) * 2,
    opacity: 0.3 + Math.sin(i + frame * 0.03) * 0.2,
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
      {/* Partículas de fondo */}
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
            background: "#00D4FF",
            opacity: p.opacity * glowIntensity,
            boxShadow: `0 0 ${p.size * 4}px #00D4FF`,
          }}
        />
      ))}

      {/* Círculos de fondo animados */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          border: "1px solid rgba(0, 212, 255, 0.1)",
          opacity: glowIntensity * 0.5,
          transform: `scale(${1 + Math.sin(frame * 0.02) * 0.1})`,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          border: "1px solid rgba(0, 212, 255, 0.05)",
          opacity: glowIntensity * 0.3,
          transform: `scale(${1 + Math.cos(frame * 0.015) * 0.1})`,
        }}
      />

      {/* Logo Atlas One */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `scale(${logoScale})`,
          opacity: logoOpacity,
        }}
      >
        {/* Icono del Atlas */}
        <svg
          width="180"
          height="180"
          viewBox="0 0 100 100"
          style={{
            filter: `drop-shadow(0 0 ${30 * glowIntensity}px #00D4FF)`,
          }}
        >
          {/* Globo */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
          />
          {/* Líneas del globo */}
          <ellipse
            cx="50"
            cy="50"
            rx="40"
            ry="15"
            fill="none"
            stroke="#00D4FF"
            strokeWidth="1"
            opacity="0.5"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="15"
            ry="40"
            fill="none"
            stroke="#00D4FF"
            strokeWidth="1"
            opacity="0.5"
            transform={`rotate(${frame * 0.5} 50 50)`}
          />
          {/* Centro brillante */}
          <circle cx="50" cy="50" r="8" fill="#00D4FF" opacity="0.8" />
          <circle cx="50" cy="50" r="4" fill="#FFFFFF" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF" />
              <stop offset="100%" stopColor="#00FF94" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Nombre */}
      <div
        style={{
          marginTop: 40,
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
        }}
      >
        <h1
          style={{
            fontSize: 120,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            background: "linear-gradient(90deg, #FFFFFF 0%, #00D4FF 50%, #00FF94 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: 0,
            textShadow: `0 0 ${40 * glowIntensity}px rgba(0, 212, 255, 0.5)`,
          }}
        >
          ATLAS ONE
        </h1>
      </div>

      {/* Tagline */}
      <div
        style={{
          marginTop: 30,
          opacity: taglineOpacity,
        }}
      >
        <p
          style={{
            fontSize: 36,
            color: "rgba(255, 255, 255, 0.8)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Construimos el Futuro de Tu Empresa
        </p>
      </div>

      {/* Línea decorativa */}
      <div
        style={{
          marginTop: 40,
          width: interpolate(frame, [90, 120], [0, 400], { extrapolateRight: "clamp" }),
          height: 2,
          background: "linear-gradient(90deg, transparent, #00D4FF, transparent)",
        }}
      />
    </AbsoluteFill>
  );
};
