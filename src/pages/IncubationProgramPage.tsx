import React, { useState } from "react";

import "../styles/IncubationProgramPage.css";

import nyakaziImage from "../assets/cb.jpg";
import sunnyBitesImage from "../assets/cbs.jpg";
import mentorshipImage from "../assets/cb.jpg";
import demoImage from "../assets/cbs.jpg";

const IncubationProgramPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="incubation-page">
      {/* Hero Section */}
      <section className="incubation-hero">
        <div className="hero-overlay">
          <div className="container">
            <h1>Agroecology Incubation Program</h1>
            <p className="hero-subtitle">
              Cultivating sustainable food enterprises for a resilient future
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Startups Supported</span>
              </div>
              <div className="stat">
                <span className="stat-number">₦5M+</span>
                <span className="stat-label">Seed Funding</span>
              </div>
              <div className="stat">
                <span className="stat-number">85%</span>
                <span className="stat-label">Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="program-tabs">
        <div className="container">
          <div className="tabs">
            <button 
              className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Program Overview
            </button>
            <button 
              className={`tab-button ${activeTab === 'success' ? 'active' : ''}`}
              onClick={() => setActiveTab('success')}
            >
              Success Stories
            </button>
            <button 
              className={`tab-button ${activeTab === 'apply' ? 'active' : ''}`}
              onClick={() => setActiveTab('apply')}
            >
              How to Apply
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="program-content">
        <div className="container">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="tab-content">
              <div className="content-grid">
                <div className="text-content">
                  <h2>Nurturing Agroecology Entrepreneurs</h2>
                  <p>
                    Our Agroecology Incubation Program supports early-stage entrepreneurs, 
                    farmer-led startups, and youth innovators working to transform food systems 
                    through sustainable, impactful enterprises that promote food sovereignty 
                    and ecological resilience.
                  </p>

                  <div className="program-features">
                    <h3>What We Offer</h3>
                    <div className="features-grid">
                      <div className="feature-card">
                        <div className="feature-icon">💰</div>
                        <h4>Seed Funding</h4>
                        <p>Financial support to kickstart your agroecology venture</p>
                      </div>
                      <div className="feature-card">
                        <div className="feature-icon">👥</div>
                        <h4>Expert Mentorship</h4>
                        <p>Guidance from experienced agroecology entrepreneurs</p>
                      </div>
                      <div className="feature-card">
                        <div className="feature-icon">🌱</div>
                        <h4>Training & Workshops</h4>
                        <p>Business development and technical skills training</p>
                      </div>
                      <div className="feature-card">
                        <div className="feature-icon">📈</div>
                        <h4>Market Access</h4>
                        <p>Connections to local and international markets</p>
                      </div>
                    </div>
                  </div>

                  <div className="program-structure">
                    <h3>Program Structure</h3>
                    <div className="timeline">
                      <div className="timeline-item">
                        <div className="timeline-phase">Phase 1</div>
                        <div className="timeline-content">
                          <h4>Ideation & Validation (3 months)</h4>
                          <p>Business model development and market research</p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-phase">Phase 2</div>
                        <div className="timeline-content">
                          <h4>Prototyping & Testing (4 months)</h4>
                          <p>Product development and pilot testing</p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-phase">Phase 3</div>
                        <div className="timeline-content">
                          <h4>Scaling & Growth (5 months)</h4>
                          <p>Market entry and growth strategy implementation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image-content">
                  <img src={mentorshipImage} alt="Mentorship session in progress" />
                  <img src={demoImage} alt="Demonstration farm visit" className="second-image" />
                </div>
              </div>
            </div>
          )}

          {/* Success Stories Tab */}
          {activeTab === 'success' && (
            <div className="tab-content">
              <h2>Success Stories</h2>
              <p className="section-intro">
                Meet the inspiring entrepreneurs who have transformed their ideas into 
                successful agroecology enterprises through our incubation program.
              </p>

              <div className="success-stories">
                {/* Nyakazi Organics */}
                <div className="enterprise-story">
                  <div className="enterprise-header">
                    <div className="enterprise-image">
                      <img src={nyakaziImage} alt="Nyakazi Organics dehydrated vegetables" />
                    </div>
                    <div className="enterprise-info">
                      <h3>Nyakazi Organics</h3>
                      <p className="enterprise-tagline">Premium Dehydrated Vegetables • Gilgil, Kenya</p>
                      <div className="enterprise-stats">
                        <div className="enterprise-stat">
                          <span className="stat-value">2022</span>
                          <span className="stat-label">Founded</span>
                        </div>
                        <div className="enterprise-stat">
                          <span className="stat-value">12+</span>
                          <span className="stat-label">Products</span>
                        </div>
                        <div className="enterprise-stat">
                          <span className="stat-value">5</span>
                          <span className="stat-label">Jobs Created</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="enterprise-details">
                    <div className="detail-section">
                      <h4>About Nyakazi Organics</h4>
                      <p>
                        Nyakazi Organics specializes in solar-dehydrated vegetables, preserving 
                        nutritional value while extending shelf life. Founded by local women farmers 
                        in Gilgil, the enterprise addresses post-harvest losses while creating 
                        value-added products for urban markets.
                      </p>
                    </div>

                    <div className="detail-section">
                      <h4>Impact & Achievements</h4>
                      <ul>
                        <li>Reduced post-harvest losses by 70% for partner farmers</li>
                        <li>Created stable income for 15 smallholder farmers</li>
                        <li>Expanded to 3 major supermarket chains in Nairobi</li>
                        <li>Won 2023 Green Innovation Award</li>
                      </ul>
                    </div>

                    <div className="detail-section">
                      <h4>Product Range</h4>
                      <div className="products-grid">
                        <div className="product-item">Dehydrated Kale</div>
                        <div className="product-item">Sun-dried Tomatoes</div>
                        <div className="product-item">Vegetable Powder Mix</div>
                        <div className="product-item">Herbal Seasonings</div>
                      </div>
                    </div>

                    <div className="video-section">
                      <h4>Watch Their Story</h4>
                      <div className="video-container">
                        <iframe
                          src="https://www.youtube.com/embed/example-nyakazi"
                          title="Nyakazi Organics Success Story"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Organic Sunny Bites */}
                <div className="enterprise-story">
                  <div className="enterprise-header">
                    <div className="enterprise-image">
                      <img src={sunnyBitesImage} alt="Organic Sunny Bites dehydrated fruits" />
                    </div>
                    <div className="enterprise-info">
                      <h3>Organic Sunny Bites</h3>
                      <p className="enterprise-tagline">Natural Dehydrated Fruits • Baringo County</p>
                      <div className="enterprise-stats">
                        <div className="enterprise-stat">
                          <span className="stat-value">2023</span>
                          <span className="stat-label">Launched</span>
                        </div>
                        <div className="enterprise-stat">
                          <span className="stat-value">8+</span>
                          <span className="stat-label">Fruit Varieties</span>
                        </div>
                        <div className="enterprise-stat">
                          <span className="stat-value">7</span>
                          <span className="stat-label">Youth Employed</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="enterprise-details">
                    <div className="detail-section">
                      <h4>About Organic Sunny Bites</h4>
                      <p>
                        Organic Sunny Bites transforms surplus fruits from Baringo County into 
                        nutritious, shelf-stable snacks. Founded by a youth group, this enterprise 
                        tackles food waste while creating employment opportunities in rural areas 
                        through value addition of mangoes, pineapples, and tropical fruits.
                      </p>
                    </div>

                    <div className="detail-section">
                      <h4>Impact & Achievements</h4>
                      <ul>
                        <li>Utilizes 3+ tons of surplus fruit annually</li>
                        <li>Provides market access for 25 small-scale fruit farmers</li>
                        <li>Featured in Kenya Agricultural Show 2023</li>
                        <li>Recipient of Youth Enterprise Fund grant</li>
                      </ul>
                    </div>

                    <div className="detail-section">
                      <h4>Product Range</h4>
                      <div className="products-grid">
                        <div className="product-item">Dried Mango Slices</div>
                        <div className="product-item">Pineapple Chips</div>
                        <div className="product-item">Tropical Fruit Mix</div>
                        <div className="product-item">Fruit Energy Bars</div>
                      </div>
                    </div>

                    <div className="video-section">
                      <h4>Watch Their Story</h4>
                      <div className="video-container">
                        <iframe
                          src="https://www.youtube.com/embed/example-sunnybites"
                          title="Organic Sunny Bites Success Story"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="impact-summary">
                <h3>Collective Impact</h3>
                <div className="impact-grid">
                  <div className="impact-item">
                    <span className="impact-number">30+</span>
                    <span className="impact-label">Jobs Created</span>
                  </div>
                  <div className="impact-item">
                    <span className="impact-number">40+</span>
                    <span className="impact-label">Farmers Supported</span>
                  </div>
                  <div className="impact-item">
                    <span className="impact-number">₦2.5M+</span>
                    <span className="impact-label">Annual Revenue</span>
                  </div>
                  <div className="impact-item">
                    <span className="impact-number">15+</span>
                    <span className="impact-label">Products Developed</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Apply Tab */}
          {activeTab === 'apply' && (
            <div className="tab-content">
              <div className="apply-content">
                <h2>Join Our Incubation Program</h2>
                <p className="section-intro">
                  Are you working on an innovative agroecology solution? We're looking for 
                  passionate entrepreneurs who want to make a difference in food systems.
                </p>

                <div className="application-process">
                  <h3>Application Process</h3>
                  <div className="process-steps">
                    <div className="process-step">
                      <div className="step-number">1</div>
                      <div className="step-content">
                        <h4>Submit Application</h4>
                        <p>Complete our online application form with your business idea</p>
                      </div>
                    </div>
                    <div className="process-step">
                      <div className="step-number">2</div>
                      <div className="step-content">
                        <h4>Selection Interview</h4>
                        <p>Participate in an interview with our selection committee</p>
                      </div>
                    </div>
                    <div className="process-step">
                      <div className="step-number">3</div>
                      <div className="step-content">
                        <h4>Program Onboarding</h4>
                        <p>Join the next cohort and begin your incubation journey</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="eligibility-criteria">
                  <h3>Eligibility Criteria</h3>
                  <div className="criteria-grid">
                    <div className="criterion">
                      <h4>✅ Innovation</h4>
                      <p>Novel approach to agroecology or food systems</p>
                    </div>
                    <div className="criterion">
                      <h4>✅ Impact Potential</h4>
                      <p>Clear social and environmental impact</p>
                    </div>
                    <div className="criterion">
                      <h4>✅ Scalability</h4>
                      <p>Potential for growth and replication</p>
                    </div>
                    <div className="criterion">
                      <h4>✅ Team Commitment</h4>
                      <p>Dedicated team with relevant skills</p>
                    </div>
                  </div>
                </div>

                <div className="application-cta">
                  <h3>Ready to Apply?</h3>
                  <p>Take the first step toward transforming your agroecology idea into a successful enterprise</p>
                  <div className="cta-buttons">
                    <button className="cta-button primary">
                      Apply Now
                    </button>
                    <button className="cta-button secondary">
                      Download Application Guide
                    </button>
                  </div>
                </div>

                <div className="contact-info">
                  <h3>Have Questions?</h3>
                  <div className="contact-details">
                    <p>
                      <strong>Email:</strong>{' '}
                      <a href="mailto:incubation@seedsaverskenya.org">incubation@seedsaverskenya.org</a>
                    </p>
                    <p>
                      <strong>Phone:</strong>{' '}
                      <a href="tel:+254712451777">+254-712-451777</a>
                    </p>
                    <p>
                      <strong>Office Hours:</strong> Monday-Friday, 8:00 AM - 5:00 PM EAT
                    </p>
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