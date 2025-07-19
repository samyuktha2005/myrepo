import React, { useEffect } from 'react';

const Education = () => {
  const educationData = [
    {
      semester: "Semester 1",
      institution: "Amrita University",
      courses: ["Programming in C","Problem Solving"],
      period: "Aug 2022 - Dec 2022",
      gpa: "8.2"
    },
    {
      semester: "Semester 2",
      institution: "Amrita University",
      courses: ["Data Structures", "Digital Systems","HTML CSS Java Script"],
      period: "Jan 2023 - May 2023",
      gpa: "8.9"
    },
    {
      semester: "Semester 3",
      institution: "Amrita University",
      courses: ["Algorithms", "Computer Organization", "Discrete Mathematics"],
      period: "Aug 2023 - Dec 2023",
      gpa: "8.3"
    },
    {
      semester: "Semester 4",
      institution: "Amrita University",
      courses: ["Operating Systems", "Database Systems", "Theory of Computation"],
      period: "Jan 2024 - May 2024",
      gpa: "8.2"
    },
    {
      institution: "Sri Chaitanya, Narayanaguda",
      degree: "MPC (Maths, Physics, Chemistry)",
      period: "2020 – 2022",
      details: "12th Grade: 97%"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('float-up');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.timeline-item').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education">
      <h2 style={{ color: 'white' }} >Education</h2>
      <div style={{color:'gray'}} className="timeline">
        {educationData.map((edu, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            {edu.semester && <h3>{edu.semester}</h3>}
            <h4>{edu.institution}</h4>
            {edu.degree && <p>{edu.degree}</p>}
            <p>{edu.period}</p>
            {edu.gpa && <p>GPA: {edu.gpa}</p>}
            {edu.details && <p>{edu.details}</p>}
            {edu.courses && (
              <div className="courses">
                <h5>Courses:</h5>
                <ul>
                  {edu.courses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;