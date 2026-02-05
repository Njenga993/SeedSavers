import React from "react";
import "../styles/Agrotourism.css";
import HeroImage1 from "../assets/hero_1.webp"; // reuse hero style
import SEO from "../components/SEO";
import IntroImage1 from "../assets/agro1.webp";
import IntroImage2 from "../assets/hero_1.webp";
import Package1 from "../assets/agro3.webp";
import Package2 from "../assets/agro4.webp";
import Package3 from "../assets/agro5.webp";



const AgrotourismPage: React.FC = () => {
  return (
    <div className="agro-page">
      <SEO
        title="Seed Savers Agritourism Packages | Agroecology Learning in Kenya"
        description="Explore Seed Savers Network Kenya agritourism packages offering hands-on learning in agroecology, indigenous seeds, food sovereignty, and sustainable farming."
        url="https://seedsaverskenya.org/agrotourism"
        image={HeroImage1}
      />

      {/* Hero Section */}
      <section className="agro-hero">
        <div className="agro-hero-overlay">
          <h1>Seedsavers Agritourism Package</h1>
          <p className="agro-hero-subtitle">
            Ethical, community-led learning experiences rooted in agroecology,
            indigenous seed systems, and food sovereignty
          </p>
        </div>
      </section>

      {/* Intro Section */}
      {/* Intro Section */}
<section className="agro-intro">
  <div className="agro-intro-container agro-intro-grid">
    
    <div className="agro-intro-image">
      <img src={IntroImage1} alt="Agroecology learning at Seed Savers Network" />
    </div>

    <div className="agro-intro-text">
      <h2>Agritourism at Seed Savers Network – Kenya</h2>
      <p>
        Seed Savers Network (SSN) Kenya offers structured, ethical and
        community-led agritourism experiences that connect learning, culture,
        and practice. Hosted at the Seedsavers Agroecology Learning Centre in
        Nakuru County (Gilgil–Lake Elementaita area), these programs provide
        hands-on exposure to agroecology, indigenous seed systems, food
        sovereignty, and sustainable farming.
      </p>

      <p>
        SSN’s agritourism packages are designed for schools, universities,
        conference delegations, professionals, and individual travelers,
        offering flexible formats ranging from short learning visits (2–4
        hours) to immersive multi-week fellowships.
      </p>
    </div>

  </div>

  {/* Secondary image row */}
  <div className="agro-intro-image-wide">
    <img src={IntroImage2} alt="Community farming and seed conservation" />
  </div>
</section>


      {/* Packages Section */}
      <section className="agro-packages">
        <div className="agro-packages-container">
          <h2>Our Agritourism Packages</h2>

          <div className="agro-packages-grid">
            <div className="agro-package-card">
            <div className="agro-package-image">
              <img src={Package1} alt="Conference and learning exchange" />
             </div>
              <h3>Conference & Learning Exchange Package</h3>
                <p>
                 Short, high-impact visits ideal for conferences, academic tours,
                 and institutional learning exchanges focused on agroecology,
                 seed systems, and community-based climate solutions.
               </p>
              </div>


            <div className="agro-package-card">
                <div className="agro-package-image">
                  <img src={Package2} alt="Conference and learning exchange" />
                </div>
              <h3>Solo & Small-Group Agritourism Package</h3>
              <p>
                Customized farming, cultural, and nature-based experiences for
                individuals, families, and small groups seeking immersive,
                place-based learning.
              </p>
            </div>

            <div className="agro-package-card">
                <div className="agro-package-image">
                  <img src={Package3} alt="Conference and learning exchange" />
                </div>
              <h3>Global Fellowship Package</h3>
              <p>
                An immersive, multi-week farming and learning experience for
                international students and professionals committed to
                agroecology, biodiversity conservation, and food systems change.
              </p>
            </div>
          </div>
        </div>
            <div className="agro-image-strip">
              <img src={IntroImage1} alt="Hands-on learning" />
              <img src={Package2} alt="Farm experience" />
              <img src={IntroImage2} alt="Seed conservation work" />
            </div>

      </section>

      {/* Experience Highlights */}
      <section className="agro-highlights">
        <div className="agro-highlights-container">
          <h2>Why Learn With Seed Savers Network?</h2>
          <ul>
            <li>Over 15 years of grassroots agroecology experience</li>
            <li>Practitioner-led, farmer-centered learning</li>
            <li>Strong focus on indigenous seeds and biodiversity</li>
            <li>Safe, ethical, and community-driven engagement</li>
            <li>Real-world solutions to climate and food system challenges</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="agro-cta">
        <div className="agro-cta-content">
          <h2>Plan Your Agritourism Experience</h2>
          <p>
            Whether you are a student, researcher, traveler, or institution,
            Seed Savers Network offers meaningful learning experiences rooted in
            community, ecology, and culture.
          </p>

          <a href="/contact" className="agro-cta-button">
            Enquire Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default AgrotourismPage;
