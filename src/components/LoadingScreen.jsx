import React from "react";
import "../styles/LoadingScreen.css";

const LoadingScreen = ({ progress, active }) => {
  return (
    <div
      className={`loading-screen ${
        active ? "loading-screen-active" : "loading-screen-hidden"
      }`}
    >
      <div className="loading-screen-container">
        <h1 className="loading-screen-title">Library</h1>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
