import React from "react";
import { useNavigate } from 'react-router-dom';
import GamesPageBackground from "../assets/GamesPageBackgroundVideo.mp4";
import "../styles/GamesPage.css";

const GamesPage = () => {
  
    const navigate = useNavigate();

    function handleLibraryClick() {
        navigate('/library/games/wordle');
    }

    return (
        <div className="games-page">
            <video autoPlay loop muted playsInline className="background-video" key={GamesPageBackground}>
                <source src={GamesPageBackground} type="video/mp4" />
            </video>
            <button onClick={handleLibraryClick} className="interactive-area2" style={{ top: '13%', left: '9.5%', width: '41%', height: '16%' }}>Wordle</button>
            <button className="interactive-area2" style={{ top: '13%', left: '51.5%', width: '39.5%', height: '16%' }}>Coming Soon...</button>
            <button className="interactive-area2" style={{ top: '32%', left: '9.5%', width: '41%', height: '16%' }}>Coming Soon...</button>
            <button className="interactive-area2" style={{ top: '32%', left: '51.5%', width: '39.5%', height: '16%' }}>Coming Soon...</button>
        </div>
    )
}

export default GamesPage