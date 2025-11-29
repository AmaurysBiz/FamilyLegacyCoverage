import React from "react";
import "./TrustBadges.css";

const TrustBadges = () => {
  return (
    <section className="trust-badges-container">
      <div className="trust-badges-wrapper">

          {/* Badge 1 */}
        <div className="trust-badge">
          <img
            src="/assets/Handshake.png"
            alt="Licensed U.S. Providers"
            className="trust-icon"
          />
          <p className="trust-text">Backed by Licensed U.S. Insurance Providers</p>
        </div>


        {/* Badge 2 */}
        <div className="trust-badge">
          <img
            src="/assets/shield.png"
            alt="Licensed Specialists"
            className="trust-icon"
          />
          <p className="trust-text">Licensed Final Expense Specialists</p>
        </div>

        {/* Badge 3 */}
        <div className="trust-badge">
          <img
            src="/assets/lock.png"
            alt="Secure Information"
            className="trust-icon"
          />
          <p className="trust-text">Secure, Protected Information</p>
        </div>

        {/* Badge 4 */}
        <div className="trust-badge">
          <img
            src="/assets/heart.png"
            alt="Trusted by Families"
            className="trust-icon"
          />
          <p className="trust-text">Trusted by Thousands of Families</p>
        </div>

      </div>
    </section>
  );
};

export default TrustBadges;
