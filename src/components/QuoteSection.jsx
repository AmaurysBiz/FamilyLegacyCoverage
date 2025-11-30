import React, { useState } from "react";
import "./QuoteSection.css";

const QuoteSection = () => {
  const initialState = {
    name: "",
    phone: "",
    city: "",
    state: "",
    coverageFor: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxfXa4jjXb3mB2r_GcRdJSLavCVATyvxL2Q7RIl9t0kSIHsn70tuNqQ0NvQiP3nqVCbKg/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          city: formData.city,
          state: formData.state,
          coverage: formData.coverageFor,
        }),
      });

       // 🔥 FIRE META LEAD EVENT
    if (window.fbq) {
      fbq('track', 'Lead', {
        content_name: `Lead from ${formData.state}`,
        status: "Form Submit"
      });
    }

    // 🔥 FIRE GA4 LEAD EVENT
    if (window.gtag) {
      gtag('event', 'generate_lead', {
        event_category: 'Lead',
        event_label: 'Quote Form',
        value: 1
      });
    }

      alert(
        "Your request was submitted! An agent will contact you shortly."
      );

      setFormData(initialState);
    } catch (err) {
      console.error("Form submission error:", err);
      alert("There was an issue submitting your request.");
    }
  };

  return (
    <section className="quote-section">
      <h2>Get Your Free Final Expense Quote</h2>

      {/* UPDATED CAPTION */}
      <p>
        Your request will be sent directly to a licensed agent’s secure line.
        You may receive a text message first so you know exactly who is reaching
        out before they call.
      </p>

      <form className="quote-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        >
          <option value="">Select State</option>
          <option value="Kentucky">Kentucky</option>
          <option value="Indiana">Indiana</option>
          <option value="Ohio">Ohio</option>
        </select>

        <select
          name="coverageFor"
          value={formData.coverageFor}
          onChange={handleChange}
          required
        >
          <option value="">Coverage For</option>
          <option value="Yourself">Yourself</option>
          <option value="Parent">Parent</option>
          <option value="Spouse">Spouse</option>
        </select>

        <button type="submit" className="quote-button">
          Request Quote
        </button>
      </form>
    </section>
  );
};

export default QuoteSection;
