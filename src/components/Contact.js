import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate with an API service like Formspree or EmailJS to handle submissions.
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  
  return (
    <section className="contact-section" data-aos="fade-up">
      <div className="container">
        <h2>Contact Me</h2>
        {submitted ? (
          <p className="success-message">Thank you for your message. I'll get back to you soon!</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;