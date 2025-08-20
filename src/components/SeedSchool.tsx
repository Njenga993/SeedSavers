import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SeedSchool.css";
import seedSchoolImg1 from "../assets/seedschool_sep.jpg";

const SeedSchool: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const handleRegisterClick = () => {
    // Open registration form in a new tab
    window.open("https://forms.gle/your-actual-form-link", "_blank");
  };

  return (
    <section className="seed-school-section">
      <div className="seed-school-container">
        {/* Image */}
        <div className="seed-school-image">
          <img src={seedSchoolImg1} alt="Seed School Training" />
        </div>

        {/* Content */}
        <div className="seed-school-content">
          <h2 className="seed-school-heading">Seed School Boot Camp</h2>
          <p className="seed-school-tagline">
            Master seed saving & join Africa's food sovereignty movement
          </p>
          
          <div className="seed-school-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">🌱</span>
              <span>Hands-on training</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🌍</span>
              <span>10+ countries reached</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">👥</span>
              <span>800+ learners trained</span>
            </div>
          </div>

          <p className="seed-school-date">
            <strong>Next Boot Camp:</strong> Oct 26 - Nov 7, 2025 • Gilgil, Kenya
          </p>

          <div className="seed-school-ctas">
            <button 
              className="seed-cta-button primary"
              onClick={handleRegisterClick}
            >
              Register Now
            </button>
            
            <Link 
              to="/SeedSchool" 
              className="seed-cta-button secondary"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeedSchool;