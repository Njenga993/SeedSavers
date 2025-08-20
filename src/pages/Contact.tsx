import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaHandHoldingHeart
} from 'react-icons/fa';
import '../styles/Contact.css';
import SpectacularImage from '../assets/SSN headq.jpeg';

type ContactMethod = {
  icon: React.ReactNode;
  title: string;
  details: string[];
  description?: string;
};



const ContactPage: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState<number>(10);
  const [isRecurring, setIsRecurring] = useState<boolean>(false);
  const [showDonationDetails, setShowDonationDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const toggleDonationDetails = () => {
    setShowDonationDetails(!showDonationDetails);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send email to Seed Savers inbox
    emailjs
      .send(
        'service_gpw095d', // service ID
        'template_ck2k9xf', // main template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'W7z6fDytLu4t06Ihf' // public key
      )
      .then(() => {
        setStatusMessage('✅ Thank you! Your message was sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Send auto-reply to user (non-blocking)
        emailjs
          .send(
            'service_gpw095d',
            'template_hng5blt', // auto-reply template ID
            {
              user_name: formData.name,
              subject: formData.subject,
              reply_to: formData.email
            },
            'W7z6fDytLu4t06Ihf'
          )
          .catch((error) => {
            console.error('Auto-reply failed:', error);
          });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatusMessage('❌ Failed to send the message. Please try again later.');
      });
  };

  const contactMethods: ContactMethod[] = [
    {
      icon: <FaMapMarkerAlt className="method-icon" />,
      title: 'Our Headquarters',
      details: ['Diatomite, Off Nakuru – Nairobi Highway, Gilgil, Kenya P.O. BOX 334 -20116 '],
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
      details: ['info@seedsaverskenya.org']
    }
  ];


  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay">
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
            <form className="contact-form" onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" value={formData.subject} onChange={handleChange} required>
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
                <textarea id="message" value={formData.message} onChange={handleChange} required></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>

              {/* Success/Error Message */}
              {statusMessage && (
                <p className="form-status">{statusMessage}</p>
              )}
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
      and promote sustainable agriculture across Kenya and beyond.
      Every contribution — big or small — makes a lasting impact.
    </p>
    <div className="cta-buttons">
      <button onClick={toggleDonationDetails} className="cta-button">
        {showDonationDetails ? 'Hide Donation Options' : 'Donate Now'}
      </button>
    </div>

    {showDonationDetails && (
      <div className="donation-options">
        <div className="donation-table">
          {/* Offline Donations */}
          <div className="donation-column">
            <h3>Offline Donation</h3>
            <p><strong>Bank Name:</strong> Seed Savers Kenya Bank</p>
            <p><strong>Account Number:</strong> 123456789</p>
            <p><strong>Branch:</strong> Nairobi CBD</p>
            <p><strong>Mobile Money (M-Pesa):</strong> Paybill 123456, Acc: SEEDS</p>
            <p><strong>Email for confirmation:</strong> info@seedsaverskenya.org</p>
          </div>

          {/* Online Donations */}
          <div className="donation-column">
            <h3>Online Donation (PayPal)</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const baseUrl = "https://www.paypal.com/donate";
                const params = new URLSearchParams({
                  business: "your-paypal-email@example.com",
                  amount: donationAmount.toString(),
                  currency_code: "USD",
                  recurring: isRecurring ? "1" : "0"
                });
                window.open(`${baseUrl}?${params}`, "_blank");
              }}
            >
              <label htmlFor="amount">Donation Amount (USD)</label>
              <input
                type="number"
                id="amount"
                value={donationAmount}
                onChange={(e) => setDonationAmount(Number(e.target.value))}
                min="1"
                step="0.01"
                required
              />

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={isRecurring}
                  onChange={(e) => setIsRecurring(e.target.checked)}
                />
                Make this a recurring donation
              </label>

              <button type="submit" className="paypal-btn">
                Proceed to Donation
              </button>
            </form>
          </div>
        </div>
      </div>
    )}
  </div>
</section>
      </div>
    </div>
  );
};

export default ContactPage;
