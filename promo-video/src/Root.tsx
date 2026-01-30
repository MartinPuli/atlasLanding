import { Composition } from "remotion";
import { AtlasPromo } from "./AtlasPromo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AtlasPromo"
        component={AtlasPromo}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
