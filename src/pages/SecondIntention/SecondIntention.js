// src/pages/SecondIntention/SecondIntention.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SecondIntention.css';

const SecondIntention = () => {
  return (
    <div className="page-container second-intention-page">
      <h1>Second Intention Healing</h1>
      
      <div className="intro-box">
        <p>
          Your wound has been left open to heal gradually from the bottom up, a process called "healing by second intention." 
          This method is often chosen for certain wound locations or sizes and can provide excellent cosmetic results 
          when cared for properly.
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
            <li>Clean washcloth or gauze</li>
            <li>Petroleum jelly (e.g., Vaseline) or prescribed ointment</li>
            <li>Non-stick dressing (e.g., Telfa)</li>
            <li>Paper tape or other non-allergenic tape</li>
            <li>Clean scissors (to cut dressing materials)</li>
            <li>Small bowl with warm water</li>
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
            Carefully remove the old dressing. If it sticks to the wound, moisten it with
            warm water to help release it gently. Avoid pulling or tearing the dressing off.
          </p>
        </div>
        
        <div className="care-step">
          <h3>Step 4: Clean the wound</h3>
          <p>
            Clean the wound gently with mild soap and warm water. You can use a clean 
            washcloth or gauze, but do not scrub the wound. Instead, use gentle motions to
            remove any dried blood, drainage, or old ointment.
          </p>
          <p>
            Rinse thoroughly with warm water to remove all soap residue. Pat the area dry 
            with a clean gauze pad or clean towel. Do not rub the wound.
          </p>
        </div>
        
        <div className="care-step">
          <h3>Step 5: Apply petroleum jelly</h3>
          <p>
            Using a clean cotton swab or fingertip (if your hands are freshly washed), 
            apply a thin layer of petroleum jelly or prescribed ointment to the entire wound surface.
            This keeps the wound moist, which is essential for optimal healing and helps prevent scabbing.
          </p>
          <div className="care-note">
            <strong>Important:</strong> Keep the wound moist with petroleum jelly at all times.
            Letting the wound dry out or scab will slow healing and potentially increase scarring.
          </div>
        </div>
        
        <div className="care-step">
          <h3>Step 6: Apply a non-stick dressing</h3>
          <p>
            Cover the wound with a non-stick dressing pad (such as Telfa). Cut the dressing to 
            size if needed, ensuring it covers the entire wound with a small margin around the edges.
          </p>
        </div>
        
        <div className="care-step">
          <h3>Step 7: Secure the dressing</h3>
          <p>
            Secure the dressing with paper tape or other recommended tape. Avoid using adhesive
            that causes skin irritation. The dressing should be secure but not too tight.
          </p>
        </div>
        
        <div className="care-step">
          <h3>Step 8: Change the dressing daily</h3>
          <p>
            Change the dressing once daily, or more frequently if it becomes wet or soiled.
            Follow these same steps for each dressing change.
          </p>
        </div>
      </section>
      
      <section className="healing-timeline">
        <h2>What to Expect During Healing</h2>
        <p>
          Healing by second intention typically takes longer than wounds closed with sutures or other methods.
          The timeline can vary widely depending on the size and location of your wound.
        </p>
        
        <div className="timeline">
          <div className="timeline-item">
            <h3>Days 1-3</h3>
            <p>
              The wound may appear red and moist with some clear or slightly yellow drainage.
              Some minor bleeding may occur. There may be mild discomfort or tenderness.
            </p>
          </div>
          
          <div className="timeline-item">
            <h3>Days 4-7</h3>
            <p>
              The wound begins to fill in from the bottom. You may notice a decrease in drainage.
              The wound edges may appear pink or red, which is a sign of healthy healing.
            </p>
          </div>
          
          <div className="timeline-item">
            <h3>Weeks 1-2</h3>
            <p>
              Healthy granulation tissue (pink/red tissue with a grainy appearance) begins to form.
              The wound continues to fill in and may begin to contract (edges pulling inward).
            </p>
          </div>
          
          <div className="timeline-item">
            <h3>Weeks 3-4</h3>
            <p>
              The wound continues to fill in and contract. New skin begins to grow inward from
              the edges of the wound (re-epithelialization).
            </p>
          </div>
          
          <div className="timeline-item">
            <h3>Weeks 4+</h3>
            <p>
              Continued healing and remodeling of scar tissue. The timeline for complete closure 
              varies based on wound size and location.
            </p>
          </div>
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
            <li>Excessive bleeding that doesn't stop with gentle pressure</li>
            <li>Fever of 100.4°F (38°C) or higher</li>
            <li>The wound appears to be getting larger rather than smaller</li>
          </ul>
          <p>
            <Link to="/infection-info" className="text-link">Learn more about signs of infection</Link>
          </p>
        </div>
      </section>
      
      <section className="additional-instructions">
        <h2>Additional Instructions</h2>
        <ul>
          <li>
            <strong>Activity Restrictions:</strong> Avoid strenuous activities, heavy lifting (over 10 pounds), 
            and exercises that might strain the wound area for at least 1-2 weeks or as advised by your doctor.
          </li>
          <li>
            <strong>Sun Protection:</strong> Once the wound is fully healed, protect the area from sun exposure
            for at least 6-12 months. Use sunscreen (SPF 30+) and/or keep the area covered when outdoors.
          </li>
          <li>
            <strong>Follow-up Appointments:</strong> Attend all scheduled follow-up appointments to monitor 
            your healing progress.
          </li>
        </ul>
      </section>
      
      <div className="navigation-links">
        <Link to="/" className="back-link">← Back to Home</Link>
        <Link to="/general-info" className="next-link">General Care Guidelines →</Link>
      </div>
    </div>
  );
};

export default SecondIntention;