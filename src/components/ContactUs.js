import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Email is invalid";
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log(formData);
      // Handle successful form submission (e.g., send data to server)
      setFormData({ name: '', email: '', message: '' }); // Clear form fields
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>You can reach us at <a href="mailto:contact@hospital.com">contact@hospital.com</a> or call us at <a href="tel:+1234567890">+1234567890</a>.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
