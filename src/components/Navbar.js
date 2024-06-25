// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/sign-up">Sign Up</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
