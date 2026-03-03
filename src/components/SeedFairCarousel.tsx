import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/SeedFairCarousel.css';

// Import seed fair images (you'll need 15 images - I'll use placeholder numbering)

import SeedFair2 from '../assets/makueni.jpeg';
import SeedFair3 from '../assets/machakos.jpeg';
import SeedFair4 from '../assets/lamu.jpeg';
import SeedFair5 from '../assets/nakuru.jpeg';
import SeedFair6 from '../assets/TURKANA.jpeg';
import SeedFair7 from '../assets/bungoma.jpeg';
import SeedFair8 from '../assets/BARINGO.jpeg';
import SeedFair9 from '../assets/kakamega.jpeg';
import SeedFair10 from '../assets/embu.jpeg';
import SeedFair11 from '../assets/kisii.jpeg';
import SeedFair12 from '../assets/kisumu.jpeg';
import SeedFair13 from '../assets/siaya.jpeg';
import SeedFair14 from '../assets/kericho.jpeg';
import SeedFair15 from '../assets/vihiga.jpeg';

interface SeedFair {
  id: number;
  title: string;
  location: string;
  date: string;
  image: string;
}

const SeedFairCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // 15 seed fairs with dummy data
  const seedFairs: SeedFair[] = [
    { id: 2, title: "Makueni County SeedFair Mashinani", location: "Makueni", date: "March 6, 2025", image: SeedFair2 },
    { id: 3, title: "Machakos County SeedFair Mashinani", location: "Machakos", date: "March 6, 2025", image: SeedFair3 },
    { id: 4, title: "Lamu County SeedFair Mashinani", location: "Lamu", date: "March 6, 2025", image: SeedFair4 },
    { id: 5, title: "Nakuru County SeedFair Mashinani", location: "Nakuru", date: "March 6, 2025", image: SeedFair5 },
    { id: 6, title: "Turkana  County SeedFair Mashinani", location: "Turkana", date: "March 6, 2025", image: SeedFair6 },
    { id: 7, title: "Bungoma County SeedFair Mashinani", location: "Bungoma", date: "March 6, 2025", image: SeedFair7 },
    { id: 8, title: "Baringo County SeedFair Mashinani", location: "Baringo", date: "March 6, 2025", image: SeedFair8 },
    { id: 9, title: "Kakamega County SeedFair Mashinani", location: "Kakamega", date: "March 6, 2025", image: SeedFair9 },
    { id: 10, title: "Embu County SeedFair Mashinani", location: "Embu", date: "March 6, 2025", image: SeedFair10 },
    { id: 11, title: "Kisii County SeedFair Mashinani", location: "Kisii", date: "March 6, 2025", image: SeedFair11 },
    { id: 12, title: "Kisumu County SeedFair Mashinani", location: "Kisumu", date: "March 6, 2025", image: SeedFair12 },
    { id: 13, title: "Siaya County SeedFair Mashinani", location: "Siaya", date: "March 6, 2025", image: SeedFair13 },
    { id: 14, title: "Kericho County SeedFair Mashinani", location: "Kericho", date: "March 6, 2025", image: SeedFair14 },
    { id: 15, title: "Vihiga County SeedFair Mashinani", location: "Vihiga", date: "March 6, 2025", image: SeedFair15 }
  ];

  // Update cardsToShow based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setCardsToShow(1); // Mobile: 1 card
      } else if (window.innerWidth <= 1024) {
        setCardsToShow(2); // Tablet: 2 cards
      } else {
        setCardsToShow(3); // Desktop: 3 cards
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, seedFairs.length - cardsToShow) : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= seedFairs.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="sf-section">
      <div className="sf-container">
        <div className="sf-header">
          <h2>Upcoming Seed Fairs</h2>
          <div className="sf-divider"></div>
        </div>

        <div className="sf-carousel-wrapper">
          <button 
            className="sf-nav-button sf-nav-prev" 
            onClick={goToPrevious}
            aria-label="Previous"
          >
            <FaArrowLeft />
          </button>

          <div className="sf-carousel-container">
            <div 
              className="sf-carousel-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              }}
            >
              {seedFairs.map((fair) => (
                <div 
                  key={fair.id} 
                  className="sf-card"
                  style={{ flex: `0 0 ${100 / cardsToShow}%` }}
                >
                  <div className="sf-card-inner">
                    <img src={fair.image} alt={fair.title} />
                    <div className="sf-card-info">
                      <h3>{fair.title}</h3>
                      <div className="sf-card-details">
                        <span className="sf-detail-item">
                          <FaMapMarkerAlt /> {fair.location}
                        </span>
                        <span className="sf-detail-item">
                          <FaCalendarAlt /> {fair.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="sf-nav-button sf-nav-next" 
            onClick={goToNext}
            aria-label="Next"
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="sf-dots">
          {Array.from({ length: Math.ceil(seedFairs.length / cardsToShow) }).map((_, index) => (
            <button
              key={index}
              className={`sf-dot ${Math.floor(currentIndex / cardsToShow) === index ? 'sf-dot-active' : ''}`}
              onClick={() => setCurrentIndex(index * cardsToShow)}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeedFairCarousel;