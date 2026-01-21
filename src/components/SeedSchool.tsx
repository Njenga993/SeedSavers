import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SeedSchool.css";
import seedSchoolImg1 from "../assets/seedschool26.jpeg";

const SeedSchool: React.FC = () => {
  const [] = useState(false);

  const handleRegisterClick = () => {
    // Open registration form in a new tab
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdHr_D9vx44oEomKXtq-69e-Q98xJe9jSv_6XjQVxJoClI1Bw/viewform", "_blank");
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
              <span className="highlight-icon"></span>
              <span>Hands-on training</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon"></span>
              <span>35+ countries reached</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon"></span>
              <span>200+ learners trained</span>
            </div>
          </div>

          <p className="seed-school-date">
            <strong>Next Boot Camp:</strong> 13th - 24th , April 2026 • Gilgil, Kenya
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