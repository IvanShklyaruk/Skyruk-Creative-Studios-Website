import React, { useState } from "react";
import "../../styles/LibraryStyles/Library2D.css";
import Library2DBackgroundImage from "../../assets/Library2DBackgroundImage.png"; // Ensure the image path is correct

const games = [
  {
    name: "Wordle Clone",
    link: "https://ivanshklyaruk.github.io/Wordle-Clone/",
  },
  { name: "Magic Match", link: "https://ivanshklyaruk.github.io/Magic-Match/" },
  { name: "???", link: "#" },
  { name: "???", link: "#" },
  { name: "???", link: "#" },
];

const apps = [
  { name: "???", link: "#" },
  { name: "???", link: "#" },
  { name: "???", link: "#" },
  { name: "???", link: "#" },
  { name: "???", link: "#" },
];

const models = [
  { name: "Credits", link: "/library/models-credits" },
  {
    name: "Three Worlds",
    link: "https://ivanshklyaruk.github.io/Three-Worlds/",
  },
  { name: "???", link: "#" },
  { name: "???", link: "#" },
  { name: "???", link: "#" },
];

const scrapers = [
  { name: "???", link: "#" },
  { name: "???", link: "#" },
  { name: "???", link: "#" },
  { name: "???", link: "#" },
  { name: "???", link: "#" },
];

const categories = {
  games,
  apps,
  models,
  scrapers,
};

export const Library2D = () => {
  const [visibleOption, setVisibleOption] = useState(null);

  const handleOptionClick = (option) => {
    setVisibleOption(option);
  };

  const handleBackClick = () => {
    setVisibleOption(null);
  };

  const handleLinkClick = (link) => {
    if (link.startsWith("/")) {
      const anchor = document.createElement("a");
      anchor.href = link;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.click();
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
            >
              Games
            </div>
            <div
              className="library-2d-option"
              onClick={() => handleOptionClick("apps")}
            >
              Apps
            </div>
            <div
              className="library-2d-option"
              onClick={() => handleOptionClick("models")}
            >
              3D Models
            </div>
            <div
              className="library-2d-option"
              onClick={() => handleOptionClick("scrapers")}
            >
              Scrapers
            </div>
          </div>
        ) : (
          <div className="library-2d-sub-options-container">
            <button
              className="library-2d-back-button"
              onClick={handleBackClick}
            >
              Back
            </button>
            <div className="library-2d-sub-options">
              {categories[visibleOption].map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleLinkClick(item.link)}
                  className="library-2d-sub-option"
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
