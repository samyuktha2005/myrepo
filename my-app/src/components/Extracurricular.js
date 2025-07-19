import React from 'react';

const Extracurricular = () => {
  const activities = [
    "Member of technical clubs; participated in hackathons and coding contests",
    "School debate and quiz club member",
    "Part of Live-in-Labs – experiential learning program solving real-world problems in rural villages"
  ];

  return (
    <section id="extracurricular">
      <h2>Extracurricular Activities</h2>
      <div style={{color:'gray'}} className="card">
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Extracurricular;