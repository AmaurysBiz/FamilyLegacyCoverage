import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section className="how-section">
      <h2 className="how-title">How It Works</h2>

      <div className="how-steps">

        <div className="how-card">
          <div className="how-number">1</div>
          <h3>Share Basic Info</h3>
          <p>Just your name, city, and phone number. No spam — ever.</p>
        </div>

        <div className="how-card">
          <div className="how-number">2</div>
          <h3>Talk to an Agent</h3>
          <p>We’ll call to walk you through your best options in minutes.</p>
        </div>

        <div className="how-card">
          <div className="how-number">3</div>
          <h3>Get Covered</h3>
          <p>Choose the plan that fits, and activate your coverage today.</p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
