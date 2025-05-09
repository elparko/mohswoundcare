// src/pages/SteriStrips/SteriStrips.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SteriStrips.css';

const SteriStrips = () => {
  return (
    <div className="page-container steri-strips-page">
      <h1>Steri-Strips Wound Care</h1>
      
      <div className="intro-box">
        <p>
          Your wound has been closed with Steri-Strips (adhesive skin closures). These thin adhesive strips 
          hold the wound edges together during healing. When cared for properly, they provide excellent support 
          for wound healing with minimal scarring.
        </p>
      </div>

      <section className="care-section">
        <h2>Steri-Strips Care Instructions</h2>
        
        <div className="care-step">
          <h3>Keep Steri-Strips in place</h3>
          <p>
            Allow the Steri-Strips to remain in place until they fall off on their own or until your 
            healthcare provider removes them (typically 7-14 days after application). Do not remove 
            them yourself unless specifically instructed to do so by your doctor.
          </p>
        </div>
        
        <div className="care-step">
          <h3>Keep the area clean and dry</h3>
          <p>
            For the first 24-48 hours: Keep the wound and Steri-Strips completely dry. 
            Cover with plastic when showering if needed.
          </p>
          <p>
            After 48 hours: You may shower and allow water to run over the Steri-Strips, but do not 
            soak them (avoid baths, swimming pools, hot tubs, etc.). Pat the area dry gently after 
            showering – do not rub.
          </p>
        </div>
        
        <div className="care-step">
          <h3>Protect the Steri-Strips</h3>
          <p>
            Avoid applying lotions, creams, ointments, or other products directly on or near the Steri-Strips 
            as these can cause them to loosen prematurely.
          </p>
          <p>
            If instructed to do so, you may cover the Steri-Strips with a bandage for protection. Change 
            the covering bandage daily or when it becomes wet or soiled.
          </p>
        </div>
        
        <div className="care-step">
          <h3>If edges begin to curl</h3>
          <p>
            It's normal for the edges of the Steri-Strips to begin curling up after several days. Do not 
            pull them off. You may trim the loose edges with clean scissors if they become bothersome, 
            but leave the well-adhered portions in place.
          </p>
        </div>
        
        <div className="care-step">
          <h3>Monitor for complications</h3>
          <p>
            Check your wound daily for signs of infection or other complications. Contact your healthcare 
            provider if you notice increasing redness, swelling, pain, warmth, drainage, or if the wound 
            edges separate.
          </p>
        </div>
      </section>
      
      <section className="timeline-section">
        <h2>What to Expect</h2>
        
        <div className="timeline">
          <div className="timeline-item">
            <h3>Days 1-2</h3>
            <p>
              The wound area may appear pink or red with some mild swelling. Mild discomfort is normal 
              and can usually be managed with acetaminophen (Tylenol) if needed. Keep the area completely dry.
            </p>
          </div>
          
          <div className="timeline-item">
            <h3>Days 3-7</h3>
            <p>
              Redness and swelling should begin to decrease. The edges of the Steri-Strips may begin to curl, 
              which is normal. You may shower and allow water to run over the area, but continue to pat dry gently.
            </p>
          </div>
          
          <div className="timeline-item">
            <h3>Days 7-14</h3>
            <p>
              Steri-Strips will usually begin to fall off on their own. Do not pull them off prematurely. 
              The wound should appear closed with a thin scab line forming along the incision.
            </p>
          </div>
          
          <div className="timeline-item">
            <h3>After 14 days</h3>
            <p>
              If Steri-Strips haven't fallen off after 14 days, consult your healthcare provider. They may 
              instruct you to gently remove them or may remove them at your follow-up appointment.
            </p>
          </div>
        </div>
      </section>
      
      <section className="special-considerations">
        <h2>Special Considerations</h2>
        
        <div className="consideration-item">
          <h3>Activity Restrictions</h3>
          <p>
            Avoid strenuous activities, heavy lifting (over 10 pounds), and exercises that might strain the 
            wound area for at least 1-2 weeks or as advised by your doctor. This helps prevent the wound 
            from reopening.
          </p>
        </div>
        
        <div className="consideration-item">
          <h3>Wound Location Considerations</h3>
          <ul>
            <li>
              <strong>Face/Neck:</strong> Keep head elevated when resting to reduce swelling. Avoid excessive 
              facial movements that might stress the wound.
            </li>
            <li>
              <strong>Trunk/Torso:</strong> Avoid twisting movements or stretching that could pull on the wound.
            </li>
            <li>
              <strong>Limbs:</strong> Limit repetitive movements of the affected area. Consider using a dressing 
              to protect Steri-Strips in high-movement areas.
            </li>
          </ul>
        </div>
        
        <div className="consideration-item">
          <h3>After Steri-Strips Are Removed</h3>
          <p>
            Once all Steri-Strips have fallen off or been removed:
          </p>
          <ul>
            <li>
              Keep the scar out of the sun or use SPF 30+ sunscreen for at least 6-12 months to prevent 
              darkening of the scar.
            </li>
            <li>
              You may begin gently massaging the healed scar with lotion or vitamin E oil 
              (after complete healing, usually 2-3 weeks) to help with scar maturation. Massage in a circular 
              motion for 3-5 minutes several times daily.
            </li>
            <li>
              Consider using silicone scar sheets or gel as directed by your doctor to help minimize scarring.
            </li>
          </ul>
        </div>
      </section>
      
      <section className="warning-signs">
        <h2>Warning Signs</h2>
        <div className="warning-box">
          <p>Contact your healthcare provider if you experience any of these symptoms:</p>
          <ul>
            <li>Increasing redness, swelling, or warmth around the wound</li>
            <li>Increasing pain or tenderness at the wound site</li>
            <li>Yellow or green drainage from the wound</li>
            <li>Opening of the wound edges</li>
            <li>Fever over 100.4°F (38°C)</li>
            <li>Red streaks extending from the wound</li>
          </ul>
          <p>
            <Link to="/infection-info" className="text-link">Learn more about signs of infection</Link>
          </p>
        </div>
      </section>
      
      <div className="navigation-links">
        <Link to="/" className="back-link">← Back to Home</Link>
        <Link to="/general-info" className="next-link">General Care Guidelines →</Link>
      </div>
    </div>
  );
};

export default SteriStrips;