import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import HomePageBackground1 from "../assets/HomePageBackgroundVideo1.mp4";
import HomePageBackground2 from "../assets/HomePageBackgroundVideo2.mp4";
import "../styles/Home.css";

function Home() {
    const navigate = useNavigate();
    const [backgroundVideo, setBackgroundVideo] = useState(HomePageBackground1);

    // Function to change the background video and navigate
    function handleExplore() {
        // Update the background video and navigate after a delay
        const nextVideo = backgroundVideo === HomePageBackground1 ? HomePageBackground2 : HomePageBackground1;
        setBackgroundVideo(nextVideo);

        setTimeout(() => {
            navigate('/home'); // Adjust this as necessary for the correct route
        }, 1000); // Delay of 2 seconds to observe the video change
    }

    return (
        <div className="home">
            <video autoPlay loop muted playsInline className="background-video" key={backgroundVideo}>
                <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className="headerContainer">
                <div className="centeredContent">
                    <h1>Skyruk Creative Studios</h1>
                    <p>PROJECTS MADE FOR FUN!</p>
                    <button onClick={handleExplore}>Explore Now</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
