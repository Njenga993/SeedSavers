import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NewsletterPage.css";
import latestIssue from "../assets/beat.webp";
import subscription from "../assets/bw.webp";
import subscriptionI from "../assets/zim.webp";
import subscriptionIm from "../assets/kseed.webp";
import subscriptionIma from "../assets/sheila.webp";
import subscriptionImag from "../assets/ash.webp";

import { FaArrowRight, FaDownload, FaCheck, FaQuoteLeft } from "react-icons/fa";

// Type for newsletters
interface Newsletter {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  tags: string[];
  readTime: string;
  featured?: boolean;
}

const NewsletterPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"latest" | "archive" | "subscribe">("latest");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [agreed, setAgreed] = useState(false);
  
  // Mailchimp state - same as footer
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData();
    formData.append("EMAIL", email);
    formData.append("FNAME", name);
    if (interest) {
      formData.append("INTEREST", interest);
    }
    // Hidden bot field (same Mailchimp honeypot as footer)
    formData.append("b_f5b8f5616c5e9392c677bdcf2_67e58bdfd2", "");

    try {
      await fetch(
        "https://seedsaverskenya.us2.list-manage.com/subscribe/post?u=f5b8f5616c5e9392c677bdcf2&id=67e58bdfd2&f_id=007f7be1f0",
        {
          method: "POST",
          mode: "no-cors", // Mailchimp blocks CORS, so we can't get detailed response
          body: formData,
        }
      );
      setStatus("success");
      setEmail("");
      setName("");
      setInterest("");
      setAgreed(false);
    } catch (error) {
      setStatus("error");
    }
  };

  // Newsletter data
  const newsletters: Newsletter[] = [
    {
      id: 1,
      title: "Seed Sovereignty Quarterly - Spring 2025",
      date: "March 15, 2024",
      excerpt:
        "Celebrating 121+ community seed banks across Kenya and new policy victories for farmer seed rights.",
      image: latestIssue,
      tags: ["Policy", "Community", "Conservation"],
      readTime: "12 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Agroecology Innovations - Winter 2025",
      date: "December 10, 2023",
      excerpt:
        "Spotlight on youth-led agroecology startups and climate-resilient farming techniques.",
      image: subscription,
      tags: ["Innovation", "Youth", "Climate"],
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Seed Savers Digest - Fall 2025",
      date: "September 22, 2023",
      excerpt:
        "National seed fair highlights and success stories from our incubation program graduates.",
      image: subscriptionI,
      tags: ["Events", "Success Stories", "Training"],
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Biodiversity Bulletin - Summer 2025",
      date: "June 30, 2023",
      excerpt:
        "Documenting 64 new traditional varieties and community conservation efforts across East Africa.",
      image: subscriptionIm,
      tags: ["Biodiversity", "Research", "Documentation"],
      readTime: "15 min read",
    },
    {
      id: 5,
      title: "Food Sovereignty Times - Spring 2025",
      date: "March 18, 2023",
      excerpt:
        "Policy updates and community advocacy strategies for protecting indigenous seed systems.",
      image: subscriptionIma,
      tags: ["Policy", "Advocacy", "Community"],
      readTime: "11 min read",
    },
    {
      id: 6,
      title: "Seed Guardians Journal - Winter 2025",
      date: "December 5, 2022",
      excerpt:
        "Celebrating our seed ambassadors and their impact on preserving agricultural heritage.",
      image: subscriptionImag,
      tags: ["Ambassadors", "Impact", "Heritage"],
      readTime: "9 min read",
    },
  ];

  return (
    <div className="nl-page">
      {/* Hero Section */}
      <section className="nl-hero">
        <div className="nl-hero-content">
          <div className="nl-hero-text">
            <h1>Seed Savers Newsletter</h1>
            <p className="nl-hero-subtitle">
              Stay updated on seed sovereignty, agroecology innovations, and food system
              transformation
            </p>
            <div className="nl-hero-stats">
              <div className="nl-stat">
                <span className="nl-stat-number">1K+</span>
                <span className="nl-stat-label">Subscribers</span>
              </div>
              <div className="nl-stat">
                <span className="nl-stat-number">20+</span>
                <span className="nl-stat-label">Issues Published</span>
              </div>
              <div className="nl-stat">
                <span className="nl-stat-number">15</span>
                <span className="nl-stat-label">Countries Reached</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="nl-tabs">
        <div className="nl-container">
          <div className="nl-tab-buttons">
            <button
              className={`nl-tab-button ${activeTab === "latest" ? "nl-active" : ""}`}
              onClick={() => setActiveTab("latest")}
            >
              Latest Issue
            </button>
            <button
              className={`nl-tab-button ${activeTab === "archive" ? "nl-active" : ""}`}
              onClick={() => setActiveTab("archive")}
            >
              Archive
            </button>
            <button
              className={`nl-tab-button ${activeTab === "subscribe" ? "nl-active" : ""}`}
              onClick={() => setActiveTab("subscribe")}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="nl-content">
        <div className="nl-container">
          {/* Latest Issue */}
          {activeTab === "latest" && (
            <div className="nl-tab-content">
              <div className="nl-latest-issue">
                <div className="nl-issue-header">
                  <div className="nl-issue-image">
                    <img src={latestIssue} alt="Spring 2025 Newsletter Cover" />
                    <div className="nl-issue-badge">
                      <FaDownload />
                      Latest Issue
                    </div>
                  </div>
                  <div className="nl-issue-info">
                    <h2>Seed Sovereignty Quarterly - Spring 2025</h2>
                    <div className="nl-issue-meta">
                      <span className="nl-issue-date">July 15, 2025</span>
                      <span className="nl-read-time">12 min read</span>
                      <div className="nl-tags">
                        {["Policy", "Community", "Conservation"].map((tag) => (
                          <span key={tag} className="nl-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="nl-issue-content">
                  <div className="nl-content-grid">
                    <div className="nl-main-content">
                      <h3>Featured Stories</h3>

                      <article className="nl-feature-story">
                        <h4>121+ Community Seed Banks and Growing</h4>
                        <p>
                          This quarter, we celebrate a monumental achievement: 121+ community seed
                          banks now actively preserving indigenous varieties across Kenya. From the
                          arid lands of Turkana to the fertile highlands of Kakamega, farmers are
                          reclaiming seed sovereignty and building resilient food systems.
                        </p>
                        <p>
                          Our network has expanded to include 15 new seed banks in Baringo County
                          alone, each serving as a hub for knowledge exchange, seed multiplication,
                          and community empowerment. These efforts have preserved over 200
                          traditional varieties that were on the brink of extinction.
                        </p>
                      </article>

                      <article className="nl-feature-story">
                        <h4>Policy Victory for Farmer Seed Rights</h4>
                        <p>
                          After years of advocacy, we're thrilled to announce a significant policy
                          shift recognizing farmer-managed seed systems. The new legislation
                          acknowledges the rights of farmers to save, use, exchange, and sell their
                          seeds a crucial step toward food sovereignty.
                        </p>
                        <p>
                          This victory wouldn't have been possible without the relentless efforts of
                          our seed ambassadors and partner organizations who participated in
                          stakeholder meetings, submitted policy briefs, and mobilized communities
                          across the country.
                        </p>
                      </article>

                      <div className="nl-stats-highlight">
                        <h4>By the Numbers: Spring 2025 Impact</h4>
                        <div className="nl-stats-grid">
                          <div className="nl-stat-item">
                            <span className="nl-number">3,285</span>
                            <span className="nl-label">Farmers Reached</span>
                          </div>
                          <div className="nl-stat-item">
                            <span className="nl-number">83</span>
                            <span className="nl-label">Seed Fairs Conducted</span>
                          </div>
                          <div className="nl-stat-item">
                            <span className="nl-number">15</span>
                            <span className="nl-label">New Varieties Documented</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="nl-sidebar">
                      <div className="nl-upcoming-events">
                        <h4>Upcoming Events</h4>
                        <div className="nl-event-item">
                          <h5>National Seed Fair 2025</h5>
                          <p>October 14-15, 2025 • Nanyuki, Kenya</p>
                          <span className="nl-event-tag">Registration Open</span>
                        </div>
                        <div className="nl-event-item">
                          <h5>Seed School Boot Camp </h5>
                          <p>October 26th - Nov 7, 2025 • Gilgil Training Center</p>
                          <span className="nl-event-tag">Limited Slots</span>
                        </div>
                      </div>

                      <div className="nl-quick-links">
                        <h4>Quick Links</h4>
                        <Link to="/CommunitySeedBankPlatform" className="nl-quick-link">
                          Community Seed Bank Network
                        </Link>
                        <Link to="/incubation-program" className="nl-quick-link">
                          Agroecology Incubation Program
                        </Link>
                        <Link to="/SeedSchool" className="nl-quick-link">
                          Seed School Boot Camp
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Archive */}
          {activeTab === "archive" && (
            <div className="nl-tab-content">
              <div className="nl-section-header">
                <h2>Newsletter Archive</h2>
                <p className="nl-section-intro">
                  Browse our collection of past newsletters and publications
                </p>
              </div>

              <div className="nl-archive-filters">
                <div className="nl-filter-group">
                  <label>Filter by Year:</label>
                  <select>
                    <option>All Years</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                  </select>
                </div>
                <div className="nl-filter-group">
                  <label>Filter by Topic:</label>
                  <select>
                    <option>All Topics</option>
                    <option>Policy</option>
                    <option>Community</option>
                    <option>Innovation</option>
                    <option>Conservation</option>
                  </select>
                </div>
              </div>

              <div className="nl-archive-grid">
                {newsletters.map((newsletter) => (
                  <div key={newsletter.id} className="nl-archive-item">
                    <div className="nl-archive-image">
                      <img src={newsletter.image} alt={newsletter.title} />
                    </div>
                    <div className="nl-archive-content">
                      <h3>{newsletter.title}</h3>
                      <div className="nl-archive-meta">
                        <span className="nl-date">{newsletter.date}</span>
                        <span className="nl-read-time">{newsletter.readTime}</span>
                      </div>
                      <p>{newsletter.excerpt}</p>
                      <div className="nl-tags">
                        {newsletter.tags.map((tag) => (
                          <span key={tag} className="nl-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="nl-read-btn">
                        Coming Soon... <FaArrowRight />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="nl-pagination">
                <button className="nl-pagination-btn">Previous</button>
                <span className="nl-page-number">Page 1 of 3</span>
                <button className="nl-pagination-btn">Next</button>
              </div>
            </div>
          )}

          {/* Subscribe */}
          {activeTab === "subscribe" && (
            <div className="nl-tab-content">
              <div className="nl-subscribe-content">
                <div className="nl-subscribe-grid">
                  <div className="nl-subscribe-info">
                    <h2>Stay Connected</h2>
                    <p className="nl-subscribe-intro">
                      Join our community of 1,000+ subscribers who receive regular updates on seed
                      sovereignty, agroecology innovations, and food system transformation.
                    </p>

                    <div className="nl-benefits-list">
                      <h4>What You'll Receive:</h4>
                      <ul>
                        <li>
                          <FaCheck /> Quarterly digital newsletter with in-depth articles
                        </li>
                        <li>
                          <FaCheck /> Early access to event announcements and registrations
                        </li>
                        <li>
                          <FaCheck /> Exclusive interviews with seed guardians and experts
                        </li>
                        <li>
                          <FaCheck /> Policy updates and advocacy opportunities
                        </li>
                        <li>
                          <FaCheck /> Success stories from our network of community seed banks
                        </li>
                      </ul>
                    </div>

                    <div className="nl-testimonial">
                      <FaQuoteLeft className="nl-quote-icon" />
                      <blockquote>
                        "The Seed Savers newsletter keeps me informed about critical developments in
                        seed sovereignty. It's an invaluable resource for anyone working in
                        sustainable agriculture."
                      </blockquote>
                      <cite>- Dr. Wanjiru, Agricultural Researcher</cite>
                    </div>
                  </div>

                  <div className="nl-subscribe-form-container">
                    {status === "success" ? (
                      <div className="nl-success-message">
                        <div className="nl-success-icon">
                          <FaCheck />
                        </div>
                        <h3>Welcome to Our Community!</h3>
                        <p>
                          Thank you for subscribing to our newsletter. You'll receive a confirmation
                          email shortly with access to our latest issue.
                        </p>
                        <button 
                          className="nl-back-btn" 
                          onClick={() => setStatus("idle")}
                        >
                          Subscribe Another Email
                        </button>
                      </div>
                    ) : (
                      <div className="nl-subscribe-form">
                        <h3>Subscribe to Our Newsletter</h3>
                        
                        {/* Status messages */}
                        {status === "error" && (
                          <p className="nl-error-message">
                            ❌ Something went wrong. Please try again.
                          </p>
                        )}
                        
                        <form 
                          onSubmit={handleNewsletterSubmit}
                          action="https://seedsaverskenya.us2.list-manage.com/subscribe/post?u=f5b8f5616c5e9392c677bdcf2&amp;id=67e58bdfd2&amp;f_id=007f7be1f0"
                          method="post"
                          target="_blank"
                          noValidate
                        >
                          <div className="nl-form-group">
                            <label htmlFor="name">Full Name</label>
                            <input 
                              type="text" 
                              id="name" 
                              name="FNAME"
                              placeholder="Enter your full name" 
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required 
                            />
                          </div>
                          
                          <div className="nl-form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                              type="email"
                              id="email"
                              name="EMAIL"
                              placeholder="Enter your email address"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                          
                          <div className="nl-form-group">
                            <label htmlFor="interest">Primary Interest</label>
                            <select 
                              id="interest"
                              name="INTEREST"
                              value={interest}
                              onChange={(e) => setInterest(e.target.value)}
                            >
                              <option value="">Select your interest</option>
                              <option value="Community Seed Banking">Community Seed Banking</option>
                              <option value="Agroecology Entrepreneurship">Agroecology Entrepreneurship</option>
                              <option value="Policy & Advocacy">Policy & Advocacy</option>
                              <option value="Research & Education">Research & Education</option>
                              <option value="General Updates">General Updates</option>
                            </select>
                          </div>
                          
                          <div className="nl-form-group">
                            <label className="nl-checkbox-label">
                              <input 
                                type="checkbox" 
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                                required 
                              />
                              <span>I agree to receive email updates and newsletters</span>
                            </label>
                          </div>

                          {/* Honeypot field - same as footer */}
                          <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                            <input 
                              type="text" 
                              name="b_f5b8f5616c5e9392c677bdcf2_67e58bdfd2" 
                              tabIndex={-1} 
                              defaultValue="" 
                            />
                          </div>

                          <button 
                            type="submit" 
                            className="nl-subscribe-btn"
                            disabled={status === "loading" || !agreed}
                          >
                            {status === "loading" ? "Subscribing..." : "Subscribe Now"}
                          </button>
                        </form>
                        
                        <p className="nl-privacy-note">
                          We respect your privacy and will never share your information with third
                          parties.
                        </p>

                        {/* Mailchimp response placeholders */}
                        <div id="mce-responses" className="clear foot">
                          <div className="nl-error-message" id="mce-error-response" style={{display:"none"}}></div>
                          <div className="nl-success-message" id="mce-success-response" style={{display:"none"}}></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsletterPage;