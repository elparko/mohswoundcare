// src/pages/FurtherReading/FurtherReading.js
import React from 'react';
import { Link } from 'react-router-dom';
import './FurtherReading.css';

const FurtherReading = () => {
  return (
    <div className="page-container further-reading-page">
      <h1>Further Reading and Resources</h1>
      
      <div className="intro-box">
        <p>
          Explore additional resources, educational materials, and professional references 
          to deepen your understanding of wound care, Mohs surgery, and skin health. 
          These carefully curated resources provide evidence-based information from reputable sources.
        </p>
      </div>

      <section id="professional-organizations" className="resource-section">
        <h2>Professional Organizations & Guidelines</h2>
        <p>
          These medical organizations provide authoritative guidelines and educational resources 
          for both healthcare professionals and patients.
        </p>
        
        <div className="resource-category">
          <h3>Medical Societies</h3>
          <div className="resource-links">
            <div className="resource-item">
              <h4>American College of Mohs Surgery (ACMS)</h4>
              <p>
                The premier organization for Mohs surgeons, offering patient education materials 
                and surgeon directories.
              </p>
              <a href="https://www.mohscollege.org" target="_blank" rel="noopener noreferrer" className="external-link">
                Visit ACMS →
              </a>
            </div>
            
            <div className="resource-item">
              <h4>American Academy of Dermatology (AAD)</h4>
              <p>
                Comprehensive skin cancer and dermatologic surgery resources, including patient 
                education materials and treatment guidelines.
              </p>
              <a href="https://www.aad.org" target="_blank" rel="noopener noreferrer" className="external-link">
                Visit AAD →
              </a>
            </div>
            
            <div className="resource-item">
              <h4>Wound Healing Society</h4>
              <p>
                Scientific organization dedicated to wound healing research and education, 
                providing evidence-based care guidelines.
              </p>
              <a href="https://www.woundheal.org" target="_blank" rel="noopener noreferrer" className="external-link">
                Visit WHS →
              </a>
            </div>
            
            <div className="resource-item">
              <h4>American Society for Dermatologic Surgery (ASDS)</h4>
              <p>
                Professional organization offering patient resources on dermatologic procedures 
                and post-operative care.
              </p>
              <a href="https://www.asds.net" target="_blank" rel="noopener noreferrer" className="external-link">
                Visit ASDS →
              </a>
            </div>
          </div>
        </div>

        <div className="resource-category">
          <h3>Government Health Resources</h3>
          <div className="resource-links">
            <div className="resource-item">
              <h4>National Cancer Institute (NCI)</h4>
              <p>
                Comprehensive information about skin cancer types, treatments, and prevention 
                from the National Institutes of Health.
              </p>
              <a href="https://www.cancer.gov/types/skin" target="_blank" rel="noopener noreferrer" className="external-link">
                Visit NCI →
              </a>
            </div>
            
            <div className="resource-item">
              <h4>Centers for Disease Control and Prevention (CDC)</h4>
              <p>
                Skin cancer prevention guidelines, statistics, and public health recommendations.
              </p>
              <a href="https://www.cdc.gov/cancer/skin" target="_blank" rel="noopener noreferrer" className="external-link">
                Visit CDC →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="understanding-mohs" className="resource-section">
        <h2>Understanding Mohs Surgery</h2>
        <p>
          Comprehensive information about the Mohs surgical technique, its benefits, 
          and what patients can expect during the process.
        </p>
        
        <div className="resource-category">
          <h3>Educational Materials</h3>
          <div className="resource-links">
            <div className="resource-item">
              <h4>What is Mohs Surgery?</h4>
              <p>
                Detailed explanation of the Mohs micrographic surgery technique, including 
                why it's considered the gold standard for certain skin cancers.
              </p>
              <div className="key-points">
                <ul>
                  <li>Highest cure rates for basal and squamous cell carcinomas</li>
                  <li>Tissue-sparing technique minimizes scarring</li>
                  <li>Real-time microscopic examination ensures complete removal</li>
                  <li>Same-day procedure with immediate reconstruction options</li>
                </ul>
              </div>
            </div>
            
            <div className="resource-item">
              <h4>Recovery Timeline and Expectations</h4>
              <p>
                Understanding the healing process helps set realistic expectations for recovery.
              </p>
              <div className="timeline-overview">
                <div className="timeline-phase">
                  <h5>First 24-48 Hours</h5>
                  <p>Initial healing, wound protection crucial</p>
                </div>
                <div className="timeline-phase">
                  <h5>1-2 Weeks</h5>
                  <p>Suture removal, continued wound care</p>
                </div>
                <div className="timeline-phase">
                  <h5>2-6 Weeks</h5>
                  <p>Tissue remodeling, gradual activity resumption</p>
                </div>
                <div className="timeline-phase">
                  <h5>3-12 Months</h5>
                  <p>Scar maturation and final cosmetic outcome</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="resource-category">
          <h3>Closure Methods</h3>
          <div className="closure-methods">
            <div className="method-item">
              <h4>Primary Closure (Sutures)</h4>
              <p>Direct closure of wound edges with stitches - most common method</p>
            </div>
            <div className="method-item">
              <h4>Second Intention Healing</h4>
              <p>Allowing wound to heal naturally from bottom up - good for certain locations</p>
            </div>
            <div className="method-item">
              <h4>Skin Grafts</h4>
              <p>Transplanting skin from another body area for large defects</p>
            </div>
            <div className="method-item">
              <h4>Skin Flaps</h4>
              <p>Moving adjacent tissue to cover the surgical site</p>
            </div>
          </div>
        </div>
      </section>

      <section id="wound-healing-science" className="resource-section">
        <h2>Wound Healing Science</h2>
        <p>
          Understanding the biological processes behind wound healing can help patients 
          better participate in their recovery and recognize normal vs. abnormal healing.
        </p>
        
        <div className="resource-category">
          <h3>Phases of Wound Healing</h3>
          <div className="healing-phases">
            <div className="phase-item">
              <h4>1. Hemostasis (0-24 hours)</h4>
              <p>
                Blood clotting and initial wound sealing. Platelets aggregate to stop bleeding 
                and form the foundation for healing.
              </p>
            </div>
            <div className="phase-item">
              <h4>2. Inflammatory Phase (1-5 days)</h4>
              <p>
                White blood cells clean the wound of bacteria and debris. Some redness, 
                swelling, and warmth are normal during this phase.
              </p>
            </div>
            <div className="phase-item">
              <h4>3. Proliferative Phase (5-21 days)</h4>
              <p>
                New tissue formation including collagen production, blood vessel growth, 
                and wound contraction.
              </p>
            </div>
            <div className="phase-item">
              <h4>4. Remodeling Phase (21 days-2 years)</h4>
              <p>
                Scar tissue strengthening and reorganization. Final appearance may take 
                6-12 months to fully develop.
              </p>
            </div>
          </div>
        </div>

        <div className="resource-category">
          <h3>Factors Affecting Healing</h3>
          <div className="factors-grid">
            <div className="factor-positive">
              <h4>Factors That Promote Healing</h4>
              <ul>
                <li>Adequate nutrition (protein, vitamins C, A, zinc)</li>
                <li>Proper hydration</li>
                <li>Good blood circulation</li>
                <li>Appropriate wound moisture</li>
                <li>Following wound care instructions</li>
                <li>Adequate rest and sleep</li>
                <li>Controlled diabetes</li>
              </ul>
            </div>
            <div className="factor-negative">
              <h4>Factors That Impair Healing</h4>
              <ul>
                <li>Smoking and nicotine use</li>
                <li>Poor nutrition or malnutrition</li>
                <li>Certain medications (steroids, chemotherapy)</li>
                <li>Infection</li>
                <li>Advanced age</li>
                <li>Chronic diseases (diabetes, vascular disease)</li>
                <li>Excessive tension on wound edges</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skin-cancer-education" className="resource-section">
        <h2>Skin Cancer Education</h2>
        <p>
          Knowledge about skin cancer prevention and early detection is crucial for 
          long-term skin health and preventing future occurrences.
        </p>
        
        <div className="resource-category">
          <h3>Prevention Strategies</h3>
          <div className="prevention-tips">
            <div className="prevention-item">
              <h4>Sun Protection</h4>
              <ul>
                <li>Use broad-spectrum SPF 30+ sunscreen daily</li>
                <li>Reapply every 2 hours and after swimming/sweating</li>
                <li>Seek shade during peak UV hours (10 AM - 4 PM)</li>
                <li>Wear protective clothing and wide-brimmed hats</li>
                <li>Use UV-blocking sunglasses</li>
              </ul>
            </div>
            <div className="prevention-item">
              <h4>Lifestyle Modifications</h4>
              <ul>
                <li>Avoid tanning beds and UV lamps</li>
                <li>Don't burn - even one severe sunburn increases risk</li>
                <li>Be extra careful around reflective surfaces (water, sand, snow)</li>
                <li>Check UV index before outdoor activities</li>
                <li>Consider sun-protective clothing for extended outdoor time</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="resource-category">
          <h3>Self-Examination Guidelines</h3>
          <div className="examination-guide">
            <div className="abcde-method">
              <h4>The ABCDE Method for Mole Examination</h4>
              <div className="abcde-grid">
                <div className="abcde-item">
                  <h5>A - Asymmetry</h5>
                  <p>One half doesn't match the other half</p>
                </div>
                <div className="abcde-item">
                  <h5>B - Border</h5>
                  <p>Irregular, scalloped, or poorly defined borders</p>
                </div>
                <div className="abcde-item">
                  <h5>C - Color</h5>
                  <p>Multiple colors or uneven color distribution</p>
                </div>
                <div className="abcde-item">
                  <h5>D - Diameter</h5>
                  <p>Larger than 6mm (size of a pencil eraser)</p>
                </div>
                <div className="abcde-item">
                  <h5>E - Evolving</h5>
                  <p>Changes in size, shape, color, or symptoms</p>
                </div>
              </div>
            </div>
            
            <div className="examination-frequency">
              <h4>Examination Schedule</h4>
              <ul>
                <li><strong>Monthly self-exams:</strong> Full body check in good lighting</li>
                <li><strong>Annual dermatologist visits:</strong> Professional skin examination</li>
                <li><strong>More frequent visits:</strong> If you have risk factors or history</li>
                <li><strong>Immediate evaluation:</strong> Any concerning changes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="practical-resources" className="resource-section">
        <h2>Practical Resources</h2>
        <p>
          Helpful tools, apps, and resources for managing your wound care and skin health.
        </p>
        
        <div className="resource-category">
          <h3>Where to Buy Wound Care Supplies</h3>
          <div className="supply-sources">
            <div className="source-item">
              <h4>Pharmacies</h4>
              <ul>
                <li>CVS, Walgreens, Rite Aid</li>
                <li>Hospital and medical center pharmacies</li>
                <li>Local independent pharmacies</li>
              </ul>
            </div>
            <div className="source-item">
              <h4>Online Retailers</h4>
              <ul>
                <li>Amazon, eBay for basic supplies</li>
                <li>Medical supply companies</li>
                <li>Pharmacy websites with delivery</li>
              </ul>
            </div>
            <div className="source-item">
              <h4>Medical Supply Stores</h4>
              <ul>
                <li>Specialized wound care suppliers</li>
                <li>Durable medical equipment (DME) providers</li>
                <li>Hospital supply stores</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="resource-category">
          <h3>Helpful Mobile Apps</h3>
          <div className="app-recommendations">
            <div className="app-item">
              <h4>UV Index Apps</h4>
              <p>Monitor daily UV levels to plan sun protection</p>
              <ul>
                <li>Weather apps with UV index</li>
                <li>EPA SunWise UV Index</li>
                <li>Local weather service apps</li>
              </ul>
            </div>
          </div>
        </div>

      </section>

      <section id="research-studies" className="resource-section">
        <h2>Research & Studies</h2>
        <p>
          Stay informed about the latest scientific advances in wound healing, 
          Mohs surgery techniques, and skin cancer treatment.
        </p>
        
        <div className="resource-category">
          <h3>Key Research Areas</h3>
          <div className="research-topics">
            <div className="topic-item">
              <h4>Wound Healing Optimization</h4>
              <p>
                Studies on improving healing times, reducing scarring, and optimizing 
                post-operative care protocols.
              </p>
            </div>
            <div className="topic-item">
              <h4>Mohs Surgery Techniques</h4>
              <p>
                Research on surgical refinements, reconstruction methods, and 
                patient outcome improvements.
              </p>
            </div>
            <div className="topic-item">
              <h4>Scar Prevention and Treatment</h4>
              <p>
                Investigations into minimizing scarring, improving cosmetic outcomes, 
                and scar revision techniques.
              </p>
            </div>
            <div className="topic-item">
              <h4>Prevention Strategies</h4>
              <p>
                Studies on skin cancer prevention, early detection methods, 
                and risk factor identification.
              </p>
            </div>
          </div>
        </div>

        <div className="resource-category">
          <h3>Accessing Research</h3>
          <div className="research-access">
            <div className="access-item">
              <h4>PubMed</h4>
              <p>
                Free access to medical literature and research abstracts from the 
                National Library of Medicine.
              </p>
              <a href="https://pubmed.ncbi.nlm.nih.gov" target="_blank" rel="noopener noreferrer" className="external-link">
                Visit PubMed →
              </a>
            </div>
            <div className="access-item">
              <h4>ClinicalTrials.gov</h4>
              <p>
                Database of clinical trials investigating new treatments and techniques 
                for skin cancer and wound healing.
              </p>
              <a href="https://clinicaltrials.gov" target="_blank" rel="noopener noreferrer" className="external-link">
                Visit ClinicalTrials.gov →
              </a>
            </div>
          </div>
        </div>

        <div className="resource-category">
          <h3>Evidence-Based Practice</h3>
          <div className="evidence-info">
            <h4>What Makes Good Evidence?</h4>
            <ul>
              <li><strong>Peer-reviewed studies:</strong> Research reviewed by experts in the field</li>
              <li><strong>Randomized controlled trials:</strong> Gold standard for testing treatments</li>
              <li><strong>Meta-analyses:</strong> Studies that combine results from multiple trials</li>
              <li><strong>Professional guidelines:</strong> Evidence-based recommendations from medical societies</li>
              <li><strong>Systematic reviews:</strong> Comprehensive analysis of existing research</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="professional-development">
        <h2>For Healthcare Professionals</h2>
        <p>
          Resources for healthcare providers involved in Mohs surgery and wound care.
        </p>
        
        <div className="resource-category">
          <h3>Continuing Education</h3>
          <div className="education-resources">
            <div className="education-item">
              <h4>Professional Training Programs</h4>
              <ul>
                <li>Mohs surgery fellowships</li>
                <li>Dermatology residency programs</li>
                <li>Wound care certification courses</li>
                <li>Dermatopathology training</li>
              </ul>
            </div>
            <div className="education-item">
              <h4>Conferences and Meetings</h4>
              <ul>
                <li>American College of Mohs Surgery Annual Meeting</li>
                <li>American Academy of Dermatology meetings</li>
                <li>Wound Healing Society conferences</li>
                <li>Regional dermatology symposiums</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="resource-category">
          <h3>Practice Guidelines</h3>
          <div className="guidelines-info">
            <h4>Key Professional Guidelines</h4>
            <ul>
              <li>ACMS Guidelines for Mohs Micrographic Surgery</li>
              <li>AAD Practice Guidelines for Skin Cancer Treatment</li>
              <li>Wound Care Society Best Practice Recommendations</li>
              <li>ASDS Guidelines for Dermatologic Surgery</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="disclaimer-section">
        <h2>Medical Disclaimer</h2>
        <div className="disclaimer-box">
          <p>
            <strong>Important:</strong> The information provided in these resources is for educational 
            purposes only and should not replace professional medical advice. Always consult with 
            your healthcare provider for personalized medical guidance and treatment decisions.
          </p>
          <p>
            While we strive to provide links to reputable sources, we do not control the content 
            of external websites and cannot guarantee their accuracy or availability.
          </p>
        </div>
      </section>

      <section className="quick-navigation">
        <h2>Quick Navigation</h2>
        <div className="nav-grid">
          <a href="#professional-organizations" className="nav-card">
            <h3>Professional Organizations</h3>
            <p>Medical societies and official guidelines</p>
          </a>
          <a href="#understanding-mohs" className="nav-card">
            <h3>Understanding Mohs Surgery</h3>
            <p>Comprehensive procedure information</p>
          </a>
          <a href="#wound-healing-science" className="nav-card">
            <h3>Wound Healing Science</h3>
            <p>Biology and research behind healing</p>
          </a>
          <a href="#skin-cancer-education" className="nav-card">
            <h3>Skin Cancer Education</h3>
            <p>Prevention and detection resources</p>
          </a>
          <a href="#practical-resources" className="nav-card">
            <h3>Practical Resources</h3>
            <p>Supplies, apps, and tools</p>
          </a>
          <a href="#research-studies" className="nav-card">
            <h3>Research & Studies</h3>
            <p>Latest scientific findings</p>
          </a>
        </div>
      </section>
      
      <div className="navigation-links">
        <Link to="/" className="back-link">← Back to Home</Link>
        <Link to="/about-author" className="next-link">About the Author →</Link>
      </div>
    </div>
  );
};

export default FurtherReading;