// src/pages/GeneralInfo/GeneralInfo.js
import React from 'react';
import { Link } from 'react-router-dom';
import './GeneralInfo.css';

const GeneralInfo = () => {
  const [imagesUnblurred, setImagesUnblurred] = React.useState(false);

  const handleUnblurImages = () => {
    setImagesUnblurred(true);
  };

  return (
    <div className="page-container general-info-page">
      <h1>General Wound Care Guidelines</h1>
      
      <div className="intro-box">
        <p>
          These general guidelines apply to most wound care situations after Mohs surgery. 
          Always follow your specific post-operative instructions from your healthcare provider, 
          as individual circumstances may require different care approaches.
        </p>
      </div>

      <section className="basic-principles">
        <h2>Basic Wound Care Principles</h2>
        
        <div className="principles-grid">
          <div className="principle-item">
            <h3>Keep It Clean</h3>
            <p>
              Gentle cleaning with mild soap and water removes bacteria and debris that could 
              cause infection. Clean hands are essential before any wound care.
            </p>
          </div>
          
          <div className="principle-item">
            <h3>Keep It Moist</h3>
            <p>
              Moist wounds heal faster than dry wounds. Petroleum jelly or prescribed ointments 
              create an optimal healing environment and prevent scabbing.
            </p>
          </div>
          
          <div className="principle-item">
            <h3>Keep It Covered</h3>
            <p>
              Proper dressings protect the wound from bacteria, trauma, and environmental 
              contaminants while maintaining moisture levels.
            </p>
          </div>
          
          <div className="principle-item">
            <h3>Monitor for Changes</h3>
            <p>
              Regular observation helps identify normal healing progression versus signs 
              of complications that require medical attention.
            </p>
          </div>
        </div>
      </section>

      <section className="wound-care-steps">
        <h2>General Wound Care Steps</h2>
        
        <div className="step-by-step">
          <div className="care-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Preparation</h3>
              <ul>
                <li>Wash hands thoroughly with soap and warm water for 20 seconds</li>
                <li>Gather all supplies before starting</li>
                <li>Work in a clean, well-lit area</li>
                <li>Consider using clean gloves if recommended</li>
              </ul>
            </div>
          </div>
          
          <div className="care-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Remove Old Dressing</h3>
              <ul>
                <li>Remove tape carefully to avoid skin irritation</li>
                <li>If dressing sticks, moisten with warm water or saline</li>
                <li>Dispose of old dressing properly</li>
                <li>Note any drainage on the old dressing</li>
              </ul>
            </div>
          </div>
          
          <div className="care-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Clean the Wound</h3>
              <ul>
                <li>Use mild soap (Dove, Cetaphil) and lukewarm water</li>
                <li>Clean gently with a soft washcloth or gauze</li>
                <li>Remove any dried drainage or old ointment</li>
                <li>Rinse thoroughly to remove all soap residue</li>
                <li>Pat dry gently - do not rub</li>
              </ul>
            </div>
          </div>
          
          <div className="care-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Apply Medication/Ointment</h3>
              <ul>
                <li>Apply a thin layer of petroleum jelly or prescribed ointment</li>
                <li>Cover the entire wound surface</li>
                <li>Use a clean cotton swab or freshly washed finger</li>
                <li>Don't use too much - a thin layer is sufficient</li>
              </ul>
            </div>
          </div>
          
          <div className="care-step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>Apply New Dressing</h3>
              <ul>
                <li>Use appropriate dressing type (non-stick pad, gauze, etc.)</li>
                <li>Ensure dressing covers wound with small margin around edges</li>
                <li>Secure with appropriate tape</li>
                <li>Make sure dressing is snug but not too tight</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="supplies-section">
        <h2>Essential Wound Care Supplies</h2>
        
        <div className="supplies-categories">
          <div className="supply-category">
            <h3>Cleaning Supplies</h3>
            <ul>
              <li>Mild soap (Dove, Cetaphil, or other fragrance-free soap)</li>
              <li>Clean washcloths or gauze pads</li>
              <li>Lukewarm water</li>
              <li>Disposable gloves (optional but recommended)</li>
            </ul>
          </div>
          
          <div className="supply-category">
            <h3>Ointments & Medications</h3>
            <ul>
              <li>Petroleum jelly (Vaseline, Aquaphor)</li>
              <li>Antibiotic ointment (if prescribed)</li>
              <li>Cotton swabs for application</li>
              <li>Any prescribed topical medications</li>
            </ul>
          </div>
          
          <div className="supply-category">
            <h3>Dressing Materials</h3>
            <ul>
              <li>Non-stick pads (Telfa pads)</li>
              <li>Gauze pads (various sizes)</li>
              <li>Paper tape or hypoallergenic tape</li>
              <li>Bandage scissors</li>
            </ul>
          </div>
          
          <div className="supply-category">
            <h3>Additional Items</h3>
            <ul>
              <li>Small bowl for warm water</li>
              <li>Clean towels</li>
              <li>Mirror for hard-to-see areas</li>
              <li>Good lighting or flashlight</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="photo-examples">
        <h2>Proper Wound Care Demonstration</h2>
        <p>
          These images demonstrate proper wound care techniques and what healthy healing looks like.
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
          <h3>Proper Wound Care Techniques</h3>
          
          <div className="photo-grid">
            <div className="photo-item">
              <img 
                src="/images/general/hand-washing.jpg" 
                alt="Proper hand washing technique"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder" style={{display: 'none'}}>
                <span>Proper hand washing technique</span>
              </div>
              <p className="photo-caption">
                <strong>Hand Hygiene:</strong> Wash hands for 20 seconds before wound care
              </p>
            </div>
            
            <div className="photo-item">
              <img 
                src="/images/general/gentle-cleaning.jpg" 
                alt="Gentle wound cleaning"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder" style={{display: 'none'}}>
                <span>Gentle wound cleaning</span>
              </div>
              <p className="photo-caption">
                <strong>Gentle Cleaning:</strong> Use soft motions with mild soap and water
              </p>
            </div>
            
            <div className="photo-item">
              <img 
                src="/images/general/ointment-application.jpg" 
                alt="Applying petroleum jelly"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder" style={{display: 'none'}}>
                <span>Applying petroleum jelly</span>
              </div>
              <p className="photo-caption">
                <strong>Ointment Application:</strong> Thin layer covering entire wound surface
              </p>
            </div>
            
            <div className="photo-item">
              <img 
                src="/images/general/proper-dressing.jpg" 
                alt="Properly applied dressing"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder" style={{display: 'none'}}>
                <span>Properly applied dressing</span>
              </div>
              <p className="photo-caption">
                <strong>Proper Dressing:</strong> Non-stick pad secured with appropriate tape
              </p>
            </div>
          </div>
        </div>
        
        <div className="photo-category">
          <h3>Normal Healing Progression</h3>
          <p>Understanding what normal healing looks like helps you recognize when to seek help:</p>
          
          <div className="photo-grid">
            <div className="photo-item">
              <img 
                src="/images/general/fresh-wound.jpg" 
                alt="Fresh surgical wound"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder" style={{display: 'none'}}>
                <span>Fresh surgical wound</span>
              </div>
              <p className="photo-caption">
                <strong>Day 1-3:</strong> Fresh wound with clean edges, minimal drainage
              </p>
            </div>
            
            <div className="photo-item">
              <img 
                src="/images/general/early-healing.jpg" 
                alt="Early healing stage"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder" style={{display: 'none'}}>
                <span>Early healing stage</span>
              </div>
              <p className="photo-caption">
                <strong>Week 1:</strong> Wound edges beginning to heal, decreased drainage
              </p>
            </div>
            
            <div className="photo-item">
              <img 
                src="/images/general/mature-healing.jpg" 
                alt="Mature healing"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder" style={{display: 'none'}}>
                <span>Mature healing</span>
              </div>
              <p className="photo-caption">
                <strong>Week 2-3:</strong> Significant healing progress, wound edges approximating
              </p>
            </div>
            
            <div className="photo-item">
              <img 
                src="/images/general/healed-wound.jpg" 
                alt="Well-healed wound"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder" style={{display: 'none'}}>
                <span>Well-healed wound</span>
              </div>
              <p className="photo-caption">
                <strong>4+ Weeks:</strong> Fully healed with mature scar formation
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="activity-restrictions">
        <h2>Activity Restrictions and Lifestyle Considerations</h2>
        
        <div className="restrictions-grid">
          <div className="restriction-category">
            <h3>Physical Activity</h3>
            <div className="timeline-restriction">
              <h4>First 24-48 Hours</h4>
              <ul>
                <li>Avoid strenuous activity</li>
                <li>Keep the wound elevated when possible</li>
                <li>No heavy lifting (over 5-10 pounds)</li>
                <li>Gentle movements only</li>
              </ul>
            </div>
            <div className="timeline-restriction">
              <h4>First 1-2 Weeks</h4>
              <ul>
                <li>No vigorous exercise or sports</li>
                <li>Avoid activities that cause sweating</li>
                <li>No heavy lifting (follow specific weight limits)</li>
                <li>Gradually increase light activities as tolerated</li>
              </ul>
            </div>
            <div className="timeline-restriction">
              <h4>2+ Weeks (varies by wound)</h4>
              <ul>
                <li>Gradually return to normal activities</li>
                <li>Follow up with healthcare provider before resuming exercise</li>
                <li>Listen to your body and don't push through pain</li>
              </ul>
            </div>
          </div>
          
          <div className="restriction-category">
            <h3>Water Exposure</h3>
            <ul>
              <li><strong>Avoid:</strong> Swimming, hot tubs, baths until fully healed</li>
              <li><strong>Showering:</strong> Keep wound dry or follow specific instructions</li>
              <li><strong>Rain/Water:</strong> Protect wound from getting wet</li>
              <li><strong>When cleared:</strong> Start with brief water exposure and monitor</li>
            </ul>
          </div>
          
          <div className="restriction-category">
            <h3>Sun Protection</h3>
            <ul>
              <li>Protect healing wound from direct sunlight</li>
              <li>Use physical barriers (clothing, bandages) when outdoors</li>
              <li>Once healed, use SPF 30+ sunscreen on scar tissue</li>
              <li>Continue sun protection for 6-12 months after healing</li>
            </ul>
          </div>
          
          <div className="restriction-category">
            <h3>Work and Daily Activities</h3>
            <ul>
              <li>Modify work activities that might stress the wound</li>
              <li>Avoid environments with excessive dirt or contaminants</li>
              <li>Plan wound care into your daily routine</li>
              <li>Consider ergonomic adjustments if wound affects function</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="nutrition-healing">
        <h2>Nutrition for Optimal Healing</h2>
        
        <div className="nutrition-tips">
          <div className="nutrition-category">
            <h3>Essential Nutrients</h3>
            <ul>
              <li><strong>Protein:</strong> Lean meats, fish, eggs, beans, nuts - essential for tissue repair</li>
              <li><strong>Vitamin C:</strong> Citrus fruits, berries, leafy greens - supports collagen formation</li>
              <li><strong>Zinc:</strong> Meat, seafood, seeds - important for wound healing</li>
              <li><strong>Vitamin A:</strong> Orange vegetables, dark leafy greens - supports cell growth</li>
            </ul>
          </div>
          
          <div className="nutrition-category">
            <h3>Hydration</h3>
            <ul>
              <li>Drink plenty of water throughout the day</li>
              <li>Aim for 8-10 glasses of water daily</li>
              <li>Limit caffeine and alcohol which can impair healing</li>
              <li>Monitor urine color - should be light yellow</li>
            </ul>
          </div>
          
          <div className="nutrition-category">
            <h3>Foods to Emphasize</h3>
            <ul>
              <li>Colorful fruits and vegetables</li>
              <li>Whole grains for energy and B vitamins</li>
              <li>Lean proteins at each meal</li>
              <li>Healthy fats like olive oil, avocados, and nuts</li>
            </ul>
          </div>
          
          <div className="nutrition-category">
            <h3>Foods to Limit</h3>
            <ul>
              <li>Processed and fried foods</li>
              <li>Excessive sugar and refined carbohydrates</li>
              <li>Alcohol (can impair healing)</li>
              <li>Foods high in sodium</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="warning-signs">
        <h2>When to Contact Your Healthcare Provider</h2>
        
        <div className="warning-categories">
          <div className="immediate-warning">
            <h3>Seek Immediate Medical Attention If:</h3>
            <ul>
              <li>Signs of severe infection (fever, red streaks, severe pain)</li>
              <li>Heavy bleeding that doesn't stop with pressure</li>
              <li>Wound opens up significantly</li>
              <li>Signs of allergic reaction to medications</li>
              <li>Severe or worsening pain not controlled by prescribed medications</li>
            </ul>
          </div>
          
          <div className="routine-warning">
            <h3>Schedule an Appointment If:</h3>
            <ul>
              <li>Questions about normal healing progress</li>
              <li>Concerns about wound appearance</li>
              <li>Need for additional supplies or medications</li>
              <li>Difficulty following care instructions</li>
              <li>Any other non-urgent concerns about your wound</li>
            </ul>
          </div>
        </div>
        
        <div className="additional-resources">
          <p>
            For specific information about different types of wound closure, visit:
          </p>
          <ul>
            <li><Link to="/second-intention" className="text-link">Second Intention Healing</Link></li>
            <li><Link to="/steri-strips" className="text-link">Steri-Strip Care</Link></li>
            <li><Link to="/staple-care" className="text-link">Staple Care</Link></li>
            <li><Link to="/infection-info" className="text-link">Signs of Infection</Link></li>
          </ul>
        </div>
      </section>
      
      <div className="navigation-links">
        <Link to="/" className="back-link">← Back to Home</Link>
        <Link to="/infection-info" className="next-link">Infection Information →</Link>
      </div>
    </div>
  );
};

export default GeneralInfo;