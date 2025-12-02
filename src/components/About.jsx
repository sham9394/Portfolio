import React from "react";
import aboutImg from "../assets/vaishaliImage.jpeg";

const About = () => {
  return (
    <section id="about" className="reveal-section py-5 bg-dark-2">
      <div className="container">
        <h2 className="section-title text-center mb-4">About Me</h2>
        <p className="section-subtitle text-center mb-5 text-muted-hero">
          A short story about who I am, what I do, and what I love building.
        </p>

        <div className="row align-items-center gy-4">
          <div className="col-md-5 d-flex justify-content-center">
            <div className="about-image-wrapper">
              {/* Profile image */}
              <img
                src={aboutImg}
                alt="Vaishali Vaidya"
                className="about-photo"
              />
            </div>
          </div>

          <div className="col-md-7">
            <p className="mb-3 text-muted-hero">
              Hi! I’m <strong>Vaishali Vaidya</strong>, a passionate
              <strong> Frontend / React Developer</strong> who loves building
              clean, modern, and user-friendly web applications. I enjoy turning
              ideas into interactive digital products that look great and work
              smoothly across all devices.
            </p>
            <p className="mb-3 text-muted-hero">
              I focus on crafting reusable UI components, creating responsive
              layouts, integrating APIs, and bringing great user experiences to
              life. I believe in clean code, accessibility, and designing with
              purpose — solving real problems through technology.
            </p>
            <p className="mb-3 text-muted-hero">
              This portfolio showcases my projects, skills, and journey as a
              developer. I’m always excited to learn new things, collaborate
              with others, and build meaningful products that have an impact.
              Feel free to explore and reach out if you'd like to connect or
              work together! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
