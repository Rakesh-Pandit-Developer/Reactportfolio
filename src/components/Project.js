import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';

const projectData = [
  {
    id: 1,
    title: 'Project One',
    description: 'A responsive website built with HTML, CSS, and JavaScript.',
    image: '/images/project1.jpg',
    link: 'https://example.com/project1'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A dynamic web application developed using React and Node.js.',
    image: '/images/project2.jpg',
    link: 'https://example.com/project2'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'An e-commerce platform designed with modern UI/UX principles.',
    image: '/images/project3.jpg',
    link: 'https://example.com/project3'
  }
];

const Projects = () => {
  return (
    <section className="projects-section" data-aos="fade-left">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectData.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;