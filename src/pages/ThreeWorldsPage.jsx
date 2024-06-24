import { Canvas } from "@react-three/fiber";
import { ThreeWorlds } from "../components/ThreeWorldsComponents/ThreeWorlds";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ThreeWorldsStyles/ThreeWorldsPage.css";

const LibraryPage = () => {
  return (
    <div className="three-worlds-page">
      <Navbar />
      <Canvas>
        <ThreeWorlds />
      </Canvas>
      <Footer />
    </div>
  );
};

export default LibraryPage;
