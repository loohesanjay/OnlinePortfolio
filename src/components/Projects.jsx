import React from "react";

function Projects({ projects }) {
  return (
    <div>
      <h2>Projects</h2>
      <div>
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
