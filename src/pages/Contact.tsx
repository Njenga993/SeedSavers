import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import '../styles/Contact.css';
import SpectacularImage from '../assets/Spectacular.jpg';

type ContactMethod = {
  icon: React.ReactNode;
  title: string;
  details: string[];
  description?: string;
};

type OfficeLocation = {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
};

const ContactPage: React.FC = () => {
  const contactMethods: ContactMethod[] = [
    {
      icon: <FaMapMarkerAlt className="method-icon" />,
      title: 'Our Headquarters',
      details: ['123 Seed Street', 'Nairobi, Kenya'],
      description: 'Main administrative office'
    },
    {
      icon: <FaPhone className="method-icon" />,
      title: 'Call Us',
      details: ['+254 712 345 678', '+254 734 567 890'],
      description: 'Monday-Friday, 8am-5pm EAT'
    },
    {
      icon: <FaEnvelope className="method-icon" />,
      title: 'Email Us',
      details: ['info@seedsavers.org', 'support@seedsavers.org']
    }
  ];

  const regionalOffices: OfficeLocation[] = [
    {
      name: 'Nakuru Regional Office',
      address: '456 Conservation Road, Nakuru',
      phone: '+254 701 234 567',
      email: 'nakuru@seedsavers.org',
      hours: 'Mon-Fri: 8:30am-4:30pm'
    },
    {
      name: 'Kisumu Field Office',
      address: '789 Lakeview Drive, Kisumu',
      phone: '+254 723 456 789',
      email: 'kisumu@seedsavers.org',
      hours: 'Mon-Fri: 9:00am-3:00pm'
    },
    {
      name: 'Coastal Outreach Center',
      address: '321 Mangrove Lane, Mombasa',
      phone: '+254 732 345 678',
      email: 'coast@seedsavers.org',
      hours: 'Tue-Sat: 8:00am-2:00pm'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="c-hero-content">
          <h1>Get in Touch</h1>
          <p className="c-hero-subtitle">
            Connect with our team to learn more about our seed conservation efforts
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <div className="contact-container">
        <div className="contact-grid">
          {/* Contact Form */}
          <section className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" required>
                  <option value="">Select a topic</option>
                  <option value="donation">Donation Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="volunteer">Volunteer Program</option>
                  <option value="training">Seed School Information</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" required></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </section>

          {/* Contact Information */}
          <section className="contact-info-section">
            <h2>Contact Information</h2>
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <div key={index} className="contact-method">
                  <div className="method-icon-container">
                    {method.icon}
                  </div>
                  <div className="method-content">
                    <h3>{method.title}</h3>
                    <div className="method-details">
                      {method.details.map((detail, i) => (
                        <p key={i}>{detail}</p>
                      ))}
                    </div>
                    {method.description && (
                      <p className="method-description">{method.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="office-image-container">
              <img 
                src={SpectacularImage} 
                alt="Seed Savers Office" 
                className="office-image"
              />
            </div>
          </section>
        </div>

        {/* Regional Offices */}
        <section className="regional-offices">
          <h2>Our Regional Offices</h2>
          <div className="office-grid">
            {regionalOffices.map((office, index) => (
              <div key={index} className="office-card">
                <h3>{office.name}</h3>
                <div className="office-details">
                  <p>
                    <FaMapMarkerAlt /> {office.address}
                  </p>
                  <p>
                    <FaPhone /> {office.phone}
                  </p>
                  <p>
                    <FaEnvelope /> {office.email}
                  </p>
                  <p>
                    <FaClock /> {office.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <h2>Find Us on the Map</h2>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.854559245747!2d36.82121431475389!3d-1.2729998359806925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0xad2c84e1fb7aec6e!2sNairobi!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Our Location on Map"
            ></iframe>
          </div>
        </section>

        {/* Donation CTA */}
        <section className="donation-cta">
          <div className="donation-content">
            <div className="donation-icon">
              <FaEnvelope />
            </div>
            <h2>Join Our Mailing List</h2>
            <p>
              Stay updated with our latest projects, events, and seed conservation
              efforts by subscribing to our newsletter.
            </p>
            <div className="cta-buttons">
              <a href="/subscribe" className="cta-button">
                Subscribe Now
              </a>
              <a href="/donate" className="cta-button secondary">
                Make a Donation
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;