import React, { useState } from 'react';
import Popup from './Popup';
import { useNavigate } from 'react-router-dom';
import more from '../media/more.png';

function ProjectCard({ image, title, description, website, github, inDevelopment, message }) {
  const [showPopup, setShowPopup] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleWebsiteClick = () => {
    if (inDevelopment) {
      setShowPopup(true);
    } else {
      window.open(website, '_blank');
    }
  };

  const handleMoreClick = () => {
    const projectName = title.replace(/[\s/]+/g, '-');
    navigate(`/TLavoie/experience/${projectName}`);
  };  

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowPopup(false);
  };
  
  return (
    <div className="project-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h3 className="project-title">{title}</h3>
      <img src={image} alt={`${title} project`} className="project-image" />
      <div className="project-hover-content">
        <button className="project-more-button" onClick={handleMoreClick}>
          more&nbsp;
          <img className="more" src={more} width="12" height="12" alt="more icon"/>
        </button>
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
          message={message}
          onClose={() => setShowPopup(false)}
          isVisible={isHovered}
        />
      )}
    </div>
  );
}

export default ProjectCard;
