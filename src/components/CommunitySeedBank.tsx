import React, { useState } from "react";
import "../styles/CommunitySeedBank.css";
import seedStorage from "../assets/Spectacular.jpg";
import farmerWithSeeds from "../assets/Spectacular.jpg";

const CommunitySeedBank: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

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
            and utilize indigenous seed varieties. It ensures seed sovereignty,
            protects biodiversity, and promotes agroecological farming practices.
          </p>
          <ul>
            <li>🌾 Preserves local seed diversity</li>
            <li>🤝 Encourages seed exchange among farmers</li>
            <li>🌍 Enhances climate resilience and food sovereignty</li>
            <li>📚 Supports knowledge sharing and intergenerational learning</li>
          </ul>

          {/* Contact */}
          <div className="csb-contact">
            <p>
              📧 Email: <a href="mailto:info@seedsaverskenya.org">info@seedsaverskenya.org</a>
            </p>
            <p>
              📞 Phone: <a href="tel:+254712345678">+254 712 345 678</a>
            </p>
          </div>

          {/* Toggle Expandable Info */}
          <button className="csb-cta" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Learn More"}
          </button>
        </div>
      </div>

      {/* Full-width expanded section */}
      {showMore && (
        <div className="csb-expanded-full">
          <div className="csb-expanded-content">
            <h3>About the Platform</h3>
            <p>
              The Community Seed Banks Platform is a self-organized structure within Seed Savers Network that brings
              together <strong>112 seed banks</strong> across Kenya for knowledge sharing, collective action,
              and advocacy for seed sovereignty.
            </p>
            <p>
              It was formed after national dialogue sessions with farmers from <strong>20+ counties</strong> including
              Kakamega, Bungoma, Nakuru, Embu, Siaya, Turkana, and more.
            </p>

            <h4>Mission</h4>
            <p>
              To strengthen the capacity, collaboration, and advocacy of community seed banks by promoting inclusive
              governance, farmer-led seed systems, and preservation of indigenous seeds.
            </p>

            <h4>Core Values</h4>
            <ul>
              <li><strong>Seed Sovereignty:</strong> Right to save, use, exchange, and sell seeds.</li>
              <li><strong>Solidarity:</strong> Mutual support among members.</li>
              <li><strong>Sustainability:</strong> Conservation of biodiversity.</li>
              <li><strong>Inclusivity:</strong> Women, youth, and marginalized group participation.</li>
              <li><strong>Transparency:</strong> Accountability and open communication.</li>
              <li><strong>Innovation:</strong> Learning through training and seed fairs.</li>
            </ul>

            <h4>Governance & Operations</h4>
            <ul>
              <li>Led by elected representatives from various regions.</li>
              <li>Holds biannual leadership meetings and regional seed fairs.</li>
              <li>Operates under a code of conduct and democratic representation.</li>
            </ul>

            <h4>Supported Community Seed Banks</h4>
            <div className="csb-table-wrapper">
              <table className="csb-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Seed Bank Name</th>
                    <th>County</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['1', 'Endorois Community Sb', 'BARINGO'],
                    ['2', 'Namunyak Seedbank', 'BARINGO'],
                    ['3', 'Chomyiet Seedbank', 'BARINGO'],
                    ['4', 'Toloshie Seedbank', 'BARINGO'],
                    ['5', 'Naapu Seedbank', 'BARINGO'],
                    ['6', 'Kupapel Seedbank', 'BARINGO'],
                    ['7', 'Sossion C. Seed Bank', 'BARINGO'],
                    ['8', 'Naitoty Seed Bank', 'BARINGO'],
                    ['9', 'Pasinai Farmers Seed Bank', 'BARINGO'],
                    ['10', 'Kaptich Farmers Seedbank', 'BARINGO'],
                    ['11', 'Ngerotet Seedbank', 'BARINGO'],
                  ].map(([id, name, county], index) => (
                    <tr key={index}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{county}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CommunitySeedBank;
