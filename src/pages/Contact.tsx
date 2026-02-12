import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaHandHoldingHeart
} from 'react-icons/fa';
import '../styles/Contact.css';
import SpectacularImage from '../assets/hero_1.webp';
import SEO from "../components/SEO";
import { PayPalButtons } from "@paypal/react-paypal-js";

type ContactMethod = {
  icon: React.ReactNode;
  title: string;
  details: string[];
  description?: string;
};

const ContactPage: React.FC = () => {
  // --- Contact Form State ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // --- Donation State ---
  const [donationAmount, setDonationAmount] = useState<number>(10);
  const [showDonationDetails, setShowDonationDetails] = useState(false);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donationError, setDonationError] = useState<string | null>(null);

  // --- Handlers ---
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

  const handlePresetAmount = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount('');
    setDonationError(null);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    setDonationAmount(0);
    setDonationError(null);
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
      {/* SEO Component - Placed correctly inside JSX */}
      <SEO
        title="Contact Seed Savers Network Kenya | Get in Touch for Seed Conservation & Training"
        description="Contact Seed Savers Network Kenya for inquiries on indigenous seed conservation, Seed School training, farmer partnerships, volunteering, and community seed banking. Our team is ready to help."
        url="https://seedsaverskenya.org/contact"
        image={SpectacularImage}
        keywords={[
          "Seed Savers Kenya contact",
          "Seed Savers Network Kenya contact",
          "seed conservation Kenya",
          "community seed banks Kenya",
          "volunteer agriculture Kenya",
          "agroecology training Kenya",
          "seed school Kenya",
          "farmer seed systems",
          "seed donation Kenya",
          "seed sovereignty Kenya"
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Seed Savers Network Kenya",
          url: "https://seedsaverskenya.org",
          logo: "https://seedsaverskenya.org/logo.png",
          email: "info@seedsaverskenya.org",
          telephone: "+254712451777",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Diatomite, Off Nakuru – Nairobi Highway",
            addressLocality: "Gilgil",
            addressRegion: "Nakuru",
            postalCode: "20116",
            addressCountry: "KE"
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+254712451777",
            email: "info@seedsaverskenya.org",
            contactType: "customer support",
            areaServed: ["KE", "Africa"],
            availableLanguage: ["English", "Swahili"]
          }
        }}
      />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <h1>Get in Touch</h1>
          <p className="contact-hero-subtitle">
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
                <textarea id="message" value={formData.message} onChange={handleChange} required></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message
              </button>

              {/* Success/Error Message */}
              {statusMessage && (
                <p className="contact-form-status">{statusMessage}</p>
              )}
            </form>
          </section>

          {/* Contact Information */}
          <section className="contact-info-section">
            <h2>Contact Information</h2>
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <div key={index} className="contact-method">
                  <div className="contact-method-icon-container">
                    {method.icon}
                  </div>
                  <div className="contact-method-content">
                    <h3>{method.title}</h3>
                    <div className="contact-method-details">
                      {method.details.map((detail, i) => (
                        <p key={i}>{detail}</p>
                      ))}
                    </div>
                    {method.description && (
                      <p className="contact-method-description">{method.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-office-image-container">
              <img
                src={SpectacularImage}
                alt="Seed Savers Office"
                className="contact-office-image"
              />
            </div>
          </section>
        </div>

        {/* Map Section */}
        <section className="contact-map-section">
          <h2>Find Us on the Map</h2>
          <div className="contact-map-container">
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

        {/* Donation CTA - With Improved UX and Logic */}
        <section className="contact-donation-cta">
          <div className="contact-donation-content">
            <div className="contact-donation-icon">
              <FaHandHoldingHeart />
            </div>
            <h2>Support Seed Sovereignty</h2>
            <p>
              Your donation helps us empower farmers, conserve indigenous seeds,
              and promote sustainable agriculture across Kenya and beyond.
              Every contribution — big or small — makes a lasting impact.
            </p>
            <div className="contact-cta-buttons">
              <button onClick={toggleDonationDetails} className="contact-cta-button">
                {showDonationDetails ? 'Hide Donation Options' : 'Donate Now'}
              </button>
            </div>

            {showDonationDetails && (
              <div className="contact-donation-options">
                <div className="contact-donation-table">
                  {/* Offline Donations */}
                  <div className="contact-donation-column contact-donation-offline">
                    <h3>Offline Donation</h3>
                    <div className="offline-details">
                      <p><strong>Bank Name:</strong> Seed Savers Kenya Bank</p>
                      <p><strong>Account Number:</strong> 123456789</p>
                      <p><strong>Branch:</strong> Nairobi CBD</p>
                      <p><strong>Mobile Money (M-Pesa):</strong> Paybill 123456, Acc: SEEDS</p>
                      <p><strong>Email for confirmation:</strong> info@seedsaverskenya.org</p>
                    </div>
                  </div>

                  {/* Online Donations - PayPal */}
                  <div className="contact-donation-column contact-donation-online">
                    <h3>Online Donation (PayPal)</h3>
                    
                    {/* The form is now just for collecting donor info, not for submission */}
                    <div className="donation-form-container">
                      {/* Donor Info */}
                      <div className="donor-info">
                        <label>Full Name *</label>
                        <input
                          type="text"
                          value={donorName}
                          onChange={(e) => {
                            setDonorName(e.target.value);
                            setDonationError(null);
                          }}
                          placeholder="Enter your full name"
                          required
                        />
                        <label>Email Address *</label>
                        <input
                          type="email"
                          value={donorEmail}
                          onChange={(e) => {
                            setDonorEmail(e.target.value);
                            setDonationError(null);
                          }}
                          placeholder="Enter your email"
                          required
                        />
                      </div>

                      {/* Amount Selection */}
                      <div className="amount-wrapper">
                        <label>Select Amount (USD)</label>
                        <div className="preset-amounts">
                          {[10, 25, 50, 100, 250].map(amount => (
                            <button
                              key={amount}
                              type="button"
                              className={`amount-button ${donationAmount === amount && !customAmount ? 'active' : ''}`}
                              onClick={() => handlePresetAmount(amount)}
                            >
                              ${amount}
                            </button>
                          ))}
                        </div>
                        <div className="custom-amount-wrapper">
                          <span className="currency-symbol">$</span>
                          <input
                            type="number"
                            min="1"
                            step="0.01"
                            placeholder="Custom Amount"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                            className="custom-amount-input"
                          />
                        </div>
                      </div>

                      {/* Display any donation-related errors here */}
                      {donationError && (
                        <div className="donation-error-message">
                          {donationError}
                        </div>
                      )}

                      {/* --- IMPROVED PAYPAL BUTTONS --- */}
                      <PayPalButtons
                        style={{ layout: "vertical" }}
                        disabled={!donorName || !donorEmail || (!customAmount && donationAmount === 0)}
                        createOrder={async (_, __) => {
                          setDonationError(null);
                          try {
                            const finalAmount = customAmount || donationAmount;
                            if (finalAmount ) {
                              throw new Error("Donation amount must be at least $1.");
                            }

                            const response = await fetch("https://seed-backend-vercel-3hzr.vercel.app/api/create-order", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ amount: finalAmount }),
                            });

                            if (!response.ok) {
                                const errorText = await response.text();
                                console.error("Backend Error Response:", errorText);
                                throw new Error(`Server error: ${response.status}`);
                            }

                            const orderData = await response.json();
                            return orderData.id;
                          } catch (error: any) {
                            console.error("Error creating PayPal order:", error);
                            setDonationError(error.message || "Could not initiate the donation. Please try again.");
                            // Returning a rejected promise prevents the PayPal popup from opening
                            return Promise.reject(error);
                          }
                        }}
                        onApprove={async (data, _) => {
                          try {
                            const response = await fetch("https://seed-backend-vercel-3hzr.vercel.app/api/capture-order", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ orderID: data.orderID }),
                            });

                            if (!response.ok) {
                                const errorText = await response.text();
                                console.error("Backend Capture Error:", errorText);
                                throw new Error(`Payment processing failed: ${response.status}`);
                            }

                            const details = await response.json();
                            console.log("Payment successful:", details);
                            
                            // --- SUCCESS: Reset form and show success message ---
                            alert("Thank you! Your donation was successful.");
                            setDonorName('');
                            setDonorEmail('');
                            setCustomAmount('');
                            setDonationAmount(10);
                            setDonationError(null);

                          } catch (error: any) {
                            console.error("Error capturing PayPal order:", error);
                            setDonationError(error.message || "There was an issue processing your donation. Please contact support if the problem persists.");
                          }
                        }}
                        onError={(err) => {
                          console.error("PayPal button onError:", err);
                          setDonationError("An unexpected error occurred with the payment provider. Please try again.");
                        }}
                      />
                    </div>
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