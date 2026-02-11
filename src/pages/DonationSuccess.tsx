import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import SEO from "../components/SEO";

const DonationSuccess: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve donation info from sessionStorage
    const donationInfo = sessionStorage.getItem('donationInfo');
    if (donationInfo) {
      const info = JSON.parse(donationInfo);
      console.log('Donation successful:', info);
      // Here you can:
      // 1. Send a confirmation email
      // 2. Save the donation to your database
      // 3. Trigger any post-donation actions
      sessionStorage.removeItem('donationInfo');
    }
  }, []);

  return (
    <div className="donation-result-page">
      <SEO
        title="Donation Successful - Seed Savers Kenya"
        description="Thank you for your donation to Seed Savers Kenya. Your contribution helps us conserve indigenous seeds and support farmers."
      />
      <div className="donation-result-container">
        <div className="donation-result-icon">
          <FaCheckCircle />
        </div>
        <h1 className="donation-result-title">Thank You!</h1>
        <p className="donation-result-message">
          Your donation has been successfully processed. 
          Your contribution will help us continue our mission to conserve indigenous seeds 
          and support sustainable agriculture in Kenya.
        </p>
        <p className="donation-result-message">
          A confirmation email has been sent to your email address.
        </p>
        <div className="donation-result-actions">
          <button 
            onClick={() => navigate('/')} 
            className="contact-cta-button"
          >
            Return Home
          </button>
          <button 
            onClick={() => navigate('/contact')} 
            className="contact-cta-button"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationSuccess;