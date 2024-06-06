import { CameraControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { button, useControls } from "leva";
import { LibraryModel } from "./LibraryModel";
import CameraPositionLogger from "../../helpers/CameraPositionLogger";
import "../../styles/LibraryStyles/Library.css";

const cameraPositions = {
  noShelf: [
    1.0422729349890474, 5.267620732424673, 11.78916240352308,
    0.5689723022767902, 4.707275204313833, -0.2507842152919058,
  ],
  shelf1: [
    -1.8885468334376454, 5.696974030063936, 2.1579608628604365,
    -3.917805419462525, 5.7511278651472, 2.084244916570261,
  ],
  shelf2: [
    -1.9399500230790172, 5.710335415985802, -4.324673819626491,
    -3.682539603208369, 5.756839054994666, -4.3879760723700745,
  ],
  shelf3: [
    2.909786476564955, 5.734251049615279, 1.4432005942739672,
    3.8630339536019043, 5.758003115274407, 1.4630620671100811,
  ],
  shelf4: [
    2.974842896520027, 5.53309033398676, -4.948964503787466, 3.6785009356152205,
    5.57190399694158, -4.980041790667162,
  ],
};

export const Library = () => {
  const [shelf, setShelf] = useState("noShelf");
  const controls = useRef();

  const { cameraPosition } = useControls({
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

      <pointLight
        position={[0.486, 2.2, -6.5]}
        intensity={11}
        color={"#ffce00"}
      />
      <ambientLight
        position={[-0.034, 0.008, 6.348]}
        intensity={0.65}
        /* color={"#ffce00"} */
      />
      <ambientLight
        position={[-6.695, 1.534, 0.011]}
        intensity={0.19}
        color={"#43edf5"}
      />
      <LibraryModel shelf={shelf} setShelf={setShelf} />
    </>
  );
};
