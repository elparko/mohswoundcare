import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    verification: ''
  });
  const [verificationAnswer] = useState(Math.floor(Math.random() * 10) + 1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple verification check
    if (parseInt(formData.verification) !== verificationAnswer + 5) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Mohs Wound Care');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Obfuscated email construction
    const emailParts = ['mohswoundcare', 'pm', 'me'];
    const emailAddress = emailParts[0] + '@' + emailParts[1] + '.' + emailParts[2];
    
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        verification: ''
      });
      setSubmitStatus('');
    }, 3000);
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
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
          <label htmlFor="email">Your Email *</label>
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
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Optional subject line"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
            placeholder="Please note: I cannot provide individual medical advice. For specific medical concerns, contact your healthcare provider."
          />
        </div>

        <div className="form-group verification">
          <label htmlFor="verification">
            Verification: What is {verificationAnswer} + 5? *
          </label>
          <input
            type="number"
            id="verification"
            name="verification"
            value={formData.verification}
            onChange={handleChange}
            required
            min="1"
            max="20"
          />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="submit-button"
        >
          {isSubmitting ? 'Opening Email...' : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <div className="status-message success">
            Email client opened! Your message has been prepared.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="status-message error">
            Verification failed. Please check your math and try again.
          </div>
        )}
      </form>

      <div className="privacy-notice">
        <h4>Privacy Notice</h4>
        <p>
          Your contact information will only be used to respond to your inquiry. 
          We do not share, sell, or store your personal information beyond what's 
          necessary for communication purposes.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;