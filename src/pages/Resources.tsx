import React, { useState } from "react";
import "../styles/Resources.css";
import SpectacularImage from '../assets/n.jpg';

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
      fileUrl: "/docs/brief1.pdf", 
      previewText: "Overview of seed policies in Kenya and their impact on smallholder farmers.",
      imageUrl: SpectacularImage
    },
    { 
      id: 2, 
      title: "Agroecology Brief", 
      fileUrl: "/docs/brief2.pdf", 
      previewText: "Promoting sustainable farming practices through policy frameworks.",
      imageUrl: SpectacularImage
    },
    { 
      id: 3, 
      title: "Community Seed Laws", 
      fileUrl: "/docs/brief3.pdf", 
      previewText: "Understanding local seed laws and community rights.",
      imageUrl: SpectacularImage
    },
    { 
      id: 4, 
      title: "Seed Rights in Africa", 
      fileUrl: "/docs/brief4.pdf", 
      previewText: "A legal perspective on seed rights across African nations.",
      imageUrl: SpectacularImage
    },
  ];

  const reports: ResourceItem[] = [
    { 
      id: 1, 
      title: "2024 Annual Report", 
      fileUrl: "/docs/report1.pdf", 
      previewText: "Highlights of our achievements and milestones in seed conservation.",
      imageUrl: SpectacularImage
    },
    { 
      id: 2, 
      title: "Impact Assessment Report", 
      fileUrl: "/docs/report2.pdf", 
      previewText: "Measuring the outcomes of our community seed bank programs.",
      imageUrl: SpectacularImage
    },
    { 
      id: 3, 
      title: "Seed Network Growth Report", 
      fileUrl: "/docs/report3.pdf", 
      previewText: "Tracking the expansion of our seed bank network across regions.",
      imageUrl: SpectacularImage
    },
  ];

  const descriptors: ResourceItem[] = [
    { 
      id: 1, 
      title: "Bean Descriptor", 
      fileUrl: "/docs/descriptor1.pdf", 
      previewText: "Comprehensive guide on how to describe and identify bean varieties.",
      imageUrl: SpectacularImage
    },
    { 
      id: 2, 
      title: "Maize Descriptor", 
      fileUrl: "/docs/descriptor2.pdf", 
      previewText: "Detailed descriptive guide for traditional maize types.",
      imageUrl: SpectacularImage
    },
    { 
      id: 3, 
      title: "Traditional Crops", 
      fileUrl: "/docs/descriptor3.pdf", 
      previewText: "Identification guide for indigenous crops and their characteristics.",
      imageUrl: SpectacularImage
    },
  ];

  const manuals: ResourceItem[] = [
    { 
      id: 1, 
      title: "Seed Saving Manual", 
      fileUrl: "/docs/manual1.pdf", 
      previewText: "Step-by-step guide on seed saving techniques for various crops.",
      imageUrl: SpectacularImage
    },
    { 
      id: 2, 
      title: "Agroecology Training Manual", 
      fileUrl: "/docs/manual2.pdf", 
      previewText: "Comprehensive manual for trainers on ecological farming practices.",
      imageUrl: SpectacularImage
    },
    { 
      id: 3, 
      title: "Field Guide to Seed Collection", 
      fileUrl: "/docs/manual3.pdf", 
      previewText: "A practical guide for seed collectors and conservationists.",
      imageUrl: SpectacularImage
    },
  ];

  const apps: ResourceItem[] = [
    { 
      id: 1, 
      title: "Seed Exchange Kenya", 
      fileUrl: "https://seedexchangekenya.app", 
      previewText: "Connect with local farmers and exchange seeds easily through our mobile platform."
    },
    { 
      id: 2, 
      title: "Seed Exchange App", 
      fileUrl: "https://seedexchange.africa", 
      previewText: "Pan-African seed exchange app connecting diverse farming communities."
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