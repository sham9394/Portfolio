import React from "react";

const PortfolioNavbar = ({ activeSection, onNavClick }) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm nav-glass">
      <div className="container">
        <a
          className="navbar-brand fw-bold text-gradient"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavClick("home");
          }}
        >
          Vaishali Vaidya
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={
                    "nav-link px-3 nav-link-custom " +
                    (activeSection === item.id ? "active-link" : "")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default PortfolioNavbar;
