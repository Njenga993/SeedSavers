import { useState } from 'react';
import '../styles/about.css';
// Import strategy images
import agrobiodiversityImg from '../assets/holding.jpeg';
import capacityBuildingImg from '../assets/farmer_led.jpg';
import advocacyImg from '../assets/advocacy.jpg';
// Import Seed School component
import SeedSchool from '../components/SeedSchool';
import IncubationProgram from '../components/IncubationProgram';
import CommunitySeedBank from '../components/CommunitySeedBank';
import Maps from '../components/Maps';

const About = () => {
  const [expandedStrategy, setExpandedStrategy] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');
  const [strategies, setStrategies] = useState([
    {
      title: 'Agrobiodiversity Conservation',
      summary: 'Preserving local varieties in seed banks and on farms to maintain biodiversity.',
      icon: '',
      image: agrobiodiversityImg,
      subCategories: [
        {
          title: 'Community Seed Banks',
          description: [
            'Established 105 community seed banks across Kenya',
            'Safeguard thousands of indigenous and climate-resilient seed varieties',
            'Serve as local seed reserves for smallholder farmers',
            'Reduce reliance on commercial seed markets',
            'Operate as learning hubs for seed saving techniques',
            'Facilitate farmer-led seed exchanges'
          ],
          impact: 'Preserved over 200 seed varieties across 50 community seed banks',
          expanded: false
        },
        {
          title: 'Seed Regeneration & Conservation',
          description: [
            'Work with farmers to regenerate and multiply traditional seeds',
            'Conserved over 3,000 traditional seed accessions',
            '1,000 varieties stored at National Gene Bank and Svalbard Global Seed Vault',
            'Supported field regeneration programs',
            'Documented and characterized 64 farmer varieties'
          ],
          impact: 'Revived and reintroduced 15 endangered varieties to farmers',
          expanded: false
        },
        {
          title: 'Field Gene Banks & Demonstration Plots',
          description: [
            'Maintain live collections of crops requiring continuous cultivation',
            '11 community demonstration plots established',
            'Main field gene bank at Seed Savers Learning Center',
            'Serve as hands-on learning spaces',
            'Research centers comparing indigenous vs commercial varieties',
            'Document and evaluate traditional seed varieties'
          ],
          impact: '8 field gene banks across different agro-ecological zones',
          expanded: false
        },
        {
          title: 'Farmer-led Seed Exchange',
          description: [
            'Organize local and national seed fairs',
            'Support farmer cooperatives and community seed banks',
            'Digital Online Seed Exchange Platform',
            'Annual national seed fairs with 3,000+ farmers',
            'Preserve genetic diversity and strengthen food sovereignty'
          ],
          impact: '5,000+ farmers participate in annual seed exchange events',
          expanded: false
        }
      ]
    },
    {
      title: 'Capacity Building',
      summary: 'Empowering communities through education and training in sustainable agriculture.',
      icon: '',
      image: capacityBuildingImg,
      subCategories: [
        {
          title: 'Agroecology Training',
          description: [
            'Soil fertility management: composting, mulching, organic fertilizers',
            'Natural pest & disease control using bio-pesticides',
            'Drought-resilient farming with traditional crops',
            'Water conservation techniques',
            'Companion planting strategies'
          ],
          impact: 'Trained 15,000+ farmers in sustainable practices',
          expanded: false
        },
        {
          title: 'Seed Ambassador Program',
          description: [
            'Farmer-to-farmer extension model',
            'Train on seed saving, storage, and multiplication',
            'Advocate for farmer-managed seed systems',
            'Facilitate community seed fairs and seed banks',
            'Expand agroecology and biodiversity conservation'
          ],
          impact: '4,820 trained Seed Ambassadors across 8 counties',
          expanded: false
        },
        {
          title: 'Value Addition & Market Linkages',
          description: [
            'Training in processing and packaging traditional foods',
            'Link farmers to organic markets and cooperatives',
            'Facilitate equipment access for processing',
            'Support product development from traditional crops',
            'Develop collective branding and certifications'
          ],
          impact: '10+ tonnes of traditional produce supplied to markets',
          expanded: false
        },
        {
          title: 'Community Learning Center',
          description: [
            'Hubs in Gilgil, Baringo and Kakamega',
            'Practical, hands-on learning space',
            'Knowledge exchange between farmers and researchers',
            'Preserve traditional agricultural practices',
            'Integrate modern sustainable farming techniques'
          ],
          impact: '3 centers serving thousands of visitors annually',
          expanded: false
        }
      ]
    },
    {
      title: 'Advocacy & Policy',
      summary: 'Shaping policies that protect farmers\' seed rights and biodiversity.',
      icon: '',
      image: advocacyImg,
      subCategories: [
        {
          title: 'Policy & Legal Reforms',
          description: [
            'Recognition of farmer varieties in seed laws',
            'Challenge restrictive seed policies',
            'Advocate against GMO ban lifting',
            'Engage with policymakers at all levels',
            'Support food sovereignty legislation'
          ],
          impact: 'Policy shifts favoring farmer seed sovereignty',
          expanded: false
        },
        {
          title: 'Farmer-led Advocacy',
          description: [
            'Public participation forums',
            'Media engagements and campaigns',
            'Grassroots mobilization',
            'Farmer testimony collection',
            'Policy brief development'
          ],
          impact: 'Farmers influencing local government programs',
          expanded: false
        },
        {
          title: 'Seed Fairs & Public Engagement',
          description: [
            '83 seed fairs conducted nationwide',
            'Farmer-to-farmer seed exchanges',
            'Policy maker engagement',
            'Traditional food showcases',
            'Climate resilience demonstrations'
          ],
          impact: '3,285 farmers reached in 2024',
          expanded: false
        }
      ]
    }
  ]);

  const toggleExpand = (index: number) => {
    setExpandedStrategy(expandedStrategy === index ? null : index);
  };

  const toggleSubStrategy = (strategyIndex: number, subIndex: number) => {
    setStrategies(prevStrategies => {
      return prevStrategies.map((strategy, sIndex) => {
        if (sIndex !== strategyIndex) return strategy;
        
        return {
          ...strategy,
          subCategories: strategy.subCategories.map((sub, scIndex) => {
            if (scIndex !== subIndex) return sub;
            return { ...sub, expanded: !sub.expanded };
          })
        };
      });
    });
  };



  return (
    <div className="about-page">
      {/* Hero Section */}
        <header className="resources-hero">
        <div className="hero-overlay">
          <h1>About Seed Savers Network</h1>
          <p className="hero-subtitle">Preserving indigenous seeds for food sovereignty</p>
        </div>
      </header>

      <main className="about-content">

                {/* Strategies Section */}
        <section className="about-strategies">
          <div className="container">
            <h2 className="section-title">Our Strategic Approach</h2>
            <p className="section-subtitle">Three pillars guide our work in preserving  agricultural biodiversity</p>
            
            <div className="strategy-accordion">
              {strategies.map((strategy, index) => (
                <div 
                  className={`strategy-item ${expandedStrategy === index ? 'expanded' : ''}`}
                  key={index}
                >
                  <div 
                    className="strategy-header"
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="strategy-icon-title">
                      <div className="strategy-icon">{strategy.icon}</div>
                      <h3>{strategy.title}</h3>
                    </div>
                    <span className="accordion-icon">
                      {expandedStrategy === index ? '−' : '+'}
                    </span>
                  </div>
                  
                  {expandedStrategy === index && (
                    <div className="strategy-content">
                      <p className="strategy-summary">{strategy.summary}</p>
                      
                      <div className="strategy-image-container">
                        <img 
                          src={strategy.image} 
                          alt={`${strategy.title} strategy`}
                          className="strategy-image"
                        />
                      </div>
                      
                      <div className="sub-strategies">
                        {strategy.subCategories.map((sub, subIndex) => (
                          <div 
                            className={`sub-strategy ${sub.expanded ? 'expanded' : ''}`}
                            key={subIndex}
                          >
                            <div 
                              className="sub-strategy-header"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleSubStrategy(index, subIndex);
                              }}
                            >
                              <h4>{sub.title}</h4>
                              <span className="sub-accordion-icon">
                                {sub.expanded ? '−' : '+'}
                              </span>
                            </div>
                            
                            {sub.expanded && (
                              <div className="sub-strategy-content">
                                <ul className="strategy-points">
                                  {sub.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                  ))}
                                </ul>
                                {sub.impact && (
                                  <div className="impact-note">
                                    <strong>Impact:</strong> {sub.impact}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
  
            <SeedSchool />
            <IncubationProgram />
            <CommunitySeedBank />
            <Maps />

        {/* Mission/Vision Section */}
        <section className="about-core">
          <div className="container">
            <h2 className="section-title">Our Core</h2>
            <div className="core-tabs">
              <button
                className={`tab-button ${activeTab === 'mission' ? 'active' : ''}`}
                onClick={() => setActiveTab('mission')}
              >
                Mission
              </button>
              <button
                className={`tab-button ${activeTab === 'vision' ? 'active' : ''}`}
                onClick={() => setActiveTab('vision')}
              >
                Vision
              </button>
            </div>

            <div className="core-content">
              {activeTab === 'mission' && (
                <div className="tab-panel">
                  <h3>Our Mission</h3>
                  <p>We are on a mission to conserve agrobiodiversity by strengthening communities’ seed systems for improved seed access and enhanced food sovereignty.</p>
                </div>
              )}
              {activeTab === 'vision' && (
                <div className="tab-panel">
                  <h3>Our Vision</h3>
                  <p>To be a leading agent in promoting diverse seed access to farming communities.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Call to Action */}

    </div>
  );
};

export default About;