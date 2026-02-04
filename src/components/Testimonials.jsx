import React from "react";

function Testimonials({ testimonials }) {
  return (
    <div>
      <h2>Testimonials</h2>
      <div>
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial">
            <p>"{item.feedback}"</p>
            <strong>- {item.name}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
