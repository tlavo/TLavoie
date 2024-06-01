import React from 'react';
import './Popup.css';

function Popup({ message, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose} className="popup-button">Close</button>
      </div>
    </div>
  );
}

export default Popup;
