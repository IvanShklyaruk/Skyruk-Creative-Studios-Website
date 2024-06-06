import { Canvas } from "@react-three/fiber";
import { Library } from "../components/LibraryComponents/Library";
import { LibraryEffects } from "../components/LibraryComponents/LibraryEffects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/LibraryStyles/LibraryPage.css";

const LibraryPage = () => {
  return (
    <div className="library-page">
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
      <Footer />
    </div>
  );
};

export default LibraryPage;
