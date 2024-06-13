import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundImage from "../assets/HomePageBackgroundImage.png";
import "../styles/ModelsCreditsPage.css";

const ModelsCreditsPage = () => {
  return (
    <div className="models-credits-page">
      <img
        src={BackgroundImage}
        alt="Background"
        className="background-image"
      />
      <Navbar />
      <div className="models-credits-content">
        <h1>Models Credit Page</h1>
        <p className="models-credits-description">
          3D modeling is a complex and time-intensive process. I want to extend
          my heartfelt thanks to the talented artists and creators who
          generously share their assets, making it possible for others like me
          to bring their projects to life. Their contributions are invaluable
          and deeply appreciated.
        </p>
        <div className="credits-section">
          <h2>Scene: Library</h2>
          <p>This scene includes assets sourced from the following:</p>
          <ul>
            <li>
              <strong>Asset Name:</strong> Wooden Bookshelf
              <br />
              <strong>Source:</strong> Free3D.com
            </li>
            <li>
              <strong>Asset Name:</strong> Antique Chair
              <br />
              <strong>Source:</strong> Sketchfab
            </li>
            <li>
              <strong>Asset Name:</strong> Reading Lamp
              <br />
              <strong>Source:</strong> TurboSquid
            </li>
          </ul>
        </div>
        <div className="credits-section">
          <h2>Scene: Living Room</h2>
          <p>This scene includes assets sourced from the following:</p>
          <ul>
            <li>
              <strong>Asset Name:</strong> Modern Sofa
              <br />
              <strong>Source:</strong> CGTrader
            </li>
            <li>
              <strong>Asset Name:</strong> Coffee Table
              <br />
              <strong>Source:</strong> BlendSwap
            </li>
            <li>
              <strong>Asset Name:</strong> Floor Lamp
              <br />
              <strong>Source:</strong> 3D Warehouse
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModelsCreditsPage;
