import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TikTokIcon from '@mui/icons-material/LibraryMusic';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css";

// Test

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <TikTokIcon /> <GitHubIcon /> 
      </div>
      <p> &copy; 2024 skyrukcs.com</p>
    </div>
  );
}

export default Footer;