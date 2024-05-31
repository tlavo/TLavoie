import React from 'react';

function ProjectCard({ image, title, description, website, github }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <img src={image} alt={`${title} project`} className="project-image" />
      <div className="project-hover-content">
        <p className="project-description">{description}</p>
        <div className="project-buttons">
          <a href={website} target="_blank" rel="noopener noreferrer">
            <button className="project-button">Visit</button>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <button className="project-button">Code</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
