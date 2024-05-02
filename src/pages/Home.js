import React from "react";
import { Link } from "react-router-dom";
import HomePageBackground from "../assets/HomePageBackgroundVideo.mp4";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={HomePageBackground} type="video/mp4"></source>
      </video>
      <div className="headerContainer">
        <div className="centeredContent">
          <h1>Skyruk Creative Studios</h1>
          <p>PROJECTS MADE FOR FUN!</p>
          <Link to="/Hall">
            <button>Explore Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
