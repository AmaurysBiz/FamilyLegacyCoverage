import React from "react";
import "./Testimonials.css";

const testimonials = [
  "“They helped me find peace of mind for my family’s future.” — Maria T.",
  "“Simple, respectful, and affordable. Highly recommend!” — James R.",
  "“Great service and easy to understand.” — Linda S.",
  "“No pressure, just clear answers.” — Michael B.",
  "“Professional and kind agents.” — Sarah D.",
  "“Quick process and fair pricing.” — Robert H.",
  "“Very helpful during a tough time.” — Angela M.",
  "“They truly care about families.” — Thomas W.",
  "“Everything was explained clearly.” — Jennifer C.",
  "“My parents signed up too.” — David L.",
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Clients Say</h2>

      <div className="testimonials-grid">
        {testimonials.map((text, index) => (
          <div className="testimonial-card" key={index}>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
