import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Extracurricular from './components/Extracurricular';
import './styles/global.css';
import './styles/animation.css';

const App = () => {
  const mountRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sprinklesRef = useRef([]);

  // Three.js Setup
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Cosmic dome
    const domeGeometry = new THREE.SphereGeometry(50, 32, 32);
    const domeMaterial = new THREE.MeshBasicMaterial({
      color: 0x111111,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const dome = new THREE.Mesh(domeGeometry, domeMaterial);
    dome.position.z = -100;
    scene.add(dome);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      dome.rotation.x += 0.0005;
      dome.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  // Sprinkles effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Create new sprinkle
      const sprinkle = document.createElement('div');
      sprinkle.className = 'sprinkle';
      sprinkle.style.left = `${e.clientX}px`;
      sprinkle.style.top = `${e.clientY}px`;
      
      // Random properties
      const size = 4 + Math.random() * 8;
      const hue = Math.random() * 360;
      sprinkle.style.width = `${size}px`;
      sprinkle.style.height = `${size}px`;
      sprinkle.style.backgroundColor = `hsla(${hue}, 100%, 70%, 0.8)`;
      sprinkle.style.boxShadow = `0 0 ${size * 2}px hsla(${hue}, 100%, 70%, 0.6)`;
      
      // Random movement
      sprinkle.style.setProperty('--tx', `${(Math.random() - 0.5) * 100}px`);
      sprinkle.style.setProperty('--ty', `${Math.random() * 100 + 50}px`);
      
      document.body.appendChild(sprinkle);
      sprinklesRef.current.push(sprinkle);
      
      // Remove after animation
      setTimeout(() => {
        if (document.body.contains(sprinkle)) {
          document.body.removeChild(sprinkle);
        }
        sprinklesRef.current = sprinklesRef.current.filter(s => s !== sprinkle);
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="App" style={{ 
      backgroundColor: '#0f0f13',  // Deep dark blue-gray
      color: '#e0e0e0'             // Soft white
    }}>
      {/* Three.js Canvas (updated with neutral colors) */}
      <div ref={mountRef} style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        zIndex: -1 
      }} />
      
      {/* UI Components */}
      <Header />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Courses />
      <Extracurricular />
    </div>
  );
};

export default App;