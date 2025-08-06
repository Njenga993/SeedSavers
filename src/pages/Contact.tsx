import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import '../styles/Contact.css';
import SpectacularImage from '../assets/main.jpeg';

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
      details: ['0712 451777'],
      description: 'Monday-Friday, 8am-5pm EAT'
    },
    {
      icon: <FaEnvelope className="method-icon" />,
      title: 'Email Us',
      details: ['info@seedsavers.org']
    }
  ];

  const regionalOffices: OfficeLocation[] = [
    {
      name: 'Western Field Office',
      address: '456 Conservation Road, Nakuru',
      phone: '+254 701 234 567',
      email: 'info@seedsavers.org',
      hours: 'Mon-Fri: 8:30am-5:00pm'
    },
    {
      name: 'Turkana Field Office',
      address: '789 Lakeview Drive, Kisumu',
      phone: '+254 723 456 789',
      email: 'info@seedsavers.org',
      hours: 'Mon-Fri: 8:30am-5:00pm'
    },
    {
      name: 'Baringo Field Office',
      address: '334 Marigat Main St Baringo, Kenya.',
      phone: '+254 732 345 678',
      email: 'info@seedsavers.org',
      hours: 'Mon-Fri: 8:30am-5:00pm'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="about-hero-overlay">
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
          <h1>Our Regional Offices</h1>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.695390960483!2d36.26753727437194!3d-0.44976953528270935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829a149b3e5b3e5%3A0xcde1f0a37810fe6e!2sSeed%20Savers%20Network%20Training%20and%20Stay!5e0!3m2!1sen!2ske!4v1754466094580!5m2!1sen!2ske"
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