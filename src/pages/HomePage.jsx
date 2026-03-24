import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../assets/HomePageBackgroundImage.webp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [bgLoaded, setBgLoaded] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => setBgLoaded(true), 5000);
    return () => clearTimeout(timerRef.current);
  }, []);

  function handleExplore() {
    navigate("/library");
  }

  return (
    <div className="home-page">
      <Navbar />
      <img
        src={BackgroundImage}
        alt="Background"
        className="home-background-image"
        onLoad={() => { clearTimeout(timerRef.current); setBgLoaded(true); }}
        onError={() => { clearTimeout(timerRef.current); setBgLoaded(true); }}
      />
      <div className="home-content">
        <div className={`home-centered-content${bgLoaded ? ' home-content-visible' : ''}`}>
          <h1>Skyruk Creative Studios</h1>
          <p>PROJECTS MADE FOR FUN!</p>
          <button onClick={handleExplore}>Explore Now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
