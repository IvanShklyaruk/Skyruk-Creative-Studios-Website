import React from "react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../assets/HomePageBackgroundImage.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

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
      />
      <div className="home-content">
        <div className="home-centered-content">
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
