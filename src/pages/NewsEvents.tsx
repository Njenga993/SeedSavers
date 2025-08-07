
import "../styles/NewsEvents.css";
import SpectacularImage from '../assets/n.jpg'; 

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
              <button className="event-button">Register Now</button>
            </div>
          </div>

          <div className="event-card">
            <div className="event-date">
              <span className="date-day">15</span>
              <span className="date-month">Nov</span>
            </div>
            <div className="event-content">
              <h3>Seed School Advanced Module</h3>
              <p className="event-location">Online</p>
              <p className="event-description">
                Specialized training for Seed School alumni focusing on community seed bank management.
              </p>
              <div className="event-details">
                <span>USD 300</span>
                <span>Early bird until Oct 30</span>
              </div>
              <button className="event-button">Learn More</button>
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
              <img src= {SpectacularImage} alt="Seed Fair" />
            </div>
            <div className="event-content">
              <h3>Annual Indigenous Seed Fair</h3>
              <p className="event-location">Nakuru County</p>
              <p className="event-date">March 15, 2025</p>
              <p className="event-description">
                Join farmers from across the region to exchange indigenous seeds,
                share knowledge, and celebrate agricultural biodiversity.
              </p>
              <button className="event-button">View Photos</button>
            </div>
          </div>

          <div className="event-card">
            <div className="event-image">
              <img src= {SpectacularImage} alt="Seed Exchange" />
            </div>
            <div className="event-content">
              <h3>Community Seed Exchange Program</h3>
              <p className="event-location">Multiple Locations</p>
              <p className="event-date">Quarterly Events</p>
              <p className="event-description">
                Our rotating seed exchange program visits different communities
                to facilitate local seed sharing and preservation.
              </p>
              <button className="event-button">See Schedule</button>
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
            <img src= {SpectacularImage}  alt="Farmer Story" />
            <div className="story-content">
              <h3>Preserving Heritage: Mary's Seed Saving Journey</h3>
              <p>
                How one woman revived 12 nearly-extinct indigenous vegetable varieties
                in her community through our seed saving program.
              </p>
              <a href="#" className="read-more">Read Full Story →</a>
            </div>
          </article>

          <article className="story-card">
            <img src= {SpectacularImage} alt="Youth Program" />
            <div className="story-content">
              <h3>Youth Seed Ambassadors Program Bears Fruit</h3>
              <p>
                50 young farmers trained in our pilot program are now establishing
                community seed banks across 5 counties.
              </p>
              <a href="#" className="read-more">Read Full Story →</a>
            </div>
          </article>

          <article className="story-card">
            <img src= {SpectacularImage}  alt="Research" />
            <div className="story-content">
              <h3>New Research: Indigenous Seeds & Climate Resilience</h3>
              <p>
                Preliminary results from our 3-year study show traditional seed
                varieties outperform commercial hybrids in drought conditions.
              </p>
              <a href="#" className="read-more">Read Full Story →</a>
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
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>Seed School 2024 Highlights</h3>
          </div>

          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>Traditional Seed Saving Techniques</h3>
          </div>

          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>Community Seed Fair 2023</h3>
          </div>
        </div>

        <div className="youtube-cta">
          <a
            href="https://youtube.com/seed-savers-kenya"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-button"
          >
            Visit Our YouTube Channel
          </a>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>
            Subscribe to our newsletter for the latest news, events, and seed
            conservation updates
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

export default NewsEvents;