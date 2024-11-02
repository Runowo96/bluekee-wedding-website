import React, { useState } from 'react';
import './ContactUs.scss';

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    weddingDate: '',
    guestNumber: '',
    additionalInfo: '',
  });

  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate form fields
    for (const field in formData) {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    }
    
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Send the data to the server or email
      // This could be done via an API or email service
      alert('Form submitted successfully!'); // Placeholder for actual submission
      console.log(formData);
      
      // Clear the form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        weddingDate: '',
        guestNumber: '',
        additionalInfo: '',
      });
    }
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div>
          <label>Wedding Date:</label>
          <input
            type="date"
            name="weddingDate"
            value={formData.weddingDate}
            onChange={handleChange}
          />
          {errors.weddingDate && <span className="error">{errors.weddingDate}</span>}
        </div>

        <div>
          <label>Estimated Guest Number:</label>
          <input
            type="number"
            name="guestNumber"
            value={formData.guestNumber}
            onChange={handleChange}
            min="1"
          />
          {errors.guestNumber && <span className="error">{errors.guestNumber}</span>}
        </div>

        <div>
          <label>Additional Info:</label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
