import { Canvas } from "@react-three/fiber";
import { Library } from "../components/LibraryComponents/Library";
import { LibraryEffects } from "../components/LibraryComponents/LibraryEffects";
import "../styles/LibraryStyles/LibraryPage.css";
import Navbar from "../components/Navbar";

const LibraryPage = () => {
  return (
    <div className="test-page">
      <Navbar />
      <Canvas
        camera={{
          position: [
            1.0422729349890474, 5.267620732424673, 11.78916240352308,
            0.5689723022767902, 4.707275204313833, -0.2507842152919058,
          ],
          fov: 61,
        }}
      >
        <Library />
        <LibraryEffects />
      </Canvas>
    </div>
  );
};

export default LibraryPage;
