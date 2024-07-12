import React from "react";
import { useNavigate } from "react-router-dom";
import LibraryPageBackground from "../assets/HomePageBackgroundImage.png";
import "../styles/TestPage.css";

const TestPage = () => {
  const navigate = useNavigate();

  function handleLibraryClick() {
    navigate("/library/test");
  }

  function handleLibraryClick2() {
    navigate("/library/test");
  }

  return (
    <div className="test-library-page">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="test-background-video"
        key={LibraryPageBackground}
      >
        <source src={LibraryPageBackground} type="video/mp4" />
      </video>
      <button
        onClick={handleLibraryClick}
        className="test-interactive-area"
        style={{ top: "18%", left: "4%", width: "10%", height: "29%" }}
      >
        Games
      </button>
      <button
        onClick={handleLibraryClick2}
        className="test-interactive-area"
        style={{ top: "27%", left: "15%", width: "7%", height: "24%" }}
      >
        Test
      </button>
      <button
        className="test-interactive-area"
        style={{ top: "27%", left: "77%", width: "7%", height: "24%" }}
      >
        Coming Soon...
      </button>
      <button
        className="test-interactive-area"
        style={{ top: "18%", left: "85%", width: "11%", height: "29%" }}
      >
        Coming Soon...
      </button>
    </div>
  );
};

export default TestPage;
