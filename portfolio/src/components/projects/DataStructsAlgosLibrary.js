import React from 'react';
import { useNavigate } from 'react-router-dom';

function DataStructsAlgosLibrary() {
  const navigate = useNavigate();

  return (
    <div className="comp_item comp_item--end" id="Description">
      <button className="back-button" onClick={() => navigate('/TLavoie/experience')}>Back</button>
      <h1 className="space">Data Structs/Algos Library</h1>
      <p>Details about the Data Structs/Algos Library project...</p>
    </div>
  );
}

export default DataStructsAlgosLibrary;
