import React from "react";
import "../styles/GpuPromptModal.css";

const GpuPromptModal = ({ onConfirm }) => {
  return (
    <div className="gpu-modal-overlay">
      <div className="gpu-modal">
        <h2>Do you have a dedicated graphics card?</h2>
        <div className="gpu-modal-buttons">
          <button onClick={() => onConfirm(true)}>Yes</button>
          <button onClick={() => onConfirm(false)}>No</button>
        </div>
      </div>
    </div>
  );
};

export default GpuPromptModal;
