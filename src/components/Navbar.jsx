import React from "react";
import Logo from "../assets/SkyrukLogo.png";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import Switch from "@mui/material/Switch";
import "../styles/Navbar.css";

const Navbar = ({ showSlider, is3D, toggleView }) => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        {showSlider && (
          <div className="viewToggle">
            <span className="viewLabel">2D</span>
            <Switch checked={is3D} onChange={toggleView} />
            <span className="viewLabel">3D</span>
          </div>
        )}
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/library">Library</Link>
        <Link to="/about">About</Link>
        <div className="socialIcons">
          <a
            href="https://github.com/IvanShklyaruk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
