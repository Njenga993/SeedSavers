import "../styles/NewsEvents.css";
import SpectacularImage from '../assets/n.webp'; 
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHandshake } from 'react-icons/fa';
import Image from '../assets/seedfair.webp';
import Images from '../assets/cbs.webp';
import Img from '../assets/seedaccess.webp';
import ngiri from '../assets/ngiri.webp';
import Ambs from '../assets/seed-ambasadors.webp';
import Solar from '../assets/Solar dryer.webp';
import IPS from '../assets/IPs.webp';

const NewsEvents = () => {
  return (
    <div className="news-events-page">
      {/* Hero Section */}
      <section className="resources-hero">
        <div className="hero-overlay">
          <h1>News & Events</h1>
          <p>Stay updated with our latest activities, programs, and success stories</p>
        </div>
      </section>

      {/* Seed School Registration Events */}
      <section className="news-section">
        <div className="section-header">
          <h2>Seed School Registration</h2>
          <p>Join our upcoming training programs</p>
        </div>

        <div className="events-grid">
          <div className="event-card">
            <div className="event-date">
              <span className="date-day">26</span>
              <span className="date-month">Oct</span>
            </div>
            <div className="event-content">
              <h3>3rd Seed Boot Camp 2025</h3>
              <p className="event-location">Gilgil, Kenya</p>
              <p className="event-description">
                Intensive 2-week training on seed conservation, banking, and policy frameworks.
                Limited slots available for self-sponsored participants.
              </p>
              <div className="event-details">
                <span>USD 1,000</span>
                <span>Deadline: Oct 12</span>
              </div>
               <Link to="/SeedSchool" className="btn-primary">
                            Learn More <FaArrowRight />
                          </Link>
            </div>
          </div>

          <div className="event-card">
            <div className="event-date">
              <span className="date-day">Open</span>
              <span className="date-month">To All</span>
            </div>
            <div className="event-content">
              <h3>Incubation Program </h3>
              <p className="event-location"> Baringo & Gilgil </p>
              <p className="event-description">
                This program is built to accelerate impact by supporting solutions that
              enhance food and seed system resilience through innovation, collaboration,
              and capacity building. We aim to empower emerging leaders who are
              passionate about agroecological transformation.
              </p>
               <Link to="/incubation-program" className="btn-primary">
              Learn More <FaHandshake />
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seed Fairs Section */}
      <section className="news-section alt-bg">
        <div className="section-header">
          <h2>Seed Fairs</h2>
          <p>Celebrating seed diversity and community exchange</p>
        </div>

        <div className="events-grid">
          <div className="event-card">
            <div className="event-image">
              <img src={Image} alt="Seed Fair" />
            </div>
            <div className="event-content">
              <h3>Annual Indigenous Seed Fair</h3>
              <p className="event-location">Nakuru County</p>
              <p className="event-date">March 15, 2025</p>
              <p className="event-description">
                Join farmers from across the region to exchange indigenous seeds,
                share knowledge, and celebrate agricultural biodiversity.
              </p>
            </div>
          </div>

          <div className="event-card">
            <div className="event-image">
              <img src={Images} alt="Seed Exchange" />
            </div>
            <div className="event-content">
              <h3>Community Seed Exchange Program</h3>
              <p className="event-location">Multiple Locations</p>
              <p className="event-date">Quarterly Events</p>
              <p className="event-description">
                Our rotating seed exchange program visits different communities
                to facilitate local seed sharing and preservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="news-section">
        <div className="section-header">
          <h2>Featured Stories</h2>
          <p>Success stories from our community</p>
        </div>

        <div className="stories-grid">
          <article className="story-card">
            <img src={Img} alt="Court Case" />
            <div className="story-content">
              <h3>Court to Rule on Farmers' Seed Sovereignty</h3>
              <p>High Court will determine constitutionality of seed laws restricting farmer seed exchange in November.</p>
              <a href="https://www.the-star.co.ke/counties/eastern/2025-05-21-court-to-rule-on-farmers-seed-sovereignty-case-in-november" target="_blank" rel="noopener noreferrer" className="read-more">Read Full Story →</a>
            </div>
          </article>

          <article className="story-card">
            <img src={ngiri} alt="Policy Review" />
            <div className="story-content">
              <h3>Gov't Reviewing the National Seed Policy</h3>
              <p>The Kenyan government is re-evaluating its national seed policy to accommodate farmer-managed seed systems.</p>
              <a href="https://www.capitalfm.co.ke/news/2025/04/govt-reviewing-the-national-seed-policy/" target="_blank" rel="noopener noreferrer" className="read-more">Read Full Story →</a>
            </div>
          </article>

          <article className="story-card">
            <img src={Solar} alt="Solar Farming" />
            <div className="story-content">
              <h3>Harnessing Solar: A Turning Point in Kenyan Agriculture</h3>
              <p>How solar technology is helping farmers improve yields and preserve seed biodiversity.</p>
              <a href="https://www.county254.news/county-initiatives-in-the-47-counties-in-kenya-and/article/1436/harnessing-the-solar-a-turning-point-in-kenyas-agriculture" target="_blank" rel="noopener noreferrer" className="read-more">Read Full Story →</a>
            </div>
          </article>

          <article className="story-card">
            <img src={Ambs} alt="Seed Battle" />
            <div className="story-content">
              <h3>Kenya's Seed Control Battle</h3>
              <p>Smallholder farmers push for legal rights to share indigenous seeds despite corporate opposition.</p>
              <a href="https://www.ipsnews.net/2024/02/inside-kenyas-seed-control-battle-smallholder-farmers-want-share-indigenous-seeds/" target="_blank" rel="noopener noreferrer" className="read-more">Read Full Story →</a>
            </div>
          </article>

          <article className="story-card">
            <img src={IPS} alt="Cape Media Video" />
            <div className="story-content">
              <h3>Video: Seed Justice in Kenya</h3>
              <p>Watch this video covering grassroots efforts to defend farmer seed rights in Kenya.</p>
              <a href="https://web.facebook.com/capemediaafrica/videos/1592780068059980" target="_blank" rel="noopener noreferrer" className="read-more">Watch Now →</a>
            </div>
          </article>

          <article className="story-card">
            <img src={SpectacularImage} alt="Food Crisis" />
            <div className="story-content">
              <h3>Food Crisis Response Depends on Farmer Seeds</h3>
              <p>Experts say farmer-managed seed systems are key to responding to Africa's worsening food crisis.</p>
              <a href="https://www.talkafrica.co.ke/african-food-crisis-emergency-response-success-depends-on-farmer-managed-seed-systems/" target="_blank" rel="noopener noreferrer" className="read-more">Read Full Story →</a>
            </div>
          </article>
        </div>
      </section>

      {/* Videos Section */}
      <section className="news-section alt-bg">
        <div className="section-header">
          <h2>Videos</h2>
          <p>Watch our work in action</p>
        </div>

        <div className="videos-grid">
          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/Exe2WyzfNTw"
                title="Seed Training Documentary"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>Seed Training Documentary</h3>
          </div>

          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/p0uJ1QJngDQ"
                title="Indigenous Seeds in Kenya"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>Indigenous Seeds in Kenya</h3>
          </div>

          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/Jep9JjmLjT8"
                title="Farmers Speak: Seed Saving"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>Farmers Speak: Seed Saving</h3>
          </div>

          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/1hhge02C4VE"
                title="Community Seed Bank Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>Community Seed Bank Tour</h3>
          </div>

          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/ttwJRVWSMM4"
                title="Seed Saving in Practice"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>Seed Saving in Practice</h3>
          </div>
        </div>

        <div className="youtube-cta">
          <a
            href="https://www.youtube.com/@seedsaversnetworkkenya8211"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-button"
          >
            Visit Our YouTube Channel
          </a>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletters-section">
        <div className="newsletters-content">
          <h2>Stay Updated</h2>
          <p>
            Subscribe to our newsletter for the latest news, events, and seed
            conservation updates
          </p>
          <form className="newsletters-form">
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

export default NewsEvents;
