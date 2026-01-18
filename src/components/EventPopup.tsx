import React, { useEffect, useState } from "react";
import "../styles/EventPopup.css";
import { FaArrowRight } from "react-icons/fa";
import policyImage from "../assets/DSC_3325.webp";

const EventPopup: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="event-popup-overlay">
      <div className="event-popup-card">
        <button
          className="event-popup-close"
          onClick={() => setShow(false)}
          aria-label="Close popup"
        >
          ✕
        </button>

        <div className="event-popup-card-content">
          
          {/* Image */}
          <div className="event-popup-card-image">
            <img
              src={policyImage}
              alt="Endorse the Position Paper on the EAC Seed Bill"
            />
          </div>

          {/* Text */}
          <div className="event-popup-card-text">
            <span className="event-popup-badge">Call to Action</span>

            <h2>
              Add Your Voice for Farmers’ Seed Rights
            </h2>

            <p>
              The Draft <strong>EAC Seed and Plant Varieties Bill, 2025</strong> risks
              undermining farmers’ rights and farmer-managed seed systems across East Africa.
            </p>

            <p>
              Civil society and farmer organisations are calling for urgent action to protect
              seed sovereignty, biodiversity, and resilient food systems.
            </p>

            <a
              href="/news-events"
              className="event-popup-cta"
            >
              Learn More & Take Action <FaArrowRight />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EventPopup;
