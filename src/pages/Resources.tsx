import React, { useState } from "react";
import "../styles/Resources.css";

interface ResourceItem {
  id: number;
  title: string;
  fileUrl: string;
  previewText: string;
}

const ResourceSection: React.FC<{
  title: string;
  resources: ResourceItem[];
}> = ({ title, resources }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleResources = showAll ? resources : resources.slice(0, 3);

  return (
    <section className="resource-section">
      <h2 className="resource-title">{title}</h2>
      <div className="resource-grid">
        {visibleResources.map((item) => (
          <div className="resource-card" key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.previewText}</p>
            <div className="resource-actions">
              <a href={item.fileUrl} target="_blank" rel="noopener noreferrer" className="btn-preview">Preview</a>
              <a href={item.fileUrl} download className="btn-download">Download</a>
            </div>
          </div>
        ))}
      </div>
      {resources.length > 3 && (
        <button className="toggle-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "View More"}
        </button>
      )}
    </section>
  );
};

const ResourcesPage: React.FC = () => {
  const policyBriefs: ResourceItem[] = [
    { id: 1, title: "Seed Policy Brief 2023", fileUrl: "/docs/brief1.pdf", previewText: "Overview of seed policies in Kenya..." },
    { id: 2, title: "Agroecology Brief", fileUrl: "/docs/brief2.pdf", previewText: "Promoting sustainable farming practices..." },
    { id: 3, title: "Community Seed Laws", fileUrl: "/docs/brief3.pdf", previewText: "Understanding local seed laws..." },
    { id: 4, title: "Seed Rights in Africa", fileUrl: "/docs/brief4.pdf", previewText: "A legal perspective on seed rights..." },
  ];

  const reports: ResourceItem[] = [
    { id: 1, title: "2024 Annual Report", fileUrl: "/docs/report1.pdf", previewText: "Highlights of achievements and milestones..." },
    { id: 2, title: "Impact Assessment Report", fileUrl: "/docs/report2.pdf", previewText: "Measuring the outcomes of our programs..." },
    { id: 3, title: "Seed Network Growth Report", fileUrl: "/docs/report3.pdf", previewText: "Tracking the expansion of our seed bank network..." },
  ];

  const descriptors: ResourceItem[] = [
    { id: 1, title: "Bean Descriptor", fileUrl: "/docs/descriptor1.pdf", previewText: "How to describe and identify bean varieties..." },
    { id: 2, title: "Maize Descriptor", fileUrl: "/docs/descriptor2.pdf", previewText: "Descriptive guide for maize types..." },
    { id: 3, title: "Traditional Crops", fileUrl: "/docs/descriptor3.pdf", previewText: "Identification of indigenous crops..." },
  ];

  const manuals: ResourceItem[] = [
    { id: 1, title: "Seed Saving Manual", fileUrl: "/docs/manual1.pdf", previewText: "Step-by-step guide on seed saving..." },
    { id: 2, title: "Agroecology Training Manual", fileUrl: "/docs/manual2.pdf", previewText: "Manual for trainers on ecological farming..." },
    { id: 3, title: "Field Guide to Seed Collection", fileUrl: "/docs/manual3.pdf", previewText: "A practical guide for seed collectors..." },
  ];

  const apps: ResourceItem[] = [
    { id: 1, title: "Seed Exchange Kenya App", fileUrl: "https://seedexchangekenya.app", previewText: "Connect with local farmers and exchange seeds easily." },
    { id: 2, title: "Seed Exchange Africa App", fileUrl: "https://seedexchange.africa", previewText: "Pan-African seed exchange app for diverse communities." },
  ];

  return (
    <main className="resources-page">
      <h1 className="page-heading">Resources</h1>
      <ResourceSection title="Seed Exchange Apps" resources={apps} />
      <ResourceSection title="Policy Briefs" resources={policyBriefs} />
      <ResourceSection title="Reports" resources={reports} />
      <ResourceSection title="Descriptors" resources={descriptors} />
      <ResourceSection title="Manuals & Publications" resources={manuals} />
    </main>
  );
};

export default ResourcesPage;
