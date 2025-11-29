import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function NotFound() {
  return (
    <div className="page-content not-found-page">
      <h1>404 – Page Not Found</h1>
      <p>
        The page you’re looking for doesn’t exist or may have been moved.
      </p>

      <Link to="/" className="btn-primary">
        Return to Home
      </Link>
    </div>
  );
}
