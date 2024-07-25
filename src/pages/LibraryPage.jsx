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
  const [is3D, setIs3D] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const gpuPreference = sessionStorage.getItem("hasDedicatedGPU");
    if (gpuPreference !== null) {
      const parsedGpuPreference = JSON.parse(gpuPreference);
      setHasDedicatedGPU(parsedGpuPreference);
      setIs3D(parsedGpuPreference);
    } else {
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);

      return () => {
        window.removeEventListener("resize", checkScreenSize);
      };
    }

    checkScreenSize();
  }, []);

  const checkScreenSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (width >= 1000 && height >= 800) {
      setShowSlider(true);
    } else {
      setShowSlider(false);
      setIs3D(false);
      setHasDedicatedGPU(false);
      sessionStorage.setItem("hasDedicatedGPU", JSON.stringify(false));
    }
  };

  const handleConfirm = (response) => {
    setHasDedicatedGPU(response);
    setIs3D(response);
    sessionStorage.setItem("hasDedicatedGPU", JSON.stringify(response));
  };

  const toggleView = () => {
    const newView = !is3D;
    setIs3D(newView);
    sessionStorage.setItem("hasDedicatedGPU", JSON.stringify(newView));

    if (newView && !hasDedicatedGPU) {
      window.location.reload();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (width < 1000 || height < 800) {
        setShowSlider(false);
        if (is3D) {
          setIs3D(false);
          setHasDedicatedGPU(false);
          sessionStorage.setItem("hasDedicatedGPU", JSON.stringify(false));
        }
      } else {
        setShowSlider(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [is3D]);

  if (hasDedicatedGPU === null) {
    return <GpuPromptModal onConfirm={handleConfirm} />;
  }

  return (
    <div className="library-page">
      <Navbar showSlider={showSlider} is3D={is3D} toggleView={toggleView} />
      {is3D && hasDedicatedGPU ? (
        <>
          <LoadingScreen progress={progress} active={active} />
          <Canvas
            key={is3D}
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
