import {
  OrbitControls,
  CameraControls,
  Environment,
  Gltf,
} from "@react-three/drei";
import { useRef } from "react";
import { button, useControls } from "leva";
import { LibraryModel } from "./LibraryModel";
import CameraPositionLogger from "../helpers/CameraPositionLogger";

export const Experience = () => {
  const controls = useRef();

  useControls("Dolly", {
    in: button(() => controls.current.dolly(1, true)),
    out: button(() => controls.current.dolly(-1, true)),
  });
  return (
    <>
      <CameraControls ref={controls} />
      <ambientLight intensity={1} />
      <CameraPositionLogger event="mousedown" />
      <pointLight position={[-5, 3, 0]} intensity={100} />
      <LibraryModel />
    </>
  );
};
