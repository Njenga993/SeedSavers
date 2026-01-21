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
<section className="ne-dual-feature-section">
  
  {/* Call to Action Card */}


  {/* Featured Story Card */}
  <div className="ne-dual-feature-card">

    <div className="ne-dual-feature-image">
      <img
        src={FreedomImage001}
        alt="Seed Sovereignty and Farmers’ Rights in East Africa"
      />
      <div className="ne-dual-feature-overlay">
        <span className="ne-dual-feature-tag">Featured Story</span>
      </div>
    </div>

    <div className="ne-dual-feature-content">
      <h3 className="ne-dual-feature-title">
        Endorse our Position Paper and Add Your Voice! Why the Draft EAC Seed Bill Needs Change!
      </h3>

      <p className="ne-dual-feature-text">
        The East African Legislative Assembly (EALA) is in the process of developing the East African 
        Community (EAC) Seed and Plant Varieties Bill, 2025, aimed at harmonizing seed laws across the
         region. However, in its current form, the Draft Bill contains significant gaps that risk 
         undermining farmers’ rights and farmer-managed seed systems (FMSS) in East Africa.
      </p>

      <p className="ne-dual-feature-text">
        The majority of smallholder farmers rely on saving, exchanging, and using farm-saved seeds 
        for food security, biodiversity, and climate resilience—especially during emergency
         situations. Yet, the Draft Bill largely prioritizes formal seed systems, offering 
         limited recognition and protection for farmers’ customary seed practices. If adopted 
         without safeguards, it could restrict these practices, reduce seed diversity, and 
         increase farmers’ dependence on commercial and external seed sources.
      </p>
       <p className="ne-dual-feature-text">
        With the Bill expected to move to stakeholder engagement processes as early as February,
         there is an urgent need for coordinated and collective action. This Joint Civil Society
          Position Paper highlights the key gaps in the Draft Bill and proposes practical 
          recommendations to ensure that the final law supports farmers’ rights, FMSS,
           and resilient seed systems.
      </p>
      <p className="ne-dual-feature-text">
  We invite civil society organisations, farmer organisations, networks, research 
  institutions, and development partners to endorse and support this position paper{" "}
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSekjucQkOaAw0FGinHlq33ZuD8UXsIfawu8a4tgvW_9V7xTuw/viewform"
    target="_blank"
    rel="noopener noreferrer"
    className="ne-inline-link"
  >
    here
  </a>{" "}
  and join a collective regional effort to influence the EAC seed law process
  at this critical moment.
</p>

      <div className="ne-dual-feature-meta">
        <span>Published: 2025</span>
        <span>Reading time: 12–15 min</span>
      </div>

      <div className="ne-dual-feature-actions">
  <a
    href="./docs/Joint Civil Society Position on the Draft EAC Seed and Plant Varieties Bill, 2025-4.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="ne-dual-feature-btn"
  >
    Read Full Document (EN)
  </a>

  <a
    href="./docs/FRENCH Joint Civil Society Position on the Draft EAC Seed and Plant Varieties Bill, 2025-4 fr.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="ne-dual-feature-btn ne-dual-feature-btn-secondary"
  >
    Lire le document (FR)
  </a>
</div>

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
                <span className="ne-date-day">26</span>
                <span className="ne-date-month">Oct</span>
              </div>
              <div className="ne-event-content">
                <h3>3rd Seed Boot Camp 2025</h3>
                <div className="ne-event-meta">
                  <span className="ne-meta-item">
                    <FaMapMarkerAlt /> Gilgil, Kenya
                  </span>
                  <span className="ne-meta-item">
                    <FaCalendarAlt /> Deadline: Oct 12
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