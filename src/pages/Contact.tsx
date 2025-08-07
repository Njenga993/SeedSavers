import React, { useState } from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaHandHoldingHeart
} from 'react-icons/fa';
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
  const [showDonationDetails, setShowDonationDetails] = useState(false);

  const toggleDonationDetails = () => {
    setShowDonationDetails(!showDonationDetails);
  };

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
              <FaHandHoldingHeart />
            </div>
            <h2>Support Seed Sovereignty</h2>
            <p>
              Your donation helps us empower farmers, conserve indigenous seeds,
              and promote sustainable agriculture across Kenya and beyond. Every
              contribution — big or small — makes a lasting impact.
            </p>
            <div className="cta-buttons">
              <button onClick={toggleDonationDetails} className="cta-button">
                {showDonationDetails ? 'Hide Donation Details' : 'Donate Now'}
              </button>
              <a href="/partnerships" className="cta-button secondary">
                Partner With Us
              </a>
            </div>
            {showDonationDetails && (
              <div className="donation-details">
                <h3>Donation Instructions</h3>
                <p><strong>Bank Name:</strong> Seed Savers Kenya Bank</p>
                <p><strong>Account Number:</strong> 123456789</p>
                <p><strong>Branch:</strong> Nairobi CBD</p>
                <p><strong>Mobile Money (M-Pesa):</strong> Paybill 123456, Acc: SEEDS</p>
                <p><strong>Email for confirmation:</strong> donate@seedsaverskenya.org</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
