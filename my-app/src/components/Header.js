import React, { useEffect } from 'react';
import './../styles/animation.css';

const Header = () => {
  useEffect(() => {
    // Create star cursor
    const cursor = document.createElement('div');
    cursor.className = 'star-cursor';
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <header id="header">
      <h1>Samyuktha J</h1>
      <p>Computer Science Engineer | Full Stack Developer | Machine Learning Enthusiast</p>
      
      <div className="contact-info">
        <a href="tel:9177700425">☎ 9177700425</a>
        <a href="mailto:samyukthajaegaiahgari22@gmail.com">✉ samyukthajaegaiahgari22@gmail.com</a>
        <a href="https://github.com/samyuktha2005" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      
      <div className="scroll-down" onClick={() => scrollToSection('about')}>
        ▼
      </div>
    </header>
  );
};

export default Header;