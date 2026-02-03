import "../styles/NewsEvents.css";
import SpectacularImage from '../assets/n.webp'; 
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHandshake, FaCalendarAlt, FaMapMarkerAlt, FaPlayCircle, FaFileDownload, FaExternalLinkAlt } from 'react-icons/fa';
import Image from '../assets/seedfair.webp';
import Images from '../assets/cbs.webp';
import Img from '../assets/seedaccess.webp';
import ngiri from '../assets/ngiri.webp';
import Ambs from '../assets/seed-ambasadors.webp';
import Solar from '../assets/Solar dryer.webp';
import IPS from '../assets/IPs.webp';
import DocumentImage from '../assets/DSC_3325.webp'; // New image for document card
import FreedomImage from '../assets/DSC_3236.webp'; // New image for seed of freedom story
import FreedomImage001 from '../assets/DSC_3325.webp'; // New image for seed of freedom story
import FreedomImage002 from '../assets/DSC_3224.webp'; 
import FreedomImage003 from '../assets/DSC_3232.webp'; 

import FreedomImage005 from '../assets/DSC_3245.webp'; 
import FreedomImage006 from '../assets/DSC_3265.webp'; 
import FreedomImage007 from '../assets/DSC_3364.webp'; 
import { useState } from 'react';
import SEO from "../components/SEO";


