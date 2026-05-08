import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="card">
      <div className="card-category">{project.category}</div>
      <h2 className="card-title">{project.title}</h2>
      <p className="card-description">{project.description}</p>
      <p className="card-tech">
        <strong>Tech:</strong> {project.tech}
      </p>
    </div>
  );
}

export default ProjectCard;