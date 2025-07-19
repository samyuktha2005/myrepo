import React, { useEffect } from 'react';

const Sprinkle = () => {
  useEffect(() => {
    const createSprinkle = (x, y) => {
      const sprinkle = document.createElement('div');
      sprinkle.className = 'sprinkle';
      
      const hue = Math.random() * 360;
      sprinkle.style.backgroundColor = `hsl(${hue}, 100%, 70%)`;
      
      const size = 4 + Math.random() * 8;
      sprinkle.style.width = `${size}px`;
      sprinkle.style.height = `${size}px`;
      
      sprinkle.style.setProperty('--tx', `${(Math.random() - 0.5) * 100}px`);
      sprinkle.style.setProperty('--ty', `${Math.random() * 100 + 50}px`);
      
      sprinkle.style.left = `${x}px`;
      sprinkle.style.top = `${y}px`;
      
      document.body.appendChild(sprinkle);
      
      setTimeout(() => {
        sprinkle.remove();
      }, 1000);
    };

    const handleClick = (e) => {
      for (let i = 0; i < 15; i++) {
        createSprinkle(e.clientX, e.clientY);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
};

export default Sprinkle;