import React from "react";
import Logo from "../assets/SkyrukLogo.png";
import { Link } from "react-router-dom";
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
