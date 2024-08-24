
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="container">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Brief description of the project.</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Brief description of the project.</p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Projects;
