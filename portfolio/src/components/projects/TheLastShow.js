import React from 'react';
import { useNavigate } from 'react-router-dom';

function TheLastShow() {
  const navigate = useNavigate();

  return (
    <div className="comp_item comp_item--end" id="Description">
      <button className="back-button" onClick={() => navigate('/TLavoie/experience')}>Back</button>
      <h1 className="space">The Last Show</h1>
      <p>Details about The Last Show project...</p>
    </div>
  );
}

export default TheLastShow;
