import { 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLeaf, FaPlus, FaMinus 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/footer.css';
import logo from '../assets/ssklogo-.webp';

const Footer = () => {
  const [faqOpen, setFaqOpen] = useState(false);

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

  // FAQ data
  const faqs = [
    [
      { 
        question: "What is Seed Savers Kenya?", 
        answer: "We are a non-profit organization dedicated to preserving indigenous seeds and promoting sustainable agriculture practices across Kenya." 
      },
      { 
        question: "How can I get involved?", 
        answer: "You can participate by volunteering, donating seeds, or supporting our conservation programs. Visit our 'Get Involved' page for more details." 
      },
      { 
        question: "Are your seeds organic?", 
        answer: "Yes, all seeds in our collection are organically grown and free from genetic modification." 
      },
      { 
        question: "Do you offer training programs?", 
        answer: "We conduct regular workshops on seed saving, organic farming, and sustainable agriculture techniques." 
      }
    ],
    [
      { 
        question: "Can I donate seeds?", 
        answer: "Absolutely! We accept donations of indigenous seeds that meet our conservation criteria." 
      },
      { 
        question: "How do you preserve seeds?", 
        answer: "We use both traditional methods and modern seed bank techniques to ensure long-term viability." 
      },
      { 
        question: "Do you distribute seeds to farmers?", 
        answer: "Yes, we work with smallholder farmers to provide access to indigenous seed varieties." 
      },
      { 
        question: "How can I support your work financially?", 
        answer: "You can make donations through our website or participate in our adoption programs." 
      }
    ]
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Logo and About Column */}
            <div className="footer-col logo-col">
              <div className="footer-logo">
                <img 
                  src={logo} 
                  alt="Seed Savers Kenya" 
                  className="logo-img"
                />
                <div className="logo-text">
                  <span className="organic-badge">
                    <FaLeaf /> SEED CONSERVATION
                  </span>
                </div>
              </div>
              <p className="footer-about">
                Preserving agricultural heritage through seed conservation,
                education, and sustainable farming practices for future generations.
              </p>
              <div className="footer-social">
                <a href="https://www.facebook.com/profile.php?id=100064035750734" target='_blank' aria-label="Facebook"><FaFacebookF /></a>
                <a href="https://x.com/Seedsavers_KE" target='_blank' aria-label="Twitter"><FaTwitter /></a>
                <a href="https://www.youtube.com/@seedsaversnetworkkenya8211" target='_blank' aria-label="Youtube"><FaYoutube /></a>
                <a href="https://www.linkedin.com/in/seed-savers-kenya-930346284"  target='_blank' aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="https://www.instagram.com/seedsavers_network" target='_blank' aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="footer-col">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Our Work</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/news-events">News & Events</Link></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="footer-col">
              <h3 className="footer-title">Resources</h3>
              <ul className="footer-links">
                <li><Link to="/resources">Manuals & Publications</Link></li>
                <li><Link to="/resources">Policy Briefs</Link></li>
                <li><Link to="/resources">Seed Exchange App</Link></li>
                <li><Link to="/resources">Reports</Link></li>
                <li><Link to="/resources">Descriptors</Link></li>
              </ul>
            </div>

            {/* Contact + Newsletter Column */}
            <div className="footer-col">
              <h3 className="footer-title">Contact Us Today</h3>
              <ul className="footer-contact">
                <li>
                  <FaMapMarkerAlt />
                  <span>Diatomite, Off Nakuru – Nairobi Highway, Gilgil, Kenya</span>
                </li>
                <li>
                  <FaMapMarkerAlt />
                  <span>P.O. BOX 334 -20116</span>
                </li>
                <li>
                  <FaPhoneAlt />
                  <span>+254-712-451777</span>
                </li>
                <li>
                  <FaEnvelope />
                  <span>info@seedsaverskenya.org</span>
                </li>
              </ul>
              
              {/* Mailchimp Newsletter Form */}
              <div className="footer-newsletter">
                <h4>Subscribe to Newsletter</h4>
                <form 
                  onSubmit={handleNewsletterSubmit}
                  className="footer-newsletter-form"
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <div className="container">
          <button 
            className="faq-toggle" 
            onClick={() => setFaqOpen(!faqOpen)}
            aria-expanded={faqOpen}
            aria-controls="faq-content"
          >
            <h3>Frequently Asked Questions</h3>
            <span className="faq-icon">
              {faqOpen ? <FaMinus /> : <FaPlus />}
            </span>
          </button>
          
          {faqOpen && (
            <div id="faq-content" className="faq-content">
              <div className="faq-grid">
                {faqs.map((row, rowIndex) => (
                  <div key={rowIndex} className="faq-row">
                    {row.map((item, index) => (
                      <div key={index} className="faq-item">
                        <h4 className="faq-question">{item.question}</h4>
                        <p className="faq-answer">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom"> 
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} Seed Savers Network. All rights reserved.</p>
            <p>Powered by <Link to="https://njenga993.github.io/kspace/" target="_blank">kspace</Link></p>
            <div className="footer-legal">
              <Link to="/#">Privacy Policy</Link>
              <Link to="/#">Terms of Service</Link>
              <Link to="/#">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
