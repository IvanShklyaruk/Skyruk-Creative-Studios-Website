import React, { useState } from "react";
import Logo from "../assets/SkyrukLogo.png"; // Ensure the logo path is correct
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "@mui/icons-material/LibraryMusic";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/library">Library</Link>
        <Link to="/about">About</Link>
        <div className="socialIcons">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TikTokIcon />
          </a>
          <a
            href="https://www.github.com"
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
