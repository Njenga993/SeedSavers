import React, { useState } from "react";
import "../styles/IncubationProgram.css";
import SpectacularImage from "../assets/nyakazi.jpg";
import MentorshipImage from "../assets/sunny.jpg"; // optional

const IncubationProgram: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

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

          <div className="contact-details">
            <p>
              📧 Email: <a href="mailto:info@seedsaverskenya.org">info@seedsaverskenya.org</a>
            </p>
            <p>
              📞 Phone: <a href="tel:+254712345678">+254 712 345 678</a>
            </p>
          </div>

          <button className="incubation-cta" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>

        {/* Right-side images */}
        <div className="incubation-images">
          <img src={SpectacularImage} alt="Incubation activity 1" />
          <img src={MentorshipImage} alt="Incubation activity 2" />
        </div>
      </div>

      {showMore && (
        <div className="incubation-expanded-full">
          <div className="incubation-expanded-content">
            <h3>Program Objectives</h3>
            <p>
              This program is built to accelerate impact by supporting solutions that
              enhance food and seed system resilience through innovation, collaboration,
              and capacity building. We aim to empower emerging leaders who are
              passionate about agroecological transformation.
            </p>

            <h4>What We Offer</h4>
            <ul>
              <li>
                • Tailored business development coaching for startups in agroecology and conservation.
              </li>
              <li>
                • Access to demonstration farms and seed banks for practical learning.
              </li>
              <li>
                • Workshops on intellectual property, climate adaptation, and ethical enterprise.
              </li>
              <li>
                • Networking events with investors, institutions, and agroecology champions.
              </li>
            </ul>

            <h4>Impact Stories</h4>
            <p>
              Over the past year, the program has incubated 25+ startups, with success
              stories ranging from indigenous seed packaging enterprises to eco-tourism
              farms and herbal wellness startups. These ventures have not only scaled
              their impact but also strengthened local communities.
            </p>

            <p>
              Our alumni continue to drive change in their regions by championing
              climate-smart agriculture, traditional seed use, and inclusive agro-business models.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default IncubationProgram;
