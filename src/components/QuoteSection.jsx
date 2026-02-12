import React, { useState } from "react";
import "./QuoteSection.css";

const generateTimes = () => {
  const times = [];
  for (let hour = 9; hour < 17; hour++) {
    times.push(`${hour}:00–${hour}:30`);
    times.push(`${hour}:30–${hour + 1}:00`);
  }
  return times;
};


const QuoteSection = () => {
  const initialState = {
    fullName: "",
    phone: "",
    city: "",
    state: "",
    coverageFor: "",
    preferredCallTime: "",
    fastContact: true,
  };

  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    const res = await fetch("http://localhost:3001/send-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error("Submission failed");
    }

    setSubmitted(true);
    setFormData(initialState);
  } catch (err) {
    setError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  if (submitted) {
    return (
      <section className="quote-section">
        <div className="quote-confirmation">
          <h2>You’re All Set</h2>
          <p>A licensed agent will contact you shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="quote-section">
      <div className="quote-header">
        <h2>Check Eligibility & Schedule a Call</h2>
        <p>Takes 2 minutes. A licensed agent will call you.</p>
      </div>

      <form className="quote-form" onSubmit={handleSubmit}>
        <input name="fullName" placeholder="Full Name" required onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" required onChange={handleChange} />
        <input name="city" placeholder="City" required onChange={handleChange} />

        <select name="state" required onChange={handleChange}>
          <option value="">State</option>
          <option value="KY">Kentucky</option>
          <option value="TN">Tennessee</option>
          <option value="OH">Ohio</option>
          <option value="IN">Indiana</option>
        </select>

        <select name="coverageFor" required onChange={handleChange}>
          <option value="">Coverage For</option>
          <option value="Self">Self</option>
          <option value="Parent">Parent</option>
          <option value="Spouse">Spouse</option>
        </select>

       <select
        name="preferredCallTime"
        value={formData.preferredCallTime}
        onChange={handleChange}
        required
      >
        <option value="">Preferred Call Time</option>
        {generateTimes().map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>


        <label className="fast-contact">
          <input
            type="checkbox"
            name="fastContact"
            checked={formData.fastContact}
            onChange={handleChange}
          />
          Contact me within 5 minutes if available
        </label>

        {error && <p className="form-error">{error}</p>}

        <button disabled={loading}>
          {loading ? "Submitting…" : "Check Eligibility"}
        </button>
      </form>
    </section>
  );
};

export default QuoteSection;
