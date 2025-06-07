// src/pages/AboutAuthor/AboutAuthor.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AboutAuthor.css';

const AboutAuthor = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:YOUR_EMAIL_HERE'; // Replace with actual email
  };

  const handleWebsiteClick = () => {
    window.open('YOUR_WEBSITE_URL', '_blank'); // Replace with actual website URL
  };

  const handleLinkedInClick = () => {
    window.open('YOUR_LINKEDIN_URL', '_blank'); // Replace with actual LinkedIn URL
  };

  return (
    <div className="page-container about-author-page">
      <h1>About the Author</h1>
      
      <div className="intro-box">
        <p>
          Learn about the creator of this comprehensive Mohs wound care resource.
        </p>
      </div>

      <section className="author-profile">
        <div className="profile-content">
          <p>
            I am a soon-to-be medical student with hands-on experience in Mohs surgery, having spent 
            a full year working as a Mohs medical assistant. This role provided me with invaluable 
            insight into both the technical aspects of the procedure and the patient care journey 
            that follows. Working directly with patients throughout their surgical experience - from 
            pre-operative preparation through post-operative care and follow-up - I witnessed firsthand 
            the questions, concerns, and challenges that patients face during recovery. This resource 
            was created to bridge that knowledge gap and provide accessible, evidence-based wound care 
            information that patients can reference throughout their healing journey.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <h2>Connect With Me</h2>
        <div className="contact-links">
          <button className="contact-button email" onClick={handleEmailClick}>
            Email
          </button>
          <button className="contact-button website" onClick={handleWebsiteClick}>
            Personal Website
          </button>
          <button className="contact-button linkedin" onClick={handleLinkedInClick}>
            LinkedIn
          </button>
        </div>
        <p className="contact-note">
          Please note: I cannot provide individual medical advice. For specific medical concerns, 
          please contact your healthcare provider.
        </p>
      </section>
      
      <div className="navigation-links">
        <Link to="/" className="back-link">← Back to Home</Link>
        <Link to="/further-reading" className="next-link">Further Reading →</Link>
      </div>
    </div>
  );
};

export default AboutAuthor;