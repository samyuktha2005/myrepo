import React from 'react';
import Card from './Card';

const Courses = () => {
  const courses = [
    {
      title: "Web Development Bootcamp",
      provider: "Udemy",
      description: "HTML, CSS, JavaScript, Node.js"
    },
    {
      title: "Python Programming",
      provider: "Hackerrank",
      description: "Core Python programming and problem-solving"
    },
    {
      title: "SQL",
      provider: "Hackerrank",
      description: "SQL queries for data manipulation"
    },
    {
      title: "Data Visualization",
      provider: "Tata",
      description: "Empowering Business with Effective Insights"
    },
    {
      title: "Introduction to AI",
      provider: "Infosys Springboard",
      description: "Fundamentals of AI concepts and applications"
    }
  ];

  return (
    <section id="courses">
      <h2>Courses Completed</h2>
      <div style={{color:'gray'}} className="card-grid">
        {courses.map((course, index) => (
          <Card
            key={index}
            title={course.title}
            description={`${course.provider} - ${course.description}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Courses;