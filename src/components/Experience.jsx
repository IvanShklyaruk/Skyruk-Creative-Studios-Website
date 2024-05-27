import {
  OrbitControls,
  CameraControls,
  Environment,
  Gltf,
} from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { button, useControls } from "leva";
import { LibraryModel } from "./LibraryModel";
import CameraPositionLogger from "../helpers/CameraPositionLogger";

const cameraPositions = {
  noShelf: [
    6.709999999999999, 3.0700000000000003, -0.07000000000000008, 0, 0, 0,
  ],
  gamesShelf: [
    2.348093791978023, 5.533531071129502, 6.185613380954456, 1.284761775932581,
    4.665655387558045, 11.401473806162883,
  ],
};

export const Experience = () => {
  const [shelf, setShelf] = useState("noShelf");
  const controls = useRef();

  useControls("helper", {
    getLookAt: button(() => {
      if (controls.current) {
        const position = controls.current.getPosition();
        const target = controls.current.getTarget();
        console.log([...position, ...target]);
      }
      if (shelf != "noShelf") {
        setShelf("noShelf");
      } else {
        setShelf("gamesShelf");
      }
    }),
  });

  const playTransition = () => {
    controls.current.setLookAt(...cameraPositions[shelf], true);
  };

  useEffect(() => {
    playTransition();
  }, [shelf]);

  return (
    <>
      <CameraControls
        ref={controls}
        // disable all mouse buttons
        mouseButtons={{
          left: 0,
          middle: 0,
          right: 0,
          wheel: 0,
        }}
        // disable all touch gestures
        touches={{
          one: 0,
          two: 0,
          three: 0,
        }}
      />
      <ambientLight intensity={1} />
      <pointLight position={[-5, 3, 0]} intensity={100} />
      <LibraryModel />
    </>
  );
};
