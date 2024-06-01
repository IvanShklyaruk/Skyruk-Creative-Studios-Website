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
import "../styles/Experience.css";

const cameraPositions = {
  noShelf: [
    1.0169448845584173, 5.0952365118624545, 15.586448616475266, 0.5450852772641668, 4.839987403130891, -0.26460287443670377,
  ],
  shelf1: [
    1.8458778215829745, 6.677529555501346, 5.484598656207786,
    1.3472274269920734, 5.953223160479395, 10.66006132711226,
  ],
  shelf2: [
    -4.6874205637815765, 6.062490069591727, 5.146173821551852,
    -4.789468949845035, 6.019453608659777, 6.1687864970602995,
  ],
  shelf3: [
    2.3809744919118265, 6.22048637143832, -5.510338626476629, 1.625423194964002,
    5.808356131910731, -10.767834163615259,
  ],
  shelf4: [
    -4.471882698968729, 5.88254577252221, -5.174928283049535,
    -4.5762488687882055, 5.861577544016572, -5.932287649237444,
  ],
};

export const Experience = () => {
  const [shelf, setShelf] = useState("noShelf");
  const controls = useRef();

  const { cameraPosition } = useControls({
    cameraPosition: {
      value: "noShelf",
      options: Object.keys(cameraPositions),
      onChange: (value) => {
        console.log(`Shelf changed to: ${value}`);
        setShelf(value);
      },
    },
    getLookAt: button(() => {
      if (controls.current) {
        const position = controls.current.getPosition();
        const target = controls.current.getTarget();
        console.log([...position, ...target]);
      }
    }),
  });

  const playTransition = () => {
    if (controls.current && cameraPositions[shelf]) {
      controls.current.setLookAt(...cameraPositions[shelf], true);
    }
  };

  useEffect(() => {
    playTransition();
  }, [shelf]);

  useEffect(() => {
    setShelf("noShelf");
  }, []);

  return (
    <>
      <CameraControls
        ref={controls}
      /*  // disable all mouse buttons
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
        }}*/
      />
      <ambientLight intensity={1} />
      <pointLight position={[-5, 3, 0]} intensity={10} />
      <LibraryModel shelf={shelf} setShelf={setShelf} />
    </>
  );
};
