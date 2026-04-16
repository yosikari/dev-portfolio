import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        Dev<span>.</span>Portfolio
      </div>

      <button
        className="navbar__hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
      </button>

      <ul className={`navbar__links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#education" onClick={toggleMenu}>Education</a></li>
        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li className="mobile-only">
          <a href="#contact" onClick={toggleMenu} className="navbar__cta mobile-cta">Hire Me</a>
        </li>
      </ul>

      <a href="#contact" className="navbar__cta desktop-only">Hire Me</a>
    </nav>
  );
}

export default Navbar;
