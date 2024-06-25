import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Hospital Management System</h1>
      <p>Manage your hospital data efficiently and effectively.</p>
      <div className="features">
        <h2>Key Features</h2>
        <ul>
          <li>Patient Records Management</li>
          <li>Appointment Scheduling</li>
          <li>Billing and Invoicing</li>
          <li>Staff Management</li>
          <li>Medical Inventory</li>
        </ul>
      </div>
      <div className="cta">
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Home;
