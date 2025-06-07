// src/pages/InfectionInfo/InfectionInfo.js
import React from 'react';
import { Link } from 'react-router-dom';
import './InfectionInfo.css';

const InfectionInfo = () => {
  const [imagesUnblurred, setImagesUnblurred] = React.useState(false);

  const handleUnblurImages = () => {
    setImagesUnblurred(true);
  };

  return (
    <div className="page-container infection-info-page">
      <h1>Recognizing and Preventing Wound Infections</h1>
      
      <div className="intro-box">
        <p>
          While infections after Mohs surgery are uncommon, it's important to know how to recognize 
          the signs of infection and take appropriate steps to prevent them. This page provides 
          information to help you monitor your wound healing process.
        </p>
      </div>

      <section className="info-section">
        <h2>Signs and Symptoms of Wound Infection</h2>
        
        <p>
          Wound infections can develop when bacteria enter the surgical site. Early recognition 
          and treatment are essential for optimal healing. Watch for these warning signs:
        </p>

        <div className="infection-signs">
          <div className="sign-category">
            <h3>Visual Signs</h3>
            <ul>
              <li><strong>Increased redness:</strong> Redness that spreads beyond the immediate wound area or becomes more intense over time</li>
              <li><strong>Red streaks:</strong> Red lines extending away from the wound toward the heart (sign of spreading infection)</li>
              <li><strong>Swelling:</strong> New or increasing puffiness around the wound</li>
              <li><strong>Pus or drainage:</strong> Yellow, green, or thick white discharge from the wound</li>
              <li><strong>Wound opening:</strong> Separation of wound edges that were previously closed</li>
              <li><strong>Dark or black tissue:</strong> Areas of tissue that appear to be dying</li>
            </ul>
          </div>

          <div className="sign-category">
            <h3>Physical Sensations</h3>
            <ul>
              <li><strong>Increased pain:</strong> Pain that worsens rather than improves over time</li>
              <li><strong>Warmth or heat:</strong> The wound area feels noticeably warm or hot to touch</li>
              <li><strong>Throbbing pain:</strong> Pulsating or throbbing sensation in the wound area</li>
              <li><strong>Tenderness:</strong> Increased sensitivity when touching the area around the wound</li>
            </ul>
          </div>

          <div className="sign-category">
            <h3>Systemic Symptoms</h3>
            <ul>
              <li><strong>Fever:</strong> Temperature of 100.4°F (38°C) or higher</li>
              <li><strong>Chills:</strong> Feeling cold or experiencing shaking chills</li>
              <li><strong>Fatigue:</strong> Unusual tiredness or feeling unwell</li>
              <li><strong>Nausea:</strong> Feeling sick to your stomach</li>
              <li><strong>Swollen lymph nodes:</strong> Enlarged, tender lymph nodes near the wound</li>
            </ul>
          </div>

          <div className="sign-category">
            <h3>Drainage Characteristics</h3>
            <ul>
              <li><strong>Color:</strong> Yellow, green, brown, or cloudy white discharge</li>
              <li><strong>Odor:</strong> Foul, strong, or unusual smell from the wound</li>
              <li><strong>Amount:</strong> Increasing volume of drainage over time</li>
              <li><strong>Consistency:</strong> Thick, creamy, or chunky texture</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="photo-examples">
        <h2>Visual Examples of Infection Signs</h2>
        <p>
          These photos demonstrate what infected wounds may look like compared to normal healing. 
          Learning to recognize these signs early can help prevent complications.
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
          <h3>Signs of Infection - Seek Immediate Medical Attention</h3>
          
          <div className="photo-grid">
            <div className="photo-item">
              <img 
                src="/images/infections/purulent-drainage.jpg" 
                alt="Infected wound with purulent drainage"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder warning" style={{display: 'none'}}>
                <span>Infected wound with purulent drainage</span>
              </div>
              <p className="photo-caption">
                <strong>Purulent Drainage:</strong> Thick, yellow-green pus indicates bacterial infection
              </p>
            </div>
            
            <div className="photo-item">
              <img 
                src="/images/infections/cellulitis-spreading.jpg" 
                alt="Cellulitis with spreading redness"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder warning" style={{display: 'none'}}>
                <span>Cellulitis with spreading redness</span>
              </div>
              <p className="photo-caption">
                <strong>Cellulitis:</strong> Spreading redness and swelling extending beyond wound edges
              </p>
            </div>
            
            <div className="photo-item">
              <img 
                src="/images/infections/red-streaking.jpg" 
                alt="Red streaking indicating lymphangitis"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder warning" style={{display: 'none'}}>
                <span>Red streaking indicating lymphangitis</span>
              </div>
              <p className="photo-caption">
                <strong>Lymphangitis:</strong> Red streaks extending from wound - requires immediate treatment
              </p>
            </div>
            
            <div className="photo-item">
              <img 
                src="/images/infections/wound-dehiscence.jpg" 
                alt="Wound dehiscence from infection"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder warning" style={{display: 'none'}}>
                <span>Wound dehiscence from infection</span>
              </div>
              <p className="photo-caption">
                <strong>Wound Dehiscence:</strong> Wound edges separating due to infection
              </p>
            </div>

            <div className="photo-item">
              <img 
                src="/images/infections/abscess-formation.jpg" 
                alt="Abscess formation"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder warning" style={{display: 'none'}}>
                <span>Abscess formation</span>
              </div>
              <p className="photo-caption">
                <strong>Abscess:</strong> Collection of pus causing raised, fluctuant swelling
              </p>
            </div>

            <div className="photo-item">
              <img 
                src="/images/infections/necrotic-tissue.jpg" 
                alt="Necrotic tissue in infected wound"
                className={imagesUnblurred ? '' : 'blurred'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder warning" style={{display: 'none'}}>
                <span>Necrotic tissue in infected wound</span>
              </div>
              <p className="photo-caption">
                <strong>Tissue Necrosis:</strong> Black or dark brown tissue indicating tissue death
              </p>
            </div>
          </div>
        </div>

        <div className="photo-category">
          <h3>Comparison: Normal vs. Infected Healing</h3>
          <p>These side-by-side comparisons help distinguish between normal healing and infection:</p>
          
          <div className="comparison-grid">
            <div className="comparison-item">
              <div className="normal-example">
                <img 
                  src="/images/infections/normal-healing-redness.jpg" 
                  alt="Normal healing with mild redness"
                  className={imagesUnblurred ? '' : 'blurred'}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="photo-placeholder normal" style={{display: 'none'}}>
                  <span>Normal healing with mild redness</span>
                </div>
                <p className="photo-caption">
                  <strong>Normal:</strong> Mild redness confined to wound edges
                </p>
              </div>
              <div className="infected-example">
                <img 
                  src="/images/infections/infected-spreading-redness.jpg" 
                  alt="Infected wound with spreading redness"
                  className={imagesUnblurred ? '' : 'blurred'}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="photo-placeholder warning" style={{display: 'none'}}>
                  <span>Infected wound with spreading redness</span>
                </div>
                <p className="photo-caption">
                  <strong>Infected:</strong> Intense redness spreading beyond wound
                </p>
              </div>
            </div>

            <div className="comparison-item">
              <div className="normal-example">
                <img 
                  src="/images/infections/normal-clear-drainage.jpg" 
                  alt="Normal clear drainage"
                  className={imagesUnblurred ? '' : 'blurred'}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="photo-placeholder normal" style={{display: 'none'}}>
                  <span>Normal clear drainage</span>
                </div>
                <p className="photo-caption">
                  <strong>Normal:</strong> Clear or slightly pink drainage
                </p>
              </div>
              <div className="infected-example">
                <img 
                  src="/images/infections/infected-pus-drainage.jpg" 
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
                  <strong>Infected:</strong> Thick, yellow-green, or cloudy drainage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="prevention-section">
        <h2>Preventing Wound Infections</h2>
        
        <div className="prevention-tips">
          <div className="prevention-category">
            <h3>Proper Wound Care</h3>
            <ul>
              <li>Follow all wound care instructions exactly as provided</li>
              <li>Keep the wound clean and covered as directed</li>
              <li>Change dressings regularly or when they become wet/soiled</li>
              <li>Use only recommended ointments and medications</li>
              <li>Avoid picking at scabs or wound edges</li>
            </ul>
          </div>

          <div className="prevention-category">
            <h3>Hand Hygiene</h3>
            <ul>
              <li>Always wash hands thoroughly before touching the wound</li>
              <li>Use soap and warm water for at least 20 seconds</li>
              <li>Use hand sanitizer if soap and water aren't available</li>
              <li>Avoid touching the wound unnecessarily</li>
              <li>Use clean gloves when recommended</li>
            </ul>
          </div>

          <div className="prevention-category">
            <h3>Environmental Factors</h3>
            <ul>
              <li>Keep the wound dry between cleanings</li>
              <li>Avoid swimming, hot tubs, and baths until fully healed</li>
              <li>Protect the wound from dirt and debris</li>
              <li>Avoid exposure to pets or their saliva on the wound</li>
              <li>Change bed linens and clothing regularly</li>
            </ul>
          </div>

          <div className="prevention-category">
            <h3>Lifestyle Considerations</h3>
            <ul>
              <li>Don't smoke - smoking impairs healing and increases infection risk</li>
              <li>Maintain good nutrition to support healing</li>
              <li>Get adequate rest and sleep</li>
              <li>Take prescribed antibiotics exactly as directed</li>
              <li>Attend all follow-up appointments</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="when-to-call">
        <h2>When to Seek Medical Attention</h2>
        
        <div className="urgency-levels">
          <div className="emergency-box">
            <h3>Call 911 or Go to Emergency Room Immediately If:</h3>
            <ul>
              <li>High fever (104°F/40°C or higher)</li>
              <li>Rapid spreading of red streaks</li>
              <li>Signs of severe systemic infection (confusion, rapid heartbeat, difficulty breathing)</li>
              <li>Severe pain that's not controlled by prescribed medications</li>
              <li>Large areas of black or dead tissue</li>
            </ul>
          </div>

          <div className="urgent-box">
            <h3>Call Your Doctor's Office Within 24 Hours If:</h3>
            <ul>
              <li>Fever of 100.4°F (38°C) or higher</li>
              <li>Red streaks extending from the wound</li>
              <li>Pus or foul-smelling drainage</li>
              <li>Increasing pain, redness, or swelling</li>
              <li>Wound edges separating</li>
              <li>Feeling generally unwell or having chills</li>
            </ul>
          </div>

          <div className="routine-box">
            <h3>Schedule an Appointment If:</h3>
            <ul>
              <li>Wound appears to have stopped healing</li>
              <li>Questions about normal healing progress</li>
              <li>Concerns about scarring</li>
              <li>Need for wound care supply refills</li>
              <li>Any other non-urgent concerns</li>
            </ul>
          </div>
        </div>
      </section>

      
      <div className="navigation-links">
        <Link to="/" className="back-link">← Back to Home</Link>
        <Link to="/general-info" className="next-link">General Care Guidelines →</Link>
      </div>
    </div>
  );
};

export default InfectionInfo;