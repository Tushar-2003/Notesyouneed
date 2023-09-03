import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="about-page">
      <section className="about-grid">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
      <section className="about-grid">
        <h2>Our Mission</h2>
        <p>Our mission is to provide...</p>
      </section>
      <section className="about-grid">
        <h2>Our Team</h2>
        <p>We have a dedicated team...</p>
      </section>
      {/* <section className="about-grid">
        <h2>Contact Us</h2>
        <p>Feel free to reach out...</p>
      </section> */}
    </div>
  );
};

export default Features;
