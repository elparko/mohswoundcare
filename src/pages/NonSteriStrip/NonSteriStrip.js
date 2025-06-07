// src/pages/NonSteriStrip/NonSteriStrip.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NonSteriStrip.css';

const NonSteriStrip = () => {
  return (
    <div className="page-container non-steristrip-page">
      <h1>Conventional Wound Care</h1>
      
      <div className="intro-box">
        <p>
          Your wound has been closed with sutures and requires daily wound care with regular dressing changes.
          This approach allows for optimal healing while keeping the wound clean and protected during the healing process.
        </p>
      </div>

      <div className="disclaimer-box">
        <p>
          <strong>Important:</strong> Always follow the specific instructions given by your healthcare provider. 
          These guidelines are general recommendations and may need to be modified based on your individual situation.
        </p>
      </div>

      <section className="care-section">
        <h2>Daily Wound Care Instructions</h2>
        
        <div className="care-step">
          <h3>Step 1: Prepare your supplies</h3>
          <p>Gather the following items before beginning wound care:</p>
          <ul>
            <li>Clean gloves (optional but recommended)</li>
            <li>Mild soap (e.g., Dove, Cetaphil)</li>
            <li>Cotton swabs (Q-tips)</li>
            <li>Aquaphor healing ointment or petroleum jelly (Vaseline)</li>
            <li>Non-stick dressing pads (e.g., Telfa)</li>
            <li>Paper tape or other non-allergenic tape</li>
            <li>Clean scissors (to cut dressing materials)</li>
            <li>Small bowl with warm water</li>
            <li>Clean washcloth or gauze</li>
          </ul>
        </div>
        
        <div className="care-step">
          <h3>Step 2: Wash your hands</h3>
          <p>
            Thoroughly wash your hands with soap and warm water for at least 20 seconds. 
            Dry with a clean towel before touching the wound or dressing materials.
          </p>
        </div>
        
        <div className="care-step">
          <h3>Step 3: Remove the old dressing</h3>
          <p>
            Carefully remove the old dressing and tape. If the dressing sticks to the wound, 
            moisten it with warm water to help release it gently. Avoid pulling or tearing 
            the dressing off forcefully.
          </p>
        </div>
        
        <div className="care-step">
          <h3>Step 4: Clean around the sutures</h3>
          <p>
            Using a cotton swab (Q-tip) dipped in warm soapy water, gently clean around 
            the sutures and wound edges. Use a rolling motion to remove any dried blood, 
            drainage, or old ointment.
          </p>
          <ul>
            <li>Be gentle around the suture line to avoid disturbing the stitches</li>
            <li>Use a fresh cotton swab for each pass to avoid recontaminating the area</li>
            <li>Clean from the center of the wound outward</li>
            <li>Rinse with clean water using a fresh cotton swab to remove soap residue</li>
          </ul>
        </div>
        
        <div className="care-step">
          <h3>Step 5: Apply Aquaphor ointment</h3>
          <p>
            Using a clean cotton swab or clean fingertip, apply a thin layer of Aquaphor 
            healing ointment over the entire suture line and wound area.
          </p>
          <div className="care-note">
            <strong>Important:</strong> Keep the sutures and wound moist with Aquaphor at all times.
            This promotes optimal healing and helps prevent scabbing, which can increase scarring.
          </div>
        </div>
        
        <div className="care-step">
          <h3>Step 6: Cover with a non-stick dressing</h3>
          <p>
            Place a non-stick dressing pad (such as Telfa) over the wound, ensuring it covers 
            the entire sutured area with a small margin around the edges. Cut the dressing to 
            size if needed.
          </p>
        </div>
        
        <div className="care-step">
          <h3>Step 7: Secure the dressing</h3>
          <p>
            Secure the dressing with paper tape or other recommended tape. The dressing should 
            be secure but not too tight. Avoid using adhesive that causes skin irritation.
          </p>
        </div>
        
        <div className="care-step">
          <h3>Step 8: Change dressing daily</h3>
          <p>
            Perform this wound care routine once daily, or more frequently if the dressing 
            becomes wet, soiled, or saturated with drainage. Consistency is important for 
            optimal healing.
          </p>
        </div>
      </section>

      <section className="timeline-section">
        <h2>What to Expect During Healing</h2>
        <p>
          Healing timelines vary by location due to differences in blood supply and skin thickness. 
          Sutures are typically removed at different times depending on the wound location.
        </p>
        
        <div className="timeline-categories">
          <div className="timeline-category">
            <h3>Facial Wounds</h3>
            <p className="timeline-note">
              Face and neck wounds heal faster due to excellent blood supply.
            </p>
            
            <div className="timeline">
              <div className="timeline-item">
                <h4>Days 1-3</h4>
                <p>
                  Some swelling, redness, and mild discomfort is normal. The wound may have 
                  minimal drainage. Keep covered and moist with daily dressing changes.
                </p>
              </div>
              
              <div className="timeline-item">
                <h4>Days 4-7</h4>
                <p>
                  Swelling and redness should begin to decrease. The suture line should appear 
                  well-approximated. Continue daily wound care.
                </p>
              </div>
              
              <div className="timeline-item">
                <h4>Days 5-7</h4>
                <p>
                  Sutures are typically removed by your healthcare provider. The wound should 
                  be well-healed and closed.
                </p>
              </div>
            </div>
          </div>
          
          <div className="timeline-category">
            <h3>Other Body Areas</h3>
            <p className="timeline-note">
              Arms, legs, trunk, and back require longer healing time due to movement and varying blood supply.
            </p>
            
            <div className="timeline">
              <div className="timeline-item">
                <h4>Days 1-5</h4>
                <p>
                  Some swelling, redness, and mild discomfort is normal. The wound may have 
                  minimal drainage. Maintain daily wound care routine.
                </p>
              </div>
              
              <div className="timeline-item">
                <h4>Days 6-10</h4>
                <p>
                  Healing progresses with decreased redness and swelling. The suture line should 
                  remain well-approximated and clean.
                </p>
              </div>
              
              <div className="timeline-item">
                <h4>Days 10-14</h4>
                <p>
                  Sutures are typically removed by your healthcare provider. Complete healing 
                  continues over the following weeks.
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
            wound area for at least 1-2 weeks or as advised by your doctor. This helps prevent the sutures 
            from pulling apart.
          </p>
        </div>
        
        <div className="consideration-item">
          <h3>Showering Guidelines</h3>
          <p>
            You may shower 24-48 hours after surgery, but avoid direct water pressure on the wound. 
            Pat the area dry gently and change the dressing immediately after showering.
          </p>
          <ul>
            <li>Avoid soaking in baths, swimming pools, or hot tubs until sutures are removed</li>
            <li>Keep showers brief and use lukewarm water</li>
            <li>Consider covering the dressing with plastic wrap while showering</li>
          </ul>
        </div>
        
        <div className="consideration-item">
          <h3>After Suture Removal</h3>
          <p>
            Once sutures are removed by your healthcare provider:
          </p>
          <ul>
            <li>
              Continue to keep the area moist with Aquaphor for another 1-2 weeks to optimize healing
            </li>
            <li>
              Protect the scar from sun exposure for at least 6-12 months using SPF 30+ sunscreen
            </li>
            <li>
              Begin gentle scar massage with lotion after complete healing (usually 2-3 weeks) 
              to help with scar maturation
            </li>
            <li>
              Consider silicone scar sheets or gel as directed by your doctor to minimize scarring
            </li>
          </ul>
        </div>
      </section>

      <section className="warning-signs">
        <h2>Warning Signs of Complications</h2>
        <div className="warning-box">
          <p>Contact your healthcare provider if you experience any of the following:</p>
          <ul>
            <li>Increasing pain, redness, or swelling around the wound</li>
            <li>Spreading redness or red streaks extending from the wound</li>
            <li>Wound edges that feel warm or hot to touch</li>
            <li>Yellow, green, or foul-smelling drainage</li>
            <li>Sutures that appear to be pulling apart or loosening</li>
            <li>Excessive bleeding that doesn't stop with gentle pressure</li>
            <li>Fever of 100.4°F (38°C) or higher</li>
            <li>Opening of the wound edges between sutures</li>
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

export default NonSteriStrip;