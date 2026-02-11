import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaHandHoldingHeart
} from 'react-icons/fa';
import '../styles/contact.css';
import SpectacularImage from '../assets/hero_1.webp';
import SEO from "../components/SEO";

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
  const [donationPhone, setDonationPhone] = useState('');
  const [donationLoading, setDonationLoading] = useState(false);
  const [donationError, setDonationError] = useState<string | null>(null);

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

    emailjs
      .send(
        'service_gpw095d',
        'template_ck2k9xf',
        {
          user_name: formData.name,
          user_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'W7z6fDytLu4t06Ihf'
      )
      .then(() => {
        setStatusMessage('✅ Thank you! Your message was sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });

        emailjs.send(
          'service_gpw095d',
          'template_hng5blt',
          {
            user_name: formData.name,
            subject: formData.subject,
            reply_to: formData.email
          },
          'W7z6fDytLu4t06Ihf'
        ).catch(() => {});
      })
      .catch(() => {
        setStatusMessage('❌ Failed to send the message. Please try again later.');
      });
  };


  const contactMethods: ContactMethod[] = [
    {
      icon: <FaMapMarkerAlt className="contact-method-icon" />,
      title: 'Our Headquarters',
      details: ['Diatomite, Off Nakuru – Nairobi Highway, Gilgil, Kenya P.O. BOX 334 -20116 '],
      description: 'Main administrative office'
    },
    {
      icon: <FaPhone className="contact-method-icon" />,
      title: 'Call Us',
      details: ['0712 451777'],
      description: 'Monday-Friday, 8am-5pm EAT'
    },
    {
      icon: <FaEnvelope className="contact-method-icon" />,
      title: 'Email Us',
      details: ['info@seedsaverskenya.org']
    }
  ];

  return (
    <div className="contact-page">
      <SEO
        title="Contact Seed Savers Network Kenya | Get in Touch for Seed Conservation & Training"
        description="Contact Seed Savers Network Kenya for inquiries on indigenous seed conservation, Seed School training, farmer partnerships, volunteering, and community seed banking."
        url="https://seedsaverskenya.org/contact"
        image={SpectacularImage}
      />

      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <h1>Get in Touch</h1>
          <p className="contact-hero-subtitle">
            Connect with our team to learn more about our seed conservation efforts
          </p>
        </div>
      </section>

      <div className="contact-container">
        <div className="contact-grid">
          <section className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form className="contact-form" onSubmit={sendEmail}>
              <div className="contact-form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="contact-form-group">
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

              <div className="contact-form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" value={formData.message} onChange={handleChange} required />
              </div>

              <button type="submit" className="contact-submit-btn">Send Message</button>
              {statusMessage && <p className="contact-form-status">{statusMessage}</p>}
            </form>
          </section>

          <section className="contact-info-section">
            <h2>Contact Information</h2>
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <div key={index} className="contact-method">
                  <div className="contact-method-icon-container">{method.icon}</div>
                  <div className="contact-method-content">
                    <h3>{method.title}</h3>
                    {method.details.map((detail, i) => <p key={i}>{detail}</p>)}
                    {method.description && <p>{method.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
{/* Donation CTA – UPDATED for Node.js backend */}
<section className="contact-donation-cta">
  <div className="contact-donation-content">
    <div className="contact-donation-icon">
      <FaHandHoldingHeart />
    </div>

    <h2>Support Seed Sovereignty</h2>
    <p>
      Your donation helps us empower farmers, conserve indigenous seeds,
      and promote sustainable agriculture across Kenya and beyond.
    </p>

    <button onClick={toggleDonationDetails} className="contact-cta-button">
      {showDonationDetails ? 'Hide Donation Options' : 'Donate Now'}
    </button>

    {showDonationDetails && (
      <div className="contact-donation-options">
        <div className="contact-donation-table">
          {/* Offline Donations */}
          <div className="contact-donation-column">
            <h3>Offline Donation</h3>
            <p><strong>Bank Name:</strong> Seed Savers Kenya Bank</p>
            <p><strong>Account Number:</strong> 123456789</p>
            <p><strong>Branch:</strong> Nairobi CBD</p>
            <p><strong>Mobile Money (M-Pesa):</strong> Paybill 123456, Acc: SEEDS</p>
          </div>

          {/* Online Donations */}
          <div className="contact-donation-column">
            <h3>Online Donation</h3>

            <label>Donation Amount (USD)</label>
            <input
              type="number"
              min="1"
              value={donationAmount}
              onChange={(e) => setDonationAmount(Number(e.target.value))}
              required
            />

            <label>Phone Number (M-Pesa)</label>
            <input
              type="tel"
              placeholder="2547XXXXXXXX"
              value={donationPhone}
              onChange={(e) => setDonationPhone(e.target.value)}
              required
            />

            <label className="contact-checkbox-label">
              <input
                type="checkbox"
                checked={isRecurring}
                onChange={(e) => setIsRecurring(e.target.checked)}
              />
              Make this a recurring donation
            </label>

            <button
              className="contact-paypal-btn"
              onClick={async () => {
                if (!donationPhone || donationAmount < 1) {
                  setDonationError("Please fill in all required fields.");
                  return;
                }

                setDonationLoading(true);
                setDonationError(null);

                try {
                  const response = await fetch(
                    "https://your-vercel-backend.vercel.app/api/initiate-payment",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        amount: donationAmount,
                        currency: "USD",
                        name: formData.name || "Anonymous",
                        email: formData.email || "donor@example.com",
                        phone: donationPhone,
                        purpose: "Seed Savers Kenya Donation"
                      }),
                    }
                  );

                  const data = await response.json();

                  if (response.ok && data.link) {
                    window.location.href = data.link; // redirect to Flutterwave
                  } else {
                    setDonationError(data.message || "Failed to initiate donation.");
                  }
                } catch (err) {
                  console.error(err);
                  setDonationError("Network error. Please try again.");
                } finally {
                  setDonationLoading(false);
                }
              }}
              disabled={donationLoading}
            >
              {donationLoading ? "Processing..." : "Proceed to Donation"}
            </button>

            {donationError && (
              <p className="contact-form-status">{donationError}</p>
            )}
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