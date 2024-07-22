import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Library } from "../components/LibraryComponents/Library";
import { LibraryEffects } from "../components/LibraryComponents/LibraryEffects";
import LoadingScreen from "../components/LoadingScreen";
import { Library2D } from "../components/LibraryComponents/Library2D";
import GpuPromptModal from "../components/GpuPromptModal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/LibraryStyles/LibraryPage.css";
import { useProgress } from "@react-three/drei";

const LibraryPage = () => {
  const { progress, active } = useProgress();
  const [hasDedicatedGPU, setHasDedicatedGPU] = useState(null);

  useEffect(() => {
    const gpuPreference = sessionStorage.getItem("hasDedicatedGPU");
    if (gpuPreference !== null) {
      setHasDedicatedGPU(JSON.parse(gpuPreference));
    } else {
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);

      return () => {
        window.removeEventListener("resize", checkScreenSize);
      };
    }
  }, []);

  const checkScreenSize = () => {
    if (window.innerWidth < 1280 || window.innerHeight < 800) {
      setHasDedicatedGPU(false);
      sessionStorage.setItem("hasDedicatedGPU", JSON.stringify(false));
    }
  };

  const handleConfirm = (response) => {
    setHasDedicatedGPU(response);
    sessionStorage.setItem("hasDedicatedGPU", JSON.stringify(response));
  };

  if (hasDedicatedGPU === null) {
    return <GpuPromptModal onConfirm={handleConfirm} />;
  }

  return (
    <div className="library-page">
      <Navbar />
      {hasDedicatedGPU ? (
        <>
          <LoadingScreen progress={progress} active={active} />
          <Canvas
            camera={{
              position: [1.042, 5.268, 11.789],
              fov: 61,
            }}
          >
            <Library />
            <LibraryEffects />
          </Canvas>
        </>
      ) : (
        <Library2D />
      )}
      <Footer />
    </div>
  );
};

export default LibraryPage;
