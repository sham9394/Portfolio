import React from "react";

const experience = [
  {
    role: "Frontend Developer",
    company: "Delta 360 Services",
    duration: "Jan 2023 - Present",
    description:
      "Building responsive React applications, reusable UI components, and integrating REST APIs. Collaborating closely with designers and backend developers.",
  },
  {
    role: "Web Developer Intern",
    company: "Delta 360 Services",
    duration: "March 2023 - Aug 2023",
    description:
      "Worked on landing pages, portfolio sites, and small web apps using HTML, CSS, JavaScript, and Bootstrap. Focused on performance and mobile-first design.",
  },
  {
    role: "Freelance Web Designer",
    company: "Self Employed",
    duration: "2022 - 2023",
    description:
      "Designed and developed simple websites for local businesses and personal brands, focusing on clean UI, color palettes, and branding.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="reveal-section py-5 bg-dark-2">
      <div className="container">
        <h2 className="section-title text-center mb-4">Experience</h2>
        <p className="section-subtitle text-center mb-5 text-muted-hero">
          A quick look at my professional and learning journey so far.
        </p>

        <div className="timeline">
          {experience.map((item, index) => (
            <div
              className="timeline-item card bg-dark border-0 mb-4 card-hover"
              key={index}
            >
              <div className="card-body">
                <h5 className="card-title mb-1">{item.role}</h5>
                <h6 className="card-subtitle mb-2 text-info">{item.company}</h6>
                <p className="small text-muted mb-2">{item.duration}</p>
                <p className="card-text text-muted-hero">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
