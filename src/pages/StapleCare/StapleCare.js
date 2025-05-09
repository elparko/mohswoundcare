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
          Your Mohs surgery wound has been closed with surgical staples. Staples are often used 
          for wounds in areas with high tension or where secure closure is needed. This page 
          provides guidance on how to properly care for your stapled wound to ensure optimal healing.
        </p>
      </div>

      <section className="care-section">
        <h2>Stapled Wound Care Instructions</h2>
        
        <div className="care-step">
          <h3>Keep the area clean</h3>
          <p>
            For the first 24-48 hours: Keep the wound and staples completely dry. 
            Cover with plastic when showering if needed.
          </p>
          <p>
            After 48 hours: You may shower and allow water to run over the staples, but do not 
            soak them (avoid baths, swimming pools, hot tubs, etc.). Pat the area dry gently after 
            showering – do not rub.
          </p>
        </div>
        
        <div className="care-step">
          <h3>Cleaning the stapled area</h3>
          <p>
            Once permitted to get the wound wet (typically after 24-48 hours):
          </p>
          <ol>
            <li>Wash your hands thoroughly before touching the wound area</li>
            <li>
              Gently clean around the staples with mild soap and water. Use a clean washcloth 
              or gauze and light pressure.
            </li>
            <li>
              Rinse thoroughly to remove all soap, which can be irritating if left on the skin
            </li>
            <li>Pat the area dry gently with a clean towel or gauze</li>
          </ol>
          <div className="note-box">
            <p>
              <strong>Important:</strong> Do not scrub or rub the stapled area. Clean with gentle motions 
              to avoid disturbing the staples or the wound.
            </p>
          </div>
        </div>
        
        <div className="care-step">
          <h3>Applying ointment and dressing</h3>
          <p>
            Follow your healthcare provider's specific instructions regarding ointment and dressing. 
            Typically, you may be instructed to:
          </p>
          <ol>
            <li>
              Apply a thin layer of antibiotic ointment or petroleum jelly along the staple line
              using a clean cotton swab (not directly over the staples)
            </li>
            <li>
              Cover with a non-stick dressing (such as Telfa) if directed by your doctor
            </li>
            <li>
              Secure with paper tape or other hypoallergenic tape
            </li>
          </ol>
          <p>
            Change the dressing daily or when it becomes wet or soiled, following your doctor's 
            specific instructions.
          </p>
        </div>
        
        <div className="care-step">
          <h3>Leave staples in place</h3>
          <p>
            Do not attempt to remove or adjust the staples yourself. Staples are typically removed 
            by your healthcare provider after 7-14 days, depending on the wound location and your 
            individual healing process.
          </p>
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
        
        <div className="note-box">
          <p>
            <strong>Important:</strong> Do not miss your staple removal appointment. Leaving staples
            in too long can make them more difficult to remove and may lead to unwanted scarring.
          </p>
        </div>
        
        <h3>After Staple Removal</h3>
        <p>
          After your staples are removed:
        </p>
        <ul>
          <li>
            Your healthcare provider may apply Steri-Strips to provide additional support 
            during continued healing
          </li>
          <li>
            Continue gentle wound care as directed by your healthcare provider
          </li>
          <li>
            Resume normal activities gradually, following your provider's guidance
          </li>
          <li>
            Begin scar care once the wound is fully healed (usually 2-3 weeks after staple removal)
          </li>
        </ul>
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