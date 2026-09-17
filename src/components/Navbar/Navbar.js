import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          {/* Logo */}
          <a href="#home" className="navbar-logo" onClick={closeMenu}>
            Sakshi<span>.</span>
          </a>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>

            <a href="/resume.pdf" className="resume-btn">
              Resume
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>

            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>

            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

            <a href="/resume.pdf" onClick={closeMenu}>
              Resume
            </a>
          </div>
        )}
      </nav>

      {/* Navbar CSS */}
      <style>{`

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 75px;
          z-index: 1000;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(148, 163, 184, 0.15);
        }

        .navbar-container {
          width: 90%;
          max-width: 1200px;
          height: 100%;
          margin: auto;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          color: #ffffff;
          font-size: 25px;
          font-weight: 800;
          text-decoration: none;
        }

        .navbar-logo span {
          color: #6366f1;
        }

        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .desktop-menu a {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: 0.3s;
        }

        .desktop-menu a:hover {
          color: #6366f1;
        }

        .desktop-menu .resume-btn {
          background: #6366f1;
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
        }

        .desktop-menu .resume-btn:hover {
          background: #4f46e5;
          color: white;
        }

        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          color: white;
          font-size: 28px;
          cursor: pointer;
        }

        .mobile-menu {
          display: none;
        }

        @media (max-width: 900px) {

          .desktop-menu {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            gap: 20px;

            padding: 25px 5%;

            background: #0f172a;
            border-bottom: 1px solid rgba(148, 163, 184, 0.15);
          }

          .mobile-menu a {
            color: #cbd5e1;
            text-decoration: none;
            font-size: 15px;
            font-weight: 500;
          }

          .mobile-menu a:hover {
            color: #6366f1;
          }
        }

      `}</style>
    </>
  );
}

export default Navbar;