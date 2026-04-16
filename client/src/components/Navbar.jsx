import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Menu, X, Building2, Phone } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/packages", label: "Packages" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <div className="navbar__logo-box">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="sp-logo">
              {/* Roof */}
              <path d="M4 18L20 4L36 18H32V34H8V18H4Z" fill="#505050" />
              <path d="M4 18L20 4L36 18V13L20 0L4 13V18Z" fill="#1a6fc4" />
              <path d="M8 12L15 6L11 9.5V12H8Z" fill="#f59e0b" />
              {/* Letters */}
              <path d="M12 22H20V25H12V28H17V31H12" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M23 22H28V26.5H23V31M28 26.5V31" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="navbar__logo-divider" />
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">SHREE PAWAN PUTRA PROJECTS</span>
            <span className="navbar__logo-caption">Civil, Electrical & Mechanical Constructions</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `navbar__link${isActive ? " navbar__link--active" : ""}`
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="navbar__actions">
          <a href="tel:+919000100889" className="btn btn-primary navbar__cta">
            <Phone size={16} /> Call Now
          </a>
          <button
            className="navbar__theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            id="theme-toggle"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="navbar__hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            id="menu-toggle"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${open ? " navbar__mobile--open" : ""}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `navbar__mobile-link${isActive ? " navbar__mobile-link--active" : ""}`
            }
            onClick={closeMenu}
            end={link.to === "/"}
          >
            {link.label}
          </NavLink>
        ))}
        <div className="navbar__mobile-actions">
          <a href="tel:+919000100889" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
            <Phone size={16} /> Call Now
          </a>
          <button className="navbar__theme-btn navbar__theme-btn--mobile" onClick={toggleTheme}>
            {theme === "dark" ? <><Sun size={18} /> Light Mode</> : <><Moon size={18} /> Dark Mode</>}
          </button>
        </div>
      </div>
    </header>
  );
}
