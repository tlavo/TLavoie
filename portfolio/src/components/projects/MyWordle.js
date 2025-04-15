import React from 'react';
import { useNavigate } from 'react-router-dom';

function MyWordle() {
  const navigate = useNavigate();

  return (
    <div className="comp_item main-content" id="Description">
      <button className="back-button" onClick={() => navigate('/TLavoie/experience')}>Back</button>
      <h1 className="space">My Wordle</h1>
      <p>Details about My Wordle project...</p>
    </div>
  );
}

export default MyWordle;
