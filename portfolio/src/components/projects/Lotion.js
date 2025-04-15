import React from 'react';
import { useNavigate } from 'react-router-dom';

function Lotion() {
  const navigate = useNavigate();

  return (
    <div className="comp_item main-content" id="Description">
      <button className="back-button" onClick={() => navigate('/TLavoie/experience')}>Back</button>
      <h1 className="space">Lotion</h1>
      <p>Details about the Lotion project...</p>
    </div>
  );
}

export default Lotion;
