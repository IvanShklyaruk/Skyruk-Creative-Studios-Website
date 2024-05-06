import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import HomePageBackground1 from "../assets/HomePageBackgroundVideo1.mp4";
import HomePageBackground2 from "../assets/HomePageBackgroundVideo2.mp4";
import "../styles/Home.css";

function Home() {
    const navigate = useNavigate();
    const [backgroundVideo, setBackgroundVideo] = useState(HomePageBackground1);
    const nextVideoRef = useRef(null);

    function handleExplore() {
        const nextVideo = backgroundVideo === HomePageBackground1 ? HomePageBackground2 : HomePageBackground1;
        nextVideoRef.current.src = nextVideo;
        nextVideoRef.current.load();

        nextVideoRef.current.oncanplaythrough = () => {
            setBackgroundVideo(nextVideo);
            setTimeout(() => {
                navigate('/library');
            }, 1000); // Delay navigation if needed
        };
    }

    return (
        <div className="home">
            <video autoPlay loop muted playsInline className="background-video" key={backgroundVideo}>
                <source src={backgroundVideo} type="video/mp4" />
            </video>
            {/* Hidden video for preloading the next video */}
            <video ref={nextVideoRef} style={{ display: 'none' }}>
                <source type="video/mp4" />
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