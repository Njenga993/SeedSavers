// src/components/Footer.tsx
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLeaf, FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/footer.css';
import logo from '../assets/ssklogo-.png';

const Footer = () => {
  const [faqOpen, setFaqOpen] = useState(false);
  
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
                Preserving Kenya's agricultural heritage through seed conservation,
                education, and sustainable farming practices for future generations.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="footer-col">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/our-work">Our Work</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/support">Support Us</Link></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="footer-col">
              <h3 className="footer-title">Resources</h3>
              <ul className="footer-links">
                <li><Link to="/seed-database">Seed Database</Link></li>
                <li><Link to="/guides">Growing Guides</Link></li>
                <li><Link to="/research">Research Papers</Link></li>
                <li><Link to="/training">Training Materials</Link></li>
                <li><Link to="/stories">Success Stories</Link></li>
                <li><Link to="/faq">Full FAQ</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer-col">
              <h3 className="footer-title">Contact Us</h3>
              <ul className="footer-contact">
                <li>
                  <FaMapMarkerAlt />
                  <span>123 Conservation Road, Nairobi, Kenya</span>
                </li>
                <li>
                  <FaPhoneAlt />
                  <span>+254 712 345 678</span>
                </li>
                <li>
                  <FaEnvelope />
                  <span>info@seedsaverskenya.org</span>
                </li>
              </ul>
              
              <div className="newsletter">
                <h4>Subscribe to Newsletter</h4>
                <form className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    required 
                  />
                  <button type="submit">Subscribe</button>
                </form>
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
            <p>&copy; {new Date().getFullYear()} Seed Savers Kenya. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;