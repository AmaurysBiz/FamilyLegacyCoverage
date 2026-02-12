import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isDesktop = () => window.innerWidth > 768;

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    setDropdownOpen(false);
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={closeAllMenus}>
            Family Legacy Coverage
          </Link>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Menu */}
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeAllMenus}>Home</Link>
          <Link to="/about" onClick={closeAllMenus}>About</Link>

          {/* Resources */}
          <div
            className="nav-item"
            onMouseEnter={() => isDesktop() && setDropdownOpen(true)}
            onMouseLeave={() => isDesktop() && setDropdownOpen(false)}
          >
            <button
              className="nav-link"
              aria-expanded={dropdownOpen}
              onClick={() => {
                if (!isDesktop()) {
                  setDropdownOpen(prev => !prev);
                }
              }}
            >
              Resources <span className="caret">▾</span>
            </button>

            <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              <li><Link to="/final-expense-info" onClick={closeAllMenus}>What Is Final Expense Insurance?</Link></li>
              <li><Link to="/affordable-burial-ky" onClick={closeAllMenus}>Affordable Burial Insurance in KY</Link></li>
              <li><Link to="/issue-comparison" onClick={closeAllMenus}>Guaranteed vs Simplified Issue</Link></li>
              <li><Link to="/senior-mistakes" onClick={closeAllMenus}>3 Mistakes Seniors Make</Link></li>
              <li><Link to="/health-conditions" onClick={closeAllMenus}>Life Insurance w/ Conditions</Link></li>
              <li><Link to="/avoid-scams" onClick={closeAllMenus}>Avoid Final Expense Scams</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
