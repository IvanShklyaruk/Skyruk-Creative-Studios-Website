import React from "react";
import "../../styles/WordleStyles/WordleModal.css";
import { useNavigate } from "react-router-dom";

export default function WordleModal({ isCorrect, turn, solution }) {
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    window.location.reload(); // This will refresh the page
  };

  const handleLibrary = () => {
    navigate("/library");
  };

  return (
    <div className="modal">
      {isCorrect ? (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses :)</p>
        </div>
      ) : (
        <div>
          <h1>You Lose!</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time :)</p>
        </div>
      )}
      <div className="modal-buttons">
        <button onClick={handlePlayAgain} className="play-again-button">
          Play Again
        </button>
        <button onClick={handleLibrary} className="library-button">
          Library
        </button>
      </div>
    </div>
  );
}
