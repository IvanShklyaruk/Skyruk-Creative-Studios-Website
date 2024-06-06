import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LibraryPageBackground from "../assets/LibraryPageBackgroundVideo.mp4";
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
    <div className="library-page">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
        key={LibraryPageBackground}
      >
        <source src={LibraryPageBackground} type="video/mp4" />
      </video>
      <button
        onClick={handleLibraryClick}
        className="interactive-area"
        style={{ top: "18%", left: "4%", width: "10%", height: "29%" }}
      >
        Games
      </button>
      <button
        onClick={handleLibraryClick2}
        className="interactive-area"
        style={{ top: "27%", left: "15%", width: "7%", height: "24%" }}
      >
        Test
      </button>
      <button
        className="interactive-area"
        style={{ top: "27%", left: "77%", width: "7%", height: "24%" }}
      >
        Coming Soon...
      </button>
      <button
        className="interactive-area"
        style={{ top: "18%", left: "85%", width: "11%", height: "29%" }}
      >
        Coming Soon...
      </button>
    </div>
  );
};

export default TestPage;
