import React, { useState } from "react";
import "../styles/SeedSchool.css";
import seedSchoolImg1 from "../assets/seedschool_sep.jpg";
import seedSchoolImg2 from "../assets/seedschool.jpg";

const SeedSchool: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

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
            <strong>Upcoming:</strong> Our 3rd Seed Boot Camp will run from October 26 to November 7, 2025 at the Seed Savers Network Learning Center in Gilgil, Kenya.
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
              <h3>10+</h3>
              <p>Countries Reached</p>
            </div>
          </div>

          <div className="seed-school-contact">
            <p>Email: info@seedsaverskenya.org</p>
            <p>Phone: +254-712-451777</p>
          </div>

          <button 
            className="seed-school-cta" 
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Learn More"}
          </button>
        </div>
      </div>

      {showMore && (
        <div className="seed-school-expanded">
          <div className="seed-school-expanded-content">
            <h3>3rd Seed Boot Camp Details</h3>
            <div className="expanded-grid">
              <div className="expanded-column">
                <h4>Program Features</h4>
                <ul>
                  <li>Comprehensive training on seed security assessment</li>
                  <li>Hands-on seed banking techniques</li>
                  <li>Documentation and policy frameworks</li>
                  <li>Networking with seed practitioners</li>
                  <li>Traditional knowledge sharing</li>
                </ul>
              </div>
              <div className="expanded-column">
                <h4>Key Information</h4>
                <ul>
                  <li><strong>Duration:</strong> 2 weeks (October 26 - November 7, 2025)</li>
                  <li><strong>Cost:</strong> $1,000 (includes training and accommodation)</li>
                  <li><strong>Application Deadline:</strong> October 12, 2025</li>
                  <li><strong>Location:</strong> Seed Savers Network Learning Center, Gilgil</li>
                </ul>
              </div>
            </div>

            <div className="benefits-section">
              <h4>Why Attend?</h4>
              <p>
                This intensive boot camp will equip you with practical skills to establish community seed banks, 
                preserve indigenous seed varieties, advocate for seed sovereignty, and develop seed enterprise models.
              </p>
              <ul>
                <li>Learn from leading seed conservation experts</li>
                <li>Gain hands-on experience with seed processing and storage</li>
                <li>Network with like-minded seed activists</li>
                <li>Receive a certificate upon completion</li>
              </ul>
            </div>

            <button 
              className="seed-school-cta secondary" 
              onClick={() => setShowMore(false)}
            >
              Show Less
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SeedSchool;