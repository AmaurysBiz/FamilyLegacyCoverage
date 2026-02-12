import React from "react";

import ServiceSlideshow from "../components/ServiceSlideshow";
import TrustBadges from "../components/TrustBadges";
import HowItWorks from "../components/HowItWorks";
import QuoteSection from "../components/QuoteSection";
import Testimonials from "../components/Testimonials";

import "./Home.css";

export default function Home() {
  return (
    <>
      {/* === ACTION NOTICE (HIGH-CONVERSION CTA) === */}
      <section className="home-action-banner">
        <p className="home-action-text">
          Looking for affordable final expense coverage?
          <br />
          <a href="#quote-form" className="home-action-link">
            Fill out the short form below
          </a>{" "}
          to speak with a licensed agent and receive a{" "}
          <strong>free, personalized quote</strong>.
        </p>
      </section>

      {/* === HERO / SLIDESHOW === */}
      <ServiceSlideshow />

      {/* === TRUST BADGES === */}
      <TrustBadges />

      {/* === HOW IT WORKS === */}
      <HowItWorks />

      {/* === QUOTE FORM (ANCHOR TARGET) === */}
      <div id="quote-form">
        <QuoteSection />
      </div>

      {/* === SOFT SECTION DIVIDER === */}
      <div className="section-divider" />

      {/* === TESTIMONIALS (BOTTOM, ABOVE FOOTER) === */}
      <Testimonials />
    </>
  );
}
