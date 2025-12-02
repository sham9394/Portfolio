import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-3 bg-dark-2 border-top border-dark text-center text-muted-hero small">
      © {year} <span className="text-gradient">Vaishali Vaidya</span>. All
      rights reserved.
    </footer>
  );
};

export default Footer;
