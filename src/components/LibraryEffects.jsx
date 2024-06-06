import {
  Autofocus,
  Bloom,
  BrightnessContrast,
  EffectComposer,
  Noise,
  Sepia,
  Vignette,
} from "@react-three/postprocessing";
import { useControls } from "leva";
import { BlendFunction } from "postprocessing";

export const LibraryEffects = () => {
  const vignetteConfig = useControls("vignette", {
    enabled: true,
    offset: { value: 0.27, min: 0, max: 1 },
    darkness: { value: 0.79, min: 0, max: 1 },
  });

  const bloomConfig = useControls("bloom", {
    enabled: true,
    luminanceThreshold: { value: 1, min: 0, max: 2 },
    intensity: { value: 0.79, min: 0, max: 2 },
    mipmapBlur: true,
  });

  const brightnessContrastConfig = useControls("brightnessContrast", {
    enabled: true,
    brightness: { value: 0.05, min: -1, max: 1 },
    contrast: { value: 0.19, min: -1, max: 1 },
  });

  const sepiaConfig = useControls("sepia", {
    enabled: true,
    blendFunction: {
      value: "DARKEN",
      options: Object.keys(BlendFunction),
    },
  });

  const noiseConfig = useControls("noise", {
    enabled: true,
    opacity: { value: 0.03, min: 0, max: 1 },
  });

  const autofocusConfig = useControls("autofocus", {
    enabled: true,
    mouse: true,
    focusRange: { value: 0.001, min: 0, max: 0.01 },
    bokehScale: { value: 8, min: 0, max: 40 },
    focalLength: { value: 0.8, min: 0, max: 1 },
    smoothTime: { value: 0.5, min: 0, max: 1 },
  });

  /* {autofocusConfig.enabled && <Autofocus {...autofocusConfig} />} */
  /* {sepiaConfig.enabled && (
        <Sepia
          {...sepiaConfig}
          blendFunction={BlendFunction[sepiaConfig.blendFunction]}
        />
      )} 
  */

  return (
    <EffectComposer disableNormalPass>
      {vignetteConfig.enabled && <Vignette {...vignetteConfig} />}
      {bloomConfig.enabled && <Bloom {...bloomConfig} />}
      {brightnessContrastConfig.enabled && (
        <BrightnessContrast {...brightnessContrastConfig} />
      )}

      {noiseConfig.enabled && <Noise {...noiseConfig} />}
    </EffectComposer>
  );
};
