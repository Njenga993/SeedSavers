import "../styles/NewsEvents.css";
import SpectacularImage from '../assets/n.webp'; 
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHandshake, FaCalendarAlt, FaMapMarkerAlt, FaPlayCircle } from 'react-icons/fa';
import Image from '../assets/seedfair.webp';
import Images from '../assets/cbs.webp';
import Img from '../assets/seedaccess.webp';
import ngiri from '../assets/ngiri.webp';
import Ambs from '../assets/seed-ambasadors.webp';
import Solar from '../assets/Solar dryer.webp';
import IPS from '../assets/IPs.webp';

const NewsEvents = () => {
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
            <form className="ne-newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
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