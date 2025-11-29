import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h4 className="footer-title">Family Legacy Coverage</h4>
          <p className="footer-text">
            Helping families secure affordable Final Expense &
            Burial Insurance for peace of mind.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Resources</h4>
          <ul className="footer-links">
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/disclaimer">Disclaimer</a></li>
          </ul>

        </div>

        <div className="footer-section">
          <h4 className="footer-title">Contact</h4>
          <p className="footer-text">
            Email: support@familylegacycoverage.com <br />
            Phone number: 502-257-6243
            
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Family Legacy Coverage. All rights reserved.</p>
      </div>
    </footer>
  );
}
