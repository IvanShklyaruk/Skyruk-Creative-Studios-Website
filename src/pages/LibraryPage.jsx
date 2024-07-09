import React from "react";
import { Canvas } from "@react-three/fiber";
import { Library } from "../components/LibraryComponents/Library";
import { LibraryEffects } from "../components/LibraryComponents/LibraryEffects";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/LibraryStyles/LibraryPage.css";
import { useProgress } from "@react-three/drei";

const LibraryPage = () => {
  const { progress, active } = useProgress();

  return (
    <>
      {<LoadingScreen progress={progress} active={active} />}
      <div className="library-page">
        <Navbar />
        <Canvas
          camera={{
            position: [1.042, 5.268, 11.789],
            fov: 61,
          }}
        >
          <Library />
          <LibraryEffects />
        </Canvas>
        <Footer />
      </div>
    </>
  );
};

export default LibraryPage;
