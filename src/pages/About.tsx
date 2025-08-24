import { useState, useRef, useEffect } from 'react';
import '../styles/about.css';
// Import strategy images
import agrobiodiversityImg from '../assets/holding.webp';
import capacityBuildingImg from '../assets/farmer_led.webp';
import advocacyImg from '../assets/advocacy.webp';
// Import sub-strategy images
import seedBankImg from '../assets/seed_pic.webp';
import regenerationImg from '../assets/seed_pic.webp';
import geneBankImg from '../assets/seed_pic.webp';
import seedExchangeImg from '../assets/seed_pic.webp';
import agroecologyImg from '../assets/seed_pic.webp';
import ambassadorImg from '../assets/seed_pic.webp';
import valueAdditionImg from '../assets/seed_pic.webp';
import learningCenterImg from '../assets/seed_pic.webp';
import policyImg from '../assets/seed_pic.webp';
import farmerAdvocacyImg from '../assets/seed_pic.webp';
import seedFairsImg from '../assets/seed_pic.webp';
// Import journey images
import foundingImg from '../assets/seed_pic.webp';
import expansionImg from '../assets/seed_pic.webp';
import recognitionImg from '../assets/seed_pic.webp';
// Import Seed School component
import SeedSchool from '../components/SeedSchool';
import IncubationProgram from '../components/IncubationProgram';
import CommunitySeedBank from '../components/CommunitySeedBank';


