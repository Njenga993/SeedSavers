import React from "react";
import "../styles/CommunitySeedBank.css";
import seedStorage from "../assets/Spectacular.jpg";
import farmerWithSeeds from "../assets/Spectacular.jpg";

const CommunitySeedBank: React.FC = () => {
  return (
    <section className="csb-section">
      <div className="csb-container">
        {/* Left Side Images */}
        <div className="csb-images">
          <img src={seedStorage} alt="Seed storage" />
          <img src={farmerWithSeeds} alt="Farmer with seeds" />
        </div>

        {/* Right Side Text */}
        <div className="csb-text">
          <h2>Community Seed Bank Platform</h2>
          <p>
            Our Community Seed Bank initiative empowers farmers to conserve, share,
            and utilize indigenous seed varieties. It is a locally-led approach to
            ensure seed sovereignty, protect biodiversity, and promote agroecological
            farming practices tailored to local conditions.
          </p>
          <ul>
            <li>🌾 Preserves local seed diversity</li>
            <li>🤝 Encourages seed exchange among farmers</li>
            <li>🌍 Enhances climate resilience and food sovereignty</li>
            <li>📚 Supports knowledge sharing and intergenerational learning</li>
          </ul>

          <a href="/community-seed-bank" className="csb-cta">
            Learn More
          </a>

          <div className="csb-contact">
            <p>
              📧 Email:{" "}
              <a href="mailto:info@seedsaverskenya.org">
                info@seedsaverskenya.org
              </a>
            </p>
            <p>
              📞 Phone:{" "}
              <a href="tel:+254712345678">
                +254 712 345 678
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySeedBank;
