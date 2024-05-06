import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import LibraryPageBackground from "../assets/LibraryPageBackgroundVideo.mp4";
import "../styles/Library.css";

function Library() {
    const navigate = useNavigate();

    function handleLibraryClick() {
        navigate('/library/games');
    }

    return (
        <div className="library">
            <video autoPlay loop muted playsInline className="background-video" key={LibraryPageBackground}>
                <source src={LibraryPageBackground} type="video/mp4" />
            </video>
            <button onClick={handleLibraryClick} className="interactive-area" style={{ top: '18%', left: '4%', width: '10%', height: '29%' }}>Games</button>
            <button className="interactive-area" style={{ top: '27%', left: '15%', width: '7%', height: '24%' }}>Coming Soon...</button>
            <button className="interactive-area" style={{ top: '27%', left: '77%', width: '7%', height: '24%' }}>Coming Soon...</button>
            <button className="interactive-area" style={{ top: '18%', left: '85%', width: '11%', height: '29%' }}>Coming Soon...</button>
        </div>
    );
}

export default Library;
