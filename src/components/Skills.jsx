import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "React Native",
  "React Router",
  "Redux",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "Git & GitHub",
  "Responsive Design",
  "REST APIs",
  "Aws lambda",
];

const Skills = () => {
  return (
    <section id="skills" className="reveal-section py-5 bg-dark-3">
      <div className="container">
        <h2 className="section-title text-center mb-4">Skills</h2>
        <p className="section-subtitle text-center mb-5 text-muted-hero">
          Technologies and tools I use to build modern web applications.
        </p>
        <div className="row g-4">
          {skills.map((skill) => (
            <div className="col-6 col-md-4 col-lg-3" key={skill}>
              <div className="card skill-card card-hover h-100 border-0 text-center">
                <div className="card-body d-flex flex-column justify-content-center">
                  <span className="skill-icon mb-2">★</span>
                  <h5 className="card-title mb-0">{skill}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
