import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/SkyrukLogo.png"; // Ensure the logo path is correct
import ReorderIcon from "@mui/icons-material/Reorder";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "@mui/icons-material/LibraryMusic";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Navbar.css";

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/library">Library</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/library">Library</Link>
        <Link to="/about">About</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
        <div className="socialIcons">
          <InstagramIcon />
          <TikTokIcon />
          <GitHubIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
