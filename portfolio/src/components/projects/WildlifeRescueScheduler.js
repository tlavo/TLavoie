import React from 'react';
import { useNavigate } from 'react-router-dom';

function WildlifeRescueScheduler() {
  const navigate = useNavigate();

  return (
    <div className="comp_item main-content" id="Description">
      <button className="back-button" onClick={() => navigate('/TLavoie/experience')}>Back</button>
      <h1 className="space">WildlifeRescueScheduler</h1>
      <p>Details about the Wildlife Rescue Scheduler project...</p>
    </div>
  );
}

export default WildlifeRescueScheduler;
