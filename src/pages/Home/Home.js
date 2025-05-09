// src/pages/Home/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to Mohs Wound Care</h1>
        <p className="subtitle">Expert guidance for post-Mohs surgery wound care</p>
      </section>

      <section className="intro-section">
        <h2>About Mohs Surgery Wound Care</h2>
        <p>
          Mohs micrographic surgery is a specialized, highly effective technique for removing skin cancer. 
          This website provides comprehensive guidance for patients who have undergone Mohs surgery to help ensure
          optimal healing and recovery.
        </p>
        <p>
          Proper wound care following Mohs surgery is essential for preventing infection, minimizing scarring, 
          and promoting efficient healing. This resource offers step-by-step instructions and important information
          based on clinical expertise.
        </p>
      </section>

      <section className="care-options">
        <h2>Types of Wound Closure</h2>
        <p>
          After Mohs surgery, your wound may be closed in one of several ways. Select the option that matches your situation:
        </p>
        
        <div className="care-cards">
          <div className="care-card">
            <h3>Second Intention</h3>
            <p>Your wound was left open to heal naturally without stitches.</p>
            <Link to="/second-intention" className="btn-card">View Care Instructions</Link>
          </div>
          
          <div className="care-card">
            <h3>Steri-Strips</h3>
            <p>Your wound was closed with thin adhesive strips.</p>
            <Link to="/steri-strips" className="btn-card">View Care Instructions</Link>
          </div>
          
          <div className="care-card">
            <h3>Conventional Wound Care</h3>
            <p>Your wound requires standard dressing changes and care.</p>
            <Link to="/non-steri-strip" className="btn-card">View Care Instructions</Link>
          </div>
          
          <div className="care-card">
            <h3>Staple Closure</h3>
            <p>Your wound was closed with medical staples.</p>
            <Link to="/staple-care" className="btn-card">View Care Instructions</Link>
          </div>
        </div>
      </section>

      <section className="important-info">
        <h2>Important Information</h2>
        <div className="info-box warning">
          <h3>When to Seek Medical Attention</h3>
          <p>
            Contact your healthcare provider immediately if you experience:
          </p>
          <ul>
            <li>Increasing pain, redness, swelling, or warmth around the wound</li>
            <li>Pus or foul-smelling drainage from the wound</li>
            <li>Bleeding that doesn't stop with gentle pressure</li>
            <li>Fever over 100.4°F (38°C)</li>
          </ul>
        </div>
        
        <div className="info-box">
          <h3>General Care Guidelines</h3>
          <p>
            For all wound types, remember to:
          </p>
          <ul>
            <li>Keep the wound clean and protected</li>
            <li>Wash your hands thoroughly before touching the wound area</li>
            <li>Follow your specific care instructions carefully</li>
            <li>Attend all follow-up appointments</li>
          </ul>
          <Link to="/general-info" className="text-link">Learn more about general wound care</Link>
        </div>
      </section>

      <section className="resources">
        <h2>Resources</h2>
        <div className="resource-links">
          <Link to="/infection-info" className="resource-link">
            <span className="icon">🔍</span>
            <span className="text">Signs of Infection</span>
          </Link>
          <Link to="/general-info" className="resource-link">
            <span className="icon">📋</span>
            <span className="text">General Information</span>
          </Link>
          <Link to="/further-reading" className="resource-link">
            <span className="icon">📚</span>
            <span className="text">Further Reading</span>
          </Link>
          <Link to="/quiz" className="resource-link">
            <span className="icon">✓</span>
            <span className="text">Test Your Knowledge</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;