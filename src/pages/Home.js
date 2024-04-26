import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/BannerImage.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Skyruk Creative Studios </h1>
        <p> PROJECTS MADE FOR FUN!! </p>
        <Link to="/hall">
          <button> Explore Now </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;