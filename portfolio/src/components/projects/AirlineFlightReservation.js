import React from 'react';
import { useNavigate } from 'react-router-dom';

function AirlineFlightReservation() {
  const navigate = useNavigate();

  return (
    <div className="comp_item main-content" id="Description">
      <button className="back-button" onClick={() => navigate('/TLavoie/experience')}>Back</button>
      <h1 className="space">Airline Flight Reservation</h1>
      <p>Details about the Airline Flight Reservation project...</p>
    </div>
  );
}

export default AirlineFlightReservation;
