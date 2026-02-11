import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimesCircle } from 'react-icons/fa';
import SEO from "../components/SEO";

const DonationCancelled: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="donation-result-page">
      <SEO
        title="Donation Cancelled - Seed Savers Kenya"
        description="Your donation was cancelled. You can try again or contact us for assistance with your donation."
      />
      <div className="donation-result-container">
        <div className="donation-result-icon" style={{ color: '#ff6b6b' }}>
          <FaTimesCircle />
        </div>
        <h1 className="donation-result-title">Donation Cancelled</h1>
        <p className="donation-result-message">
          Your donation was cancelled. No charges were made to your account.
        </p>
        <p className="donation-result-message">
          If you encountered any issues or would like to try again, please feel free to contact us.
        </p>
        <div className="donation-result-actions">
          <button 
            onClick={() => navigate('/contact')} 
            className="contact-cta-button"
          >
            Try Again
          </button>
          <button 
            onClick={() => navigate('/')} 
            className="contact-cta-button"
          >
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCancelled;