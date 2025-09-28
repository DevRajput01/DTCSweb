import React from "react";
import "../Styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      {/* Logo */}
      <div className="logo">
        <img src="your-logo.png" alt="Logo" />
      </div>

      {/* Header Section (60%) */}
      <header className="header">
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="btn">Get Started</button>
      </header>
    </div>
  );
};

export default Header;
