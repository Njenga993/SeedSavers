import React, { useEffect, useState, useRef } from "react";
import "../styles/EventPopup.css";
import { FaArrowRight } from "react-icons/fa";
import bootcampImage from "../assets/seedschool26.jpeg";

const EventPopup: React.FC = () => {
  const [show, setShow] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const startY = useRef<number>(0);
  const currentY = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  useEffect(() => {
    setShow(true);
    
    // Add escape key listener to close popup
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShow(false);
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Handle swipe down to close on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    currentY.current = e.touches[0].clientY;
    
    if (popupRef.current) {
      const deltaY = currentY.current - startY.current;
      if (deltaY > 0) {
        popupRef.current.style.transform = `translateY(${deltaY}px)`;
      }
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    
    const deltaY = currentY.current - startY.current;
    
    if (deltaY > 100) {
      // Swipe down far enough to close
      setShow(false);
    } else {
      // Reset position
      if (popupRef.current) {
        popupRef.current.style.transform = '';
      }
    }
  };

  if (!show) return null;

  return (
    <div 
      className="event-popup-overlay"
      onClick={() => setShow(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div 
        className="event-popup-card"
        ref={popupRef}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close */}
        <button
          className="event-popup-close"
          onClick={() => setShow(false)}
          aria-label="Close popup"
        >
          ✕
        </button>

        {/* Image */}
        <div className="event-popup-image">
          <img src={bootcampImage} alt="April 2026 Seed Boot Camp" />
        </div>

        {/* Content */}
        <div className="event-popup-content">
          <span className="event-popup-badge">April 2026 · Seed Boot Camp</span>

          <h2 id="popup-title">Rooted in Seeds, Led by Farmers: Building a Farmer-Led Seed Sovereignty Movement</h2>

          <p className="event-popup-lead">
            A hands-on learning experience with farmers, seed custodians, and
            community seed banks advancing seed sovereignty in Kenya.
          </p>

          <ul className="event-popup-points">
            <li>📅 13–24 April 2026</li>
            <li> Field-based & participatory</li>
            <li> Farmers' rights & advocacy</li>
            <li> Seed saving & community seed banks</li>
            <li> Seed diversity & climate resilience</li>
            <li> Networking & collaboration</li>
          </ul>

          <div className="event-popup-actions">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdHr_D9vx44oEomKXtq-69e-Q98xJe9jSv_6XjQVxJoClI1Bw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="event-popup-cta primary"
            >
              Apply Now <FaArrowRight />
            </a>
            <a href="/SeedSchool" className="event-popup-cta secondary">
              Learn More <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;