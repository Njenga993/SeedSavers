import React from "react";
import "../styles/IncubationProgram.css";
import SpectacularImage from "../assets/Spectacular.jpg";
import MentorshipImage from "../assets/Spectacular.jpg"; // optional

const IncubationProgram: React.FC = () => {
  return (
    <section className="incubation-section">
      <div className="incubation-container">
        {/* Left-side text */}
        <div className="incubation-text">
          <h2>Incubation Program</h2>
          <p>
            At Seed Savers Kenya, we believe that nurturing grassroots innovation
            is key to transforming our food systems. Our Agroecology Incubation
            Program is designed to support early-stage entrepreneurs, farmer-led
            startups, and youth innovators working in the agroecology and indigenous
            food sectors.
          </p>

          <p>
            Through a carefully structured support system, we help these changemakers
            build sustainable, impactful enterprises that promote food sovereignty,
            seed diversity, and ecological resilience.
          </p>

          <h4>Program Highlights</h4>
          <ul>
            <li>✅ Access to collaborative co-working space in a supportive community</li>
            <li>✅ Seed funding and financial planning support</li>
            <li>✅ One-on-one mentorship from agroecology experts and entrepreneurs</li>
            <li>✅ Training in business modeling, branding, and market strategy</li>
            <li>✅ Participation in showcase events and exhibitions</li>
            <li>✅ Linkages to local and international markets</li>
          </ul>



          <a href="/incubation-program" className="incubation-cta">
            Read More
          </a>

          <div className="contact-details">
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

        {/* Right-side images */}
        <div className="incubation-images">
          <img src={SpectacularImage} alt="Incubation activity 1" />
          <img src={MentorshipImage} alt="Incubation activity 2" />
        </div>
      </div>
    </section>
  );
};

export default IncubationProgram;
