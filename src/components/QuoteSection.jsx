import React, { useState } from "react";
import "./QuoteSection.css";

const generateTimes = () => {
  const times = [];
  const startHour = 9;  // 9 AM
  const endHour = 20;   // 8 PM

  for (let hour = startHour; hour < endHour; hour++) {
    const nextHour = hour + 1;

    const formatHour = (h) => {
      const period = h >= 12 ? "PM" : "AM";
      const hour12 = h % 12 === 0 ? 12 : h % 12;
      return { hour12, period };
    };

    const current = formatHour(hour);
    const next = formatHour(nextHour);

    times.push(
      `${current.hour12}:00 ${current.period} - ${current.hour12}:30 ${current.period}`
    );

    times.push(
      `${current.hour12}:30 ${current.period} - ${next.hour12}:00 ${next.period}`
    );
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
      const res = await fetch("/api/send-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Submission failed");

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
          <p>A licensed independent agent will contact you shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="quote-section">
      <div className="quote-header">
        <h2>Check Eligibility & Schedule a Call</h2>
        <p>
          Takes 2 minutes. A licensed independent agent will call you to review
          your options and provide their license number for verification.
        </p>
      </div>

      <div className="quote-content">

        {/* LEFT SIDE */}
        <div className="quote-left">
          <h3>What Happens Next?</h3>
          <p>
            After you submit this form, a licensed independent life insurance
            agent will contact you to review your coverage options.
          </p>

          <ul>
            <li>✔ No obligation to purchase</li>
            <li>✔ Carrier disclosed during the call</li>
            <li>✔ State license number provided upon request</li>
            <li>✔ No spam. No pressure.</li>
          </ul>

          <p className="form-disclaimer">
            By submitting this form, you agree to be contacted by a licensed
            independent life insurance agent. The agent will disclose the
            insurance carrier they represent and provide their state license
            number upon request.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="quote-right">
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
        </div>

      </div>
    </section>
  );
};

export default QuoteSection;
