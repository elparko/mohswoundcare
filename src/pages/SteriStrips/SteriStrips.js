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

      <div className="disclaimer-box">
        <p>
          <strong>Important:</strong> Always follow the specific instructions given by your healthcare provider. 
          These guidelines are general recommendations and may need to be modified based on your individual situation.
        </p>
      </div>

      <section className="care-section">
        <h2>Steri-Strips Care Instructions</h2>
        
        <div className="care-step">
          <h3>Keep Steri-Strips in place for 7 days</h3>
          <p>
            Leave the Steri-Strips in place for 7 days. Do not remove them yourself during this time 
            unless specifically instructed to do so by your healthcare provider.
          </p>
        </div>
        
        <div className="care-step">
          <h3>Keep Steri-Strips dry</h3>
          <p>
            It's important to keep the Steri-Strips dry to maintain their adhesion and effectiveness:
          </p>
          <ul>
            <li>After showering, gently pat the Steri-Strips dry with a clean towel</li>
            <li>You may use a hair dryer on cool setting to blow-dry them completely</li>
            <li>Avoid soaking in baths, swimming pools, or hot tubs</li>
            <li>Cover with plastic wrap if needed when showering</li>
          </ul>
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
        <p>
          Healing timelines vary by location due to differences in blood supply and skin thickness. 
          Facial wounds typically heal faster than wounds on other parts of the body.
        </p>
        
        <div className="timeline-categories">
          <div className="timeline-category">
            <h3>Facial Wounds (1 Week Timeline)</h3>
            <p className="timeline-note">
              Face and neck wounds heal faster due to excellent blood supply and thinner skin.
            </p>
            
            <div className="timeline">
              <div className="timeline-item">
                <h4>Days 1-2</h4>
                <p>
                  The wound area may appear pink or red with some mild swelling. Mild discomfort is normal.
                  Keep the area completely dry.
                </p>
              </div>
              
              <div className="timeline-item">
                <h4>Days 3-5</h4>
                <p>
                  Redness and swelling should begin to decrease rapidly. The edges of the Steri-Strips may 
                  begin to curl, which is normal.
                </p>
              </div>
              
              <div className="timeline-item">
                <h4>Days 5-7</h4>
                <p>
                  Steri-Strips can typically be removed after 5-7 days as instructed by your provider. 
                  The wound should appear well-closed.
                </p>
              </div>
            </div>
          </div>
          
          <div className="timeline-category">
            <h3>Other Body Areas (2-3 Week Timeline)</h3>
            <p className="timeline-note">
              Wounds on arms, legs, trunk, and back require longer healing time due to increased movement and varying blood supply.
            </p>
            
            <div className="timeline">
              <div className="timeline-item">
                <h4>Days 1-3</h4>
                <p>
                  The wound area may appear pink or red with some mild swelling. Mild discomfort is normal 
                  and can usually be managed with acetaminophen (Tylenol) if needed.
                </p>
              </div>
              
              <div className="timeline-item">
                <h4>Days 4-7</h4>
                <p>
                  Redness and swelling should begin to decrease. The edges of the Steri-Strips may begin to curl, 
                  which is normal. You may shower and allow water to run over the area.
                </p>
              </div>
              
              <div className="timeline-item">
                <h4>Days 7-14</h4>
                <p>
                  Steri-Strips will usually begin to fall off on their own or can be removed as instructed. 
                  The wound should appear closed with a thin line forming along the incision.
                </p>
              </div>
              
              <div className="timeline-item">
                <h4>At 2 Weeks (Day 14)</h4>
                <p>
                  If Steri-Strips haven't fallen off by 2 weeks, they should be removed at this time. 
                  Use the removal methods described below if instructed by your provider.
                </p>
              </div>
            </div>
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
      
      <section className="removal-options">
        <h2>Steri-Strip Removal</h2>
        <p>
          If your healthcare provider has instructed you to remove the Steri-Strips at home, or if they 
          haven't fallen off naturally by 2 weeks, you have two safe removal options:
        </p>
        
        <div className="removal-methods">
          <div className="removal-method">
            <h3>Option 1: Water Method</h3>
            <p>
              Gently wet the Steri-Strips with warm water to soften the adhesive. Once they're thoroughly 
              wet, they should peel off easily without pulling on the skin.
            </p>
          </div>
          
          <div className="removal-method">
            <h3>Option 2: Adhesive Dissolver</h3>
            <p>
              Use a gentle adhesive dissolver (available at pharmacies) to safely dissolve the adhesive. 
              Apply the dissolver according to package instructions and allow the Steri-Strips to lift off naturally.
            </p>
          </div>
        </div>
        
        <div className="removal-warning">
          <p>
            <strong>Important:</strong> Never pull or forcibly remove Steri-Strips as this can damage the healing skin 
            and potentially reopen the wound. Always follow your provider's specific instructions for removal timing.
          </p>
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