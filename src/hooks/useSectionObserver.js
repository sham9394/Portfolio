import { useEffect } from "react";

const useSectionObserver = (setActiveSection) => {
  useEffect(() => {
    const sections = document.querySelectorAll("section.section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          // Reveal animation
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }

          // Active nav link logic – only when section is mostly visible
          if (entry.intersectionRatio >= 0.5 && entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      },
      {
        threshold: [0.3, 0.5],
      }
    );

    sections.forEach((section) => {
      section.classList.add("reveal-section");
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActiveSection]);
};

export default useSectionObserver;
