import React, { useState } from 'react';
import Popup from './Popup';

function ProjectCard({ image, title, description, website, github, inDevelopment }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleWebsiteClick = () => {
    if (inDevelopment) {
      setShowPopup(true);
    } else {
      window.open(website, '_blank');
    }
  };
  
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <img src={image} alt={`${title} project`} className="project-image" />
      <div className="project-hover-content">
        <p className="project-description">{description}</p>
        <div className="project-buttons">
          <button className="project-button" onClick={handleWebsiteClick}>
            Visit
          </button>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <button className="project-button">Code</button>
          </a>
        </div>
      </div>
      {showPopup && (
        <Popup
          message="Sorry, this site is still in development!"
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default ProjectCard;
