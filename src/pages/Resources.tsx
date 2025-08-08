import React, { useState } from "react";
import "../styles/Resources.css";
import SpectacularImage from '../assets/n.jpg';
import SpectaculaImage from '../assets/IPs.jpeg';
import SpectaculrImage from '../assets/advocacy.jpg';
import SpectacuarImage from '../assets/farmer_led.jpg';
import SpectaclarImage from '../assets/happy.jpg';
import SpectaularImage from '../assets/harvest.jpeg';
import SpectcularImage from '../assets/holding.jpeg';
import Image from '../assets/app.png';

interface ResourceItem {
  id: number;
  title: string;
  fileUrl: string;
  previewText: string;
  imageUrl?: string;
}

const ResourceSection: React.FC<{
  title: string;
  resources: ResourceItem[];
  altBg?: boolean;
}> = ({ title, resources, altBg = false }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleResources = showAll ? resources : resources.slice(0, 3);

  return (
    <section className={`resource-section ${altBg ? 'alt-bg' : ''}`}>
      <div className="section-content">
        <div className="section-header">
          <h2>{title}</h2>
        </div>
        
        <div className="resources-grid">
          {visibleResources.map((item) => (
            <div className="resource-card" key={item.id}>
              {item.imageUrl && (
                <div className="resource-image">
                  <img src={item.imageUrl || SpectacularImage} alt={item.title} />
                </div>
              )}
              <div className="resource-content">
                <h3>{item.title}</h3>
                <p className="resource-description">{item.previewText}</p>
                <div className="resource-actions">
                  <a 
                    href={item.fileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="resource-button"
                  >
                    Preview
                  </a>
                  <a 
                    href={item.fileUrl} 
                    download 
                    className="resource-button primary"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {resources.length > 3 && (
          <div className="view-more-container">
            <button 
              className="view-more-button" 
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "View More Resources"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const ResourcesPage: React.FC = () => {
  const policyBriefs: ResourceItem[] = [
    { 
      id: 1, 
      title: "Seed Policy Brief 2023", 
      fileUrl: "./docs/OSSS-Policy-brief-2022.pdf", 
      previewText: "Promoting Open Source Seed Systems for enhanced access and availability of seed and germplasm.",
      imageUrl: SpectacularImage
    },
    { 
      id: 2, 
      title: "Agroecology Brief", 
      fileUrl: "./docs/SSN-Model-for-accessing-non-commercialized-registered-varieties-and-support-for-FMSS.pdf", 
      previewText: "A model for accesiing non-commercialized registered varieties and support for farmer managed seed systems.",
      imageUrl: SpectaclarImage
    },
    { 
      id: 3, 
      title: "Terms and Conditions for Open Source Seed Use in Kenya", 
      fileUrl: "./docs/NEW-OPEN-SOURCE-SEEDS-MATERIAL-TRANSFER-TCs.pdf", 
      previewText: "Terms and conditions for open-source seed use in Kenya.",
      imageUrl: SpectaculrImage
    },
    { 
      id: 4, 
      title: "Seed Regulation Protocol", 
      fileUrl: "./docs/protocol-for-csb-and-national-genebank-collaboration_issd-africa-1.pdf", 
      previewText: "Protocal",
      imageUrl: SpectaculaImage
    },
    { 
      id: 5, 
      title: " seed exchange in Kenya", 
      fileUrl: "./docs/Online-Seeds-Exchange-policy-brief.pdf", 
      previewText: "Regulating Online Seed Exchange ",
      imageUrl: SpectcularImage
    },
    { 
      id: 6, 
      title: "Seed Security Survey 2024", 
      fileUrl: "./docs/SSNAgrecolSeedStudyFinalMay-2023 copy.pdf", 
      previewText: "Survey on seed security and access in Kenya.",
      imageUrl: SpectaularImage
    },
  ];

  const reports: ResourceItem[] = [
    { 
      id: 1, 
      title: "Developing Markets for Agroecology in Nakuru", 
      fileUrl: "./docs/Developing-Markets-for-Agroecology-in-Nakuru.pdf", 
      previewText: "Highlights of our achievements and milestones in seed conservation.",
      imageUrl: SpectacularImage
    },
    { 
      id: 2, 
      title: "SSN-NUTRITION-BOOKLET", 
      fileUrl: "./docs/SSN-NUTRITION-BOOKLET.pdf", 
      previewText: "Measuring the outcomes of our community seed bank programs.",
      imageUrl: SpectcularImage
    },
    { 
      id: 3, 
      title: "Seed-Savers-Food-Forest-Training-Manual_v2", 
      fileUrl: "./docs/Seed-Savers-Food-Forest-Training-Manual_v2.pdf", 
      previewText: "Tracking the expansion of our seed bank network across regions.",
      imageUrl: SpectaularImage
    },
        { 
      id: 4, 
      title: "Quality-Assurance-for-Seed-Exchange-booklett", 
      fileUrl: "./docs/Quality-Assurance-for-Seed-Exchange-booklet.pdf", 
      previewText: "Tracking the expansion of our seed bank network across regions.",
      imageUrl: SpectaclarImage
    },
        { 
      id: 5, 
      title: "Seeds Field Survey Report 2024", 
      fileUrl: "./docs/Seeds-Field-Survey-Report-2024.pdf", 
      previewText: "Tracking the expansion of our seed bank network across regions.",
      imageUrl: SpectacuarImage
    },
        { 
      id: 6, 
      title: "Community-Seedbank-Guidelines", 
      fileUrl: "./docs/Community-Seedbank-Guidelines.pdf", 
      previewText: "Tracking the expansion of our seed bank network across regions.",
      imageUrl: SpectaculrImage
    },
        { 
      id: 7, 
      title: "SSN Agrecol Seed Study Final May 2023", 
      fileUrl: "./docs/SSNAgrecolSeedStudyFinalMay-2023.pdf", 
      previewText: "Tracking the expansion of our seed bank network across regions.",
      imageUrl: SpectaculaImage 
    },
  ];

  const descriptors: ResourceItem[] = [
    { 
      id: 1, 
      title: "Crop Descriptors", 
      fileUrl: "./docs/CROP-DESCRIPTORS.pdf", 
      previewText: "Access detailed crop descriptors to learn about the unique characteristics, traits, and growth conditions of various crop varieties, supporting your efforts in sustainable farming and seed conservation.",
      imageUrl: SpectacularImage
    }

  ];

  const manuals: ResourceItem[] = [
    { 
      id: 1, 
      title: "Seed Access", 
      fileUrl: "./docs/Newsletters.pdf", 
      previewText: "Promoting diverse seed access to farming communities in Kenya.",
      imageUrl: SpectaculrImage
    },
  ];

  const apps: ResourceItem[] = [
    { 
      id: 1, 
      title: "Seed Exchange Kenya", 
      fileUrl: "https://play.google.com/store/apps/details?id=org.seedexchangekenya.seedsavers&hl=en&pli=1", 
      previewText: "Connect with local farmers and exchange seeds easily through our mobile platform.",
      imageUrl: Image
    },
    { 
      id: 2, 
      title: "Seed Exchange App", 
      fileUrl: "https://play.google.com/store/apps/details?id=org.seedexchangekenya.seedsavers&hl=en&pli=1", 
      previewText: "seed exchange app connecting diverse farming communities.",
      imageUrl: Image
    },
  ];

  return (
    <div className="resources-page">
      {/* Hero Section */}
      <section className="resources-hero">
        <div className="hero-overlay">
          <h1>Resources Center</h1>
          <p>Access our publications, manuals, policy briefs, and digital tools</p>
        </div>
      </section>

      <ResourceSection title="Seed Exchange Apps" resources={apps} />
      <ResourceSection title="Policy Briefs" resources={policyBriefs} altBg />
      <ResourceSection title="Reports" resources={reports} />
      <ResourceSection title="Descriptors" resources={descriptors} altBg />
      <ResourceSection title="Manuals & Publications" resources={manuals} />

      {/* Newsletter Section - Consistent with News & Events */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>
            Subscribe to our newsletter for new resources, updates, and seed
            conservation news
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          <p className="privacy-note">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;