const NewsEvents = () => {

  // ⬇️ SEO Metadata
<SEO
  title="News & Events | Seed Savers Network Kenya"
  description="Stay updated with the latest news, events, success stories, seed fairs, policy updates, and documentary videos from Seed Savers Network Kenya. Explore featured resources, community stories, and upcoming Seed School programs."
  url="https://seedsaverskenya.org/news-events"
  image={SpectacularImage}
  keywords={[
    "seed savers kenya news",
    "kenya agriculture news",
    "seed sovereignty kenya",
    "indigenous seeds kenya",
    "agroecology events kenya",
    "community seed banks kenya",
    "seed fairs kenya",
    "farmer seed rights",
    "seed school kenya",
    "seed policy kenya",
    "agricultural biodiversity kenya",
    "seed justice africa"
  ]}
  jsonLd={{
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "Seed Savers Network Kenya - News & Events",
    url: "https://seedsaverskenya.org/news-events",
    description:
      "Latest news, events, seed fairs, policy updates, and success stories from Seed Savers Network Kenya.",
    image: SpectacularImage,
    publisher: {
      "@type": "Organization",
      name: "Seed Savers Network Kenya",
      logo: "https://seedsaverskenya.org/logo.png"
    },
    mainEntityOfPage: {
      "@type": "CollectionPage",
      name: "News & Events",
      description:
        "A collection of stories, articles, videos, and event highlights from Seed Savers Network Kenya."
    }
  }}
/>

    // Newsletter state
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  
    const handleNewsletterSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus("loading");
  
      const formData = new FormData();
      formData.append("EMAIL", email);
      // Hidden bot field
      formData.append("b_c2934a21fbcd75c1bb1f92088_dfb6ccb275", "");
  
      try {
        await fetch(
          "https://github.us4.list-manage.com/subscribe/post?u=c2934a21fbcd75c1bb1f92088&id=dfb6ccb275&f_id=00e6e9e8f0",
          {
            method: "POST",
            mode: "no-cors", // Mailchimp blocks CORS, so we can't get detailed response
            body: formData,
          }
        );
        setStatus("success");
        setEmail("");
      } catch (error) {
        setStatus("error");
      }
    };
  
  return (
    <div className="ne-page">
      {/* Hero Section */}
      <section className="ne-hero">
        <div className="blog-hero-overlay">
        <div className="ne-hero-content">
          <div className="ne-hero-text">
            <h1>News & Events</h1>
            <p>Stay updated with our latest activities, programs, and success stories</p>
          </div>
        </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="ne-section">
        <div className="ne-container">
          <div className="ne-section-header">
            <h2>Featured </h2>
            <p>Explore our latest stories</p>
            <div className="ne-divider"></div>
          </div>

          <div className="ne-resources-grid">
            {/* Document Card */}
            <div className="ne-resource-card">
              <div className="ne-resource-image">
                <img src={DocumentImage} alt="Document" />
                <div className="ne-resource-overlay">
                  <span className="ne-resource-type">Document</span>
                </div>
              </div>
              <div className="ne-resource-content">
                <h3>The Seed judgement 2025 By the High court of Kenya and its implications for seed diversity</h3>
                <p className="ne-resource-description">
                  Analysis of the 2025 High Court seed judgement and its implications for seed diversity. 
                  This document provides insights into the legal framework and its impact on farmers' rights and seed conservation.

                </p>
                <div className="ne-resource-meta">
                  <span className="ne-meta-item">
                    <FaCalendarAlt /> Published: December 2025
                  </span>
                  <span className="ne-meta-item">
                    Pages: 27
                  </span>
                </div>
                <div className="ne-resource-actions">
                  <a href="./docs/The seed Judgment.pdf" target="_blank" rel="noopener noreferrer" className="ne-resource-button ne-external-link-button">
                    View Document <FaExternalLinkAlt />
                  </a>
                  <a href="./docs/The seed Judgment.pdf" download className="ne-resource-button ne-external-link-button">
                    Download <FaFileDownload />
                  </a>
                </div>
              </div>
            </div>

            {/* Story Card */}
            <div className="ne-resource-card">
              <div className="ne-resource-image">
                <img src={FreedomImage} alt="Seed of Freedom Story" />
                <div className="ne-resource-overlay">
                  <span className="ne-resource-type">Story</span>
                </div>
              </div>
              <div className="ne-resource-content">
                <h3>The Seeds of Freedom: Kenya s Landmark Win for Agricultural Sovereignty Africa Farming Journal</h3>
                <p className="ne-resource-description">
                  On 27 November 2025, Kenya’s High Court ruled that farmers have the constitutional 
                  right to save, share and exchange indigenous seeds — striking down parts of the Seed 
                  and Plant Varieties Act that criminalized traditional seed-saving practices. 
                  This decision is hailed as a landmark victory for seed sovereignty, agrobiodiversity,
                   and the rights of smallholder farmers to preserve indigenous seed systems and cultural
                    heritage.
                </p>
                <div className="ne-resource-meta">
                  <span className="ne-meta-item">
                    <FaCalendarAlt /> Published: DECEMBER 2025
                  </span>
                  <span className="ne-meta-item">
                    Reading time: 8 min
                  </span>
                </div>
                <div className="ne-resource-actions">
                  <a href="https://africafarmingjournal.org/the-seeds-of-freedom/" target="_blank" rel="noopener noreferrer" className="ne-resource-button ne-external-link-button">
                    Read Full Story <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        {/* Dual Featured Section – Seed Law & Call to Action */}

  
  {/* Call to Action Card */}


{/* Magazine Style Feature Story */}
<section className="ne-magazine-story">
  <h2 className="ne-magazine-title">
    A win for Seed Sovereignty in Kenya as Court Quashes Punitive Seed Laws
  </h2>

  {/* Block 1 - Image on Left */}
  <div className="ne-magazine-block left-image">
    <img src={FreedomImage001} alt="Smallholder farmers in Kenya" loading="lazy" />
    <div className="ne-magazine-text">
      <p>
        Kenya has an estimated 7.5 million smallholder farmers producing more than 70% of the food consumed locally and exported globally. For years, smallholder farmers across Kenya have been engaged in a legal battle with the government over a law that criminalised the old age practice of saving, sharing and exchanging indigenous seeds.
      </p>
      <p>
        In 2022, a group of 15 Kenyan smallholder farmers petitioned the country's High Court, seeking to compel the government to review sections of a law that bans the sharing and exchange of uncertified and unregistered seeds.
      </p>
    </div>
  </div>

  {/* Block 2 - Image on Right */}
  <div className="ne-magazine-block left-image">
    <img src={FreedomImage002} alt="Farmer managed seed systems" loading="lazy" />
    <div className="ne-magazine-text">
      <p>
        Rural smallholder farmers in Kenya rely on informal farmer-managed systems to acquire seeds through seed saving and sharing, but the Seeds and Plant Varieties Act limits their access.
      </p>
      <p>
        Kenya's government enacted the law in 2012 to develop, promote, and regulate a modern and competitive seed industry, but farmers are calling for its review.
      </p>
      <p>
        The informal farmer-managed seed system allows farmers to store a portion of their seeds after harvesting, which guarantees them seeds for the next planting season.
      </p>
    </div>
  </div>

  {/* Section Header */}
  <h3 className="ne-magazine-subtitle">Victory for Farmers</h3>

  {/* Block 3 - Image on Left */}
  <div className="ne-magazine-block left-image">
    <img src={FreedomImage003} alt="High Court ruling Kenya" loading="lazy" />
    <div className="ne-magazine-text">
      <p>
        In a decisive victory for food sovereignty and climate justice, the High Court on November 27, 2025, ruled in favour of smallholder farmers, declaring punitive sections of the Seed and Plant Varieties Act unconstitutional.
      </p>
      <p>
        The judgment effectively decriminalises the age-old practice of saving, sharing, and exchanging indigenous seeds, affirming that Farmer-Managed Seed Systems (FMSS) are a protected right, not a criminal activity.
      </p>
      <p>
        Under the punitive law, farmers faced jail terms of up to 2 years and a fine of 1 million shillings (about 7,800 USD) for selling or exchanging unregistered seeds.
      </p>
    </div>
  </div>

  {/* Block 4 - Image on Right */}
  <div className="ne-magazine-block left-image">
    <img src={FreedomImage} alt="Seed sovereignty advocates" loading="lazy" />
    <div className="ne-magazine-text">
      <p>
        Farmer rights defenders had argued that the law gave control of the country's food system to multinational corporations.
      </p>
      <p>
        In her judgment, Justice Rhoda Rutto declared unconstitutional sections of the Act which gave seed inspectors sweeping powers to raid seed banks and seize seeds meant for the next harvest, made it illegal for farmers to process or sell seeds unless they were registered seed merchants, gave extensive proprietary rights to plant breeders and none to farmers, and made it illegal for farmers to save or share seeds from their harvest without prior knowledge of seed proprietors.
      </p>
      <p>
        Samuel Wathome, a smallholder farmer who was a petitioner in the case, says that "just like his grandmother did, he can now freely save seeds for his grandchildren without fear of police or prison".
      </p>
    </div>
  </div>

  {/* Reduced Production Costs */}
  <h3 className="ne-magazine-subtitle">Reduced Production Costs</h3>

  {/* Block 5 - Image on Left */}
  <div className="ne-magazine-block left-image">
    <img src={FreedomImage005} alt="Community seed banks" loading="lazy" />
    <div className="ne-magazine-text">
      <p>
        Daniel Wanjama says the ruling provides economic relief for smallholder and marginalised farmers who couldn't afford certified seeds and were excluded entirely from formal seed markets.
      </p>
      <p>
        "With the ruling, farmers can again rely on self-saved seeds, community seed banks, and informal exchange networks, reducing costs, improving access, and enhancing resilience, especially for low-income and marginalised farming communities", said Wanjama
      </p>
      <p>
        Wanjama added that with more farmers having unlimited access to affordable seeds of their choice, more food will be produced for the population.
      </p>
    </div>
  </div>

  {/* Block 6 - Image on Right */}
  <div className="ne-magazine-block left-image">
    <img src={FreedomImage006} alt="Seed sovereignty advocates" loading="lazy" />
    <div className="ne-magazine-text">
      <p>
        At the same time, Wanjama notes that the ruling gives way for regenerative, decentralised agricultural development through community seed banks, farmer networks, and locally adapted farming systems, which may improve nutrition, biodiversity, and ecological sustainability at local and national levels.
      </p>
      <p>
        The ruling, according to experts, is a legal and policy shift that could influence not just Kenya but other African nations as a model of rejecting overly restrictive seed laws and investing in community-based seed sovereignty.
        "Going forward, farmers will have greater food sovereignty and community control over what they plant and eat, which underpins local diets, cultural food traditions, and agricultural heritage. This aligns with broader movements toward agroecology, sustainable farming, and climate-adaptation in agriculture," Wanjama concludes.
      </p>
    </div>
  </div>
  
  <h3 className="ne-magazine-subtitle">The Journey to the ruling</h3>

  {/* Block 7 - Image on Left */}
  <div className="ne-magazine-block left-image">
    <img src={FreedomImage007} alt="Community seed banks" loading="lazy" />
    <div className="ne-magazine-text">
      <p>
        For the past three years, smallholder farmers in the East African nation of Kenya have been battling to overturn seed control regulations contained in a law that prohibits them from selling and sharing of unregistered and uncertified indigenous seeds. The petitioners wanted legal recognition and protection of Farmer Managed Seed Systems (FMSS) and the restoration of farmers' fundamental rights.
      </p>
      <p>
        The Petition filed in 2022 was spearheaded by 15 smallholder farmers from Seed Savers Network challenging the constitutionality of the Seed and Plant Varieties Act (Cap. 326) of 2012 and the Seeds and Plant Varieties (Seeds) Regulations, 2016 with the Kenya Plant Health Inspectorate Service (KEPHIS) and the office of the Attorney General as respondents. Other civil society organisations and the Law Society of Kenya came in as interested parties in the case.
      </p>
      <p>
        The law imposed a fine of up to KES 1,000,000, or imprisonment for up to 2 years, or both, for someone who, while not registered as a seed merchant, imports or packages seed for sale. The same penalty applies to anyone found selling or offering for sale seed that does not match the set certification standards, as well as giving false information to a seed inspector, showing false certificates, or obstructing inspectors
      </p>
    </div>
  </div>
</section>
    
     
      {/* Seed School Registration Events */}
      <section className="ne-section">
        <div className="ne-container">
          <div className="ne-section-header">
            <h2>Seed School Registration</h2>
            <p>Join our upcoming training programs</p>
            <div className="ne-divider"></div>
          </div>

          <div className="ne-events-grid">
            <div className="ne-event-card">
              <div className="ne-event-date">
                <span className="ne-date-day">13th</span>
                <span className="ne-date-month">April</span>
              </div>
              <div className="ne-event-content">
                <h3>4th Seed Boot Camp 2026</h3>
                <div className="ne-event-meta">
                  <span className="ne-meta-item">
                    <FaMapMarkerAlt /> Gilgil, Kenya
                  </span>
                  <span className="ne-meta-item">
                    <FaCalendarAlt /> Deadline: April 6, 2026
                  </span>
                </div>
                <p className="ne-event-description">
                  Intensive 2-week training on seed conservation, banking, and policy frameworks.
                  Limited slots available for self-sponsored participants.
                </p>
                <div className="ne-event-footer">
                  <span className="ne-event-price">USD 1,000</span>
                  <Link to="/SeedSchool" className="ne-event-button">
                    Learn More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <div className="ne-event-card">
              <div className="ne-event-date ne-event-date-open">
                <span className="ne-date-day">Open</span>
                <span className="ne-date-month">To All</span>
              </div>
              <div className="ne-event-content">
                <h3>Incubation Program</h3>
                <div className="ne-event-meta">
                  <span className="ne-meta-item">
                    <FaMapMarkerAlt /> Baringo & Gilgil
                  </span>
                  <span className="ne-meta-item">
                    <FaCalendarAlt /> Ongoing
                  </span>
                </div>
                <p className="ne-event-description">
                  This program accelerates impact by supporting solutions that enhance food and seed system 
                  resilience through innovation, collaboration, and capacity building.
                </p>
                <div className="ne-event-footer">
                  <Link to="/incubation-program" className="ne-event-button">
                    Learn More <FaHandshake />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seed Fairs Section */}
      <section className="ne-section ne-section-alt">
        <div className="ne-container">
          <div className="ne-section-header">
            <h2>Seed Fairs</h2>
            <p>Celebrating seed diversity and community exchange</p>
            <div className="ne-divider"></div>
          </div>

          <div className="ne-events-grid">
            <div className="ne-image-card">
              <div className="ne-card-image">
                <img src={Image} alt="Seed Fair" />
                <div className="ne-image-overlay"></div>
              </div>
              <div className="ne-card-content">
                <h3>Annual Indigenous Seed Fair</h3>
                <div className="ne-card-meta">
                  <span className="ne-meta-item">
                    <FaMapMarkerAlt /> Laikipia County
                  </span>
                  <span className="ne-meta-item">
                    <FaCalendarAlt /> October 17, 2025
                  </span>
                </div>
                <p className="ne-card-description">
                  Join farmers from across the region to exchange indigenous seeds,
                  share knowledge, and celebrate agricultural biodiversity.
                </p>
              </div>
            </div>

            <div className="ne-image-card">
              <div className="ne-card-image">
                <img src={Images} alt="Seed Exchange" />
                <div className="ne-image-overlay"></div>
              </div>
              <div className="ne-card-content">
                <h3>Community Seed Exchange Program</h3>
                <div className="ne-card-meta">
                  <span className="ne-meta-item">
                    <FaMapMarkerAlt /> Multiple Locations
                  </span>
                  <span className="ne-meta-item">
                    <FaCalendarAlt /> Quarterly Events
                  </span>
                </div>
                <p className="ne-card-description">
                  Our rotating seed exchange program visits different communities
                  to facilitate local seed sharing and preservation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="ne-section">
        <div className="ne-container">
          <div className="ne-section-header">
            <h2>Featured Stories</h2>
            <p>Success stories from our community</p>
            <div className="ne-divider"></div>
          </div>

          <div className="ne-stories-grid">
            <article className="ne-story-card">
              <div className="ne-story-image">
                <img src={Img} alt="Court Case" />
                <div className="ne-story-overlay"></div>
              </div>
              <div className="ne-story-content">
                <h3>Court to Rule on Farmers' Seed Sovereignty</h3>
                <p>High Court will determine constitutionality of seed laws restricting farmer seed exchange in November.</p>
                <a href="https://www.the-star.co.ke/counties/eastern/2025-05-21-court-to-rule-on-farmers-seed-sovereignty-case-in-november" target="_blank" rel="noopener noreferrer" className="ne-read-more">
                  Read Full Story <FaArrowRight />
                </a>
              </div>
            </article>

            <article className="ne-story-card">
              <div className="ne-story-image">
                <img src={ngiri} alt="Policy Review" />
                <div className="ne-story-overlay"></div>
              </div>
              <div className="ne-story-content">
                <h3>Gov't Reviewing the National Seed Policy</h3>
                <p>The Kenyan government is re-evaluating its national seed policy to accommodate farmer-managed seed systems.</p>
                <a href="https://www.capitalfm.co.ke/news/2025/04/govt-reviewing-the-national-seed-policy/" target="_blank" rel="noopener noreferrer" className="ne-read-more">
                  Read Full Story <FaArrowRight />
                </a>
              </div>
            </article>

            <article className="ne-story-card">
              <div className="ne-story-image">
                <img src={Solar} alt="Solar Farming" />
                <div className="ne-story-overlay"></div>
              </div>
              <div className="ne-story-content">
                <h3>Harnessing Solar: A Turning Point in Kenyan Agriculture</h3>
                <p>How solar technology is helping farmers improve yields and preserve seed biodiversity.</p>
                <a href="https://www.county254.news/county-initiatives-in-the-47-counties-in-kenya-and/article/1436/harnessing-the-solar-a-turning-point-in-kenyas-agriculture" target="_blank" rel="noopener noreferrer" className="ne-read-more">
                  Read Full Story <FaArrowRight />
                </a>
              </div>
            </article>

            <article className="ne-story-card">
              <div className="ne-story-image">
                <img src={Ambs} alt="Seed Battle" />
                <div className="ne-story-overlay"></div>
              </div>
              <div className="ne-story-content">
                <h3>Kenya's Seed Control Battle</h3>
                <p>Smallholder farmers push for legal rights to share indigenous seeds despite corporate opposition.</p>
                <a href="https://www.ipsnews.net/2024/02/inside-kenyas-seed-control-battle-smallholder-farmers-want-share-indigenous-seeds/" target="_blank" rel="noopener noreferrer" className="ne-read-more">
                  Read Full Story <FaArrowRight />
                </a>
              </div>
            </article>

            <article className="ne-story-card">
              <div className="ne-story-image">
                <img src={IPS} alt="Cape Media Video" />
                <div className="ne-story-overlay"></div>
              </div>
              <div className="ne-story-content">
                <h3>Video: Seed Justice in Kenya</h3>
                <p>Watch this video covering grassroots efforts to defend farmer seed rights in Kenya.</p>
                <a href="https://web.facebook.com/capemediaafrica/videos/1592780068059980" target="_blank" rel="noopener noreferrer" className="ne-read-more">
                  Watch Now <FaArrowRight />
                </a>
              </div>
            </article>

            <article className="ne-story-card">
              <div className="ne-story-image">
                <img src={SpectacularImage} alt="Food Crisis" />
                <div className="ne-story-overlay"></div>
              </div>
              <div className="ne-story-content">
                <h3>Food Crisis Response Depends on Farmer Seeds</h3>
                <p>Experts say farmer-managed seed systems are key to responding to Africa's worsening food crisis.</p>
                <a href="https://www.talkafrica.co.ke/african-food-crisis-emergency-response-success-depends-on-farmer-managed-seed-systems/" target="_blank" rel="noopener noreferrer" className="ne-read-more">
                  Read Full Story <FaArrowRight />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="ne-section ne-section-alt">
        <div className="ne-container">
          <div className="ne-section-header">
            <h2>Videos</h2>
            <p>Watch our work in action</p>
            <div className="ne-divider"></div>
          </div>

          <div className="ne-videos-grid">
            <div className="ne-video-card">
              <div className="ne-video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/Exe2WyzfNTw"
                  title="Seed Training Documentary"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="ne-play-overlay">
                  <FaPlayCircle />
                </div>
              </div>
              <h3>Seed Training Documentary</h3>
            </div>

            <div className="ne-video-card">
              <div className="ne-video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/p0uJ1QJngDQ"
                  title="Indigenous Seeds in Kenya"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="ne-play-overlay">
                  <FaPlayCircle />
                </div>
              </div>
              <h3>Indigenous Seeds in Kenya</h3>
            </div>

            <div className="ne-video-card">
              <div className="ne-video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/Jep9JjmLjT8"
                  title="Farmers Speak: Seed Saving"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="ne-play-overlay">
                  <FaPlayCircle />
                </div>
              </div>
              <h3>Farmers Speak: Seed Saving</h3>
            </div>

            <div className="ne-video-card">
              <div className="ne-video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/1hhge02C4VE"
                  title="Community Seed Bank Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="ne-play-overlay">
                  <FaPlayCircle />
                </div>
              </div>
              <h3>Community Seed Bank Tour</h3>
            </div>

            <div className="ne-video-card">
              <div className="ne-video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/ttwJRVWSMM4"
                  title="Seed Saving in Practice"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="ne-play-overlay">
                  <FaPlayCircle />
                </div>
              </div>
              <h3>Seed Saving in Practice</h3>
            </div>
          </div>

          <div className="ne-youtube-cta">
            <a
              href="https://www.youtube.com/@seedsaversnetworkkenya8211"
              target="_blank"
              rel="noopener noreferrer"
              className="ne-youtube-button"
            >
              Visit Our YouTube Channel
            </a>
          </div>
        </div>
      </section>

     {/* Newsletter Section */}
<section className="ne-newsletter">
  <div className="ne-container">
    <div className="ne-newsletter-content">
      <h2>Stay Updated</h2>
      <p>
        Subscribe to our newsletter for the latest news, events, and seed
        conservation updates
      </p>

      <form 
        onSubmit={handleNewsletterSubmit} 
        className="ne-newsletter-form"
      >
        <input
          type="email"
          name="EMAIL"
          placeholder="Your email address"
          className="newsletter-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="newsletter-button"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {/* Status messages */}
      {status === "success" && (
        <p className="newsletter-success">✅ Thanks for subscribing!</p>
      )}
      {status === "error" && (
        <p className="newsletter-error">❌ Something went wrong. Please try again.</p>
      )}

      <p className="ne-privacy-note">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  </div>
</section>

    </div>
  );
};

export default NewsEvents;