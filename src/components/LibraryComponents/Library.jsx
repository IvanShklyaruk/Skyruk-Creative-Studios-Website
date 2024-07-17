import { CameraControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { button, useControls } from "leva";
import { LibraryModel } from "./LibraryModel";
import CameraPositionLogger from "../../helpers/CameraPositionLogger";
import "../../styles/LibraryStyles/Library.css";
import { useDevice } from "../../hooks/useDevice";

const cameraPositions = {
  noShelf: {
    position: [
      1.0422729349890474, 5.267620732424673, 11.78916240352308,
      0.5689723022767902, 4.707275204313833, -0.2507842152919058,
    ],
    fov: 62,
  },
  shelf1: {
    position: [
      -1.8885468334376454, 5.696974030063936, 2.1579608628604365,
      -3.917805419462525, 5.7511278651472, 2.084244916570261,
    ],
    fov: 62,
  },
  shelf2: {
    position: [
      -1.9399500230790172, 5.710335415985802, -4.324673819626491,
      -3.682539603208369, 5.756839054994666, -4.3879760723700745,
    ],
    fov: 62,
  },
  shelf3: {
    position: [
      2.909786476564955, 5.734251049615279, 1.4432005942739672,
      3.8630339536019043, 5.758003115274407, 1.4630620671100811,
    ],
    fov: 62,
  },
  shelf4: {
    position: [
      2.974842896520027, 5.53309033398676, -4.948964503787466,
      3.6785009356152205, 5.57190399694158, -4.980041790667162,
    ],
    fov: 62,
  },
};

export const Library = () => {
  const { device } = useDevice();
  const [shelf, setShelf] = useState("noShelf");
  const controls = useRef();

  /* { Helper to get Camera Position }
  const { cameraPosition } = useControls({ hi
    getLookAt: button(() => {
      if (controls.current) {
        const position = controls.current.getPosition();
        const target = controls.current.getTarget();
        console.log([...position, ...target]);
      }
    }),
  });
*/

  const playTransition = () => {
    if (controls.current && cameraPositions[shelf]) {
      const { position, fov } = cameraPositions[shelf];
      controls.current.setLookAt(...position, true);
      if (shelf === "noShelf") {
        controls.current.camera.fov = fov;
      } else {
        const fovMap = {
          phone: 140,
          tablet: 120,
          laptop: fov,
          desktop: fov,
        };
        controls.current.camera.fov = fovMap[device] || fov;
      }
      controls.current.camera.updateProjectionMatrix();
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

      <pointLight
        position={[0.486, 2.2, -6.5]}
        intensity={11}
        color={"#ffce00"}
      />
      <ambientLight
        position={[-0.034, 0.008, 6.348]}
        intensity={0.75}
        /* color={"#ffce00"} */
      />
      <ambientLight
        position={[-6.695, 1.534, 0.011]}
        intensity={0.29}
        color={"#43edf5"}
      />
      <LibraryModel shelf={shelf} setShelf={setShelf} />
    </>
  );
};
