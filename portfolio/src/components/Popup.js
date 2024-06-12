import React from 'react';
import './Popup.css';

function Popup({ message, onClose, isVisible }) {
  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p className='message'>{message}</p>
        <button onClick={onClose} className="popup-button">Close</button>
      </div>
    </div>
  );
}

export default Popup;
