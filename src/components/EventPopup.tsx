import React, { useEffect, useState, useRef } from "react";
import "../styles/EventPopup.css";
import {
  FaArrowRight,
  FaCalendar,
  FaMapMarkerAlt,
  FaSeedling,
} from "react-icons/fa";
import conferencePoster from "../assets/conferenceposter.jpeg";

const EventPopup: React.FC = () => {
  const [show, setShow] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const startY = useRef<number>(0);
  const currentY = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  useEffect(() => {
    setShow(true);

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShow(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

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
      setShow(false);
    } else {
      if (popupRef.current) {
        popupRef.current.style.transform = "";
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
        <button
          className="event-popup-close"
          onClick={() => setShow(false)}
          aria-label="Close popup"
        >
          ✕
        </button>

        <div className="event-popup-content">
          <span className="event-popup-badge">
            <FaSeedling /> Eastern Africa's First
          </span>

          <h2 id="popup-title">
            1st Eastern Africa Indigenous Seeds Conference 2026
          </h2>

          <p className="event-popup-subtitle">
            Building farmer managed seed system community of practice (COP) For
            a Resilient EASTERN AFRICA Region.
          </p>
          <p className="event-popup-subtitle">
            Theme: Realizing the Right to Food through Seed Sovereignty
          </p>

          <div className="event-popup-highlights">
            <div className="highlight-item">
              <FaCalendar className="highlight-icon" />
              <span>📅 17th – 20th November 2026</span>
            </div>
            <div className="highlight-item">
              <FaMapMarkerAlt className="highlight-icon" />
              <span>
                📍 Catholic university of Eastern Africa, Nairobi, Kenya
              </span>
            </div>
          </div>

          <div className="event-popup-actions">
            <a
              href="https://eaindigenousseedconference.org/register"
              target="_blank"
              rel="noopener noreferrer"
              className="event-popup-cta primary"
            >
              Register Now <FaArrowRight />
            </a>
            <a
              href="https://eaindigenousseedconference.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="event-popup-cta secondary"
            >
              Learn More <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="event-popup-poster">
          <img
            src={conferencePoster}
            alt="1st Eastern Africa Indigenous Seeds Conference"
          />
        </div>
      </div>
    </div>
  );
};

export default EventPopup;
