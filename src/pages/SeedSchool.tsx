import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers,FaGlobe, FaArrowRight } from 'react-icons/fa';
import '../styles/School.css';
import foundingImg from '../assets/seedschool.webp';
import founding from '../assets/seed_pic.webp';


const SeedSchool = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedSchool, setSelectedSchool] = useState(0);

  // Data for previous seed schools
  const seedSchools = [
    {
      year: '2025',
      title: '3rd African Seed School',
      location: 'Seed Savers Network Training Center, Gilgil, Kenya',
      participants: 92,
      countries: 15,
      theme: 'Strengthening African Seed Sovereignty',
      image: founding,
      highlights: [
        'Intensive training on seed conservation techniques',
        'Field visits to community seed banks',
        'Policy advocacy workshops',
        'Hands-on seed saving practices'
      ],
      outcomes: [
        'Established 5 new seed saving initiatives',
        'Created pan-African seed savers network',
        'Developed advocacy strategy for seed laws',
        'Trained 42 seed ambassadors'
      ],
      youtubeLink: 'https://youtube.com/embed/example1',
      photos: [
        '/api/placeholder/300/200',
        '/api/placeholder/300/200',
        '/api/placeholder/300/200',
        '/api/placeholder/300/200'
      ]
    },
    {
      year: '2024',
      title: '2nd African Seed School',
      location: 'Seed Savers Network Training Center, Gilgil, Kenya',
      participants: 88,
      countries: 9,
      theme: 'Foundations of Seed Saving',
      image: foundingImg,
      highlights: [
        'Basic seed conservation principles',
        'Introduction to agroecology',
        'Community seed bank establishment',
        'Participatory plant breeding'
      ],
      outcomes: [
        'Launched 3 community seed banks',
        'Formed East African seed savers alliance',
        'Documented 50 traditional varieties',
        'Trained 28 seed guardians'
      ],
      youtubeLink: 'https://youtube.com/embed/example2',
      photos: [
        '/api/placeholder/300/200',
        '/api/placeholder/300/200',
        '/api/placeholder/300/200'
      ]
    }
  ];

  return (
    <div className="seed-school-page">
      {/* Hero Section */}
      <section className="seed-school-hero">
        <div className="S-hero-overlay">
          <div className="S-container">
            <h1>Seed School Boot Camp</h1>
            <p className="S-hero-subtitle">Cultivating the next generation of seed guardians</p>
            <div className="S-hero-stats">
              <div className="S-stat">
                <FaUsers className="S-stat-icon" />
                <span>200+ Participants Trained</span>
              </div>
              <div className="S-stat">
                <FaGlobe className="S-stat-icon" />
                <span>35+ Countries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="school-tabs-section">
        <div className="container">
          <div className="school-tabs">
            <button 
              className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming School
            </button>
            <button 
              className={`tab-button ${activeTab === 'previous' ? 'active' : ''}`}
              onClick={() => setActiveTab('previous')}
            >
              Previous Schools
            </button>
            <button 
              className={`tab-button ${activeTab === 'gallery' ? 'active' : ''}`}
              onClick={() => setActiveTab('gallery')}
            >
              Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="school-content">
        <div className="container">
          {/* Upcoming School Tab */}
          {activeTab === 'upcoming' && (
            <div className="tab-content">
              <div className="upcoming-school">
                <div className="school-header">
                  <h2> 4th Seed School Boot Camp 2026</h2>
                  <div className="school-details">
                    <div className="detail-item">
                      <FaCalendarAlt className="detail-icon" />
                      <span>13th - 24th, April 2026</span>
                    </div>
                    <div className="detail-item">
                      <FaMapMarkerAlt className="detail-icon" />
                      <span>Seed Savers Network Training Center, Gilgil, Kenya</span>
                    </div>
                    <div className="detail-item">
                      <FaUsers className="detail-icon" />
                      <span>70+ Participants Expected</span>
                    </div>
                  </div>
                </div>

                <div className="school-description">
                  <h3>Theme: "Rooted in Seeds, Led by Farmers: Building a Farmer-Led Seed Sovereignty Movement"</h3>
                  <p>
                    The 2026 Seed Boot Camp program  is an immersive, hands-on learning experience designed for individuals
                     and institutions seeking to deeply understand farmer-managed seed systems, agroecology, and farmer-led advocacy.
                      Rooted in real community practice, the Boot Camp brings participants face to face with farmers, seed custodians, 
                      and grassroots movements that are actively shaping seed and food sovereignty in Kenya.
                  </p>
                  
                  <div className="program-highlights">
                    <h4>Program Highlights</h4>
                    <div className="highlight-grid">
                      <div className="highlight-card">
                        <div className="highlight-icon"></div>
                        <h5>Engagements</h5>
                        <p>Engage in hands-on field learning within farming communities</p>
                      </div>
                      <div className="highlight-card">
                        <div className="highlight-icon"></div>
                        <h5>Seed Banking</h5>
                        <p>Interact with lead farmers, seed custodians, and community seed banks</p>
                      </div>
                      <div className="highlight-card">
                        <div className="highlight-icon"></div>
                        <h5>Participation </h5>
                        <p>Participate in practical sessions on seed saving, selection, storage, and documentation</p>
                      </div>
                      <div className="highlight-card">
                        <div className="highlight-icon"></div>
                        <h5>policy Advocacy </h5>
                        <p>Reflect on the role of policy, courts, and social movements in advancing seed sovereignty</p>
                      </div>
                      <div className="highlight-card">
                        <div className="highlight-icon"></div>
                        <h5>Farmer led Approach</h5>
                        <p>Learn how farmers organize, advocate, and defend their rights at local and national levels</p>
                      </div>
                    </div>
                  </div>

                  <div className="registration-section">
                    <h4>Registration Information</h4>
                    <div className="registration-details">
                      <div className="reg-detail">
                        <h5>Who Should Apply</h5>
                        <ul>
                          <li>Farmers and seed custodians</li>
                          <li>Organisations seeking to support farmers' participation or capacity build their team on seed issues.</li>
                          <li>Agricultural extension officers</li>
                          <li>NGO staff working on food sovereignty</li>
                          <li>Researchers and students in agriculture</li>
                          <li>Youth and community organizers</li>
                          <li>Development partners and institutions interested in agroecology and seed systems</li>
                        </ul>
                      </div>
                      <div className="reg-detail">
                        <h5>Costs</h5>
                        <ul>
                          <li>Accommodation,Meals & Tuition: $1000 (For the Whole Period) </li>
                          <li>Send your Application by : <strong>6th April</strong></li>

                        </ul>
                      </div>
                      
                    </div>
                    <div className="cta-buttons">
                      <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdHr_D9vx44oEomKXtq-69e-Q98xJe9jSv_6XjQVxJoClI1Bw/viewform" target="_blank" className="btn-primary">
                        Apply Now <FaArrowRight />
                      </Link>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Previous Schools Tab */}
          {activeTab === 'previous' && (
            <div className="tab-content">
              <div className="previous-schools">
                <h2>Previous Seed Schools</h2>
                <p className="section-intro">
                  Our previous seed schools have trained over 200 participants from 35  countries, 
                  creating a powerful network of seed guardians working to preserve  agricultural heritage.
                </p>

                <div className="schools-selector">
                  {seedSchools.map((school, index) => (
                    <button
                      key={index}
                      className={`school-selector-btn ${selectedSchool === index ? 'active' : ''}`}
                      onClick={() => setSelectedSchool(index)}
                    >
                      {school.year} Seed School
                    </button>
                  ))}
                </div>

                {seedSchools[selectedSchool] && (
                  <div className="school-detail">
                    <div className="school-banner">
                      <img src={seedSchools[selectedSchool].image} alt={seedSchools[selectedSchool].title} />
                      <div className="banner-overlay">
                        <h3>{seedSchools[selectedSchool].title}</h3>
                        <p>{seedSchools[selectedSchool].theme}</p>
                      </div>
                    </div>

                    <div className="school-stats">
                      <div className="stat-card">
                        <FaMapMarkerAlt className="stat-icon" />
                        <div className="stat-content">
                          <h4>Location</h4>
                          <p>{seedSchools[selectedSchool].location}</p>
                        </div>
                      </div>
                      <div className="stat-card">
                        <FaUsers className="stat-icon" />
                        <div className="stat-content">
                          <h4>Participants</h4>
                          <p>{seedSchools[selectedSchool].participants} from {seedSchools[selectedSchool].countries} countries</p>
                        </div>
                      </div>
                    </div>

                    <div className="school-content-grid">
                      <div className="content-column">
                        <h4>Program Highlights</h4>
                        <ul className="highlight-list">
                          {seedSchools[selectedSchool].highlights.map((highlight, idx) => (
                            <li key={idx}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="content-column">
                        <h4>Key Outcomes</h4>
                        <ul className="outcome-list">
                          {seedSchools[selectedSchool].outcomes.map((outcome, idx) => (
                            <li key={idx}>{outcome}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {seedSchools[selectedSchool].youtubeLink && (
                      <div className="video-section">
  <h4>Watch the Recap</h4>
  <div className="video-container">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/zCtXqpJgXDk?si=pZ0h3Mtqbz_9V2RT"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="video-iframe"
    ></iframe>
  </div>
</div>

                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className="tab-content">
              <div className="gallery-section">
                <h2>Seed School Gallery</h2>
                <p className="section-intro">
                  Explore moments from our previous Seed Schools through photos and videos that capture 
                  the learning, sharing, and community building that happens during these transformative events.
                </p>

                <div className="gallery-selector">
                  {seedSchools.map((school, index) => (
                    <button
                      key={index}
                      className={`gallery-selector-btn ${selectedSchool === index ? 'active' : ''}`}
                      onClick={() => setSelectedSchool(index)}
                    >
                      {school.year} Gallery
                    </button>
                  ))}
                </div>

                {seedSchools[selectedSchool] && (
                  <div className="gallery-content">
                    <h3>{seedSchools[selectedSchool].title} Gallery</h3>
                    
                                         <div className="video-section">
  <h4>Watch the Recap</h4>
  <div className="video-container">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/5JWQw6SEEjw?si=ef6WHP92dvQ6dPzb"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="video-iframe"
    ></iframe>
  </div>
</div>

                   
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>What Participants Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The Seed School transformed my understanding of seed sovereignty. I returned to my community and established our first community seed bank."</p>
              </div>
              <div className="testimonial-author">
                <h4>Robert Agwank</h4>
                <p>Uganda, 2025 Participant</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The connections I made with other seed savers across Africa have been invaluable. We continue to share seeds and knowledge."</p>
              </div>
              <div className="testimonial-author">
                <h4>Irene Kiplangat</h4>
                <p>Baringo, 2025 Participant</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"This training gave me the tools to advocate for farmers' seed rights in my country. The policy sessions were particularly impactful."</p>
              </div>
              <div className="testimonial-author">
                <h4>Akasa Andembo</h4>
                <p>Uganda, 2025 Participant</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeedSchool;