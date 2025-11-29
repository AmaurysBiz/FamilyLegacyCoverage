import React, { useEffect } from "react";

// HERO
import ServiceSlideshow from "../components/ServiceSlideshow";

// TRUST ROW
import TrustBadges from "../components/TrustBadges";

// QUOTE FORM
import QuoteSection from "../components/QuoteSection";

// HOW IT WORKS
import HowItWorks from "../components/HowItWorks";

// TESTIMONIALS
import Testimonials from "../components/Testimonials";

const Home = () => {
  /* ============================================================
     SEO META TAGS — React 19 Safe (no Helmet)
  ============================================================ */
  useEffect(() => {
    // ---------- TITLE ----------
    document.title =
      "Family Legacy Coverage | Kentucky Final Expense & Burial Insurance Quotes";

    // ---------- DESCRIPTION ----------
    const description =
      "Get affordable Final Expense & Burial Insurance in Kentucky. Speak with a licensed agent, compare rates from top carriers, and secure coverage for your family.";

    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;

    // ---------- CANONICAL ----------
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.familylegacycoverage.com/";

    // ---------- JSON-LD STRUCTURED DATA ----------
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.innerHTML = `
    {
      "@context": "https://schema.org",
      "@type": "InsuranceAgency",
      "name": "Family Legacy Coverage",
      "url": "https://www.familylegacycoverage.com/",
      "image": "https://www.familylegacycoverage.com/logo.png",
      "description": "${description}",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "",
        "addressLocality": "Louisville",
        "addressRegion": "KY",
        "postalCode": "",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "State",
        "name": "Kentucky"
      },
      "telephone": "",
      "servesCuisine": "",
      "priceRange": "$",
      "sameAs": [
        "https://facebook.com/",
        "https://instagram.com/"
      ]
    }
    `;
    document.head.appendChild(ld);

    return () => {
      document.head.removeChild(ld);
    };
  }, []);

  /* ============================================================
     PAGE CONTENT (unchanged – your UI is intact)
  ============================================================ */
  return (
    <>
      {/* HERO */}
      <div style={{ width: "100%", margin: "0", padding: "0" }}>
        <ServiceSlideshow />
      </div>

      {/* TRUST BADGES */}
      <TrustBadges />

      {/* QUOTE FORM */}
      <div style={{ paddingTop: "2rem" }}>
        <QuoteSection />
      </div>

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* TESTIMONIALS */}
      <Testimonials />
    </>
  );
};

export default Home;


//  Add InsuranceAgency global schema for your entire site
//  Add sitemap + robots.txt
//  Improve your Footer.jsx
//  Optimize Home.jsx for SEO and performance