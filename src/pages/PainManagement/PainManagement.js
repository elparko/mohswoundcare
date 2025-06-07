// src/pages/PainManagement/PainManagement.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PainManagement.css';

const PainManagement = () => {
  return (
    <div className="page-container pain-management-page">
      <h1>Pain Management After Surgery</h1>
      
      <div className="intro-box">
        <p>
          Most patients experience minimal to moderate discomfort after Mohs surgery. 
          Proper pain management helps ensure comfort during healing and can improve 
          your overall recovery experience.
        </p>
      </div>

      <div className="disclaimer-box">
        <p>
          <strong>Important:</strong> Always follow the specific pain management instructions 
          given by your healthcare provider. These guidelines are general recommendations and 
          may need to be modified based on your individual situation and medical history.
        </p>
      </div>

      <section className="pain-expectations">
        <h2>What to Expect</h2>
        
        <div className="expectation-item">
          <h3>Normal Post-Surgical Discomfort</h3>
          <p>It's normal to experience:</p>
          <ul>
            <li>Mild to moderate pain or tenderness at the surgical site</li>
            <li>Some throbbing or aching, especially in the first 24-48 hours</li>
            <li>Increased discomfort when moving or touching the area</li>
            <li>Some tightness or pulling sensation from sutures or staples</li>
            <li>Mild headache if the surgery was on your face or scalp</li>
          </ul>
        </div>
        
        <div className="expectation-item">
          <h3>Pain Timeline</h3>
          <div className="timeline">
            <div className="timeline-item">
              <h4>First 24 Hours</h4>
              <p>
                Pain is typically at its peak during the first day after surgery. 
                This is when local anesthesia wears off completely.
              </p>
            </div>
            
            <div className="timeline-item">
              <h4>Days 2-3</h4>
              <p>
                Pain should begin to decrease significantly. Most patients report 
                manageable discomfort that responds well to over-the-counter medications.
              </p>
            </div>
            
            <div className="timeline-item">
              <h4>Days 4-7</h4>
              <p>
                Pain should continue to decrease. You may only need occasional 
                pain relief, typically related to movement or dressing changes.
              </p>
            </div>
            
            <div className="timeline-item">
              <h4>After 1 Week</h4>
              <p>
                Most patients experience minimal pain. Any remaining discomfort 
                is usually mild and intermittent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="medication-options">
        <h2>Medication Options</h2>
        
        <div className="medication-category">
          <h3>First-Line Options (Recommended)</h3>
          
          <div className="medication-item">
            <h4>Acetaminophen (Tylenol)</h4>
            <ul>
              <li><strong>Dosage:</strong> 650-1000mg every 6-8 hours as needed</li>
              <li><strong>Maximum:</strong> Do not exceed 3000mg in 24 hours</li>
              <li><strong>Benefits:</strong> Effective pain relief with minimal side effects</li>
              <li><strong>Notes:</strong> Safe for most patients, does not interfere with blood clotting</li>
            </ul>
          </div>
          
          <div className="medication-item">
            <h4>Ibuprofen (Advil, Motrin)</h4>
            <ul>
              <li><strong>Dosage:</strong> 400-600mg every 6-8 hours as needed</li>
              <li><strong>Maximum:</strong> Do not exceed 2400mg in 24 hours</li>
              <li><strong>Benefits:</strong> Reduces both pain and inflammation</li>
              <li><strong>Important:</strong> Only use if approved by your provider (may increase bleeding risk)</li>
            </ul>
          </div>
        </div>
        
        <div className="medication-category combination-emphasis">
          <h3>Combination Therapy (Highly Effective)</h3>
          <div className="combination-note">
            <p>
              <strong>Acetaminophen + Ibuprofen Alternation:</strong> When both medications are safe for you to take, 
              alternating these medications every 3-4 hours provides superior pain control compared to using either medication alone.
            </p>
            <p><strong>Example Schedule:</strong></p>
            <ul>
              <li>8:00 AM - Acetaminophen 650-1000mg</li>
              <li>12:00 PM - Ibuprofen 400-600mg</li>
              <li>4:00 PM - Acetaminophen 650-1000mg</li>
              <li>8:00 PM - Ibuprofen 400-600mg</li>
              <li>Continue this pattern as needed</li>
            </ul>
            <p>
              <strong>Benefits:</strong> This approach provides around-the-clock pain relief while staying within safe dosing limits for each medication.
            </p>
          </div>
        </div>
        
        <div className="medication-category prescription-warning">
          <h3>Prescription Pain Medications</h3>
          <p>
            Your healthcare provider may prescribe stronger pain medications if over-the-counter 
            options are not adequate for your situation.
          </p>
          <div className="prescription-caution">
            <p>
              <strong>Important Cautions:</strong> If prescribed stronger pain medications, use them 
              exactly as directed and only for as long as necessary. These medications can be habit-forming 
              and may cause drowsiness, constipation, and other side effects. Most patients find they 
              only need them for a few days at most.
            </p>
          </div>
        </div>
      </section>

      <section className="non-medication-strategies">
        <h2>Non-Medication Pain Management</h2>
        
        <div className="strategy-item">
          <h3>Cold Therapy</h3>
          <ul>
            <li>Apply ice packs for 15-20 minutes at a time during the first 48 hours</li>
            <li>Use a thin cloth between ice and skin to prevent frost injury</li>
            <li>Can help reduce swelling and numb pain</li>
            <li>Avoid direct ice application to the wound</li>
          </ul>
        </div>
        
        <div className="strategy-item">
          <h3>Elevation</h3>
          <ul>
            <li>Keep the surgical area elevated when possible, especially for limb wounds</li>
            <li>For head/neck wounds, sleep with your head elevated on extra pillows</li>
            <li>Elevation helps reduce swelling and associated pain</li>
          </ul>
        </div>
        
        <div className="strategy-item">
          <h3>Rest and Activity Modification</h3>
          <ul>
            <li>Get adequate sleep to promote healing and reduce pain sensitivity</li>
            <li>Avoid activities that increase pain or strain the wound</li>
            <li>Gradually increase activity as pain decreases</li>
            <li>Plan wound care when pain medications are most effective</li>
          </ul>
        </div>
        
        <div className="strategy-item">
          <h3>Distraction and Relaxation</h3>
          <ul>
            <li>Engage in quiet activities like reading, music, or light television</li>
            <li>Practice deep breathing or meditation</li>
            <li>Gentle movement or walking as tolerated</li>
            <li>Maintain social connections with family and friends</li>
          </ul>
        </div>
      </section>

      <section className="special-considerations">
        <h2>Special Considerations</h2>
        
        <div className="consideration-item">
          <h3>When NOT to Use Certain Medications</h3>
          <ul>
            <li><strong>Aspirin:</strong> Avoid for at least 1 week as it increases bleeding risk</li>
            <li><strong>Ibuprofen/NSAIDs:</strong> Avoid if you have bleeding concerns or your provider advises against it</li>
            <li><strong>Blood thinners:</strong> Continue as prescribed unless specifically told to stop</li>
          </ul>
        </div>
        
        <div className="consideration-item">
          <h3>Medication Interactions</h3>
          <p>
            Before taking any pain medications, consider:
          </p>
          <ul>
            <li>Other medications you're currently taking</li>
            <li>Alcohol consumption (avoid with acetaminophen and prescription pain meds)</li>
            <li>Kidney or liver problems</li>
            <li>Stomach ulcers or gastrointestinal issues</li>
          </ul>
        </div>
        
        <div className="consideration-item">
          <h3>Age-Related Considerations</h3>
          <ul>
            <li><strong>Elderly patients:</strong> May need lower doses and more careful monitoring</li>
            <li><strong>Younger patients:</strong> Follow age-appropriate dosing guidelines</li>
            <li><strong>All ages:</strong> Start with the lowest effective dose</li>
          </ul>
        </div>
      </section>

      <section className="warning-signs">
        <h2>When to Contact Your Provider</h2>
        <div className="warning-box">
          <p>Contact your healthcare provider if you experience:</p>
          <ul>
            <li>Severe pain that doesn't improve with recommended medications</li>
            <li>Pain that worsens significantly after the first 48 hours</li>
            <li>Signs of infection along with increased pain (fever, redness, swelling)</li>
            <li>Allergic reactions to pain medications (rash, difficulty breathing)</li>
            <li>Nausea or vomiting that prevents taking oral medications</li>
            <li>Pain that interferes significantly with sleep for more than 2-3 nights</li>
            <li>Concerns about medication side effects</li>
          </ul>
          <p>
            <Link to="/infection-info" className="text-link">Learn more about signs of infection</Link>
          </p>
        </div>
      </section>

      <section className="tips-section">
        <h2>Helpful Tips</h2>
        <div className="tips-grid">
          <div className="tip-item">
            <h3>Timing Matters</h3>
            <p>
              Take pain medication before the pain becomes severe. It's easier to prevent 
              pain than to treat severe pain.
            </p>
          </div>
          
          <div className="tip-item">
            <h3>Stay Ahead of Pain</h3>
            <p>
              For the first 1-2 days, consider taking pain medication on a regular schedule 
              rather than waiting for pain to develop.
            </p>
          </div>
          
          <div className="tip-item">
            <h3>Keep a Pain Diary</h3>
            <p>
              Track your pain levels and medication effectiveness to optimize your 
              pain management strategy.
            </p>
          </div>
          
          <div className="tip-item">
            <h3>Prepare in Advance</h3>
            <p>
              Have your pain medications ready at home before your surgery, and make 
              sure you understand the dosing instructions.
            </p>
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

export default PainManagement;