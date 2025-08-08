// src/pages/FutureOfIndigenousSeeds.tsx
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowLeft } from 'react-icons/fa';
import SpectacularImage from '../assets/Spectacular.jpg';
import Image from '../assets/vihiga leafy.png';
import '../styles/Blog.css';

const FutureOfIndigenousSeeds = () => {
  return (
    <div className="ssk-blog-post">
      <Link to="/blog" className="ssk-back-button">
        <FaArrowLeft /> Back to Blog
      </Link>

      <h1 className="ssk-post-title">Empowering Communities through Traditional Vegetables</h1>
      
      <div className="ssk-post-meta">
        <span><FaUser /> Seed Savers Team</span>
        <span><FaCalendarAlt /> 15 June 2023</span>
      </div>

      <div className="ssk-post-hero-image">
        <img src={SpectacularImage} alt="Traditional vegetables in Vihiga" />
      </div>

      <div className="ssk-post-content">
        <p className="ssk-post-intro">
          At the heart of Vihiga County, a powerful agricultural transformation is unfolding...
        </p>

        <h2>The Revival of Indigenous Crops</h2>
        <p>For decades, indigenous crops were overlooked...</p>

        <div className="ssk-post-image-container">
          <img src={Image} alt="Farmer holding vegetables" />
        </div>
      </div>
    </div>
  );
};

export default FutureOfIndigenousSeeds;