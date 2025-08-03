import React from "react";
import "../styles/SeedSchool.css";
import seedSchoolImg1 from "../assets/women-cultivating-crops-in-green-fields-4771650.jpg";
import seedSchoolImg2 from "../assets/women-cultivating-crops-in-green-fields-4771650.jpg"; // Add this second image to your assets

const SeedSchool: React.FC = () => {
  return (
    <section className="seed-school-section">
      <div className="seed-school-container">
        {/* Images Column */}
        <div className="seed-school-images">
          <img src={seedSchoolImg1} alt="Seed School Training" />
          <img src={seedSchoolImg2} alt="Participants in Seed School" />
        </div>

        {/* Content Column */}
        <div className="seed-school-content">
          <h2 className="seed-school-heading">What is the Seed School?</h2>
          <p className="seed-school-description">
            The Seed School is a hands-on training program by Seed Savers Kenya
            aimed at empowering farmers, youth, and agricultural stakeholders
            with indigenous knowledge on seed saving, agroecology, food
            sovereignty, and biodiversity conservation. Our sessions are
            practical, community-driven, and rooted in African seed traditions.
          </p>

          <p className="upcoming-school-info">
            <strong>Upcoming:</strong> The next Seed School kicks off this
            September! Join us for an immersive training experience featuring
            local facilitators, seed exchange events, and practical field
            sessions. Registration is now open.
          </p>

          <div className="seed-school-stats">
            <div className="stat-box">
              <h3>2+</h3>
              <p>Years Running</p>
            </div>
            <div className="stat-box">
              <h3>800+</h3>
              <p>Learners Trained</p>
            </div>
            <div className="stat-box">
              <h3>15</h3>
              <p>Counties Reached</p>
            </div>
          </div>

          <a href="/seed-school" className="seed-school-cta">
            Read More
          </a>

          <div className="seed-school-contact">
            <p>Email: info@seedsaverskenya.org</p>
            <p>Phone: +254 712 345 678</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeedSchool;
