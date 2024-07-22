import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/LibraryStyles/Library2D.css";
import Library2DBackgroundImage from "../../assets/Library2DBackgroundImage.png";

const games = [
  {
    name: "Wordle Clone",
    link: "https://ivanshklyaruk.github.io/Wordle-Clone/",
  },
  { name: "Magic Match", link: "https://ivanshklyaruk.github.io/Magic-Match/" },
  { name: "Chess", link: "https://ivanshklyaruk.github.io/Chess/" },
  { name: "???", link: "/library/preview" },
  { name: "???", link: "/library/preview" },
];

const apps = [
  {
    name: "YouTube Clone",
    link: "https://ivanshklyaruk.github.io/YouTube-Clone/",
  },
  {
    name: "Netflix Clone",
    link: "https://ivanshklyaruk.github.io/Netflix-Clone/",
  },
  { name: "Weather App", link: "https://ivanshklyaruk.github.io/Weather-App/" },
  { name: "???", link: "/library/preview" },
  { name: "???", link: "/library/preview" },
];

const models = [
  { name: "Credits", link: "/library/models-credits" },
  {
    name: "Three Worlds",
    link: "https://ivanshklyaruk.github.io/Three-Worlds/",
  },
  {
    name: "Tesla Slideshow",
    link: "https://ivanshklyaruk.github.io/Tesla-Slideshow/",
  },
  { name: "???", link: "/library/preview" },
  { name: "???", link: "/library/preview" },
];

const ai = [
  {
    name: "Face Detection",
    link: "https://ivanshklyaruk.github.io/Face-Detection/",
  },
  {
    name: "Gesture-Recognition",
    link: "https://ivanshklyaruk.github.io/Gesture-Recognition/",
  },
  { name: "???", link: "/library/preview" },
  { name: "???", link: "/library/preview" },
  { name: "???", link: "/library/preview" },
];

const categories = {
  games,
  apps,
  models,
  ai,
};

export const Library2D = () => {
  const [visibleOption, setVisibleOption] = useState(null);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setVisibleOption(option);
  };

  const handleBackClick = () => {
    setVisibleOption(null);
  };

  const handleLinkClick = (link) => {
    if (link.startsWith("/")) {
      navigate(link);
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="library-2d">
      <img
        src={Library2DBackgroundImage}
        alt="Background"
        className="library-2d-background-image"
      />
      <div className="library-2d-content">
        {visibleOption === null ? (
          <div className="library-2d-options">
            <div
              className="library-2d-option"
              onClick={() => handleOptionClick("games")}
              role="button"
              aria-label="Games"
            >
              Games
            </div>
            <div
              className="library-2d-option"
              onClick={() => handleOptionClick("apps")}
              role="button"
              aria-label="Apps"
            >
              Apps
            </div>
            <div
              className="library-2d-option"
              onClick={() => handleOptionClick("models")}
              role="button"
              aria-label="3D Models"
            >
              3D Models
            </div>
            <div
              className="library-2d-option"
              onClick={() => handleOptionClick("ai")}
              role="button"
              aria-label="AI"
            >
              AI
            </div>
          </div>
        ) : (
          <div className="library-2d-sub-options-container">
            <button
              className="library-2d-back-button"
              onClick={handleBackClick}
              aria-label="Back"
            >
              Back
            </button>
            <div className="library-2d-sub-options">
              {categories[visibleOption].map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleLinkClick(item.link)}
                  className="library-2d-sub-option"
                  role="button"
                  aria-label={item.name}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
