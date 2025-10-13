import React from "react";
import { Link } from "react-router-dom";
import "../styles/CommunitySeedBank.css";
import seedStorage from "../assets/kikopey.webp";

const CommunitySeedBank: React.FC = () => {
  return (
    <section className="csb-section">
      <div className="csb-container">
        {/* Single Image */}
        <div className="csb-image">
          <img src={seedStorage} alt="Community seed storage preserving biodiversity" />
        </div>

        {/* Right Side Text */}
        <div className="csb-text">
          <h2>Community Seed Bank Platform</h2>
          <p className="csb-tagline">
            Preserving Africa's agricultural heritage, one seed at a time
          </p>
          
          <div className="csb-highlights">
            <div className="csb-stat">
              <span className="stat-number">121+</span>
              <span className="stat-label">Active Seed Banks</span>
            </div>
            <div className="csb-stat">
              <span className="stat-number">20+</span>
              <span className="stat-label">Counties Served</span>
            </div>
            <div className="csb-stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Seed Varieties</span>
            </div>
          </div>

          <p className="csb-description">
            Join Kenya's largest network of community seed guardians working together to 
            protect indigenous seeds, promote food sovereignty, and build climate resilience 
            through farmer-led conservation.
          </p>

          <div className="csb-features">
            <div className="feature">
              <span>Seed Preservation</span>
            </div>
            <div className="feature">
              <span>Community Exchange</span>
            </div>
            <div className="feature">
              <span>Biodiversity Protection</span>
            </div>
          </div>

          {/* CTA Button */}
          <Link to="/CommunitySeedBankPlatform" className="csb-cta-button">
            Explore Our Seed Bank Network
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunitySeedBank;