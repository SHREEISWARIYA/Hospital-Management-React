import React from 'react';
import './AboutUs.css';
import pic from '../assets/pic2.jpg';

function AboutUs() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Our hospital management system provides top-notch solutions for healthcare facilities.</p>

      <div className="mission">
        <h2>Our Mission</h2>
        <p>To revolutionize healthcare management by offering innovative and efficient solutions that improve patient care and operational efficiency.</p>
      </div>

      <div className="vision">
        <h2>Our Vision</h2>
        <p>To be the leading provider of integrated healthcare management systems that empower healthcare professionals and institutions worldwide.</p>
      </div>

      <div className="team">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src={pic} alt="not found"/>
          <p><strong>Dr. John Smith</strong><br />Chief Executive Officer</p>
        </div>
        <div className="team-member">
          <img src={pic} alt="not found"/>
          <p><strong>Jane Doe</strong><br />Chief Operating Officer</p>
        </div>
        <div className="team-member">
          <img src={pic} alt="not found"/>
          <p><strong>Richard Roe</strong><br />Chief Financial Officer</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
