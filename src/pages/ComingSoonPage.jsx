import React from "react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../assets/ComingSoonPageBackgroundImage.png"; // Ensure the image path is correct
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ComingSoonPage.css";

const ComingSoonPage = () => {
  const navigate = useNavigate();

  function handleExplore() {
    navigate("/library");
  }

  return (
    <div className="coming-soon-page">
      <Navbar />
      <img
        src={BackgroundImage}
        alt="Background"
        className="coming-soon-background-image"
      />
      <div className="coming-soon-content">
        <div className="coming-soon-centered-content">
          <h1>Under Construction</h1>
          <p>Great Things are Coming Soon!</p>
          <button onClick={handleExplore}>Back to the Library</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComingSoonPage;
