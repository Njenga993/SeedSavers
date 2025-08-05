import React, { useEffect, useState } from "react";
import "../styles/EventPopup.css";
import flyerImage from "../assets/seedschool_sep.jpg"; // Replace with your actual image

const EventPopup: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show popup always on page load (no session storage)
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="event-popup-overlay">
      <div className="event-popup-box">
        <button className="event-popup-close" onClick={() => setShow(false)}>
          ✕
        </button>
        <div className="event-popup-content">
          <div className="event-popup-image">
            <img src={flyerImage} alt="Seed School Flyer" />
          </div>
          <div className="event-popup-text">
            <h2>Seed School – September 14, 2025</h2>
            <p>
              Join our transformative <strong>Seed School</strong> in Nairobi and gain hands-on skills in seed saving,
              agroecology, and traditional food systems. We've trained over <strong>800 Learners</strong> over the past
              <strong> 2 years</strong>. Don’t miss this opportunity to grow and connect with the seed-saving community.
            </p>
            <p><strong>Email:</strong> info@seedsaverskenya.org</p>
            <p><strong>Phone:</strong> +254 712 345 678</p>
            <a href="/event-registration" className="popup-cta">
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;
