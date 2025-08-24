import React, { useState } from "react";
import "../styles/IncubationProgramPage.css";
import nyakaziImage from "../assets/cb.webp";
import sunnyBitesImage from "../assets/cbs.webp";
import mentorshipImage from "../assets/cb.webp";
import demoImage from "../assets/cbs.webp";

const IncubationProgramPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="ip-incubation-page">
      {/* Hero Section */}
      <section className="ip-incubation-hero">
        <div className="ip-hero-overlay">
          <div className="ip-container">
            <h1> Incubation Program</h1>
            <p className="ip-hero-subtitle">
              Cultivating sustainable food enterprises for a resilient future
            </p>
            <div className="ip-hero-stats">
              <div className="ip-stat">
                <span className="ip-stat-number">3+</span>
                <span className="ip-stat-label">Startups Supported</span>
              </div>
              <div className="ip-stat">
                <span className="ip-stat-number">3M+</span>
                <span className="ip-stat-label">Seed Funding</span>
              </div>
              <div className="ip-stat">
                <span className="ip-stat-number">85%</span>
                <span className="ip-stat-label">Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="ip-program-tabs">
        <div className="ip-container">
          <div className="ip-tabs">
            <button 
              className={`ip-tab-button ${activeTab === 'overview' ? 'ip-active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Program Overview
            </button>
            <button 
              className={`ip-tab-button ${activeTab === 'success' ? 'ip-active' : ''}`}
              onClick={() => setActiveTab('success')}
            >
              Success Stories
            </button>
            <button 
              className={`ip-tab-button ${activeTab === 'apply' ? 'ip-active' : ''}`}
              onClick={() => setActiveTab('apply')}
            >
              How to Apply
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="ip-program-content">
        <div className="ip-container">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="ip-tab-content">
              <div className="ip-content-grid">
                <div className="ip-text-content">
                  <h2>Nurturing Agroecology Entrepreneurs</h2>
                  <p>
                    Our Agroecology Incubation Program supports early-stage entrepreneurs, 
                    farmer-led startups, and youth innovators working to transform food systems 
                    through sustainable, impactful enterprises that promote food sovereignty 
                    and ecological resilience.
                  </p>

                  <div className="ip-program-features">
                    <h3>What We Offer</h3>
                    <div className="ip-features-grid">
                      <div className="ip-feature-card">
                        <div className="ip-feature-icon"></div>
                        <h4>Seed Funding</h4>
                        <p>Financial support to kickstart your agroecology venture</p>
                      </div>
                      <div className="ip-feature-card">
                        <div className="ip-feature-icon"></div>
                        <h4>Expert Mentorship</h4>
                        <p>Guidance from experienced agroecology entrepreneurs</p>
                      </div>
                      <div className="ip-feature-card">
                        <div className="ip-feature-icon"></div>
                        <h4>Training & Workshops</h4>
                        <p>Business development and technical skills training</p>
                      </div>
                      <div className="ip-feature-card">
                        <div className="ip-feature-icon"></div>
                        <h4>Market Access</h4>
                        <p>Connections to local and international markets</p>
                      </div>
                    </div>
                  </div>

                  <div className="ip-program-structure">
                    <h3>Program Structure</h3>
                    <div className="ip-timeline">
                      <div className="ip-timeline-item">
                        <div className="ip-timeline-phase">Phase 1</div>
                        <div className="ip-timeline-content">
                          <h4>Ideation & Validation (3 months)</h4>
                          <p>Business model development and market research</p>
                        </div>
                      </div>
                      <div className="ip-timeline-item">
                        <div className="ip-timeline-phase">Phase 2</div>
                        <div className="ip-timeline-content">
                          <h4>Prototyping & Testing (4 months)</h4>
                          <p>Product development and pilot testing</p>
                        </div>
                      </div>
                      <div className="ip-timeline-item">
                        <div className="ip-timeline-phase">Phase 3</div>
                        <div className="ip-timeline-content">
                          <h4>Scaling & Growth (5 months)</h4>
                          <p>Market entry and growth strategy implementation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ip-image-content">
                  <img src={mentorshipImage} alt="Mentorship session in progress" />
                  <img src={demoImage} alt="Demonstration farm visit" className="ip-second-image" />
                </div>
              </div>
            </div>
          )}

          {/* Success Stories Tab */}
          {activeTab === 'success' && (
            <div className="ip-tab-content">
              <h2>Success Stories</h2>
              <p className="ip-section-intro">
                Meet the inspiring entrepreneurs who have transformed their ideas into 
                successful agroecology enterprises through our incubation program.
              </p>

              <div className="ip-success-stories">
                {/* Nyakazi Organics */}
                <div className="ip-enterprise-story">
                  <div className="ip-enterprise-header">
                    <div className="ip-enterprise-image">
                      <img src={nyakaziImage} alt="Nyakazi Organics dehydrated vegetables" />
                    </div>
                    <div className="ip-enterprise-info">
                      <h3>Nyakazi Organics</h3>
                      <p className="ip-enterprise-tagline">Premium Dehydrated Vegetables • Gilgil, Kenya</p>
                      <div className="ip-enterprise-stats">
                        <div className="ip-enterprise-stat">
                          <span className="ip-stat-value">2022</span>
                          <span className="ip-stat-label">Founded</span>
                        </div>
                        <div className="ip-enterprise-stat">
                          <span className="ip-stat-value">12+</span>
                          <span className="ip-stat-label">Products</span>
                        </div>
                        <div className="ip-enterprise-stat">
                          <span className="ip-stat-value">5</span>
                          <span className="ip-stat-label">Jobs Created</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ip-enterprise-details">
                    <div className="ip-detail-section">
                      <h4>About Nyakazi Organics</h4>
                      <p>
                        Nyakazi Organics specializes in solar-dehydrated vegetables, preserving 
                        nutritional value while extending shelf life. Founded by local women farmers 
                        in Gilgil, the enterprise addresses post-harvest losses while creating 
                        value-added products for urban markets.
                      </p>
                    </div>

                    <div className="ip-detail-section">
                      <h4>Impact & Achievements</h4>
                      <ul>
                        <li>Reduced post-harvest losses by 70% for partner farmers</li>
                        <li>Created stable income for 15 smallholder farmers</li>
                        <li>Expanded to 3 major supermarket chains in Nairobi</li>
                        <li>Won 2023 Green Innovation Award</li>
                      </ul>
                    </div>

                    <div className="ip-detail-section">
                      <h4>Product Range</h4>
                      <div className="ip-products-grid">
                        <div className="ip-product-item">Dehydrated Kale</div>
                        <div className="ip-product-item">Sun-dried Tomatoes</div>
                        <div className="ip-product-item">Vegetable Powder Mix</div>
                        <div className="ip-product-item">Herbal Seasonings</div>
                      </div>
                    </div>

                    <div className="ip-video-section">
                      <h4>Watch Their Story</h4>
                      <div className="ip-video-container">
                        <div className="ip-video-placeholder">
                          <span className="ip-video-icon">▶️</span>
                          <p>Video coming soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Organic Sunny Bites */}
                <div className="ip-enterprise-story">
                  <div className="ip-enterprise-header">
                    <div className="ip-enterprise-image">
                      <img src={sunnyBitesImage} alt="Organic Sunny Bites dehydrated fruits" />
                    </div>
                    <div className="ip-enterprise-info">
                      <h3>Organic Sunny Bites</h3>
                      <p className="ip-enterprise-tagline">Natural Dehydrated Fruits • Baringo County</p>
                      <div className="ip-enterprise-stats">
                        <div className="ip-enterprise-stat">
                          <span className="ip-stat-value">2023</span>
                          <span className="ip-stat-label">Launched</span>
                        </div>
                        <div className="ip-enterprise-stat">
                          <span className="ip-stat-value">8+</span>
                          <span className="ip-stat-label">Fruit Varieties</span>
                        </div>
                        <div className="ip-enterprise-stat">
                          <span className="ip-stat-value">7</span>
                          <span className="ip-stat-label">Youth Employed</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ip-enterprise-details">
                    <div className="ip-detail-section">
                      <h4>About Organic Sunny Bites</h4>
                      <p>
                        Organic Sunny Bites transforms surplus fruits from Baringo County into 
                        nutritious, shelf-stable snacks. Founded by a youth group, this enterprise 
                        tackles food waste while creating employment opportunities in rural areas 
                        through value addition of mangoes, pineapples, and tropical fruits.
                      </p>
                    </div>

                    <div className="ip-detail-section">
                      <h4>Impact & Achievements</h4>
                      <ul>
                        <li>Utilizes 3+ tons of surplus fruit annually</li>
                        <li>Provides market access for 25 small-scale fruit farmers</li>
                        <li>Featured in Kenya Agricultural Show 2023</li>
                        <li>Recipient of Youth Enterprise Fund grant</li>
                      </ul>
                    </div>

                    <div className="ip-detail-section">
                      <h4>Product Range</h4>
                      <div className="ip-products-grid">
                        <div className="ip-product-item">Dried Mango Slices</div>
                        <div className="ip-product-item">Pineapple Chips</div>
                        <div className="ip-product-item">Tropical Fruit Mix</div>
                        <div className="ip-product-item">Fruit Energy Bars</div>
                      </div>
                    </div>

                    <div className="ip-video-section">
                      <h4>Watch Their Story</h4>
                      <div className="ip-video-container">
                        <div className="ip-video-placeholder">
                          <span className="ip-video-icon">▶️</span>
                          <p>Video coming soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ip-impact-summary">
                <h3>Collective Impact</h3>
                <div className="ip-impact-grid">
                  <div className="ip-impact-item">
                    <span className="ip-impact-number">30+</span>
                    <span className="ip-impact-label">Jobs Created</span>
                  </div>
                  <div className="ip-impact-item">
                    <span className="ip-impact-number">40+</span>
                    <span className="ip-impact-label">Farmers Supported</span>
                  </div>
                  <div className="ip-impact-item">
                    <span className="ip-impact-number">₦2.5M+</span>
                    <span className="ip-impact-label">Annual Revenue</span>
                  </div>
                  <div className="ip-impact-item">
                    <span className="ip-impact-number">15+</span>
                    <span className="ip-impact-label">Products Developed</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Apply Tab */}
          {activeTab === 'apply' && (
            <div className="ip-tab-content">
              <div className="ip-apply-content">
                <h2>Join Our Incubation Program</h2>
                <p className="ip-section-intro">
                  Are you working on an innovative agroecology solution? We're looking for 
                  passionate entrepreneurs who want to make a difference in food systems.
                </p>

                <div className="ip-application-process">
                  <h3>Application Process</h3>
                  <div className="ip-process-steps">
                    <div className="ip-process-step">
                      <div className="ip-step-number">1</div>
                      <div className="ip-step-content">
                        <h4>Submit Application</h4>
                        <p>Complete our online application form with your business idea</p>
                      </div>
                    </div>
                    <div className="ip-process-step">
                      <div className="ip-step-number">2</div>
                      <div className="ip-step-content">
                        <h4>Selection Interview</h4>
                        <p>Participate in an interview with our selection committee</p>
                      </div>
                    </div>
                    <div className="ip-process-step">
                      <div className="ip-step-number">3</div>
                      <div className="ip-step-content">
                        <h4>Program Onboarding</h4>
                        <p>Join the next cohort and begin your incubation journey</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ip-eligibility-criteria">
                  <h3>Eligibility Criteria</h3>
                  <div className="ip-criteria-grid">
                    <div className="ip-criterion">
                      <div className="ip-criterion-icon"></div>
                      <h4>Innovation</h4>
                      <p>Novel approach to agroecology or food systems</p>
                    </div>
                    <div className="ip-criterion">
                      <div className="ip-criterion-icon"></div>
                      <h4>Impact Potential</h4>
                      <p>Clear social and environmental impact</p>
                    </div>
                    <div className="ip-criterion">
                      <div className="ip-criterion-icon"></div>
                      <h4>Scalability</h4>
                      <p>Potential for growth and replication</p>
                    </div>
                    <div className="ip-criterion">
                      <div className="ip-criterion-icon"></div>
                      <h4>Team Commitment</h4>
                      <p>Dedicated team with relevant skills</p>
                    </div>
                  </div>
                </div>

                <div className="ip-application-cta">
                  <h3>Ready to Apply?</h3>
                  <p>Take the first step toward transforming your agroecology idea into a successful enterprise</p>
                  <div className="ip-cta-buttons">
                    <button className="ip-cta-button ip-primary">
                      Apply Now
                    </button>
                    <button className="ip-cta-button ip-secondary">
                      Download Application Guide
                    </button>
                  </div>
                </div>

                <div className="ip-contact-info">
                  <h3>Have Questions?</h3>
                  <div className="ip-contact-details">
                    <div className="ip-contact-item">
                      <strong>Email:</strong>
                      <a href="mailto:incubation@seedsaverskenya.org">incubation@seedsaverskenya.org</a>
                    </div>
                    <div className="ip-contact-item">
                      <strong>Phone:</strong>
                      <a href="tel:+254712451777">+254-712-451777</a>
                    </div>
                    <div className="ip-contact-item">
                      <strong>Office Hours:</strong>
                      <span>Monday-Friday, 8:00 AM - 5:00 PM EAT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default IncubationProgramPage;