// src/pages/AboutAuthor/AboutAuthor.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import './AboutAuthor.css';

const AboutAuthor = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showWebsite, setShowWebsite] = useState(false);
  const [showLinkedIn, setShowLinkedIn] = useState(false);

  const handleWebsiteClick = () => {
    if (!showWebsite) {
      setShowWebsite(true);
      return;
    }
    // Obfuscated website URL
    const urlParts = ['elparko', 'com'];
    window.open(`https://${urlParts[0]}.${urlParts[1]}`, '_blank');
  };

  const handleLinkedInClick = () => {
    if (!showLinkedIn) {
      setShowLinkedIn(true);
      return;
    }
    // Obfuscated LinkedIn URL
    const linkedinParts = ['linkedin', 'com', 'in', 'parker-smith1'];
    window.open(`https://www.${linkedinParts[0]}.${linkedinParts[1]}/${linkedinParts[2]}/${linkedinParts[3]}/`, '_blank');
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
        
        {!showContactForm ? (
          <div className="contact-options">
            <button 
              className="contact-button email" 
              onClick={() => setShowContactForm(true)}
            >
              📧 Send Message
            </button>
            <button 
              className="contact-button website" 
              onClick={handleWebsiteClick}
            >
              {showWebsite ? '🌐 Visit elparko.com' : '🌐 Personal Website'}
            </button>
            <button 
              className="contact-button linkedin" 
              onClick={handleLinkedInClick}
            >
              {showLinkedIn ? '💼 View LinkedIn Profile' : '💼 LinkedIn'}
            </button>
          </div>
        ) : (
          <div className="contact-form-section">
            <button 
              className="back-to-options"
              onClick={() => setShowContactForm(false)}
            >
              ← Back to Contact Options
            </button>
            <ContactForm />
          </div>
        )}
      </section>
      
      <div className="navigation-links">
        <Link to="/" className="back-link">← Back to Home</Link>
        <Link to="/further-reading" className="next-link">Further Reading →</Link>
      </div>
    </div>
  );
};

export default AboutAuthor;