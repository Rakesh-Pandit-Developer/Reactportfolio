import React from 'react';
import './ProjectItem.css';

const ProjectItem = ({ project }) => {
  return (
    <div className="project-item" data-aos="zoom-in">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;