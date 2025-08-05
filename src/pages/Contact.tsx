import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaDonate } from 'react-icons/fa';
import contactHeroImage from '../assets/Spectacular.jpg';
import officeImage from '../assets/Spectacular.jpg';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    alert(`Thank you, ${formData.name}! Your message has been submitted.`);
    setFormData({ name: '', email: '', subject: 'general', message: '' });
  };

  const contactMethods = [
    {
      icon: <FaPhone className="contact-icon" />,
      title: 'Phone',
      details: ['+254 712 345 678', '+254 734 567 890'],
      description: 'Available Monday-Friday, 8am-5pm EAT'
    },
    {
      icon: <FaEnvelope className="contact-icon" />,
      title: 'Email',
      details: ['info@seedsaverskenya.org', 'support@seedsaverskenya.org'],
      description: 'We respond within 24-48 hours'
    },
    {
      icon: <FaMapMarkerAlt className="contact-icon" />,
      title: 'Headquarters',
      details: ['Seed Savers Centre', 'Nakuru, Kenya'],
      description: 'Open to visitors by appointment'
    },
    {
      icon: <FaClock className="contact-icon" />,
      title: 'Working Hours',
      details: ['Monday-Friday: 8am - 5pm', 'Saturday: 9am - 2pm'],
      description: 'Closed on public holidays'
    }
  ];

  const regionalOffices = [
    {
      region: 'Western Kenya',
      address: 'Kisumu Office, Mamboleo Road',
      phone: '+254 723 456 789',
      email: 'western@seedsaverskenya.org'
    },
    {
      region: 'Central Kenya',
      address: 'Nyeri Office, Kimathi Street',
      phone: '+254 724 567 890',
      email: 'central@seedsaverskenya.org'
    },
    {
      region: 'Coastal Kenya',
      address: 'Mombasa Office, Nkrumah Road',
      phone: '+254 725 678 901',
      email: 'coastal@seedsaverskenya.org'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <h1>Get In Touch</h1>
          <p className="hero-subtitle">Connect with us to learn more about seed conservation and sustainable agriculture</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="contact-container">
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="section-title">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="general">General Inquiry</option>
                  <option value="volunteer">Volunteer Opportunity</option>
                  <option value="donation">Donation Question</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="media">Media Request</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-section">
            <h2 className="section-title">Contact Information</h2>
            
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <div className="contact-method" key={index}>
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-content">
                    <h3>{method.title}</h3>
                    <div className="method-details">
                      {method.details.map((detail, i) => (
                        <p key={i}>{detail}</p>
                      ))}
                    </div>
                    <p className="method-description">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="office-image-container">
              <img src={officeImage} alt="Seed Savers Kenya Office" className="office-image" />
            </div>
          </div>
        </div>

        {/* Regional Offices */}
        <section className="regional-offices">
          <h2 className="section-title">Our Regional Offices</h2>
          <div className="office-grid">
            {regionalOffices.map((office, index) => (
              <div className="office-card" key={index}>
                <h3>{office.region}</h3>
                <div className="office-details">
                  <p><FaMapMarkerAlt /> {office.address}</p>
                  <p><FaPhone /> {office.phone}</p>
                  <p><FaEnvelope /> {office.email}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <h2 className="section-title">Find Us</h2>
          <div className="contact-map">
            <iframe
              title="Seed Savers Kenya Location"
              src="https://maps.google.com/maps?q=nakuru%2C%20kenya&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>

      {/* Donation CTA */}
      <section className="donation-cta">
        <div className="container">
          <div className="donation-content">
            <FaDonate className="donation-icon" />
            <h2>Support Our Mission</h2>
            <p>
              Your donation helps preserve indigenous seeds and supports farming communities across Kenya.
            </p>
            <div className="cta-buttons">
              <a href="/donate" className="cta-button">Donate Now</a>
              <a href="/volunteer" className="cta-button secondary">Become a Volunteer</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;