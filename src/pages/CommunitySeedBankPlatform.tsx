import React, { useState } from "react";
import "../styles/CommunitySeedBankPlatform.css";
import seedExchange from "../assets/kikopey.webp";
import farmersGroup from "../assets/cbs.webp";

const CommunitySeedBankPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedCounty, setExpandedCounty] = useState<string | null>(null);

  // Group seed banks by county
  const seedBanksByCounty = [
    { id: 'BARINGO', name: 'Baringo', count: 16, seedBanks: [
      ['1', 'Endorois Community Sb', 'BARINGO'],
      ['2', 'Namunyak Seedbank', 'BARINGO'],
      ['3', 'Chomyiet Seedbank', 'BARINGO'],
      ['4', 'Toloshie Seedbank', 'BARINGO'],
      ['5', 'Naapu Seedbank', 'BARINGO'],
      ['6', 'Kupapel Seedbank', 'BARINGO'],
      ['7', 'Sossion C. Seed Bank', 'BARINGO'],
      ['8', 'Naitoty Seed Bank', 'BARINGO'],
      ['9', 'Pasinai Farmers Seed Bank', 'BARINGO'],
      ['10', 'Kaptich Farmers Seedbank', 'BARINGO'],
      ['11', 'Ngerotet Seedbank', 'BARINGO'],
      ['12', 'Ngoipiriri', 'BARINGO'],
      ['13', 'Meoro Seed Bank', 'BARINGO'],
      ['14', 'Chemeron Seed Bank', 'BARINGO'],
      ['15', 'Lamalok Seed Bank', 'BARINGO'],
      ['16', 'Seed Savers Seedbank', 'BARINGO']
    ]},
    { id: 'NAKURU', name: 'Nakuru', count: 42, seedBanks: [
      ['17', 'Ujumbe Mpya', 'NAKURU'],
      ['18', 'Muniu Seed Bank', 'NAKURU'],
      ['19', 'United Seed Bank', 'NAKURU'],
      ['20', 'Kiahiti Seed Bank', 'NAKURU'],
      ['21', 'Belacom Seed Bank', 'NAKURU'],
      ['22', 'Mwireri Seed Bank', 'NAKURU'],
      ['23', 'Eden Community Seedbak', 'NAKURU'],
      ['24', 'Makongo Farmers Seed Bank', 'NAKURU'],
      ['25', 'Mbomboi Seed Bank', 'NAKURU'],
      ['26', 'Kiambogo Seed Bank', 'NAKURU'],
      ['27', 'Kampi Moto', 'NAKURU'],
      ['28', 'Kikopey Seed Bank', 'NAKURU'],
      ['29', 'Taka Mema Seedbank', 'NAKURU'],
      ['30', 'Tumaini Seed Bank', 'NAKURU'],
      ['31', 'Thome Organic', 'NAKURU'],
      ['32', 'Team Organic', 'NAKURU'],
      ['33', 'Songoloi Farmers Seedbank', 'NAKURU'],
      ['34', 'Mzee Wanyama Community Seedbank', 'NAKURU'],
      ['35', 'Mau Narok Seed Bank', 'NAKURU'],
      ['36', 'Kasambara Bidii', 'NAKURU'],
      ['37', 'Gilgil Towns Ship Seed Bank', 'NAKURU'],
      ['38', 'Nagum Water Jar Community Seed Bank', 'NAKURU'],
      ['39', 'Wendani Thome', 'NAKURU'],
      ['40', 'Wendani Community Seed Bank', 'NAKURU'],
      ['41', 'Kasambara Bidii Community Seed Bank', 'NAKURU'],
      ['42', 'Kigogo Community Seed Bank', 'NAKURU'],
      ['43', 'Mwiruti Seed Bank', 'NAKURU'],
      ['44', 'Mbegi Seedbank', 'NAKURU'],
      ['45', 'Good Luck Seed Bank', 'NAKURU'],
      ['46', 'Kamathatha Muoroto Seed Bank', 'NAKURU'],
      ['47', 'Maraigushu Seed Bank', 'NAKURU'],
      ['48', 'Seed Savers Central Community Seed Bank', 'NAKURU'],
      ['49', 'Kiamanji Seed Bank', 'NAKURU'],
      ['50', 'Ebenezar Seed Bank', 'NAKURU'],
      ['51', 'Gema Seed Bank', 'NAKURU'],
      ['52', 'Kambaa Self Help Group', 'NAKURU'],
      ['53', 'St John New Cbo Seed Bank', 'NAKURU'],
      ['54', 'St Catherine Seed Bank', 'NAKURU'],
      ['55', 'Mbegi Jiweze Seed Bank', 'NAKURU'],
      ['56', 'Gilgil Towns Ship Seed Bank', 'NAKURU'],
      ['57', 'Wirutire Community Seedbank', 'NAKURU'],
      ['58', 'Nyakinyua Seed Bank', 'NAKURU']
    ]},
    { id: 'KAKAMEGA', name: 'Kakamega', count: 19, seedBanks: [
      ['59', 'Eshilakwe Seed Bank', 'KAKAMEGA'],
      ['60', 'Navakholo Seed Bank', 'KAKAMEGA'],
      ['61', 'Upendo Emulakha Seed Bank', 'KAKAMEGA'],
      ['62', 'Mumias West Farmers Community Seedbank', 'KAKAMEGA'],
      ['63', 'Murumba Seedbank', 'KAKAMEGA'],
      ['64', 'Munenga Seed Bank', 'KAKAMEGA'],
      ['65', 'Munduma Seed Bank', 'KAKAMEGA'],
      ['69', 'Musanda Seed Bank', 'KAKAMEGA'],
      ['70', 'Eshironyanga Seedbank', 'KAKAMEGA'],
      ['71', 'Butere Wasafi Seed Bank', 'KAKAMEGA'],
      ['73', 'Motomwaka Seed Bank', 'KAKAMEGA'],
      ['74', 'Emukaya Seed Bank', 'KAKAMEGA'],
      ['75', 'Vision Igotse Seed Bank', 'KAKAMEGA'],
      ['76', 'Mahondo Seed Bank', 'KAKAMEGA'],
      ['83', 'Mahondo Community Seedbank', 'KAKAMEGA'],
      ['84', 'Bushieni Community Seedbank', 'KAKAMEGA'],
      ['85', 'Wambulishe Community Seedbank', 'KAKAMEGA'],
      ['86', 'Mumias West Farmers Community Seedbank', 'KAKAMEGA'],
      ['111', 'Mwiyega community seedbank', 'KAKAMEGA'],
      ['112', 'Eshilakwe group seedbank', 'KAKAMEGA']
    ]},
    // Other counties would be added here following the same pattern
    { id: 'OTHER', name: 'Other Counties', count: 35, seedBanks: [
      ['66', 'Vihiga Community Seedbank', 'VIHIGA'],
      ['67', 'Vigulu Community Seed Bank', 'VIHIGA'],
      ['68', 'Essunza Community Seed Bank', 'VIHIGA'],
      ['72', 'Mwitubwi Seed Bank', 'VIHIGA'],
      ['77', 'Bukembe Community Seed Bank', 'BUNGOMA'],
      ['78', 'Mechimeru Seedbank', 'BUNGOMA'],
      ['79', 'Bulondo Seedbank', 'BUNGOMA'],
      ['80', 'Got Osimbo Seedbank', 'SIAYA'],
      ['81', 'East Yiro Seedbank', 'SIAYA'],
      ['82', 'Ambira Seedbank', 'SIAYA'],
      ['87', 'Kabudi-Agoro Community Seedbank', 'KISUMU'],
      ['88', 'Nyando Community Seedbank', 'KISUMU'],
      ['89', 'Kabudi-Agoro Community Seedbank', 'KABUDI'],
      ['90', 'Vihiga Community Seedbank', 'VIHIGA'],
      ['91', 'Vigulu Seedbank', 'VIHIGA'],
      ['92', 'Essunza Seedbank', 'VIHIGA'],
      ['93', 'Muunduma Community Seedbank', 'KAKAMEGA'],
      ['94', 'Igotse Farmers Seedbank', 'KAKAMEGA'],
      ['95', 'Odonyo Sabuk Community Seedbank', 'MACHAKOS'],
      ['96', 'Musamba Seedbank', 'KAKAMEGA'],
      ['97', 'Sunkai Community Seedbank', 'VIHIGA'],
      ['98', 'Nooya Cga Seedbank', 'KAJIADO'],
      ['99', 'Kadara Community Seedbank', 'MURANGA'],
      ['100', 'Mwiguithanio Seedbank', 'NAKURU'],
      ['101', 'Thome Organic Seedbank', 'NAKURU'],
      ['102', 'Dondori Farmers Seedbank', 'NAKURU'],
      ['103', 'Lamu Community Seedbank', 'LAMU'],
      ['104', 'Melangine Seedbank', 'NYANDARWA'],
      ['105', 'Fifty Strong Seedbank', 'NJORO'],
      ['106', 'Katilu Community Seedbank', 'TURKANA'],
      ['107', 'Kangalita Community Seedbank', 'TURKANA'],
      ['108', 'Turkwel Community Seedbank', 'TURKANA'],
      ['109', 'Kanduku Community Seed Bank', 'KANDUKU'],
      ['110', 'Mwaani Community Seed Bank', 'MWAANI']
    ]}
  ];

  return (
    <div className="csbp-platform-page">
      {/* Hero Section */}
      <section className="csbp-hero">
        <div className="csbp-hero-overlay">
          <div className="csbp-container">
            <h1>Community Seed Bank Platform</h1>
            <p className="csbp-hero-subtitle">
              Connecting 112+ community seed banks across Kenya for seed sovereignty and biodiversity conservation
            </p>
            <div className="csbp-hero-stats">
              <div className="csbp-stat">
                <span className="csbp-stat-number">112+</span>
                <span className="csbp-stat-label">Seed Banks</span>
              </div>
              <div className="csbp-stat">
                <span className="csbp-stat-number">20+</span>
                <span className="csbp-stat-label">Counties</span>
              </div>
              <div className="csbp-stat">
                <span className="csbp-stat-number">1000+</span>
                <span className="csbp-stat-label">Seed Varieties</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="csbp-platform-tabs">
        <div className="csbp-container">
          <div className="csbp-tabs">
            <button 
              className={`csbp-tab-button ${activeTab === 'overview' ? 'csbp-active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`csbp-tab-button ${activeTab === 'network' ? 'csbp-active' : ''}`}
              onClick={() => setActiveTab('network')}
            >
              Our Network
            </button>
            <button 
              className={`csbp-tab-button ${activeTab === 'values' ? 'csbp-active' : ''}`}
              onClick={() => setActiveTab('values')}
            >
              Values & Mission
            </button>
            <button 
              className={`csbp-tab-button ${activeTab === 'contact' ? 'csbp-active' : ''}`}
              onClick={() => setActiveTab('contact')}
            >
              Contact
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="csbp-platform-content">
        <div className="csbp-container">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="csbp-tab-content">
              <div className="csbp-content-grid">
                <div className="csbp-text-content">
                  <h2>About the Platform</h2>
                  <p>
                    The Community Seed Banks Platform (CSB) is a self-organized structure within the 
                    <strong> Seed Savers Network</strong> that brings together <strong>112+ community seed banks</strong> across Kenya 
                    and beyond for knowledge sharing, collective action, and advocacy in support of 
                    seed sovereignty and agrobiodiversity conservation.
                  </p>
                  <p>
                    The CSB has grown into a powerful coordination hub, supporting the tireless efforts of 
                    these 112+ active seed banks. This incredible achievement has been made possible through 
                    the <strong>Seed Exchange Kenya initiative and the innovative Seed Exchange App</strong>, which have opened 
                    new doors for seed sharing, collaboration, and empowerment ensuring that the legacy of 
                    diverse, indigenous seeds thrives for generations to come.
                  </p>
                  <p>
                    It was formed after national dialogue sessions with farmers from <strong>20+ counties</strong> including
                    Kakamega, Bungoma, Nakuru, Embu, Siaya, Turkana, and more.
                  </p>

                  <div className="csbp-impact-section">
                    <h3>Our Impact</h3>
                    <div className="csbp-impact-grid">
                      <div className="csbp-impact-card">
                        <div className="csbp-impact-icon"></div>
                        <h4>Seed Preservation</h4>
                        <p>Preserving thousands of indigenous seed varieties from extinction</p>
                      </div>
                      <div className="csbp-impact-card">
                        <div className="csbp-impact-icon"></div>
                        <h4>Community Building</h4>
                        <p>Connecting farmers across Kenya for knowledge exchange</p>
                      </div>
                      <div className="csbp-impact-card">
                        <div className="csbp-impact-icon"></div>
                        <h4>Biodiversity</h4>
                        <p>Protecting agricultural biodiversity for future generations</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="csbp-image-content">
                  <img src={seedExchange} alt="Farmers exchanging seeds" />
                </div>
              </div>
            </div>
          )}

          {/* Network Tab */}
          {activeTab === 'network' && (
            <div className="csbp-tab-content">
              <h2>Our Seed Bank Network</h2>
              <p className="csbp-section-intro">
                Explore our growing network of 112+ community seed banks spread across Kenya, 
                each playing a vital role in preserving our agricultural heritage.
              </p>

              <div className="csbp-counties-grid">
                {seedBanksByCounty.map(county => (
                  <div key={county.id} className="csbp-county-card">
                    <div 
                      className="csbp-county-header"
                      onClick={() => setExpandedCounty(expandedCounty === county.id ? null : county.id)}
                    >
                      <h3>{county.name} County</h3>
                      <span className="csbp-county-stats">{county.count} Seed Banks</span>
                      <span className="csbp-expand-icon">
                        {expandedCounty === county.id ? '−' : '+'}
                      </span>
                    </div>
                    
                    {expandedCounty === county.id && (
                      <div className="csbp-county-seedbanks">
                        <div className="csbp-seedbanks-grid">
                          {county.seedBanks.map(([id, name]) => (
                            <div key={id} className="csbp-seedbank-item">
                              <span className="csbp-seedbank-id">{id}</span>
                              <span className="csbp-seedbank-name">{name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="csbp-map-section">
                <h3>Network Map</h3>
                <p>Our seed banks are strategically located across Kenya to maximize impact and accessibility</p>
                <div className="csbp-map-container">
                  <iframe
                    src="https://www.google.com/maps/d/u/0/embed?mid=1opDBI-BQlTTirgnvYyXccPmsuEpw85k&z=7"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Seed Savers Kenya Map"
                  ></iframe>
                </div>
              </div>
            </div>
          )}

          {/* Values Tab */}
          {activeTab === 'values' && (
            <div className="csbp-tab-content">
              <div className="csbp-values-content">
                <div className="csbp-mission-section">
                  <h2>Mission & Values</h2>
                  <div className="csbp-mission-card">
                    <h3>Our Mission</h3>
                    <p>
                      To strengthen the capacity, collaboration, and advocacy of community seed banks by promoting inclusive
                      governance, farmer-led seed systems, and preservation of indigenous seeds.
                    </p>
                  </div>
                </div>

                <div className="csbp-values-section">
                  <h3>Core Values</h3>
                  <div className="csbp-values-grid">
                    <div className="csbp-value-card">
                      <div className="csbp-value-icon"></div>
                      <h4>Seed Sovereignty</h4>
                      <p>Right to save, use, exchange, and sell seeds</p>
                    </div>
                    <div className="csbp-value-card">
                      <div className="csbp-value-icon"></div>
                      <h4>Solidarity</h4>
                      <p>Mutual support among members</p>
                    </div>
                    <div className="csbp-value-card">
                      <div className="csbp-value-icon"></div>
                      <h4>Sustainability</h4>
                      <p>Conservation of biodiversity</p>
                    </div>
                    <div className="csbp-value-card">
                      <div className="csbp-value-icon"></div>
                      <h4>Inclusivity</h4>
                      <p>Women, youth, and marginalized group participation</p>
                    </div>
                    <div className="csbp-value-card">
                      <div className="csbp-value-icon"></div>
                      <h4>Transparency</h4>
                      <p>Accountability and open communication</p>
                    </div>
                    <div className="csbp-value-card">
                      <div className="csbp-value-icon"></div>
                      <h4>Innovation</h4>
                      <p>Learning through training and seed fairs</p>
                    </div>
                  </div>
                </div>

                <div className="csbp-governance-section">
                  <h3>Governance & Operations</h3>
                  <div className="csbp-governance-content">
                    <img src={farmersGroup} alt="Farmers in governance meeting" />
                    <div className="csbp-governance-list">
                      <ul>
                        <li>Led by elected representatives from various regions</li>
                        <li>Holds biannual leadership meetings and regional seed fairs</li>
                        <li>Operates under a code of conduct and democratic representation</li>
                        <li>Farmer-led decision making processes</li>
                        <li>Transparent financial management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <div className="csbp-tab-content">
              <div className="csbp-contact-content">
                <h2>Get Involved</h2>
                <p className="csbp-contact-intro">
                  Join our network of seed guardians or learn how to start your own community seed bank
                </p>

                <div className="csbp-contact-grid">
                  <div className="csbp-contact-info">
                    <h3>Contact Information</h3>
                    <div className="csbp-contact-item">
                      <strong>Email:</strong>
                      <a href="mailto:info@seedsaverskenya.org">info@seedsaverskenya.org</a>
                    </div>
                    <div className="csbp-contact-item">
                      <strong>Phone:</strong>
                      <a href="tel:+254712451777">+254-712-451777</a>
                    </div>
                    <div className="csbp-contact-item">
                      <strong>Address:</strong>
                      <span>Seed Savers Network, Gilgil, Kenya</span>
                    </div>
                  </div>

                  <div className="csbp-involvement-options">
                    <h3>Ways to Get Involved</h3>
                    <div className="csbp-option-card">
                      <div className="csbp-option-icon"></div>
                      <h4>Start a Seed Bank</h4>
                      <p>Get guidance on establishing a community seed bank in your area</p>
                    </div>
                    <div className="csbp-option-card">
                      <div className="csbp-option-icon"></div>
                      <h4>Join Existing Network</h4>
                      <p>Connect with existing seed banks in your region</p>
                    </div>
                    <div className="csbp-option-card">
                      <div className="csbp-option-icon"></div>
                      <h4>Volunteer</h4>
                      <p>Support our mission through volunteering opportunities</p>
                    </div>
                  </div>
                </div>

                <div className="csbp-newsletter-section">
                  <h3>Stay Updated</h3>
                  <p>Subscribe to our newsletter for updates on seed conservation efforts</p>
                  <div className="csbp-newsletter-form">
                    <input type="email" placeholder="Enter your email address" />
                    <button className="csbp-subscribe-btn">Subscribe</button>
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

export default CommunitySeedBankPlatform;