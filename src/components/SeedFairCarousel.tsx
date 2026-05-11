import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft, FaMapMarkerAlt, FaClock, FaUsers, FaGlobe } from 'react-icons/fa';
import '../styles/SeedFairCarousel.css';

// Import images - reusing the same assets but with new names for volunteer context
import VolunteerHero from '../assets/hero_1.webp';
import SeedBankVisit from '../assets/kikopey.webp';
import FarmingHands from '../assets/harvest_1.webp';
import CommunityWork from '../assets/cb.webp';
import SeedWorkshop from '../assets/seeds.webp';
import AgroecologyClass from '../assets/holding.webp';
import Harvesting from '../assets/winowing.webp';
import LandscapeView from '../assets/hero_1.webp';

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

const VolunteerOpportunitiesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Volunteer opportunities based on the Global Fellowship Package
  const opportunities: VolunteerOpportunity[] = [
    {
      id: 1,
      title: "Global Fellowship Program",
      location: "Nakuru & Surrounding Counties",
      duration: "Minimum 2 weeks",
      image: VolunteerHero,
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

  // Update cardsToShow based on screen size
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

  return (
    <section className="sf-section vo-section">
      <div className="sf-container">
        <div className="sf-header vo-header">
          <h2>Volunteer Opportunities at Seed Savers Network Kenya</h2>
          <div className="sf-divider vo-divider"></div>
          <p className="vo-subtitle">
            Join our community-led agroecology and seed conservation programs. 
            Work alongside farmers, researchers, and local communities to support seed sovereignty in East Africa.
          </p>
        </div>

        <div className="sf-carousel-wrapper vo-carousel-wrapper">
          <button 
            className="sf-nav-button vo-nav-button sf-nav-prev" 
            onClick={goToPrevious}
            aria-label="Previous"
          >
            <FaArrowLeft />
          </button>

          <div className="sf-carousel-container">
            <div 
              className="sf-carousel-track vo-carousel-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              }}
            >
              {opportunities.map((opp) => (
                <div 
                  key={opp.id} 
                  className="sf-card vo-card"
                  style={{ flex: `0 0 ${100 / cardsToShow}%` }}
                >
                  <div className="sf-card-inner vo-card-inner">
                    <div className="vo-card-image-container">
                      <img src={opp.image} alt={opp.title} />
                      <span className="vo-card-category">{opp.category}</span>
                    </div>
                    <div className="sf-card-info vo-card-info">
                      <h3>{opp.title}</h3>
                      <p className="vo-card-description">{opp.description}</p>
                      <div className="sf-card-details vo-card-details">
                        <span className="sf-detail-item vo-detail-item">
                          <FaMapMarkerAlt /> {opp.location}
                        </span>
                        <span className="sf-detail-item vo-detail-item">
                          <FaClock /> {opp.duration}
                        </span>
                        <span className="sf-detail-item vo-detail-item">
                          <FaUsers /> {opp.groupSize}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="sf-nav-button vo-nav-button sf-nav-next" 
            onClick={goToNext}
            aria-label="Next"
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="sf-dots vo-dots">
          {Array.from({ length: Math.ceil(opportunities.length / cardsToShow) }).map((_, index) => (
            <button
              key={index}
              className={`sf-dot vo-dot ${Math.floor(currentIndex / cardsToShow) === index ? 'sf-dot-active vo-dot-active' : ''}`}
              onClick={() => setCurrentIndex(index * cardsToShow)}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="vo-cta-container">
          <button 
            className="vo-cta-button vo-cta-primary"
            onClick={handleContactUs}
          >
            Contact Us
          </button>
          <button 
            className="vo-cta-button vo-cta-secondary"
            onClick={handleLearnMore}
          >
            Learn More
          </button>
        </div>

        {/* Info Banner */}
        <div className="vo-info-banner">
          <div className="vo-info-content">
            <FaGlobe className="vo-info-icon" />
            <span>Global Fellowship Package starting from USD 433 • Includes accommodation, meals, transport & farm visits</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerOpportunitiesCarousel;