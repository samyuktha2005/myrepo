import React from 'react';

const Skills = () => {
  const skills = [
    "Python", "C/C++", "Java", "JavaScript", "HTML/CSS", 
    "React", "Tailwind CSS", "SQL", "Data Structures", 
    "Algorithms", "OOP", "Pandas", "NumPy", "Matplotlib", 
    "Scikit-learn", "TensorFlow", "Keras", "Git", "Linux", 
    "Shell Scripting"
  ];

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div style={{color:'gray'}} className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;