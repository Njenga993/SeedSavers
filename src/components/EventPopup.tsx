import React, { useEffect, useState } from "react";
import "../styles/EventPopup.css";
import { Link } from 'react-router-dom';
import { 
  FaArrowRight,
} from 'react-icons/fa';
import flyerImage from "../assets/seedschool_sep.webp"; // Replace with your actual image

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
                 <h2>3rd Seed Boot Camp – October 26 to November 7, 2025</h2>
                     <p>
                    Join our October cohort for the 3rd <strong>Seed Boot Camp</strong> at the 
                     Seed Savers Network Learning Center, Gilgil, Kenya.
                        Learn about <strong>seed security assessment</strong>, <strong>seed banking</strong>, 
                         <strong>documentation</strong>, <strong>policy & rights</strong>, and more — 
                             all in a <strong>hands-on, farmer-led</strong> training environment.
                          Network with practitioners, share traditional knowledge, and build 
                               community seed movement strategies.
                                   </p>
                                <p><strong>Cost:</strong> USD 1000 (includes 2 weeks’ training & accommodation)</p>
                              <p> <strong>Apply by: 12<sup>th</sup></strong> October 2025</p>
                              <p> <strong>Contact:</strong> info@seedsaverskenya.org | +254-712-451777</p>

<Link to="https://forms.gle/hLzhrDBbQqsYLgRy7" target="_blank" className="btn-primary">
            Register Here <FaArrowRight />
          </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;
