import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Card = ({ title, description, tags, isProject = false, link }) => {
  const handleClick = (e) => {
    if (isProject) {
      e.currentTarget.classList.add('jump');
      setTimeout(() => {
        e.currentTarget.classList.remove('jump');
      }, 500);
    }
  };

  return (
    <div 
      className={`card ${isProject ? 'project-card' : ''}`} 
      onClick={isProject ? handleClick : null}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      {tags && (
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      )}
      {isProject && link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
          onClick={(e) => e.stopPropagation()}
        >
          <FaGithub /> View on GitHub
        </a>
      )}
    </div>
  );
};

export default Card;