import React, { useState, useEffect } from 'react';
import { 
  FaArrowRight, FaArrowLeft, FaMapMarkerAlt, FaClock, FaUsers, FaGlobe,
  FaLeaf, FaHandsHelping, FaSeedling, FaGraduationCap, FaHeart, 
  FaShieldAlt, FaUsers as FaCommunity, FaCalendarCheck,
} from 'react-icons/fa';
import '../styles/VolunteerPage.css';

// Import images
import VolunteerHero from '../assets/hero_1.webp';
import SeedBankVisit from '../assets/kikopey.webp';
import FarmingHands from '../assets/harvest_1.webp';
import CommunityWork from '../assets/cb.webp';
import SeedWorkshop from '../assets/seeds.webp';
import AgroecologyClass from '../assets/holding.webp';
import Harvesting from '../assets/winowing.webp';
import LandscapeView from '../assets/hero_1.webp';
import GlobalImage from '../assets/hero_1.webp';
import VolunteerWork from '../assets/hero_1.webp';

interface VolunteerOpportunity {
  id: number;
  title: string;
  location: string;
  duration: string;
  image: string;
  description: string;
  groupSize: string;
  category: string;
}

const VolunteerPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  const opportunities: VolunteerOpportunity[] = [
    {
      id: 1,
      title: "Global Fellowship Program",
      location: "Nakuru & Surrounding Counties",
      duration: "Minimum 2 weeks",
      image: GlobalImage,
      description: "Immersive agroecology and seed conservation fellowship for international students, researchers, and professionals.",
      groupSize: "6-12 participants",
      category: "Global Fellowship"
    },
    {
      id: 2,
      title: "Seed Bank Conservation",
      location: "Community Seed Banks",
      duration: "1-4 weeks",
      image: SeedBankVisit,
      description: "Learn seed conservation techniques, understand seed sovereignty movements, and support community seed banking initiatives.",
      groupSize: "4-8 participants",
      category: "Seed Work"
    },
    {
      id: 3,
      title: "Indigenous Seeds Workshop",
      location: "SSN Learning Centre",
      duration: "1-2 weeks",
      image: SeedWorkshop,
      description: "Hands-on experience with indigenous seed varieties, selection techniques, and traditional preservation methods.",
      groupSize: "6-10 participants",
      category: "Workshop"
    },
    {
      id: 4,
      title: "Community Agroecology",
      location: "Farmer Communities",
      duration: "2-4 weeks",
      image: CommunityWork,
      description: "Participate in farmer group meetings, discuss challenges, and share solutions in agroecological farming systems.",
      groupSize: "8-12 participants",
      category: "Community Engagement"
    },
    {
      id: 5,
      title: "Traditional Farming Systems",
      location: "SSN Landscape",
      duration: "1-3 weeks",
      image: FarmingHands,
      description: "Study indigenous farming knowledge, intercropping systems, and natural resource management practices.",
      groupSize: "5-10 participants",
      category: "Farming"
    },
    {
      id: 6,
      title: "Agroecology Learning Exchange",
      location: "Multiple Counties",
      duration: "1-2 weeks",
      image: AgroecologyClass,
      description: "Expert-led workshops on agroecological principles, design thinking, and practical applications in East African context.",
      groupSize: "10-15 participants",
      category: "Learning Exchange"
    },
    {
      id: 7,
      title: "Harvest & Post-Harvest",
      location: "Host Farms",
      duration: "1-3 weeks",
      image: Harvesting,
      description: "Hands-on experience in harvesting techniques, seed cleaning, drying, and proper storage methods.",
      groupSize: "4-8 participants",
      category: "Farming"
    },
    {
      id: 8,
      title: "Rural Landscape Immersion",
      location: "SSN Landscape Communities",
      duration: "1-2 weeks",
      image: LandscapeView,
      description: "Guided walks and cultural immersion within the SSN landscape. Connect with host farming families.",
      groupSize: "2-6 participants",
      category: "Cultural Exchange"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setCardsToShow(1);
      } else if (window.innerWidth <= 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, opportunities.length - cardsToShow) : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= opportunities.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  const handleContactUs = () => {
    window.location.href = '/contact';
  };

  const handleLearnMore = () => {
    window.open('https://agro-tourism.seedsaverskenya.org/packages', '_blank');
  };

  const handleApplyNow = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="volunteer-page">
      {/* Hero Section */}
      <section className="vp-hero">
        <div className="vp-hero-overlay"></div>
        <img src={VolunteerHero} alt="Volunteers working with community" className="vp-hero-bg" />
        <div className="vp-hero-content">
          <div className="vp-hero-container">
            <span className="vp-hero-badge">Join Our Mission</span>
            <h1 className="vp-hero-title">
              Volunteer with Seed Savers<br />
              <span>Network Kenya</span>
            </h1>
            <p className="vp-hero-subtitle">
              Empower communities, preserve indigenous seeds, and promote sustainable agriculture 
              through hands-on agroecology programs in rural Kenya.
            </p>
            <div className="vp-hero-buttons">
              <button onClick={handleApplyNow} className="vp-btn vp-btn-primary">
                Apply Now <FaArrowRight />
              </button>
              <button onClick={handleLearnMore} className="vp-btn vp-btn-outline">
                Learn More
              </button>
            </div>
            <div className="vp-hero-stats">
              <div className="vp-stat">
                <span className="vp-stat-number">400+</span>
                <span className="vp-stat-label">Communities Supported</span>
              </div>
              <div className="vp-stat">
                <span className="vp-stat-number">17+</span>
                <span className="vp-stat-label">Years of Impact</span>
              </div>
              <div className="vp-stat">
                <span className="vp-stat-number">50+</span>
                <span className="vp-stat-label">International Volunteers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="vp-why">
        <div className="vp-container">
          <div className="vp-section-header">
            <span className="vp-section-tag">Why Join Us</span>
            <h2 className="vp-section-title">Make a Lasting Impact in Kenya</h2>
            <p className="vp-section-subtitle">
              Whether you're a student, researcher, or professional, your contribution helps preserve 
              agricultural biodiversity and strengthen food sovereignty.
            </p>
          </div>
          <div className="vp-why-grid">
            <div className="vp-why-card">
              <div className="vp-why-icon"><FaSeedling /></div>
              <h3>Preserve Indigenous Seeds</h3>
              <p>Work directly with community seed banks to protect and promote traditional seed varieties for future generations.</p>
            </div>
            <div className="vp-why-card">
              <div className="vp-why-icon"><FaHandsHelping /></div>
              <h3>Empower Local Communities</h3>
              <p>Support farmers with sustainable farming techniques and help build resilient agricultural systems.</p>
            </div>
            <div className="vp-why-card">
              <div className="vp-why-icon"><FaGraduationCap /></div>
              <h3>Gain Hands-On Experience</h3>
              <p>Learn agroecological practices, seed conservation, and community-led development from local experts.</p>
            </div>
            <div className="vp-why-card">
              <div className="vp-why-icon"><FaGlobe /></div>
              <h3>Cultural Immersion</h3>
              <p>Live with host families, experience Kenyan rural life, and build meaningful cross-cultural connections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers Section */}
      <section className="vp-impact">
        <div className="vp-container">
          <div className="vp-impact-grid">
            <div className="vp-impact-item">
              <span className="vp-impact-number">400+</span>
              <span className="vp-impact-label">Farmer Communities</span>
            </div>
            <div className="vp-impact-item">
              <span className="vp-impact-number">200+</span>
              <span className="vp-impact-label">Seed Varieties Conserved</span>
            </div>
            <div className="vp-impact-item">
              <span className="vp-impact-number">17</span>
              <span className="vp-impact-label">Years of Service</span>
            </div>
            <div className="vp-impact-item">
              <span className="vp-impact-number">15</span>
              <span className="vp-impact-label">Counties Reached</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Experience Section */}
      <section className="vp-experience">
        <div className="vp-container">
          <div className="vp-experience-grid">
            <div className="vp-experience-content">
              <span className="vp-section-tag">The Volunteer Experience</span>
              <h2 className="vp-section-title">What to Expect</h2>
              <p className="vp-experience-text">
                As a volunteer with Seed Savers Network Kenya, you'll be immersed in authentic rural life 
                while contributing to meaningful conservation work.
              </p>
              <ul className="vp-experience-list">
                <li><FaLeaf /> Hands-on farming and seed conservation activities</li>
                <li><FaCommunity /> Live with a local host farming family</li>
                <li><FaCalendarCheck /> Flexible durations from 1 week to 3 months</li>
                <li><FaShieldAlt /> Full support from our local coordination team</li>
                <li><FaHeart /> Cultural exchange and community integration</li>
              </ul>
              <button onClick={handleApplyNow} className="vp-btn vp-btn-primary">
                Start Your Journey <FaArrowRight />
              </button>
            </div>
            <div className="vp-experience-image">
              <img src={VolunteerWork} alt="Volunteer working with farmers" />
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Carousel Section */}
      <section className="vp-carousel-section">
        <div className="vp-container">
          <div className="vp-section-header">
            <span className="vp-section-tag">Programs & Opportunities</span>
            <h2 className="vp-section-title">Choose Your Volunteer Path</h2>
            <p className="vp-section-subtitle">
              From seed conservation to agroecology education, find the program that matches your skills and interests.
            </p>
          </div>

          <div className="vo-carousel-wrapper">
            <button className="vo-nav-button vo-nav-prev" onClick={goToPrevious} aria-label="Previous">
              <FaArrowLeft />
            </button>

            <div className="vo-carousel-container">
              <div className="vo-carousel-track" style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}>
                {opportunities.map((opp) => (
                  <div key={opp.id} className="vo-card" style={{ flex: `0 0 ${100 / cardsToShow}%` }}>
                    <div className="vo-card-inner">
                      <div className="vo-card-image-container">
                        <img src={opp.image} alt={opp.title} />
                        <span className="vo-card-category">{opp.category}</span>
                      </div>
                      <div className="vo-card-info">
                        <h3>{opp.title}</h3>
                        <p className="vo-card-description">{opp.description}</p>
                        <div className="vo-card-details">
                          <span className="vo-detail-item"><FaMapMarkerAlt /> {opp.location}</span>
                          <span className="vo-detail-item"><FaClock /> {opp.duration}</span>
                          <span className="vo-detail-item"><FaUsers /> {opp.groupSize}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="vo-nav-button vo-nav-next" onClick={goToNext} aria-label="Next">
              <FaArrowRight />
            </button>
          </div>

          <div className="vo-dots">
            {Array.from({ length: Math.ceil(opportunities.length / cardsToShow) }).map((_, index) => (
              <button
                key={index}
                className={`vo-dot ${Math.floor(currentIndex / cardsToShow) === index ? 'vo-dot-active' : ''}`}
                onClick={() => setCurrentIndex(index * cardsToShow)}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="vp-banner">
        <div className="vp-container">
          <div className="vp-banner-content">
            <FaGlobe className="vp-banner-icon" />
            <div className="vp-banner-text">
              <h3>Global Fellowship Package</h3>
              <p>Starting from USD 433 • Includes accommodation, meals, transport & farm visits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="vp-testimonials">
        <div className="vp-container">
          <div className="vp-section-header">
            <span className="vp-section-tag">Volunteer Stories</span>
            <h2 className="vp-section-title">What Our Volunteers Say</h2>
          </div>
          <div className="vp-testimonial-grid">
            <div className="vp-testimonial-card">
              <p className="vp-testimonial-quote">
                "Volunteering with Seed Savers transformed my understanding of sustainable agriculture. 
                The hands-on experience and community warmth were unforgettable."
              </p>
              <div className="vp-testimonial-author">
                <strong>Sarah Johnson</strong>
                <span>USA • Global Fellowship 2024</span>
              </div>
            </div>
            <div className="vp-testimonial-card">
              <p className="vp-testimonial-quote">
                "Working with local farmers to preserve indigenous seeds was incredibly rewarding. 
                I gained practical skills and lifelong friendships."
              </p>
              <div className="vp-testimonial-author">
                <strong>David Ochieng</strong>
                <span>Kenya • Seed Conservation Program</span>
              </div>
            </div>
            <div className="vp-testimonial-card">
              <p className="vp-testimonial-quote">
                "The agroecology learning exchange gave me new perspectives on food systems. 
                The team's dedication to seed sovereignty is inspiring."
              </p>
              <div className="vp-testimonial-author">
                <strong>Maria Garcia</strong>
                <span>Spain • Research Fellowship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="vp-process">
        <div className="vp-container">
          <div className="vp-section-header">
            <span className="vp-section-tag">How to Apply</span>
            <h2 className="vp-section-title">Simple Application Process</h2>
          </div>
          <div className="vp-process-grid">
            <div className="vp-process-step">
              <div className="vp-step-number">01</div>
              <h3>Submit Application</h3>
              <p>Send us an Email Through our Officail Email Address: info@seedsaverskenya.org</p>
            </div>
            <div className="vp-process-step">
              <div className="vp-step-number">02</div>
              <h3>Interview</h3>
              <p>Have a conversation with our team to discuss your goals and program fit.</p>
            </div>
            <div className="vp-process-step">
              <div className="vp-step-number">03</div>
              <h3>Placement Confirmation</h3>
              <p>Receive your program placement, dates, and preparation materials.</p>
            </div>
            <div className="vp-process-step">
              <div className="vp-step-number">04</div>
              <h3>Arrive & Begin</h3>
              <p>Join us in Kenya and start your volunteer journey!</p>
            </div>
          </div>
          <div className="vp-process-cta">
            <button onClick={handleApplyNow} className="vp-btn vp-btn-primary vp-btn-large">
              Apply for Volunteer Program <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="vp-final-cta">
        <div className="vp-container">
          <div className="vp-final-cta-content">
            <h2>Ready to Make a Difference?</h2>
            <p>Join Seed Savers Network Kenya and become part of a movement that's preserving agricultural heritage for future generations.</p>
            <div className="vp-final-buttons">
              <button onClick={handleApplyNow} className="vp-btn vp-btn-primary">
                Apply Now
              </button>
              <button onClick={handleContactUs} className="vp-btn vp-btn-outline-light">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer 
      <footer className="vp-footer">
        <div className="vp-container">
          <div className="vp-footer-grid">
            <div className="vp-footer-about">
              <h3>Seed Savers Network Kenya</h3>
              <p>Preserving agricultural biodiversity through community-led seed conservation and agroecology since 2009.</p>
            </div>
            <div className="vp-footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/volunteer">Volunteer</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="vp-footer-contact">
              <h4>Contact Us</h4>
              <p><FaEnvelope /> info@seedsaverskenya.org</p>
              <p><FaPhoneAlt /> +254 700 000 000</p>
            </div>
            <div className="vp-footer-social">
              <h4>Follow Us</h4>
              <div className="vp-social-icons">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaYoutube /></a>
              </div>
            </div>
          </div>
          <div className="vp-footer-bottom">
            <p>&copy; 2024 Seed Savers Network Kenya. All rights reserved.</p>
          </div>
        </div>
      </footer>*/}
    </div>
  );
};

export default VolunteerPage;