import React from "react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../assets/ComingSoonPageBackgroundImage.png"; // Ensure the image path is correct
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ComingSoonPage.css";

const ComingSoonPage = () => {
  const navigate = useNavigate();

  function handleExplore() {
    navigate("/");
  }

  return (
    <div className="coming-soon-page">
      <Navbar />
      <img
        src={BackgroundImage}
        alt="Background"
        className="background-image"
      />
      <div className="coming-soon-content">
        <div className="centeredContent">
          <h1>Under Construction</h1>
          <p>Great Things are Coming Soon!</p>
          <button onClick={handleExplore}>Go Home</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComingSoonPage;
