import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const NAV_LINKS = [
  { id: "home",      label: "Home" },
  { id: "about",     label: "About" },
  { id: "education", label: "Education" },
  { id: "skills",    label: "Skills" },
  { id: "projects",  label: "Projects" },
];
const NAVBAR_H = 64;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].id);
        if (el && el.getBoundingClientRect().top <= NAVBAR_H + 10) {
          setActiveSection(NAV_LINKS[i].id);
          return;
        }
      }
      setActiveSection("home");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">Dev<span>.</span>Portfolio</div>

        <ul className="navbar__links">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={activeSection === id ? "active" : ""}>{label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="navbar__cta desktop-only">Hire Me</a>

        <button
          className={`navbar__hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </nav>

      {/* Backdrop */}
      <div className={`mobile-backdrop ${isOpen ? "active" : ""}`} onClick={close} aria-hidden="true" />

      {/* Drawer */}
      <aside className={`mobile-drawer ${isOpen ? "active" : ""}`} aria-label="Mobile navigation">
        <div className="mobile-drawer__top">
          <span className="mobile-drawer__logo">Dev<span>.</span>Portfolio</span>
        </div>

        <nav className="mobile-drawer__nav">
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`mobile-drawer__link ${activeSection === id ? "active" : ""}`}
              onClick={close}
            >
              {label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="mobile-drawer__cta" onClick={close}>
          Hire Me
        </a>
      </aside>
    </>
  );
}

export default Navbar;
