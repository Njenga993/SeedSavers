import React from "react";
import { Link } from "react-router-dom";
import "../styles/IncubationProgram.css";
import SpectacularImage from "../assets/nyakazi.jpg";

const IncubationProgram: React.FC = () => {
  return (
    <section className="incubation-section">
      <div className="incubation-container">
        {/* Left-side text */}
        <div className="incubation-text">
          <h2>Agroecology Incubation Program</h2>
          <p className="incubation-tagline">
            Nurturing the next generation of sustainable food entrepreneurs
          </p>
          
          <div className="incubation-stats">
            <div className="stat">
              <span className="stat-number">25+</span>
              <span className="stat-label">Startups Supported</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Agroecology Focus</span>
            </div>
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Years Running</span>
            </div>
          </div>

          <p className="incubation-description">
            We support early-stage entrepreneurs, farmer-led startups, and youth innovators 
            working to transform our food systems through sustainable, impactful enterprises 
            that promote food sovereignty and ecological resilience.
          </p>

          <div className="incubation-features">
            <div className="feature">
              <span className="feature-icon">🚀</span>
              <span>Seed Funding</span>
            </div>
            <div className="feature">
              <span className="feature-icon">👥</span>
              <span>Expert Mentorship</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🌱</span>
              <span>Market Access</span>
            </div>
          </div>

          {/* CTA Button */}
          <Link to="/incubation-program" className="incubation-cta-button">
            Explore Our Program
          </Link>
        </div>

        {/* Right-side image */}
        <div className="incubation-image">
          <img src={SpectacularImage} alt="Agroecology incubation program participants" />
        </div>
      </div>
    </section>
  );
};

export default IncubationProgram;