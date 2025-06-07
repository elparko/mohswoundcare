// src/pages/SecondIntention/SecondIntention.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SecondIntention.css';

const SecondIntention = () => {
  const [imagesUnblurred, setImagesUnblurred] = React.useState(false);

  const handleUnblurImages = () => {
    setImagesUnblurred(true);
  };

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
      
      <section className="photo-examples">
        <h2>Wound Healing Examples</h2>
        <p>
          These photos show examples of normal healing progression and signs of infection to help you 
          understand what to expect and when to seek medical attention.
        </p>
        
        {!imagesUnblurred && (
          <div className="blur-notice">
            <p>
              <strong>Note:</strong> Medical images are blurred for sensitivity. 
              <button 
                className="unblur-button" 
                onClick={handleUnblurImages}
              >
                Click here to view all images clearly
              </button>
            </p>
          </div>
        )}
        
        <div className="photo-category">
          <h3>Normal Healing Progression</h3>
          <p>These images show what healthy second intention healing typically looks like:</p>
          
          <div className="photo-grid">
            <div className="photo-item">
              <img 
                src="/images/wounds/healing-day3-5.jpg" 
                alt="Day 3-5: Fresh wound with healthy pink edges"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder" style={{display: 'none'}}>
                <span>Day 3-5: Fresh wound with healthy pink edges</span>
              </div>
              <p className="photo-caption">
                Fresh wound with clean edges, minimal drainage, and healthy pink coloration
              </p>
            </div>
            
            <div className="photo-item">
              <img 
                src="/images/wounds/healing-week1-2.jpg" 
                alt="Week 1-2: Granulation tissue forming"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder" style={{display: 'none'}}>
                <span>Week 1-2: Granulation tissue forming</span>
              </div>
              <p className="photo-caption">
                Healthy granulation tissue (bumpy, red tissue) filling the wound from bottom up
              </p>
            </div>
            
            <div className="photo-item">
              <img 
                src="/images/wounds/healing-week2-3.jpg" 
                alt="Week 2-3: Wound contracting"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder" style={{display: 'none'}}>
                <span>Week 2-3: Wound contracting</span>
              </div>
              <p className="photo-caption">
                Wound edges pulling together, new skin growing from the sides
              </p>
            </div>
            
            <div className="photo-item">
              <img 
                src="/images/wounds/healing-week4-plus.jpg" 
                alt="Week 4+: Nearly healed"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder" style={{display: 'none'}}>
                <span>Week 4+: Nearly healed</span>
              </div>
              <p className="photo-caption">
                Nearly complete closure with new pink skin
              </p>
            </div>
          </div>
        </div>
        
        <div className="photo-category">
          <h3>Signs of Infection - Seek Medical Attention</h3>
          <p>These images show concerning signs that require prompt medical evaluation:</p>
          
          <div className="photo-grid">
            <div className="photo-item">
              <img 
                src="/images/wounds/infected-pus.jpg" 
                alt="Infected wound with pus"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder warning" style={{display: 'none'}}>
                <span>Infected wound with pus</span>
              </div>
              <p className="photo-caption">
                Yellow or green pus, increased redness, and swelling around wound edges
              </p>
            </div>
            
            <div className="photo-item">
              <img 
                src="/images/wounds/cellulitis.jpg" 
                alt="Spreading cellulitis"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder warning" style={{display: 'none'}}>
                <span>Spreading cellulitis</span>
              </div>
              <p className="photo-caption">
                Red streaks extending away from the wound, warm to touch
              </p>
            </div>
            
            <div className="photo-item">
              <img 
                src="/images/wounds/necrotic-tissue.jpg" 
                alt="Necrotic tissue"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder warning" style={{display: 'none'}}>
                <span>Necrotic tissue</span>
              </div>
              <p className="photo-caption">
                Black or dark tissue that may indicate tissue death
              </p>
            </div>
            
            <div className="photo-item">
              <img 
                src="/images/wounds/poor-healing.jpg" 
                alt="Poor healing"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder warning" style={{display: 'none'}}>
                <span>Poor healing</span>
              </div>
              <p className="photo-caption">
                Wound that appears larger, deeper, or unchanged after 2+ weeks
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="healing-timeline">
        <h2>What to Expect During Healing</h2>
        <p>
          Healing by second intention typically takes longer than wounds closed with sutures or other methods.
          The timeline varies significantly based on the wound location, with lower leg wounds taking longer to heal 
          due to reduced blood flow.
        </p>
        
        <div className="timeline-categories">
          <div className="timeline-category">
            <h3>Lower Leg Wounds (3 Month Timeline)</h3>
            <p className="timeline-note">
              Lower leg wounds heal more slowly due to reduced circulation and gravity effects.
            </p>
            
            <div className="timeline">
              <div className="timeline-item">
                <h4>Days 1-7</h4>
                <p>
                  The wound may appear red and moist with some drainage. Some minor bleeding may occur. 
                  Expect mild discomfort or tenderness.
                </p>
              </div>
              
              <div className="timeline-item">
                <h4>Weeks 1-2</h4>
                <p>
                  The wound begins to fill in from the bottom. You may notice a decrease in drainage.
                  The wound edges may appear pink or red.
                </p>
              </div>
              
              <div className="timeline-item">
                <h4>Weeks 3-6</h4>
                <p>
                  Healthy granulation tissue begins to form. The wound continues to fill in slowly
                  and may begin to contract (edges pulling inward).
                </p>
              </div>
              
              <div className="timeline-item">
                <h4>Weeks 6-10</h4>
                <p>
                  Continued filling and contraction. New skin begins to grow inward from
                  the edges of the wound (re-epithelialization).
                </p>
              </div>
              
              <div className="timeline-item">
                <h4>Weeks 10-12</h4>
                <p>
                  Final healing stages with continued remodeling of scar tissue. Complete closure
                  typically occurs by 3 months.
                </p>
              </div>
            </div>
          </div>
          
          <div className="timeline-category">
            <h3>Other Body Areas (6 Week Timeline)</h3>
            <p className="timeline-note">
              Wounds on the face, arms, trunk, and upper legs typically heal faster due to better blood supply.
            </p>
            
            <div className="timeline">
              <div className="timeline-item">
                <h4>Days 1-3</h4>
                <p>
                  The wound may appear red and moist with some clear or slightly yellow drainage.
                  Some minor bleeding may occur. There may be mild discomfort or tenderness.
                </p>
              </div>
              
              <div className="timeline-item">
                <h4>Days 4-7</h4>
                <p>
                  The wound begins to fill in from the bottom. You may notice a decrease in drainage.
                  The wound edges may appear pink or red, which is a sign of healthy healing.
                </p>
              </div>
              
              <div className="timeline-item">
                <h4>Weeks 1-2</h4>
                <p>
                  Healthy granulation tissue (pink/red tissue with a grainy appearance) begins to form.
                  The wound continues to fill in and may begin to contract (edges pulling inward).
                </p>
              </div>
              
              <div className="timeline-item">
                <h4>Weeks 3-4</h4>
                <p>
                  The wound continues to fill in and contract. New skin begins to grow inward from
                  the edges of the wound (re-epithelialization).
                </p>
              </div>
              
              <div className="timeline-item">
                <h4>Weeks 4-6</h4>
                <p>
                  Final healing stages with continued remodeling of scar tissue. Most wounds
                  achieve complete closure by 6 weeks.
                </p>
              </div>
            </div>
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