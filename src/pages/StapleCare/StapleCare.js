// src/pages/StapleCare/StapleCare.js
import React from 'react';
import { Link } from 'react-router-dom';
import './StapleCare.css';

const StapleCare = () => {
  return (
    <div className="page-container staple-care-page">
      <h1>Staple Wound Care</h1>
      
      <div className="intro-box">
        <p>
          Your wound has been closed with surgical staples. Staples provide strong, secure closure 
          for wounds and are commonly used on the scalp, back, chest, arms, and legs. This page 
          provides guidance on how to properly care for your stapled wound to ensure optimal healing.
        </p>
      </div>

      <div className="disclaimer-box">
        <p>
          <strong>Important:</strong> Always follow the specific instructions given by your healthcare provider. 
          These guidelines are general recommendations and may need to be modified based on your individual situation.
        </p>
      </div>

      <section className="care-section">
        <h2>Daily Staple Care Instructions</h2>
        
        <div className="care-step">
          <h3>Step 1: Prepare your supplies</h3>
          <p>Gather the following items before beginning wound care:</p>
          <ul>
            <li>Clean gloves (optional but recommended)</li>
            <li>Mild soap (e.g., Dove, Cetaphil)</li>
            <li>Cotton swabs (Q-tips)</li>
            <li>Aquaphor healing ointment or petroleum jelly (Vaseline)</li>
            <li>Non-stick dressing pads (e.g., Telfa) - if needed</li>
            <li>Paper tape or other non-allergenic tape</li>
            <li>Clean washcloth or gauze</li>
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
          <h3>Step 3: Remove old dressing (if present)</h3>
          <p>
            If your wound is covered with a dressing, carefully remove it. If the dressing 
            sticks, moisten it with warm water to help release it gently.
          </p>
        </div>
        
        <div className="care-step">
          <h3>Step 4: Clean around the staples</h3>
          <p>
            Using a cotton swab (Q-tip) dipped in warm soapy water, gently clean around 
            the staples and wound edges. Use a rolling motion to remove any dried blood, 
            drainage, or old ointment.
          </p>
          <ul>
            <li>Be very gentle around the staples to avoid disturbing them</li>
            <li>Use a fresh cotton swab for each pass to avoid recontamination</li>
            <li>Clean from the center of the wound outward</li>
            <li>Rinse with clean water using a fresh cotton swab to remove soap residue</li>
            <li>Pat dry gently with clean gauze</li>
          </ul>
        </div>
        
        <div className="care-step">
          <h3>Step 5: Apply Aquaphor ointment</h3>
          <p>
            Using a clean cotton swab, apply a thin layer of Aquaphor healing ointment 
            along the staple line and wound area. Be careful not to get ointment directly 
            on the metal staples.
          </p>
          <div className="care-note">
            <strong>Important:</strong> Keep the stapled wound moist with Aquaphor to promote 
            optimal healing and prevent scabbing.
          </div>
        </div>
        
        <div className="care-step">
          <h3>Step 6: Cover if needed</h3>
          <p>
            Depending on your provider's instructions and the wound location, you may need 
            to cover the staples with a non-stick dressing. This is especially important for:
          </p>
          <ul>
            <li>Wounds that may rub against clothing</li>
            <li>Areas prone to contamination</li>
            <li>Wounds with ongoing drainage</li>
          </ul>
          <p>
            Many stapled wounds can be left uncovered once initial healing begins, 
            following your provider's specific guidance.
          </p>
        </div>
        
        <div className="care-step">
          <h3>Step 7: Leave staples in place</h3>
          <p>
            Do not attempt to remove or adjust the staples yourself. Staples will be removed 
            by your healthcare provider, typically after 7-14 days depending on the wound 
            location and your healing progress.
          </p>
        </div>
      </section>

      <section className="timeline-section">
        <h2>What to Expect During Healing</h2>
        <p>
          Stapled wounds typically heal well with proper care. The timeline for staple removal varies 
          based on the wound location and your individual healing process.
        </p>
        
        <div className="timeline">
          <div className="timeline-item">
            <h4>Days 1-3</h4>
            <p>
              Some swelling, redness, and mild discomfort around the staples is normal. The wound may have 
              minimal drainage. You may feel tightness or pulling sensation from the staples.
            </p>
          </div>
          
          <div className="timeline-item">
            <h4>Days 4-7</h4>
            <p>
              Swelling and redness should begin to decrease. The staple line should appear 
              well-approximated. Continue daily wound care as instructed.
            </p>
          </div>
          
          <div className="timeline-item">
            <h4>Days 7-10</h4>
            <p>
              For some wounds, staples may be ready for removal. Your healthcare provider will 
              assess healing progress and determine the appropriate timing.
            </p>
          </div>
          
          <div className="timeline-item">
            <h4>Days 10-14</h4>
            <p>
              Most stapled wounds are ready for staple removal by this time. Some areas with 
              higher tension may require staples to remain longer.
            </p>
          </div>
        </div>
      </section>

      <section className="special-considerations">
        <h2>Special Considerations for Staples</h2>
        
        <div className="consideration-item">
          <h3>Activity Restrictions</h3>
          <p>
            Avoid activities that put strain on the wound area or could potentially disrupt the staples:
          </p>
          <ul>
            <li>No heavy lifting (over 10 pounds)</li>
            <li>Avoid stretching, bending, or twisting that pulls on the wound</li>
            <li>Refrain from high-impact activities or sports until staples are removed</li>
          </ul>
        </div>
        
        <div className="consideration-item">
          <h3>Comfort Measures</h3>
          <p>
            Staples may cause some discomfort or a sensation of tightness:
          </p>
          <ul>
            <li>Take acetaminophen (Tylenol) as directed for discomfort</li>
            <li>
              If located on the scalp or near hair, be careful when brushing or styling hair 
              to avoid catching on staples
            </li>
            <li>
              Wear loose clothing over the stapled area to minimize irritation and pressure
            </li>
          </ul>
        </div>
        
        <div className="consideration-item">
          <h3>What to Expect</h3>
          <p>
            With staples, you may notice:
          </p>
          <ul>
            <li>Some redness directly around the staples, which is normal</li>
            <li>Mild swelling in the first few days</li>
            <li>A sensation of tightness or pulling</li>
            <li>Occasional itching as healing progresses</li>
          </ul>
          <p>
            These are typically normal parts of the healing process. However, if redness spreads, 
            pain increases, or you develop other concerning symptoms, contact your healthcare provider.
          </p>
        </div>
      </section>
      
      <section className="staple-removal">
        <h2>Staple Removal</h2>
        <p>
          Staples are typically removed by your healthcare provider after 7-14 days, depending on 
          the wound location and how well it is healing. Staple removal is a quick procedure that 
          may cause brief, mild discomfort.
        </p>
        
        <div className="removal-warning">
          <p>
            <strong>Important:</strong> Do not miss your staple removal appointment. Leaving staples
            in too long can make them more difficult to remove and may lead to unwanted scarring or 
            tissue reaction around the staples.
          </p>
        </div>
        
        <div className="post-removal">
          <h3>After Staple Removal</h3>
          <p>
            After your staples are removed by your healthcare provider:
          </p>
          <ul>
            <li>
              <strong>Steri-Strip application:</strong> Your provider may apply Steri-Strips over 
              the healed incision to provide additional support during continued healing
            </li>
            <li>
              <strong>Wound care:</strong> Continue gentle wound care as directed, usually with 
              continued Aquaphor application for 1-2 weeks
            </li>
            <li>
              <strong>Activity:</strong> Resume normal activities gradually, following your 
              provider's specific guidance
            </li>
            <li>
              <strong>Scar care:</strong> Begin scar massage and sun protection once the wound 
              is fully healed (usually 2-3 weeks after staple removal)
            </li>
          </ul>
          
          <div className="steri-strip-note">
            <p>
              <strong>Note about Steri-Strips:</strong> If your provider applies Steri-Strips after 
              staple removal, follow the <Link to="/steri-strips" className="text-link">Steri-Strip care instructions</Link> 
              for proper maintenance and removal.
            </p>
          </div>
        </div>
      </section>
      
      <section className="warning-signs">
        <h2>Warning Signs</h2>
        <div className="warning-box">
          <p>Contact your healthcare provider if you experience any of these symptoms:</p>
          <ul>
            <li>Increasing redness, swelling, or warmth around the staples</li>
            <li>Increasing pain or tenderness at the wound site</li>
            <li>Yellow or green drainage from the wound</li>
            <li>Opening of the wound edges or gaps between staples</li>
            <li>Fever over 100.4°F (38°C)</li>
            <li>Red streaks extending from the wound</li>
            <li>Any staples that become loose or fall out</li>
          </ul>
          <p>
            <Link to="/infection-info" className="text-link">Learn more about signs of infection</Link>
          </p>
        </div>
      </section>
      
      <section className="long-term-care">
        <h2>Long-Term Wound Care</h2>
        <p>
          After your staples have been removed and your wound has completely healed:
        </p>
        <ul>
          <li>
            <strong>Sun Protection:</strong> Protect the healed wound from sun exposure for at least 
            6-12 months using sunscreen (SPF 30+) or by keeping it covered when outdoors.
          </li>
          <li>
            <strong>Scar Care:</strong> Once completely healed, you may begin gently massaging the scar 
            with lotion or vitamin E oil to help with scar maturation. Massage in a circular motion for 
            3-5 minutes several times daily.
          </li>
          <li>
            <strong>Scar Management Products:</strong> Your healthcare provider may recommend silicone gel 
            sheets or other scar management products to improve the appearance of your scar.
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

export default StapleCare;