const About = () => {
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
          expanded: false,
          image: seedBankImg
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
          expanded: false,
          image: regenerationImg
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
          expanded: false,
          image: geneBankImg
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
          expanded: false,
          image: seedExchangeImg
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
          expanded: false,
          image: agroecologyImg
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
          expanded: false,
          image: ambassadorImg
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
          expanded: false,
          image: valueAdditionImg
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
          expanded: false,
          image: learningCenterImg
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
          expanded: false,
          image: policyImg
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
          expanded: false,
          image: farmerAdvocacyImg
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
          expanded: false,
          image: seedFairsImg
        }
      ]
    }
  ]);

  // Journey and Milestones data
  const [journey] = useState([
    {
      year: '2010',
      title: 'Foundation',
      description: 'Seed Savers Network was established with a vision to preserve indigenous seeds and empower farming communities.',
      image: foundingImg,
      milestones: [
        'First community seed bank established',
        'Initial network of 50 farmers created',
        'Documented first 50 indigenous seed varieties'
      ]
    },
    {
      year: '2013',
      title: 'Expansion',
      description: 'Expanded operations to three counties, establishing field gene banks and training programs.',
      image: expansionImg,
      milestones: [
        'Expanded to 3 counties',
        'Established 5 field gene banks',
        'Trained first 100 Seed Ambassadors',
        'Launched annual seed fairs'
      ]
    },
    {
      year: '2016',
      title: 'Recognition',
      description: 'Gained national recognition for seed conservation efforts and began policy advocacy work.',
      image: recognitionImg,
      milestones: [
        'National recognition from Ministry of Agriculture',
        'Began policy advocacy initiatives',
        'Partnership with National Gene Bank',
        '10,000+ farmers in network'
      ]
    },
    {
      year: '2019',
      title: 'Growth',
      description: 'Significant growth in community seed banks and international partnerships.',
      image: null,
      milestones: [
        '75+ community seed banks established',
        'International partnerships formed',
        'First deposits to Svalbard Global Seed Vault',
        'Digital seed exchange platform launched'
      ]
    },
    {
      year: '2022',
      title: 'Innovation',
      description: 'Integration of technology and expansion of climate resilience programs.',
      image: null,
      milestones: [
        'Mobile training app launched',
        'Climate-resilient seed varieties identified',
        '15,000+ farmers trained in agroecology',
        'Expanded to 8 counties'
      ]
    },
    {
      year: '2024',
      title: 'Present',
      description: 'Current achievements and ongoing initiatives across East Africa.',
      image: null,
      milestones: [
        '105 community seed banks',
        '96,500+ farmers in network',
        '3,000+ seed varieties conserved',
        '4,820 trained Seed Ambassadors',
        '83 seed fairs conducted'
      ]
    }
  ]);

  // Refs for smooth scrolling
  const aboutRef = useRef<HTMLDivElement>(null);
  const strategiesRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);

  // Function to toggle sub-strategy expansion
  const toggleSubStrategy = (strategyIndex: number, subIndex: number) => {
    setStrategies(prevStrategies => {
      return prevStrategies.map((strategy, sIndex) => {
        if (sIndex !== strategyIndex) return strategy;
        
        return {
          ...strategy,
          subCategories: strategy.subCategories.map((sub, scIndex) => {
            if (scIndex !== subIndex) return { ...sub, expanded: false };
            return { ...sub, expanded: !sub.expanded };
          })
        };
      });
    });
  };

  // Scroll to section when URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about' && aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#strategies' && strategiesRef.current) {
        strategiesRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#mission' && missionRef.current) {
        missionRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#journey' && journeyRef.current) {
        journeyRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Initial check on component mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

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
        {/* About Us Section with ref for scrolling */}
        <section ref={aboutRef} id="about" className="about-intro-section">
          <div className="container">
            <h2 className="section-title">Our Story</h2>
            <div className="about-intro-content">
              <div className="about-text">
                <p>
                  Seed Savers Network is a pioneering organization dedicated to preserving agricultural biodiversity 
                  and empowering farming communities across Kenya. Founded on the principle that seed sovereignty is 
                  fundamental to food sovereignty, we work directly with smallholder farmers to conserve, regenerate, 
                  and exchange indigenous seed varieties that are resilient to climate change and vital for sustainable 
                  food systems.
                </p>
                <p>
                  Our journey began with a simple yet powerful realization: the loss of traditional seed varieties 
                  represents not just a loss of genetic diversity, but a loss of cultural heritage, traditional knowledge, 
                  and community resilience. For over a decade, we have been at the forefront of the seed conservation 
                  movement in East Africa, establishing a network of community seed banks, training seed ambassadors, 
                  and advocating for policies that protect farmers' rights to save, exchange, and sell their seeds.
                </p>
                <p>
                  Today, we work with over 96,500 farmers across 8 counties, maintaining 105 community seed banks 
                  that safeguard thousands of indigenous varieties. Our approach combines traditional knowledge with 
                  modern sustainable practices, creating a holistic model that addresses food security, climate resilience, 
                  and economic empowerment simultaneously.
                </p>
                <p>
                  We believe that farmers are not just food producers but custodians of genetic diversity and innovators 
                  in their own right. By strengthening farmer-managed seed systems, we are building a more resilient, 
                  diverse, and sovereign food future for all.
                </p>
              </div>
              <div className="about-image">
                <img 
                  src={regenerationImg} 
                  alt="Farmers exchanging seeds in a community seed bank" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Journey and Milestones Section */}
        <section ref={journeyRef} id="journey" className="journey-milestones">
          <div className="container">
            <h2 className="section-title">Our Journey & Milestones</h2>
            <p className="section-subtitle">From humble beginnings to a nationwide movement for seed sovereignty</p>
            
            <div className="journey-timeline">
              {journey.map((period, index) => (
                <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-year">{period.year}</div>
                  <div className="timeline-content">
                    <h3>{period.title}</h3>
                    <p>{period.description}</p>
                    
                    {period.image && (
                      <div className="timeline-image">
                        <img src={period.image} alt={`${period.year} - ${period.title}`} />
                      </div>
                    )}
                    
                    <div className="milestones-list">
                      <h4>Key Achievements:</h4>
                      <ul>
                        {period.milestones.map((milestone, i) => (
                          <li key={i}>{milestone}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="journey-stats">
              <h3>Our Impact Over the Years</h3>
              <div className="stats-grid">
                <div className="stat-box">
                  <div className="stat-number">14</div>
                  <div className="stat-label">Years of Service</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">112+</div>
                  <div className="stat-label">Community Seed Banks</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">96.5K+</div>
                  <div className="stat-label">Farmers Reached</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">3K+</div>
                  <div className="stat-label">Seed Varieties Conserved</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategies Section with ref for scrolling */}
        <section ref={strategiesRef} id="strategies" className="about-strategies">
          <div className="container">
            <h2 className="section-title">Our Strategic Approach</h2>
            <p className="section-subtitle">Three pillars guide our work in preserving agricultural biodiversity</p>
            
            <div className="strategies-grid">
              {strategies.map((strategy, index) => (
                <div className="strategy-card" key={index}>
                  <div className="strategy-header">
                    <div className="strategy-icon">{strategy.icon}</div>
                    <h3>{strategy.title}</h3>
                  </div>
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
                          onClick={() => toggleSubStrategy(index, subIndex)}
                        >
                          <h4>{sub.title}</h4>
                          <span className="sub-accordion-icon">
                            {sub.expanded ? '−' : '+'}
                          </span>
                        </div>
                        
                        {sub.expanded && (
                          <div className="sub-strategy-content">
                            <div className="sub-strategy-image">
                              <img src={sub.image} alt={sub.title} />
                            </div>
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
              ))}
            </div>
          </div>
        </section>

        <SeedSchool />
        <IncubationProgram />
        <CommunitySeedBank />
        

        {/* Mission/Vision Section with ref for scrolling */}
        <section ref={missionRef} id="mission" className="about-core">
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
                  <p>We are on a mission to conserve agrobiodiversity by strengthening communities' seed systems for improved seed access and enhanced food sovereignty.</p>
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
    </div>
  );
};

export default About;