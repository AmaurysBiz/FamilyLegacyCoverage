import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <Link to="/">Family Legacy Coverage</Link>
        </div>

        {/* MENU */}
        <div className={`menu ${isMobileMenuOpen ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          {/* RESOURCES DROPDOWN */}
          <div
            className="nav-item"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="nav-link">Resources ▾</span>

            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/final-expense-info">What Is Final Expense Insurance?</Link></li>
                <li><Link to="/affordable-burial-ky">Affordable Burial Insurance in KY</Link></li>
                <li><Link to="/issue-comparison">Guaranteed vs Simplified Issue</Link></li>
                <li><Link to="/senior-mistakes">3 Mistakes Seniors Make</Link></li>
                <li><Link to="/health-conditions">Life Insurance w/ Conditions</Link></li>
                <li><Link to="/avoid-scams">Avoid Final Expense Scams</Link></li>
              </ul>
            )}
          </div>
        </div>

        {/* MOBILE ICON */}
        <div
          className="hamburger"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
