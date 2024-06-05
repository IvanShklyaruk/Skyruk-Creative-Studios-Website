import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/Experience";
import { LibraryEffects } from "../components/LibraryEffects";
import { Leva } from "leva";
import "../styles/TestPage.css";

const TestPage = () => {
  return (
    <div className="test-page">
      <Canvas
        camera={{
          position: [
            1.0422729349890474, 5.267620732424673, 11.78916240352308,
            0.5689723022767902, 4.707275204313833, -0.2507842152919058,
          ],
          fov: 61,
        }}
      >
        <Experience />
        <LibraryEffects />
      </Canvas>
    </div>
  );
};

export default TestPage;
