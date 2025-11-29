import React, { useEffect } from "react";
import "../App.css";



export default function PrivacyPolicy() {

  // SEO META TAGS
  useEffect(() => {
    document.title = "Privacy Policy | Family Legacy Coverage";

    // Meta description
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Read the Family Legacy Coverage Privacy Policy explaining how we collect, use, and protect your information when requesting final expense insurance quotes.";

    // Canonical tag
    let canonical = document.querySelector(`link[rel="canonical"]`);
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.familylegacycoverage.com/privacy-policy";
  }, []);

  return (
    <div className="page-content">
      <h1>Privacy Policy</h1>

      <p className="updated-date">Last updated: November 2025</p>

      <p>
        Family Legacy Coverage (“we,” “us,” or “our”) operates the website
        FamilyLegacyCoverage.com and provides information related to Final
        Expense and Burial Insurance. This Privacy Policy explains how we
        collect, use, and protect your information.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>Personal Information</h3>
      <ul>
        <li>Name</li>
        <li>Phone number</li>
        <li>Email address</li>
        <li>Age or age range</li>
        <li>Insurance needs</li>
      </ul>

      <h3>Automatically Collected Data</h3>
      <ul>
        <li>IP address</li>
        <li>Browser/device information</li>
        <li>Pages visited</li>
        <li>Cookies and tracking data</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Provide insurance quotes</li>
        <li>Schedule calls</li>
        <li>Improve site experience</li>
        <li>Optimize advertising</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>3. Sharing Your Information</h2>
      <p>We may share your information with:</p>
      <ul>
        <li>Licensed insurance agents</li>
        <li>CRM or analytics services</li>
        <li>Ad platforms (Meta, Google)</li>
      </ul>

      <h2>4. Security</h2>
      <p>
        We take reasonable measures to protect your data, though no online
        transmission is completely secure.
      </p>

      <h2>5. Your Choices</h2>
      <ul>
        <li>Opt out anytime</li>
        <li>Request deletion or correction</li>
      </ul>

      <h2>6. Cookies</h2>
      <p>
        We may use cookies and tracking pixels to improve performance. You may
        disable cookies via browser settings.
      </p>

      <h2>7. Third-Party Links</h2>
      <p>
        Our website may link to third-party sites. We are not responsible for
        their privacy practices.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>Updates will be posted on this page with a revised date.</p>

      <h2>9. Contact Us</h2>
      <p>
        Email: support@familylegacycoverage.com  
        <br />
        Phone: 502-257-6243
      </p>
    </div>
  );
}
