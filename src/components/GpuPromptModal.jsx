import React from "react";
import "../styles/GpuPromptModal.css";

const GpuPromptModal = ({ onConfirm }) => {
  return (
    <div className="gpu-modal-overlay">
      <div className="gpu-modal">
        <h2>Choose Your Experience</h2>
        <p>
          For an enhanced experience, we recommend selecting the 3D version of
          the library if your device has decent graphics capabilities. If you
          encounter lag, consider using a browser other than Chrome or opting
          for the 2D version of the library.
        </p>
        <p className="highlight">Which experience would you prefer?</p>
        <div className="gpu-modal-buttons">
          <button onClick={() => onConfirm(true)}>3D Version</button>
          <button onClick={() => onConfirm(false)}>2D Version</button>
        </div>
      </div>
    </div>
  );
};

export default GpuPromptModal;
