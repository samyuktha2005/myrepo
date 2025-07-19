import React from 'react';
import Card from './Card';

const Projects = () => {
  const projects = [
    {
      title: "Menu Management System",
      description: "Built a responsive web-based menu system with dynamic cart features and interactive UI.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/samyuktha2005/menu-management-system"
    },
    {
      title: "Theft Management System",
      description: "Created a theft reporting/tracking app with real-time dashboard and admin interface.",
      tags: ["PHP", "MySQL", "JavaScript"],
      link: "https://github.com/samyuktha2005/theft-management-system"
    },
    {
      title: "Phishing Detection using GANs",
      description: "Researching adversarial phishing detection using GANs with real-world datasets.",
      tags: ["Python", "TensorFlow", "Machine Learning"],
      link: "https://github.com/samyuktha2005/phishing-detection"
    },
    {
      title: "Weather Prediction System",
      description: "Web application for weather forecasting using LSTM neural networks with 88% accuracy.",
      tags: ["React.js", "TensorFlow", "LSTM"],
      link: "https://github.com/samyuktha2005/weather-prediction"
    }
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div style={{color:'gray'}} className="card-grid">
        {projects.map((project, index) => (
          <Card 
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
            isProject={true}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;