import { AbsoluteFill, Sequence } from "remotion";
import { IntroScene } from "./sequences/IntroScene";
import { ProblemScene } from "./sequences/ProblemScene";
import { ServicesScene } from "./sequences/ServicesScene";
import { MethodScene } from "./sequences/MethodScene";
import { CTAScene } from "./sequences/CTAScene";

export const AtlasPromo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#030B12" }}>
      {/* Intro con logo - 5 segundos (frames 0-150) */}
      <Sequence from={0} durationInFrames={150}>
        <IntroScene />
      </Sequence>

      {/* Problemas que resuelve - 5 segundos (frames 150-300) */}
      <Sequence from={150} durationInFrames={150}>
        <ProblemScene />
      </Sequence>

      {/* Servicios - 10 segundos (frames 300-600) */}
      <Sequence from={300} durationInFrames={300}>
        <ServicesScene />
      </Sequence>

      {/* Metodología - 5 segundos (frames 600-750) */}
      <Sequence from={600} durationInFrames={150}>
        <MethodScene />
      </Sequence>

      {/* Call to Action final - 5 segundos (frames 750-900) */}
      <Sequence from={750} durationInFrames={150}>
        <CTAScene />
      </Sequence>
    </AbsoluteFill>
  );
};
